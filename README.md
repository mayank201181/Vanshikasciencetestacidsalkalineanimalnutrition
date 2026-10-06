# Test Prep Lab — Acids & Alkalis + Animal Nutrition

A focused test-prep web app for a Year 8 science progress check (Thursday 8 October 2026),
built on the same engine as the Year 8 Science Lab.

## What's inside
- **Question bank** — 4 multiple-choice sets × 25 (Acids & Alkalis, Animal Nutrition, two mixed
  mocks) and 2 written sets × 10, every question tagged warm-up / core / challenge.
- **Instant marking with detailed feedback** — pick a wrong option and you see *why that option is
  wrong*, the right answer, and the key idea. Written answers are auto-marked point by point
  against a mark scheme (forgiving spelling slips, refusing negations), with teaching feedback for
  each missed point, a full-marks model answer, the common mistake, and an honest
  "the marker missed it" override.
- **Hint ladders** (hints cost a star), stars and ranks, autosave/resume.
- **Mistakes list** — every wrong answer is queued until you get it right.
- **Revision guide** — one section per lesson on the school cover sheet, each opening with a
  puzzle (problem-first), plus diagrams, key points, "why it works", memory tricks and exam tips.
- **Flashcards** from the school's own glossaries, **interactive labs** (pH explorer,
  neutralisation with a live pH curve, salt namer, digestion journey, food-test lab with a
  mystery-food challenge) and a printable **cram sheet**.
- A 3-day study plan that ticks itself off, and a "send my scores" button for parents.

Progress is stored on the device (localStorage) — no login needed.

## Content workflow
- `docs/syllabus.md` — transcription of the school's cover sheet, knowledge organisers and glossaries.
- `content-spec.md` — authoring rules; `audit-spec.md` — the fresh-eyes audit every file went through.
- `lib/content/*.ts` — typed content (type-checked at build).
- `npm run validate` — structural checks + mark-scheme self-tests (model answers must score full
  marks; copying the question must score zero).
- `node --experimental-strip-types scripts/try-answer.ts w1-q03 "an answer"` — mark a sample answer.
- `npm test` — unit tests for the written-answer marker.

## Develop
```bash
npm install
npm run dev
```
