# Methodology

This document describes how datasets are discovered, reviewed, verified, and added to **Awesome Turkish Datasets**.

The goal is to build a broad but reliable catalog of datasets available for Turkish while keeping the repository simple, transparent, and easy to maintain.

## Catalog Scope

Datasets are organized into three main areas:

* **Text, NLP & LLM**
* **Speech & Audio**
* **Vision, OCR & Multimodal**

The repository documentation and metadata are written in English. Official dataset names are preserved and are not translated.

## Research Workflow

Dataset discovery follows a staged process rather than adding results directly from web searches.

```text
Existing catalogs and resource lists
        ↓
Candidate dataset inventory
        ↓
Deduplication
        ↓
Official-source verification
        ↓
Independent gap search
        ↓
Final catalog
```

### 1. Existing Sources

The first stage collects candidate datasets from existing Turkish dataset catalogs, resource lists, academic surveys, GitHub repositories, Hugging Face collections, and other established sources.

At this stage, the objective is discovery rather than complete metadata verification.

### 2. Candidate Inventory

Dataset names and source links are collected into a temporary candidate inventory.

The same dataset may appear in several sources. These occurrences are consolidated before detailed verification begins.

### 3. Deduplication

Exact mirrors and duplicate uploads are treated as a single dataset. When a dataset is published on several platforms, the entry links to the creator's own release: the project page, the paper, the repository, or the archive record the creator cites. Copies on other platforms are not listed separately.

Different official versions may remain separate when they represent distinct releases.

Derived datasets may be listed separately when they introduce meaningful changes such as translation, annotation, filtering, merging, augmentation, expansion, or task conversion. Their description names the datasets they are built from. A re-upload, re-split, or format conversion is not a meaningful change.

### 4. Verification

Each candidate is checked against primary sources whenever possible.

Preferred sources are:

1. Official dataset pages or dataset cards
2. Official repositories
3. Dataset papers
4. Project or institutional pages

Third-party catalogs and awesome lists are primarily used for discovery.

Missing metadata is not guessed.

Before an entry is listed, the data itself is inspected rather than only its description: the files are located and opened, the Turkish content is confirmed by reading actual samples, and the license is read where the data is distributed. A language tag, a split named after a language, or a figure repeated by another catalog is treated as a claim to be checked, not as evidence.

### 5. Independent Gap Search

After existing catalogs have been consolidated and deduplicated, additional searches are performed to find datasets that may have been missed.

Research may include:

* GitHub
* Hugging Face
* ACL Anthology
* arXiv and academic publications
* Zenodo
* OPUS
* OpenSLR
* Dataverse
* Mendeley Data
* Kaggle
* University and research laboratory pages
* Shared-task and benchmark repositories

Both English and Turkish search terms are used.

## Inclusion Criteria

A dataset may be included when:

* It was originally created or collected in Turkish.
* It is a published Turkish translation of another dataset.
* It is multilingual but contains a clearly identifiable Turkish subset.
* It is intended for training, evaluation, benchmarking, or research.
* Its existence and Turkish relevance can be verified.
* A documented access or source page is available.

Benchmark and evaluation datasets are included.

There is no minimum size. A small dataset can be listed when its source states what the instances are, how they were produced, and where the files can be obtained.

Datasets do not need to be freely downloadable. Gated, registration-required, application-required, and paid datasets may also be listed when their access conditions are clearly documented.

## Multilingual Datasets

Being multilingual is not enough for inclusion.

A multilingual dataset is included only when the Turkish portion can be clearly identified through at least one of the following:

* A dedicated `tr` or `Turkish` split
* A Turkish configuration or selectable language
* A language filter that allows Turkish data to be isolated
* A documented Turkish sample, sentence, token, image, pair, or audio-hour count
* A clearly defined Turkish evaluation subset

A dataset is not included solely because a model trained on it supports Turkish or because Turkish may be present somewhere in the corpus.

## Dataset Origin

Dataset origin may be classified during later metadata enrichment.

Possible values include:

* **Original Turkish** — created or collected directly in Turkish
* **Translated** — translated into Turkish from another dataset or language
* **Multilingual-TR** — part of a multilingual dataset with an identifiable Turkish subset

Origin does not need to be known during the initial discovery stage and should not be inferred without evidence.

