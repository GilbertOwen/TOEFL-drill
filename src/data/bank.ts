// The item bank. Every file in src/data/items/ is loaded automatically: a file
// exports `items` (Section 2) and/or `passages` (reading), so adding items never
// means editing app code.

import type { CategoryId, CompletionItem, ErrorItem, Item, Passage, Section } from "../types.ts";
import { CATEGORIES } from "./categories.ts";

type ItemFile = { items?: (CompletionItem | ErrorItem)[]; passages?: Passage[] };

const files = import.meta.glob<ItemFile>("./items/*.ts", { eager: true });

function loadCustomData() {
  try {
    const raw = localStorage.getItem("toefl-itp-drill.custom-bank");
    if (!raw) return { items: [], passages: [] };
    const parsed = JSON.parse(raw);
    return {
      items: Array.isArray(parsed.items) ? parsed.items : [],
      passages: Array.isArray(parsed.passages) ? parsed.passages : [],
    };
  } catch {
    return { items: [], passages: [] };
  }
}

const customData = loadCustomData();

export const PASSAGES: readonly Passage[] = [
  ...Object.values(files).flatMap((f) => f.passages ?? []),
  ...customData.passages,
];

export const ITEMS: readonly Item[] = [
  ...Object.values(files).flatMap((f) => f.items ?? []),
  ...customData.items,
  ...PASSAGES.flatMap((p) => p.items),
];

export const ITEM_BY_ID: ReadonlyMap<string, Item> = new Map(ITEMS.map((i) => [i.id, i]));

export const PASSAGE_BY_ITEM_ID: ReadonlyMap<string, Passage> = new Map(
  PASSAGES.flatMap((p) => p.items.map((i) => [i.id, p] as const)),
);

/** Categories with at least one item, in display order. */
export const DRILLABLE: readonly CategoryId[] = CATEGORIES.map((c) => c.id).filter((id) =>
  ITEMS.some((i) => i.category === id),
);

export function countItems(filter: { category?: CategoryId; section?: Section; verified?: boolean }): number {
  return ITEMS.filter(
    (i) =>
      (filter.category === undefined || i.category === filter.category) &&
      (filter.section === undefined || i.section === filter.section) &&
      (filter.verified === undefined || i.verified === filter.verified),
  ).length;
}
