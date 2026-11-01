#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
//
// Builds the static site from _web/ and datasets.json.
//
//   node scripts/build-site.mjs [--out _site]
//
// The catalog table is pre-rendered so crawlers and readers without JavaScript see it.
// Every entry also gets a page at d/<slug>/. Output is deterministic and is never committed.
// No dependencies.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { CATEGORIES, sortSection } from './build.mjs';

const BASE = 'https://bilalabic.github.io/awesome-turkish-datasets/';
const REPO = 'https://github.com/bilalabic/awesome-turkish-datasets';
const METHODOLOGY = `${REPO}/blob/main/METHODOLOGY.md`;
const SITE_NAME = 'Awesome Turkish Datasets';
const SITE_TAGLINE = 'A verified catalog of datasets for Turkish NLP, LLMs, speech and vision';
const OG_IMAGE = `${BASE}og.png`;
const ABOUT_PLACEHOLDER = '<p class="subtitle about" id="aboutLine">Turkish datasets, each checked against its own source.</p>';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
if (args.some((a, i) => a !== '--out' && i !== outIndex + 1) || (outIndex !== -1 && !args[outIndex + 1])) {
  console.error('Usage: node scripts/build-site.mjs [--out _site]');
  process.exit(2);
}
const root = resolve(import.meta.dirname, '..');
const out = resolve(outIndex === -1 ? '_site' : args[outIndex + 1]);

const read = file => readFileSync(join(root, file), 'utf8').replace(/\r\n/g, '\n');
const html = read('_web/index.html');
const data = JSON.parse(read('datasets.json'));

// ---------------------------------------------------------------- helpers

// Replace exactly one occurrence, so a changed template fails the build loudly.
function swap(text, from, to) {
  if (text.split(from).length !== 2) throw new Error(`index.html: expected exactly one of: ${from}`);
  return text.replace(from, () => to);
}

const esc = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// JSON inside a <script> block must not be able to close it.
const jsonLd = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const dash = value => (value && String(value).trim()) || '—';

