#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
//
// Validates datasets.json and checks that README.md matches it.
//
//   node scripts/check.mjs [--today YYYY-MM-DD]
//
// Prints every error and exits 1 if there is at least one. No dependencies.
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { KEYS, CATEGORIES, entryText, sortSection } from './build.mjs';

const ACCESS = ['Open', 'Gated', 'Registration Required', 'Application Required', 'Paid'];
const LABELS = { 'Text, NLP & LLM': 'text/NLP', 'Speech & Audio': 'speech', 'Vision, OCR & Multimodal': 'vision/multimodal' };
const root = resolve(import.meta.dirname, '..');

const args = process.argv.slice(2);
let today = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--today' && args[i + 1]) today = args[++i];
  else { console.error('Usage: node scripts/check.mjs [--today YYYY-MM-DD]'); process.exit(2); }
}
if (!today) {
  const n = new Date(), p = v => String(v).padStart(2, '0');
  today = `${n.getFullYear()}-${p(n.getMonth() + 1)}-${p(n.getDate())}`;
}

const errors = [];
const err = (name, msg) => errors.push(`${name ? name + ': ' : ''}${msg}`);
const q = JSON.stringify;

let data;
let readme;
try { data = JSON.parse(readFileSync(join(root, 'datasets.json'), 'utf8').replace(/^\uFEFF/, '')); }
catch (e) { console.error(`Cannot read datasets.json: ${e.message}`); process.exit(2); }
try { readme = readFileSync(join(root, 'README.md'), 'utf8').replace(/^\uFEFF/, ''); }
catch (e) { console.error(`Cannot read README.md: ${e.message}`); process.exit(2); }
if (!Array.isArray(data)) { console.error('datasets.json must contain a top-level array'); process.exit(2); }

// ---- entry shape and values
const daysIn = (y, m) => (m === 2 ? ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28) : [4, 6, 9, 11].includes(m) ? 30 : 31);
const isHttp = v => {
  if (/\s/.test(v)) return false;
  try { const u = new URL(v); return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname !== ''; } catch { return false; }
};
const entries = [];
data.forEach((e, i) => {
  const name = e && typeof e.dataset === 'string' && e.dataset ? e.dataset : `#${i}`;
  if (e === null || typeof e !== 'object' || Array.isArray(e)) return err(name, 'entry is not an object');
  const keys = Object.keys(e);
  const missing = KEYS.filter(k => !keys.includes(k));
  const extra = keys.filter(k => !KEYS.includes(k));
  if (missing.length) err(name, `missing keys: ${missing.join(', ')}`);
  if (extra.length) err(name, `unexpected keys: ${extra.join(', ')}`);
  if (!missing.length && !extra.length && keys.some((k, j) => k !== KEYS[j])) err(name, `keys are not in the documented order (found: ${keys.join(', ')})`);
  const clean = {};
  for (const k of KEYS) {
    const v = e[k];
    if (!(k in e)) { clean[k] = ''; continue; }
    if (typeof v !== 'string') { err(name, `${k} must be a string`); clean[k] = ''; continue; }
    if (v !== v.trim()) err(name, `${k} has leading or trailing whitespace: ${q(v)}`);
    if (/[\u0000-\u001f\u007f]/.test(v)) err(name, `${k} contains a control character or line break`);
    clean[k] = v;
  }
  if (!clean.dataset) err(name, 'dataset name is empty');
  if (!CATEGORIES.includes(clean.category)) err(name, `category ${q(clean.category)} is not one of the three sections`);
  if (clean.access !== '' && !ACCESS.includes(clean.access)) err(name, `access ${q(clean.access)} is not one of: ${ACCESS.join(', ')}`);
  if (clean.released !== '') {
    const m = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(clean.released);
    if (!m) err(name, `released ${q(clean.released)} does not match YYYY, YYYY-MM or YYYY-MM-DD`);
    else {
      const [y, mo, d] = [Number(m[1]), m[2] === undefined ? null : Number(m[2]), m[3] === undefined ? null : Number(m[3])];
      if (y < 1 || (mo !== null && (mo < 1 || mo > 12)) || (d !== null && (d < 1 || d > daysIn(y, mo)))) err(name, `released ${q(clean.released)} is not a real date`);
      else {
        const [ty, tm, td] = today.split('-').map(Number);
        const after = y !== ty ? y > ty : mo === null ? false : mo !== tm ? mo > tm : d === null ? false : d > td;
        if (after) err(name, `released ${q(clean.released)} is after today (${today})`);
      }
    }
  }
  if (!isHttp(clean.sourceUrl)) err(name, `sourceUrl is not a valid http(s) URL: ${q(clean.sourceUrl)}`);
  if (clean.downloadUrl !== '' && !isHttp(clean.downloadUrl)) err(name, `downloadUrl is not a valid http(s) URL: ${q(clean.downloadUrl)}`);
  entries.push(clean);
});

