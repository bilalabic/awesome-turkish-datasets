# Contributing

Thanks for helping. Corrections and additions are welcome, and a blank field is a perfectly good contribution.

## What is listed

The catalog lists datasets for Turkish across language, speech, vision and multimodal AI. Each one has a Turkish portion that can be identified, a documented place to get it, and values checked against the dataset's own sources. Open, gated, registration-gated, application-gated and paid datasets are all listed, with their conditions stated. [METHODOLOGY.md](METHODOLOGY.md) has the full rules.

## Two ways to contribute

**Open an issue.** No Git needed. Use the forms to [suggest a dataset](../../issues/new?template=suggest-dataset.yml) or [report a problem](../../issues/new?template=report-problem.yml) with an entry.

**Send a pull request.** Edit only `datasets.json`, plus `scripts/readme.tmpl.md` if you are changing prose. Do not edit `README.md` by hand. Then run:

```sh
node scripts/build.mjs
node scripts/check.mjs
```

The first regenerates `README.md` from `datasets.json`. The second checks the entries against the conventions below. These scripts come from a separate pull request, so this guide applies once that one is merged.

## Entry fields

[How to read an entry](README.md#how-to-read-an-entry) in the README explains the layout. In short:

- **Release date:** the earliest verifiable public release. For a dataset first published on Hugging Face, that is when its repository was created. The 2022-03-02 date Hugging Face shows for migrated datasets is not a release date.
- **Size:** the size of the data files, in decimal units (KB, MB, GB).
- **Licence:** recorded only when it covers the data, not just the code or documentation. Leave it blank when the dataset's own sources disagree.
- **Access:** one of `Open`, `Gated`, `Registration Required`, `Application Required` or `Paid`.
- **Description:** 8 words or fewer. Say when the data is synthetic, translated or derived.

You do not need to update the totals in the README. They are updated when a change is merged.

## Disclosure

Authors are welcome to submit their own datasets. Please say whether you are the author, maintainer, employer or funder. A disclosed relationship does not count against a submission.

A dataset released by an individual or a company less than 30 days earlier, with no paper or institutional publisher, waits until it is 30 days old. A wait is not a rejection.

## What is not listed

- Mirrors and re-uploads of a dataset already listed
- Bundles of datasets that are already listed on their own
- Undocumented data uploads
- Datasets with no obtainable copy
- Papers without released data
- Datasets whose main role is to promote a product, service or website
- Datasets that expose personal contact or ID details, such as phone numbers, email addresses or ID numbers

## What happens next

Every submission is checked against its source, whoever sends it. Values may be adjusted to match what the source says. A missing value is better than a guess.
