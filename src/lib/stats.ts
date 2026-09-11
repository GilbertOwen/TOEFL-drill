// Per-category numbers derived from the attempt log. Pure functions over Attempt[].

import { CATEGORY_BY_ID } from "../data/categories.ts";
import type { Attempt, CategoryGroup, CategoryId } from "../types.ts";

/** A category's last N attempts count as its current performance. */
export const RECENT_WINDOW = 10;
/** Below this many attempts a category is "untested" rather than ranked. */
export const MIN_ATTEMPTS = 3;
/** Recent accuracy at or above this is "fine". */
export const ACCURACY_OK = 0.8;
/**
 * Median seconds above which an accurate category is flagged slow. The real test
 * allows ~37 s per Section 2 item and ~66 s per reading item; both limits sit
 * about 20% above that pace.
 */
export const SLOW_SECONDS: Record<CategoryGroup, number> = {
  structure: 45,
  written_expression: 45,
  reading: 80,
};

export type CategoryStats = {
  category: CategoryId;
  attempts: number;
  correct: number;
  /** Lifetime share correct, 0 to 1. */
  accuracy: number;
  /** min(attempts, RECENT_WINDOW). */
  recentAttempts: number;
  /** Share correct over the recent window; compare with `accuracy` for the trend. */
  recentAccuracy: number;
  /** Median seconds per answer over the recent window. */
  medianSeconds: number;
};

export type Status = "untested" | "weak" | "slow" | "ok";

/** Stats for every category with at least one attempt. Expects attempts in time order. */
export function statsByCategory(attempts: readonly Attempt[]): Map<CategoryId, CategoryStats> {
  const byCategory = new Map<CategoryId, Attempt[]>();
  for (const a of attempts) {
    const list = byCategory.get(a.category);
    if (list) list.push(a);
    else byCategory.set(a.category, [a]);
  }
  const stats = new Map<CategoryId, CategoryStats>();
  for (const [category, list] of byCategory) {
    const recent = list.slice(-RECENT_WINDOW);
    stats.set(category, {
      category,
      attempts: list.length,
      correct: list.filter((a) => a.correct).length,
      accuracy: shareCorrect(list),
      recentAttempts: recent.length,
      recentAccuracy: shareCorrect(recent),
      medianSeconds: median(recent.map((a) => a.seconds)),
    });
  }
  return stats;
}

/** Weak and slow are exclusive: slow means accurate enough but over pace. */
export function statusOf(s: CategoryStats | undefined): Status {
  if (!s || s.attempts < MIN_ATTEMPTS) return "untested";
  if (s.recentAccuracy < ACCURACY_OK) return "weak";
  if (paceRatio(s) > 1) return "slow";
  return "ok";
}

/** Weakest first. */
export function weakCategories(stats: Iterable<CategoryStats>): CategoryStats[] {
  return [...stats]
    .filter((s) => statusOf(s) === "weak")
    .sort((a, b) => a.recentAccuracy - b.recentAccuracy || a.accuracy - b.accuracy);
}

/** Furthest over pace first. */
export function slowCategories(stats: Iterable<CategoryStats>): CategoryStats[] {
  return [...stats].filter((s) => statusOf(s) === "slow").sort((a, b) => paceRatio(b) - paceRatio(a));
}

/**
 * The "weakest N" drill set: ranked weak categories first, then unranked ones
 * (early misses before untried, untried before early successes), then the rest by
 * recent accuracy. Only categories in `drillable` (ones with items).
 */
export function weakestCategories(
  stats: Map<CategoryId, CategoryStats>,
  drillable: readonly CategoryId[],
  n = 5,
): CategoryId[] {
  const available = new Set(drillable);
  const attemptsOf = (c: CategoryId) => stats.get(c)?.attempts ?? 0;
  // Right answers minus wrong ones: below zero means more misses than hits so far.
  const balance = (c: CategoryId) => {
    const s = stats.get(c);
    return s ? 2 * s.correct - s.attempts : 0;
  };
  const weak = weakCategories(stats.values())
    .map((s) => s.category)
    .filter((c) => available.has(c));
  const untested = drillable
    .filter((c) => attemptsOf(c) < MIN_ATTEMPTS)
    .sort((a, b) => balance(a) - balance(b) || attemptsOf(a) - attemptsOf(b));
  const rest = [...drillable].sort(
    (a, b) => (stats.get(a)?.recentAccuracy ?? 0) - (stats.get(b)?.recentAccuracy ?? 0),
  );
  return [...new Set([...weak, ...untested, ...rest])].slice(0, n);
}

export function median(values: readonly number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function shareCorrect(list: readonly Attempt[]): number {
  return list.length === 0 ? 0 : list.filter((a) => a.correct).length / list.length;
}

/** Median time relative to the slow limit for the category's group; above 1 is slow. */
function paceRatio(s: CategoryStats): number {
  return s.medianSeconds / SLOW_SECONDS[CATEGORY_BY_ID[s.category].group];
}