## Generated and Translated Data

Synthetic, template-generated, model-generated, and machine-translated datasets may be listed.

When the source states how the data was produced, the description says so, for example "Synthetic", "Template-based", or "Machine-translated". Rows that were generated, augmented, or labeled automatically are not described as collected or manually annotated. When the source does not say, the entry does not guess.

## Exclusion Criteria

The catalog generally excludes:

* Model repositories without a released dataset
* Multilingual datasets whose Turkish portion cannot be identified
* Exact mirrors or duplicate uploads
* Test files, demos, and samples that are not documented as a resource for others
* Undocumented data dumps
* Unreleased or only announced datasets
* Resources whose dataset status or Turkish relevance cannot be verified
* Datasets that exist mainly to promote a product, service, or website
* Datasets that expose contact or identity details of private individuals, such as phone numbers, email addresses, or ID numbers

Dataset collections and resource lists may be used as discovery sources, but they are not counted as individual datasets.

## Submissions

Anyone may suggest a dataset, including its author.

A submitter who is the author, maintainer, employer, or funder of a dataset says so in the pull request or issue. A disclosed relationship does not count against a dataset. A relationship that was not disclosed and comes to light later can lead to the entry being held or removed.

Every submission is verified the same way, whoever sends it. A page written by the dataset's author can confirm what the dataset contains, but not that others use it.

Datasets published by companies, including paid ones, are listed on the same terms as any other. Signs that a dataset exists mainly to promote something include fields that route users to a product or website, and the same submission sent to many lists at once. Neither sign decides on its own.

A dataset released by an individual or a company less than 30 days before it is submitted, without a paper or an institutional publisher, waits until it is 30 days old. A wait is not a rejection.

Contributors do not need to update the dataset totals in the README. They are updated when a change is merged.

## Metadata

The main catalog may contain the following fields when available:

| Field           | Description                                            |
| --------------- | ------------------------------------------------------ |
| **Released**    | First documented public release                        |
| **Dataset**     | Official dataset name                                  |
| **Description** | Official page, paper, or dataset card                  |
| **Download**    | Primary access or download location                    |
| **Size**        | Storage size                                           |
| **Scale**       | Samples, sentences, tokens, hours, images, pairs, etc. |
| **Task**        | Primary task or intended use                           |
| **License**     | Published dataset license                              |
| **Access**      | Open, gated, registration, application, or paid        |

Missing optional metadata does not automatically disqualify an otherwise valid dataset.

Unknown values remain unspecified until they can be verified.

## Size and Scale

`Size` and `Scale` represent different information.

Examples of **Size**:

* 850 MB
* 4.2 GB
* 120 GB

Examples of **Scale**:

* 120K samples
* 2.5M sentences
* 450 hours
* 80K images
* 35K question-answer pairs

For multilingual datasets, Turkish-specific scale should be preferred over the total multilingual dataset size whenever possible.

## Licenses

The license is the one stated by the dataset's own license file, dataset card, or paper, and it must cover the data rather than only the code or the documentation.

A license that a platform fails to detect is not a conflict when the license file names one. The license is left unspecified when the dataset's own sources disagree, or when a derived dataset states a license that its sources do not allow.

## Social Media Data

Datasets of social media posts may be listed with the license stated by their publisher. The description says that the data consists of posts, for example tweets. The catalog does not certify that redistributing the posts complies with the terms of the platform they came from.

## Release Dates

`Released` refers to the earliest verifiable public release of the dataset.

Repository commit dates should not automatically be treated as dataset release dates.

When a release date cannot be verified reliably, it should remain unspecified.

## Dataset Versions

Official dataset versions may be listed separately when they represent meaningful releases.

If a newer version contains all or part of an older dataset, both may remain in the catalog for historical completeness.

However, overlapping data should not be counted twice in future aggregate statistics.

## Ordering

Datasets are grouped under the three main catalog sections.

Within each section, datasets should be ordered by release date from newest to oldest whenever reliable release information is available.

## Maintenance Principle

The catalog prioritizes verifiable information over inflated dataset counts.

A smaller number of well-documented datasets is more useful than a larger list containing uncertain, duplicated, or unverifiable resources.

> **Comprehensive, but verifiable.**