function safeUrl(value) {
  if (!value || value === '—') return '';
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

// Same rules as the client, so the pre-rendered order is the order the page shows first.
function normalizeDate(value) {
  const match = value.trim().match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
  if (!match) return 0;
  const year = Number(match[1]);
  const month = Number(match[2] || 1);
  const day = Number(match[3] || 1);
  if (month < 1 || month > 12 || day < 1 || day > 31) return 0;
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return 0;
  return timestamp;
}
const newestFirst = (a, b) =>
  normalizeDate(dash(b.released)) - normalizeDate(dash(a.released)) || a.dataset.localeCompare(b.dataset, 'tr');

function accessClass(access) {
  const value = access.toLowerCase();
  if (value === 'open') return 'open';
  if (value === 'gated' || value.includes('required')) return 'gated';
  if (value === 'paid') return 'paid';
  return '';
}

const taskLabels = e => (e.task || '').split(';').map(t => t.trim()).filter(t => t && t !== '—');

// ---------------------------------------------------------------- slugs

// The slug function lives once, in index.html, between the marker comments.
const slugSource = html.match(/\/\/ slug:start\n([\s\S]*?)\/\/ slug:end/);
if (!slugSource) throw new Error('index.html: slug:start / slug:end markers not found');
const { assignSlugs } = new Function(`${slugSource[1]}\nreturn { assignSlugs };`)();

const slugs = assignSlugs(data.map(e => e.dataset), (name, slug) =>
  console.warn(`Warning: slug collision for "${name}", using "${slug}"`));
data.forEach((e, i) => { e.slug = slugs[i]; });
const pageUrl = e => `${BASE}d/${e.slug}/`;

// ---------------------------------------------------------------- counts

const count = category => data.filter(e => e.category === category).length;
const [nText, nSpeech, nVision] = CATEGORIES.map(count);
const aboutLine = `${data.length.toLocaleString('en-US')} datasets: ${nText.toLocaleString('en-US')} text, ${nSpeech.toLocaleString('en-US')} speech, ${nVision.toLocaleString('en-US')} vision. Each one is checked against its own source.`;

// ---------------------------------------------------------------- index

function renderRow(item) {
  const name = esc(item.dataset);
  // data-label feeds the stacked-card layout on narrow screens
  const cell = (text, label, cls = '') => `<td${cls ? ` class="${cls}"` : ''} data-label="${label}">${esc(dash(text))}</td>`;
  const sourceUrl = safeUrl(item.sourceUrl);
  const source = sourceUrl
    ? `<a class="source-link" href="${esc(sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Source of ${name} (opens in a new tab)">Source ↗\uFE0E</a>`
    : '';
  const access = dash(item.access);
  const downloadUrl = safeUrl(item.downloadUrl);
  const label = dash(item.downloadLabel);
  const download = downloadUrl
    ? `<a class="download-link" href="${esc(downloadUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Files for ${name} (opens in a new tab)">${esc(label === '—' ? 'Open' : label)} ↗\uFE0E</a>`
    : '—';
  return [
    '<tr>',
    cell(item.released, 'Released'),
    `<td data-label="Dataset"><a class="dataset-name" href="./d/${item.slug}/">${name}</a>${source}</td>`,
    `<td data-label="Category"><span class="pill category-pill">${esc(dash(item.category))}</span></td>`,
    cell(item.description, 'Description', 'description'),
    cell(item.size, 'Size'),
    cell(item.scale, 'Scale', 'scale'),
    cell(item.task, 'Task', 'task'),
    cell(item.license, 'License', 'license'),
    `<td data-label="Access"><span class="${`pill ${accessClass(access)}`.trim()}">${esc(access)}</span></td>`,
    `<td data-label="Download">${download}</td>`,
    '</tr>'
  ].join('');
}

const indexLd = {
  '@context': 'https://schema.org',
  '@type': 'DataCatalog',
  name: SITE_NAME,
  alternateName: ['Türkçe Veri Setleri Kataloğu', 'Turkish Datasets Catalog'],
  description: `${SITE_TAGLINE}. ${data.length} datasets, each checked against its own source.`,
  url: BASE,
  inLanguage: 'en',
  about: { '@type': 'Language', name: 'Turkish', alternateName: 'tr' },
  license: 'https://creativecommons.org/licenses/by/4.0/',
  dataset: data.map(e => ({ '@type': 'Dataset', name: e.dataset, url: pageUrl(e) }))
};

let index = html;
index = swap(index, '<main class="page" id="app" hidden>', '<main class="page" id="app">');
index = swap(index, '<tbody id="datasetBody"></tbody>',
  `<tbody id="datasetBody">\n${[...data].sort(newestFirst).map(renderRow).join('\n')}\n</tbody>`);
// The default sort label comes from the template, so the no-JS line matches what render() prints first.
const defaultSort = html.match(/<option value="date-desc">([^<]*)<\/option>/);
if (!defaultSort) throw new Error('index.html: date-desc sort option not found');
index = swap(index, '<span id="resultCount" aria-live="polite">Loading catalog…</span>',
  `<span id="resultCount" aria-live="polite">Showing ${data.length.toLocaleString('en-US')} of ${data.length.toLocaleString('en-US')} · sorted by ${defaultSort[1]}</span>`);
index = swap(index, '<span class="stat-value" id="totalStat">—</span>', `<span class="stat-value" id="totalStat">${data.length.toLocaleString('en-US')}</span>`);
index = swap(index, '<span class="stat-value" id="textStat">—</span>', `<span class="stat-value" id="textStat">${nText.toLocaleString('en-US')}</span>`);
index = swap(index, '<span class="stat-value" id="speechStat">—</span>', `<span class="stat-value" id="speechStat">${nSpeech.toLocaleString('en-US')}</span>`);
index = swap(index, '<span class="stat-value" id="visionStat">—</span>', `<span class="stat-value" id="visionStat">${nVision.toLocaleString('en-US')}</span>`);
index = swap(index, ABOUT_PLACEHOLDER, `<p class="subtitle about" id="aboutLine">${esc(aboutLine)}</p>`);
index = swap(index, '</head>', `  ${jsonLd(indexLd)}\n</head>`);

// ---------------------------------------------------------------- detail pages

const styleBlock = html.match(/<style>[\s\S]*?<\/style>/)[0];
const detailStyle = `<style>
    .page.detail { width: min(860px, calc(100% - 32px)); }
    .crumbs { margin: 0 0 16px; color: var(--muted); font-size: 0.88rem; }
    .crumbs a { color: var(--muted); }
    .summary { margin: 16px 0 0; }
    .detail-description { margin: 8px 0 0; color: var(--muted); }
    .facts { display: grid; grid-template-columns: max-content 1fr; align-items: baseline; gap: 8px 24px; margin: 24px 0; padding: 24px; border-radius: var(--radius); background: var(--surface); }
    .facts dt { color: var(--muted); font-size: 0.8125rem; font-weight: 600; }
    .facts dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }
    .related { padding-left: 24px; }
    .related li { margin: 4px 0; }
    @media (max-width: 480px) { .facts { grid-template-columns: 1fr; gap: 4px; padding: 16px; } .facts dd { margin-bottom: 8px; } }
  </style>`;

const LICENSES = {
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY-NC 4.0': 'https://creativecommons.org/licenses/by-nc/4.0/',
  'CC BY-NC-SA 4.0': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  'CC BY-NC-ND 4.0': 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-NC 3.0': 'https://creativecommons.org/licenses/by-nc/3.0/',
  'CC BY-NC-SA 3.0': 'https://creativecommons.org/licenses/by-nc-sa/3.0/',
  'CC BY-NC-ND 3.0': 'https://creativecommons.org/licenses/by-nc-nd/3.0/',
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Apache-2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  'MIT': 'https://opensource.org/licenses/MIT',
  'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0.html',
  'ODC Attribution': 'https://opendatacommons.org/licenses/by/'
};

function summaryOf(e) {
  const tasks = taskLabels(e);
  let text = `${e.dataset} is a Turkish ${tasks.length ? tasks.join(', ') + ' ' : ''}dataset in the ${e.category} section`;
  if (e.released) text += `, released ${e.released}`;
  text += '.';
  const contents = e.scale && e.size ? `${e.scale} (${e.size})` : e.scale || e.size;
  if (contents) text += ` It contains ${contents}.`;
  text += ` Licence: ${e.license || 'not stated by the source'}.`;
  if (e.access) text += ` Access: ${e.access}.`;
  return text;
}

function metaDescription(text) {
  if (text.length <= 160) return text;
  const cut = text.slice(0, 159);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s.,;:(]+$/, '') + '…';
}

