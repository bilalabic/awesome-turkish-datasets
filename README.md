<!-- Generated from datasets.json by scripts/build.mjs. Edit datasets.json (and scripts/readme.tmpl.md for prose), then run: node scripts/build.mjs -->
# Awesome Turkish Datasets

[![Datasets](https://img.shields.io/badge/datasets-325-555)](https://bilalabic.github.io/awesome-turkish-datasets/) [![Catalog licence](https://img.shields.io/badge/catalog_licence-CC_BY_4.0-555)](LICENSE)

A curated, verified catalog of datasets for Turkish across language, speech, vision, and multimodal AI: text corpora, LLM instruction and benchmark sets, speech recordings, OCR and vision-language data.

**[Search and filter the catalog →](https://bilalabic.github.io/awesome-turkish-datasets/)** Every dataset also has its own page with its source, licence and access conditions.

Turkish datasets are scattered across dataset cards, university pages, shared-task archives and catalogue records, and lists of them tend to repeat figures long after those figures stop being true. Every entry here was checked against the dataset itself rather than against another list: the data was located and opened, its Turkish content read, and the licence taken from wherever the data is actually distributed. Anything that could not be confirmed was left out rather than filled in with a plausible value.

Paid, gated and registration-gated datasets are listed alongside open ones, with their conditions stated. What is left out: releases whose Turkish portion cannot be separated from the other languages, resources that turn out to be a model, a tool or a paper rather than data, and datasets with no obtainable copy anywhere. [METHODOLOGY.md](METHODOLOGY.md) has the full rules.

**325 datasets** — 241 text/NLP · 32 speech · 52 vision/multimodal

Last reviewed November 2026 · [searchable version](https://bilalabic.github.io/awesome-turkish-datasets/) with filters by category, task and access

## Contents

- [Text, NLP & LLM](#text-nlp--llm) (241)
- [Speech & Audio](#speech--audio) (32)
- [Vision, OCR & Multimodal](#vision-ocr--multimodal) (52)

Each entry reads **name** — description, then `release date · scale · size · task · licence · access`. A fact that is missing could not be verified. [How to read an entry](#how-to-read-an-entry) explains the rest.

## Text, NLP & LLM

- **[LoReHLT Turkish Representative Language Pack](https://catalog.ldc.upenn.edu/LDC2026T10)** — Monolingual and parallel Turkish text with audio  
  2026-10-15 · ~422M Turkish words; ~25 hours of audio · Machine Translation; Named Entity Recognition · LDC User Agreement for Non-Members · Paid
- **[Guardrail-TR](https://huggingface.co/datasets/ytu-ce-cosmos/guardrail-tr)** — Translated and adapted prompt-safety classification data  
  2026-07-19 · 405,270 prompts · 106.3 MB · LLM Safety Classification · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/guardrail-tr/tree/main)
- **[Turkish Conversation Prompt-Injection Dataset](https://huggingface.co/datasets/3nesdeniz/turkish-conversation-prompt-injection)** — Synthetic Turkish conversations for prompt-injection detection  
  2026-07-09 · 750 rows · 44.1 KB · LLM Safety Classification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/3nesdeniz/turkish-conversation-prompt-injection/tree/main)
- **[Turkish-Python-instruction](https://huggingface.co/datasets/bysismo/Turkish-Python-instruction)** — Synthetic Python coding instructions  
  2026-07 · 4,876 rows · 2.8 MB · Instruction Tuning; Code Generation · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/bysismo/Turkish-Python-instruction/tree/main)
- **[ABSA-TR](https://huggingface.co/datasets/ytu-ce-cosmos/absa-tr)** — Review sentences with LLM-annotated aspect sentiment  
  2026-06-13 · 16,031 sentences · 5.2 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/absa-tr/tree/main)
- **[LORELEI Multiway Translated Text](https://catalog.ldc.upenn.edu/LDC2026T06)** — English text translated into 24 languages  
  2026-06 · ~100,000 English source words · Machine Translation · LDC User Agreement for Non-Members · Paid
- **[BLM-CausT](https://zenodo.org/records/20321027)** — Synthetic causative-alternation puzzles from Turkish treebank sentences  
  2026-05-21 · 16,000 instances · 2.4 MB (compressed archive) · Benchmarking · Open
- **[Bilge-Turkish-CoT-50K](https://huggingface.co/datasets/bugrabilge/Bilge-Turkish-CoT-50K)** — Chain-of-thought reasoning examples, 50K samples  
  2026-05 · 50K examples · 815.2 MB · Question Answering; Reasoning; Text Generation · Gemma Terms of Use · Open · [Files](https://huggingface.co/datasets/bugrabilge/Bilge-Turkish-CoT-50K/tree/main)
- **[Hermes Function Calling Türkçe](https://huggingface.co/datasets/Tuguberk/turkish-hermes-function-calling)** — Machine-translated function-calling and tool-use examples  
  2026-05 · 11,567 Turkish rows · 57.1 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/Tuguberk/turkish-hermes-function-calling/tree/main)
- **[Turkish Privacy PII NER Dataset](https://huggingface.co/datasets/BTX24/turkish-privacy-pii-ner)** — Synthetic PII spans for named-entity recognition  
  2026-05 · 103,923 Turkish rows · 15.7 MB · Named Entity Recognition · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/BTX24/turkish-privacy-pii-ner/tree/main)
- **[Türkçe Prompt Injection & Jailbreak Veri Seti](https://huggingface.co/datasets/OnerAYTAS/Turkish_prompt_injection_jailbreak_dataset)** — Machine-translated compilation of prompt-injection and jailbreak datasets  
  2026-05 · approximately 20,500 Turkish prompts · 27.3 MB · Benchmarking · Open · [Files](https://huggingface.co/datasets/OnerAYTAS/Turkish_prompt_injection_jailbreak_dataset/tree/main)
- **[Syn-TurnTurk](https://huggingface.co/datasets/tugrulbayrak/Syn-TurnTurk)** — Synthetic Qwen-generated Turkish dialogues for turn-taking  
  2026-04-12 · 1,625 dialogues · 2.4 MB · Dialogue Generation · Open · [Files](https://huggingface.co/datasets/tugrulbayrak/Syn-TurnTurk/tree/main)
- **[XL-SafetyBench](https://huggingface.co/datasets/AIM-Intelligence/XL-SafetyBench)** — Adversarial prompts for cross-cultural LLM safety  
  2026-04 · 550 Turkish rows · 14.6 MB · Benchmarking · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/AIM-Intelligence/XL-SafetyBench/tree/main)
- **[GNACT](https://huggingface.co/datasets/boun-tabilab/turkish_parliamentary_data)** — Century of parliamentary transcripts, OCR-extracted text  
  2026-03-18 · 26,648 session transcripts; 1,936,297 pages · 7.2 GB · Language Modeling · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/boun-tabilab/turkish_parliamentary_data/tree/main)
- **[TurkishLegalBench](https://zenodo.org/records/20680163)** — Seven Turkish legal NLP tasks from high-court documents  
  2026-02-09 · 38,009 court documents · 252.1 MB (compressed archive) · Benchmarking · CC BY-NC-SA 4.0 · Open
- **[diyalog-dataset](https://huggingface.co/datasets/alibayram/diyalog-dataset)** — Synthetic multi-turn dialogues from QA pairs  
  2026-02 · 1,330 Turkish rows · 5.6 MB · Dialogue Generation · Open · [Files](https://huggingface.co/datasets/alibayram/diyalog-dataset/tree/main)
- **[Court of Cassation Caselaw Dataset](https://huggingface.co/datasets/newmindai/caselaw-retrieval)** — Yargıtay decisions with catchword retrieval queries  
  2026-01-16 · 1,381 decisions; 1,386 queries · 2.4 MB · Information Retrieval · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/newmindai/caselaw-retrieval/tree/main)
- **[FineTranslations](https://huggingface.co/datasets/HuggingFaceFW/finetranslations)** — Machine-translated FineWeb 2 parallel text, 500+ languages  
  2026-01 · 58,171,145 Turkish rows · 436.3 GB · Machine Translation · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/finetranslations/tree/main)
- **[ottoman-place-names-gazetteer](https://huggingface.co/datasets/OttomanNLP/ottoman-place-names-gazetteer)** — Ottoman-to-modern Turkish place-name transliterations  
  2026-01 · 44,838 rows · 857.6 KB · Lexical Resource · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/ottoman-place-names-gazetteer/tree/main)
- **[temiz-wiki](https://huggingface.co/datasets/turkish-nlp-suite/temiz-Wiki)** — Cleaned Turkish Wikipedia text dump  
  2026-01 · 360,175 Turkish rows · 863.4 MB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-Wiki/tree/main)
- **[Türkçe QA + Çoklu Diyalog Verisi](https://huggingface.co/datasets/sixfingerdev/turkish-qa-multi-dialog-dataset)** — Merged QA pairs and multi-turn dialogues  
  2025-12 · ~19,000 QA examples; ~2,000 dialogue sequences · 7.5 MB · Question Answering; Dialogue Generation · MIT · Open · [Files](https://huggingface.co/datasets/sixfingerdev/turkish-qa-multi-dialog-dataset/tree/main)
- **[Cosmos-Turkish-Corpus-v1.0](https://huggingface.co/datasets/ytu-ce-cosmos/Cosmos-Turkish-Corpus-v1.0)** — 15B-token Turkish continual-pretraining corpus  
  2025-11 · 9,075,453 Turkish rows · 22.8 GB · Language Modeling · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Cosmos-Turkish-Corpus-v1.0/tree/main)
- **[Turkish-SFT-Dataset-v1.0](https://huggingface.co/datasets/AlicanKiraz0/Turkish-SFT-Dataset-v1.0)** — Synthetic instruction-following and reasoning SFT examples  
  2025-10 · 5,579 Turkish rows · 49.9 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/AlicanKiraz0/Turkish-SFT-Dataset-v1.0/tree/main)
- **[Global PIQA Non-Parallel](https://huggingface.co/datasets/mrlbenchmarks/global-piqa-nonparallel)** — Hand-built commonsense reasoning benchmark, 100+ languages  
  2025-10 · 100 Turkish rows · 139.3 KB · Benchmarking · Open · [Files](https://huggingface.co/datasets/mrlbenchmarks/global-piqa-nonparallel/tree/main)
- **[GPQA Extended Translated to Turkish Language](https://huggingface.co/datasets/ytu-ce-cosmos/gpqa-extended_tr)** — Machine-translated GPQA extended graduate-level science questions  
  2025-10 · 546 Turkish rows · 405.6 KB · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/gpqa-extended_tr/tree/main)
- **[Türkçe Genel Kültür Soruları](https://huggingface.co/datasets/nisancoskun/turkish_general_knowledge_qa)** — Synthetic question-answering pairs via Llama-4  
  2025-10 · 1,000 question-answer pairs · 460.7 KB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/nisancoskun/turkish_general_knowledge_qa/tree/main)
- **[TokSuite Turkish](https://huggingface.co/datasets/toksuite/toksuite_turkish)** — Tokenizer-robustness multiple-choice questions with perturbations  
  2025-09-14 · 621 Turkish rows · 654.9 KB · Benchmarking · MIT · Open · [Files](https://huggingface.co/datasets/toksuite/toksuite_turkish/tree/main)
- **[FinePDFs](https://huggingface.co/datasets/HuggingFaceFW/finepdfs)** — Text extracted from PDF documents  
  2025-09 · 1,700,570 Turkish rows · 27.3 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/finepdfs/tree/main)
- **[BILGE-Wiki-Tr-Plus](https://huggingface.co/datasets/BILGEM-AI/BILGE-Wiki-Tr-Plus)** — Turkish Wikipedia with model-generated topic and quality labels  
  2025-08-26 · 618,557 rows · 1.1 GB · Language Modeling · Open · [Files](https://huggingface.co/datasets/BILGEM-AI/BILGE-Wiki-Tr-Plus/tree/main)
- **[TURSpider](https://huggingface.co/datasets/AliBugra/TURSpider)** — Human-translated Spider Text-to-SQL dataset  
  2025-08 · 8,659 training pairs; 1,034 development pairs · 2.1 MB · Text-to-SQL · Open · [Files](https://huggingface.co/datasets/AliBugra/TURSpider/tree/main)
- **[fineweb-edu-translated (Turkish)](https://huggingface.co/datasets/Helsinki-NLP/fineweb-edu-translated)** — Machine-translated FineWeb-Edu documents (OPUS-MT, HPLT-MT)  
  2025-07-24 · 36,704,000 Turkish rows · 113.5 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/Helsinki-NLP/fineweb-edu-translated/tree/main)
- **[RAGTruth-TR](https://huggingface.co/datasets/newmindai/RAGTruth-TR)** — Translated RAGTruth hallucination-detection benchmark  
  2025-06-18 · 17,790 rows · 17.1 MB · Benchmarking · MIT · Open · [Files](https://huggingface.co/datasets/newmindai/RAGTruth-TR/tree/main)
- **[TurBLiMP](https://github.com/ezgibasar/TurBLiMP)** — Minimal pairs for Turkish grammatical phenomena  
  2025-06-16 · 16,000 minimal pairs · ~1.1 MB (GitHub repo) · Benchmarking · CC BY 4.0 · Open · [Files](https://github.com/ezgibasar/TurBLiMP/tree/main/data)
- **[turkish-math-186k](https://huggingface.co/datasets/ituperceptron/turkish-math-186k)** — Machine-translated NuminaMath math problems  
  2025-05 · 185,937 Turkish rows · 130.2 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ituperceptron/turkish-math-186k/tree/main)
- **[THY-SA](https://huggingface.co/datasets/trmteb/thy_sa)** — Turkish Airlines tweets with sentiment labels  
  2025-05 · 23,300 Turkish rows · Sentiment Analysis · Open · [Files](https://huggingface.co/datasets/trmteb/thy_sa/tree/main)
- **[Türkçe Tree of Thoughts (ToT) Veri Seti](https://huggingface.co/datasets/emre/ct_tree_of_thought_turkish)** — Generated Tree-of-Thoughts reasoning data from Turkish Wikipedia  
  2025-05 · 639 Turkish rows · 28.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/emre/ct_tree_of_thought_turkish/tree/main)
- **[Medium Turkish Math Reasoning](https://huggingface.co/datasets/erayalp/medium_turkish_math_reasoning)** — Curriculum-based multi-step math reasoning  
  2025-04 · 1,085 Turkish rows · 311.0 KB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/erayalp/medium_turkish_math_reasoning/tree/main)
- **[The Xi’an Multi-Language Learner Corpus](https://catalog.ldc.upenn.edu/LDC2025T03)** — Multilingual learner essays by Chinese students  
  2025-03 · 22 Turkish texts; 3,719 Turkish tokens · Language Modeling · LDC User Agreement for Non-Members · Paid
- **[TUMLU-mini (Turkish)](https://huggingface.co/datasets/jafarisbarov/TUMLU-mini)** — Native school-exam questions in Turkic languages  
  2025-02-18 · 945 Turkish rows · 262.3 KB (Turkish subset) · Multiple-Choice Question Answering · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/jafarisbarov/TUMLU-mini/tree/main)
- **[FineWeb2-HQ (Turkish)](https://huggingface.co/datasets/epfml/FineWeb2-HQ)** — Top-10% quality-filtered subset of FineWeb 2  
  2025-02-17 · 8,578,808 Turkish rows · 107.3 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/epfml/FineWeb2-HQ/tree/main)
- **[M-ABSA (Turkish)](https://huggingface.co/datasets/Multilingual-NLP/M-ABSA)** — Machine-translated aspect-sentiment triplets with human review  
  2025-02-13 · 14,776 Turkish rows · 2.6 MB (Turkish subset) · Sentiment Analysis · Open · [Files](https://huggingface.co/datasets/Multilingual-NLP/M-ABSA/tree/main)
- **[ThinkingData-200K-Turkish](https://huggingface.co/datasets/erythropygia/ThinkingData-200K-Turkish)** — Machine-translated reasoning and instruction examples  
  2025-02 · 208,640 Turkish rows · 0.98 GB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/erythropygia/ThinkingData-200K-Turkish/tree/main)
- **[turkish_medical_reasoning](https://huggingface.co/datasets/ituperceptron/turkish_medical_reasoning)** — Machine-translated medical reasoning problems with DeepSeek-R1 traces  
  2025-02 · 7,208 rows · 40.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ituperceptron/turkish_medical_reasoning/tree/main)
- **[OpenThoughts-TR-18k](https://huggingface.co/datasets/selimc/OpenThoughts-TR-18k)** — Translated synthetic reasoning dataset subset  
  2025-02 · 17,657 Turkish rows · 202.8 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/selimc/OpenThoughts-TR-18k/tree/main)
- **[dolphin-r1-turkish](https://huggingface.co/datasets/WiroAI/dolphin-r1-turkish)** — Turkish duplicate of Dolphin-R1 reasoning samples  
  2025-02 · 107,561 Turkish rows · 252.1 MB · Reasoning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/WiroAI/dolphin-r1-turkish/tree/main)
- **[HisTR](https://huggingface.co/datasets/BUCOLIN/HisTR)** — Historical Turkish NER dataset spanning centuries  
  2024-12 · 811 annotated sentences · 256.5 KB · Named Entity Recognition · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/BUCOLIN/HisTR/tree/main)
- **[Everyday Turkish Conversations](https://huggingface.co/datasets/SoAp9035/everyday-conversations-tur)** — User-assistant conversations on everyday topics  
  2024-12 · 3,000 Turkish rows · 4.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/SoAp9035/everyday-conversations-tur/tree/main)
- **[FineWeb 2](https://huggingface.co/datasets/HuggingFaceFW/fineweb-2)** — Web pretraining data across 1000+ languages  
  2024-12 · 95.1M Turkish documents; 41.9B Turkish words · 134.8 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/HuggingFaceFW/fineweb-2/tree/main)
- **[INCLUDE (Turkish)](https://huggingface.co/datasets/CohereLabs/include-base-44)** — Regional exam questions across 44 languages  
  2024-11-29 · 568 Turkish rows · 149.9 KB (Turkish subset) · Multiple-Choice Question Answering · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/include-base-44/tree/main)
- **[InstructPapers-TR Dataset](https://huggingface.co/datasets/selimc/InstructPapers-TR)** — Synthetic QA pairs from DergiPark papers  
  2024-11 · 11,550 Turkish rows · 9.9 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/selimc/InstructPapers-TR/tree/main)
- **[MedTurkQuAD](https://huggingface.co/datasets/incidelen/MedTurkQuAD)** — Medical-domain question-answering pairs, Turkish  
  2024-11 · 618 medical articles; 875 paragraphs; 8,200 QA pairs · 11.0 MB · Question Answering · Open · [Files](https://huggingface.co/datasets/incidelen/MedTurkQuAD/tree/main)
- **[OzenliDerlem](https://huggingface.co/datasets/turkish-nlp-suite/OzenliDerlem)** — Curated web articles, journals and magazines  
  2024-11 · 1,388,533 Turkish rows · 4.8 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/OzenliDerlem/tree/main)
- **[orpo-dpo-mix-TR-20k](https://huggingface.co/datasets/selimc/orpo-dpo-mix-TR-20k)** — Translated ORPO-DPO preference-pair mix  
  2024-11 · 19,889 Turkish rows · 70.9 MB · Direct Preference Optimization · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/selimc/orpo-dpo-mix-TR-20k/tree/main)
- **[m-ArenaHard (Turkish)](https://huggingface.co/datasets/CohereLabs/m-ArenaHard)** — Machine-translated Arena-Hard-Auto prompts, 23 languages  
  2024-10-23 · 500 Turkish rows · 163.4 KB (Turkish subset) · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/m-ArenaHard/tree/main)
- **[AkademikDerlem](https://huggingface.co/datasets/turkish-nlp-suite/AkademikDerlem)** — Academic publication text corpus  
  2024-10 · 668,109 Turkish rows · 4.0 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/AkademikDerlem/tree/main)
- **[HPLT2.0](https://hplt-project.org/datasets/v2.0)** — Web-crawled multilingual text corpus  
  2024-10 · 116.57M Turkish documents; 51.67B Turkish words · 426 GB (Turkish subset) · Language Modeling · CC0 1.0 · Open
- **[temiz-OSCAR](https://huggingface.co/datasets/turkish-nlp-suite/temiz-OSCAR)** — Cleaned versions of OSCAR corpora  
  2024-10 · 23,739,767 Turkish rows · 60.4 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-OSCAR/tree/main)
- **[turkish_exam_instructions](https://huggingface.co/datasets/bezir/turkish_exam_instructions)** — Exam questions from TR-MMLU with Gemini-generated answers  
  2024-09 · 41,377 Turkish rows · 16.1 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/bezir/turkish_exam_instructions/tree/main)
- **[alpaca-tr](https://huggingface.co/datasets/BrewInteractive/alpaca-tr)** — Localized Alpaca GPT-4 instructions via Gemini  
  2024-09 · 45,331 Turkish rows · 22.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/BrewInteractive/alpaca-tr/tree/main)
- **[Multilingual RewardBench (M-RewardBench)](https://huggingface.co/datasets/CohereLabsCommunity/multilingual-reward-bench)** — Translated RewardBench preference triples, 23 languages  
  2024-09 · 2,869 Turkish rows · 2.4 MB · Benchmarking · ODC Attribution · Open · [Files](https://huggingface.co/datasets/CohereLabsCommunity/multilingual-reward-bench/tree/main)
- **[WikiRAG-TR](https://huggingface.co/datasets/Metin/WikiRAG-TR)** — Synthetic QA from Wikipedia introductions  
  2024-08 · 5,999 Turkish rows · 20.7 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/Metin/WikiRAG-TR/tree/main)
- **[MetaMathQA-Turkish-corrected](https://huggingface.co/datasets/onur48/MetaMathQA-Turkish-corrected)** — Turkish version of MetaMathQA  
  2024-08 · 395,000 Turkish rows · 308.7 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/onur48/MetaMathQA-Turkish-corrected/tree/main)
- **[OpenOrca-tr-1-million-sharegpt](https://huggingface.co/datasets/TFLai/OpenOrca-tr-1-million-sharegpt)** — Translated OpenOrca conversations in ShareGPT format  
  2024-08 · 1,000,000 rows · 2.0 GB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/TFLai/OpenOrca-tr-1-million-sharegpt/tree/main)
- **[TR-MMLU (Turkish MMLU)](https://huggingface.co/datasets/alibayram/turkish_mmlu)** — Turkish academic and professional exam questions  
  2024-08 · 279,302 rows · 52.4 MB · Multiple-Choice Question Answering · Gated · [Files](https://huggingface.co/datasets/alibayram/turkish_mmlu/tree/main)
- **[gsm8k_tr](https://huggingface.co/datasets/ytu-ce-cosmos/gsm8k_tr)** — Translated GSM8K questions with GPT-4o-generated answers  
  2024-08 · 8,792 rows · 5.0 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/gsm8k_tr/tree/main)
- **[BuyukSinema](https://huggingface.co/datasets/turkish-nlp-suite/BuyukSinema)** — Merge of BeyazPerde and Sinefil movie review datasets  
  2024-07 · 87,328 Turkish rows · 34.9 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/BuyukSinema/tree/main)
- **[InstructTurca](https://huggingface.co/datasets/turkish-nlp-suite/InstrucTurca)** — Machine-translated instructions compiled from nine English datasets  
  2024-07 · ~2.58M examples · 4.2 GB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/InstrucTurca/tree/main)
- **[LlamaTurk-Instruction-Set](https://huggingface.co/datasets/metunlp/LlamaTurk-Instruction-Set)** — Instruction-tuning set from the LlamaTurk study  
  2024-05-13 · 52,002 rows · 22.6 MB · Instruction Tuning · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/metunlp/LlamaTurk-Instruction-Set/tree/main)
- **[SentiTurca](https://huggingface.co/datasets/turkish-nlp-suite/SentiTurca)** — Sentiment benchmark built from MusteriYorumlari, BuyukSinema, TurkishHateMap  
  2024-05 · 234,345 labeled rows · 70.4 MB · Sentiment Analysis; Hate Speech Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/SentiTurca/tree/main)
- **[alpaca-turkish-combined](https://huggingface.co/datasets/cenfis/alpaca-turkish-combined)** — Merged Alpaca-style instruction datasets, Turkish  
  2024-05 · 82,353 Turkish rows · 25.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/cenfis/alpaca-turkish-combined/tree/main)
- **[ForumSohbetleri](https://huggingface.co/datasets/turkish-nlp-suite/ForumSohbetleri)** — Turkish web-forum text corpus  
  2024-05 · 2,925,975 Turkish rows · 14.2 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/ForumSohbetleri/tree/main)
- **[temiz-mC4](https://huggingface.co/datasets/turkish-nlp-suite/temiz-mC4)** — Cleaned Turkish split of CulturaX  
  2024-05 · 76.4M documents; 21.06B words · 178.9 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/temiz-mC4/tree/main)
- **[TrCOLA](https://huggingface.co/datasets/turkish-nlp-suite/TrCOLA)** — Turkish linguistic acceptability, LLM-generated variants, 9.9K  
  2024-05 · 9,916 Turkish rows · 2.8 MB · Text Classification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TrCOLA/tree/main)
- **[TrMorphTestser](https://huggingface.co/datasets/turkish-nlp-suite/turkish-morph-analysis)** — Lexicon-generated Turkish morphological segmentation test set  
  2024-05 · 210,972 Turkish rows · 17.0 MB · Morphological Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/turkish-morph-analysis/tree/main)
- **[TurkishHateMap (Hate Map of Türkiye)](https://huggingface.co/datasets/turkish-nlp-suite/TurkishHateMap)** — Hate speech across misogyny, politics, ethnicity  
  2024-05 · 52,175 Turkish rows · 27.1 MB · Text Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TurkishHateMap/tree/main)
- **[Türkçe Masallar](https://huggingface.co/datasets/umutphp/masallar)** — Folk tales compiled from Masal Masal Türkiye  
  2024-05 · 1,528 Turkish rows · 7.7 MB · MIT · Open · [Files](https://huggingface.co/datasets/umutphp/masallar/tree/main)
- **[TrGLUE](https://huggingface.co/datasets/turkish-nlp-suite/TrGLUE)** — GLUE-style Turkish benchmark; LLM-assisted labels, translated STS-B  
  2024-04 · 813,313 rows across 8 tasks · 181 MB · Benchmarking · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/TrGLUE/tree/main)
- **[instruction-turkish](https://huggingface.co/datasets/atasoglu/instruction-turkish)** — Machine-translated HuggingFaceH4 instructions via Google Translate  
  2024-04 · 327 rows · 602.6 KB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/instruction-turkish/tree/main)
- **[turkish-instruction-dataset-prepared](https://huggingface.co/datasets/ardaorcun/turkish-instruction-dataset-prepared)** — Concatenation of merve and beratcmn Turkish instruction datasets  
  2024-03 · 66,019 rows · 23 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/ardaorcun/turkish-instruction-dataset-prepared/tree/main)
- **[truthful_qa_tr](https://huggingface.co/datasets/Atilla00/truthful_qa_tr)** — Translated TruthfulQA generation and multiple-choice sets  
  2024-03 · 817 questions in 2 formats (1,634 rows) · 525.8 KB · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/Atilla00/truthful_qa_tr/tree/main)
- **[Lima Turkish](https://huggingface.co/datasets/beratcmn/lima-tr)** — Translated LIMA prompts via Gemini  
  2024-03 · 1,330 Turkish rows · 6.0 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/beratcmn/lima-tr/tree/main)
- **[gsm8k-Translated-TR](https://huggingface.co/datasets/NovusResearch/gsm8k-Translated-TR)** — Translated GSM8K math word problems  
  2024-03 · 8,792 rows · 5.5 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/NovusResearch/gsm8k-Translated-TR/tree/main)
- **[OpenHermes-2.5-Translated-TR](https://huggingface.co/datasets/NovusResearch/OpenHermes-2.5-Translated-TR)** — Translated subset of OpenHermes 2.5 conversations  
  2024-03 · 5,000 rows · 9.0 MB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/NovusResearch/OpenHermes-2.5-Translated-TR/tree/main)
- **[OrcaDPO (distilabel-intel-orca-dpo-pairs-tr)](https://huggingface.co/datasets/malhajar/distilabel-intel-orca-dpo-pairs-tr)** — Translated distilabel Intel Orca DPO pairs  
  2024-03 · 9,120 Turkish rows · 43.5 MB · Direct Preference Optimization · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/distilabel-intel-orca-dpo-pairs-tr/tree/main)
- **[OrcaDPO (orca_dpo_pairs-tr)](https://huggingface.co/datasets/malhajar/orca_dpo_pairs-tr)** — Translated HuggingFaceH4 Orca DPO pairs  
  2024-03 · 10,846 Turkish rows · 16.1 MB · Direct Preference Optimization · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/orca_dpo_pairs-tr/tree/main)
- **[TruthfulQA-TR](https://huggingface.co/datasets/malhajar/truthfull_qa-tr)** — Translated TruthfulQA benchmark questions  
  2024-03 · 816 Turkish questions (2 configs) · 1.64 MB · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/malhajar/truthfull_qa-tr/tree/main)
- **[openhermes_tr](https://huggingface.co/datasets/umarigan/openhermes_tr)** — Machine-translated GPT-4-generated OpenHermes conversations  
  2024-03 · 241,853 Turkish rows · 157.8 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/umarigan/openhermes_tr/tree/main)
- **[vngrs-web-corpus](https://huggingface.co/datasets/vngrs/vngrs-web-corpus)** — Cleaned Turkish OSCAR and mC4 mix  
  2024-03 · 50,336,214 Turkish rows · 84.9 GB · Language Modeling · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/vngrs/vngrs-web-corpus/tree/main)
- **[MusteriYorumlari](https://huggingface.co/datasets/turkish-nlp-suite/MusteriYorumlari)** — 103K e-commerce reviews from Hepsiburada, Trendyol  
  2024-02 · 103,920 Turkish rows · 12.8 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/MusteriYorumlari/tree/main)
- **[aya_dataset_tur](https://huggingface.co/datasets/sayhan/aya_dataset_tur)** — Turkish rows filtered from Aya Dataset  
  2024-02 · 4,296 Turkish rows · 1.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/sayhan/aya_dataset_tur/tree/main)
- **[ucekmez/OpenOrca-tr](https://huggingface.co/datasets/ucekmez/OpenOrca-tr)** — Machine-translated OpenOrca question-answer pairs, 798K  
  2024-02 · 798,350 Turkish rows · 1.2 GB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/ucekmez/OpenOrca-tr/tree/main)
- **[distilabel-intel-orca-dpo-pairs-tr](https://huggingface.co/datasets/duxx/distilabel-intel-orca-dpo-pairs-tr)** — Translated distilabeled OrcaDPO preference pairs  
  2024-01 · 3,979 Turkish rows · 9.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/duxx/distilabel-intel-orca-dpo-pairs-tr/tree/main)
- **[alpaca-gpt4-tr](https://huggingface.co/datasets/malhajar/alpaca-gpt4-tr)** — Translated Alpaca GPT-4 instructions  
  2024-01 · 52,002 rows · 101.1 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/malhajar/alpaca-gpt4-tr/tree/main)
- **[malhajar/OpenOrca-tr](https://huggingface.co/datasets/malhajar/OpenOrca-tr)** — Translated OpenOrca instructions  
  2024-01 · 2,352,811 Turkish rows · 4.8 GB · Instruction Tuning · MIT · Open · [Files](https://huggingface.co/datasets/malhajar/OpenOrca-tr/tree/main)
- **[Global-MMLU (Turkish)](https://huggingface.co/datasets/CohereLabs/Global-MMLU)** — Machine-translated MMLU with human post-edits, 42 languages  
  2024 · ~14.3k Turkish items · 4.2 MB (Turkish subset) · Benchmarking · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/Global-MMLU/tree/main)
- **[MultiTACRED](https://catalog.ldc.upenn.edu/LDC2024T09)** — Machine-translated multilingual relation-extraction sentences  
  2024 · Relation Extraction · LDC User Agreement for Non-Members · Paid
- **[instruction-turkish-poems](https://huggingface.co/datasets/beratcmn/instruction-turkish-poems)** — Turkish poems with generated instructions  
  2023-12 · 4,961 Turkish rows · 6.7 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/beratcmn/instruction-turkish-poems/tree/main)
- **[rephrased-instruction-turkish-poems](https://huggingface.co/datasets/beratcmn/rephrased-instruction-turkish-poems)** — Rephrased instructions for Turkish poems  
  2023-12 · 4,957 Turkish rows · 6.4 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/beratcmn/rephrased-instruction-turkish-poems/tree/main)
- **[No Robots Turkish](https://huggingface.co/datasets/beratcmn/no_robots_turkish)** — Translated version of HuggingFace's instruction dataset  
  2023-12 · 9,499 Turkish rows · 25.3 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/beratcmn/no_robots_turkish/tree/main)
- **[sinefil-movie-revs](https://huggingface.co/datasets/turkish-nlp-suite/sinefil-movie-reviews)** — Audience movie reviews for sentiment analysis  
  2023-12 · 42,914 Turkish rows · 15.8 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/sinefil-movie-reviews/tree/main)
- **[Wikipedia (Turkish)](https://huggingface.co/datasets/wikimedia/wikipedia)** — Parsed Wikipedia articles from the 20231101 Turkish dump  
  2023-11-20 · 534,988 Turkish rows · 552.9 MB (Turkish subset) · Language Modeling · CC BY-SA 3.0 / GFDL · Open · [Files](https://huggingface.co/datasets/wikimedia/wikipedia/tree/main)
- **[Havadis](https://huggingface.co/datasets/turkish-nlp-suite/Havadis)** — Turkish news articles from online newspapers  
  2023-11 · 744,868 Turkish rows · 2.9 GB · Language Modeling · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/Havadis/tree/main)
- **[Finance](https://huggingface.co/datasets/umarigan/turkiye_finance_qa)**  
  2023-10 · 428 Turkish rows · 82.4 KB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/umarigan/turkiye_finance_qa/tree/main)
- **[GLOBAL Multilingual Lexical Data - Monolingual - Level 1](https://catalog.elra.info/en-us/repository/browse/ELRA-M0111_01/)** — Lexicographic word entries across 25 languages  
  2023-10 · Lexical Resource · ELRA VAR · Paid
- **[MULTIGLOSS Multilingual Glossaries - L1-English pair](https://catalog.elra.info/en-us/repository/browse/ELRA-M0112_01/)** — Bilingual word-sense glossary, Turkish-English  
  2023-10 · 13,133 Turkish words and expressions · Lexical Resource · ELRA VAR · Paid
- **[MULTIGLOSS Multilingual Glossaries - L1-English pair + 1 language](https://catalog.elra.info/en-us/repository/browse/ELRA-M0112_02/)** — Trilingual word-sense glossary including Turkish  
  2023-10 · 13,133 Turkish words/expressions, 17,015 senses · Lexical Resource · ELRA VAR · Paid
- **[Parallel Corpora & Domains (bilingual and multilingual)](https://catalog.elra.info/en-us/repository/browse/ELRA-W0336/)** — Bilingual segments across specialized domains  
  2023-10 · 10M segments; 90M tokens (all languages) · Machine Translation · ELRA VAR · Paid
- **[Belebele (Turkish)](https://huggingface.co/datasets/facebook/belebele)** — Multiple-choice reading comprehension, 122 language variants  
  2023-09-01 · 900 Turkish rows · 1.1 MB (Turkish subset) · Multiple-Choice Question Answering · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/facebook/belebele/tree/main)
- **[BeyazPerde All Movie Reviews](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-all-movie-reviews)** — Movie reviews for sentiment classification  
  2023-09 · 44,549 Turkish rows · 22.9 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-all-movie-reviews/tree/main)
- **[Vitamins and Supplements Customer Reviews Dataset](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-reviews)** — E-commerce customer reviews for sentiment  
  2023-09 · 238,590 Turkish rows · 43.6 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-reviews/tree/main)
- **[Vitamins and Supplements NER Dataset](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-NER)** — Named entities in e-commerce and medical reviews  
  2023-09 · 2,472 Turkish rows · 1.8 MB · Named Entity Recognition · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/vitamins-supplements-NER/tree/main)
- **[SIB-200 (Turkish)](https://huggingface.co/datasets/Davlan/sib200)** — Topic classification of FLORES-200 sentences, 200+ languages  
  2023-09 · 1,004 Turkish rows · 162.9 KB (Turkish subset) · Text Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/Davlan/sib200/tree/main)
- **[Turkish-Alpaca](https://huggingface.co/datasets/TFLai/Turkish-Alpaca)** — Turkish translation of Stanford Alpaca  
  2023-08 · 51,914 rows · 24.2 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/TFLai/Turkish-Alpaca/tree/main)
- **[SQuAD-TR](https://huggingface.co/datasets/boun-tabi/squad_tr)** — Machine-translated SQuAD 2.0 in Turkish  
  2023-05 · 113,082 rows: 104,791 train and 8,291 validation · 9.4 MB · Question Answering · Open · [Files](https://github.com/boun-tabi/SQuAD-TR/tree/master/data)
- **[BeyazPerde Top 300 Movie Reviews](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-top-300-movie-reviews)** — Audience reviews of the top 300 movies  
  2023-05 · 4,380 Turkish rows · 2.0 MB · Sentiment Analysis · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/beyazperde-top-300-movie-reviews/tree/main)
- **[Corona-mini](https://huggingface.co/datasets/turkish-nlp-suite/Corona-mini)** — Social-media posts for summarization  
  2023-05 · 175 Turkish rows · 195.8 KB · Summarization · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/Corona-mini/tree/main)
- **[databricks-dolly-15k-tr](https://huggingface.co/datasets/atasoglu/databricks-dolly-15k-tr)** — Machine-translated Databricks Dolly instructions  
  2023-05 · 15,014 Turkish rows · 14.0 MB · Instruction Tuning · CC BY-SA 3.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/databricks-dolly-15k-tr/tree/main)
- **[Bactrian-X](https://huggingface.co/datasets/MBZUAI/Bactrian-X)** — Machine-translated Alpaca and Dolly instructions, 52 languages  
  2023-04 · 67,017 Turkish rows · 18.8 MB · Instruction Tuning · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/MBZUAI/Bactrian-X/tree/main)
- **[stanford-alpaca-cleaned-turkish-translated](https://huggingface.co/datasets/emre/stanford-alpaca-cleaned-turkish-translated)** — AI-translated Stanford Alpaca and GPT-4-LLM instructions  
  2023-04 · 60,563 rows · 9.9 MB · Instruction Tuning · Open · [Files](https://huggingface.co/datasets/emre/stanford-alpaca-cleaned-turkish-translated/tree/main)
- **[OpenAssistant Conversations](https://huggingface.co/datasets/OpenAssistant/oasst1)** — Human-annotated assistant-style conversation messages  
  2023-04 · 88,838 total; 37 Turkish messages · 41.6 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/OpenAssistant/oasst1/tree/main)
- **[OSCAR Turkish](https://huggingface.co/datasets/oscar-corpus/OSCAR-2301)** — Multilingual web corpus filtered from CommonCrawl  
  2023-03 · 26,654,330 Turkish documents; 8,290,890,087 words · 31.0 GB (Turkish subset) · Language Modeling · Gated · [Files](https://huggingface.co/datasets/oscar-corpus/OSCAR-2301/tree/main)
- **[turkish-constitutional-court](https://huggingface.co/datasets/KocLab-Bilkent/turkish-constitutional-court)** — Constitutional Court decisions labeled violation or no violation  
  2023-02-18 · 1,290 court decisions · 10.8 MB · Text Classification · Open · [Files](https://huggingface.co/datasets/KocLab-Bilkent/turkish-constitutional-court/tree/main)
- **[merve/turkish_instructions](https://huggingface.co/datasets/merve/turkish_instructions)**  
  2023 · 51,563 rows · 21.2 MB · Instruction Tuning · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/merve/turkish_instructions/tree/main)
- **[A Twitter offensive language data set with context](https://github.com/boun-tabi/CovidOffensiveLanguageUltimateDatasets)** — Tweet-reply ID pairs labeled for offensive language  
  2023 · 28,808 tweet-reply pairs · 4.1 MB · Text Classification · Open
- **[GEOLINGUAL Multilingual Geographical Entity Tables](https://catalog.elra.info/en-us/repository/browse/ELRA-L0205/)** — Geographical entity names in multiple languages  
  2023 · 200 geographical entities (16 languages) · Lexical Resource · ELRA VAR · Paid
- **[GLOBAL Multilingual Lexical Data - Bilingual - Level 1](https://catalog.elra.info/en-us/repository/browse/ELRA-M0111_04/)** — Bilingual lexicographic core data resource  
  2023 · Lexical Resource · ELRA VAR · Paid
- **[MADAR-Turk](https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/computational-approaches-to-modeling-language-lab/resources.html)** — Human Turkish translation of MADAR Damascus sentences  
  2023 · 2,000 Turkish-translated sentences · Language Resource / Modeling · CC BY-SA 4.0 · Registration Required · [Files](https://docs.google.com/forms/d/1Vje0ZJk2p6JxT2X3m4780c8PuALsjASnCX9T0ZT4fg8/viewform)
- **[turkish-nlp-suite/ATIS Turkish](https://github.com/turkish-nlp-suite/Atis_Turkish)** — Translated ATIS with transfer-learned intents and slots  
  2022-12 · 5,432 sentences · ~1.7 MB (GitHub repo) · Intent and Slot Classification · CC BY-SA 4.0 · Open
- **[A small code-switching corpus of Turkish-English](https://github.com/zeynepyirmibes/code-switching-tr-en)**  
  2022-11 · 390 sentences · 99 KB · Language Identification · Open
- **[Turkish-WikiNER](https://huggingface.co/datasets/turkish-nlp-suite/turkish-wikiNER)** — Wikipedia sentences re-annotated for NER, 18 labels  
  2022-10-30 · 19,967 sentences · 2.2 MB · Named Entity Recognition · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/turkish-nlp-suite/turkish-wikiNER/tree/main)
- **[Turkish Offensive Language Detection Dataset](https://huggingface.co/datasets/Toygar/turkish-offensive-language-detection)** — OffensEval 2020 merged with additional offensive tweets  
  2022-07 · 53,005 labeled tweets · 7.2 MB · Text Classification · Open · [Files](https://huggingface.co/datasets/Toygar/turkish-offensive-language-detection/tree/main)
- **[trseg-41](https://github.com/alisafaya/mukayese)** — Sentence-segmentation benchmark from abstracts, news and tweets  
  2022-02 · 40,000 sentences; 456,000 words · Sentence Segmentation · Open · [Files](https://github.com/alisafaya/mukayese/releases/download/v0.0.1/mukayese-datasets.tar.gz)
- **[trspell-10](https://github.com/alisafaya/mukayese)** — Synthetic misspellings of TS Corpus words  
  2022-02 · 10,000 word pairs · Spelling Correction · Open · [Files](https://github.com/alisafaya/mukayese/releases/download/v0.0.1/mukayese-datasets.tar.gz)
- **[TCL](https://aclanthology.org/W19-3308/)** — Automatically built Turkish connective lexicon  
  2022-01 · 113 connectives; 248 orthographic variants · 76 KB · Language Resource / Modeling · Open · [Files](http://connective-lex.info/getfile.php?file=TCL.json)
- **[MASSIVE (Turkish)](https://huggingface.co/datasets/AmazonScience/massive)** — Intent and slot annotations across 51 languages  
  2022 · 16,521 Turkish utterances · 40.3 MB (all languages) · Intent Classification; Slot Filling · CC BY 4.0 · Open · [Files](https://amazon-massive-nlu-dataset.s3.amazonaws.com/amazon-massive-dataset-1.1.tar.gz)
- **[TRSAv1](https://huggingface.co/datasets/maydogan/Turkish_SentimentAnalysis_TRSAv1)** — Balanced positive, negative and neutral sentiment samples  
  2022 · 150,000 reviews: 50k positive, 50k negative, 50k neutral · 16.1 MB · Sentiment Analysis · Open · [Files](https://huggingface.co/datasets/maydogan/Turkish_SentimentAnalysis_TRSAv1/tree/main)
- **[A semantically-annotated (based on UCCA) data set of 50 sentences from the METU-Sabancı treebank](https://github.com/necvabolucu/semantic-dataset)**  
  2022 · 50 UCCA-annotated sentences · 167 KB · Dependency Parsing · Open
- **[SUNLP-Twitter-NER-Dataset](https://github.com/SU-NLP/SUNLP-Twitter-NER-Dataset)**  
  2022 · 5,000 tweets · 394.6 KB · Named Entity Recognition · Apache-2.0 · Open
- **[The Corpus of Turkish Youth Language (CoTY)](https://osf.io/ek4z8/)** — Spoken corpus of Turkish youth language  
  2022 · 168,748 tokens; 123 speakers · Language Resource / Modeling · Application Required
- **[Large-Scale Hate Speech Datasets](https://github.com/avaapm/hatespeech)** — Cross-domain Turkish-English hate-speech detection data  
  2022 · 100,000 Turkish tweets (v1); 60,310 (v2) · 16.4 MB (all languages) · Text Classification · CC BY-NC-SA 4.0 · Open
- **[TR-News](https://huggingface.co/datasets/batubayk/TR-News)** — News articles with abstracts for summarization  
  2021-08-01 · 307,562 articles · 759.6 MB · Summarization · Open · [Files](https://huggingface.co/datasets/batubayk/TR-News/tree/main)
- **[trnews-64](https://zenodo.org/records/5180654)** — Turkish news text from TS Timeline Corpus  
  2021-08 · 64M words · 123.4 MB · Language Modeling · CC BY 4.0 · Open
- **[trwiki-67](https://zenodo.org/records/5213891)** — Turkish Wikipedia articles from a 2021 dump  
  2021-08 · 67M words · 331.8 MB · Language Modeling · Open
- **[hunspell-tr](https://github.com/tdd-ai/hunspell-tr)** — Turkish spellchecking word list  
  2021-07 · 75,909 dictionary entries · 38.4 MB · Lexical Resource · MPL-2.0 · Open
- **[XL-Sum (Turkish)](https://huggingface.co/datasets/csebuetnlp/xlsum)** — Multilingual BBC article-summary pairs  
  2021-06-29 · 33,970 Turkish rows · 31.5 MB (Turkish subset) · Summarization · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/csebuetnlp/xlsum/tree/main)
- **[ParlaMint 2.1 (Turkish)](https://www.clarin.si/repository/xmlui/handle/11356/1432)** — Turkish parliamentary debate transcripts  
  2021-06 · 3,774,204 utterances (all languages) · 244.35 MB (Turkish subset) · Language Modeling · CC BY 4.0 · Open · [Files](https://www.clarin.si/repository/xmlui/bitstream/handle/11356/1432/ParlaMint-TR.tgz)
- **[Gender-Bias-in-TR-to-EN-MT-Models](https://github.com/NurIren/Gender-Bias-in-TR-to-EN-MT-Models)** — Template-based Turkish sentences with machine translations  
  2021-04 · 3.2 MB · Language Resource / Modeling · Open
- **[IronyTR](https://github.com/teghub/IronyTR)** — Irony texts extended from Turkish Irony Dataset  
  2021 · 600 texts (300 ironic, 300 non-ironic) · ~561 KB (GitHub repo) · Irony Detection · Open
- **[UD Turkish Kenet](https://universaldependencies.org/treebanks/tr_kenet/index.html)** — Treebank of Kenet wordnet dictionary examples  
  2021 · 18,687 sentences; 178,658 tokens · 13.1 MB · Dependency Parsing · CC BY-SA 4.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-Kenet)
- **[STSb-TR](https://github.com/verimsu/STSb-TR)** — Machine-translated Turkish version of STS Benchmark  
  2021 · 8,628 Turkish sentence pairs · 1.5 MB · Semantic Textual Similarity · Open
- **[UDer](https://ufal.mff.cuni.cz/universal-derivations)** — Turkish derivations extracted from Etymological WordNet  
  2021 · 7,774 Turkish lexemes; 5,837 relations · 68.4 MB (all languages) · Morphological Analysis · CC BY-SA 3.0 · Open · [Files](http://hdl.handle.net/11234/1-3247)
- **[xSID](https://github.com/mainlp/xsid)** — Cross-lingual slot and intent detection  
  2021 · 500 test; 300 validation sentences · 278 KB (Turkish subset) · Intent Classification; Slot Filling · CC BY-SA 4.0 · Open
- **[Leipzig corpora](https://corpora.uni-leipzig.de/en?corpusId=tur-tr_web_2019)** — Turkish web-text sentence corpus  
  2020-11 · 1,000,000 Turkish sentences (1M sample) · 219.8 MB (1M-sentence sample) · Language Resource / Modeling · Open · [Files](https://downloads.wortschatz-leipzig.de/corpora/tur-tr_web_2019_1M.tar.gz)
- **[C4](https://huggingface.co/datasets/allenai/c4)** — Cleaned Common Crawl web corpus  
  2020-10 · 110.1 GB (Turkish subset) · Language Modeling · ODC Attribution · Open · [Files](https://huggingface.co/datasets/allenai/c4/tree/main)
- **[NRC-EIL](http://saifmohammad.com/WebPages/AffectIntensity.htm)** — Word emotion-intensity scores, machine-translated to Turkish  
  2020-03 · 9,829 Turkish entries · 29.6 MB (all languages) · Lexical Resource · Non-commercial research use · Open · [Files](http://saifmohammad.com/WebDocs/Lexicons/NRC-Emotion-Intensity-Lexicon.zip)
- **[Turkish Web Treebank (TWT)](https://github.com/google-research-datasets/turkish-treebanks/)** — Human-annotated morphosyntactic treebank  
  2020-03 · 4,851 sentences; 66,466 words · 7.4 MB · Dependency Parsing · Apache-2.0 · Open
- **[WikiPron](https://github.com/CUNY-CL/wikipron)** — Multilingual word-pronunciation mining dataset  
  2020-03 · 12,321 broad; 2,784 narrow pronunciation pairs · 419 KB (Turkish subset) · Pronunciation Lexicon · Open
- **[MKQA (Turkish)](https://github.com/apple/ml-mkqa)** — Open-domain QA pairs across 26 languages  
  2020 · 260,000 total; 10,000 Turkish questions · ~12.4 MB (GitHub repo) · Open-Domain Question Answering · CC BY-SA 3.0 · Open
- **[MLSUM (Turkish)](https://github.com/ThomasScialom/MLSUM)** — Multilingual text summarization corpus  
  2020 · 273,617 Turkish article-summary pairs · Summarization · Non-commercial research use · Open
- **[TrClaim-19](https://github.com/YSKartal/TrClaim19)** — Turkish tweets for check-worthy claim detection  
  2020 · 2,188 deduplicated annotated tweets in v1.1; 2,287 in v1.0 · ~564 KB (GitHub repo) · Check-Worthy Claim Detection · Open · [Files](https://raw.githubusercontent.com/YSKartal/TrClaim19/main/trclaim19_v1_1.csv)
- **[UD Turkish BOUN](https://universaldependencies.org/treebanks/tr_boun/index.html)** — Manually annotated UD treebank of TNC sentences  
  2020 · 9,761 sentences; 121,835 tokens; 125,212 syntactic words · 9.9 MB · Dependency Parsing · CC BY-SA 4.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-BOUN)
- **[WikiLingua (Turkish)](https://github.com/esdurmus/Wikilingua)** — Abstractive summaries extracted from WikiHow  
  2020 · ~770k total; 4,503 Turkish pairs · Summarization · CC BY-NC-SA 3.0 · Open
- **[XCOPA (Turkish)](https://github.com/cambridgeltl/xcopa)** — Multilingual causal commonsense reasoning tasks  
  2020 · 600 Turkish items: 100 validation and 500 test · 53.7 KB (Turkish subset) · Causal Commonsense Reasoning · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/cambridgeltl/xcopa)
- **[#Turki$hTweets](https://github.com/atubakoksal/annotated_tweets)** — Annotated Turkish tweets for text normalization  
  2020 · 2,000 annotated tweets · 557.8 KB · Text Normalization · Open
- **[Turkish Irony Dataset](https://github.com/teghub/Turkish-Irony-Dataset)** — Irony detection in Turkish social media  
  2020 · 220 sentences (110 ironic) · 10.1 KB · Irony Detection · Open
- **[CC-100 Turkish](https://data.statmt.org/cc-100/)** — Turkish monolingual web-crawled text corpus  
  2020 · 5.7 GB (Turkish subset) · Language Modeling · Open · [Files](https://data.statmt.org/cc-100/tr.txt.xz)
- **[CCAligned](https://opus.nlpl.eu/datasets/CCAligned)** — Aligned English-Turkish parallel web-document corpus  
  2020 · 13,650,311 aligned pairs (largest listed Turkish pair) · 1.13 GB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-CCAligned/v1/moses/en-tr.txt.zip)
- **[Cross Lingual Word Embeddings for Turkic Languages](https://github.com/elmurod1202/crosLingWordEmbTurk)** — Google Translate-generated Turkic-English bilingual dictionaries  
  2020 · 9,850-entry Turkish-English dictionary · 174 KB (Turkish subset) · Lexical Resource · Open
- **[MultiNLI-TR](https://huggingface.co/datasets/boun-tabi/nli_tr)** — Machine-translated multi-genre Turkish NLI pairs  
  2020 · 412,702 Turkish sentence pairs · 75.5 MB (compressed archive) · Natural Language Inference · Open · [Files](https://nli-tr.s3.eu-central-1.amazonaws.com/multinli_tr_1.0.zip)
- **[OffensEval-TR 2020](https://huggingface.co/datasets/coltekin/offenseval2020_tr)** — Turkish tweets labeled offensive or not  
  2020 · 35,284 Turkish tweets · 2.0 MB (compressed archive) · Text Classification · CC BY 2.0 · Open · [Files](https://coltekin.github.io/offensive-turkish/offenseval2020-turkish.zip)
- **[SNLI-TR](https://huggingface.co/datasets/boun-tabi/nli_tr)** — Machine-translated Turkish sentence-pair entailment data  
  2020 · 570,152 Turkish sentence pairs · 40.3 MB (compressed archive) · Natural Language Inference · CC BY-SA 4.0 · Open · [Files](https://nli-tr.s3.eu-central-1.amazonaws.com/snli_tr_1.0.zip)
- **[TQuAD](https://github.com/TQuad/turkish-nlp-qa-dataset)** — Turkish question-and-answer pairs  
  2019-12 · 9,200 question-answer pairs; 2,507 paragraphs · ~1.0 MB (GitHub repo) · Question Answering · Open
- **[ConceptNet Numberbatch](https://github.com/commonsense/conceptnet-numberbatch)**  
  2019-08 · 51,308 Turkish entries · 3.19 GB (all languages) · Language Resource / Modeling · CC BY-SA 4.0 · Open · [Files](https://conceptnet.s3.amazonaws.com/downloads/2019/numberbatch/numberbatch-19.08.txt.gz)
- **[Gender identification on Twitter](https://cloud.iyte.edu.tr/index.php/s/5DhqdlUCCdB60qG)** — Turkish Twitter gender-labeled dataset  
  2019-08 · 5,292 users; 100 tweets each · 24.7 MB · Language Resource / Modeling · Open
- **[WikiMatrix](https://opus.nlpl.eu/datasets/WikiMatrix)** — Mined parallel sentences from Wikipedia  
  2019-07 · 477,736 Turkish-English sentence pairs · 53.0 MB · Machine Translation · CC BY-SA 4.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-WikiMatrix/v1/moses/en-tr.txt.zip)
- **[RUEG](https://doi.org/10.5281/zenodo.11234583)** — Bilingual heritage-speaker elicited narratives  
  2019-05 · 23.9 GB (all languages) · Language Modeling · CC0 1.0 · Open
- **[Multilingual ATIS](https://catalog.ldc.upenn.edu/LDC2019T04)**  
  2019-02 · 5,871 Turkish utterances · Intent Classification; Slot Filling · LDC User Agreement · Paid
- **[Tweet-Dataset-NER-SD](https://github.com/dkucuk/Tweet-Dataset-NER-SD)** — Named-entity recognition and stance detection in tweets  
  2019-01 · 1,065 tweets · 74.6 KB · Named Entity Recognition · Open
- **[WikiANN (Turkish)](https://huggingface.co/datasets/unimelb-nlp/wikiann)** — Named-entity tags for Turkish tokens  
  2019 · 40,000 Turkish sentences · 2.9 MB (Turkish subset) · Named Entity Recognition · Open · [Files](https://huggingface.co/datasets/unimelb-nlp/wikiann/tree/main)
- **[XQuAD (Turkish)](https://github.com/google-deepmind/xquad)** — Professionally translated subset of SQuAD v1.1  
  2019 · 240 paragraphs; 1,190 Turkish question-answer pairs · ~3.2 MB (GitHub repo) · Question Answering · CC BY-SA 4.0 · Open · [Files](https://raw.githubusercontent.com/google-deepmind/xquad/master/xquad.tr.json)
- **[kde4](https://github.com/maidis/turkish-parallel-corpora/tree/master/kde4)** — English-Turkish pairs from KDE4 localization files  
  2018-11 · 23,219 sentence pairs · 6.9 MB · Machine Translation · Open
- **[kde5](https://github.com/maidis/turkish-parallel-corpora/tree/master/kde5)** — English-Turkish pairs from KDE5 localization files  
  2018-11 · 131,656 sentence pairs · 43.6 MB · Machine Translation · Open
- **[lonweb](https://github.com/maidis/turkish-parallel-corpora/tree/master/lonweb)** — English-Turkish texts collected from lonweb.org  
  2018-11 · 467 sentence pairs · 172 KB · Machine Translation · Open
- **[KeNet](https://github.com/StarlangSoftware/TurkishWordNet)** — Turkish WordNet lexical database  
  2018 · 77,330 synsets; 109,049 members · 31.3 MB · Lexical Resource · CC BY-SA 4.0 · Open · [Files](https://github.com/StarlangSoftware/TurkishWordNet/raw/master/src/main/resources/turkish_wordnet.xml)
- **[TrMor2018](https://github.com/ai-ku/TrMor2018)** — Morphological analysis data for Turkish  
  2018 · 34,673 sentences; 460,669 tokens · ~27.2 MB (GitHub repo) · Morphological Analysis · MIT · Open · [Files](https://github.com/ai-ku/TrMor2018/tree/master/TrMor2018)
- **[Turkish Parliament Transcripts Corpus](https://github.com/onurgu/turkish-parliament-texts)** — Grand National Assembly transcripts, 1920 to 2015  
  2018 · 1.3 GB · Language Modeling · Open · [Files](https://github.com/onurgu/turkish-parliament-texts/releases)
- **[XNLI](https://github.com/facebookresearch/XNLI)** — Cross-lingual natural language inference pairs  
  2018 · 112,500 total; 7,500 Turkish pairs · 17.9 MB (all languages) · Natural Language Inference · CC BY-NC 4.0 · Open · [Files](https://dl.fbaipublicfiles.com/XNLI/XNLI-1.0.zip)
- **[Bianet](https://opus.nlpl.eu/datasets/Bianet)** — Turkish-Kurdish-English parallel news corpus  
  2018 · 34,770 Turkish-English sentence pairs · 3.54 MB · Machine Translation · CC BY-SA 4.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-Bianet/v1/moses/en-tr.txt.zip)
- **[NRC-VAD](http://saifmohammad.com/WebPages/nrc-vad.html)** — Valence-arousal-dominance word scores, machine-translated to Turkish  
  2018 · 19,971 Turkish entries (v1; v2.1 has no Turkish file) · 44.5 MB (all languages) · Lexical Resource · Non-commercial research use · Open · [Files](http://saifmohammad.com/WebDocs/Lexicons/NRC-VAD-Lexicon.zip)
- **[2007 CoNLL Shared Task - Basque, Catalan, Czech & Turkish](https://catalog.ldc.upenn.edu/LDC2018T06)** — Dependency treebanks for four languages  
  2017-12 · Dependency Parsing · LDC User Agreement for Non-Members · Paid
- **[TTC-4900](https://www.kaggle.com/savasy/ttc4900)** — Turkish news text classification dataset  
  2017-12 · 4,900 Turkish news documents (7 categories x 700 each) · 5.52 MB · Text Classification · Open
- **[Turkish Bad Word Blacklist](https://github.com/ooguz/turkce-kufur-karaliste)** — List of blacklisted Turkish words  
  2017-12 · 698 blacklisted words and phrases · ~14 KB (GitHub repo) · Content Moderation · CC BY-SA 4.0 · Open
- **[A sentiment analysis data set (from Başkent Uni.)](https://baskent.edu.tr/~msert/research/datasets/SentimentDatasetTR.html)** — Turkish Twitter sentiment classification corpus  
  2017 · Sentiment Analysis · Application Required
- **[CoNLL 2017 Shared Task - Automatically Annotated Raw Texts and Word Embeddings](https://lindat.mff.cuni.cz/repository/handle/11234/1-1989)** — Automatically annotated raw text and embeddings  
  2017 · 29.8 GB · Language Resource / Modeling · CC BY-NC-SA 4.0 · Open · [Files](https://lindat.mff.cuni.cz/repository/server/api/core/bitstreams/779e7458-8881-4537-8f8c-54ac1ce49125/content)
- **[TWNERTC](https://data.mendeley.com/datasets/cdcztymf4k/1)** — Wikipedia sentences auto-annotated via large-scale gazetteers  
  2017 · ~700K sentences per version (6 versions) · 204 MB (Turkish subset) · Named Entity Recognition; Text Classification · Open
- **[Linguistic Features in Turkish Word Representations](https://github.com/onurgu/linguistic-features-in-turkish-word-representations/releases/tag/v1.0)** — Turkish morphological word-analogy pairs  
  2017 · 15,133 noun and 14,231 verb inflection analogies · 127 KB · Morphological Analysis · Open · [Files](https://github.com/onurgu/linguistic-features-in-turkish-word-representations/releases/download/v1.0/analogy-test-set.zip)
- **[TuPC-2016](https://osf.io/wp83a/)** — Turkish paraphrase-identification sentence corpus  
  2016-09 · 1,002 Turkish sentence pairs · 232 KB · Semantic Textual Similarity · Open
- **[Collins Multilingual database (MLD) - PhraseBank](https://catalog.elra.info/en-us/repository/browse/ELRA-T0377/)** — Multilingual phrase bank across 28 languages  
  2016-07 · 2,000 phrases (28 languages) · Lexical Resource · ELRA END USER · Paid
- **[Collins Multilingual database (MLD) - WordBank](https://catalog.elra.info/en-us/repository/browse/ELRA-T0376/)** — Multilingual wordbank across 32 languages  
  2016-07 · 10,000 words per language (32 languages) · Lexical Resource · ELRA END USER · Paid
- **[UD Turkish IMST](https://universaldependencies.org/treebanks/tr_imst/index.html)** — Semi-automatic conversion of the IMST treebank  
  2016 · 5,635 sentences; 56,422 tokens; 58,096 syntactic words · 4.9 MB · Dependency Parsing · CC BY-NC-SA 4.0 · Open · [Files](https://github.com/UniversalDependencies/UD_Turkish-IMST)
- **[NER-Turkish-News](https://github.com/dkucuk/NER-Turkish-News)** — Named-entity recognition in Turkish news  
  2016 · 1,425 entity annotations · 9.9 KB · Named Entity Recognition · Open
- **[A POS tagged data set of Turkish-German code switching](https://www.ims.uni-stuttgart.de/documents/team/ozlem/LAW2016.html)** — POS-tagged Turkish-German code-switching tweets  
  2016 · 1,029 tweets; 16,992 tokens · 184 KB (compressed archive) · Language Resource / Modeling · Open · [Files](https://www.ims.uni-stuttgart.de/documents/team/ozlem/data/LAW16data.tar.gz)
- **[OpenSubtitles](https://opus.nlpl.eu/datasets/OpenSubtitles)** — Aligned movie and TV subtitle translations  
  2016 · 73,487,258 Turkish-English sentence pairs · 1.82 GB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-OpenSubtitles/v2024/moses/en-tr.txt.zip)
- **[SemEval-2016 Task 5 ABSA](https://alt.qcri.org/semeval2016/task5/)** — Turkish restaurant reviews and telecom tweets  
  2016 · 300 Turkish restaurant reviews; 3,000 Turkish telecom tweets · Language Resource / Modeling · Academic non-commercial (META-SHARE NC-NoReD) · Registration Required · [Files](https://alt.qcri.org/semeval2016/task5/index.php?id=data-and-tools)
- **[Turkish Stop Words](https://github.com/ahmetax/trstop)** — Common Turkish filler words list  
  2016 · 285 stop words · 1.8 KB · Lexical Resource · MIT · Open · [Files](https://raw.githubusercontent.com/ahmetax/trstop/master/dosyalar/turkce-stop-words)
- **[WMT16 EN-TR](https://huggingface.co/datasets/wmt/wmt16)** — English-Turkish parallel news sentence pairs  
  2016 · 209,757 Turkish-English sentence pairs · 37.4 MB (Turkish subset) · Machine Translation · Open · [Files](https://huggingface.co/datasets/wmt/wmt16/tree/main/tr-en)
- **[2006 CoNLL Shared Task - Ten Languages](https://catalog.ldc.upenn.edu/LDC2015T11)** — Dependency treebanks for ten languages  
  2015-06 · Dependency Parsing · LDC User Agreement for Non-Members · Paid
- **[SentiTurkNet](http://myweb.sabanciuniv.edu/rdehkharghani/sentiturknet-3/)** — Polarity scores for Turkish WordNet synsets  
  2015 · ~15,000 synsets · 1.6 MB · Language Resource / Modeling · Open · [Files](http://myweb.sabanciuniv.edu/rdehkharghani/files/2023/12/SentiTurkNet.zip)
- **[A Twitter NER data set](https://wt-public.emm4u.eu/Resources/2014_JRC_Twitter_TR_NER-dataset.zip)** — Turkish Twitter named entity annotations  
  2014 · 868 tweets; 1,322 entity annotations · 13.2 KB (compressed archive) · Named Entity Recognition · Open
- **[Abstract Corpus V2](https://tscorpus.com/corpora)** — Turkish scientific abstracts with POS tagging  
  2014 · 1,048,132 tokens from 6,234 scientific abstracts · Part-of-Speech Tagging · Registration Required
- **[A code-switching corpus of Turkish-Dutch](https://aclanthology.org/D13-1084/)** — Turkish-Dutch online forum language identification  
  2013 · 2,338 posts; 18,030 Turkish tokens · Language Resource / Modeling · Application Required · [Files](https://www.dongnguyen.nl/data.html)
- **[A sentiment analysis data set (from Eindhoven)](https://www.win.tue.nl/~mpechen/projects/smm/#Datasets)** — Turkish movie and product reviews  
  2013 · 10,662 movie reviews; 5,600 product reviews · 1.5 MB · Sentiment Analysis · Open
- **[CHILDES/Altinkamis](https://talkbank.org/childes/access/Other/Turkish/Altinkamis.html)** — Turkish child lexicon acquisition study  
  2012-03 · 1 child, ages 1;4-2;4 · Language Modeling · CC BY-NC-SA 4.0 · Registration Required
- **[TS Corpus V2](https://tscorpus.com/corpora)** — Annotated corpus built from BOUN Web Corpus  
  2012 · 491 million tokens · Corpus Query; Language Modeling · Registration Required · [Files](https://cqpweb.tscorpus.com/cqpweb/ts_corpus_ver_2/)
- **[Turkish National Corpus (TNC)](https://www.tnc.org.tr/)**  
  2012 · 50 million words from Turkish texts, 1990-2013 · Corpus Linguistics; Language Modeling · Non-commercial research use · Registration Required
- **[NRC-EmoLex](http://saifmohammad.com/WebPages/AccessResource.htm)** — Word emotion associations, machine-translated to Turkish  
  2011 · 14,154 Turkish entries · 25.9 MB (all languages) · Lexical Resource · Non-commercial research use · Open · [Files](http://saifmohammad.com/WebDocs/Lexicons/NRC-Emotion-Lexicon.zip)
- **[TDB](http://medid.ii.metu.edu.tr/index_eng.html)** — Turkish discourse corpus with connective annotations  
  2011 · 500,000-word subcorpus of the METU Turkish Corpus · Language Resource / Modeling · Application Required
- **[Boun Web Corpus](https://tulap.cmpe.bogazici.edu.tr/handle/20.500.12913/68)** — Large Turkish web and news corpus  
  2009 · 491M tokens; 423M words · 4.97 GB (compressed archive) · Language Modeling · Apache-2.0 · Open
- **[TELL](http://linguistics.berkeley.edu/TELL/)** — Turkish lexicon with phonemic transcriptions  
  2009 · 30,000 Turkish words · 1.5 MB (compressed archive) · Pronunciation Lexicon · Open · [Files](http://linguistics.berkeley.edu/~tell/telldata.zip)
- **[Bilkent Information Retrieval on Turkish Texts](https://github.com/BilkentInformationRetrievalGroup/MilliyetCollectionTREC)** — Turkish newspaper information retrieval collection  
  2008 · 408,305 documents; 72 queries · ~448 MB (GitHub repo) · Information Retrieval · Open
- **[CHILDES/Aksu](https://talkbank.org/childes/access/Other/Turkish/Aksu.html)** — Turkish child-adult conversation transcripts 1972-1973  
  2004-04 · 33 children, ages 2;0-4;8 · Language Modeling · CC BY-NC-SA 4.0 · Registration Required
- **[METU Turkish Corpus (MTC)](https://ii.metu.edu.tr/metu-corpora-research-group)**  
  2002 · ~2 million words; 10 genres · Language Modeling · Research use only · Application Required
- **[LORETO Thesaurus](https://catalog.elra.info/en-us/repository/browse/ELRA-T0089/)** — Multilingual hierarchical cross-referenced thesaurus  
  1997-01 · 800 total entries (all languages) · Lexical Resource · ELRA END USER / ELRA VAR · Paid
- **[ECI Multilingual Text](https://catalog.ldc.upenn.edu/LDC94T5)** — Multilingual newspaper, dictionary and other text  
  1994 · 283K Turkish words across two subcorpora · Language Modeling · ECI/MCI Agreement · Paid
- **[1150 News](http://www.kemik.yildiz.edu.tr/veri_kumelerimiz.html)** — Turkish news articles for text categorization  
  1,150 news articles across 5 categories · 3.8 MB · Text Classification · Open · [Files](http://www.kemik.yildiz.edu.tr/data/File/1150haber.rar)
- **[6 Şubat Tweets](https://tscorpus.com/corpora)**  
  4.9 million tokens · Social Media Analysis · Registration Required
- **[75 News](http://www.kemik.yildiz.edu.tr/veri_kumelerimiz.html)** — Turkish news articles, five topics  
  75 news articles across 5 topics · 348 KB · Text Classification · Open · [Files](http://www.kemik.yildiz.edu.tr/data/File/75haber.zip)
- **[BabelNet](https://babelnet.org/)** — Multilingual encyclopedic dictionary semantic network  
  Language Resource / Modeling · BabelNet Non-Commercial license · Application Required
- **[CCMatrix](https://opus.nlpl.eu/datasets/CCMatrix)** — Web-mined multilingual parallel sentence pairs  
  47,045,956 Turkish-English sentence pairs · 3.10 GB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-CCMatrix/v1/moses/en-tr.txt.zip)
- **[Columns Corpus V2](https://tscorpus.com/corpora)** — Turkish newspaper opinion columns, gender-balanced  
  28+ million tokens; 25,915 columns · Language Modeling · Registration Required
- **[ConceptNet](https://conceptnet.io/)** — Multilingual semantic network knowledge graph  
  Language Resource / Modeling · CC BY-SA 4.0 · Open
- **[Confess Corpus](https://tscorpus.com/corpora)** — Anonymous posts from a Turkish women's forum  
  450,000+ tokens; 15,053 entries · Social Media Analysis · Registration Required
- **[Covid-19 TweetS](https://tscorpus.com/corpora)** — Turkish tweets from early Covid-19 pandemic  
  7.5+ million tokens · Social Media Analysis · Registration Required
- **[ELRC-3057-wikipedia_health](https://opus.nlpl.eu/datasets/ELRC-3057-wikipedia_health)**  
  2,368 aligned pairs (largest listed Turkish pair) · 245.8 KB · Machine Translation · CC BY-SA 3.0 · Open · [Files](https://object.pouta.csc.fi/OPUS-ELRC-3057-wikipedia_health/v1/moses/en-tr.txt.zip)
- **[EUbookshop](https://opus.nlpl.eu/datasets/EUbookshop)**  
  23,706 aligned pairs (largest listed Turkish pair) · 2.12 MB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-EUbookshop/v2/moses/en-tr.txt.zip)
- **[Evrim Ağacı](https://tscorpus.com/corpora)**  
  4.4+ million tokens; 7,287 articles · Language Modeling · Registration Required
- **[GlobalVoices](https://opus.nlpl.eu/datasets/GlobalVoices)**  
  7,838 aligned pairs (largest listed Turkish pair) · 720.3 KB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-GlobalVoices/v2018q4/moses/en-tr.txt.zip)
- **[SETIMES v2 (Turkish-English)](https://opus.nlpl.eu/datasets/SETIMES)**  
  207,678 aligned Turkish-English sentence pairs · 22.0 MB · Machine Translation · CC BY-SA · Open · [Files](https://object.pouta.csc.fi/OPUS-SETIMES/v2/moses/en-tr.txt.zip)
- **[Tatoeba Turkish Sentences](https://tatoeba.org/en/downloads)** — Community-contributed multilingual translated sentences  
  749,030 sentences · 8.6 MB · Machine Translation · CC BY 2.0 FR · Open · [Files](https://downloads.tatoeba.org/exports/per_language/tur/tur_sentences.tsv.bz2)
- **[Ubuntu](https://opus.nlpl.eu/datasets/Ubuntu)** — Ubuntu software localization translation strings  
  7,301 sentence pairs; 56.7K words (Moses en-tr) · 192.8 KB · Machine Translation · Open · [Files](https://object.pouta.csc.fi/OPUS-Ubuntu/v14.10/moses/en-tr.txt.zip)
- **[UniMorph](https://unimorph.github.io/)** — Cross-lingual inflectional morphology paradigms  
  570,420 forms; 3,577 lemmas · 31.6 MB · Language Resource / Modeling · CC BY-SA 3.0 · Open · [Files](https://github.com/unimorph/tur)

<sub>[back to contents](#contents)</sub>

## Speech & Audio

- **[Antalia Turkish Single-Speaker Scripted Speech](https://huggingface.co/datasets/cloud0day3/antalia-voice-corpus)** — Studio-recorded single-speaker Turkish read speech, consented  
  2026-09-14 · 1,073 clips; 5.0 hours; 1 speaker · 867.2 MB · Text-to-Speech · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/cloud0day3/antalia-voice-corpus/tree/main)
- **[Common Voice Scripted Speech 26.0 - Turkish](https://mozilladatacollective.com/datasets/cmqinosfq00x4nr07gnk0rdf9)**  
  2026-06 · 126,723 clips; 135.64 hours (130.1 validated); 1,829 speakers · 2.99 GB · Automatic Speech Recognition · CC0 1.0 · Registration Required
- **[YODAS v3](https://huggingface.co/datasets/espnet/yodas3)** — Weakly labeled multilingual YouTube speech, 48 kHz stereo  
  2026-06 · 38,494 Turkish videos · 478.3 GB (Turkish subset) · Automatic Speech Recognition · CC BY 3.0 · Open · [Files](https://huggingface.co/datasets/espnet/yodas3/tree/main/data/tr)
- **[WorldSpeech](https://huggingface.co/datasets/disco-eth/WorldSpeech)** — Human-transcribed multilingual ASR speech, 127 language variants  
  2026-04 · 239,654 Turkish rows; 1,007.6 hours · 25.8 GB (Turkish subset) · Automatic Speech Recognition · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/disco-eth/WorldSpeech/tree/main/data/tr_tr)
- **[tr-combined](https://huggingface.co/datasets/Codyfederer/tr-combined)** — Merged speech audio from 894 sources  
  2025-10 · 221,531 segments; 2,158 speakers · 85.2 GB · Speech / Audio · CC BY 4.0 · Gated · [Files](https://huggingface.co/datasets/Codyfederer/tr-combined/tree/main)
- **[tr-full-dataset](https://huggingface.co/datasets/Codyfederer/tr-full-dataset)** — Merged speech audio from 88 sources  
  2025-08 · 41,427 segments; 222 speakers; 88 source datasets · 13.4 GB · Automatic Speech Recognition; Text-to-Speech · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/Codyfederer/tr-full-dataset/tree/main)
- **[VoxLingua107 (Turkish)](https://huggingface.co/datasets/TalTechNLP/voxlingua107_wds)** — Speech data for language-identification models  
  2025-08 · 6,628 h total; ~59 h Turkish · ~6.9 GB (Turkish subset) · Language Identification · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/TalTechNLP/voxlingua107_wds/tree/main)
- **[Turkish Speech Corpus (TSC)](https://huggingface.co/datasets/issai/Turkish_Speech_Corpus)** — Transcribed Turkish speech corpus for ASR  
  2025-01 · 218.2 hours; 186,171 utterances · 21.4 GB · Automatic Speech Recognition · MIT · Open · [Files](https://huggingface.co/datasets/issai/Turkish_Speech_Corpus/tree/main)
- **[khanacademy-turkish](https://huggingface.co/datasets/ysdede/khanacademy-turkish)** — Turkish audio clips from Khan Academy  
  2024-12 · 27,096 Turkish rows · 1.2 GB · Automatic Speech Recognition · Open · [Files](https://huggingface.co/datasets/ysdede/khanacademy-turkish/tree/main)
- **[khanacademy-turkish-math](https://huggingface.co/datasets/ysdede/khanacademy-turkish-math)** — Turkish Khan Academy math audio transcriptions  
  2024-12 · 42,836 rows · 1.8 GB · Speech / Audio · Open · [Files](https://huggingface.co/datasets/ysdede/khanacademy-turkish-math/tree/main)
- **[SIB-Fleurs](https://huggingface.co/datasets/WueNLP/sib-fleurs)** — SIB-200 topic classification aligned with FLEURS speech  
  2024-12 · 923 Turkish rows · 1.35 GB (Turkish subset) · Text Classification · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/WueNLP/sib-fleurs/tree/main/data/tur_Latn)
- **[2M-Belebele](https://huggingface.co/datasets/facebook/2M-Belebele)** — Speech Belebele comprehension recordings in 74 languages  
  2024-12 · 300 Turkish rows · 5.47 GB (Turkish subset) · Multiple-Choice Question Answering · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/facebook/2M-Belebele/tree/main/data/lang=tur_Latn)
- **[Belebele-Fleurs](https://huggingface.co/datasets/WueNLP/belebele-fleurs)** — Belebele reading comprehension aligned with FLEURS speech  
  2024-11-25 · 706 Turkish rows · 2.02 GB (Turkish subset) · Multiple-Choice Question Answering · CC BY-SA 4.0 · Open · [Files](https://huggingface.co/datasets/WueNLP/belebele-fleurs/tree/main/data/tur_Latn)
- **[Speech-MASSIVE](https://huggingface.co/datasets/FBK-MT/Speech-MASSIVE)** — Multilingual spoken language understanding, 12 languages  
  2024-06 · 2,148 Turkish clips; 2.3 hours · 720.9 MB (Turkish subset) · Intent and Slot Classification; Automatic Speech Recognition · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/FBK-MT/Speech-MASSIVE/tree/main/tr-TR)
- **[YODAS](https://huggingface.co/datasets/espnet/yodas)** — YouTube speech with manual and automatic captions  
  2024-02 · 4,656 hours (588.7 manual-caption; 4,067.7 automatic-caption) · 443.4 GB (Turkish subset) · Automatic Speech Recognition · CC BY 3.0 · Open · [Files](https://huggingface.co/datasets/espnet/yodas/tree/main)
- **[AUDIO Human Voice Pronunciations - Turkish](https://catalog.elra.info/en-us/repository/browse/ELRA-S0490_21/)** — Turkish word and phrase pronunciation audio  
  2023 · 6,491 Turkish pronunciation entries · Pronunciation Lexicon · ELRA VAR · Paid
- **[FLEURS](https://huggingface.co/datasets/google/fleurs)** — Multilingual read-speech benchmark covering 102 languages  
  2022-03 · 3,607 clips; 12.0 hours · 2.13 GB (Turkish subset) · Automatic Speech Recognition · Open · [Files](https://huggingface.co/datasets/google/fleurs/tree/main/data/tr_tr)
- **[Multilingual Spoken Words Corpus (MSWC)](https://huggingface.co/datasets/MLCommons/ml_spoken_words)** — Forced-aligned Common Voice keyword clips, 50 languages  
  2021-12-14 · 75,097 keyword clips; 29 hours · 1.27 GB (Turkish subset) · Keyword Search · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/MLCommons/ml_spoken_words/tree/main)
- **[MediaSpeech Turkish v1.1 (SLR108)](https://www.openslr.org/108/)** — YouTube media speech segments, manually transcribed  
  2021 · 10 hours of Turkish media speech · 618 MB · Automatic Speech Recognition · CC BY 4.0 · Open · [Files](https://www.openslr.org/resources/108/TR.tgz)
- **[TurEV-DB (Turkish Emotion-Voice Database)](https://github.com/Xeonen/TurEV-DB)** — Emotional Turkish word recordings in four emotions  
  2020-08 · 1,735 recordings; 82 words; 4 emotions · ~265.7 MB (GitHub repo) · Speech / Audio · Open
- **[CoVoST 2](https://github.com/facebookresearch/covost)** — Multilingual speech-to-text translation corpus  
  2020-07 · 12,365 Turkish-to-English translations · 281 KB (tr-en translations) · Language Resource / Modeling · CC0 1.0 · Open · [Files](https://dl.fbaipublicfiles.com/covost/covost_v2.tr_en.tsv.tar.gz)
- **[GlobalPhone Multilingual Model Package](https://catalog.elra.info/en-us/repository/browse/ELRA-S0399/)** — Multilingual acoustic modeling speech data  
  2018-10 · ~1 hour Turkish; 10 speakers · Automatic Speech Recognition · ELRA END USER / ELRA VAR · Paid
- **[2011 NIST Language Recognition Evaluation Test Set](https://catalog.ldc.upenn.edu/LDC2018S06)** — Multilingual telephone and broadcast speech for language identification  
  2018-08 · 204 hours (all languages) · Language Identification · LDC User Agreement for Non-Members · Paid
- **[Multi-Language Conversational Telephone Speech 2011 - Turkish](https://catalog.ldc.upenn.edu/LDC2017S09)**  
  2017-05-15 · 18.6 hours; 87 calls · 975 MB · Language Identification · LDC · Paid
- **[IARPA Babel Turkish Language Pack IARPA-babel105b-v0.5](https://catalog.ldc.upenn.edu/LDC2016S10)**  
  2016-10-19 · ~213 hours · Automatic Speech Recognition; Keyword Search · IARPA Babel Turkish Agreement (Non-Member) · Paid
- **[Collins Multilingual database (MLD) – PhraseBank with audio files](https://catalog.elra.info/en-us/repository/browse/ELRA-S0383/)** — Multilingual phrasebank with native-speaker audio  
  2016-07 · 2,000 Turkish phrases with audio · Lexical Resource · ELRA END USER · Paid
- **[Collins Multilingual database (MLD) – WordBank with audio files](https://catalog.elra.info/en-us/repository/browse/ELRA-S0382/)** — Multilingual word lexicon with native-speaker audio  
  2016-07 · 10,000 Turkish words with audio · Lexical Resource · ELRA END USER · Paid
- **[2009 NIST Language Recognition Evaluation Test Set](https://catalog.ldc.upenn.edu/LDC2014S06)** — Multilingual telephone and broadcast speech for language identification  
  2014-07 · 215 hours of speech across 23 languages and dialects · Language Identification · LDC User Agreement for Non-Members · Paid
- **[GlobalPhone Turkish Pronunciation Dictionary](https://catalog.elra.info/en-us/repository/browse/ELRA-S0361/)** — Turkish pronunciation dictionary in Romanized script  
  2013-09 · 31,330 entries / 31,087 Turkish words · Pronunciation Lexicon · ELRA END USER / ELRA VAR · Paid
- **[Turkish Broadcast News Speech and Transcripts](https://catalog.ldc.upenn.edu/LDC2012S06)**  
  2012-05-16 · ~130 hours · Automatic Speech Recognition · LDC User Agreement · Paid
- **[Middle East Technical University Turkish Microphone Speech v 1.0](https://catalog.ldc.upenn.edu/LDC2006S33)**  
  2006-05-18 · ~5.6 hours; 120 speakers; 4,800 recordings · ~600 MB · Automatic Speech Recognition · LDC User Agreement for Non-Members · Paid
- **[GlobalPhone Turkish](https://catalog.elra.info/en-us/repository/browse/ELRA-S0206/)**  
  2006-01 · ~17 hours; 100 speakers · Automatic Speech Recognition · ELRA END USER / ELRA VAR · Paid

<sub>[back to contents](#contents)</sub>

## Vision, OCR & Multimodal

- **[Turkish OCR Noise Corpus, version 2](https://huggingface.co/datasets/sfidan42/turkish-ocr-noise-corpus-v2)** — Rendered Turkish question-answer pages with synthetic OCR noise  
  2026-09-27 · 5,198 pages; 31,188 images · 1.45 GB · OCR · Open · [Files](https://huggingface.co/datasets/sfidan42/turkish-ocr-noise-corpus-v2/tree/main)
- **[Akis-Ottoman-Dataset (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/Akis-Ottoman-Dataset)** — Ottoman document line images with transcriptions  
  2026-08 · 8,036 line images · 583.0 MB · Ottoman Turkish Handwriting Recognition · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/Akis-Ottoman-Dataset/tree/main)
- **[CHURRO Ottoman Turkish Subset (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/CHURRO-Ottoman-Turkish-Subset)** — Historical Ottoman documents from CHURRO-DS  
  2026-08 · 237 images · 550.1 MB · Ottoman Turkish Handwriting Recognition · Open · [Files](https://huggingface.co/datasets/OttomanNLP/CHURRO-Ottoman-Turkish-Subset/tree/main)
- **[OpenITI-MAKHZAN Ottoman Lines (HF OttomanNLP)](https://huggingface.co/datasets/OttomanNLP/OpenITI-MAKHZAN-Ottoman-Lines)** — Ottoman Turkish line images derived from OpenITI MAKHZAN  
  2026-07 · 3,654 line images · 566.1 MB · Ottoman Turkish Handwriting Recognition · CC BY-NC-SA 4.0 · Open · [Files](https://huggingface.co/datasets/OttomanNLP/OpenITI-MAKHZAN-Ottoman-Lines/tree/main)
- **[Osmanlıca Ekmek ve Nişasta Kitabı](https://huggingface.co/datasets/dijitaltarimkutuphanesi/OsmanlicaEkmekveNisastaKitabi)** — Ottoman-script book on bread-making, 1915  
  2026-07 · 16 page images · 3.5 MB · OCR · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/dijitaltarimkutuphanesi/OsmanlicaEkmekveNisastaKitabi/tree/main)
- **[TR-DocVQA-Synth](https://huggingface.co/datasets/Ethosoft/TR-DocVQA-Synth)** — Synthetic Turkish invoices, contracts and offers with questions  
  2026-06 · 15,000 document images; 235,000 question-answer pairs · 5.15 GB · Vision-Language · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/Ethosoft/TR-DocVQA-Synth/tree/main)
- **[TUBITAK Science Olympiad Dataset](https://huggingface.co/datasets/ytu-ce-cosmos/tubitak-science-olympiad-tr)** — Science Olympiad multiple-choice and open questions  
  2026-03 · 2,698 Turkish rows · 528.9 MB · Multimodal Benchmarking · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/tubitak-science-olympiad-tr/tree/main)
- **[Turkish Visual Reasoning Dataset](https://huggingface.co/datasets/Berkesule/Turkish-Visual-Reasoning-Dataset)** — Translated visual reasoning sets plus BİLSEM questions  
  2026-02 · 3,775 rows · 146.6 MB · Visual Reasoning · Open · [Files](https://huggingface.co/datasets/Berkesule/Turkish-Visual-Reasoning-Dataset/tree/main)
- **[Turkish OCR Synthetic Dataset (emredeveloper)](https://huggingface.co/datasets/emredeveloper/turkish-ocr)** — Synthetic images with Turkish text for OCR  
  2025-11 · 1,388 images; 1,000 documented transcriptions · 409.7 MB · OCR · MIT · Open · [Files](https://huggingface.co/datasets/emredeveloper/turkish-ocr/tree/main)
- **[MMStar_tr](https://huggingface.co/datasets/kesimeg/MMStar_tr)** — Translated and manually verified MMStar benchmark  
  2025-10 · 1,500 Turkish rows · 42.2 MB · Multimodal Benchmarking · Open · [Files](https://huggingface.co/datasets/kesimeg/MMStar_tr/tree/main)
- **[YKSBench](https://huggingface.co/datasets/metu-yks/yksbench)** — Visually grounded exam-style reasoning benchmark  
  2025-08 · 2,047 rows · 214.9 MB · Multimodal Benchmarking · Open · [Files](https://huggingface.co/datasets/metu-yks/yksbench/tree/main)
- **[PD12M-Turkish-Images-cleaned_37k](https://huggingface.co/datasets/umarigan/PD12M-Turkish-Images-cleaned_37k)** — Subset of PD12M Turkish captions with images bundled  
  2025-07 · 37,711 rows · 92.2 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/umarigan/PD12M-Turkish-Images-cleaned_37k/tree/main)
- **[image-captioning-turkish](https://huggingface.co/datasets/ituperceptron/image-captioning-turkish)** — LLM-translated BLIP3o captions with generated VQA pairs  
  2025-05 · 1,046,234 Turkish rows · 63.8 GB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/ituperceptron/image-captioning-turkish/tree/main)
- **[unsloth-pmc-vqa-tr](https://huggingface.co/datasets/nezahatkorkmaz/unsloth-pmc-vqa-tr)** — Turkish medical VQA text; images not bundled  
  2025-05 · 186,033 rows · 244.6 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/nezahatkorkmaz/unsloth-pmc-vqa-tr/tree/main)
- **[image-dataset](https://huggingface.co/datasets/ozertuu/image-dataset)**  
  2025-04 · 26,002 rows · 856.3 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ozertuu/image-dataset/tree/main)
- **[turkish-image-description-datasetV2](https://huggingface.co/datasets/ozertuu/turkish-image-description-datasetV2)** — Turkish translations of English image descriptions  
  2025-04 · 19,610 rows · 815.6 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ozertuu/turkish-image-description-datasetV2/tree/main)
- **[AyaVisionBench](https://huggingface.co/datasets/CohereLabs/AyaVisionBench)** — Machine-translated multilingual image-question pairs, 23 languages  
  2025-03 · 135 Turkish rows · 58.1 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/AyaVisionBench/tree/main)
- **[m-WildVision](https://huggingface.co/datasets/CohereLabs/m-WildVision)** — Machine-translated multilingual vision-LLM evaluation prompts  
  2025-03 · 500 Turkish rows · 134.8 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/CohereLabs/m-WildVision/tree/main)
- **[Turkish-medical-visual-question-answering-LLaVa-dataset](https://huggingface.co/datasets/nezahatkorkmaz/Turkish-medical-visual-question-answering-LLaVa-dataset)** — Turkish-translated radiology visual question-answering pairs  
  2025-03 · 314 images; 3,515 Turkish QA pairs · 17.9 MB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/nezahatkorkmaz/Turkish-medical-visual-question-answering-LLaVa-dataset/tree/main)
- **[MVL-SIB](https://huggingface.co/datasets/WueNLP/mvl-sib)** — Image-sentence topical matching benchmark, 205 languages  
  2025-01 · 1,004 Turkish sentences · 203.7 MB (all languages) · Multimodal Benchmarking · Open · [Files](https://huggingface.co/datasets/WueNLP/mvl-sib/tree/main/data)
- **[pisc-tr](https://huggingface.co/datasets/berhaan/pisc-tr)** — Translated LLaVA-CoT PISC social-relationship visual QA  
  2024-12 · 948 rows · 146.8 MB · Vision-Language · Apache-2.0 · Open · [Files](https://huggingface.co/datasets/berhaan/pisc-tr/tree/main)
- **[bilim_teknik_mini_colpali](https://huggingface.co/datasets/muhammetfatihaktug/bilim_teknik_mini_colpali)** — Science-magazine page images with model-generated Turkish retrieval queries  
  2024-12 · 4,504 Turkish rows · 486.4 MB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/muhammetfatihaktug/bilim_teknik_mini_colpali/tree/main)
- **[PD12M Turkish](https://huggingface.co/datasets/umarigan/PD12M-Turkish)** — Translated text-to-image captions, Turkish  
  2024-12 · 12,249,454 rows · 3.6 GB · Vision-Language · CDLA-Permissive-2.0 · Open · [Files](https://huggingface.co/datasets/umarigan/PD12M-Turkish/tree/main)
- **[tr-textbook-ColPali](https://huggingface.co/datasets/selimc/tr-textbook-ColPali)** — Textbook page images with model-generated Turkish retrieval queries  
  2024-12 · 2,999 rows · 269.4 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/selimc/tr-textbook-ColPali/tree/main)
- **[ALM-Bench](https://huggingface.co/datasets/MBZUAI/ALM-Bench)** — Multilingual multimodal evaluation benchmark  
  2024-11 · 22,763 total; 305 Turkish · 2.13 GB (all languages) · Vision-Language · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/MBZUAI/ALM-Bench/tree/main)
- **[flickr8k-tr-detailed-captions](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-detailed-captions)** — Detailed captions generated by GPT-4o-mini  
  2024-10 · 8,000 Turkish rows · 1.1 GB · Vision-Language · CC0 1.0 · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-detailed-captions/tree/main)
- **[PangeaIns](https://huggingface.co/datasets/neulab/PangeaInstruct)** — Multilingual multimodal instructions, 39 languages  
  2024-10 · 789.4 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/neulab/PangeaInstruct/tree/main)
- **[TR-VLM-DPO-Dataset](https://huggingface.co/datasets/ucsahin/TR-VLM-DPO-Dataset)**  
  2024-09 · 10,000 image-question examples · 1.4 GB · Direct Preference Optimization · Open · [Files](https://huggingface.co/datasets/ucsahin/TR-VLM-DPO-Dataset/tree/main)
- **[VisIT-Bench-tr](https://huggingface.co/datasets/TFLai/VisIT-Bench-tr)**  
  2024-08 · 574 Turkish rows · 335.4 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/TFLai/VisIT-Bench-tr/tree/main)
- **[Turkish VLM-Mix Benchmark](https://huggingface.co/datasets/ucsahin/Turkish-VLM-Mix-Benchmark)** — Translated multimodal samples from multiple VLM datasets  
  2024-08 · 35,288 rows · 4.43 GB · Vision-Language Benchmarking · Open · [Files](https://huggingface.co/datasets/ucsahin/Turkish-VLM-Mix-Benchmark/tree/main)
- **[TurkishLLaVA Pretrain Dataset](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Pretrain)** — Machine-translated LLaVA CC3M pretraining data  
  2024-08 · 595,375 Turkish rows · 13.2 GB · Vision-Language · MIT · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Pretrain/tree/main)
- **[COCO-OD-TR-Single-Objects-v2](https://huggingface.co/datasets/ucsahin/COCO-OD-TR-Single-Objects-v2)** — Turkish-labeled COCO object-detection instructions  
  2024-08 · 153,128 Turkish rows · 23.2 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ucsahin/COCO-OD-TR-Single-Objects-v2/tree/main)
- **[turkce-kitap](https://huggingface.co/datasets/ytu-ce-cosmos/turkce-kitap)** — Book-cover question-answer conversations with image links  
  2024-08 · 108,355 rows · 120.2 MB · OCR · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/turkce-kitap/tree/main)
- **[Turkish-LLaVA-Finetune](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Finetune)** — Turkish LLaVA finetuning conversations; images not bundled  
  2024-08 · 522,611 rows · 996.5 MB · Vision-Language · Open · [Files](https://huggingface.co/datasets/ytu-ce-cosmos/Turkish-LLaVA-Finetune/tree/main)
- **[LLaVA1.5-Data-Turkish](https://huggingface.co/datasets/99eren99/LLaVA1.5-Data-Turkish)** — Machine-translated LLaVA 1.5 instruction and pretrain data  
  2024-07 · 1.0 GB · Vision-Language · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/99eren99/LLaVA1.5-Data-Turkish/tree/main)
- **[flickr30k-tr](https://huggingface.co/datasets/atasoglu/flickr30k-turkish)** — Machine-translated Flickr30k image captions  
  2024-07 · 31,014 rows · 4.3 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr30k-turkish/tree/main)
- **[flickr8k-tr-mt](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-mt)** — Machine-translated Flickr8k image captions  
  2024-07 · 8,000 rows · 1.1 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/atasoglu/flickr8k-turkish-mt/tree/main)
- **[Turkish Clip Dataset](https://huggingface.co/datasets/umarigan/turkish_clip_dataset_with_text_embeddings)** — Turkish image-caption pairs from LAION-COCO-NLLB for CLIP  
  2024-01 · 410,017 rows · 30.1 GB · Vision-Language · Open · [Files](https://huggingface.co/datasets/umarigan/turkish_clip_dataset_with_text_embeddings/tree/main)
- **[STS-TR (Synthetic Turkish Scene Text)](https://www.kaggle.com/datasets/serdaryildiz/synthetic-turkish-scene-text-recognition-dataset)** — Synthetic Turkish scene text images  
  2024 · 12M+ synthetic scene-text images · 75.6 GB · Scene Text Recognition · CC BY-NC 4.0 · Open
- **[TS-TR (Turkish Scene Text Recognition)](https://www.kaggle.com/datasets/serdaryildiz/turkish-scene-text-recognition-dataset)** — Real-world Turkish scene text images  
  2024 · 167 MB · Scene Text Recognition · CC BY-NC 4.0 · Open
- **[LAION-COCO translated to 200 languages](https://huggingface.co/datasets/visheratin/laion-coco-nllb)** — Machine-translated LAION-COCO image captions, 200 languages  
  2023-06 · 893,884 rows · 10.4 GB · Vision-Language · CC BY-NC 4.0 · Open · [Files](https://huggingface.co/datasets/visheratin/laion-coco-nllb/tree/main)
- **[laion2B-multi-turkish-subset](https://huggingface.co/datasets/mcemilg/laion2B-multi-turkish-subset)** — Image-text pairs from LAION-5B  
  2022-11 · 34,638,627 Turkish rows · 4.7 GB · Vision-Language · CC BY 4.0 · Open · [Files](https://huggingface.co/datasets/mcemilg/laion2B-multi-turkish-subset/tree/main)
- **[Crossmodal-3600 (XM3600)](https://google.github.io/crossmodal-3600/)** — Human captions for 3,600 images in 36 languages  
  2022-10-10 · 3,600 images; 7,233 Turkish captions · 333.1 MB (all languages) · Vision-Language · CC BY 4.0 · Open
- **[MaRVL](https://marvl-challenge.github.io/)** — Culturally grounded visual reasoning in five languages  
  2021-09 · 1,180 Turkish statements · 2.47 GB (all languages) · Visual Reasoning · Open · [Dataverse](https://dataverse.scholarsportal.info/dataset.xhtml?persistentId=doi:10.5683/SP3/42VZ4P)
- **[Cross-lingual Test Dataset XTD10](https://github.com/adobe-research/Cross-lingual-Test-Dataset-XTD10)** — Crowdsourced multilingual MSCOCO test captions, 1,000 images  
  2020-12-10 · 1,000 Turkish captions · 71.8 KB (Turkish subset) · Vision-Language · Adobe Research License · Open · [Turkish captions](https://github.com/adobe-research/Cross-lingual-Test-Dataset-XTD10/blob/main/XTD10/test_1kcaptions_tr.txt)
- **[MSVD-Turkish](https://hucvl.github.io/MSVD-Turkish/)** — Reviewed machine translations of MSVD video captions  
  2020-12 · 1,970 videos; 77,592 Turkish captions · 26.0 MB (compressed archive) · Vision-Language · Open · [Captions](https://hucvl.github.io/MSVD-Turkish/en_tr.lc.nopunc.tsv.zip)
- **[T-H-E Dataset](https://github.com/bartosgaye/thedataset)** — Handwritten Turkish, Hungarian and English character images  
  2020-02 · 20,000 Turkish special-character images · 39.7 MB (Turkish subset) · OCR · Open
- **[AUTSL](https://cvml.ankara.edu.tr/datasets/)**  
  2020 · 36,302 videos; 226 signs; 43 signers · Isolated Sign Language Recognition · Research use only · Registration Required · [Files](https://chalearnlap.cvc.uab.es/dataset/40/description/)
- **[BosphorusSign22k](https://ogulcanozdemir.github.io/bosphorussign22k/)**  
  2020 · 22,542 videos; 744 signs; ~19 hours · Isolated Sign Language Recognition · Research use only · Application Required
- **[TasvirEt](https://semihyagcioglu.com/projects/tasviret/)** — Human-written Turkish captions for Flickr8k images  
  2016 · 16,037 Turkish captions for 8,000 images · 0.95 MB (compressed archive) · Vision-Language · Open · [Files](https://vision.cs.hacettepe.edu.tr/files/ff1082bf8f613d4a67e4c89a697288e6.zip)
- **[Turkish Handwritten Sticky Notes OCR Image Dataset](https://www.futurebeeai.com/dataset/ocr-dataset/turkish-sticky-notes-ocr-image-dataset)**  
  2,000+ images · OCR · FutureBeeAI AI Data License Agreement · Paid
- **[Turkish Shopping List OCR Image Dataset](https://www.futurebeeai.com/dataset/ocr-dataset/turkish-shopping-list-ocr-image-dataset)**  
  2,000+ images · OCR · FutureBeeAI AI Data License Agreement · Paid

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
