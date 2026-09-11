import assert from "node:assert/strict";
import { test } from "node:test";
import type { Attempt } from "../types.ts";
import { APP_ID, parseLog } from "./log.ts";
import { STORAGE_KEY, createLogStore, type StorageLike } from "./store.ts";

const T0 = Date.UTC(2026, 8, 10, 12);

class MemoryStorage implements StorageLike {
  data = new Map<string, string>();
  failWrites = false;
  get length() {
    return this.data.size;
  }
  key(i: number) {
    return [...this.data.keys()][i] ?? null;
  }
  getItem(key: string) {
    return this.data.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    if (this.failWrites) throw new DOMException("full", "QuotaExceededError");
    this.data.set(key, value);
  }
  removeItem(key: string) {
    this.data.delete(key);
  }
  setAsideKeys() {
    return [...this.data.keys()].filter((k) => k.startsWith(`${STORAGE_KEY}.set-aside.`));
  }
}

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

function logText(attempts: unknown[], version = 1): string {
  return JSON.stringify({ app: APP_ID, version, lastExportAt: null, attempts });
}

test("starts empty with no notice when storage is empty", () => {
  const state = createLogStore(new MemoryStorage()).getState();
  assert.deepEqual(state, { attempts: [], lastExportAt: null, notice: null });
});

test("recorded attempts survive a reload", () => {
  const storage = new MemoryStorage();
  createLogStore(storage).recordAttempt(attempt());
  assert.deepEqual(createLogStore(storage).getState().attempts, [attempt()]);
});

test("notifies subscribers on change", () => {
  const store = createLogStore(new MemoryStorage());
  let calls = 0;
  const unsubscribe = store.subscribe(() => calls++);
  store.recordAttempt(attempt());
  unsubscribe();
  store.recordAttempt(attempt({ at: T0 + 1 }));
  assert.equal(calls, 1);
});

test("unreadable data is set aside once, and the app starts fresh", () => {
  const storage = new MemoryStorage();
  storage.setItem(STORAGE_KEY, "{oops");
  const state = createLogStore(storage, () => T0).getState();
  assert.deepEqual(state.attempts, []);
  assert.deepEqual(state.notice, {
    kind: "set-aside",
    keys: [`${STORAGE_KEY}.set-aside.${T0}`],
    reason: "it is not valid JSON",
  });
  assert.equal(storage.getItem(`${STORAGE_KEY}.set-aside.${T0}`), "{oops");

  // Reloading must not set the same data aside again, but keeps showing the notice.
  const reloaded = createLogStore(storage, () => T0 + 1).getState();
  assert.equal(storage.setAsideKeys().length, 1);
  assert.equal(reloaded.notice?.kind, "set-aside");
});

test("a partly damaged log loads its readable answers and sets the original aside", () => {
  const storage = new MemoryStorage();
  const original = logText([attempt(), { ...attempt(), chosen: 9 }, attempt({ at: T0 + 1 })]);
  storage.setItem(STORAGE_KEY, original);
  const state = createLogStore(storage, () => T0).getState();
  assert.equal(state.attempts.length, 2);
  assert.equal(state.notice?.kind === "set-aside" && state.notice.reason, "1 saved answer was damaged");
  assert.equal(storage.getItem(storage.setAsideKeys()[0]), original);
});

test("a log from a newer app version is set aside, not overwritten", () => {
  const storage = new MemoryStorage();
  const newer = logText([attempt()], 7);
  storage.setItem(STORAGE_KEY, newer);
  const state = createLogStore(storage, () => T0).getState();
  assert.match(state.notice?.kind === "set-aside" ? (state.notice.reason ?? "") : "", /newer version/);
  assert.equal(storage.getItem(storage.setAsideKeys()[0]), newer);
});

