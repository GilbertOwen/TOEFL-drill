import type { CompletionItem } from "../../types.ts";

export const items: CompletionItem[] = [
  {
    id: "st-subj-006",
    section: "structure",
    category: "missing_subject",
    difficulty: 2,
    stem: "Often found in deep ocean trenches, ______ are capable of withstanding immense water pressure and complete darkness.",
    options: [
      "certain species of cephalopods",
      "that certain species of cephalopods",
      "when certain species of cephalopods",
      "certain species of cephalopods they"
    ],
    answer: 0,
    explanation: {
      rule: "Missing Subject. Every English sentence requires a main subject to correspond with the main verb.",
      why: "The sentence begins with a participial phrase ('Often found...'), and the main verb is 'are'. The blank requires a plural noun phrase to act as the subject for 'are'. 'Certain species of cephalopods' fulfills this requirement perfectly.",
      trap: "Distractors often include unnecessary conjunctions or redundant pronouns that create ungrammatical structures.",
      distractors: [
        "",
        "The inclusion of 'that' creates a noun clause, leaving the main verb 'are' without an independent subject.",
        "The subordinating conjunction 'when' turns the main clause into an adverbial clause, making the sentence a fragment.",
        "The addition of the pronoun 'they' creates a double subject error ('species... they'), which is grammatically incorrect."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-verb-006",
    section: "structure",
    category: "missing_verb",
    difficulty: 2,
    stem: "The rings of Saturn, composed primarily of ice particles and rocky debris, ______ dramatically in thickness from a few meters to several kilometers.",
    options: [
      "varying",
      "to vary",
      "vary",
      "they vary"
    ],
    answer: 2,
    explanation: {
      rule: "Missing Verb. Every main clause must contain a finite verb that agrees with its subject.",
      why: "The subject 'The rings' is followed by a modifying appositive phrase. A finite plural verb is needed to complete the main clause. 'Vary' correctly acts as the main verb for 'The rings'.",
      trap: "Non-finite verb forms (participles and infinitives) or redundant pronouns are common traps in missing verb questions.",
      distractors: [
        "The present participle 'varying' cannot function as the main finite verb of a clause without a 'be' verb helper.",
        "The infinitive 'to vary' cannot act as the main verb of a sentence.",
        "",
        "The pronoun 'they' creates a double subject ('rings... they'), which is a structural error."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-conn-006",
    section: "structure",
    category: "clause_connector",
    difficulty: 3,
    stem: "______ the American Industrial Revolution shifted production from hand tools to complex machinery, it fundamentally transformed the economic and social landscape of the nineteenth century.",
    options: [
      "Because of",
      "That",
      "As a result",
      "Because"
    ],
    answer: 3,
    explanation: {
      rule: "Adverbial Clause Connector. A subordinating conjunction is needed to connect a dependent adverbial clause to an independent main clause.",
      why: "The sentence contains two full clauses: 'the American Industrial Revolution shifted...' and 'it fundamentally transformed...'. The blank requires a subordinating conjunction to establish a cause-and-effect relationship between them, making 'Because' the correct choice.",
      trap: "Prepositions and conjunctive adverbs are frequently used as traps because they convey similar meanings but require different grammatical structures.",
      distractors: [
        "'Because of' is a preposition and must be followed by a noun phrase, not a full subject-verb clause.",
        "The word 'That' introduces a noun clause, which does not logically or grammatically fit as an adverbial modifier here.",
        "'As a result' is a transition phrase (conjunctive adverb), not a subordinating conjunction, and cannot join two clauses in this manner.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-rel-006",
    section: "structure",
    category: "relative_clause",
    difficulty: 2,
    stem: "The Renaissance was an era ______ witnessed an unprecedented revival of classical learning, literature, and artistic achievement across Europe.",
    options: [
      "when",
      "that",
      "in which",
      "where"
    ],
    answer: 1,
    explanation: {
      rule: "Relative Clause Pronouns. A relative pronoun functioning as a subject must be used to introduce an adjective clause modifying a noun.",
      why: "The blank is immediately followed by the verb 'witnessed'. The relative pronoun 'that' correctly serves as the subject of the relative clause modifying 'era'.",
      trap: "Relative adverbs ('when', 'where') or prepositional structures ('in which') are tempting when modifying a time or place, but they cannot act as the subject of the relative clause.",
      distractors: [
        "The relative adverb 'when' modifies time but cannot act as the subject of the verb 'witnessed'.",
        "",
        "The phrase 'in which' functions adverbially and cannot serve as the subject for the verb 'witnessed'.",
        "The relative adverb 'where' is used for places and cannot act as the subject of the clause."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-ncl-006",
    section: "structure",
    category: "noun_clause",
    difficulty: 3,
    stem: "______ continues to puzzle neurologists despite decades of intensive research into the mechanisms of the human brain.",
    options: [
      "Why do we dream",
      "That we dream why",
      "Why we dream",
      "Because we dream"
    ],
    answer: 2,
    explanation: {
      rule: "Noun Clauses. A noun clause can function as the subject of a sentence and must use standard affirmative word order (connector + subject + verb).",
      why: "The sentence requires a subject for the main verb 'continues'. The noun clause 'Why we dream' properly functions as the subject and uses the correct word order.",
      trap: "Question word order (inverted syntax) is a common distractor in noun clause questions.",
      distractors: [
        "This option uses interrogative word order ('do we'), which is incorrect for a noun clause embedded as a subject.",
        "This combines two connectors inappropriately and jumbles the syntax.",
        "",
        "An adverbial clause starting with 'Because' cannot serve as the grammatical subject of the main verb 'continues'."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-rdc-006",
    section: "structure",
    category: "reduced_clause",
    difficulty: 3,
    stem: "______ under extreme heat and pressure over millions of years, limestone gradually transforms into the harder, more durable metamorphic rock known as marble.",
    options: [
      "When subjects",
      "Subjecting",
      "It is subjected",
      "When subjected"
    ],
    answer: 3,
    explanation: {
      rule: "Reduced Adverbial Clauses. When the subject of a dependent clause matches the subject of the main clause, the dependent clause can be reduced to a participle.",
      why: "The full clause would be 'When it is subjected...'. Because the implied subject is 'limestone', it can be reduced to the past participle 'When subjected', showing a passive relationship.",
      trap: "Active participles or full clauses missing a conjunction are common traps in reduced clause questions.",
      distractors: [
        "The active present tense 'When subjects' incorrectly uses a finite active verb instead of a passive participle.",
        "The active participle 'Subjecting' implies that the limestone itself is applying the heat and pressure, which is logically incorrect.",
        "Using a full clause ('It is subjected') without a subordinating conjunction creates a run-on sentence (comma splice).",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-app-006",
    section: "structure",
    category: "appositive",
    difficulty: 2,
    stem: "Herman Melville, ______, initially experienced commercial failure before his works gained widespread critical acclaim in the early twentieth century.",
    options: [
      "who authoring Moby-Dick",
      "he authored Moby-Dick",
      "the author of Moby-Dick",
      "author of Moby-Dick was"
    ],
    answer: 2,
    explanation: {
      rule: "Appositives. An appositive is a noun or noun phrase placed next to another noun to rename or describe it, typically set off by commas.",
      why: "The blank requires a noun phrase to describe 'Herman Melville'. 'The author of Moby-Dick' perfectly acts as an appositive noun phrase.",
      trap: "Clauses with verbs or incorrect relative pronoun structures are used to confuse the appositive structure.",
      distractors: [
        "The relative clause is grammatically incorrect; it should be 'who authored', not 'who authoring'.",
        "Inserting an independent clause ('he authored...') between commas creates a structural error.",
        "",
        "The inclusion of the verb 'was' turns the phrase into a predicate, breaking the appositive structure."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-inv-006",
    section: "structure",
    category: "inversion",
    difficulty: 3,
    stem: "Only after a massive volcanic eruption ______ the microscopic ash particles disperse across the global atmosphere and temporarily cool the planet.",
    options: [
      "do",
      "when",
      "that",
      "are"
    ],
    answer: 0,
    explanation: {
      rule: "Inversion with Negative/Restrictive Expressions. When a sentence begins with a restrictive phrase like 'Only after', the subject and auxiliary verb in the main clause must be inverted.",
      why: "The sentence starts with 'Only after a massive volcanic eruption', triggering inversion in the main clause. The plural subject 'particles' and the base verb 'disperse' require the auxiliary 'do'.",
      trap: "Non-inverted word order or incorrect auxiliary verbs tempt students who overlook the restrictive opening phrase.",
      distractors: [
        "",
        "The word 'when' adds a redundant conjunction and fails to invert the subject and verb.",
        "The word 'that' creates a dependent clause structure instead of the necessary inverted main clause.",
        "The 'be' verb 'are' cannot be paired with the base verb 'disperse'."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-inv-007",
    section: "structure",
    category: "inversion",
    difficulty: 3,
    stem: "Seldom ______ such completely preserved dinosaur fossils been discovered outside of the remarkably arid badlands of North America.",
    options: [
      "has",
      "have",
      "are",
      "do"
    ],
    answer: 1,
    explanation: {
      rule: "Inversion with Negative Adverbs. Beginning a sentence with a negative adverb like 'Seldom' requires subject-auxiliary inversion in the main clause.",
      why: "The negative adverb 'Seldom' triggers inversion. The subject is the plural noun phrase 'such completely preserved dinosaur fossils', and the main verb is the present perfect passive 'been discovered'. Therefore, the plural auxiliary 'have' is required.",
      trap: "Singular auxiliary verbs or incompatible verb forms are used to test subject-verb agreement during inversion.",
      distractors: [
        "The singular auxiliary 'has' does not agree with the plural subject 'fossils'.",
        "",
        "The auxiliary 'are' cannot be used with the past participle 'been' in this context.",
        "The auxiliary 'do' cannot be paired with the past participle 'been discovered'."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-par-006",
    section: "structure",
    category: "parallel_structure",
    difficulty: 2,
    stem: "Early urban planners focused on designing efficient transportation networks, establishing public sanitation systems, and ______ accessible parks for growing city populations.",
    options: [
      "to create",
      "created",
      "creating",
      "create"
    ],
    answer: 2,
    explanation: {
      rule: "Parallel Structure. Items in a series or list must be structurally parallel (take the same grammatical form).",
      why: "The sentence lists objects of the preposition 'on'. The first two items are gerund phrases ('designing...', 'establishing...'). To maintain parallel structure, the third item must also be a gerund ('creating...').",
      trap: "Verbs in infinitive, past, or base forms are presented to break the parallelism established by the preceding gerunds.",
      distractors: [
        "The infinitive 'to create' breaks the pattern set by 'designing' and 'establishing'.",
        "The past tense or participle 'created' is not parallel to the preceding gerunds.",
        "",
        "The base verb 'create' violates the parallel gerund structure."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-par-007",
    section: "structure",
    category: "parallel_structure",
    difficulty: 3,
    stem: "The novel was celebrated not only for its intricate narrative structure and vivid character development but also ______ philosophical depth.",
    options: [
      "for its profound",
      "its profound",
      "because of its profound",
      "with profound"
    ],
    answer: 0,
    explanation: {
      rule: "Parallel Structure with Correlative Conjunctions. Elements connected by 'not only... but also' must be grammatically identical in structure.",
      why: "The phrase following 'not only' is a prepositional phrase starting with 'for' ('for its intricate narrative structure'). Therefore, the phrase following 'but also' must also begin with 'for' to maintain absolute parallelism.",
      trap: "Omitting the preposition or using an asymmetrical prepositional phrase easily fools readers who only focus on meaning.",
      distractors: [
        "",
        "Omitting 'for' disrupts the parallel structure required by the 'not only... but also' pairing.",
        "The phrase 'because of' is not parallel to the preposition 'for' used in the first part of the pair.",
        "The preposition 'with' does not match the preposition 'for' used earlier."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-cmp-006",
    section: "structure",
    category: "comparison_structure",
    difficulty: 2,
    stem: "The financial impact of the recent economic recession was significantly more severe for small local businesses ______ for large multinational corporations.",
    options: [
      "than it did",
      "than was",
      "than",
      "than that of"
    ],
    answer: 2,
    explanation: {
      rule: "Comparison Structure. Comparative sentences using 'more... than' must compare parallel entities without unnecessary repetition.",
      why: "The sentence sets up a comparison between two prepositional phrases: 'for small local businesses' and 'for large multinational corporations'. The word 'than' cleanly and correctly bridges these two parallel phrases.",
      trap: "Adding verbs or redundant pronoun structures complicates the comparison unnecessarily.",
      distractors: [
        "The inclusion of 'it did' adds an unnecessary and incorrect verb structure to the comparison.",
        "The verb 'was' is incorrect because it disrupts the parallel prepositional phrases being compared.",
        "",
        "The phrase 'that of' is used to compare possessed qualities, but here the preposition 'for' already balances the structure."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-sjv-006",
    section: "structure",
    category: "subjunctive",
    difficulty: 3,
    stem: "The international treaty mandates that any nation seeking membership ______ its domestic environmental regulations with the newly established global standards.",
    options: [
      "must align",
      "aligns",
      "aligning",
      "align"
    ],
    answer: 3,
    explanation: {
      rule: "Subjunctive Verbs. Verbs of demanding or mandating (like 'mandate') require the base form of the verb in the following 'that' clause.",
      why: "The verb 'mandates' triggers the subjunctive mood in the 'that' clause. Therefore, the verb must take its base form ('align') regardless of the singular subject 'nation'.",
      trap: "Present tense forms that agree with the singular subject, or redundant modal verbs, are very tempting to students unfamiliar with the subjunctive.",
      distractors: [
        "The modal 'must' is redundant and grammatically incorrect because the obligation is already expressed by 'mandates'.",
        "The singular present tense 'aligns' is incorrect because 'mandates' requires the subjunctive base form.",
        "A participle ('aligning') cannot function as the main verb of the noun clause.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-sjv-007",
    section: "structure",
    category: "subjunctive",
    difficulty: 3,
    stem: "It is absolutely crucial that the surgical site ______ properly sterilized before the medical team begins the delicate cardiovascular procedure.",
    options: [
      "is",
      "be",
      "has been",
      "will be"
    ],
    answer: 1,
    explanation: {
      rule: "Subjunctive Adjectives. Adjectives of urgency or importance (like 'crucial') followed by a 'that' clause require the base form of the verb.",
      why: "The adjective 'crucial' triggers the subjunctive mood. The base form of the 'be' verb is simply 'be', which is correctly used here in a passive structure ('be sterilized').",
      trap: "Standard indicative verb tenses (present, present perfect, future) look normal but violate the subjunctive rule.",
      distractors: [
        "The indicative present tense 'is' is incorrect; the subjunctive requires the base form 'be'.",
        "",
        "The present perfect 'has been' violates the subjunctive mood rule triggered by 'crucial'.",
        "The future tense 'will be' is incorrect in a subjunctive 'that' clause."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-ger-006",
    section: "structure",
    category: "gerund_infinitive",
    difficulty: 2,
    stem: "By ______ crop rotation techniques, early indigenous farmers managed to preserve soil fertility and ensure consistent agricultural yields over many generations.",
    options: [
      "to implement",
      "implement",
      "implemented",
      "implementing"
    ],
    answer: 3,
    explanation: {
      rule: "Gerunds After Prepositions. A verb immediately following a preposition must be in the gerund (-ing) form.",
      why: "The word 'By' is a preposition indicating method. The verb that follows it must be the gerund 'implementing' to function as the object of the preposition.",
      trap: "Base forms, past tense forms, or infinitives are placed after the preposition to test the student's knowledge of prepositional objects.",
      distractors: [
        "An infinitive ('to implement') cannot serve as the object of the preposition 'By'.",
        "A base verb ('implement') cannot act as the object of a preposition.",
        "A past tense or participle ('implemented') cannot follow a preposition in this manner.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-ger-007",
    section: "structure",
    category: "gerund_infinitive",
    difficulty: 3,
    stem: "Many software engineers consistently struggle with ______ sprawling legacy codebases that completely lack adequate documentation and modern architectural frameworks.",
    options: [
      "maintaining",
      "maintain",
      "to maintain",
      "the maintain"
    ],
    answer: 0,
    explanation: {
      rule: "Gerunds After Prepositions. Verbs functioning as the object of a preposition must take the gerund (-ing) form.",
      why: "The phrase 'struggle with' ends in the preposition 'with'. Therefore, the following verb must be a gerund ('maintaining') that can take 'legacy codebases' as its direct object.",
      trap: "Infinitives or base verbs often look correct because they sound like natural continuations of the verb 'struggle', ignoring the preposition.",
      distractors: [
        "",
        "The base verb 'maintain' cannot be the object of the preposition 'with'.",
        "The infinitive 'to maintain' cannot follow the preposition 'with'.",
        "The word 'maintain' is a verb and cannot take the definite article 'the' unless converted to a noun."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-ord-006",
    section: "structure",
    category: "word_order",
    difficulty: 2,
    stem: "The newly synthesized chemical compound exhibits ______ properties when exposed to sudden drops in ambient atmospheric temperature.",
    options: [
      "highly unusual",
      "unusual highly",
      "high unusual",
      "highly unusually"
    ],
    answer: 0,
    explanation: {
      rule: "Word Order of Adverbs and Adjectives. An adverb of degree must directly precede the adjective it modifies, which in turn precedes the noun.",
      why: "The noun is 'properties'. It is modified by the adjective 'unusual', which is modified by the adverb 'highly'. The correct order is Adverb + Adjective + Noun ('highly unusual properties').",
      trap: "Reversed order or incorrect forms (using an adjective to modify an adjective) commonly confuse test-takers.",
      distractors: [
        "",
        "This incorrectly places the adjective 'unusual' before the adverb 'highly'.",
        "The adjective 'high' cannot be used to modify another adjective ('unusual'); an adverb is required.",
        "The adverb 'unusually' cannot directly modify the noun 'properties'; an adjective is needed."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "st-ord-007",
    section: "structure",
    category: "word_order",
    difficulty: 3,
    stem: "Quantum entanglement involves microscopic particles interacting in ______ that their individual quantum states cannot possibly be described independently.",
    options: [
      "such a complex way",
      "a way such complex",
      "so complex a way as",
      "such complex way"
    ],
    answer: 0,
    explanation: {
      rule: "Word Order with 'Such'. The correct structure for emphasizing a singular countable noun with an adjective is 'such + a/an + adjective + noun + that'.",
      why: "The sentence uses a result clause ('that their individual...'). The correct intensifier phrase for the singular countable noun 'way' is 'such a complex way'.",
      trap: "Misplacing the article or confusing 'such' with 'so' structures are standard traps in intensive result clauses.",
      distractors: [
        "",
        "The word order is entirely scrambled; 'such' must precede the noun phrase it intensifies.",
        "While 'so complex a way' is a valid formal structure, adding 'as' breaks the connection to the 'that' result clause.",
        "Because 'way' is a singular countable noun, the article 'a' is absolutely required before the adjective."
      ]
    },
    verified: true,
    addedOn: "2026-09-11"
  }
];
