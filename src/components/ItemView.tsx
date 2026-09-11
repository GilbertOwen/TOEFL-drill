import { useEffect, useRef } from "react";
import { PASSAGE_BY_ITEM_ID } from "../data/bank.ts";
import { BLANK, errorSentence } from "../lib/validate.ts";
import type { AnswerIndex, CompletionItem, ErrorItem, Item, Passage, ReadingItem, Segment } from "../types.ts";
import { RichText } from "./RichText.tsx";
import { questionText } from "./ui.ts";

export const LETTERS = ["A", "B", "C", "D"] as const;

/** How one option or segment should look right now. */
type Mark = "idle" | "selected" | "key" | "wrong" | "muted";

type ViewProps<T extends Item> = {
  item: T;
  chosen: AnswerIndex | null;
  /** Show the key and whether `chosen` was right. */
  revealed: boolean;
  /** Omit for a read-only view. */
  onChoose?: (index: AnswerIndex) => void;
};

export function ItemView({ hidePassage = false, ...props }: ViewProps<Item> & { hidePassage?: boolean }) {
  const { item } = props;
  if (item.section === "structure") return <CompletionView {...props} item={item} />;
  if (item.section === "written_expression") return <ErrorView {...props} item={item} />;
  return <ReadingView {...props} item={item} hidePassage={hidePassage} />;
}

/** One line of plain text identifying an item, for lists. */
export function itemPreview(item: Item): string {
  const text =
    item.section === "structure" ? item.stem : item.section === "written_expression" ? errorSentence(item) : item.prompt;
  return text.replace(/\*/g, "");
}

function markFor(index: number, { item, chosen, revealed }: ViewProps<Item>): Mark {
  if (!revealed) return chosen === index ? "selected" : "idle";
  if (index === item.answer) return "key";
  return index === chosen ? "wrong" : "muted";
}

// ---------------------------------------------------------------------------
// Sentence completion

function CompletionView(props: ViewProps<CompletionItem>) {
  const { item, revealed } = props;
  const [before, after = ""] = item.stem.split(BLANK);
  return (
    <div>
      <p className={questionText}>
        <RichText text={before} />
        {revealed ? (
          <span className="rounded bg-green-100 px-1 text-green-950 underline decoration-green-700 decoration-2 underline-offset-4">
            {item.options[item.answer]}
          </span>
        ) : (
          <span role="img" aria-label="blank" className="inline-block w-24 border-b-2 border-stone-800">
            &nbsp;
          </span>
        )}
        <RichText text={after} />
      </p>
      <OptionList {...props} options={item.options} />
    </div>
  );
}

const optionTone: Record<Mark, string> = {
  idle: "border-stone-300 bg-white hover:border-stone-500 hover:bg-stone-50",
  selected: "border-blue-700 bg-blue-50 ring-1 ring-blue-700",
  key: "border-green-700 bg-green-50 ring-1 ring-green-700",
  wrong: "border-red-700 bg-red-50 ring-1 ring-red-700",
  muted: "border-stone-200 bg-white text-stone-500",
};

const badgeTone: Record<Mark, string> = {
  idle: "border border-stone-400 text-stone-700",
  selected: "bg-blue-700 text-white",
  key: "bg-green-700 text-white",
  wrong: "bg-red-700 text-white",
  muted: "border border-stone-300 text-stone-400",
};

