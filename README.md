# Awesome Turkish Datasets

A curated catalog of datasets for Turkish across language, speech, vision, and multimodal AI.

Turkish datasets are scattered across dataset cards, university pages, shared-task archives and catalogue records, and lists of them tend to repeat figures long after those figures stop being true. Every entry here was checked against the dataset itself rather than against another list: the data was located and opened, its Turkish content read, and the licence taken from wherever the data is actually distributed. Anything that could not be confirmed was left out rather than filled in with a plausible value.

Paid, gated and registration-gated datasets are listed alongside open ones, with their conditions stated. What is left out: releases whose Turkish portion cannot be separated from the other languages, resources that turn out to be a model, a tool or a paper rather than data, and datasets with no obtainable copy anywhere. [METHODOLOGY.md](METHODOLOGY.md) has the full rules.

**299 datasets** — 228 text/NLP · 22 speech · 49 vision/multimodal

Last reviewed August 2026 · [searchable version](https://bilalabic.github.io/awesome-turkish-datasets/) with filters by category, task and access

## Contents

- [Text, NLP & LLM](#text-nlp--llm) (228)
- [Speech & Audio](#speech--audio) (22)
- [Vision, OCR & Multimodal](#vision-ocr--multimodal) (49)

Each entry reads **name** — description, then `release date · scale · size · task · licence · access`. A fact that is missing could not be verified. [How to read an entry](#how-to-read-an-entry) explains the rest.

## Text, NLP & LLM

- **[Conversation Prompt Injection](https://huggingface.co/datasets/3nesdeniz/turkish-conversation-prompt-injection)** — Prompt-injection attacks in Turkish conversations  
  2026-07-10 · 750 rows · 44.1 KB · LLM Safety Classification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/3nesdeniz/turkish-conversation-prompt-injection/tree/main)
- **[Turkish-Python-instruction-500k](https://huggingface.co/datasets/bysismo/Turkish-Python-instruction-500k)** — Python coding instructions across 23 categories  
  2026-07 · 550K examples · Instruction Tuning; Code Generation · MIT · Open · [Files](https://huggingface.co/datasets/bysismo/Turkish-Python-instruction-500k/tree/main)
- **[LORELEI Multiway Translated Text](https://catalog.ldc.upenn.edu/LDC2026T06)** — English text translated into 24 languages  
  2026-06 · ~100,000 words (all languages) · Machine Translation · LDC User Agreement for Non-Members · Paid
- **[Bilge-Turkish-CoT-50K](https://huggingface.co/datasets/bugrabilge/Bilge-Turkish-CoT-50K)** — Chain-of-thought reasoning examples, 50K samples  
  2026-05 · 50K examples · 815.2 MB · Question Answering; Reasoning; Text Generation · Gemma Terms of Use · Open · [Files](https://huggingface.co/datasets/bugrabilge/Bilge-Turkish-CoT-50K/tree/main)
- **[Hermes Function Calling Türkçe](https://huggingface.co/datasets/Tuguberk/turkish-hermes-function-calling)** — Translated function-calling and tool-use examples  
  2026-05 · 11,567 Turkish rows · 57.1 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/Tuguberk/turkish-hermes-function-calling/tree/main)
- **[Turkish Privacy PII NER Dataset](https://huggingface.co/datasets/BTX24/turkish-privacy-pii-ner)** — Synthetic PII spans for named-entity recognition  
  2026-05 · 103,923 Turkish rows · 15.7 MB · Named Entity Recognition · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/BTX24/turkish-privacy-pii-ner/tree/main)
- **[Türkçe Prompt Injection & Jailbreak Veri Seti](https://huggingface.co/datasets/OnerAYTAS/Turkish_prompt_injection_jailbreak_dataset)** — Turkish adversarial LLM security prompts  
  2026-05 · approximately 20,500 Turkish prompts · 27.3 MB · Benchmarking · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/OnerAYTAS/Turkish_prompt_injection_jailbreak_dataset/tree/main)
- **[XL-SafetyBench](https://huggingface.co/datasets/AIM-Intelligence/XL-SafetyBench)** — Adversarial prompts for cross-cultural LLM safety  
  2026-04 · 550 Turkish rows · 14.6 MB · Benchmarking · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/AIM-Intelligence/XL-SafetyBench/tree/main)
- **[diyalog-dataset](https://huggingface.co/datasets/alibayram/diyalog-dataset)** — Synthetic multi-turn dialogues from QA pairs  
  2026-02 · 1,330 Turkish rows · 5.6 MB · Dialogue Generation · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/alibayram/diyalog-dataset/tree/main)
- **[Treebank-Benchmarking](https://huggingface.co/datasets/turkish-nlp-suite/Treebank-Benchmarking)** — POS, dependency and morphology benchmark  
  2026-02 · 15,396 Turkish rows · 24.7 MB · Dependency Parsing · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/Treebank-Benchmarking/tree/main)
- **[FineTranslations](https://huggingface.co/datasets/HuggingFaceFW/finetranslations)** — Machine-translated parallel text, 500+ languages  
  2026-01 · 58,171,145 Turkish rows · 436.3 GB · Machine Translation · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/finetranslations/tree/main)
- **[ottoman-place-names-gazetteer](https://huggingface.co/datasets/OttomanNLP/ottoman-place-names-gazetteer)** — Ottoman-to-modern Turkish place-name transliterations  
  2026-01 · 44,838 rows · 857.6 KB · Lexical Resource · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/ottoman-place-names-gazetteer/tree/main)
- **[temiz-wiki](https://huggingface.co/datasets/turkish-nlp-suite/temiz-Wiki)** — Cleaned Turkish Wikipedia text dump  
  2026-01 · 360,175 Turkish rows · 863.4 MB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-Wiki/tree/main)
- **[Türkçe QA + Çoklu Diyalog Verisi](https://huggingface.co/datasets/sixfingerdev/turkish-qa-multi-dialog-dataset)** — Merged QA pairs and multi-turn dialogues  
  2025-12 · ~19,000 QA examples; ~2,000 dialogue sequences · 7.5 MB · Question Answering; Dialogue Generation · MIT · Open · [Files](https://huggingface.co/datasets/sixfingerdev/turkish-qa-multi-dialog-dataset/tree/main)
- **[Cosmos-Turkish-Corpus-v1.0](https://huggingface.co/datasets/ytu-ce-cosmos/Cosmos-Turkish-Corpus-v1.0)** — 15B-token Turkish continual-pretraining corpus  
  2025-11 · 9,075,453 Turkish rows · 22.8 GB · Language Modeling · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Cosmos-Turkish-Corpus-v1.0/tree/main)
- **[Turkish-SFT-Dataset-v1.0](https://huggingface.co/datasets/AlicanKiraz0/Turkish-SFT-Dataset-v1.0)** — Instruction-following and reasoning SFT examples  
  2025-10 · 5,579 Turkish rows · 49.9 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/AlicanKiraz0/Turkish-SFT-Dataset-v1.0/tree/main)
- **[Global PIQA Non-Parallel](https://huggingface.co/datasets/mrlbenchmarks/global-piqa-nonparallel)** — Hand-built commonsense reasoning benchmark, 100+ languages  
  2025-10 · 100 Turkish rows · 139.3 KB · Benchmarking · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/mrlbenchmarks/global-piqa-nonparallel/tree/main)
- **[GPQA Extended Translated to Turkish Language](https://huggingface.co/datasets/ytu-ce-cosmos/gpqa-extended_tr)** — Translated graduate-level science exam questions  
  2025-10 · 546 Turkish rows · 405.6 KB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/gpqa-extended_tr/tree/main)
- **[Türkçe Genel Kültür Soruları](https://huggingface.co/datasets/nisancoskun/turkish_general_knowledge_qa)** — Synthetic question-answering pairs via Llama-4  
  2025-10 · 1,000 question-answer pairs · 460.7 KB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/nisancoskun/turkish_general_knowledge_qa/tree/main)
- **[FinePDFs](https://huggingface.co/datasets/HuggingFaceFW/finepdfs)** — Text extracted from PDF documents  
  2025-09 · 1,700,570 Turkish rows · 25.4 GB · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/finepdfs/tree/main)
- **[Compilation of Bilkent Turkish Writings Dataset](https://huggingface.co/datasets/selimfirat/bilkent-turkish-writings-dataset)** — Student creative writings, Bilkent University courses  
  2025-05 · 9,119 writings · 27.7 MB · Instruction Tuning · Academic Use Only · Open · [Files](https://huggingface.co/datasets/selimfirat/bilkent-turkish-writings-dataset/tree/main)
- **[turkish-math-186k](https://huggingface.co/datasets/ituperceptron/turkish-math-186k)** — Machine-translated NuminaMath math problems  
  2025-05 · 185,937 Turkish rows · 130.2 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ituperceptron/turkish-math-186k/tree/main)
- **[Türkçe Tree of Thoughts (ToT) Veri Seti](https://huggingface.co/datasets/emre/ct_tree_of_thought_turkish)** — Tree-of-Thoughts reasoning data for NLP  
  2025-05 · 639 Turkish rows · 28.8 MB · Instruction Tuning · AFL-3.0 · Open · [Files](https://huggingface.co/datasets/emre/ct_tree_of_thought_turkish/tree/main)
- **[Medium Turkish Math Reasoning](https://huggingface.co/datasets/erayalp/medium_turkish_math_reasoning)** — Curriculum-based multi-step math reasoning  
  2025-04 · 1,085 Turkish rows · 311.0 KB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/erayalp/medium_turkish_math_reasoning/tree/main)
- **[The Xi’an Multi-Language Learner Corpus](https://catalog.ldc.upenn.edu/LDC2025T03)** — Multilingual learner essays by Chinese students  
  2025-03 · 22 Turkish texts; 3,719 Turkish tokens · Language Modeling · LDC User Agreement for Non-Members · Paid
- **[ThinkingData-200K-Turkish](https://huggingface.co/datasets/erythropygia/ThinkingData-200K-Turkish)** — Turkish instruction-tuning training examples  
  2025-02 · 208,640 Turkish rows · 0.98 GB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/erythropygia/ThinkingData-200K-Turkish/tree/main)
- **[turkish_medical_reasoning](https://huggingface.co/datasets/ituperceptron/turkish_medical_reasoning)** — Translated verifiable medical reasoning questions  
  2025-02 · 7,208 rows · 40.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ituperceptron/turkish_medical_reasoning/tree/main)
- **[OpenThoughts-TR-18k](https://huggingface.co/datasets/selimc/OpenThoughts-TR-18k)** — Translated synthetic reasoning dataset subset  
  2025-02 · 17,657 Turkish rows · 202.8 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/selimc/OpenThoughts-TR-18k/tree/main)
- **[dolphin-r1-turkish](https://huggingface.co/datasets/WiroAI/dolphin-r1-turkish)** — Turkish subset of the Dolphin-R1 corpus  
  2025-02 · 107,561 Turkish rows · 252.1 MB · Reasoning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/WiroAI/dolphin-r1-turkish/tree/main)
- **[SentiTurca](https://huggingface.co/datasets/turkish-nlp-suite/SentiTurca)** — Movie, e-commerce and hate-speech reviews  
  2025 · 234,345 labeled rows · 70.4 MB · Sentiment Analysis; Hate Speech Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/SentiTurca/tree/main)
- **[TrGLUE](https://huggingface.co/datasets/turkish-nlp-suite/TrGLUE)** — Single-sentence and sentence-pair classification benchmark  
  2025 · 813,313 rows across 8 tasks · 181 MB · Benchmarking · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TrGLUE/tree/main)
- **[HisTR](https://huggingface.co/datasets/BUCOLIN/HisTR)** — Historical Turkish NER dataset spanning centuries  
  2025 · 812 annotated sentences · Named Entity Recognition · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/BUCOLIN/HisTR/tree/main)
- **[HPLT2.0](https://hplt-project.org/datasets/v2.0)** — Web-crawled multilingual text corpus  
  2025 · 116.57M Turkish documents; 51.67B Turkish words · 15 TB cleaned (all languages) · Language Modeling · CC0 · Open
- **[Everyday Turkish Conversations](https://huggingface.co/datasets/SoAp9035/everyday-conversations-tur)** — User-assistant conversations on everyday topics  
  2024-12 · 3,000 Turkish rows · 4.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/SoAp9035/everyday-conversations-tur/tree/main)
- **[FineWeb 2](https://huggingface.co/datasets/HuggingFaceFW/fineweb-2)** — Web pretraining data across 1000+ languages  
  2024-12 · 95.1M Turkish documents; 41.9B Turkish words · 125.5 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/fineweb-2/tree/main)
- **[InstructPapers-TR Dataset](https://huggingface.co/datasets/selimc/InstructPapers-TR)** — Synthetic QA pairs from DergiPark papers  
  2024-11 · 11,550 Turkish rows · 9.9 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/selimc/InstructPapers-TR/tree/main)
- **[MedTurkQuAD](https://huggingface.co/datasets/incidelen/MedTurkQuAD)** — Medical-domain question-answering pairs, Turkish  
  2024-11 · 618 medical articles; 875 paragraphs; 8,200 QA pairs · 11.0 MB · Question Answering · CC BY-NC-ND 4.0 · Open · [Files](https://huggingface.co/datasets/incidelen/MedTurkQuAD/tree/main)
- **[OzenliDerlem](https://huggingface.co/datasets/turkish-nlp-suite/OzenliDerlem)** — Curated web articles, journals and magazines  
  2024-11 · 1,388,533 Turkish rows · 4.8 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/OzenliDerlem/tree/main)
- **[orpo-dpo-mix-TR-20k](https://huggingface.co/datasets/selimc/orpo-dpo-mix-TR-20k)** — Translated ORPO-DPO preference-pair mix  
  2024-11 · 19,889 Turkish rows · 70.9 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/selimc/orpo-dpo-mix-TR-20k/tree/main)
- **[TURSpider](https://huggingface.co/datasets/AliBugra/TURSpider)** — Human-curated Text-to-SQL query variant  
  2024-11 · 8,659 training pairs; 1,034 development pairs · 2.1 MB · Text-to-SQL · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/AliBugra/TURSpider/tree/main)
- **[AkademikDerlem](https://huggingface.co/datasets/turkish-nlp-suite/AkademikDerlem)** — Academic publication text corpus  
  2024-10 · 668,109 Turkish rows · 4.0 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/AkademikDerlem/tree/main)
- **[temiz-OSCAR](https://huggingface.co/datasets/turkish-nlp-suite/temiz-OSCAR)** — Cleaned versions of OSCAR corpora  
  2024-10 · 7,999,276 Turkish rows · 60.4 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-OSCAR/tree/main)
- **[turkish_exam_instructions](https://huggingface.co/datasets/bezir/turkish_exam_instructions)** — Exam questions from academic and occupational tests  
  2024-09 · 41,377 Turkish rows · 16.1 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/bezir/turkish_exam_instructions/tree/main)
- **[alpaca-tr](https://huggingface.co/datasets/BrewInteractive/alpaca-tr)** — Localized Alpaca GPT-4 instructions via Gemini  
  2024-09 · 45,331 Turkish rows · 22.8 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/BrewInteractive/alpaca-tr/tree/main)
- **[Multilingual RewardBench (M-RewardBench)](https://huggingface.co/datasets/CohereLabsCommunity/multilingual-reward-bench)** — Multilingual reward-model evaluation benchmark  
  2024-09 · 2,869 Turkish rows · 2.4 MB · Benchmarking · ODC Attribution · Open · [Files](https://huggingface.co/datasets/CohereLabsCommunity/multilingual-reward-bench/tree/main)
- **[WikiRAG-TR](https://huggingface.co/datasets/Metin/WikiRAG-TR)** — Synthetic QA from Wikipedia introductions  
  2024-08 · 5,999 Turkish rows · 20.7 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/Metin/WikiRAG-TR/tree/main)
- **[MetaMathQA-Turkish-corrected](https://huggingface.co/datasets/onur48/MetaMathQA-Turkish-corrected)**  
  2024-08 · 395,000 Turkish rows · 308.7 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/onur48/MetaMathQA-Turkish-corrected/tree/main)
- **[OpenOrca-tr-1-million-sharegpt](https://huggingface.co/datasets/TFLai/OpenOrca-tr-1-million-sharegpt)** — Translated OpenOrca conversations in ShareGPT format  
  2024-08 · 1,000,000 rows · 2.0 GB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/TFLai/OpenOrca-tr-1-million-sharegpt/tree/main)
- **[TR-MMLU (Turkish MMLU)](https://huggingface.co/datasets/alibayram/turkish_mmlu)**  
  2024-08 · 279,302 rows · 52.4 MB · Multiple-Choice Question Answering · CC BY-NC-ND 4.0 · Gated · [Files](https://huggingface.co/datasets/alibayram/turkish_mmlu/tree/main)
- **[gsm8k_tr](https://huggingface.co/datasets/ytu-ce-cosmos/gsm8k_tr)** — Translated GSM8K math word problems  
  2024-08 · 8,792 rows · 5.0 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/gsm8k_tr/tree/main)
- **[BuyukSinema](https://huggingface.co/datasets/turkish-nlp-suite/BuyukSinema)** — 87K movie reviews from Sinefil and Beyazperde  
  2024-07 · 87,328 Turkish rows · 34.9 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/BuyukSinema/tree/main)
- **[InstructTurca](https://huggingface.co/datasets/turkish-nlp-suite/InstrucTurca)** — Synthetic instructions from code, poems, medical texts  
  2024-07 · ~2.58M examples · 4.2 GB · Instruction Tuning · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/InstrucTurca/tree/main)
- **[alpaca-turkish-combined](https://huggingface.co/datasets/cenfis/alpaca-turkish-combined)** — Merged Alpaca-style instruction datasets, Turkish  
  2024-05 · 82,353 Turkish rows · 25.8 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/cenfis/alpaca-turkish-combined/tree/main)
- **[ForumSohbetleri](https://huggingface.co/datasets/turkish-nlp-suite/ForumSohbetleri)** — Turkish web-forum text corpus  
  2024-05 · 2,776,571 Turkish rows · 14.2 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/ForumSohbetleri/tree/main)
- **[temiz-mC4](https://huggingface.co/datasets/turkish-nlp-suite/temiz-mC4)** — Cleaned Turkish split of CulturaX  
  2024-05 · 76.4M documents; 21.06B words · 178.9 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-mC4/tree/main)
- **[TrCOLA](https://huggingface.co/datasets/turkish-nlp-suite/TrCOLA)** — Turkish linguistic-acceptability judgments, 9.9K instances  
  2024-05 · 9,916 Turkish rows · 2.8 MB · Text Classification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TrCOLA/tree/main)
- **[TrMorphTestser](https://huggingface.co/datasets/turkish-nlp-suite/turkish-morph-analysis)** — Subword vs morphological segmentation test set  
  2024-05 · 210,972 Turkish rows · 17.0 MB · Morphological Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/turkish-morph-analysis/tree/main)
- **[TurkishHateMap (Hate Map of Türkiye)](https://huggingface.co/datasets/turkish-nlp-suite/TurkishHateMap)** — Hate speech across misogyny, politics, ethnicity  
  2024-05 · 52,175 Turkish rows · 27.1 MB · Text Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TurkishHateMap/tree/main)
- **[Türkçe Masallar](https://huggingface.co/datasets/umutphp/masallar)** — Folk tales compiled from Masal Masal Türkiye  
  2024-05 · 1,528 Turkish rows · 7.7 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/umutphp/masallar/tree/main)
- **[instruction-turkish](https://huggingface.co/datasets/atasoglu/instruction-turkish)** — Machine-translated HuggingFaceH4 instructions via Google Translate  
  2024-04 · 327 rows · 602.6 KB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/instruction-turkish/tree/main)
- **[turkish-instruction-dataset-prepared](https://huggingface.co/datasets/ardaorcun/turkish-instruction-dataset-prepared)** — Merged Turkish instruction-tuning examples  
  2024-03 · 66,019 rows · 23 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ardaorcun/turkish-instruction-dataset-prepared/tree/main)
- **[truthful_qa_tr](https://huggingface.co/datasets/Atilla00/truthful_qa_tr)** — Translated TruthfulQA generation and multiple-choice sets  
  2024-03 · 1,634 Turkish rows · 525.8 KB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/Atilla00/truthful_qa_tr/tree/main)
- **[Lima Turkish](https://huggingface.co/datasets/beratcmn/lima-tr)** — Translated LIMA prompts via Gemini  
  2024-03 · 1,330 Turkish rows · 6.0 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/beratcmn/lima-tr/tree/main)
- **[gsm8k-Translated-TR](https://huggingface.co/datasets/NovusResearch/gsm8k-Translated-TR)**  
  2024-03 · 8,792 rows · 5.5 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/NovusResearch/gsm8k-Translated-TR/tree/main)
- **[OpenHermes-2.5-Translated-TR](https://huggingface.co/datasets/NovusResearch/OpenHermes-2.5-Translated-TR)**  
  2024-03 · 5,000 rows · 9.0 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/NovusResearch/OpenHermes-2.5-Translated-TR/tree/main)
- **[OrcaDPO (distilabel-intel-orca-dpo-pairs-tr)](https://huggingface.co/datasets/malhajar/distilabel-intel-orca-dpo-pairs-tr)**  
  2024-03 · 9,120 Turkish rows · 43.5 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/distilabel-intel-orca-dpo-pairs-tr/tree/main)
- **[OrcaDPO (orca_dpo_pairs-tr)](https://huggingface.co/datasets/malhajar/orca_dpo_pairs-tr)**  
  2024-03 · 10,846 Turkish rows · 16.1 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/orca_dpo_pairs-tr/tree/main)
- **[TruthfulQA-TR](https://huggingface.co/datasets/malhajar/truthfull_qa-tr)**  
  2024-03 · 816 Turkish questions (2 configs) · 1.64 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/malhajar/truthfull_qa-tr/tree/main)
- **[openhermes_tr](https://huggingface.co/datasets/umarigan/openhermes_tr)** — Translated GPT-4-generated OpenHermes conversations  
  2024-03 · 241,853 Turkish rows · 157.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/umarigan/openhermes_tr/tree/main)
- **[vngrs-web-corpus](https://huggingface.co/datasets/vngrs-ai/vngrs-web-corpus)** — Cleaned Turkish OSCAR and mC4 mix  
  2024-03 · 50,336,214 Turkish rows · 84.9 GB · Language Modeling · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/vngrs-ai/vngrs-web-corpus/tree/main)
- **[MusteriYorumlari](https://huggingface.co/datasets/turkish-nlp-suite/MusteriYorumlari)** — 103K e-commerce reviews from Hepsiburada, Trendyol  
  2024-02 · 103,920 Turkish rows · 12.8 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/MusteriYorumlari/tree/main)
- **[aya_dataset_tur](https://huggingface.co/datasets/sayhan/aya_dataset_tur)**  
  2024-02 · 4,296 Turkish rows · 1.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/sayhan/aya_dataset_tur/tree/main)
- **[ucekmez/OpenOrca-tr](https://huggingface.co/datasets/ucekmez/OpenOrca-tr)** — Translated OpenOrca question-answer pairs, 798K  
  2024-02 · 798,350 Turkish rows · 1.2 GB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/ucekmez/OpenOrca-tr/tree/main)
- **[distilabel-intel-orca-dpo-pairs-tr](https://huggingface.co/datasets/duxx/distilabel-intel-orca-dpo-pairs-tr)** — Distilabeled preference pairs from OrcaDPO  
  2024-01 · 3,979 Turkish rows · 9.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/duxx/distilabel-intel-orca-dpo-pairs-tr/tree/main)
- **[alpaca-gpt4-tr](https://huggingface.co/datasets/malhajar/alpaca-gpt4-tr)**  
  2024-01 · 52,002 rows · 101.1 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/malhajar/alpaca-gpt4-tr/tree/main)
- **[malhajar/OpenOrca-tr](https://huggingface.co/datasets/malhajar/OpenOrca-tr)**  
  2024-01 · 2,352,811 Turkish rows · 4.8 GB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/OpenOrca-tr/tree/main)
- **[BellaTurca](https://huggingface.co/datasets/turkish-nlp-suite/BellaTurca)** — Turkish pretraining corpus collection  
  2024 · 105M documents; 30.89B words · 188.8 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/BellaTurca/tree/main)
- **[Global-MMLU (Turkish)](https://huggingface.co/datasets/CohereLabs/Global-MMLU)** — Multilingual knowledge benchmark, 42 languages  
  2024 · ~14.3k Turkish items · 4.2 MB (Turkish subset) · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/Global-MMLU/tree/main)
- **[SQuAD-TR](https://huggingface.co/datasets/boun-tabi/squad_tr)** — Machine-translated SQuAD 2.0 in Turkish  
  2024 · 113,082 rows: 104,791 train and 8,291 validation · 9.4 MB · Question Answering · CC BY-NC-ND 4.0 · Open · [Files](https://huggingface.co/datasets/boun-tabi/squad_tr/tree/main)
- **[MultiTACRED](https://catalog.ldc.upenn.edu/LDC2024T09)** — Machine-translated multilingual relation-extraction sentences  
  2024 · 106,264 examples (all languages) · Relation Extraction · LDC User Agreement for Non-Members · Paid
- **[instruction-turkish-poems](https://huggingface.co/datasets/beratcmn/instruction-turkish-poems)** — Turkish poems with generated instructions  
  2023-12 · 4,961 Turkish rows · 6.7 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/beratcmn/instruction-turkish-poems/tree/main)
- **[rephrased-instruction-turkish-poems](https://huggingface.co/datasets/beratcmn/rephrased-instruction-turkish-poems)** — Rephrased instructions for Turkish poems  
  2023-12 · 4,957 Turkish rows · 6.4 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/beratcmn/rephrased-instruction-turkish-poems/tree/main)
- **[llama2-TR-recipe](https://huggingface.co/datasets/mertbozkurt/llama2-TR-recipe)**  
  2023-12 · 10,504 Turkish rows · 9.6 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/mertbozkurt/llama2-TR-recipe/tree/main)
- **[No Robots Turkish](https://huggingface.co/datasets/beratcmn/no_robots_turkish)** — Translated version of HuggingFace's instruction dataset  
  2023-12 · 9,499 Turkish rows · 25.3 MB · Instruction Tuning · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/beratcmn/no_robots_turkish/tree/main)
- **[sinefil-movie-revs](https://huggingface.co/datasets/turkish-nlp-suite/sinefil-movie-reviews)** — Audience movie reviews for sentiment analysis  
  2023-12 · 42,914 Turkish rows · 15.8 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/sinefil-movie-reviews/tree/main)
- **[Havadis](https://huggingface.co/datasets/turkish-nlp-suite/Havadis)** — Turkish news articles from online newspapers  
  2023-11 · 744,868 Turkish rows · 2.9 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/Havadis/tree/main)
- **[SoAp9035/turkish_instructions](https://huggingface.co/datasets/SoAp9035/turkish_instructions)** — Cleaned instruction dataset for Mistral  
  2023-11 · 51,914 Turkish rows · 56.7 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/SoAp9035/turkish_instructions/tree/main)
- **[Finance](https://huggingface.co/datasets/umarigan/turkiye_finance_qa)**  
  2023-10 · 428 Turkish rows · 82.4 KB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/umarigan/turkiye_finance_qa/tree/main)
- **[MULTIGLOSS Multilingual Glossaries - L1-English pair](https://catalog.elra.info/en-us/repository/browse/ELRA-M0112_01/)** — Bilingual word-sense glossary, Turkish-English  
  2023-10 · 13,133 Turkish words and expressions · Lexical Resource · ELRA VAR · Paid
- **[MULTIGLOSS Multilingual Glossaries - L1-English pair + 1 language](https://catalog.elra.info/en-us/repository/browse/ELRA-M0112_02/)** — Trilingual word-sense glossary including Turkish  
  2023-10 · 13,133 Turkish words/expressions, 17,015 senses · Lexical Resource · ELRA VAR · Paid
- **[Parallel Corpora & Domains (bilingual and multilingual)](https://catalog.elra.info/en-us/repository/browse/ELRA-W0336/)** — Bilingual segments across specialized domains  
  2023-10 · 10M segments; 90M tokens (all languages) · Machine Translation · ELRA VAR · Paid
- **[BeyazPerde All Movie Reviews](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-all-movie-reviews)** — Movie reviews for sentiment classification  
  2023-09 · 44,549 Turkish rows · 22.9 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-all-movie-reviews/tree/main)
- **[Vitamins and Supplements Customer Reviews Dataset](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-reviews)** — E-commerce customer reviews for sentiment  
  2023-09 · 238,590 Turkish rows · 43.6 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-reviews/tree/main)
- **[Vitamins and Supplements NER Dataset](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-NER)** — Named entities in e-commerce and medical reviews  
  2023-09 · 2,472 Turkish rows · 1.8 MB · Named Entity Recognition · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-NER/tree/main)
- **[Turkish-Alpaca](https://huggingface.co/datasets/TFLai/Turkish-Alpaca)** — Turkish translation of Stanford Alpaca  
  2023-08 · 51,914 rows · 24.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/TFLai/Turkish-Alpaca/tree/main)
- **[BeyazPerde Top 300 Movie Reviews](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-top-300-movie-reviews)** — 300 movie reviews for sentiment analysis  
  2023-05 · 4,380 Turkish rows · 2.0 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-top-300-movie-reviews/tree/main)
- **[Corona-mini](https://huggingface.co/datasets/turkish-nlp-suite/Corona-mini)** — Social-media posts for summarization  
  2023-05 · 175 Turkish rows · 195.8 KB · Summarization · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/Corona-mini/tree/main)
- **[databricks-dolly-15k-tr](https://huggingface.co/datasets/atasoglu/databricks-dolly-15k-tr)** — Machine-translated Databricks Dolly instructions  
  2023-05 · 15,014 Turkish rows · 14.0 MB · Instruction Tuning · CC BY-SA 3.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/databricks-dolly-15k-tr/tree/main)
- **[Bactrian-X](https://huggingface.co/datasets/MBZUAI/Bactrian-X)** — Text data covering 52 languages  
  2023-04 · 67,017 Turkish rows · 18.8 MB · Instruction Tuning · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/MBZUAI/Bactrian-X/tree/main)
- **[stanford-alpaca-cleaned-turkish-translated](https://huggingface.co/datasets/emre/stanford-alpaca-cleaned-turkish-translated)** — Translated Stanford Alpaca instructions, Turkish  
  2023-04 · 60,563 rows · 9.9 MB · Instruction Tuning · AFL-3.0 · Open · [Files](https://huggingface.co/datasets/emre/stanford-alpaca-cleaned-turkish-translated/tree/main)
- **[OpenAssistant Conversations](https://huggingface.co/datasets/OpenAssistant/oasst1)** — Human-annotated assistant-style conversation messages  
  2023-04 · 88,838 rows · 41.6 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/OpenAssistant/oasst1/tree/main)
- **[OSCAR Turkish](https://huggingface.co/datasets/oscar-corpus/OSCAR-2301)** — Multilingual web corpus filtered from CommonCrawl  
  2023-03 · 26,654,330 Turkish documents; 8,290,890,087 words · 73.7 GB (Turkish subset) · Language Modeling · CC0 (metadata only) · Gated · [Files](https://huggingface.co/datasets/oscar-corpus/OSCAR-2301/tree/main)
- **[merve/turkish_instructions](https://huggingface.co/datasets/merve/turkish_instructions)**  
  2023 · 51,563 rows · 21.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/merve/turkish_instructions/tree/main)
- **[A Twitter offensive language data set with context](https://github.com/boun-tabi/CovidOffensiveLanguageUltimateDatasets)** — Offensive language detection in tweets, with context  
  2023 · 28,808 tweet-reply pairs · 4.1 MB · Text Classification · Open
- **[GEOLINGUAL Multilingual Geographical Entity Tables](https://catalog.elra.info/en-us/repository/browse/ELRA-L0205/)** — Geographical entity names in multiple languages  
  2023 · 200 geographical entities (16 languages) · Lexical Resource · ELRA VAR · Paid
- **[GLOBAL Multilingual Lexical Data - Bilingual - Level 1](https://catalog.elra.info/en-us/repository/browse/ELRA-M0111_04/)** — Bilingual lexicographic core data resource  
  2023 · Lexical Resource · ELRA VAR · Paid
- **[MADAR-Turk](https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/computational-approaches-to-modeling-language-lab/resources.html)** — Arabic-dialect sentences translated to Turkish  
  2023 · 2,000 Turkish-translated sentences · Language Resource / Modeling · Application Required · [Files](https://docs.google.com/forms/d/1Vje0ZJk2p6JxT2X3m4780c8PuALsjASnCX9T0ZT4fg8/viewform)
- **[turkish-nlp-suite/ATIS Turkish](https://github.com/turkish-nlp-suite/Atis_Turkish)** — Translated ATIS intents and entity slots  
  2022-12 · ~ 1.7 MB (GitHub repo) · Intent and Slot Classification · CC BY-SA 4.0 · Open
- **[Turkish Offensive Language Detection Dataset](https://huggingface.co/datasets/Toygar/turkish-offensive-language-detection)** — OffensEval 2020 merged with additional offensive tweets  
  2022-07 · 53,005 labeled tweets · 7.2 MB · Text Classification · Open · [Files](https://huggingface.co/datasets/Toygar/turkish-offensive-language-detection/tree/main)
- **[trseg-41](https://github.com/alisafaya/mukayese)** — Turkish sentence-segmentation benchmark corpus  
  2022-02 · 40,000 sentences; 456,000 words · Sentence Segmentation · Open · [Files](https://github.com/alisafaya/mukayese/releases/download/v0.0.1/mukayese-datasets.tar.gz)
- **[trspell-10](https://github.com/alisafaya/mukayese)** — Turkish spelling-correction word pairs  
  2022-02 · 10,000 corrupted word pairs · Spelling Correction · Open · [Files](https://github.com/alisafaya/mukayese/releases/download/v0.0.1/mukayese-datasets.tar.gz)
- **[hunspell-tr](https://github.com/tdd-ai/hunspell-tr)** — Turkish spellchecking word list  
  2022-01 · Lexical Resource · MPL-2.0 · Open
- **[MASSIVE (Turkish)](https://huggingface.co/datasets/AmazonScience/massive)** — Intent and slot annotations across 51 languages  
  2022 · 16,521 Turkish utterances · 40.3 MB (Turkish subset) · Intent Classification; Slot Filling · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/AmazonScience/massive/tree/main)
- **[TRSAv1](https://huggingface.co/datasets/maydogan/Turkish_SentimentAnalysis_TRSAv1)** — Balanced positive, negative and neutral sentiment samples  
  2022 · 150,000 reviews: 50k positive, 50k negative, 50k neutral · 16.1 MB · Sentiment Analysis · Open · [Files](https://huggingface.co/datasets/maydogan/Turkish_SentimentAnalysis_TRSAv1/tree/main)
- **[A semantically-annotated (based on UCCA) data set of 50 sentences from the METU-Sabancı treebank](https://github.com/necvabolucu/semantic-dataset)**  
  2022 · 50 UCCA-annotated sentences · 167 KB · Dependency Parsing · Open
- **[Another Twitter NER data set from Sabancı University](https://github.com/SU-NLP/SUNLP-Twitter-NER-Dataset)**  
  2022 · 5,000 tweets · 394.6 KB · Named Entity Recognition · Apache-2.0 · Open
- **[The Corpus of Turkish Youth Language (CoTY)](https://osf.io/ek4z8/)** — Spoken corpus of Turkish youth language  
  2022 · 168,748 tokens; 123 speakers · Language Resource / Modeling
- **[A hate-speech data set from Aselsan](https://github.com/avaapm/hatespeech)** — Cross-domain Turkish-English hate-speech detection data  
  2022 · 100,000 Turkish tweets (v1); 60,310 (v2) · 16.4 MB · Text Classification · CC BY-NC-SA 4.0 · Open
- **[trnews-64](https://zenodo.org/records/5180654)**  
  2021-08 · 64M words · 123.4 MB · Language Modeling · CC BY 4.0 · Open
- **[trwiki-67](https://zenodo.org/records/5213891)**  
  2021-08 · 67M words · 331.8 MB · Language Modeling · CC BY 4.0 · Open
- **[ParlaMint 2.1 (Turkish)](https://www.clarin.si/repository/xmlui/handle/11356/1432)** — Turkish parliamentary debate transcripts  
  2021-06 · 3,774,204 utterances (all languages) · 244.35 MB (Turkish subset) · Language Modeling · CC BY 4.0 · Open
- **[A dataset for checking gender bias](https://github.com/NurIren/Gender-Bias-in-TR-to-EN-MT-Models)** — Gender bias in Turkish-English machine translation  
  2021-04 · 3.2 MB · Language Resource / Modeling · Open
- **[RUEG](https://doi.org/10.5281/zenodo.11234583)** — Bilingual heritage-speaker elicited narratives  
  2021-04 · 23.4 GB (all languages) · Language Modeling · CC0 1.0 (Public Domain) · Open
- **[IronyTR](https://github.com/teghub/IronyTR)**  
  2021 · 600 texts (300 ironic, 300 non-ironic) · ~ 561 KB (GitHub repo) · Irony Detection · Open
- **[UD Turkish Kenet](https://universaldependencies.org/treebanks/tr_kenet/index.html)**  
  2021 · 18,687 sentences; 178,658 tokens · 13.1 MB · Dependency Parsing · CC BY-SA 4.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-Kenet)
- **[STSb-TR](https://github.com/verimsu/STSb-TR)** — Machine-translated Turkish sentence similarity pairs  
  2021 · 8,628 Turkish sentence pairs · 1.5 MB · Semantic Textual Similarity · CC BY-SA 4.0 · Open
- **[TS TimeLine News Category Dataset](https://tscorpus.com/corpora)** — Turkish news articles labeled by category  
  2021 · 3,567,749 sentences; 551,000 articles · Text Classification · Registration Required
- **[UDer](https://ufal.mff.cuni.cz/universal-derivations)** — Cross-lingual derivational word-formation networks  
  2021 · 7,774 Turkish lexemes; 5,837 relations · Morphological Analysis · CC BY-SA 3.0 · Open
- **[xSID](https://github.com/mainlp/xsid)** — Cross-lingual slot and intent detection  
  2021 · 500 test; 300 validation sentences · Language Resource / Modeling · CC BY-SA 4.0 · Open
- **[Turkish Web Treebank (TWT)](https://github.com/google-research-datasets/turkish-treebanks/)** — Human-annotated morphosyntactic treebank  
  2020-05 · 4,851 sentences; 66,466 words · 7.4 MB · Language Resource / Modeling · Apache-2.0 · Open
- **[NRC-EIL](http://saifmohammad.com/WebPages/AffectIntensity.htm)** — Word emotion-intensity scores, Turkish-translated  
  2020-03 · 9,829 Turkish entries · Lexical Resource · Non-commercial research use · Open
- **[WikiPron](https://github.com/CUNY-CL/wikipron)** — Multilingual word-pronunciation mining dataset  
  2020-03 · 12,321 broad; 2,784 narrow pronunciation pairs · 409 KB (Turkish subset) · Language Resource / Modeling · Apache-2.0 · Open
- **[KeNet](https://github.com/StarlangSoftware/TurkishWordNet)** — Turkish WordNet lexical database  
  2020 · 77,330 synsets; 109,049 members · ~ 379.5 MB (GitHub repo) · Lexical Resource · GPL-3.0 · Open · [Files](https://github.com/StarlangSoftware/TurkishWordNet/raw/master/src/main/resources/turkish_wordnet.xml)
- **[MKQA (Turkish)](https://github.com/apple/ml-mkqa)** — Open-domain QA pairs across 26 languages  
  2020 · 260,000 total; 10,000 Turkish questions · ~ 12.4 MB (GitHub repo) · Open-Domain Question Answering · CC BY-SA 3.0 · Open
- **[MLSUM (Turkish)](https://github.com/ThomasScialom/MLSUM)** — Multilingual text summarization corpus  
  2020 · 273,617 Turkish article-summary pairs · ~ 38 KB (GitHub repo) · Summarization · Non-commercial research use · Open
- **[TrClaim-19](https://github.com/YSKartal/TrClaim19)**  
  2020 · 2,188 deduplicated annotated tweets in v1.1; 2,287 in v1.0 · ~ 564 KB (GitHub repo) · Check-Worthy Claim Detection · Open · [Files](https://raw.githubusercontent.com/YSKartal/TrClaim19/main/trclaim19_v1_1.csv)
- **[UD Turkish BOUN](https://universaldependencies.org/treebanks/tr_boun/index.html)**  
  2020 · 9,761 sentences; 121,835 tokens; 125,212 syntactic words · 9.9 MB · Dependency Parsing · CC BY-SA 4.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-BOUN)
- **[WikiLingua (Turkish)](https://github.com/esdurmus/Wikilingua)** — Abstractive summaries extracted from WikiHow  
  2020 · ~770k total; 4,503 Turkish pairs · ~ 44 KB (GitHub repo) · Summarization · CC BY-NC-SA 3.0 · Open
- **[XCOPA (Turkish)](https://github.com/cambridgeltl/xcopa)** — Multilingual causal commonsense reasoning tasks  
  2020 · 600 Turkish items: 100 validation and 500 test · 185.3 MB (all languages) · Causal Commonsense Reasoning · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/cambridgeltl/xcopa)
- **[#Turki$hTweets](https://github.com/atubakoksal/annotated_tweets)**  
  2020 · 2,000 annotated tweets · 557.8 KB · Text Normalization · Open
- **[Another, earlier, irony dataset (precursor of IronyTR)](https://github.com/teghub/Turkish-Irony-Dataset)** — Irony detection in Turkish social media  
  2020 · 220 sentences (110 ironic) · 10.1 KB · Irony Detection · Open
- **[CC-100 Turkish](https://data.statmt.org/cc-100/)** — Turkish monolingual web-crawled text corpus  
  2020 · 5.4 GB (Turkish subset) · Language Modeling · Open
- **[CCAligned](https://opus.nlpl.eu/datasets/CCAligned)** — Aligned English-Turkish parallel web-document corpus  
  2020 · 13,650,311 aligned pairs (largest listed Turkish pair) · 1.13 GB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-CCAligned/v1/moses/en-tr.txt.zip)
- **[Cross Lingual Word Embeddings for Turkic Languages](https://github.com/elmurod1202/crosLingWordEmbTurk)** — Bilingual dictionaries for Turkic language embeddings  
  2020 · 9,350-entry Turkish-English dictionary · Lexical Resource · Open
- **[MNLI-TR](https://huggingface.co/datasets/boun-tabi/nli_tr)** — Machine-translated multi-genre Turkish NLI pairs  
  2020 · 412,702 Turkish sentence pairs · Natural Language Inference · Open · [Files](https://huggingface.co/datasets/boun-tabi/nli_tr/tree/main)
- **[OffensEval 2020 (Turkish)](https://huggingface.co/datasets/coltekin/offenseval2020_tr)** — Turkish tweets labeled offensive or not  
  2020 · 34,792 Turkish tweets · Text Classification · CC BY 2.0 · Open · [Files](https://huggingface.co/datasets/coltekin/offenseval2020_tr/tree/main)
- **[SNLI-TR](https://huggingface.co/datasets/boun-tabi/nli_tr)** — Machine-translated Turkish sentence-pair entailment data  
  2020 · 570,152 Turkish sentence pairs · Natural Language Inference · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/boun-tabi/nli_tr/tree/main)
- **[C4](https://huggingface.co/datasets/allenai/c4)** — Cleaned Common Crawl web corpus  
  2019-10 · 1,683,640 Turkish rows · ~ 3.1 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/allenai/c4/tree/main)
- **[WikiMatrix](https://opus.nlpl.eu/datasets/WikiMatrix)** — Mined parallel sentences from Wikipedia  
  2019-07 · 3,477,269 Turkish sentence pairs · Machine Translation · CC BY-SA 4.0 · Open
- **[Multilingual ATIS](https://catalog.ldc.upenn.edu/LDC2019T04)**  
  2019-02 · 5,871 utterances (all languages) · Intent Classification; Slot Filling · LDC User Agreement · Paid
- **[A data set for NER and Stance detection](https://github.com/dkucuk/Tweet-Dataset-NER-SD)** — Named-entity recognition and stance detection in tweets  
  2019-01 · 1,065 tweets · 74.6 KB · Named Entity Recognition · Open
- **[TEL](https://journals.tubitak.gov.tr/elektrik/vol27/iss2/40/)** — Lexicon-based Turkish emotion analysis  
  2019 · 25,989 documents (TREMO) · Lexical Resource · Open
- **[WikiANN (Turkish)](https://huggingface.co/datasets/unimelb-nlp/wikiann)** — Named-entity tags for Turkish tokens  
  2019 · 40,000 Turkish sentences · 2.9 MB (Turkish subset) · Named Entity Recognition · Open · [Files](https://huggingface.co/datasets/unimelb-nlp/wikiann/tree/main)
- **[XQuAD (Turkish)](https://github.com/google-deepmind/xquad)**  
  2019 · 240 paragraphs; 1,190 Turkish question-answer pairs · ~ 3.2 MB (GitHub repo) · Question Answering · CC BY-SA 4.0 · Open · [Files](https://raw.githubusercontent.com/google-deepmind/xquad/master/xquad.tr.json)
- **[Leipzig corpora](https://corpora.uni-leipzig.de/en?corpusId=tur-tr_web_2019)** — Turkish web-text sentence corpus  
  2019 · 51,031,775 Turkish sentences, 728,050,937 tokens (tur-tr_web_2019 web corpus) · 219.8 MB (1M-sentence sample) · Language Resource / Modeling · CC BY · [Files](https://downloads.wortschatz-leipzig.de/corpora/tur-tr_web_2019_1M.tar.gz)
- **[TCL](https://aclanthology.org/W19-3308/)** — Automatically built Turkish connective lexicon  
  2019 · 180 discourse connectives · 76 KB · Language Resource / Modeling · Open · [Files](http://connective-lex.info/getfile.php?file=TCL.json)
- **[kde4](https://github.com/maidis/turkish-parallel-corpora/tree/master/kde4)** — Parallel translation sentence pairs  
  2018-11 · 23,219 sentence pairs · 6.9 MB · Machine Translation · Open
- **[kde5](https://github.com/maidis/turkish-parallel-corpora/tree/master/kde5)** — Parallel translation sentence pairs  
  2018-11 · 131,656 sentence pairs · 43.6 MB · Machine Translation · Open
- **[lonweb](https://github.com/maidis/turkish-parallel-corpora/tree/master/lonweb)** — Parallel translation sentence pairs  
  2018-11 · 467 sentence pairs · 172 KB · Machine Translation · Open
- **[2007 CoNLL Shared Task - Basque, Catalan, Czech & Turkish](https://catalog.ldc.upenn.edu/LDC2018T06)** — Dependency treebanks for four languages  
  2018-01 · Dependency Parsing · ELRA END USER · Paid
- **[TQuAD](https://github.com/TQuad/turkish-nlp-qa-dataset)** — Turkish question-and-answer pairs  
  2018 · 9,200 question-answer pairs; 2,507 paragraphs · ~ 1.0 MB (GitHub repo) · Question Answering · Open
- **[TrMor2018](https://github.com/ai-ku/TrMor2018)** — Morphological analysis data for Turkish  
  2018 · 34,673 sentences; 460,669 tokens · ~ 27.2 MB (GitHub repo) · Morphological Analysis · MIT · Open · [Files](https://github.com/ai-ku/TrMor2018/tree/master/TrMor2018)
- **[Turkish Parliament Transcripts Corpus](https://github.com/onurgu/turkish-parliament-texts)** — Grand National Assembly transcripts, 1920 to 2015  
  2018 · 1.3 GB · Language Modeling · Open · [Files](https://github.com/onurgu/turkish-parliament-texts/releases)
- **[XNLI](https://github.com/facebookresearch/XNLI)** — Cross-lingual natural language inference pairs  
  2018 · 112,500 total; 7,500 Turkish pairs · ~ 11 KB (GitHub repo) · Natural Language Inference · CC BY-NC 4.0 · Open · [Files](https://dl.fbaipublicfiles.com/XNLI/XNLI-1.0.zip)
- **[A small code-switching corpus of Turkish-English](https://github.com/zeynepyirmibes/code-switching-tr-en)**  
  2018 · 390 sentences · 99 KB · Language Resource / Modeling · Open
- **[Bianet](https://opus.nlpl.eu/datasets/Bianet)** — Turkish-Kurdish-English parallel news corpus  
  2018 · 34,770 Turkish-English sentence pairs · Machine Translation · CC-BY-SA-4.0 · Open
- **[NRC-VAD](http://saifmohammad.com/WebPages/nrc-vad.html)** — Valence-arousal-dominance word scores, Turkish-translated  
  2018 · 19,971 Turkish entries (v1; v2.1 has no Turkish file) · Lexical Resource · Non-commercial research use · Open
- **[OpenSubtitles](https://opus.nlpl.eu/datasets/OpenSubtitles)** — Aligned movie and TV subtitle translations  
  2018 · 44,986,121 Turkish-English sentence pairs · 1.3 GB · Machine Translation · Open
- **[Turkish Bad Word Blacklist](https://github.com/ooguz/turkce-kufur-karaliste)** — List of blacklisted Turkish words  
  2017-12 · 698 blacklisted words and phrases · ~ 14 KB (GitHub repo) · Content Moderation · CC BY-SA 4.0 · Open
- **[A sentiment analysis data set (from Başkent Uni.)](https://baskent.edu.tr/~msert/research/datasets/SentimentDatasetTR.html)** — Turkish Twitter sentiment classification corpus  
  2017 · Sentiment Analysis · Application Required
- **[CoNLL-2017](https://lindat.mff.cuni.cz/repository/handle/11234/1-1989)** — Automatically annotated raw text and embeddings  
  2017 · 29.8 GB · Language Resource / Modeling · CC BY-NC-SA 4.0 · Open · [Files](https://lindat.mff.cuni.cz/repository/server/api/core/bitstreams/779e7458-8881-4537-8f8c-54ac1ce49125/content)
- **[TWNERTC](https://data.mendeley.com/datasets/cdcztymf4k/1)** — Wikipedia sentences auto-annotated via large-scale gazetteers  
  2017 · 532,629 annotated examples · 195 MB (Turkish subset) · Named Entity Recognition; Text Classification · CC BY 4.0 · Open
- **[Linguistic Features in Turkish Word Representations](https://github.com/onurgu/linguistic-features-in-turkish-word-representations/releases/tag/v1.0)** — Turkish morphological word-analogy pairs  
  2017 · 15,133 noun and 14,231 verb inflection analogies · Morphological Analysis · Open
- **[TuPC-2016](https://osf.io/wp83a/)** — Turkish paraphrase-identification sentence corpus  
  2016-09 · 1,002 Turkish sentence pairs · 227 KB · Language Resource / Modeling · Open
- **[UD Turkish IMST](https://universaldependencies.org/treebanks/tr_imst/index.html)**  
  2016 · 5,635 sentences; 56,422 tokens; 58,096 syntactic words · 4.9 MB · Dependency Parsing · CC BY-NC-SA 3.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-IMST)
- **[A NER data from METU](https://github.com/dkucuk/NER-Turkish-News)** — Named-entity recognition in Turkish news  
  2016 · 1,425 entity annotations · 9.9 KB · Named Entity Recognition · Open
- **[A POS tagged data set of Turkish-German code switching](https://www.ims.uni-stuttgart.de/documents/team/ozlem/LAW2016.html)** — POS-tagged Turkish-German code-switching tweets  
  2016 · Language Resource / Modeling · Open
- **[SemEval2016task5](https://alt.qcri.org/semeval2016/task5/)** — Turkish restaurant and telecom reviews  
  2016 · 300 Turkish restaurant reviews; 3,000 Turkish telecom tweets · Language Resource / Modeling · Academic non-commercial (META-SHARE NC-NoReD) · Registration Required · [Files](https://alt.qcri.org/semeval2016/task5/index.php?id=data-and-tools)
- **[SentiTurkNet](http://myweb.sabanciuniv.edu/rdehkharghani/sentiturknet-3/)** — Turkish polarity sentiment lexicon  
  2016 · 1.6 MB · Language Resource / Modeling · Open · [Files](http://myweb.sabanciuniv.edu/rdehkharghani/files/2023/12/SentiTurkNet.zip)
- **[Turkish Stop Words](https://github.com/ahmetax/trstop)** — Common Turkish filler words list  
  2016 · 285 stop words · 1.8 KB · Lexical Resource · MIT · Open · [Files](https://raw.githubusercontent.com/ahmetax/trstop/master/dosyalar/turkce-stop-words)
- **[WMT16 EN-TR](https://huggingface.co/datasets/trmteb/wmt16_en_tr)** — English-Turkish parallel news sentence pairs  
  2016 · 209,000 Turkish-English sentence pairs · Machine Translation · Open · [Files](https://huggingface.co/datasets/trmteb/wmt16_en_tr/tree/main)
- **[2006 CoNLL Shared Task - Ten Languages](https://catalog.ldc.upenn.edu/LDC2015T11)** — Dependency treebanks for ten languages  
  2015-06 · Dependency Parsing · ELRA END USER · Paid
- **[A Twitter NER data set](https://wt-public.emm4u.eu/Resources/2014_JRC_Twitter_TR_NER-dataset.zip)** — Turkish Twitter named entity annotations  
  2014 · 868 tweets; 1,322 entity annotations · 12.9 KB (compressed archive) · Named Entity Recognition · Open
- **[TS Abstract Corpus](https://tscorpus.com/corpora)** — Turkish scientific abstracts with POS tagging  
  2014 · 1,048,132 tokens from 6,234 scientific abstracts · Part-of-Speech Tagging · Registration Required
- **[A code-switching corpus of Turkish-Dutch](https://aclanthology.org/D13-1084/)** — Turkish-Dutch online forum language identification  
  2013 · Language Resource / Modeling · Application Required · [Files](https://www.dongnguyen.nl/data.html)
- **[A sentiment analysis data set (from Eindhoven)](https://www.win.tue.nl/~mpechen/projects/smm/#Datasets)** — Turkish movie and product reviews  
  2013 · 10,662 movie reviews; 5,600 product reviews · 1.5 MB · Sentiment Analysis · Open
- **[SETIMES v2 (Turkish-English)](https://opus.nlpl.eu/datasets/SETIMES)**  
  2012 · 207,678 aligned Turkish-English sentence pairs · Machine Translation · CC BY-SA · Open · [Files](https://object.pouta.csc.fi/OPUS-SETIMES/v2/moses/en-tr.txt.zip)
- **[TS Corpus V2](https://tscorpus.com/corpora)**  
  2012 · 491 million tokens · Corpus Query; Language Modeling · Registration Required · [Files](https://cqpweb.tscorpus.com/cqpweb/ts_corpus_ver_2/)
- **[Turkish National Corpus (TNC)](https://www.tnc.org.tr/)**  
  2012 · 50 million words from Turkish texts, 1990-2013 · Corpus Linguistics; Language Modeling · Non-commercial research use · Registration Required
- **[TDB](http://medid.ii.metu.edu.tr/index_eng.html)** — Turkish discourse corpus with connective annotations  
  2012 · 500,000-word subcorpus of the METU Turkish Corpus · Language Resource / Modeling · Application Required
- **[NRC-EmoLex](http://saifmohammad.com/WebPages/AccessResource.htm)** — Word emotion associations, Turkish-translated  
  2011 · 14,154 Turkish entries · Lexical Resource · Non-commercial research use · Open
- **[English-Swedish-Turkish Corpus](https://researchdata.se/en/catalogue/dataset/ext0078-1)**  
  2010 · ~300,000 Swedish; 160,000 Turkish; 150,000 English tokens · Machine Translation · Application Required
- **[News-Cat](http://www.kemik.yildiz.edu.tr/veri_kumelerimiz.html)** — Turkish news articles for text categorization  
  2009 · 1,150 news articles across 5 categories · 3.7 MB · Text Classification · Open · [Files](http://www.kemik.yildiz.edu.tr/data/File/1150haber.rar)
- **[TELL](http://linguistics.berkeley.edu/TELL/)** — Turkish lexicon with phonemic transcriptions  
  2009 · 30,000 Turkish words · Pronunciation Lexicon · Open
- **[Bilkent Information Retrieval on Turkish Texts](https://github.com/BilkentInformationRetrievalGroup/MilliyetCollectionTREC)** — Turkish newspaper information retrieval collection  
  2008 · 408,305 documents; 72 queries · Information Retrieval · Open
- **[Boun Web Corpus](https://tulap.cmpe.bogazici.edu.tr/handle/20.500.12913/68)** — Large Turkish web and news corpus  
  2008 · 491M tokens; 423M words · Language Modeling · Apache-2.0 · Open
- **[CHILDES/Altinkamis](https://talkbank.org/childes/access/Other/Turkish/Altinkamis.html)** — Turkish child lexicon acquisition study  
  2005 · 1 child, ages 1;4-2;4 · Language Modeling · Open
- **[Collins Multilingual database (MLD) - PhraseBank](https://catalog.elra.info/en-us/repository/browse/ELRA-T0377/)** — Multilingual phrase bank across 28 languages  
  2005 · 2,000 phrases (28 languages) · Lexical Resource · ELRA END USER · Paid
- **[Collins Multilingual database (MLD) - WordBank](https://catalog.elra.info/en-us/repository/browse/ELRA-T0376/)** — Multilingual wordbank across 32 languages  
  2005 · 10,000 words per language (32 languages) · Lexical Resource · ELRA END USER · Paid
- **[75 News](http://www.kemik.yildiz.edu.tr/veri_kumelerimiz.html)** — Turkish news articles, five topics  
  2004 · 75 news articles across 5 topics · 340 KB · Text Classification · Open · [Files](http://www.kemik.yildiz.edu.tr/data/File/75haber.zip)
- **[METU Turkish Corpus (MTC)](https://ii.metu.edu.tr/metu-corpora-research-group)**  
  2002 · ~2 million words; 10 genres · Language Modeling · Research use only · Application Required
- **[ECI/MCI (European Corpus Initiative/Multilingual Corpus I)](https://catalog.ldc.upenn.edu/LDC94T5)** — Multilingual corpus covering major world languages  
  1996 · 283K Turkish words across two subcorpora · Language Modeling · Paid
- **[6 Şubat Tweets](https://tscorpus.com/corpora)**  
  4.9 million tokens · Social Media Analysis · Registration Required
- **[BabelNet](https://babelnet.org/)** — Multilingual encyclopedic dictionary semantic network  
  Language Resource / Modeling · BabelNet Non-Commercial license · Application Required
- **[CCMatrix](https://opus.nlpl.eu/datasets/CCMatrix)** — Web-mined multilingual parallel sentence pairs  
  47,045,956 Turkish-English sentence pairs · 3.0 GB · Machine Translation · Open
- **[CHILDES (Turkish)](https://talkbank.org/childes/access/Other/Turkish/)** — Turkish child language acquisition corpora  
  34 children across two corpora (Aksu, Altınkamış) · Child Language · Open
- **[CHILDES/Aksu](https://talkbank.org/childes/access/Other/Turkish/Aksu.html)** — Turkish child-adult conversation transcripts 1972-1973  
  33 children, ages 2;0-4;8 · Language Modeling · CC BY-NC-SA 3.0 · Registration Required
- **[Columns Corpus V2](https://tscorpus.com/corpora)** — Turkish newspaper opinion columns, gender-balanced  
  28+ million tokens; 25,915 columns · Language Modeling · Registration Required
- **[ConceptNet](https://conceptnet.io/)** — Multilingual semantic network knowledge graph  
  Language Resource / Modeling · CC BY-SA 4.0 · Open
- **[ConceptNet Numberbatch](https://github.com/commonsense/conceptnet-numberbatch)**  
  51,308 Turkish entries · Language Resource / Modeling · CC BY-SA 4.0 · Open
- **[Confess Corpus](https://tscorpus.com/corpora)** — Anonymous posts from a Turkish confession forum  
  450,000+ tokens; 15,053 confessions · Social Media Analysis · Registration Required
- **[Covid-19 TweetS](https://tscorpus.com/corpora)** — Turkish tweets from early Covid-19 pandemic  
  7.5+ million tokens · Social Media Analysis · Registration Required
- **[ELRC-3057-wikipedia_health](https://opus.nlpl.eu/datasets/ELRC-3057-wikipedia_health)**  
  2,368 aligned pairs (largest listed Turkish pair) · 245.8 KB · Machine Translation · CC BY-SA 3.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-ELRC-3057-wikipedia_health/v1/moses/en-tr.txt.zip)
- **[ELRC-wikipedia_health](https://opus.nlpl.eu/datasets/ELRC-wikipedia_health)**  
  2,368 aligned pairs (en-tr) · 247.2 KB · Machine Translation · CC BY-SA 3.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-ELRC-wikipedia_health/v1/moses/en-tr.txt.zip)
- **[ELRC_2922](https://opus.nlpl.eu/datasets/ELRC_2922)**  
  2,367 aligned pairs (largest listed Turkish pair) · 250.8 KB · Machine Translation · CC BY 4.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-ELRC_2922/v1/moses/en-tr.txt.zip)
- **[EUbookshop](https://opus.nlpl.eu/datasets/EUbookshop)**  
  23,706 aligned pairs (largest listed Turkish pair) · 2.12 MB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-EUbookshop/v2/moses/en-tr.txt.zip)
- **[Evrim Ağacı Korpusu](https://tscorpus.com/corpora)**  
  4.4+ million tokens; 7,287 articles · Language Modeling · Registration Required
- **[Gazeteden Tarihe Bakış Projesi](https://nek.istanbul.edu.tr/ekos/GAZETE/)**  
  55 newspaper titles; 581,106 pages · Language Resource / Modeling · Open
- **[Gender identification on Twitter](https://cloud.iyte.edu.tr/index.php/s/5DhqdlUCCdB60qG)** — Turkish Twitter gender-labeled dataset  
  23.5 MB · Language Resource / Modeling · Open
- **[GLOBAL Multilingual Lexical Data - Monolingual - Level 1](https://catalog.elra.info/en-us/repository/browse/ELRA-M0111_01/)** — Lexicographic word entries across 25 languages  
  Lexical or Parallel Resource · ELRA VAR · Paid
- **[GlobalVoices](https://opus.nlpl.eu/datasets/GlobalVoices)**  
  7,838 aligned pairs (largest listed Turkish pair) · 720.3 KB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-GlobalVoices/v2018q4/moses/en-tr.txt.zip)
- **[LORETO Thesaurus](https://catalog.elra.info/en-us/repository/browse/ELRA-T0089/)** — Multilingual hierarchical cross-referenced thesaurus  
  800 total entries (all languages) · Lexical Resource · ELRA END USER / ELRA VAR · Paid
- **[Ottoman (local) newspapers](https://www.osmanlicagazeteler.org/)** — Digitized Ottoman-era provincial newspapers  
  346 newspapers, 25,242 total pages (13,378 transcribed, ~53% complete) · Language Resource / Modeling · Registration Required
- **[Tatoeba Turkish Sentences](https://tatoeba.org/en/downloads)** — Community-contributed multilingual translated sentences  
  749,030 sentences · 8.6 MB · Machine Translation · CC BY 2.0 FR · Open · [Files](https://downloads.tatoeba.org/exports/per_language/tur/tur_sentences.tsv.bz2)
- **[THY-SA](https://huggingface.co/datasets/trmteb/thy_sa)** — Turkish Airlines tweets with sentiment labels  
  23,300 manually labelled tweets · Sentiment Analysis · Open · [Files](https://huggingface.co/datasets/trmteb/thy_sa/tree/main)
- **[TTC-4900](https://www.kaggle.com/savasy/ttc4900)** — Turkish news text classification dataset  
  4,900 Turkish news documents (7 categories x 700 each) · 5.52 MB · Language Resource / Modeling · Open
- **[Ubuntu](https://opus.nlpl.eu/datasets/Ubuntu)** — Ubuntu software localization translation strings  
  7,301 sentence pairs; 56.7K words (Moses en-tr) · 188 KB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-Ubuntu/v14.10/moses/en-tr.txt.zip)
- **[UniMorph](https://unimorph.github.io/)** — Cross-lingual inflectional morphology paradigms  
  570,420 Turkish forms; 3,579 paradigms · Language Resource / Modeling · CC BY-SA 3.0 · Open

<sub>[back to contents](#contents)</sub>

## Speech & Audio

- **[Common Voice Scripted Speech 26.0 - Turkish](https://mozilladatacollective.com/datasets/cmqinosfq00x4nr07gnk0rdf9)**  
  2026-06 · 126,723 clips; 135.64 hours (130.1 validated); 1,829 speakers · 2.99 GB · Automatic Speech Recognition · CC0 1.0 · Registration Required
- **[tr-combined](https://huggingface.co/datasets/Codyfederer/tr-combined)** — Merged speech audio from 894 sources  
  2025-10 · 221,531 segments; 2,158 speakers · 85.2 GB · Speech / Audio · CC BY 4.0 · Gated · [Files](https://huggingface.co/datasets/Codyfederer/tr-combined/tree/main)
- **[tr-full-dataset](https://huggingface.co/datasets/Codyfederer/tr-full-dataset)** — Merged speech audio from 88 sources  
  2025 · 41,427 segments; 222 speakers; 88 source datasets · 432.3 MB · Automatic Speech Recognition; Text-to-Speech · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/Codyfederer/tr-full-dataset/tree/main)
- **[khanacademy-turkish](https://huggingface.co/datasets/ysdede/khanacademy-turkish)** — Turkish audio clips from Khan Academy  
  2024-12 · 27,096 Turkish rows · 1.2 GB · Automatic Speech Recognition · CC BY-SA 3.0 · Open · [Files](https://huggingface.co/datasets/ysdede/khanacademy-turkish/tree/main)
- **[khanacademy-turkish-math](https://huggingface.co/datasets/ysdede/khanacademy-turkish-math)** — Turkish Khan Academy math audio transcriptions  
  2024-12 · 42,836 rows · 1.8 GB · Speech / Audio · Open · [Files](https://huggingface.co/datasets/ysdede/khanacademy-turkish-math/tree/main)
- **[Turkish Speech Corpus (TSC)](https://huggingface.co/datasets/issai/Turkish_Speech_Corpus)** — Speech corpus for Turkic-language ASR  
  2023 · 218.2 hours; 186,171 utterances · 21.4 GB · Automatic Speech Recognition · MIT · Open · [Files](https://huggingface.co/datasets/issai/Turkish_Speech_Corpus/tree/main)
- **[AUDIO Human Voice Pronunciations - Turkish](https://catalog.elra.info/en-us/repository/browse/ELRA-S0490_21/)** — Turkish word and phrase pronunciation audio  
  2023 · 6,491 Turkish pronunciation entries · Pronunciation Lexicon · ELRA VAR · Paid
- **[MediaSpeech Turkish v1.1 (SLR108)](https://www.openslr.org/108/)**  
  2021 · 10 hours of Turkish media speech · 618 MB · Automatic Speech Recognition · CC BY 4.0 · Open · [Files](https://www.openslr.org/resources/108/TR.tgz)
- **[CoVoST 2](https://github.com/facebookresearch/covost)** — Multilingual speech-to-text translation corpus  
  2020-07 · 281 KB (tr-en translations) · Language Resource / Modeling · CC0 1.0 · Open
- **[VoxLingua107 (Turkish)](https://huggingface.co/datasets/TalTechNLP/voxlingua107_wds)** — Speech data for language-identification models  
  2020 · 6,628 h total; ~59 h Turkish · ~ 6.9 GB (Turkish subset) · Language Identification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/TalTechNLP/voxlingua107_wds/tree/main)
- **[2011 NIST Language Recognition Evaluation Test Set](https://catalog.ldc.upenn.edu/LDC2018S06)** — Multilingual telephone and broadcast speech for language identification  
  2018-08 · 204 hours (all languages) · Language Identification · LDC User Agreement for Non-Members · Paid
- **[Multi-Language Conversational Telephone Speech 2011 - Turkish](https://catalog.ldc.upenn.edu/LDC2017S09)**  
  2017-05-15 · 18.6 hours; 87 calls · 975 MB · Automatic Speech Recognition; Language Identification · LDC · Paid
- **[IARPA Babel Turkish Language Pack IARPA-babel105b-v0.5](https://catalog.ldc.upenn.edu/LDC2016S10)**  
  2016-10-19 · ~213 hours · Automatic Speech Recognition; Keyword Search · LDC Babel · Paid
- **[Collins Multilingual database (MLD) – PhraseBank with audio files](https://catalog.elra.info/en-us/repository/browse/ELRA-S0383/)** — Multilingual phrasebank with native-speaker audio  
  2016-07 · 2,000 Turkish phrases with audio · Lexical Resource · ELRA END USER · Paid
- **[Collins Multilingual database (MLD) – WordBank with audio files](https://catalog.elra.info/en-us/repository/browse/ELRA-S0382/)** — Multilingual word lexicon with native-speaker audio  
  2016-07 · 10,000 Turkish words with audio · Lexical Resource · ELRA END USER · Paid
- **[2009 NIST Language Recognition Evaluation Test Set](https://catalog.ldc.upenn.edu/LDC2014S06)** — Multilingual telephone speech for language identification  
  2014-07 · 215 hours of speech across 23 languages and dialects · Language Identification · LDC User Agreement for Non-Members · Paid
- **[Turkish Broadcast News Speech and Transcripts](https://catalog.ldc.upenn.edu/LDC2012S06)**  
  2012-05-16 · ~130 hours · Automatic Speech Recognition · LDC User Agreement · Paid
- **[METU Turkish Microphone Speech v1.0 (LDC2006S33)](https://catalog.ldc.upenn.edu/LDC2006S33)**  
  2006-05-18 · ~5.6 hours; 120 speakers; 4,800 recordings · ~ 600 MB · Automatic Speech Recognition · LDC User Agreement for Non-Members · Paid
- **[GlobalPhone Turkish](https://catalog.elra.info/en-us/repository/browse/ELRA-S0206/)**  
  2006-01 · 17.13 hours; 6,950 utterances; 100 speakers · Automatic Speech Recognition · ELRA END USER / ELRA VAR · Paid
- **[GlobalPhone 2000 Speaker Package](https://catalog.elra.info/en-us/repository/browse/ELRA-S0400/)** — Multilingual read-speech speaker samples  
  2005 · ~22 hours (all languages) · Speaker Identification · ELRA END USER / ELRA VAR · Paid
- **[GlobalPhone Multilingual Model Package](https://catalog.elra.info/en-us/repository/browse/ELRA-S0399/)** — Multilingual acoustic modeling speech data  
  2005 · ~1 hour Turkish; 10 speakers · Automatic Speech Recognition · ELRA END USER / ELRA VAR · Paid
- **[GlobalPhone Turkish Pronunciation Dictionary](https://catalog.elra.info/en-us/repository/browse/ELRA-S0361/)** — Turkish pronunciation dictionary in Romanized script  
  2005 · 31,330 entries / 31,087 Turkish words · Pronunciation Lexicon · ELRA END USER · Paid

<sub>[back to contents](#contents)</sub>

## Vision, OCR & Multimodal

- **[Akis-Ottoman-Dataset (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/Akis-Ottoman-Dataset)** — Ottoman document line images with transcriptions  
  2026-08 · 8,036 line images · 583.0 MB · Ottoman Turkish Handwriting Recognition · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/Akis-Ottoman-Dataset/tree/main)
- **[CHURRO Ottoman Subset (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/CHURRO-Ottoman-Turkish-Subset)** — Historical Ottoman documents from CHURRO-DS  
  2026-08 · 237 images · 550.1 MB · Ottoman Turkish Handwriting Recognition · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/CHURRO-Ottoman-Turkish-Subset/tree/main)
- **[Osmanlıca Ekmek ve Nişasta Kitabı (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/OsmanlicaEkmekveNisastaKitabi)** — Ottoman-script book on bread-making, 1915  
  2026-08 · 16 page images · 3.5 MB · OCR · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/OsmanlicaEkmekveNisastaKitabi/tree/main)
- **[OpenITI-MAKHZAN Ottoman Lines (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/OpenITI-MAKHZAN-Ottoman-Lines)** — Line-level Ottoman-language transcription data  
  2026-07 · 3,654 line images · 566.1 MB · Ottoman Turkish Handwriting Recognition · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/OpenITI-MAKHZAN-Ottoman-Lines/tree/main)
- **[TUBITAK Science Olympiad Dataset](https://huggingface.co/datasets/ytu-ce-cosmos/tubitak-science-olympiad-tr)** — Science Olympiad multiple-choice and open questions  
  2026-03 · 2,698 Turkish rows · 528.9 MB · Multimodal Benchmarking · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/tubitak-science-olympiad-tr/tree/main)
- **[Turkish Visual Reasoning Dataset](https://huggingface.co/datasets/Berkesule/Turkish-Visual-Reasoning-Dataset)** — Multimodal benchmark for vision-language reasoning  
  2026 · 3,775 rows · 146.6 MB · Visual Reasoning · Open · [Files](https://huggingface.co/datasets/Berkesule/Turkish-Visual-Reasoning-Dataset/tree/main)
- **[Turkish OCR Synthetic Dataset (emredeveloper)](https://huggingface.co/datasets/emredeveloper/turkish-ocr)** — Synthetic images with Turkish text for OCR  
  2025-11 · 1,388 images; 1,000 documented transcriptions · 409.3 MB · OCR · MIT · Open · [Files](https://huggingface.co/datasets/emredeveloper/turkish-ocr/tree/main)
- **[MMStar_tr](https://huggingface.co/datasets/kesimeg/MMStar_tr)** — Translated and manually verified MMStar benchmark  
  2025-10 · 1,500 Turkish rows · 42.2 MB · Multimodal Benchmarking · Open · [Files](https://huggingface.co/datasets/kesimeg/MMStar_tr/tree/main)
- **[YKSBench](https://huggingface.co/datasets/metu-yks/yksbench)** — Visually grounded exam-style reasoning benchmark  
  2025-08 · 2,047 rows · 214.9 MB · Multimodal Benchmarking · Open · [Files](https://huggingface.co/datasets/metu-yks/yksbench/tree/main)
- **[PD12M-Turkish-Images-cleaned_37k](https://huggingface.co/datasets/umarigan/PD12M-Turkish-Images-cleaned_37k)** — Turkish captions describing public domain images  
  2025-07 · 37,711 rows · 92.2 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/umarigan/PD12M-Turkish-Images-cleaned_37k/tree/main)
- **[image-captioning-turkish](https://huggingface.co/datasets/ituperceptron/image-captioning-turkish)** — Translated BLIP3o long and short captions  
  2025-05 · 1,046,234 Turkish rows · 63.8 GB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ituperceptron/image-captioning-turkish/tree/main)
- **[unsloth-pmc-vqa-tr](https://huggingface.co/datasets/nezahatkorkmaz/unsloth-pmc-vqa-tr)** — Turkish medical VQA text; images not bundled  
  2025-05 · 417,496 rows · 244.6 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/nezahatkorkmaz/unsloth-pmc-vqa-tr/tree/main)
- **[turkish-medical-vqa-evaluated](https://huggingface.co/datasets/nezahatkorkmaz/turkish-medical-vqa-evaluated)**  
  2025-04 · 3,515 rows · 17.4 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/nezahatkorkmaz/turkish-medical-vqa-evaluated/tree/main)
- **[image-dataset](https://huggingface.co/datasets/ozertuu/image-dataset)**  
  2025-04 · 26,002 rows · 856.3 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ozertuu/image-dataset/tree/main)
- **[turkish-image-description-datasetV2](https://huggingface.co/datasets/ozertuu/turkish-image-description-datasetV2)** — Turkish translations of English image descriptions  
  2025-04 · 19,610 rows · 815.6 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ozertuu/turkish-image-description-datasetV2/tree/main)
- **[AyaVisionBench](https://huggingface.co/datasets/CohereLabs/AyaVisionBench)** — Multilingual image-question pairs, 23 languages  
  2025-03 · 135 Turkish rows · 58.1 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/AyaVisionBench/tree/main)
- **[m-WildVision](https://huggingface.co/datasets/CohereLabs/m-WildVision)** — Translated multilingual vision-LLM evaluation prompts  
  2025-03 · 500 Turkish rows · 134.8 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/m-WildVision/tree/main)
- **[Turkish-medical-visual-question-answering-LLaVa-dataset](https://huggingface.co/datasets/nezahatkorkmaz/Turkish-medical-visual-question-answering-LLaVa-dataset)** — Radiology image visual question-answering pairs  
  2025-03 · 314 images; 3,515 Turkish QA pairs · 16.6 MB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/nezahatkorkmaz/Turkish-medical-visual-question-answering-LLaVa-dataset/tree/main)
- **[pisc-tr](https://huggingface.co/datasets/berhaan/pisc-tr)** — Turkish social-relationship visual question answering  
  2024-12 · 948 rows · 146.8 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/berhaan/pisc-tr/tree/main)
- **[bilim_teknik_mini_colpali](https://huggingface.co/datasets/muhammetfatihaktug/bilim_teknik_mini_colpali)** — Turkish science-magazine documents for ColPali retrieval  
  2024-12 · 4,504 Turkish rows · 486.4 MB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/muhammetfatihaktug/bilim_teknik_mini_colpali/tree/main)
- **[PD12M Turkish](https://huggingface.co/datasets/umarigan/PD12M-Turkish)** — Translated text-to-image captions, Turkish  
  2024-12 · 12,249,454 rows · 3.6 GB · Vision-Language · CDLA-Permissive-2.0 · Open · [Files](https://huggingface.co/datasets/umarigan/PD12M-Turkish/tree/main)
- **[tr-textbook-ColPali](https://huggingface.co/datasets/selimc/tr-textbook-ColPali)** — Turkish textbook documents for ColPali retrieval  
  2024-12 · 2,999 rows · 269.4 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/selimc/tr-textbook-ColPali/tree/main)
- **[ALM-Bench](https://huggingface.co/datasets/MBZUAI/ALM-Bench)** — Multilingual multimodal evaluation benchmark  
  2024-11 · 22,763 total; 305 Turkish · 2.13 GB (all languages) · Vision-Language · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/MBZUAI/ALM-Bench/tree/main)
- **[flickr8k-tr-detailed-captions](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-detailed-captions)** — Detailed captions generated by GPT-4o-mini  
  2024-10 · 8,000 Turkish rows · 1.1 GB · Vision-Language · CC0 1.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-detailed-captions/tree/main)
- **[PangeaIns](https://huggingface.co/datasets/neulab/PangeaInstruct)** — Multilingual multimodal instructions, 39 languages  
  2024-10 · 783.7 GB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/neulab/PangeaInstruct/tree/main)
- **[cut_TRV_all_1017](https://huggingface.co/datasets/YxBxRyXJx/cut_TRV_all_1017)**  
  2024-10 · 2,500 Turkish rows · 381.6 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/YxBxRyXJx/cut_TRV_all_1017/tree/main)
- **[cut_TRV_ver2_1019](https://huggingface.co/datasets/YxBxRyXJx/cut_TRV_ver2_1019)**  
  2024-10 · 2,489 Turkish rows · 47.9 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/YxBxRyXJx/cut_TRV_ver2_1019/tree/main)
- **[TR-VLM-DPO-Dataset](https://huggingface.co/datasets/ucsahin/TR-VLM-DPO-Dataset)**  
  2024-09 · ~10,000 image-question examples · 1.4 GB · Direct Preference Optimization · Open · [Files](https://huggingface.co/datasets/ucsahin/TR-VLM-DPO-Dataset/tree/main)
- **[VisIT-Bench-tr](https://huggingface.co/datasets/TFLai/VisIT-Bench-tr)**  
  2024-08 · 574 Turkish rows · 335.4 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/TFLai/VisIT-Bench-tr/tree/main)
- **[Turkish VLM-Mix Benchmark](https://huggingface.co/datasets/ucsahin/Turkish-VLM-Mix-Benchmark)** — Translated multimodal samples from multiple VLM datasets  
  2024-08 · 35,288 rows · 4.43 GB · Vision-Language Benchmarking · Open · [Files](https://huggingface.co/datasets/ucsahin/Turkish-VLM-Mix-Benchmark/tree/main)
- **[TurkishLLaVA Pretrain Dataset](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Pretrain)** — Translated vision-language pretraining data  
  2024-08 · 595,375 Turkish rows · 13.2 GB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Pretrain/tree/main)
- **[COCO-OD-TR-Single-Objects-v2](https://huggingface.co/datasets/ucsahin/COCO-OD-TR-Single-Objects-v2)** — Turkish-labeled COCO object-detection instructions  
  2024-08 · 153,128 Turkish rows · 23.2 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ucsahin/COCO-OD-TR-Single-Objects-v2/tree/main)
- **[turkce-kitap](https://huggingface.co/datasets/ytu-ce-cosmos/turkce-kitap)** — 100K Turkish books for OCR training  
  2024-08 · 108,355 rows · 120.2 MB · OCR · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/turkce-kitap/tree/main)
- **[Turkish-LLaVA-Finetune](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Finetune)** — Finetuning data combined with Turkish books  
  2024-08 · 522,611 rows · 996.5 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Finetune/tree/main)
- **[LLaVA1.5-Data-Turkish](https://huggingface.co/datasets/99eren99/LLaVA1.5-Data-Turkish)** — Translated LLaVA instruction and pretrain data  
  2024-07 · 1.0 GB · Vision-Language · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/99eren99/LLaVA1.5-Data-Turkish/tree/main)
- **[flickr30k-tr](https://huggingface.co/datasets/atasoglu/flickr30k-turkish)** — Machine-translated Flickr30k image captions  
  2024-07 · 31,014 rows · 4.3 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr30k-turkish/tree/main)
- **[flickr8k-tr-mt](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-mt)** — Machine-translated Flickr8k image captions  
  2024-07 · 8,000 rows · 1.1 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-mt/tree/main)
- **[TasvirEt](https://semihyagcioglu.com/projects/tasviret/)** — Human-written Turkish captions for Flickr8k images  
  2024-04 · 12,222 Turkish captions for 8,000 images · 1.03 GB · Vision-Language · CC0 1.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr8k-turkish)
- **[Turkish Clip Dataset](https://huggingface.co/datasets/umarigan/turkish_clip_dataset_with_text_embeddings)** — Turkish image-caption pairs for CLIP  
  2024-01 · 410,017 rows · 30.1 GB · Vision-Language · CreativeML OpenRAIL-M · Open · [Files](https://huggingface.co/datasets/umarigan/turkish_clip_dataset_with_text_embeddings/tree/main)
- **[E-TSL (Educational TSL)](https://arxiv.org/abs/2405.02984)**  
  2024 · 1,410 videos; ~24 hours; 11 signers · Continuous Sign Language Recognition
- **[STS-TR (Synthetic Turkish Scene Text)](https://www.kaggle.com/datasets/serdaryildiz/synthetic-turkish-scene-text-recognition-dataset)**  
  2024 · 12M+ synthetic scene-text images · 75.6 GB · Scene Text Recognition · CC BY-NC 4.0 · Open
- **[TS-TR (Turkish Scene Text Recognition)](https://www.kaggle.com/datasets/serdaryildiz/turkish-scene-text-recognition-dataset)**  
  2024 · 2,000 images; 7,288 text regions · Scene Text Recognition · CC BY-NC 4.0 · Open
- **[LAION-COCO translated to 200 languages](https://huggingface.co/datasets/visheratin/laion-coco-nllb)** — Translated LAION-COCO image captions, 200 languages  
  2023-06 · 893,884 rows · 10.4 GB · Vision-Language · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/visheratin/laion-coco-nllb/tree/main)
- **[laion2B-multi-turkish-subset](https://huggingface.co/datasets/mcemilg/laion2B-multi-turkish-subset)** — Image-text pairs from LAION-5B  
  2022-11 · 34,638,627 Turkish rows · 4.7 GB · Vision-Language · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/mcemilg/laion2B-multi-turkish-subset/tree/main)
- **[AUTSL](https://cvml.ankara.edu.tr/datasets/)**  
  2020 · 38,336 videos; 226 signs; 43 signers · Isolated Sign Language Recognition · Research use only · Application Required
- **[BosphorusSign22k](https://ogulcanozdemir.github.io/bosphorussign22k/)**  
  2020 · 22,542 videos; 744 signs; ~19 hours · Isolated Sign Language Recognition · Research use only · Application Required
- **[BosphorusSign](https://aclanthology.org/L16-1220/)** — Turkish Sign Language in health and finance domains  
  2016 · 855 sign and phrase samples · Sign Language Recognition · Registration Required
- **[Turkish Handwritten Sticky Notes OCR Image Dataset](https://www.futurebeeai.com/dataset/ocr-dataset/turkish-sticky-notes-ocr-image-dataset)**  
  2,000+ images · OCR · Paid
- **[Turkish Shopping List OCR Image Dataset](https://www.futurebeeai.com/dataset/ocr-dataset/turkish-shopping-list-ocr-image-dataset)**  
  2,000+ images · OCR · Paid

<sub>[back to contents](#contents)</sub>

## How to read an entry

Each entry names the dataset, linked to its canonical source — an official dataset card, repository, catalogue record, or project page — followed by a short description drawn from that source. The line beneath carries the facts in a fixed order: **release date · scale · stored size · task · licence · access**, and a link straight to the files where a direct location is known.

Access reads as one of five conditions: `Open` means publicly downloadable, `Gated` requires accepting terms, `Registration Required` and `Application Required` mean an account or a signed agreement, and `Paid` means the distributor charges a fee.

For a multilingual dataset the Turkish portion is given wherever it could be isolated: a scale written as `260,000 total; 10,000 Turkish questions` means only the second figure is Turkish. A figure carries a qualifier when it needs one — *(Turkish subset)* is the Turkish portion alone, *(all languages)* covers every language in the release, *(GitHub repo)* is repository size including version history — and a leading `~` means the figure is approximate.

**A fact that could not be verified from an authoritative source is simply absent.** Nothing here is estimated or inferred, so a missing licence means the licence could not be established — not that the dataset has none.

Two conventions are worth knowing. A licence is recorded only when it covers the data itself: where a repository's licence turned out to cover its loader code or its documentation rather than the dataset, it was left off. And for a dataset whose canonical source is a Hugging Face repository, the date is when it was published there, which can be later than an original release elsewhere.

## Contributing

Corrections and additions are welcome — open an issue, or send a pull request if you already have the details.

The one rule is that every value must be traceable to an authoritative source: the dataset's own page, its repository, its paper, or the archive that distributes it. An empty field is better than a plausible guess, so leaving one blank is a perfectly good contribution. When adding a dataset, please include the link you checked it against; when correcting one, say what the source states. Reports of dead links, moved datasets, and duplicate entries are as useful as new additions — several entries here were fixed or removed exactly that way.

## License

The catalog text in this repository is available under CC BY 4.0. Each dataset carries its own license, listed above.
