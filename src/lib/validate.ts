// Checks the item-writing rules in CLAUDE.md that code can check. The rest (one
// defensible answer, register, trap quality) still needs the verification pass.

import { CATEGORY_BY_ID, SECTION_CODES } from "../data/categories.ts";
import type { CategoryId, CompletionItem, ErrorItem, Item, Passage } from "../types.ts";

/** The blank in a completion stem: "______" (any run of three or more underscores). */
export const BLANK = /_{3,}/;
export const MIN_WORDS = 18;
export const MAX_WORDS = 35;

export type Problem = { id: string; message: string };

export function validateBank(items: readonly (CompletionItem | ErrorItem)[], passages: readonly Passage[]): Problem[] {
  const problems: Problem[] = [];
  const all: Item[] = [...items, ...passages.flatMap((p) => p.items)];
  const ids = new Set<string>();
  for (const id of [...all.map((i) => i.id), ...passages.map((p) => p.id)]) {
    if (ids.has(id)) problems.push({ id, message: "duplicate id" });
    ids.add(id);
  }
  for (const item of all) {
    for (const message of validateItem(item)) problems.push({ id: item.id, message });
  }
  for (const passage of passages) {
    for (const message of validatePassage(passage)) problems.push({ id: passage.id, message });
  }
  return problems;
}

export function validateItem(item: Item): string[] {
  const problems: string[] = [];
  const code = CATEGORY_BY_ID[item.category]?.code;
  const prefix = SECTION_CODES[item.section];
  if (!new RegExp(`^${prefix}-${code}-\\d{3}$`).test(item.id)) {
    problems.push(`id should look like ${prefix}-${code}-001`);
  }
  item.explanation.distractors.forEach((text, i) => {
    if (i === item.answer && text !== "") problems.push(`distractors[${i}] must be "" because it is the key`);
    if (i !== item.answer && text.trim() === "") problems.push(`distractors[${i}] is empty`);
  });
  for (const field of ["rule", "why", "trap"] as const) {
    if (item.explanation[field].trim() === "") problems.push(`explanation.${field} is empty`);
  }
  const alsoTests: readonly CategoryId[] = item.alsoTests ?? [];
  if (alsoTests.includes(item.category)) problems.push("alsoTests repeats the primary category");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.addedOn)) problems.push("addedOn must be YYYY-MM-DD");

  if (item.section === "structure") problems.push(...checkCompletion(item));
  if (item.section === "written_expression") problems.push(...checkError(item));
  return problems;
}

function checkCompletion(item: CompletionItem): string[] {
  const problems: string[] = [];
  const blanks = item.stem.split(BLANK).length - 1;
  if (blanks !== 1) problems.push(`stem must contain exactly one blank, found ${blanks}`);
  if (new Set(item.options.map((o) => o.trim().toLowerCase())).size !== 4) {
    problems.push("the four options must all differ");
  }
  problems.push(...checkLength(item.stem.replace(BLANK, item.options[item.answer])));
  return problems;
}

function checkError(item: ErrorItem): string[] {
  const problems: string[] = [];
  const labels = item.segments.flatMap((s) => (s.label ? [s.label] : [])).join("");
  if (labels !== "ABCD") problems.push(`labeled segments must be A, B, C, D in order, found "${labels}"`);
  for (const s of item.segments) {
    if (s.label && s.text !== s.text.trim()) problems.push(`segment ${s.label} has spaces around it`);
  }
  const sentence = errorSentence(item);
  if (/\s{2,}/.test(sentence)) problems.push("segments join with a double space");
  if (item.explanation.corrected.trim() === sentence.trim()) problems.push("corrected sentence is the same as the original");
  problems.push(...checkLength(sentence));
  return problems;
}

function validatePassage(passage: Passage): string[] {
  const problems: string[] = [];
  const words = wordCount(passage.paragraphs.join(" "));
  if (words !== passage.wordCount) problems.push(`wordCount says ${passage.wordCount}, the text has ${words}`);
  for (const item of passage.items) {
    const anchor = item.anchorParagraph;
    if (anchor !== undefined && (anchor < 1 || anchor > passage.paragraphs.length)) {
      problems.push(`${item.id}: anchorParagraph ${anchor} is out of range`);
    }
    const hint = item.lineHint;
    const searched = anchor === undefined ? passage.paragraphs : passage.paragraphs.slice(anchor - 1, anchor);
    if (hint && !searched.some((text) => text.includes(hint))) {
      problems.push(`${item.id}: lineHint "${hint}" does not appear in ${anchor ? `paragraph ${anchor}` : "the passage"}`);
    }
  }
  return problems;
}

export function errorSentence(item: ErrorItem): string {
  return item.segments.map((s) => s.text).join("");
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function checkLength(sentence: string): string[] {
  const words = wordCount(sentence.replace(/\*/g, ""));
  return words < MIN_WORDS || words > MAX_WORDS
    ? [`sentence has ${words} words; CLAUDE.md asks for ${MIN_WORDS}-${MAX_WORDS}`]
    : [];
}
