import { useMemo } from "react";
import { DRILLABLE, PASSAGES, countItems } from "../data/bank.ts";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import { daysAheadLabel, formatClock, localDayNumber, percent } from "../lib/format.ts";
import { drillPlan, readingPlan, reviewPlan, section2Plan, type SessionPlan } from "../lib/plans.ts";
import { nextDueDay, reviewSchedule } from "../lib/review.ts";
import { SECTION2_STRUCTURE, SECTION2_WRITTEN } from "../lib/select.ts";
import {
  MIN_ATTEMPTS,
  SLOW_SECONDS,
  slowCategories,
  statsByCategory,
  weakCategories,
  weakestCategories,
  type CategoryStats,
} from "../lib/stats.ts";
import { useLog } from "../lib/store.ts";
import type { Section } from "../types.ts";
import { DataControls } from "./DataControls.tsx";
import { buttonPrimary, buttonSecondary, sectionHeading } from "./ui.ts";

type Props = { onStart: (plan: SessionPlan) => void; onChoose: () => void };

/** The landing screen. It answers one question: what should I drill right now? */
export function Dashboard({ onStart, onChoose }: Props) {
  const { attempts } = useLog();
  const stats = useMemo(() => statsByCategory(attempts), [attempts]);
  const schedule = useMemo(() => reviewSchedule(attempts), [attempts]);
  // Plans are fixed per log state, so the counts shown match the session started.
  const review = useMemo(() => reviewPlan(attempts), [attempts]);
  const section2 = useMemo(() => section2Plan(attempts), [attempts]);
  const reading = useMemo(() => readingPlan(attempts), [attempts]);

  const weakest = weakestCategories(stats, DRILLABLE);
  const weak = weakCategories(stats.values());
  const slow = slowCategories(stats.values());
  const today = localDayNumber(Date.now());
  const nextDue = nextDueDay(schedule, today);
  const nextDueCount = [...schedule.values()].filter((e) => e.dueDay === nextDue).length;

  return (
    <div className="space-y-14">
      <section aria-labelledby="now-heading">
        <h1 id="now-heading" className="text-3xl font-semibold tracking-tight">
          What to drill now
        </h1>
        {weakest.length === 0 ? (
          <p className="mt-3 text-stone-700">The item bank is empty. Add items in src/data/items/.</p>
        ) : (
          <>
            <p className="mt-2 text-stone-700">
              Weak categories first, then ones you have missed items in, then ones you have not tried.
            </p>
            <ul className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
              {weakest.map((c) => (
                <li key={c} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="font-medium">{CATEGORY_BY_ID[c].label}</span>
                  <span className="text-right text-sm text-stone-600">{standing(stats.get(c))}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                autoFocus
                className={buttonPrimary}
                onClick={() => onStart(drillPlan(weakest, attempts, "weakest set"))}
              >
                Drill this set <kbd>Enter</kbd>
              </button>
              <button type="button" className={buttonSecondary} onClick={onChoose}>
                Choose categories
              </button>
            </div>
          </>
        )}
      </section>

      <section aria-labelledby="review-heading">
        <h2 id="review-heading" className={sectionHeading}>
          Review queue
        </h2>
        {review.items.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg">
              {review.items.length} missed {review.items.length === 1 ? "item is" : "items are"} due today
            </p>
            <button type="button" className={buttonSecondary} onClick={() => onStart(review)}>
              Start review
            </button>
          </div>
        ) : (
          <p className="mt-3 text-stone-700">
            Nothing due today.{" "}
            {nextDue === null
              ? "Items you miss come back here the next day, then after 3 and 7 more days."
              : `${nextDueCount} ${nextDueCount === 1 ? "item comes" : "items come"} back ${daysAheadLabel(nextDue - today)}.`}
          </p>
        )}
      </section>

      <section aria-labelledby="weak-heading">
        <h2 id="weak-heading" className={sectionHeading}>
          Weakest by accuracy
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          Below 80% on the last 10 answers. A category is ranked once it has {MIN_ATTEMPTS} answers.
        </p>
        {weak.length === 0 ? (
          <p className="mt-3 text-stone-700">None yet.</p>
        ) : (
          <StatsList
            rows={weak}
            detail={(s) => `${percent(s.recentAccuracy)} last 10 · ${percent(s.accuracy)} overall · ${s.attempts} answers`}
          />
        )}
      </section>

      <section aria-labelledby="slow-heading">
        <h2 id="slow-heading" className={sectionHeading}>
          Slow but correct
        </h2>
        <p className="mt-1 text-sm text-stone-600">
          Accurate, but slower than the test allows: a median over {SLOW_SECONDS.structure} s per Section 2 item or{" "}
          {SLOW_SECONDS.reading} s per reading question. Speed comes from timed practice, not untimed drills.
        </p>
        {slow.length === 0 ? (
          <p className="mt-3 text-stone-700">None yet.</p>
        ) : (
          <StatsList
            rows={slow}
            detail={(s) =>
              `${Math.round(s.medianSeconds)} s median (limit ${SLOW_SECONDS[CATEGORY_BY_ID[s.category].group]} s) · ${percent(s.recentAccuracy)} last 10`
            }
          />
        )}
      </section>

      <section aria-labelledby="timed-heading">
        <h2 id="timed-heading" className={sectionHeading}>
          Timed practice
        </h2>
        <div className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
          <TimedRow
            name="Section 2"
            detail={
              section2.items.length === 0
                ? "No Section 2 items yet"
                : `${section2.items.length} items in ${formatClock(section2.seconds * 1000)}` +
                  (section2.items.length < SECTION2_STRUCTURE + SECTION2_WRITTEN
                    ? ` · the bank is too small for a full 40-item section`
                    : "")
            }
            onStart={section2.items.length > 0 ? () => onStart(section2) : undefined}
          />
          <TimedRow
            name={reading ? `Reading: ${reading.passageTitle}` : "Reading"}
            detail={
              reading
                ? `One passage, ${reading.items.length} questions in ${formatClock(reading.seconds * 1000)}`
                : "No reading passages yet"
            }
            onStart={reading ? () => onStart(reading) : undefined}
          />
        </div>
      </section>

      <section aria-labelledby="bank-heading">
        <h2 id="bank-heading" className={sectionHeading}>
          Item bank
        </h2>
        <BankCounts />
      </section>

      <DataControls />
    </div>
  );
}

function standing(s: CategoryStats | undefined): string {
  if (!s) return "not tried yet";
  if (s.attempts < MIN_ATTEMPTS) return `${s.correct} of ${s.attempts} right so far`;
  return `${percent(s.recentAccuracy)} on the last ${s.recentAttempts}`;
}

function StatsList({ rows, detail }: { rows: readonly CategoryStats[]; detail: (s: CategoryStats) => string }) {
  return (
    <ul className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
      {rows.map((s) => (
        <li key={s.category} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-2.5">
          <span className="font-medium">{CATEGORY_BY_ID[s.category].label}</span>
          <span className="text-sm text-stone-600">{detail(s)}</span>
        </li>
      ))}
    </ul>
  );
}

function TimedRow({ name, detail, onStart }: { name: string; detail: string; onStart?: () => void }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-3">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-600">{detail}</p>
      </div>
      <button type="button" className={buttonSecondary} onClick={onStart} disabled={!onStart}>
        Start
      </button>
    </div>
  );
}

const SECTIONS: { section: Section; label: string }[] = [
  { section: "structure", label: "Structure" },
  { section: "written_expression", label: "Written Expression" },
  { section: "reading", label: "Reading" },
];

function BankCounts() {
  const verified = countItems({ verified: true });
  return (
    <>
      <dl className="mt-3 flex flex-wrap gap-x-10 gap-y-3">
        {SECTIONS.map(({ section, label }) => (
          <div key={section}>
            <dt className="text-sm text-stone-600">{label}</dt>
            <dd className="text-2xl font-semibold tabular-nums">
              {countItems({ section, verified: true })}
              <span className="ml-1 text-sm font-normal text-stone-500">
                verified of {countItems({ section })}
              </span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm text-stone-600">
        {verified} verified in total, across {PASSAGES.length} reading {PASSAGES.length === 1 ? "passage" : "passages"} and
        Section 2. Grow the bank one category per session with the item-writing prompt.
      </p>
    </>
  );
}