function related(e) {
  const mine = new Set(taskLabels(e));
  const others = data.filter(o => o !== e);
  const shared = others.filter(o => taskLabels(o).some(t => mine.has(t))).sort(newestFirst);
  const picked = shared.slice(0, 6);
  if (picked.length < 6) {
    const sameCategory = others.filter(o => o.category === e.category && !picked.includes(o)).sort(newestFirst);
    picked.push(...sameCategory.slice(0, 6 - picked.length));
  }
  return picked;
}

function datasetLd(e, summary) {
  const description = e.description ? `${e.description.replace(/[.\s]+$/, '')}. ${summary}` : summary;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: e.dataset,
    description,
    url: pageUrl(e)
  };
  const source = safeUrl(e.sourceUrl);
  if (source) ld.sameAs = source;
  ld.isAccessibleForFree = e.access === 'Open';
  if (LICENSES[e.license]) ld.license = LICENSES[e.license];
  ld.inLanguage = 'tr';
  ld.keywords = [...new Set([...taskLabels(e), e.category, 'Turkish'].filter(Boolean))];
  if (e.released) ld.datePublished = e.released;
  ld.includedInDataCatalog = { '@type': 'DataCatalog', name: SITE_NAME, url: BASE };
  const download = safeUrl(e.downloadUrl);
  if (download) ld.distribution = [{ '@type': 'DataDownload', contentUrl: download }];
  return ld;
}

function renderDetail(e) {
  const summary = summaryOf(e);
  const title = `${e.dataset} – Turkish dataset | ${SITE_NAME}`;
  const description = metaDescription(summary);
  const url = pageUrl(e);
  const source = safeUrl(e.sourceUrl);
  const download = safeUrl(e.downloadUrl);
  const ext = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)} ↗\uFE0E</a>`;
  const rows = [
    ['Released', e.released ? esc(e.released) : '—'],
    ['Category', esc(e.category || '—')],
    ['Description', e.description ? esc(e.description) : '—'],
    ['Size', e.size ? esc(e.size) : '—'],
    ['Scale', e.scale ? esc(e.scale) : '—'],
    ['Task', e.task ? esc(e.task) : '—'],
    ['License', e.license ? esc(e.license) : '—'],
    ['Access', e.access ? esc(e.access) : '—'],
    ['Source', source ? ext(source, source) : '—'],
    ['Files', download ? ext(download, e.downloadLabel || 'Files') : '—']
  ];
  const report = `${REPO}/issues/new?template=report-problem.yml&entry=${encodeURIComponent(e.dataset)}`;
  const list = related(e);
  return `<!doctype html>
