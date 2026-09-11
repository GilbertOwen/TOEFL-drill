// Item bank and taxonomy types. Items live in src/data/ as typed modules, so a
// malformed item fails `npm run typecheck` instead of breaking at runtime.

export type Section = "structure" | "written_expression" | "reading";

// ---------------------------------------------------------------------------
// Categories

/** Sentence architecture: what sentence-completion items mostly test. */
export type StructureCategoryId =
  | "missing_subject"
  | "missing_verb"
  | "clause_connector"
  | "relative_clause"
  | "noun_clause"
  | "reduced_clause"
  | "appositive"
  | "inversion"
  | "parallel_structure"
  | "comparison_structure"
  | "subjunctive"
  | "gerund_infinitive"
  | "word_order";

/** Surface form and agreement: what error-identification items mostly test. */
export type WrittenExpressionCategoryId =
  | "subject_verb_agreement"
  | "verb_tense"
  | "verb_form"
  | "passive_voice"
  | "pronoun_agreement"
  | "pronoun_reference"
  | "redundant_pronoun"
  | "word_form"
  | "article_determiner"
  | "countability_quantifier"
  | "preposition"
  | "correlative_pair"
  | "comparative_superlative"
  | "redundancy"
  | "singular_plural_noun"
  | "adjective_adverb"
  | "dangling_modifier";

export type ReadingCategoryId =
  | "main_idea"
  | "stated_detail"
  | "vocabulary_in_context"
  | "reference"
  | "inference"
  | "except_not"
  | "author_purpose"
  | "tone_attitude"
  | "organization"
  | "restatement"
  | "where_in_passage";

/**
 * Either Section 2 item type may test any grammar category: an error-ID item
 * can test parallel_structure, a completion item can test word_form.
 */
export type GrammarCategoryId = StructureCategoryId | WrittenExpressionCategoryId;

export type CategoryId = GrammarCategoryId | ReadingCategoryId;

/** Display groups mirror the sections, but are not a constraint (see GrammarCategoryId). */
export type CategoryGroup = Section;

export type Category = {
  id: CategoryId;
  group: CategoryGroup;
  /** Short code used in item ids: "sva" in "we-sva-001". Unique across all categories. */
  code: string;
  label: string;
  /** Two or three sentences stating the rule; shown on the reference page. */
  description: string;
};

// ---------------------------------------------------------------------------
// Items

/** Item ids are `<section code>-<category code>-<3-digit number>`, e.g. "we-sva-001". */
export type SectionCodes = {
  structure: "st";
  written_expression: "we";
  reading: "rd";
};

/** 1 easy, 3 hard. */
export type Difficulty = 1 | 2 | 3;

/** Option or segment index: 0 = A, 3 = D. */
export type AnswerIndex = 0 | 1 | 2 | 3;

export type Four<T> = [T, T, T, T];

export type Explanation = {
  /** The named grammar rule, one or two sentences. */
  rule: string;
  /** Why the key is right in THIS sentence. */
  why: string;
  /** What makes the common wrong answer tempting to someone who half-knows the rule. */
  trap: string;
  /**
   * One line per option, "" at the key index. Completion and reading items: why
   * that option fails. Error-ID items: why that underlined segment is correct.
   */
  distractors: Four<string>;
};

type ItemBase<S extends Section, C extends CategoryId, E extends Explanation = Explanation> = {
  id: `${SectionCodes[S]}-${string}`;
  section: S;
  /** Primary skill tested. */
  category: C;
  /** Secondary tags, for the error log. */
  alsoTests?: C[];
  difficulty: Difficulty;
  answer: AnswerIndex;
  explanation: E;
  verified: boolean;
  /** ISO date, e.g. "2026-09-10". */
  addedOn: string;
};

/** Sentence completion (Structure). */
export type CompletionItem = ItemBase<"structure", GrammarCategoryId> & {
  /** Marks the blank with "______" (six underscores), exactly once. */
  stem: string;
  options: Four<string>;
};

export type SegmentLabel = "A" | "B" | "C" | "D";

/** Labeled segments are underlined and clickable; unlabeled ones are connecting text. */
export type Segment = { text: string; label?: SegmentLabel };

/** Error identification (Written Expression). */
export type ErrorItem = ItemBase<
  "written_expression",
  GrammarCategoryId,
  Explanation & {
    /** The full sentence with the error fixed. */
    corrected: string;
  }
> & {
  /** Rendered in order. Exactly four segments carry labels, A to D in order. */
  segments: Segment[];
};

export type ReadingItem = ItemBase<"reading", ReadingCategoryId> & {
  prompt: string;
  options: Four<string>;
  /** Paragraph holding the evidence, 1-based to match "in paragraph 2" in prompts. */
  anchorParagraph?: number;
  /** The exact passage phrase the question refers to, so the UI can highlight it. */
  lineHint?: string;
};

export type Item = CompletionItem | ErrorItem | ReadingItem;

export type Passage = {
  id: string;
  title: string;
  topic: string;
  wordCount: number;
  paragraphs: string[];
  items: ReadingItem[];
};

// ---------------------------------------------------------------------------
// Attempt log

export type SessionMode = "drill" | "timed" | "review";

/** One answered item. The log is append-only; stats and the review queue derive from it. */
export type Attempt = {
  itemId: string;
  /** The item's primary category when answered, so history survives bank edits. */
  category: CategoryId;
  chosen: AnswerIndex;
  correct: boolean;
  /** From the item appearing to the answer, rounded to 0.1 s. */
  seconds: number;
  /** Epoch milliseconds. */
  at: number;
  mode: SessionMode;
};