test("discarding set-aside data deletes the copies and clears the notice", () => {
  const storage = new MemoryStorage();
  storage.setItem(STORAGE_KEY, "{oops");
  const store = createLogStore(storage);
  assert.ok(store.setAsideText().includes("{oops"));
  store.discardSetAside();
  assert.equal(store.getState().notice, null);
  assert.deepEqual(storage.setAsideKeys(), []);
});

test("a failed save raises a notice that clears once saving works again", () => {
  const storage = new MemoryStorage();
  const store = createLogStore(storage);
  storage.failWrites = true;
  store.recordAttempt(attempt());
  assert.deepEqual(store.getState().notice, { kind: "not-saving" });
  assert.equal(store.getState().attempts.length, 1);

  storage.failWrites = false;
  store.recordAttempt(attempt({ at: T0 + 1 }));
  assert.equal(store.getState().notice, null);
  assert.equal(createLogStore(storage).getState().attempts.length, 2);
});

test("data that can be neither read nor set aside is never overwritten", () => {
  const storage = new MemoryStorage();
  storage.setItem(STORAGE_KEY, "{oops");
  storage.failWrites = true;
  const store = createLogStore(storage);
  assert.deepEqual(store.getState().notice, { kind: "not-saving" });

  storage.failWrites = false;
  store.recordAttempt(attempt());
  assert.equal(storage.getItem(STORAGE_KEY), "{oops");
  assert.equal(store.getState().attempts.length, 1);
});

test("import merges into the log and reports duplicates and damage", () => {
  const store = createLogStore(new MemoryStorage());
  const [a, b, c] = [attempt({ at: T0 }), attempt({ at: T0 + 2 }), attempt({ at: T0 + 1 })];
  store.recordAttempt(a);
  store.recordAttempt(b);
  const result = store.importLog(logText([b, c, { ...c, mode: "bad" }]));
  assert.deepEqual(result, { ok: true, added: 1, duplicates: 1, skipped: 1 });
  assert.deepEqual(store.getState().attempts, [a, c, b]);
});

test("import rejects a file that is not a log and leaves the log alone", () => {
  const store = createLogStore(new MemoryStorage());
  store.recordAttempt(attempt());
  assert.deepEqual(store.importLog('{"not":"a log"}'), { ok: false, reason: "it is not an ITP Drill log" });
  assert.equal(store.getState().attempts.length, 1);
});

test("export records the export time and returns the whole log", () => {
  const storage = new MemoryStorage();
  const store = createLogStore(storage, () => T0);
  store.recordAttempt(attempt());
  const { filename, text } = store.exportLog();
  assert.equal(filename, "itp-drill-log-2026-09-10.json");
  const exported = parseLog(text);
  assert.ok(exported.ok);
  assert.equal(exported.log.lastExportAt, T0);
  assert.equal(exported.log.attempts.length, 1);
  assert.equal(createLogStore(storage).getState().lastExportAt, T0);
});

test("two tabs keep each other's answers", () => {
  const storage = new MemoryStorage();
  const tabA = createLogStore(storage);
  const tabB = createLogStore(storage);
  const [a, b, c] = [attempt({ at: T0 }), attempt({ at: T0 + 1 }), attempt({ at: T0 + 2 })];

  // Normal case: the storage event reaches B before B's next answer.
  tabA.recordAttempt(a);
  tabB.syncFromStorage();
  tabB.recordAttempt(b);
  tabA.syncFromStorage();
  assert.deepEqual(tabA.getState().attempts, [a, b]);

  // Race: B writes without having seen A's newest answer; A's sync restores the union.
  tabA.recordAttempt(c);
  tabB.recordAttempt(attempt({ at: T0 + 3 }));
  tabA.syncFromStorage();
  assert.equal(createLogStore(storage).getState().attempts.length, 4);
});

test("with storage blocked, answers are kept in memory and a notice says so", () => {
  const store = createLogStore(null);
  assert.deepEqual(store.getState().notice, { kind: "not-saving" });
  store.recordAttempt(attempt());
  assert.equal(store.getState().attempts.length, 1);
});
