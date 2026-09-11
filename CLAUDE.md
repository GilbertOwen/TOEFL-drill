# TOEFL ITP Practice Tool

## What this is

A personal drilling tool for TOEFL ITP Level 1, Section 2 (Structure and Written
Expression) and Section 3 (Reading Comprehension). Single user. No backend, no auth.
The point is not to simulate the test — it is to find and fix specific grammar
weaknesses, so the error log is the core feature and the quiz UI serves it.

Target: raise a 540 ITP total, where Structure is the weakest section.

## Test facts that constrain the design

- ITP Level 1 Section 2: 40 questions, 25 minutes. ~37 seconds per item. Speed is
  part of the skill, so the timed mode must use real pacing.
- Section 2 splits into two item types: 15 sentence completion (Structure),
  25 error identification (Written Expression).
- ITP Level 1 Section 3: 50 questions, 55 minutes, ~5 passages. ~66 seconds per item.
- Section scores 31–68 (Structure) and 31–67 (Reading). Total 310–677.

## Non-negotiable rules for item writing

1. **Never copy items from ETS materials or any commercial prep book.** Write original
   items. If official PDFs are used, they are read for *calibration of style and
   difficulty only* — never as a source of text to reproduce or lightly reword.
2. **Exactly one defensible answer.** In error identification, three underlined
   segments must be genuinely correct English. If two are arguably wrong, the item is
   broken — discard it.
3. **The error is not in the most obvious position.** Do not default to putting it in
   segment A or in the main verb. Vary placement across a batch.
4. **Register: academic American English, third person, encyclopedic.** Subject matter
   pulled from US history, geology, astronomy, biology, economics, American
   literature, art history. No dialogue, no second person, no contemporary slang.
5. **Sentence length: 18–35 words** with at least one embedded or reduced clause.
   Short simple sentences do not resemble real items.
6. **Every explanation names the rule.** "B is wrong because the subject *number* is
   singular, and *of students* is a prepositional phrase that cannot supply the
   subject" — not "B should be *is*."
7. **Every explanation says why the trap works.** Name the surface feature that makes
   the wrong answer tempting.
8. Do not reuse the same trap wording across items in a category. Vary the vocabulary
   carrying the trap.

## Verification

After writing any batch, run a separate verification pass: re-read each item cold,
independently derive the answer, and compare to the stored key. Flag mismatches rather
than silently fixing. Set `verified: false` on anything uncertain; the UI surfaces
unverified items with a marker so they can be checked against a grammar reference.

## Stack

Vite + React + TypeScript + Tailwind. localStorage for progress. No server, no
database, no external API calls. Deploys as a static site.

## Do not build

Streaks, badges, XP, leaderboards, social features, AI chat tutor, dark mode toggle,
onboarding tour, or a settings page. Any of these before the item bank passes 200
verified items is time stolen from the thing that matters.

## Commands

```
npm run dev          # Vite dev server (port 5173 by default)
npm test             # node --test, all unit tests
npm run typecheck    # tsc -b, zero errors expected
npm run validate     # checks every item against CLAUDE.md rules
npm run build        # production build
```

## Item file conventions (Prompt B sessions)

### Where items live

`src/data/items/*.ts` — every `.ts` file is auto-loaded by `bank.ts` via
`import.meta.glob("./items/*.ts", { eager: true })`. Export `items`
(for Section 2) and/or `passages` (for reading). Adding items never requires
editing app code.

### Item ID format

`<st|we|rd>-<category code>-NNN`

- `st` = Structure (sentence completion), `we` = Written Expression (error ID),
  `rd` = Reading
- Category code is the short code from `categories.ts` (e.g. `sva`, `conn`, `main`)
- NNN = zero-padded 3-digit number, unique within the category

### Text conventions

- Completion blank: `"______"` (six underscores), exactly once per stem.
- `*text*` renders as italic.
- Error-ID labeled segments carry **no surrounding spaces** in the `text` field;
  connecting segments supply whitespace.
- `anchorParagraph` is **1-based** to match "in paragraph 2" phrasing in prompts.

### File naming

Name files by section and batch: `seed-structure.ts`, `we-expansion-b.ts`,
`reading-expansion-b.ts`, etc. One file per batch makes diffs and reviews clean.

## Gotchas

- **Port 5173** holds the user's REAL practice log. Test only on port 5174
  (use `npx vite --port 5174`).
- **Browser tool**: send key `"Enter"`, not `"Return"` (Return arrives empty).
  The tool's key presses can't trigger a native button click, so click buttons.
- **Editing `ItemView.tsx`** triggers a full dev reload (it also exports helpers).
- **Safari 7-day storage wipe**: WebKit purges localStorage after 7 days of no
  visits. Export regularly.