const seen = new Map();
for (const e of entries) seen.set(e.dataset, (seen.get(e.dataset) || 0) + 1);
for (const [n, c] of seen) if (c > 1) err(n, `dataset name appears ${c} times`);

// ---- README parsing
const lines = readme.replace(/\r\n?/g, '\n').split('\n');
const sections = new Map();
const counts = { total: null, byLabel: {}, contents: {} };
let cur = null;
lines.forEach((line, i) => {
  const t = /^\*\*(\d[\d,]*) datasets\*\* — (.*)$/.exec(line);
  if (t) {
    counts.total = Number(t[1].replace(/,/g, ''));
    for (const part of t[2].split(' · ')) { const m = /^(\d[\d,]*) (.+)$/.exec(part.trim()); if (m) counts.byLabel[m[2]] = Number(m[1].replace(/,/g, '')); }
    return;
  }
  const c = /^- \[(.+?)\]\(#[^)]*\) \((\d[\d,]*)\)\s*$/.exec(line);
  if (c && CATEGORIES.includes(c[1])) { counts.contents[c[1]] = Number(c[2].replace(/,/g, '')); return; }
  const h = /^##\s+(.+?)\s*$/.exec(line);
  if (h) {
    cur = CATEGORIES.includes(h[1]) ? { entries: [] } : null;
    if (cur) { if (sections.has(h[1])) err(null, `section "${h[1]}" appears twice`); sections.set(h[1], cur); }
    return;
  }
  if (!cur) return;
  const m = /^- \*\*\[(.*?)\]\(.*?\)\*\*/.exec(line);
  if (m) {
    const next = lines[i + 1];
    cur.entries.push({ name: m[1], text: line + (next !== undefined && /^ {2}\S/.test(next) ? '\n' + next : ''), lineNo: i + 1 });
  }
});
for (const c of CATEGORIES) if (!sections.has(c)) err(null, `README has no "## ${c}" section`);

// ---- README and JSON sync
const byName = new Map(entries.map(e => [e.dataset, e]));
const inReadme = new Map();
for (const [cat, s] of sections) {
  for (const r of s.entries) {
    if (inReadme.has(r.name)) { err(r.name, `listed twice in README (lines ${inReadme.get(r.name).lineNo} and ${r.lineNo})`); continue; }
    inReadme.set(r.name, { ...r, cat });
  }
}
for (const e of entries) {
  const r = inReadme.get(e.dataset);
  if (!r) { err(e.dataset, `in datasets.json (${e.category}) but missing from README`); continue; }
  if (r.cat !== e.category) err(e.dataset, `README lists it under "${r.cat}" (line ${r.lineNo}) but datasets.json says "${e.category}"`);
  if (r.text !== entryText(e)) err(e.dataset, `README line ${r.lineNo} differs from datasets.json: expected ${q(entryText(e))}, found ${q(r.text)}`);
}
for (const [n, r] of inReadme) if (!byName.has(n)) err(n, `in README (${r.cat}, line ${r.lineNo}) but missing from datasets.json`);

// ---- totals
const per = Object.fromEntries(CATEGORIES.map(c => [c, entries.filter(e => e.category === c).length]));
if (counts.total === null) err(null, 'header totals line ("**N datasets** — …") not found in README');
else {
  if (counts.total !== entries.length) err(null, `header says ${counts.total} datasets but datasets.json has ${entries.length}`);
  for (const c of CATEGORIES) if (counts.byLabel[LABELS[c]] !== per[c]) err(null, `header says ${counts.byLabel[LABELS[c]]} ${LABELS[c]} but datasets.json has ${per[c]} in "${c}"`);
}
for (const c of CATEGORIES) if (counts.contents[c] !== per[c]) err(null, `Contents says ${counts.contents[c]} for "${c}" but datasets.json has ${per[c]}`);

// ---- README order (newest first, undated last)
for (const c of CATEGORIES) {
  const s = sections.get(c);
  if (!s) continue;
  const want = sortSection(entries.filter(e => e.category === c)).map(e => e.dataset);
  const have = s.entries.map(r => r.name).filter(n => byName.get(n)?.category === c);
  const at = have.findIndex((n, i) => n !== want[i]);
  if (at >= 0 && have.length === want.length) err(null, `${c}: order differs from the sort rule at position ${at + 1}: expected "${want[at]}", found "${have[at]}"`);
}

console.log(`check: ${entries.length} entries (${CATEGORIES.map(c => `${per[c]} ${LABELS[c]}`).join(' · ')}), ${inReadme.size} in README`);
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  errors.forEach(m => console.log('  ' + m));
  process.exit(1);
}
console.log('No errors.');
