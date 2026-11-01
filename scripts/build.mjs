#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
//
// Generates README.md from datasets.json and scripts/readme.tmpl.md.
//
//   node scripts/build.mjs           write README.md
//   node scripts/build.mjs --check   exit 1 if README.md differs from the generated output
//
// No dependencies.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

export const KEYS = ['released', 'dataset', 'category', 'description', 'sourceUrl', 'downloadLabel',
  'downloadUrl', 'size', 'scale', 'task', 'license', 'access'];
export const CATEGORIES = ['Text, NLP & LLM', 'Speech & Audio', 'Vision, OCR & Multimodal'];

// One entry: a linked name and description, then the facts line.
export function entryText(e) {
  const meta = [e.released, e.scale, e.size, e.task, e.license, e.access,
    e.downloadUrl && `[${e.downloadLabel || 'Files'}](${e.downloadUrl})`].filter(Boolean).join(' · ');
  return `- **[${e.dataset}](${e.sourceUrl})**${e.description ? ' — ' + e.description : ''}  \n  ${meta}`;
}

// Missing month or day sorts as 00.
const dateKey = r => {
  const [y, m = '00', d = '00'] = r.split('-');
  return `${y}-${m}-${d}`;
};

// Newest first (ties keep JSON order); undated entries last, by lowercased name in code-point order.
export function sortSection(list) {
  const dated = list.filter(e => e.released);
  const undated = list.filter(e => !e.released);
  dated.sort((a, b) => { const x = dateKey(a.released), y = dateKey(b.released); return x < y ? 1 : x > y ? -1 : 0; });
  const low = e => e.dataset.toLowerCase();
  undated.sort((a, b) => (low(a) < low(b) ? -1 : low(a) > low(b) ? 1 : 0));
  return [...dated, ...undated];
}

export function renderReadme(template, data) {
  return template.replace(/\{\{(\w+)(?::([^}]*))?\}\}/g, (_, kind, arg) => {
    if (kind === 'total') return String(data.length);
    if (kind === 'count' && CATEGORIES.includes(arg)) return String(data.filter(e => e.category === arg).length);
    if (kind === 'entries' && CATEGORIES.includes(arg)) return sortSection(data.filter(e => e.category === arg)).map(entryText).join('\n');
    throw new Error(`Unknown placeholder: ${_}`);
  });
}

// Runs only when executed directly, so check.mjs can import the helpers above.
if (import.meta.filename === resolve(process.argv[1] ?? '')) {
  const args = process.argv.slice(2);
  if (args.some(a => a !== '--check')) { console.error('Usage: node scripts/build.mjs [--check]'); process.exit(2); }
  const root = resolve(import.meta.dirname, '..');
  const data = JSON.parse(readFileSync(join(root, 'datasets.json'), 'utf8'));
  const outputs = {
    'README.md': renderReadme(readFileSync(join(root, 'scripts', 'readme.tmpl.md'), 'utf8'), data)
  };
  if (args.includes('--check')) {
    const stale = Object.entries(outputs).filter(([f, text]) => {
      try { return readFileSync(join(root, f), 'utf8') !== text; } catch { return true; }
    }).map(([f]) => f);
    if (stale.length) {
      console.error('README.md is out of date: run node scripts/build.mjs');
      console.error(`Differs from generated output: ${stale.join(', ')}`);
      process.exit(1);
    }
    console.log(`README.md is up to date (${data.length} entries).`);
  } else {
    for (const [f, text] of Object.entries(outputs)) writeFileSync(join(root, f), text, { encoding: 'utf8' });
    console.log(`Wrote README.md (${data.length} entries).`);
  }
}
