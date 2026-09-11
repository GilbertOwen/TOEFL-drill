import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { test } from "node:test";
import type { CompletionItem, ErrorItem, Passage } from "../types.ts";
import { validateBank, validateItem } from "./validate.ts";

async function loadBank() {
  const dir = new URL("../data/items/", import.meta.url);
  const items: (CompletionItem | ErrorItem)[] = [];
  const passages: Passage[] = [];
  for (const name of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    const file = (await import(new URL(name, dir).href)) as { items?: typeof items; passages?: Passage[] };
    items.push(...(file.items ?? []));
    passages.push(...(file.passages ?? []));
  }
  return { items, passages };
}

test("every item in the bank passes validation", async () => {
  const { items, passages } = await loadBank();
  assert.ok(items.length > 0);
  assert.deepEqual(validateBank(items, passages), []);
});

test("the validator catches broken items", async () => {
  const { items } = await loadBank();
  const completion = items.find((i): i is CompletionItem => i.section === "structure")!;
  const error = items.find((i): i is ErrorItem => i.section === "written_expression")!;

  const twoBlanks = validateItem({ ...completion, stem: `${completion.stem} ______` });
  assert.ok(twoBlanks.some((m) => m.includes("exactly one blank")));

  const badId = validateItem({ ...completion, id: "st-zzz-001" });
  assert.ok(badId.some((m) => m.startsWith("id should look like")));

  const keyExplained = validateItem({
    ...completion,
    explanation: { ...completion.explanation, distractors: ["x", "x", "x", "x"] },
  });
  assert.ok(keyExplained.some((m) => m.includes("because it is the key")));

  const threeLabels = validateItem({ ...error, segments: error.segments.filter((s) => s.label !== "D") });
  assert.ok(threeLabels.some((m) => m.includes("A, B, C, D in order")));

  const spaced = validateItem({
    ...error,
    segments: error.segments.map((s) => (s.label === "B" ? { ...s, text: ` ${s.text}` } : s)),
  });
  assert.ok(spaced.some((m) => m.includes("segment B has spaces")));

  const short = validateItem({ ...completion, stem: "It ______ here." });
  assert.ok(short.some((m) => m.includes("words")));
});