<!-- SPDX-License-Identifier: Apache-2.0 -->
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230969da'/%3E%3Ctext x='16' y='23' font-size='20' font-weight='700' text-anchor='middle' fill='white' font-family='sans-serif'%3ET%3C/text%3E%3C/svg%3E" />
  ${styleBlock}
  ${detailStyle}
  <script>try { var t = localStorage.getItem('catalog-theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; } catch (e) {}</script>
  ${jsonLd(datasetLd(e, summary))}
</head>
<body>
  <main class="page detail">
    <header class="topbar">
      <div>
        <p class="eyebrow"><a href="../../">${SITE_NAME}</a></p>
        <nav class="crumbs" aria-label="Breadcrumb"><a href="../../">Catalog</a> › ${esc(e.category)} › <span aria-current="page">${esc(e.dataset)}</span></nav>
      </div>
      <div class="header-actions">
        <a class="button" href="../../">All datasets</a>
      </div>
    </header>

    <h1>${esc(e.dataset)}</h1>
    <p class="summary">${esc(summary)}</p>${e.description ? `\n    <p class="detail-description">${esc(e.description)}</p>` : ''}

    <dl class="facts">
${rows.map(([k, v]) => `      <dt>${k}</dt><dd>${v}</dd>`).join('\n')}
    </dl>

    <p><a href="${esc(report)}" target="_blank" rel="noopener">Report a problem with this entry ↗\uFE0E</a></p>

    <section aria-labelledby="related-heading">
      <h2 id="related-heading">Related datasets</h2>
      <ul class="related">
${list.map(o => `        <li><a href="../${o.slug}/">${esc(o.dataset)}</a></li>`).join('\n')}
      </ul>
    </section>

    <footer>
      <span>Every entry is checked against the dataset's own source before it is listed.</span>
      <span class="footer-links">
        <a href="../../">Catalog</a>
        <a href="${METHODOLOGY}" target="_blank" rel="noopener noreferrer">Methodology ↗\uFE0E</a>
      </span>
    </footer>
  </main>
</body>
</html>
`;
}

// ---------------------------------------------------------------- text files

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[BASE, ...data.map(pageUrl)].map(u => `  <url><loc>${esc(u)}</loc></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}sitemap.xml
`;

const llms = `# ${SITE_NAME}

> ${SITE_TAGLINE}. ${data.length} entries, each with a release date, size, licence and access type.

Every entry is checked against the dataset's own source before it is listed. Dates, sizes, licences and access types are copied from that source, and a value the source does not state is left blank rather than guessed. An entry that cannot be verified is removed.

## Catalog

- [datasets.json](${BASE}datasets.json): the full catalog as JSON, one object per dataset
- [llms-full.txt](${BASE}llms-full.txt): every entry as Markdown, grouped by section
- [Methodology](${METHODOLOGY}): how entries are verified

## Sections

${CATEGORIES.map(c => `- ${c}: ${count(c)} datasets`).join('\n')}
`;

function fullEntry(e) {
  const fields = [
    e.released && `Released: ${e.released}`,
    e.description && `Description: ${e.description}`,
    e.scale && `Scale: ${e.scale}`,
    e.size && `Size: ${e.size}`,
    e.task && `Task: ${e.task}`,
    `License: ${e.license || 'not stated'}`,
    e.access && `Access: ${e.access}`,
    e.sourceUrl && `Source: ${e.sourceUrl}`,
    e.downloadUrl && `${e.downloadLabel || 'Files'}: ${e.downloadUrl}`
  ].filter(Boolean).join(' | ');
  return `### ${e.dataset}\n${pageUrl(e)}\n${fields}\n`;
}

const llmsFull = `# ${SITE_NAME}

> ${SITE_TAGLINE}.

${CATEGORIES.map(c => `## ${c}\n\n${sortSection(data.filter(e => e.category === c)).map(fullEntry).join('\n')}`).join('\n')}`;

// ---------------------------------------------------------------- write

const write = (file, text) => {
  const target = join(out, file);
  mkdirSync(join(target, '..'), { recursive: true });
  writeFileSync(target, text, 'utf8');
};

mkdirSync(out, { recursive: true });
rmSync(join(out, 'd'), { recursive: true, force: true });
write('index.html', index);
copyFileSync(join(root, 'datasets.json'), join(out, 'datasets.json'));
for (const e of data) write(`d/${e.slug}/index.html`, renderDetail(e));
write('sitemap.xml', sitemap);
write('robots.txt', robots);
write('llms.txt', llms);
write('llms-full.txt', llmsFull);
// Every other file in _web/ (og.png, search-engine verification files and so on)
// is published unchanged at the site root. index.html is the template rendered above.
for (const name of readdirSync(join(root, '_web'))) {
  if (name === 'index.html') continue;
  const source = join(root, '_web', name);
  if (statSync(source).isFile()) copyFileSync(source, join(out, name));
}

console.log(`Built ${out}: index + ${data.length} detail pages, sitemap with ${data.length + 1} URLs.`);
