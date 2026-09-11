import type {
  Category,
  CategoryGroup,
  CategoryId,
  ReadingCategoryId,
  SectionCodes,
  StructureCategoryId,
  WrittenExpressionCategoryId,
} from "../types.ts";

type Entry = Pick<Category, "code" | "label" | "description">;

// Each group is a Record over its id union, so the type checker rejects a
// missing, misspelled, or misplaced category. Key order is display order.

const structure: Record<StructureCategoryId, Entry> = {
  missing_subject: {
    code: "subj",
    label: "Missing subject",
    description:
      "Every clause needs its own subject, and many completion items blank it out, leaving a main verb with nothing in front of it. The subject can be a noun phrase, a pronoun, a gerund, a noun clause, or the placeholder 'there' or 'it'; a noun inside a prepositional phrase ('In the tundra...', 'Of the planets...') is the object of the preposition and cannot serve. Reject options that add a subordinator such as 'Because' or 'Although', which turns the clause into a dependent one and leaves the sentence without a main clause.",
  },
  missing_verb: {
    code: "verb",
    label: "Missing verb",
    description:
      "Every clause needs a finite verb, one that carries tense. An -ing form or a to-infinitive cannot be the main verb, so 'The Erie Canal, completed in 1825, ______ freight costs sharply' needs 'reduced', not 'reducing' or 'to reduce'. Long subjects hide the verb slot: strip away the modifiers and check whether the subject has a verb yet, remembering that a participle like 'completed' set off by commas is a modifier, not the main verb.",
  },
  clause_connector: {
    code: "conn",
    label: "Clause connectors",
    description:
      "Two clauses need exactly one connector between them: a coordinator (and, but, or, so, yet), a subordinator (because, although, when, while, once, since), or a semicolon. No connector produces a run-on; two produce a doubled join such as 'Although the soil is thin, but...'. Transition words like 'however', 'therefore', and 'moreover' are adverbs, not connectors, and cannot join two clauses with only a comma.",
  },
  relative_clause: {
    code: "rel",
    label: "Relative clauses",
    description:
      "A relative clause modifies a noun and opens with who, whom, whose, which, that, where, or when. The relative word takes a role inside the clause (subject, object, or possessor), so the clause still needs its own verb: 'The Mississippi, which drains much of the central United States, ...'. Use 'who' for people, 'which' for things, 'whose' for possession, and never 'that' directly after a comma or a preposition.",
  },
  noun_clause: {
    code: "ncl",
    label: "Noun clauses",
    description:
      "A noun clause fills a noun slot (subject, object, or complement) and opens with that, whether, if, or a wh-word such as what, how, or why. Inside it, keep statement order ('how the pyramids were built', not 'how were the pyramids built'), and use 'what' only when the clause is missing a noun of its own; a complete clause takes 'that'. When a noun clause is the subject, the sentence still needs a main verb after it: 'What the survey revealed was...'.",
  },
  reduced_clause: {
    code: "rdc",
    label: "Reduced clauses",
    description:
      "A relative or adverb clause can shrink to a participle phrase: 'the fossils that were found in Montana' becomes 'the fossils found in Montana', and 'a river that flows east' becomes 'a river flowing east'. An -ing participle keeps an active meaning and an -ed participle a passive one, so decide whether the noun performs the action or receives it. A reduced clause has no finite verb, so it can never supply the sentence's main verb.",
  },
  appositive: {
    code: "app",
    label: "Appositives",
    description:
      "An appositive is a noun phrase, usually set off by commas, that renames the noun beside it: 'Emily Dickinson, a reclusive poet from Amherst, ...'. It contains no verb and no connector, so options such as 'was a reclusive poet' or 'who a reclusive poet' cannot fill an appositive slot. An appositive that opens the sentence must rename the subject that comes right after the comma.",
  },
  inversion: {
    code: "inv",
    label: "Inversion",
    description:
      "Subject and verb switch places after a fronted negative or limiting expression (never, rarely, seldom, not only, not until, only after), after a conditional that drops 'if' ('Had the levee held, ...'), and after a fronted place expression. Negatives and conditionals put an auxiliary before the subject ('Seldom do glaciers advance so quickly'), while a place expression before a verb like 'lie' or 'stand' moves the whole verb ('Beneath the ice lies an ocean'). The same expression in its ordinary position takes ordinary order, so check where it sits before choosing an inverted option.",
  },
  parallel_structure: {
    code: "par",
    label: "Parallel structure",
    description:
      "Elements joined by and, but, or, or a correlative pair (both...and, not only...but also) must share one grammatical form: nouns with nouns, gerunds with gerunds, clauses with clauses. The usual break is a single mismatched element at the end of a list, as in 'mapping, surveying, and to record', or a clause paired with a phrase. Check each element against the first one, not just against its neighbor.",
  },
  comparison_structure: {
    code: "cmp",
    label: "Comparison structures",
    description:
      "Comparisons use fixed frames (more/-er ... than, as ... as, the same ... as, different from, the -er ..., the -er ...), and every piece of the chosen frame must be present and matched. The two things compared must be logically comparable: 'the climate of Oregon is wetter than that of Nevada', not 'than Nevada'. Completion items often blank one half of a frame, so identify which frame the sentence has already started before choosing.",
  },
  subjunctive: {
    code: "sjv",
    label: "Subjunctive",
    description:
      "After verbs and adjectives of demand, recommendation, or necessity (insist, recommend, require, suggest, essential, imperative), the that-clause takes the base form of the verb for every subject: 'The engineers recommended that the canal be widened'. Unreal conditions and 'wish' shift the verb back: 'were' for a present unreal situation, 'had' plus a past participle for a past one. The trap is the ordinary agreeing form ('is widened', 'was widened') that looks right by normal subject-verb rules.",
  },
  gerund_infinitive: {
    code: "ger",
    label: "Gerunds and infinitives",
    description:
      "Some verbs take a gerund object (avoid, consider, finish, postpone, risk), others an infinitive (agree, decide, fail, manage, refuse), and a few change meaning with each (stop, remember). Every preposition takes a gerund, including the 'to' in 'devoted to', 'committed to', and 'in addition to', which is the most frequent trap. Purpose is expressed with a to-infinitive ('to measure rainfall'), never 'for to measure' or 'for measure'.",
  },
  word_order: {
    code: "ord",
    label: "Word order",
    description:
      "English fixes the order of many elements: adjectives before nouns, 'enough' after an adjective but before a noun ('warm enough', 'enough water'), frequency adverbs before a main verb but after 'be', and statement order inside embedded questions. Completion items test this by offering the same words in four arrangements, so eliminate options where one element sits in the wrong slot. Fixed frames such as 'so + adjective + that' and 'such + a + adjective + noun + that' are frequent.",
  },
};