function OptionList(props: ViewProps<Item> & { options: readonly string[] }) {
  const { options, chosen, onChoose } = props;
  return (
    <ol className="mt-6 space-y-2.5">
      {options.map((text, i) => {
        const mark = markFor(i, props);
        const note = mark === "key" ? (chosen === i ? "Your answer" : "Answer") : mark === "wrong" ? "Your answer" : null;
        const box = `flex w-full items-center gap-4 rounded-lg border px-4 py-3 text-left ${optionTone[mark]}`;
        const body = (
          <>
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${badgeTone[mark]}`}>
              {LETTERS[i]}
            </span>
            <span className="flex-1 font-serif text-lg leading-snug">
              <RichText text={text} />
            </span>
            {note && (
              <span className={`text-sm font-semibold ${mark === "key" ? "text-green-800" : "text-red-800"}`}>{note}</span>
            )}
          </>
        );
        return (
          <li key={i}>
            {onChoose ? (
              <button
                type="button"
                data-answer-option
                aria-pressed={chosen === i}
                className={box}
                onClick={() => onChoose(i as AnswerIndex)}
              >
                {body}
              </button>
            ) : (
              <div className={box}>{body}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

// ---------------------------------------------------------------------------
// Error identification

const segmentBox: Record<Mark, string> = {
  idle: "hover:bg-stone-200/70",
  selected: "bg-blue-100",
  key: "bg-green-100",
  wrong: "bg-red-100",
  muted: "",
};

const segmentLine: Record<Mark, string> = {
  idle: "decoration-stone-800",
  selected: "decoration-blue-700",
  key: "decoration-green-700",
  wrong: "decoration-red-700",
  muted: "decoration-stone-400",
};

const segmentLetter: Record<Mark, string> = {
  idle: "text-stone-600",
  selected: "text-blue-800",
  key: "text-green-800",
  wrong: "text-red-800",
  muted: "text-stone-400",
};

function ErrorView(props: ViewProps<ErrorItem>) {
  const { item, chosen, onChoose } = props;
  return (
    <p className={`${questionText} leading-[2.7] sm:leading-[2.7]`}>
      {item.segments.map((segment, k) => {
        if (!segment.label) return <RichText key={k} text={segment.text} />;
        const index = LETTERS.indexOf(segment.label) as AnswerIndex;
        return (
          <SegmentMark
            key={k}
            segment={segment}
            mark={markFor(index, props)}
            pressed={chosen === index}
            onClick={onChoose && (() => onChoose(index))}
          />
        );
      })}
    </p>
  );
}

function SegmentMark(props: { segment: Segment; mark: Mark; pressed: boolean; onClick?: () => void }) {
  const { segment, mark, pressed, onClick } = props;
  // min-w-11 keeps one-word segments ("it", "for") at least 44px wide to click.
  const box = `inline-flex min-w-11 flex-col items-center gap-1 rounded px-1 pt-0.5 pb-1 leading-normal ${segmentBox[mark]}`;
  const body = (
    <>
      <span className={`underline decoration-2 underline-offset-[6px] ${segmentLine[mark]}`}>{segment.text}</span>
      <span className={`font-sans text-sm font-bold leading-none ${segmentLetter[mark]}`}>{segment.label}</span>
    </>
  );
  if (!onClick) return <span className={box}>{body}</span>;
  return (
    <button
      type="button"
      data-answer-option
      aria-pressed={pressed}
      aria-label={`${segment.label}: ${segment.text}`}
      className={`${box} cursor-pointer`}
      onClick={onClick}
    >
      {body}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Reading

function ReadingView({ hidePassage, ...props }: ViewProps<ReadingItem> & { hidePassage: boolean }) {
  const { item, revealed } = props;
  const passage = PASSAGE_BY_ITEM_ID.get(item.id);
  const question = (
    <div>
      <p className={questionText}>
        <RichText text={item.prompt} />
      </p>
      <OptionList {...props} options={item.options} />
    </div>
  );
  if (hidePassage || !passage) return question;
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <PassageText passage={passage} item={item} revealed={revealed} />
      {question}
    </div>
  );
}

/** The passage with numbered paragraphs. Highlights the phrase a question quotes and,
 *  once answered, the paragraph holding the evidence. */
export function PassageText(props: { passage: Passage; item?: ReadingItem; revealed?: boolean }) {
  const { passage, item, revealed = false } = props;
  const box = useRef<HTMLElement>(null);

  // Scroll the passage (not the page) so the phrase a question quotes is in view.
  useEffect(() => {
    const article = box.current;
    const mark = article?.querySelector("mark");
    if (!article || !mark || article.scrollHeight <= article.clientHeight) return;
    article.scrollTop = Math.max(0, mark.offsetTop - article.clientHeight / 3);
  }, [item?.id]);

  return (
    <article
      ref={box}
      className="relative max-h-[45dvh] overflow-y-auto rounded-lg border border-stone-200 bg-white px-4 pb-4 pt-3 font-serif text-[1.0625rem] leading-[1.8] lg:sticky lg:top-24 lg:max-h-[calc(100dvh_-_8rem)] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pr-3 lg:pt-0"
    >
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wide text-stone-500">{passage.title}</h2>
      {passage.paragraphs.map((text, k) => {
        const number = k + 1;
        const isAnchor = item?.anchorParagraph === number;
        const phrase = item?.lineHint && (item.anchorParagraph === undefined || isAnchor) ? item.lineHint : undefined;
        const evidence = revealed && isAnchor ? "-mx-3 rounded-md bg-amber-50 px-3 py-2 ring-1 ring-amber-300" : "";
        return (
          <p key={k} className={`mt-4 flex gap-3 ${evidence}`}>
            <span className="w-4 shrink-0 select-none pt-1 text-right font-sans text-xs text-stone-400">
              <span className="sr-only">Paragraph </span>
              {number}
            </span>
            <span>
              <Highlight text={text} phrase={phrase} />
            </span>
          </p>
        );
      })}
    </article>
  );
}

function Highlight({ text, phrase }: { text: string; phrase?: string }) {
  const at = phrase ? text.indexOf(phrase) : -1;
  if (!phrase || at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark className="rounded-sm bg-amber-200 px-0.5 text-stone-900">{phrase}</mark>
      {text.slice(at + phrase.length)}
    </>
  );
}
