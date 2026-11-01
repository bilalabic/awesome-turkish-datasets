// SPDX-License-Identifier: Apache-2.0
// Usage: node scripts/changelog.mjs <fromRef> [toRef=HEAD]
// Prints a Markdown summary of what changed in datasets.json between two refs.
import { execFileSync } from "node:child_process";

const [from, to = "HEAD"] = process.argv.slice(2);
if (!from) {
  console.error("Usage: node scripts/changelog.mjs <fromRef> [toRef=HEAD]");
  process.exit(1);
}

function load(ref) {
  const text = execFileSync("git", ["show", `${ref}:datasets.json`], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(text);
}

const before = load(from);
const after = load(to);

const byName = (list) => new Map(list.map((d) => [d.dataset, d]));
const oldByName = byName(before);
const newByName = byName(after);
const oldByUrl = new Map(before.filter((d) => d.sourceUrl).map((d) => [d.sourceUrl, d]));
const newByUrl = new Map(after.filter((d) => d.sourceUrl).map((d) => [d.sourceUrl, d]));

const added = [];
const removed = [];
const changed = [];
const matchedOld = new Set();

function diff(oldEntry, newEntry) {
  const keys = [...new Set([...Object.keys(oldEntry), ...Object.keys(newEntry)])];
  const out = [];
  for (const key of keys) {
    const a = oldEntry[key];
    const b = newEntry[key];
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      out.push(`${key}: ${show(a)} -> ${show(b)}`);
    }
  }
  return out;
}

function show(value) {
  return value === undefined || value === "" ? "(empty)" : String(value);
}

for (const entry of after) {
  // Match by name first, then by sourceUrl to follow renames.
  let old = oldByName.get(entry.dataset);
  if (!old && entry.sourceUrl) old = oldByUrl.get(entry.sourceUrl);
  if (!old || matchedOld.has(old)) {
    added.push(entry);
    continue;
  }
  matchedOld.add(old);
  const fields = diff(old, entry);
  if (fields.length) {
    const label = old.dataset === entry.dataset ? entry.dataset : `${entry.dataset} (was ${old.dataset})`;
    changed.push({ label, fields });
  }
}
for (const entry of before) {
  if (!matchedOld.has(entry)) removed.push(entry);
}

const lines = [`# Changes from ${from} to ${to}`, ""];
lines.push(`## Added (${added.length})`, "");
for (const d of added) lines.push(`- ${d.dataset}`);
if (!added.length) lines.push("None.");
lines.push("", `## Removed (${removed.length})`, "");
for (const d of removed) lines.push(`- ${d.dataset}`);
if (!removed.length) lines.push("None.");
lines.push("", `## Changed (${changed.length})`, "");
for (const c of changed) {
  lines.push(`- ${c.label}`);
  for (const f of c.fields) lines.push(`  - ${f}`);
}
if (!changed.length) lines.push("None.");
lines.push("", `Entries before: ${before.length}`, `Entries after: ${after.length}`, "");

process.stdout.write(lines.join("\n"));