const writtenExpression: Record<WrittenExpressionCategoryId, Entry> = {
  subject_verb_agreement: {
    code: "sva",
    label: "Subject-verb agreement",
    description:
      "The verb agrees with its true subject, not with the nearest noun, so an intervening 'of the samples', 'along with its tributaries', or 'as well as the crew' does not change its number. Find the subject first when it is delayed (after 'there' or a fronted place phrase) or buried in a quantifier: 'the number of' takes a singular verb, 'a number of' a plural one. Gerund phrases and noun clauses used as subjects take singular verbs.",
  },
  verb_tense: {
    code: "tns",
    label: "Verb tense",
    description:
      "Tense must fit the time markers in the sentence: a finished past time ('in 1869', 'two centuries ago') needs the simple past, 'since' or 'for' reaching to the present needs the present perfect, and 'by the time' with a past event needs the past perfect. General truths and scientific facts stay in the simple present. The trap is usually a tense that is well formed but clashes with a time phrase several words away.",
  },
  verb_form: {
    code: "vfm",
    label: "Verb form",
    description:
      "Each auxiliary dictates the form of the verb after it: modals and 'do' take the base form, 'have' takes the past participle, and 'be' takes an -ing form (progressive) or a past participle (passive). Errors look like 'has became', 'did not needed', 'can recorded', or 'was spoke', and irregular participles (begun, grown, risen, drawn) are frequent targets. Check the verb right after every auxiliary in the sentence.",
  },
  passive_voice: {
    code: "pas",
    label: "Passive voice",
    description:
      "Use the passive (a form of 'be' plus a past participle) when the subject receives the action rather than performs it. Errors swap in an -ing form ('were destroying by the earthquake'), drop 'be', or leave an active verb whose subject cannot act; a 'by' phrase naming the agent is a strong clue that the passive is required. Intransitive verbs such as occur, happen, arise, and emerge have no passive, so 'was occurred' is always wrong.",
  },
  pronoun_agreement: {
    code: "pag",
    label: "Pronoun agreement",
    description:
      "A pronoun must match its antecedent in number and gender: 'each of the colonies' takes 'its', a plural noun takes 'they' or 'their', and an institution or company is 'it'. Case matters too: subject forms (he, they) as subjects, object forms (him, them) after verbs and prepositions, and possessive forms (its, their) before nouns. Check every pronoun by finding its antecedent and matching the two explicitly.",
  },
  pronoun_reference: {
    code: "prf",
    label: "Pronoun reference",
    description:
      "A pronoun must point to one specific noun that actually appears in the sentence. Errors include a pronoun whose antecedent is only implied (a 'they' with no plural noun to refer to), a pronoun that could refer to two different nouns, and a reflexive (itself, themselves) with no matching subject. When a pronoun appears, find the exact noun it replaces; if there is none, the pronoun is the error.",
  },
  redundant_pronoun: {
    code: "rpr",
    label: "Redundant pronoun",
    description:
      "A subject or object that has already been named must not be repeated by a pronoun in the same clause, as in 'The tallest peak in the range it rises...' or 'the telescope that astronomers used it'. The error hides after a long subject with modifiers, where the pronoun restarts the sentence, and inside relative clauses, where the relative pronoun already fills the role. Delete the pronoun and check whether the sentence is complete without it.",
  },
  word_form: {
    code: "wfm",
    label: "Word form",
    description:
      "The role a word plays decides its part of speech: a noun after an article, possessive, or preposition; an adjective before a noun or after a linking verb; a verb after a subject or auxiliary. Errors swap in a relative from the same word family ('the discover of gold', 'a significance finding', 'the rapid grow of cities'), so the meaning is right but the suffix is wrong. Person and thing nouns (inventor and invention, economist and economy) are a common variant.",
  },
  article_determiner: {
    code: "art",
    label: "Articles and determiners",
    description:
      "A singular countable noun needs a determiner (a, an, the, this, each, every); 'a' precedes consonant sounds and 'an' vowel sounds ('an hour', 'a unique'), and 'the' marks something specific or already identified. Superlatives, ordinals, and unique references (the first, the largest, the equator) take 'the', while general plural and uncountable nouns usually take none. Determiners must match number: 'this' and 'that' with singular nouns, 'these' and 'those' with plurals.",
  },
  countability_quantifier: {
    code: "cnt",
    label: "Countability and quantifiers",
    description:
      "Quantifiers must match the noun: many, few, a number of, and fewer go with countable plurals; much, little, an amount of, and less go with uncountable nouns. Several nouns are uncountable in English even when their equivalents in other languages are not (equipment, evidence, research, information, knowledge, machinery), so they never take '-s' or 'a'. The error is often the quantifier itself ('less species', 'an amount of settlers') rather than the noun.",
  },
  preposition: {
    code: "prp",
    label: "Prepositions",
    description:
      "Many verbs, adjectives, and nouns take a fixed preposition ('consist of', 'depend on', 'responsible for', 'capable of', 'an increase in'), and the error swaps in a plausible neighbor. Fixed phrases ('in contrast to', 'according to', 'as a result of') and time expressions ('in 1803', 'on May 4') are frequent targets. A preposition can also be wrongly added to a verb that takes a direct object, as in 'discuss about' or 'emphasize on'.",
  },
  correlative_pair: {
    code: "cor",
    label: "Correlative pairs",
    description:
      "Correlative conjunctions come in fixed pairs: both...and, either...or, neither...nor, not only...but also, whether...or. The error mismatches the partner ('both...or', 'neither...or', 'not only...and') or breaks parallelism between the two halves. When 'either...or' or 'neither...nor' joins two subjects, the verb agrees with the nearer one.",
  },
  comparative_superlative: {
    code: "sup",
    label: "Comparatives and superlatives",
    description:
      "Short adjectives take -er and -est and longer ones take more and most, never both ('more larger', 'most brightest'). A comparative pairs with 'than' and compares two things; a superlative takes 'the' and compares three or more, often with 'of' or 'in' ('the largest of Jupiter's moons'). Irregular forms (better, worse, farther, less) and double markers are frequent targets.",
  },
  redundancy: {
    code: "rdn",
    label: "Redundancy",
    description:
      "Formal written English avoids saying the same thing twice: 'return back', 'advance forward', 'new innovations', 'annually each year'. On the test the redundant word is usually an adverb or adjective that repeats the meaning of the verb or noun beside it. If deleting a word loses no meaning, that word is likely the error.",
  },
  singular_plural_noun: {
    code: "plu",
    label: "Singular and plural nouns",
    description:
      "Nouns must match the words that count them: 'many', 'several', 'various', 'a few', numbers above one, and 'one of the' require plurals, while 'each', 'every', 'a', 'another', and 'one' require singulars. Irregular plurals (phenomena, criteria, nuclei, larvae) and nouns used as modifiers ('a five-mile trail', not 'five-miles') are frequent targets. Check every noun that follows a number or quantifier.",
  },
  adjective_adverb: {
    code: "adv",
    label: "Adjective or adverb",
    description:
      "Adjectives modify nouns and follow linking verbs (be, seem, become, remain, appear); adverbs modify verbs, adjectives, other adverbs, and whole clauses. The error usually drops or adds '-ly', as in 'a remarkable preserved skeleton' or 'the population grew rapid'. Also watch -ed and -ing adjective pairs: an 'interesting' finding interests people, while 'interested' researchers feel the interest.",
  },
  dangling_modifier: {
    code: "dng",
    label: "Dangling modifiers",
    description:
      "An introductory participle phrase takes the subject of the main clause as its implied doer. 'Having crossed the Rockies, the Pacific finally came into view' is wrong because the Pacific did not cross anything; the noun right after the comma must be the one that performed the action. On the test this usually appears as the wrong subject after the comma or the wrong participle form at the start.",
  },
};

