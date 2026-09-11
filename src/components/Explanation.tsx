import type { Ref } from "react";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import type { AnswerIndex, CategoryId, Item } from "../types.ts";
import { LETTERS } from "./ItemView.tsx";
import { RichText } from "./RichText.tsx";

type Props = {
  item: Item;
  chosen: AnswerIndex | null;
  /** Show the animated entrance; off in review lists where many render at once. */
  animate?: boolean;
  ref?: Ref<HTMLElement>;
};

export function Explanation({ item, chosen, animate = true, ref }: Props) {
  const key = LETTERS[item.answer];
  const correct = chosen === item.answer;
  const verdict = chosen === null ? `Not answered. The answer is ${key}.` : correct ? "Correct" : `Incorrect. The answer is ${key}.`;
  const e = item.explanation;
  const also: readonly CategoryId[] = item.alsoTests ?? [];
  const others = item.section === "written_expression" ? "Why the other segments are correct" : "Why the other options are wrong";

  return (
    <section
      ref={ref}
      aria-label="Explanation"
      className={`mt-8 scroll-mt-24 overflow-hidden rounded-lg border border-stone-300 bg-white shadow-sm ${animate ? "animate-reveal motion-reduce:animate-none" : ""}`}
    >
      <header className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-3 text-white ${correct ? "bg-green-700" : "bg-red-700"}`}>
        <p className="text-lg font-semibold" role="status">
          {verdict}
        </p>
        <p className="text-sm text-white/90">
          {[item.category, ...also].map((c) => CATEGORY_BY_ID[c].label).join(" · ")}
        </p>
      </header>
      <div className="space-y-5 px-5 py-5 leading-relaxed">
        {!item.verified && (
          <p className="border-l-4 border-amber-500 bg-amber-50 px-3 py-2 text-sm text-amber-950">
            Unverified item: check this explanation against a grammar reference before trusting it.
          </p>
        )}
        <Block title="Rule" text={e.rule} />
        <Block title={`Why ${key}`} text={e.why} />
        <Block title="The trap" text={e.trap} />
        {"corrected" in e && (
          <div>
            <h3 className="text-sm font-semibold text-stone-600">Corrected sentence</h3>
            <p className="mt-1 font-serif text-lg">{e.corrected}</p>
          </div>
        )}
        <div>
          <h3 className="text-sm font-semibold text-stone-600">{others}</h3>
          <ul className="mt-2 space-y-2">
            {e.distractors.map((text, i) =>
              i === item.answer ? null : (
                <li key={i} className="flex gap-3">
                  <span className={`w-4 shrink-0 font-semibold ${i === chosen ? "text-red-700" : ""}`}>{LETTERS[i]}</span>
                  <span>
                    <RichText text={text} />
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-stone-600">{title}</h3>
      <p className="mt-1">
        <RichText text={text} />
      </p>
    </div>
  );
}
