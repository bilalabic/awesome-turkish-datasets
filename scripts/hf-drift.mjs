// SPDX-License-Identifier: Apache-2.0
// Compares catalog entries hosted on Hugging Face with the live Hugging Face API.
// Usage: node scripts/hf-drift.mjs [--json]
// Exit code: 0 when every finding is in scripts/hf-drift.baseline.json, 2 otherwise.
import { readFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONCURRENCY = 4;
const RETRIES = 2;
const TIMEOUT_MS = 20000;
const MIGRATION_STAMP = '2022-03-02';

const LICENCES = {
  'cc-by-4.0': 'CC BY 4.0', 'cc-by-sa-4.0': 'CC BY-SA 4.0', 'cc-by-nc-4.0': 'CC BY-NC 4.0',
  'cc-by-nc-sa-4.0': 'CC BY-NC-SA 4.0', 'cc-by-nd-4.0': 'CC BY-ND 4.0', 'cc-by-3.0': 'CC BY 3.0',
  'cc-by-sa-3.0': 'CC BY-SA 3.0', 'cc-by-2.0': 'CC BY 2.0', 'cc0-1.0': 'CC0 1.0',
  'apache-2.0': 'Apache-2.0', 'mit': 'MIT', 'odc-by': 'ODC Attribution',
  'cdla-permissive-2.0': 'CDLA-Permissive-2.0', 'gemma': 'Gemma Terms of Use',
};
// Catalog access values that mean "behind a gate of some kind".
const GATED_ACCESS = new Set(['Gated', 'Application Required', 'Registration Required']);

const sleep = ms => new Promise(r => setTimeout(r, ms));

function hfId(url) {
  const m = /^https:\/\/huggingface\.co\/datasets\/([^/?#]+)\/([^/?#]+)\/?$/.exec(url || '');
  return m ? `${m[1]}/${m[2]}` : null;
}

async function fetchApi(id) {
  const url = `https://huggingface.co/api/datasets/${id}`;
  let last = { status: 0, error: 'no attempt' };
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS), headers: { 'user-agent': 'hf-drift-check' } });
      if (res.status === 200) return { status: 200, data: await res.json() };
      await res.body?.cancel().catch(() => {});
      last = { status: res.status };
      if (res.status === 404 || res.status === 401 || res.status === 403) return last;
      if (attempt < RETRIES) {
        const retryAfter = Number(res.headers.get('retry-after'));
        const wait = res.status === 429 ? (retryAfter > 0 ? Math.min(retryAfter, 60) * 1000 : 5000 * 2 ** attempt) : 1000 * (attempt + 1);
        await sleep(wait);
      }
    } catch (e) {
      last = { status: 0, error: String(e?.cause?.code || e?.name || e).slice(0, 60) };
      if (attempt < RETRIES) await sleep(1000 * (attempt + 1));
    }
  }
  return last;
}

async function pool(items, n, fn) {
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) await fn(items[i++]);
  }));
}

function cardLicence(d) {
  let v = d.cardData?.license;
  if (v == null) v = (d.tags || []).filter(t => t.startsWith('license:')).map(t => t.slice(8));
  if (Array.isArray(v)) v = v.length === 1 ? v[0] : v.join(', ');
  return v ? String(v) : '';
}

function check(entry, id, api) {
  const out = [];
  const add = (kind, catalog, hf) => out.push({ dataset: entry.dataset, kind, catalog: String(catalog ?? ''), hf: String(hf ?? '') });
  if (api.status !== 200) {
    if ([404, 401, 403].includes(api.status)) add('missing', id, `HTTP ${api.status}`);
    else add('error', id, `HTTP ${api.status || api.error}`);
    return out;
  }
  const d = api.data;
  if (d.private || d.disabled) { add('missing', id, d.private ? 'private' : 'disabled'); return out; }
  if (d.id && d.id.toLowerCase() !== id.toLowerCase()) add('renamed', id, d.id);

  const released = String(entry.released || '');
  const created = String(d.createdAt || '');
  if (released && created && !created.startsWith(MIGRATION_STAMP) && created.slice(0, released.length) < released) {
    add('date', released, created.slice(0, 10));
  }

  const catLic = String(entry.license || '').trim();
  if (catLic) {
    const raw = cardLicence(d);
    const mapped = LICENCES[raw.toLowerCase()];
    if (!mapped) add('licence-unmapped', catLic, raw || '(none)');
    else if (mapped !== catLic) add('licence', catLic, mapped);
  }

  const hfGated = d.gated != null && d.gated !== false;
  const catGated = GATED_ACCESS.has(entry.access);
  if (hfGated !== catGated) add('gated', entry.access, hfGated ? `gated (${d.gated})` : 'open');
  return out;
}

const esc = s => String(s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
function table(rows) {
  const head = '| Dataset | Kind | Catalog | Hugging Face |\n| --- | --- | --- | --- |\n';
  return head + rows.map(r => `| ${esc(r.dataset)} | ${r.kind} | ${esc(r.catalog)} | ${esc(r.hf)} |`).join('\n') + '\n';
}

const json = process.argv.includes('--json');
const catalog = JSON.parse(readFileSync(path.join(ROOT, 'datasets.json'), 'utf8'));
const baseline = JSON.parse(readFileSync(path.join(ROOT, 'scripts', 'hf-drift.baseline.json'), 'utf8'));
const accepted = new Set(baseline.map(b => `${b.dataset}\u0000${b.kind}`));

const targets = catalog.map(e => ({ entry: e, id: hfId(e.sourceUrl) })).filter(t => t.id);
const cache = new Map();
const apiFor = id => { if (!cache.has(id)) cache.set(id, fetchApi(id)); return cache.get(id); };
const findings = [];
await pool(targets, CONCURRENCY, async ({ entry, id }) => {
  findings.push(...check(entry, id, await apiFor(id)));
});
const order = new Map(catalog.map((e, i) => [e.dataset, i]));
findings.sort((a, b) => order.get(a.dataset) - order.get(b.dataset) || a.kind.localeCompare(b.kind));

const fresh = findings.filter(f => !accepted.has(`${f.dataset}\u0000${f.kind}`));
const counts = {};
for (const f of findings) counts[f.kind] = (counts[f.kind] || 0) + 1;

if (json) {
  console.log(JSON.stringify({ checked: targets.length, counts, findings, new: fresh }, null, 1));
} else {
  let md = `Checked ${targets.length} Hugging Face entries: ${findings.length} findings, ${findings.length - fresh.length} in the baseline, ${fresh.length} new.\n\n`;
  md += `Findings by kind: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}\n\n`;
  md += fresh.length ? `### New findings\n\n${table(fresh)}` : 'No new findings.\n';
  console.log(md);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md);
}
process.exit(fresh.length ? 2 : 0);
