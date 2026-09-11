import assert from "node:assert/strict";
import { test } from "node:test";
import type { Attempt } from "../types.ts";
import { APP_ID, logFile, mergeAttempts, parseLog, serializeLog } from "./log.ts";

const T0 = Date.UTC(2026, 8, 10, 12);

function attempt(overrides: Partial<Attempt> = {}): Attempt {
  return {
    itemId: "we-sva-001",
    category: "subject_verb_agreement",
    chosen: 1,
    correct: true,
    seconds: 30,
    at: T0,
    mode: "drill",
    ...overrides,
  };
}

function doc(fields: Record<string, unknown>): string {
  return JSON.stringify({ app: APP_ID, version: 1, lastExportAt: null, attempts: [], ...fields });
}

test("a serialized log parses back to the same log, one attempt per line", () => {
  const log = logFile([attempt(), attempt({ itemId: "st-inv-002", category: "inversion", at: T0 + 1 })], T0);
  const text = serializeLog(log);
  const lines = text.split("\n");
  assert.equal(JSON.parse(lines[1].replace(/,$/, "")).itemId, "we-sva-001");
  assert.equal(JSON.parse(lines[2]).itemId, "st-inv-002");
  assert.deepEqual(parseLog(text), { ok: true, log, dropped: 0 });
});

test("an empty log serializes to valid JSON", () => {
  const result = parseLog(serializeLog(logFile([], null)));
  assert.ok(result.ok);
  assert.equal(result.log.attempts.length, 0);
});

test("rejects text that is not JSON", () => {
  assert.deepEqual(parseLog("{oops"), { ok: false, reason: "it is not valid JSON" });
});

test("rejects JSON that is not an ITP Drill log", () => {
  for (const text of ['{"hello":1}', "[]", "null", doc({ app: "something-else" })]) {
    assert.deepEqual(parseLog(text), { ok: false, reason: "it is not an ITP Drill log" }, text);
  }
});

test("refuses a log from a newer version instead of guessing", () => {
  const result = parseLog(doc({ version: 2 }));
  assert.ok(!result.ok);
  assert.match(result.reason, /newer version/);
});

test("drops malformed attempts and counts them", () => {
  const good = attempt();
  const result = parseLog(
    doc({
      attempts: [
        good,
        { ...good, category: "not_a_category" },
        { ...good, category: "toString" },
        { ...good, chosen: 4 },
        { ...good, seconds: -1 },
        { ...good, mode: "practice" },
        { ...good, itemId: "" },
        "junk",
      ],
    }),
  );
  assert.ok(result.ok);
  assert.deepEqual(result.log.attempts, [good]);
  assert.equal(result.dropped, 7);
});

test("sorts attempts by time and ignores a bad lastExportAt", () => {
  const late = attempt({ at: T0 + 5 });
  const early = attempt({ at: T0 });
  const result = parseLog(doc({ attempts: [late, early], lastExportAt: "yesterday" }));
  assert.ok(result.ok);
  assert.deepEqual(result.log.attempts, [early, late]);
  assert.equal(result.log.lastExportAt, null);
});

test("merge adds only unseen attempts and keeps time order", () => {
  const a = attempt({ at: T0 });
  const b = attempt({ at: T0 + 2 });
  const c = attempt({ itemId: "we-sva-002", at: T0 + 1 });
  const { attempts, added } = mergeAttempts([a, b], [a, c, c]);
  assert.equal(added, 1);
  assert.deepEqual(attempts, [a, c, b]);
});
