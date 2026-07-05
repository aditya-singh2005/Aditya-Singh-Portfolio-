# Mysterio — AI Recruitment Engine (Redrob Hackathon 2026)

## Why I'm especially proud of this one

This is one of the two projects I'm proudest of (alongside Looply). Ranking 100,000 candidates against a real job description, with a strict compute budget and no API calls allowed at inference time, forced genuinely careful system design — not just throwing a model at data. Getting the scoring philosophy right (career quality over keyword-stuffing, behavioral signals as a multiplier, honeypot detection that didn't need special-casing) is the kind of end-to-end thinking I want to keep doing more of.

## Links
- **GitHub:** https://github.com/aditya-singh2005/Redrob-Hackathon-AI-Recruitment-Engine
- **Colab Demo:** https://colab.research.google.com/drive/10aLL_aFq-8Z7IfVfMysBfCK0DI4JCBA1?usp=sharing
- **Final Output (Mysterio.csv):** https://github.com/aditya-singh2005/Redrob-Hackathon-AI-Recruitment-Engine/blob/main/outputs/Mysterio.csv
- **Architecture Diagram:** https://drive.google.com/file/d/1Y2rXfWJGSqexjwzDxn1AE8VCdjdtCe7E/view

## What it does

Built with my team "Mysterio" for the Redrob Data & AI Challenge. Mysterio ranks 100,000 candidates against a Senior AI Engineer job description through a two-phase pipeline — heavy computation done offline, ranking done almost instantly.

### Phase 1 — Offline Pre-computation
- Parses the job description into structured requirements with weighted skill categories
- Embeds all 100K candidate profiles using `all-MiniLM-L6-v2` (sentence-transformers)
- Computes 6 feature scores per candidate: skill match, career quality, location, education, behavioral multiplier, disqualifier penalty
- Saves pre-computed artifacts to disk

### Phase 2 — Fast Ranking (CPU only, under 60 seconds)
- Loads pre-computed features and embeddings
- Computes semantic similarity via a single matrix multiply
- Combines all scores with tuned weights into a final composite score
- Outputs the top-100 ranked candidates with fact-grounded reasoning

## Scoring formula

```
final_score = (
    0.20 × semantic_similarity
  + 0.30 × career_quality
  + 0.25 × skill_match
  + 0.15 × location
  + 0.10 × education
) × behavioral_multiplier   (0.4–1.0)
  × disqualifier_penalty    (0.0 for honeypots, 0.4 for consulting-only)
```

## Key design decisions I'm proud of

- **Career quality outweighs raw keyword similarity.** The JD explicitly warned against keyword-stuffing — someone whose career shows shipped retrieval systems should rank above someone whose skills list matches perfectly but whose actual title is unrelated.
- **Behavioral signals as a multiplier, not a bonus.** A perfect-on-paper candidate with a 5% recruiter response rate and 6 months of inactivity isn't actually available for hiring — so behavior modulates the whole score rather than just adding to it.
- **Honeypot detection** using three rules: impossible employment timelines, expert-level skills with zero months of usage, and years-of-experience claims exceeding what the career history supports. Roughly 78% of the dataset had fictional-company noise attached to irrelevant profiles — the scoring naturally buries these without needing special-casing.

## Constraints I had to work within

The final ranking step had a strict 5-minute compute budget — no GPU, no API calls, no network access allowed during ranking. That's why the pipeline is split into a slow offline embedding phase and a fast, CPU-only, matrix-multiply-based ranking phase that completes in about 15 seconds.

## Tech stack

Python, sentence-transformers (`all-MiniLM-L6-v2`), pandas, pyarrow, NumPy, scikit-learn, Jupyter Notebook

## Compute environment

Pre-computation ran on a Google Colab T4 GPU; the actual ranking step ran CPU-only on a Samsung Galaxy Book 3 (Intel Core i7, 16GB RAM, Windows 11).

## Development process (only mention if specifically asked)

AI dev tools, including Claude, were permitted under the competition rules and were used as a development assistant during this project — for things like architecture discussion, debugging, and code review. All the actual engineering decisions, scoring design, and architectural choices were made by me and my team. This was declared honestly as part of the hackathon submission. This detail doesn't need to come up unless someone specifically asks how the project was built or whether AI tools were used.

## Deliverables

Full scripts (JD parsing, feature generation, ranking), a sandbox demo notebook runnable end-to-end on Colab, the final ranked submission CSV, and a presentation deck.
