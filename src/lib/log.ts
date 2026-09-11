// The attempt log's on-disk format, shared by localStorage and export files.
// Pure functions only: no storage access, so everything here is unit-testable.

import { CATEGORY_BY_ID } from "../data/categories.ts";
import type { Attempt, CategoryId, SessionMode } from "../types.ts";

export const APP_ID = "toefl-itp-drill";
export const LOG_VERSION = 1;

/** One JSON document holding the whole log. Stored and exported in the same shape. */
export type LogFile = {
  app: typeof APP_ID;
  version: typeof LOG_VERSION;
  lastExportAt: number | null;
  attempts: readonly Attempt[];
};

type Doc = Record<string, unknown>;

// migrations[n] upgrades a version-n document to version n + 1. On every schema
// change: bump LOG_VERSION and add a migration. Never edit a shipped migration.
const migrations: Record<number, (doc: Doc) => Doc> = {};

/** `reason` completes the sentence "This log could not be read because ...". */
export type ParseResult =
  | { ok: true; log: LogFile; dropped: number }
  | { ok: false; reason: string };

export function parseLog(text: string): ParseResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, reason: "it is not valid JSON" };
  }
  if (!isDoc(parsed) || parsed.app !== APP_ID) {
    return { ok: false, reason: "it is not an ITP Drill log" };
  }
  const version = parsed.version;
  if (typeof version !== "number" || !Number.isInteger(version) || version < 1) {
    return { ok: false, reason: "it has no valid version number" };
  }
  if (version > LOG_VERSION) {
    return { ok: false, reason: `it was saved by a newer version of the app (log version ${version})` };
  }
  let doc: Doc = parsed;
  for (let v = version; v < LOG_VERSION; v++) {
    const migrate = migrations[v];
    if (!migrate) return { ok: false, reason: `there is no upgrade path from log version ${v}` };
    doc = migrate(doc);
  }
  if (!Array.isArray(doc.attempts)) {
    return { ok: false, reason: "it has no list of attempts" };
  }

  const attempts = doc.attempts.map(parseAttempt).filter((a) => a !== null);
  attempts.sort((a, b) => a.at - b.at);
  return {
    ok: true,
    log: logFile(attempts, isTimestamp(doc.lastExportAt) ? doc.lastExportAt : null),
    dropped: doc.attempts.length - attempts.length,
  };
}

export function logFile(attempts: readonly Attempt[], lastExportAt: number | null): LogFile {
  return { app: APP_ID, version: LOG_VERSION, lastExportAt, attempts };
}

/** Compact JSON with one attempt per line, so the file stays readable in any editor. */
export function serializeLog(log: LogFile): string {
  const { attempts, ...head } = log;
  const lines = attempts.map((a) => JSON.stringify(a)).join(",\n");
  // Drop the header's closing brace, append the attempts array, close again.
  return `${JSON.stringify(head).slice(0, -1)},"attempts":[\n${lines}\n]}\n`;
}

/** Union of two attempt lists, deduplicated by item and timestamp, in time order. */
export function mergeAttempts(
  base: readonly Attempt[],
  incoming: readonly Attempt[],
): { attempts: Attempt[]; added: number } {
  const seen = new Set(base.map(attemptKey));
  const fresh = incoming.filter((a) => {
    const key = attemptKey(a);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return { attempts: [...base, ...fresh].sort((a, b) => a.at - b.at), added: fresh.length };
}

function attemptKey(a: Attempt): string {
  return `${a.itemId}@${a.at}`;
}

function parseAttempt(x: unknown): Attempt | null {
  if (!isDoc(x)) return null;
  const { itemId, category, chosen, correct, seconds, at, mode } = x;
  if (typeof itemId !== "string" || itemId === "" || !isCategory(category) || !isMode(mode)) return null;
  if (chosen !== 0 && chosen !== 1 && chosen !== 2 && chosen !== 3) return null;
  if (typeof correct !== "boolean" || !isTimestamp(at)) return null;
  if (typeof seconds !== "number" || !Number.isFinite(seconds) || seconds < 0) return null;
  return { itemId, category, chosen, correct, seconds, at, mode };
}

function isDoc(x: unknown): x is Doc {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}

function isCategory(x: unknown): x is CategoryId {
  return typeof x === "string" && Object.hasOwn(CATEGORY_BY_ID, x);
}

function isMode(x: unknown): x is SessionMode {
  return x === "drill" || x === "timed" || x === "review";
}

function isTimestamp(x: unknown): x is number {
  return typeof x === "number" && Number.isFinite(x) && x > 0;
}
