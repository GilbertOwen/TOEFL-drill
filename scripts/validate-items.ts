// Validates every file in src/data/items/ and prints a summary of the bank.
// Run: npm run validate

import { readdirSync } from "node:fs";
import { errorSentence, validateBank } from "../src/lib/validate.ts";
import type { CompletionItem, ErrorItem, Item, Passage } from "../src/types.ts";

const dir = new URL("../src/data/items/", import.meta.url);
const items: (CompletionItem | ErrorItem)[] = [];
const passages: Passage[] = [];
for (const name of readdirSync(dir).filter((f) => f.endsWith(".ts")).sort()) {
  const file = (await import(new URL(name, dir).href)) as { items?: typeof items; passages?: Passage[] };
  items.push(...(file.items ?? []));
  passages.push(...(file.passages ?? []));
}

const all: Item[] = [...items, ...passages.flatMap((p) => p.items)];
const count = (pred: (i: Item) => boolean) => all.filter(pred).length;
const errorItems = items.filter((i): i is ErrorItem => i.section === "written_expression");
const positions = ["A", "B", "C", "D"].map((l, i) => `${l} ${errorItems.filter((e) => e.answer === i).length}`);

console.log(
  `Bank: ${count((i) => i.section === "structure")} structure, ` +
    `${count((i) => i.section === "written_expression")} written expression, ` +
    `${count((i) => i.section === "reading")} reading in ${passages.length} passage(s).`,
);
console.log(`Verified: ${count((i) => i.verified)} of ${all.length}.`);
console.log(`Error positions (written expression): ${positions.join(", ")}`);
console.log(`Difficulty: 1 = ${count((i) => i.difficulty === 1)}, 2 = ${count((i) => i.difficulty === 2)}, 3 = ${count((i) => i.difficulty === 3)}`);

const problems = validateBank(items, passages);
if (problems.length === 0) {
  console.log("No problems found.");
} else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) {
    const item = errorItems.find((e) => e.id === p.id);
    console.log(`  ${p.id}: ${p.message}${item ? `\n    "${errorSentence(item)}"` : ""}`);
  }
  process.exitCode = 1;
}
