import { useEffect, useRef, useState } from "react";
import { CATEGORY_BY_ID } from "../data/categories.ts";
import { secondsSince, useSessionKeys } from "../lib/keys.ts";
import { logStore } from "../lib/store.ts";
import type { AnswerIndex, Item } from "../types.ts";
import { Explanation } from "./Explanation.tsx";
import { ItemView, itemPreview } from "./ItemView.tsx";
import { KeyHints, SessionHeader } from "./SessionHeader.tsx";
import { buttonPrimary } from "./ui.ts";

type Props = { mode: "drill" | "review"; title: string; items: readonly Item[]; onExit: () => void };

/** Drill and review: answer, see the explanation at once, move on. Untimed. */
export function PracticeSession({ mode, title, items, onExit }: Props) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<AnswerIndex | null>(null);
  const [missed, setMissed] = useState<Item[]>([]);
  const shownAt = useRef(0);
  const explanation = useRef<HTMLElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const item: Item | undefined = items[index];

  useEffect(() => {
    shownAt.current = performance.now();
    window.scrollTo({ top: 0 });
  }, [index]);

  useEffect(() => {
    if (chosen === null) return;
    nextButton.current?.focus({ preventScroll: true });
    // Bring the verdict into view, keeping the question above it where possible.
    const top = explanation.current?.getBoundingClientRect().top ?? 0;
    if (top > window.innerHeight - 180) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollBy({ top: top - window.innerHeight * 0.3, behavior: smooth ? "smooth" : "auto" });
    }
  }, [chosen]);

  function choose(choice: AnswerIndex) {
    if (!item || chosen !== null) return;
    const correct = choice === item.answer;
    logStore.recordAttempt({
      itemId: item.id,
      category: item.category,
      chosen: choice,
      correct,
      seconds: secondsSince(shownAt.current),
      at: Date.now(),
      mode,
    });
    setChosen(choice);
    if (!correct) setMissed((list) => [...list, item]);
  }

  function next() {
    if (chosen === null) return;
    setChosen(null);
    setIndex((n) => n + 1);
  }

  useSessionKeys((command) => {
    if (command.type === "exit") onExit();
    else if (!item) {
      if (command.type === "next") onExit();
    } else if (command.type === "choose") choose(command.index);
    else if (command.type === "next") next();
  });

  if (!item) return <Summary title={title} total={items.length} missed={missed} onExit={onExit} />;

  const width = item.section === "reading" ? "max-w-6xl" : "max-w-3xl";
  return (
    <>
      <SessionHeader title={title} progress={`${index + 1} of ${items.length}`} onExit={onExit} />
      <main className={`mx-auto px-4 pt-8 pb-32 sm:px-6 ${width}`}>
        {!item.verified && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">Unverified item</p>
        )}
        <ItemView item={item} chosen={chosen} revealed={chosen !== null} onChoose={chosen === null ? choose : undefined} />
        {chosen === null ? <KeyHints /> : <Explanation ref={explanation} item={item} chosen={chosen} />}
      </main>
      {chosen !== null && (
        <div className="fixed inset-x-0 bottom-0 border-t border-stone-200 bg-stone-50/95 backdrop-blur">
          <div className={`mx-auto flex justify-end px-4 py-3 sm:px-6 ${width}`}>
            <button ref={nextButton} type="button" data-session-next className={buttonPrimary} onClick={next}>
              {index + 1 < items.length ? "Next" : "Finish"} <kbd>Enter</kbd>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Summary(props: { title: string; total: number; missed: readonly Item[]; onExit: () => void }) {
  const { title, total, missed, onExit } = props;
  return (
    <>
      <SessionHeader title={title} onExit={onExit} />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold">
          {total - missed.length} of {total} correct
        </h1>
        <p className="mt-3 text-stone-700">
          {missed.length === 0
            ? "Nothing missed this time."
            : `The ${missed.length === 1 ? "item" : `${missed.length} items`} you missed ${missed.length === 1 ? "is" : "are"} in the review queue, due tomorrow.`}
        </p>
        {missed.length > 0 && (
          <ul className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
            {missed.map((item) => (
              <li key={item.id} className="py-3">
                <p className="text-sm font-semibold text-stone-600">{CATEGORY_BY_ID[item.category].label}</p>
                <p className="mt-0.5 truncate font-serif">{itemPreview(item)}</p>
              </li>
            ))}
          </ul>
        )}
        <button type="button" autoFocus data-session-next className={`${buttonPrimary} mt-10`} onClick={onExit}>
          Back to dashboard <kbd>Enter</kbd>
        </button>
      </main>
    </>
  );
}
