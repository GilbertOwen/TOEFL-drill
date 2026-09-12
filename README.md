# ITP Drill

A personal drilling tool for TOEFL ITP Level 1: Section 2 (Structure and Written
Expression) and Section 3 (Reading Comprehension). Single user, no backend — all
progress is kept in the browser's localStorage and can be exported to a JSON file.

The point is not to simulate the test but to find and fix specific grammar
weaknesses, so the error log is the core feature.

## Run

```
npm install
npm run dev
```

## Commands

```
npm test          # unit tests (node --test)
npm run typecheck # tsc -b
npm run validate  # checks every item against the rules in CLAUDE.md
npm run build     # production build into dist/
```

## Item bank

200 items across 41 skill categories: sentence completion, error identification,
and reading passages. All items are original. Conventions for adding more are in
[CLAUDE.md](CLAUDE.md).

## Deploy

`npm run build` produces a static `dist/` folder that works on any static host
(Netlify, Vercel, GitHub Pages); `base` is relative, so no path config is needed.

## Disclaimer

Not affiliated with, endorsed by, or connected to ETS. TOEFL is a registered
trademark of ETS. All practice material here is original and written for this
project.
