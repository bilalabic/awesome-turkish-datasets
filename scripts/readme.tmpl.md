<!-- Generated from datasets.json by scripts/build.mjs. Edit datasets.json (and scripts/readme.tmpl.md for prose), then run: node scripts/build.mjs -->
# Awesome Turkish Datasets

[![Datasets](https://img.shields.io/badge/datasets-{{total}}-555)](https://bilalabic.github.io/awesome-turkish-datasets/) [![Catalog licence](https://img.shields.io/badge/catalog_licence-CC_BY_4.0-555)](LICENSE)

A curated, verified catalog of datasets for Turkish across language, speech, vision, and multimodal AI: text corpora, LLM instruction and benchmark sets, speech recordings, OCR and vision-language data.

**[Search and filter the catalog →](https://bilalabic.github.io/awesome-turkish-datasets/)** Every dataset also has its own page with its source, licence and access conditions.

Turkish datasets are scattered across dataset cards, university pages, shared-task archives and catalogue records, and lists of them tend to repeat figures long after those figures stop being true. Every entry here was checked against the dataset itself rather than against another list: the data was located and opened, its Turkish content read, and the licence taken from wherever the data is actually distributed. Anything that could not be confirmed was left out rather than filled in with a plausible value.

Paid, gated and registration-gated datasets are listed alongside open ones, with their conditions stated. What is left out: releases whose Turkish portion cannot be separated from the other languages, resources that turn out to be a model, a tool or a paper rather than data, and datasets with no obtainable copy anywhere. [METHODOLOGY.md](METHODOLOGY.md) has the full rules.

**{{total}} datasets** — {{count:Text, NLP & LLM}} text/NLP · {{count:Speech & Audio}} speech · {{count:Vision, OCR & Multimodal}} vision/multimodal

Last reviewed November 2026 · [searchable version](https://bilalabic.github.io/awesome-turkish-datasets/) with filters by category, task and access

## Contents

- [Text, NLP & LLM](#text-nlp--llm) ({{count:Text, NLP & LLM}})
- [Speech & Audio](#speech--audio) ({{count:Speech & Audio}})
- [Vision, OCR & Multimodal](#vision-ocr--multimodal) ({{count:Vision, OCR & Multimodal}})

Each entry reads **name** — description, then `release date · scale · size · task · licence · access`. A fact that is missing could not be verified. [How to read an entry](#how-to-read-an-entry) explains the rest.

## Text, NLP & LLM

{{entries:Text, NLP & LLM}}

<sub>[back to contents](#contents)</sub>

## Speech & Audio

{{entries:Speech & Audio}}

<sub>[back to contents](#contents)</sub>

## Vision, OCR & Multimodal

{{entries:Vision, OCR & Multimodal}}

<sub>[back to contents](#contents)</sub>

## How to read an entry

Each entry names the dataset, linked to its canonical source — an official dataset card, repository, catalogue record, or project page — followed by a short description drawn from that source. The line beneath carries the facts in a fixed order: **release date · scale · stored size · task · licence · access**, and a link straight to the files where a direct location is known.

Access reads as one of five conditions: `Open` means publicly downloadable, `Gated` requires accepting terms, `Registration Required` and `Application Required` mean an account or a signed agreement, and `Paid` means the distributor charges a fee.

For a multilingual dataset the Turkish portion is given wherever it could be isolated: a scale written as `260,000 total; 10,000 Turkish questions` means only the second figure is Turkish. A figure carries a qualifier when it needs one — *(Turkish subset)* is the Turkish portion alone, *(all languages)* covers every language in the release, *(GitHub repo)* is repository size including version history — and a leading `~` means the figure is approximate.

**A fact that could not be verified from an authoritative source is simply absent.** Nothing here is estimated or inferred, so a missing licence means the licence could not be established — not that the dataset has none.

Two conventions are worth knowing. A licence is recorded only when it covers the data itself: where a repository's licence turned out to cover its loader code or its documentation rather than the dataset, it was left off. And the date is the earliest verifiable public release of the data: for a dataset first published on Hugging Face, that is when it was published there.

## Contributing

Corrections and additions are welcome — open an issue, or send a pull request if you already have the details.

Authors are welcome to submit their own datasets; please say so in the submission. [METHODOLOGY.md](METHODOLOGY.md) describes what is listed and what is not. There is no need to update the totals at the top of this file. To change the catalog, edit datasets.json and run node scripts/build.mjs; see [CONTRIBUTING.md](.github/CONTRIBUTING.md).

The one rule is that every value must be traceable to an authoritative source: the dataset's own page, its repository, its paper, or the archive that distributes it. An empty field is better than a plausible guess, so leaving one blank is a perfectly good contribution. When adding a dataset, please include the link you checked it against; when correcting one, say what the source states. Reports of dead links, moved datasets, and duplicate entries are as useful as new additions — several entries here were fixed or removed exactly that way.

## License

The catalog in this repository (README.md, datasets.json and METHODOLOGY.md) is licensed under [CC BY 4.0](LICENSE). The code of the searchable site and the scripts (_web/, scripts/ and .github/workflows/) is licensed under [Apache-2.0](LICENSES/Apache-2.0.txt). Each dataset carries its own license, listed above.