const reading: Record<ReadingCategoryId, Entry> = {
  main_idea: {
    code: "main",
    label: "Main idea",
    description:
      "Main-idea questions ask what the passage mainly discusses or which title fits it best. The right answer covers the whole passage, so reject options that describe a single paragraph (too narrow) or the entire field (too broad). The first sentence of each paragraph usually gives you enough to decide.",
  },
  stated_detail: {
    code: "det",
    label: "Stated detail",
    description:
      "Detail questions ask about something the passage states directly ('According to the passage, ...'). The answer is usually a paraphrase of one sentence, so find the question's key word in the passage, reread that sentence, and match meaning rather than wording. Options that reuse the passage's words but change the relationship between them are the usual trap.",
  },
  vocabulary_in_context: {
    code: "voc",
    label: "Vocabulary in context",
    description:
      "These items ask which option is closest in meaning to a word as it is used in the passage. The context often calls for a secondary sense ('check' meaning restrain, 'sound' meaning solid), so the word's most common dictionary meaning is a frequent trap. Substitute each option into the sentence and keep the one that preserves its meaning.",
  },
  reference: {
    code: "ref",
    label: "Reference",
    description:
      "Reference questions ask what a word such as 'it', 'they', 'this', 'those', or 'the former' refers to. The antecedent usually comes before the word and matches it in number; the trap is a nearby noun that fits grammatically but not logically. Substitute each option for the word and check that the sentence still makes sense.",
  },
  inference: {
    code: "inf",
    label: "Inference",
    description:
      "Inference questions ('It can be inferred that...', 'The author implies...') ask for something the passage supports but does not state outright. The correct answer is a small, safe step from the text; reject options that go beyond what is written, even if they are true in the real world. Find the sentence the question is built on and confirm that the option follows from it directly.",
  },
  except_not: {
    code: "exc",
    label: "EXCEPT / NOT",
    description:
      "These items ask which option is NOT mentioned or NOT true according to the passage. Three options are stated in the text, often in a single list, and the answer is the one you cannot find or that contradicts the passage. Check each option against the passage in turn instead of relying on memory, and reread the question so habit does not make you pick a true statement.",
  },
  author_purpose: {
    code: "pur",
    label: "Author's purpose",
    description:
      "Purpose questions ask why the author mentions something or includes a paragraph ('The author mentions X in order to...'). The answer names a function (to give an example, to contrast, to support a claim, to introduce a topic), not a restatement of the content. The sentence just before the mention usually states the point the example serves.",
  },
  tone_attitude: {
    code: "ton",
    label: "Tone and attitude",
    description:
      "Tone questions ask about the author's attitude toward the subject: objective, admiring, skeptical, critical. ITP passages are mostly neutral and informative, so extreme options such as 'angry', 'dismissive', or 'enthusiastic' are usually wrong. Evaluative words in the passage ('remarkably', 'unfortunately', 'questionable') are the evidence.",
  },
  organization: {
    code: "org",
    label: "Organization",
    description:
      "Organization questions ask how the passage or a paragraph is structured: chronological sequence, comparison and contrast, cause and effect, classification, or a general claim followed by examples. Signal words such as 'first', 'however', 'as a result', and 'similarly' reveal the pattern. A related form asks what the preceding or following paragraph most likely discussed, which you infer from the passage's first and last sentences.",
  },
  restatement: {
    code: "rst",
    label: "Restatement",
    description:
      "Restatement questions ask which option best expresses the meaning of a sentence from the passage. The correct option keeps every essential idea and the same logical relationships (cause stays cause, contrast stays contrast) even when the wording changes. The trap reverses a relationship, drops a qualifier such as 'some' or 'often', or adds a claim the sentence never made.",
  },
  where_in_passage: {
    code: "loc",
    label: "Where in the passage",
    description:
      "These items ask where in the passage a given point is discussed, with each option pointing to a specific part of the text. Treat them as detail questions in reverse: take the idea from the question, check each location, and choose the one that actually states it rather than one that merely shares its vocabulary.",
  },
};

function inGroup<K extends CategoryId>(group: CategoryGroup, entries: Record<K, Entry>): Category[] {
  return (Object.keys(entries) as K[]).map((id) => ({ id, group, ...entries[id] }));
}

/** All categories in display order: Structure, then Written Expression, then Reading. */
export const CATEGORIES: readonly Category[] = [
  ...inGroup("structure", structure),
  ...inGroup("written_expression", writtenExpression),
  ...inGroup("reading", reading),
];

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CategoryId,
  Category
>;

export const GROUPS: readonly { id: CategoryGroup; label: string; subtitle: string }[] = [
  { id: "structure", label: "Structure", subtitle: "Sentence architecture" },
  { id: "written_expression", label: "Written Expression", subtitle: "Surface form and agreement" },
  { id: "reading", label: "Reading", subtitle: "Reading comprehension" },
];

export const SECTION_CODES: SectionCodes = {
  structure: "st",
  written_expression: "we",
  reading: "rd",
};

export function categoriesInGroup(group: CategoryGroup): Category[] {
  return CATEGORIES.filter((c) => c.group === group);
}
