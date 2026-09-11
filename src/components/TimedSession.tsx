import { useEffect, useEffectEvent, useRef, useState } from "react";
import { PASSAGE_BY_ITEM_ID } from "../data/bank.ts";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import { formatClock } from "../lib/format.ts";
import { useSessionKeys } from "../lib/keys.ts";
import { READING_SECONDS_PER_ITEM, SECTION2_SECONDS_PER_ITEM } from "../lib/select.ts";
import { logStore } from "../lib/store.ts";
import type { AnswerIndex, Attempt, Item } from "../types.ts";
import { Explanation } from "./Explanation.tsx";
import { ItemView, PassageText } from "./ItemView.tsx";
import { KeyHints, SessionHeader } from "./SessionHeader.tsx";
import { buttonPrimary, buttonSecondary } from "./ui.ts";

type Props = { title: string; items: readonly Item[]; seconds: number; onExit: () => void };
type Answer = { choice: AnswerIndex; at: number };

/** A timed section: real pacing and a visible clock; explanations wait until the end. */
export function TimedSession({ title, items, seconds, onExit }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<ReadonlyMap<string, Answer>>(() => new Map());
  const [startedAt] = useState(() => Date.now());
  const [now, setNow] = useState(startedAt);
  const [endedAt, setEndedAt] = useState<number | null>(null);
  // Milliseconds spent on each item, accumulated across visits; recorded, never shown live.
  const spent = useRef(new Map<string, number>());
  const shownAt = useRef(performance.now());
  const ended = useRef(false);
  const item = items[index];
  const deadline = startedAt + seconds * 1000;

  function bankTime() {
    const t = performance.now();
    spent.current.set(item.id, (spent.current.get(item.id) ?? 0) + t - shownAt.current);
    shownAt.current = t;
  }

  function goTo(target: number) {
    if (ended.current || target < 0 || target >= items.length || target === index) return;
    bankTime();
    setIndex(target);
    window.scrollTo({ top: 0 });
  }

  function choose(choice: AnswerIndex) {
    if (ended.current) return;
    setAnswers((prev) => new Map(prev).set(item.id, { choice, at: Date.now() }));
  }

  function finish() {
    if (ended.current) return;
    ended.current = true;
    bankTime();
    const attempts: Attempt[] = items.flatMap((it) => {
      const answer = answers.get(it.id);
      if (!answer) return [];
      const ms = spent.current.get(it.id) ?? 0;
      return [
        {
          itemId: it.id,
          category: it.category,
          chosen: answer.choice,
          correct: answer.choice === it.answer,
          seconds: Math.round(ms / 100) / 10,
          at: answer.at,
          mode: "timed" as const,
        },
      ];
    });
    logStore.recordAttempts(attempts);
    setEndedAt(Math.min(Date.now(), deadline));
    window.scrollTo({ top: 0 });
  }

  function requestFinish() {
    const open = items.length - answers.size;
    const question = `${open} ${open === 1 ? "question is" : "questions are"} unanswered. Finish the section now?`;
    if (open === 0 || window.confirm(question)) finish();
  }

  function requestExit() {
    if (answers.size === 0) {
      if (window.confirm("Leave this section? Nothing has been answered, so nothing will be saved.")) onExit();
    } else if (window.confirm("End the section now? Your answers so far will be scored and saved.")) {
      finish();
    }
  }

  const tick = useEffectEvent(() => {
    const t = Date.now();
    setNow(t);
    if (t >= deadline) finish();
  });

  useEffect(() => {
    if (endedAt !== null) return;
    const timer = window.setInterval(() => tick(), 250);
    return () => window.clearInterval(timer);
  }, [endedAt]);

  useSessionKeys((command) => {
    if (endedAt !== null) {
      if (command.type === "exit") onExit();
      return;
    }
    if (command.type === "choose") choose(command.index);
    else if (command.type === "prev") goTo(index - 1);
    else if (command.type === "next") {
      if (index + 1 < items.length) goTo(index + 1);
      else requestFinish();
    } else requestExit();
  });

  if (endedAt !== null) {
    return (
      <Results
        title={title}
        items={items}
        answers={answers}
        spent={spent.current}
        usedMs={endedAt - startedAt}
        seconds={seconds}
        onExit={onExit}
      />
    );
  }

  const remaining = Math.max(0, deadline - now);
  const chosen = answers.get(item.id)?.choice ?? null;
  const width = item.section === "reading" ? "max-w-6xl" : "max-w-3xl";
  return (
    <>
      <SessionHeader
        title={title}
        progress={`${index + 1} of ${items.length}`}
        clock={
          <p
            role="timer"
            aria-label={`${formatClock(remaining)} left`}
            className={`text-lg font-semibold tabular-nums ${remaining < 60_000 ? "text-red-700" : ""}`}
          >
            {formatClock(remaining)}
          </p>
        }
        onExit={requestExit}
      />
      <main className={`mx-auto px-4 pt-8 pb-16 sm:px-6 ${width}`}>
        {!item.verified && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">Unverified item</p>
        )}
        <ItemView item={item} chosen={chosen} revealed={false} onChoose={choose} />
        <div className="mt-8 flex items-center justify-between gap-3">
          <button type="button" className={buttonSecondary} onClick={() => goTo(index - 1)} disabled={index === 0}>
            Back
          </button>
          <p className="text-sm text-stone-600">
            {answers.size} of {items.length} answered
          </p>
          {index + 1 < items.length ? (
            <button type="button" data-session-next className={buttonPrimary} onClick={() => goTo(index + 1)}>
              Next <kbd>Enter</kbd>
            </button>
          ) : (
            <button type="button" data-session-next className={buttonPrimary} onClick={requestFinish}>
              Finish section
            </button>
          )}
        </div>
        <nav aria-label="Questions" className="mt-8 flex flex-wrap gap-1.5">
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              aria-label={`Question ${i + 1}${answers.has(it.id) ? ", answered" : ""}`}
              aria-current={i === index ? "step" : undefined}
              onClick={() => goTo(i)}
              className={`size-9 rounded text-sm tabular-nums ${
                answers.has(it.id)
                  ? "bg-stone-800 text-white"
                  : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
              } ${i === index ? "ring-2 ring-blue-700 ring-offset-2 ring-offset-stone-50" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </nav>
        <KeyHints timed />
      </main>
    </>
  );
}

type ResultsProps = {
  title: string;
  items: readonly Item[];
  answers: ReadonlyMap<string, Answer>;
  spent: ReadonlyMap<string, number>;
  usedMs: number;
  seconds: number;
  onExit: () => void;
};

function Results({ title, items, answers, spent, usedMs, seconds, onExit }: ResultsProps) {
  const correct = items.filter((it) => answers.get(it.id)?.choice === it.answer).length;
  const passage = items[0]?.section === "reading" ? PASSAGE_BY_ITEM_ID.get(items[0].id) : undefined;
  const pace = passage ? READING_SECONDS_PER_ITEM : SECTION2_SECONDS_PER_ITEM;

  const list = (
    <ol className="space-y-12">
      {items.map((it, i) => {
        const choice = answers.get(it.id)?.choice ?? null;
        const verdict = choice === null ? "Not answered" : choice === it.answer ? "Correct" : "Incorrect";
        const secs = Math.round((spent.get(it.id) ?? 0) / 1000);
        const slow = secs > pace;
        return (
          <li key={it.id} className="border-t border-stone-300 pt-6">
            <p className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
              <span className="font-semibold">Question {i + 1}</span>
              <span className={`font-semibold ${verdict === "Correct" ? "text-green-800" : "text-red-800"}`}>{verdict}</span>
              <span className="text-stone-600">{CATEGORY_BY_ID[it.category].label}</span>
              <span className={slow ? "font-medium text-amber-800" : "text-stone-600"}>
                {secs} s{slow && ` (pace is ${Math.round(pace)} s)`}
              </span>
            </p>
            <ItemView item={it} chosen={choice} revealed hidePassage />
            {verdict === "Correct" ? (
              <details className="mt-4">
                <summary className="cursor-pointer font-medium text-stone-700">Show explanation</summary>
                <Explanation item={it} chosen={choice} animate={false} />
              </details>
            ) : (
              <Explanation item={it} chosen={choice} animate={false} />
            )}
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <SessionHeader title={`${title}: results`} onExit={onExit} />
      <main className={`mx-auto px-4 py-10 sm:px-6 ${passage ? "max-w-6xl" : "max-w-3xl"}`}>
        <h1 className="text-3xl font-semibold">
          {correct} of {items.length} correct
        </h1>
        <p className="mt-2 text-stone-700">
          {answers.size} answered · {formatClock(usedMs)} used of {formatClock(seconds * 1000)}. Answers are
          saved to your log, and missed items join the review queue.
        </p>
        <button type="button" autoFocus className={`${buttonPrimary} mt-6`} onClick={onExit}>
          Back to dashboard
        </button>
        <div className="mt-12">
          {passage ? (
            <div className="grid gap-10 lg:grid-cols-2">
              <PassageText passage={passage} />
              {list}
            </div>
          ) : (
            list
          )}
        </div>
      </main>
    </>
  );
}
