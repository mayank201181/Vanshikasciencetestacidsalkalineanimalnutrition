# Content authoring spec (for content agents)

You are writing **one** content file for a test-prep web app for a strong **Year 8 student
(age 12–13)** at a British international school in Singapore (English National Curriculum KS3,
leading to IGCSE; textbook: Pearson/Longman *Exploring Science*). Her progress-check test is on
**Thursday** and covers exactly two units: **Acids & Alkalis** and **Animal Nutrition (digestion)**.
Parents will hand her this app — the content must be correct, clear and genuinely useful.

## Read these first
1. `lib/types.ts` — the TypeScript contract. Match it exactly.
2. `docs/syllabus.md` — what the school taught (cover sheet, knowledge organisers, glossaries).
   **Stay inside this syllabus.** Use the school's wording and definitions where they exist.

## Hard rules
- Write **exactly one file** — the path and export name given in your task. Touch nothing else.
- Start the file with `import type { ... } from "../types";` and export exactly the named const.
- Do **not** run `npm run build` / `next build`. You MAY check syntax with
  `npx tsc --noEmit --skipLibCheck --target es2020 --moduleResolution bundler --module esnext <your file>`
  (ignore nothing — it should pass cleanly since it only imports types).
- Question `id`s must follow the pattern in your task (e.g. `s1-q01` … `s1-q25`), zero-padded, in order.
- **British spelling**, matching the school: sulfuric, sulfate, neutralise, neutralisation, colour,
  faeces, oesophagus, fibre, litre, centimetre (cm³), analyse.
- Strings: use double quotes; if a string contains double quotes or is an SVG, use a backtick
  template literal. Never put a backtick or the sequence `${` inside a backtick string.
- Plain text only in questions/options (no markdown). `explanation`, `modelAnswer`, guide `body`
  may use **bold** and "- " bullet lines.

## Scientific accuracy guardrails (important — follow the school's version)
- pH scale: use 0–14. Below 7 acidic, 7 neutral, above 7 alkaline. Lower pH = more acidic;
  higher pH = more alkaline. Never write a question whose answer depends on 0–14 vs 1–14.
- Universal indicator colours (use these bands): pH 0–2 red (strongly acidic), 3–4 orange,
  5–6 yellow (weakly acidic), 7 green (neutral), 8–10 blue (weakly alkaline),
  11–14 dark blue/purple (strongly alkaline). Prefer "red / orange-yellow / green / blue / purple"
  in questions; avoid fine distinctions like pH 10 vs 11 colours.
- Litmus: blue litmus → red in acid; red litmus → blue in alkali; in a neutral solution neither
  changes. Litmus cannot tell you how strong an acid/alkali is.
- An **alkali is a soluble base**. Metal oxides, hydroxides and carbonates are bases. Copper oxide
  is a base but NOT an alkali (insoluble). Sodium/potassium hydroxide are alkalis.
- Neutralisation: acid + alkali → salt + water (school's general equation). If you mention
  carbonates, acid + metal carbonate → salt + water + carbon dioxide (fizzing) — only in
  challenge questions, clearly explained.
- Salts (school limit): hydrochloric → **chloride**, sulfuric → **sulfate**, nitric → **nitrate**.
  First word of the salt comes from the metal in the hydroxide (sodium hydroxide → sodium ___).
  Water is the other product.
- Diluting an acid raises its pH towards 7 but it never goes above 7 (never becomes alkaline);
  diluting an alkali lowers its pH towards 7 but never below 7.
- Dilute = fewer acid particles in the same volume (less hazardous). Hazard = something that
  could cause harm; risk = the chance a hazard actually causes harm; precaution = an action that
  reduces the risk.
- Concentrated acids/alkalis → **corrosive** symbol; dilute ones → often **irritant
  (exclamation mark)** symbol.
- Bee sting = acidic → (traditionally) treat with an alkali such as bicarbonate of soda or soap.
  Wasp sting = alkaline → treat with a weak acid such as vinegar. Phrase as what is
  "traditionally used" / "would neutralise".
- Digestion = breaking large insoluble molecules into small soluble ones that can be absorbed.
- Enzymes are proteins that speed up (catalyse) reactions; they are **not living**; they are not
  used up. Carbohydrase (e.g. amylase) → starch to sugars (glucose; amylase makes maltose);
  protease → protein to amino acids; lipase → lipids to fatty acids + glycerol.
- Where: starch digestion in mouth (salivary amylase) and small intestine; protein in stomach and
  small intestine; fat in small intestine. The pancreas makes enzymes released into the small
  intestine. The stomach also makes protease (that's why protein digestion starts there).
- Bile is made in the **liver** (stored in the gall bladder), released into the small intestine.
  It **emulsifies** fat — breaks big droplets into small droplets (breaks fat UP, not DOWN — it is
  NOT an enzyme and does not chemically digest fat). This increases surface area for lipase. Bile
  is alkaline and neutralises stomach acid.
- Stomach: churns food, hydrochloric acid kills bacteria and gives the right (acidic) conditions
  for stomach protease.
- Small intestine: digestion finishes and digested food is absorbed into the blood. Adaptations:
  villi → very large surface area; walls one cell thick → short distance; lots of capillaries →
  good blood supply. Large intestine absorbs water. Rectum stores faeces; faeces leave via the anus.
- Vitamins, minerals and water are small enough to be absorbed without digestion. Fibre cannot be
  digested — it keeps food/faeces moving and prevents constipation.
- Food tests: iodine (orange-brown → blue-black = starch); Benedict's + heat in a hot water bath
  (blue → green/yellow/orange/brick red = sugar e.g. glucose); biuret (blue → purple/lilac =
  protein); ethanol then water (milky white emulsion = fat/lipid).
- Avoid questions that hinge on egestion vs excretion, or on anything not in the syllabus.

## Multiple-choice questions (MCQ) — house style
- Exactly **4 options**, exactly **one** defensibly correct given the school's definitions.
- Distractors must be **plausible** and built from real misconceptions (e.g. "bile is an enzyme",
  "diluting an acid makes it alkaline", "red litmus turns red in acid", "the salt from nitric acid
  is a nitride", "fibre gives energy"). No "all/none of the above", no joke options.
- Keep options similar in length and style; the correct one must NOT usually be the longest.
- Vary `answerIndex` across 0–3 roughly evenly within your set.
- `optionFeedback`: 4 strings in option order. For the **correct** option: one sentence on why it
  is right. For each **wrong** option: 1–2 sentences saying why it is tempting AND exactly why it
  is wrong, in kid-friendly words (e.g. "Nitride sounds right, but salts from nitric acid always end
  in -ate: nitrate."). Do not start with "Correct"/"Wrong"/✓/✗ — the app adds that.
- `explanation`: 2–4 sentences that **teach** the idea fully (the rule + the reason + a link to
  related facts). Add a memory trick when a good one exists.
- `hints`: a ladder, gentlest first, never stating the answer. warmup: 1 hint; core: 2 hints;
  challenge: 3 hints (the 3rd may be a strong nudge).
- `strategy`: pick one: "Recall the keyword", "Use the pH scale", "Eliminate wrong options",
  "Name the salt (metal first, acid second)", "Follow the food", "Read the data carefully",
  "Think like a scientist (fair test)", "Apply it to a new situation", "Think about particles",
  "Consider the extremes", "Work backwards", "Compare and contrast".
- `difficulty` spread per 25: about 7 warmup, 12 core, 6 challenge — order questions warmup →
  core → challenge within your set.
- `table` (DataTable) for data questions where your blueprint says so: short, realistic numbers,
  units in the headers (e.g. "Volume of acid neutralised (cm³)").
- `figure: "digestive-lettered"` shows the app's diagram with letters: **A mouth, B oesophagus,
  C liver, D stomach, E pancreas, F small intestine, G large intestine, H rectum, I anus**
  (the gall bladder is drawn but not lettered). Only use it where your blueprint says.

### MCQ example (shape only)
```ts
{
  id: "s1-q02",
  topic: "aa",
  section: "aa-indicators",
  difficulty: "warmup",
  question: "A piece of blue litmus paper is dipped into lemon juice. What colour does it turn?",
  options: ["Stays blue", "Red", "Green", "Purple"],
  answerIndex: 1,
  optionFeedback: [
    "Blue litmus only stays blue in neutral or alkaline solutions — lemon juice contains citric acid.",
    "Lemon juice is acidic (citric acid), and acids turn blue litmus red.",
    "Green is the universal indicator colour for neutral (pH 7) — litmus never turns green.",
    "Purple is the universal indicator colour for a strong alkali, not a litmus colour.",
  ],
  explanation:
    "Litmus has just two colours. **Acids turn blue litmus red; alkalis turn red litmus blue.** Lemon juice contains citric acid, so the blue paper turns red. Memory trick: **B**lue to **R**ed = **BRA** — Blue Red Acid.",
  hints: ["Is lemon juice an acid or an alkali?"],
  strategy: "Recall the keyword",
},
```

## Written questions (QA) — house style
- `marks` 2–6 and **must equal `markScheme.length`**.
- Each `MarkPoint`:
  - `point`: one crisp creditable idea, e.g. "Adds universal indicator and stops when it turns green (pH 7)".
  - `keywords`: 4–10 **lower-case** phrases a real 12-year-old might write for that idea,
    including synonyms and common phrasings. "+" means all parts must appear somewhere in the
    answer, in any order: `"sodium+chloride"`, `"heat+evaporating basin"`.
    How the marker (`lib/grade.ts`) actually matches:
    - UK/US spellings and some common misspellings are normalised (sulphate, neutralize, amalyse…).
    - A keyword word of **4+ letters** also matches any answer word that **starts with** it
      (`"acid"` → acidic; `"evaporat"` → evaporating). Plurals always match.
    - Typo tolerance: 1 letter for keyword words of **6–9 letters**, 2 letters for 10+; **none**
      for words under 6 letters. Confusable pairs never match each other
      (carbohydrase/carbohydrate, soluble/insoluble, either/neither).
    - A multi-word phrase must appear as consecutive words, allowing one small filler word
      between them ("blue and black"); hyphens and punctuation are ignored.
    - **Sentence breaks** (. ; : ! ? = and new lines) end phrases and stop negation.
    - **Negation:** a match is refused if not/no/never/isn't/doesn't/don't/can't/cannot/won't/
      without/neither/nor is one of the two words before it in the same sentence — except
      comparisons like "not as …", "not only …".
    Keep phrases short (1–3 words) so they actually match.
  - **Never** use a keyword that already appears in the question text on its own (a student who
    copies the question must score 0). Combine with "+" instead.
  - Negations: the app ignores a match if "not/no/never/isn't/doesn't/don't/can't/cannot" comes
    right before it. If the idea itself is negative, put the negation inside the phrase
    (e.g. `"not digested"`, `"cannot be digested"`, `"can't be digested"`).
  - `feedback`: 1–3 sentences that **teach** the missing point if the student left it out.
- `modelAnswer`: a full-mark answer written as a strong student would write it (2–6 sentences or
  bullets). It **must** contain a keyword match for every mark point (the app self-tests this).
- `hints`: 2 hints (ladder). `commonError`: the specific mistake students make on this question.

### QA example (shape only)
```ts
{
  id: "w1-q03",
  topic: "aa",
  section: "aa-neutralisation",
  difficulty: "core",
  question: "Describe how you could make a neutral solution from sodium hydroxide and hydrochloric acid, and then get solid salt crystals from it.",
  marks: 4,
  hints: ["How will you know when the solution is neutral?", "How do you get a dissolved solid back out of water?"],
  modelAnswer: "Put some hydrochloric acid in a beaker and add a few drops of universal indicator. Add the sodium hydroxide a little at a time, stirring, until the indicator turns green (pH 7) — the solution is now neutral. Pour it into an evaporating basin and heat it gently to evaporate the water. Crystals of sodium chloride (salt) are left behind.",
  markScheme: [
    { point: "Uses an indicator (e.g. universal indicator) to show neutral", keywords: ["universal indicator", "indicator", "ph meter", "ph probe", "litmus"], feedback: "You need a way of knowing when it is neutral — add universal indicator (or use a pH probe)." },
    { point: "Adds the alkali a little at a time until green / pH 7", keywords: ["green", "ph 7", "ph of 7", "until neutral", "until it is neutral", "drop by drop", "little at a time"], feedback: "Add the alkali slowly (drop by drop) and stop when the indicator turns green — that's pH 7, neutral." },
    { point: "Evaporates the water (heat in an evaporating basin / leave to evaporate)", keywords: ["evaporat", "heat+basin", "boil off", "leave it to dry", "leave in a warm place"], feedback: "The salt is dissolved, so you must evaporate the water off — heat gently in an evaporating basin or leave it somewhere warm." },
    { point: "Names the salt formed as sodium chloride", keywords: ["sodium chloride", "table salt", "common salt"], feedback: "Sodium hydroxide + hydrochloric acid makes **sodium chloride** (and water)." },
  ],
  commonError: "Forgetting to say how you know the solution is neutral, or saying you 'boil away the salt' — it's the WATER that evaporates; the salt is left behind.",
  strategy: "Think like a scientist (fair test)",
},
```

## Guide sections — house style
- Address the student as "you"; warm, clear, precise; short paragraphs; **bold** keywords.
- `discovery`: a curiosity puzzle *before* the explanation (problem) + the reveal (idea).
- `body`: 150–300 words; markdown-lite (bold, italics, "- " bullets, blank-line paragraphs).
  Simple pipe tables are allowed:
  ```
  | Acid | Salt ending |
  |---|---|
  | hydrochloric acid | chloride |
  ```
- `diagram`: an inline SVG (backtick string) — small, clean and correct: `viewBox`,
  `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, `aria-label`, simple shapes and text
  (font-size 11–14, font-family "sans-serif"), max ~60 elements. No external images, fonts,
  scripts, `<style>` blocks or `${`. Make sure text does not overlap or run outside the viewBox.
- `keyPoints` 3–5, `whyItWorks` 1–3 sentences, `memoryTrick` when a good one exists,
  `examTip` (the mark-losing mistake), `thinkDeeper` (a reasoning question).
