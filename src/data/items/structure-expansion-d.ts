import type { CompletionItem } from "../../types.ts";

export const items: CompletionItem[] = [
  {
    id: "st-subj-009",
    section: "structure",
    category: "missing_subject",
    difficulty: 2,
    stem: "Discovered in the early twentieth century by astronomer Henrietta Swan Leavitt, ______ to determine the distances to remote galaxies accurately.",
    options: [
      "Cepheid variable stars that allowed scientists",
      "Cepheid variable stars allowed scientists",
      "the ability of Cepheid variable stars",
      "by using Cepheid variable stars allowed scientists"
    ],
    answer: 1,
    explanation: {
      rule: "A sentence starting with a participial phrase must be followed by an independent clause with a clear subject and verb.",
      why: "The phrase 'Cepheid variable stars' acts as the main subject being modified by the opening phrase, and 'allowed' provides the required main verb.",
      trap: "Option B provides the clear main subject and verb, avoiding the fragment trap of option A.",
      distractors: [
        "The relative pronoun 'that' makes the clause dependent, leaving the sentence without a main verb.",
        "",
        "While grammatically a noun phrase, 'the ability' does not logically fit the modifier 'Discovered in the early twentieth century by astronomer Henrietta Swan Leavitt'.",
        "The preposition 'by' makes the noun phrase an object of the preposition, leaving the sentence without a main subject."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-verb-009",
    section: "structure",
    category: "missing_verb",
    difficulty: 2,
    stem: "The slow cooling of magma deep beneath the Earth's surface, followed by millions of years of geological uplift and intense erosion, ______ the formation of massive granite domes.",
    options: [
      "often resulting in",
      "which often results in",
      "to result often in",
      "often results in"
    ],
    answer: 3,
    explanation: {
      rule: "Every independent clause must contain a finite main verb.",
      why: "The sentence has a long, complex subject ('The slow cooling...') but lacks a main verb until 'often results in' completes the thought.",
      trap: "Option A is tempting because participles often follow long descriptive subjects, but it leaves the sentence as a fragment.",
      distractors: [
        "The participle 'resulting' cannot function as a main verb on its own.",
        "The relative pronoun 'which' creates an adjective clause, leaving the main clause without a verb.",
        "The infinitive 'to result' cannot serve as the finite main verb of the sentence.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-conn-008",
    section: "structure",
    category: "clause_connector",
    difficulty: 1,
    stem: "______ mammals typically rely on thick fur or blubber to maintain their internal body temperatures in cold environments, some species utilize specialized countercurrent heat exchange systems in their extremities.",
    options: [
      "In spite of",
      "Because",
      "Despite",
      "Although"
    ],
    answer: 3,
    explanation: {
      rule: "A subordinating conjunction of concession is required to introduce a dependent clause that contrasts with the main clause.",
      why: "The sentence contains two contrasting clauses. The conjunction 'Although' properly introduces the dependent concession clause with its own subject and verb.",
      trap: "Options A and C show contrast but are prepositions that require a noun phrase, not a full clause.",
      distractors: [
        "'In spite of' is a preposition requiring a noun or gerund object, not a complete clause.",
        "The conjunction 'Because' indicates cause and effect, which does not logically fit the contrasting relationship between the two clauses.",
        "'Despite' is a preposition and must be followed by a noun phrase, not a full subject and verb.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rel-009",
    section: "structure",
    category: "relative_clause",
    difficulty: 2,
    stem: "During the Harlem Renaissance, Langston Hughes wrote influential poetry ______ the everyday experiences, struggles, and distinct cultural rhythms of working-class African Americans.",
    options: [
      "that it celebrated",
      "it was celebrated",
      "which celebrated",
      "celebrated"
    ],
    answer: 2,
    explanation: {
      rule: "An adjective clause modifies a noun and must be introduced by a relative pronoun acting as the subject or object of the clause.",
      why: "The relative pronoun 'which' correctly introduces the adjective clause modifying 'poetry' and acts as the subject for the verb 'celebrated'.",
      trap: "Option A is tempting because it uses the relative pronoun 'that', but incorrectly includes an extra pronoun 'it'.",
      distractors: [
        "The relative pronoun 'that' functions as the subject of the clause, making the additional pronoun 'it' redundant and grammatically incorrect.",
        "This choice creates a run-on sentence, as two independent clauses are joined without a conjunction or appropriate punctuation.",
        "",
        "The past participle 'celebrated' implies a passive voice structure, which cannot logically take a direct object like 'the everyday experiences'."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ncl-008",
    section: "structure",
    category: "noun_clause",
    difficulty: 3,
    stem: "In macroeconomic theory, structural unemployment occurs when there is a fundamental mismatch between ______ and the specialized skills that available workers actually possess.",
    options: [
      "employers need what",
      "the needs of employers are",
      "that employers need",
      "what employers need"
    ],
    answer: 3,
    explanation: {
      rule: "A noun clause can function as the object of a preposition and follows the standard word order of question word + subject + verb.",
      why: "The preposition 'between' requires a noun object. The noun clause 'what employers need' correctly acts as this object.",
      trap: "Option B is tempting as it uses a related noun ('needs'), but it improperly forms an independent clause.",
      distractors: [
        "The word order is incorrect; the question word 'what' must introduce the noun clause rather than appearing at the end.",
        "This forms an independent clause structure without a relative pronoun to make it a valid noun clause acting as an object.",
        "A 'that' noun clause cannot generally serve as the object of a preposition like 'between'.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rdc-009",
    section: "structure",
    category: "reduced_clause",
    difficulty: 3,
    stem: "______ initially as a defensive fortification against nomadic invasions, the Great Wall of China eventually evolved into a complex system of trade regulation and border control.",
    options: [
      "To construct",
      "It was constructed",
      "Constructed",
      "Constructing"
    ],
    answer: 2,
    explanation: {
      rule: "A reduced adverb clause uses a past participle when the meaning is passive and the subject matches the main clause.",
      why: "The past participle 'Constructed' forms a reduced clause (originally 'Because it was constructed...') that logically modifies 'the Great Wall of China'.",
      trap: "Option D is tempting because present participles are common in reduced clauses, but it incorrectly implies active voice.",
      distractors: [
        "The infinitive 'To construct' indicates purpose or intent, which does not logically fit the historical fact described.",
        "This choice creates an independent clause, resulting in a comma splice because it lacks a coordinating conjunction.",
        "",
        "The present participle 'Constructing' incorrectly implies that the Wall itself was actively performing the action."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-app-008",
    section: "structure",
    category: "appositive",
    difficulty: 2,
    stem: "The technique of pointillism, ______, was pioneered by Georges Seurat in the late nineteenth century as a scientific approach to color perception.",
    options: [
      "that a method uses small, distinct dots of color applied in patterns",
      "it is a method using small, distinct dots of color",
      "applied in patterns by a method of small, distinct dots of color",
      "a method using small, distinct dots of color applied in patterns"
    ],
    answer: 3,
    explanation: {
      rule: "An appositive is a noun phrase placed next to another noun to rename or describe it.",
      why: "The noun phrase 'a method...' correctly acts as an appositive renaming 'The technique of pointillism' without improperly adding a verb.",
      trap: "Option B is tempting because it logically explains the technique, but it adds a subject and verb, creating a run-on sentence.",
      distractors: [
        "The use of 'that' creates a relative clause with an awkward and incorrect internal structure for describing the technique.",
        "The inclusion of 'it is' turns the phrase into an independent clause, creating an ungrammatical comma splice.",
        "This choice begins with a past participle rather than a noun phrase, failing to properly rename the subject as an appositive should.",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-app-009",
    section: "structure",
    category: "appositive",
    difficulty: 3,
    stem: "Formed from the skeletal remains of tiny marine organisms, ______, one of the world's most massive biological structures, provides a vital habitat for countless marine species.",
    options: [
      "the Great Barrier Reef is",
      "which is the Great Barrier Reef",
      "the Great Barrier Reef",
      "that the Great Barrier Reef"
    ],
    answer: 2,
    explanation: {
      rule: "An appositive phrase renames a noun, but the main clause still requires its own complete subject.",
      why: "The sentence needs a subject for the main verb 'provides'. 'the Great Barrier Reef' serves as the subject, modified by the surrounding participial and appositive phrases.",
      trap: "Option A is very tempting as it supplies a subject and verb, but the sentence already has the main verb 'provides'.",
      distractors: [
        "Adding the verb 'is' creates an independent clause that conflicts with the actual main verb of the sentence, 'provides'.",
        "Using the relative pronoun 'which' turns the subject into a dependent clause, leaving the sentence without a main subject.",
        "",
        "The word 'that' creates a dependent noun or relative clause, failing to provide the necessary independent subject for the main verb."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-inv-010",
    section: "structure",
    category: "inversion",
    difficulty: 3,
    stem: "Only when ambient temperatures drop significantly below the freezing point ______ to exhibit a state of extreme metabolic depression known as torpor.",
    options: [
      "certain amphibians begin",
      "do certain amphibians begin",
      "that certain amphibians begin",
      "certain amphibians beginning"
    ],
    answer: 1,
    explanation: {
      rule: "When a sentence begins with a restrictive or negative expression like 'Only when', the subject and auxiliary verb in the main clause must be inverted.",
      why: "The sentence starts with 'Only when...', requiring the auxiliary verb 'do' to precede the subject 'certain amphibians'.",
      trap: "Option A is tempting because it uses standard subject-verb order, which is normally correct in English sentences.",
      distractors: [
        "Standard subject-verb word order is incorrect because the sentence begins with the restrictive expression 'Only when', requiring inversion.",
        "",
        "The addition of 'that' creates a subordinate clause, leaving the sentence entirely without an independent main clause.",
        "The participle 'beginning' fails to provide the finite main verb required for the independent clause."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-par-009",
    section: "structure",
    category: "parallel_structure",
    difficulty: 2,
    stem: "Effective monetary policy aims to stabilize national currency values, promote sustainable economic growth, and ______ during periods of unforeseen financial instability.",
    options: [
      "the maintaining of low inflation rates",
      "maintain low inflation rates",
      "to maintain low inflation rates",
      "low inflation rates are maintained"
    ],
    answer: 1,
    explanation: {
      rule: "Items in a series must share the same grammatical form, especially when governed by a single auxiliary or infinitive marker.",
      why: "The sentence lists three verbs governed by the single infinitive 'to': 'stabilize', 'promote', and 'maintain'. They must all be base form verbs.",
      trap: "Option C is tempting because it uses an infinitive 'to maintain', but it breaks the pattern established by the second item 'promote'.",
      distractors: [
        "The noun phrase 'the maintaining of' is not parallel to the base verbs 'stabilize' and 'promote'.",
        "",
        "While an infinitive, adding 'to' breaks the established pattern where the first 'to' applies to all subsequent base verbs in the series.",
        "This choice provides an independent clause, completely violating the parallel structure of the verb list."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-cmp-009",
    section: "structure",
    category: "comparison_structure",
    difficulty: 3,
    stem: "The explosive power of a supervolcano eruption is orders of magnitude greater ______ a typical stratovolcano, often resulting in widespread climactic shifts.",
    options: [
      "than that of",
      "than",
      "compared to",
      "than those of"
    ],
    answer: 0,
    explanation: {
      rule: "Comparisons must be logically parallel; you must compare equivalent things.",
      why: "The sentence compares 'The explosive power' of one volcano to 'the explosive power' of another. The pronoun 'that' correctly replaces the singular noun phrase.",
      trap: "Option B is tempting because 'greater than' is a common phrase, but it creates an illogical comparison between a property (power) and an object (volcano).",
      distractors: [
        "",
        "This choice illogically compares the 'explosive power' directly to the physical 'stratovolcano' itself, rather than its power.",
        "The phrase 'greater compared to' is redundant and grammatically awkward in standard comparative structures.",
        "The plural pronoun 'those' incorrectly refers back to the singular noun 'explosive power'."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-sjv-009",
    section: "structure",
    category: "subjunctive",
    difficulty: 3,
    stem: "During the Cuban Missile Crisis, the United States government demanded that the Soviet Union ______ all offensive ballistic missiles from the island immediately to avoid nuclear conflict.",
    options: [
      "removes",
      "removed",
      "remove",
      "to remove"
    ],
    answer: 2,
    explanation: {
      rule: "Verbs indicating demand, suggestion, or request followed by 'that' require the base form (subjunctive) of the verb in the dependent clause.",
      why: "The verb 'demanded that' requires the subjunctive base form 'remove' for the subject 'the Soviet Union', regardless of tense or number.",
      trap: "Option B is tempting because it matches the past tense of the main verb 'demanded'.",
      distractors: [
        "The third-person singular present tense 'removes' ignores the requirement for the subjunctive base form after 'demanded that'.",
        "The past tense 'removed' is incorrect; verbs of demand require the subjunctive base form in the subordinate clause, not sequence of tenses.",
        "",
        "An infinitive 'to remove' cannot function as the main verb within the 'that' clause."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ger-010",
    section: "structure",
    category: "gerund_infinitive",
    difficulty: 2,
    stem: "Cognitive behavioral therapists often encourage their anxious patients ______ their irrational fears through gradual exposure and systematic desensitization techniques.",
    options: [
      "confronting",
      "to confront",
      "confront",
      "they confront"
    ],
    answer: 1,
    explanation: {
      rule: "Certain verbs, such as 'encourage', 'allow', and 'persuade', are followed by an object and an infinitive (to + verb).",
      why: "The verb 'encourage' takes the pattern 'encourage [object] to [verb]'. Therefore, the infinitive 'to confront' is required.",
      trap: "Option A is tempting because gerunds often follow prepositions or other verbs, but 'encourage' specifically requires the infinitive.",
      distractors: [
        "The gerund 'confronting' is incorrect because the verb 'encourage' must be followed by an infinitive.",
        "",
        "The base form 'confront' is incorrect; the full infinitive with 'to' is required after 'encourage [object]'.",
        "Adding the subject pronoun 'they' creates an ungrammatical clause structure following the direct object 'patients'."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ord-009",
    section: "structure",
    category: "word_order",
    difficulty: 3,
    stem: "At the subatomic level, particles behave in highly unpredictable ways, making ______ to measure both their precise position and momentum simultaneously.",
    options: [
      "it extremely difficult",
      "extremely difficult it",
      "extremely difficult",
      "it is extremely difficult"
    ],
    answer: 0,
    explanation: {
      rule: "When a verb like 'make' takes an infinitive phrase as an object, an anticipatory pronoun 'it' must be used before the adjective complement.",
      why: "The structure 'make + it + adjective + infinitive' requires the object pronoun 'it' to hold the place for the true object 'to measure...'.",
      trap: "Option C is tempting because it jumps directly to the adjective, but it structurally omits the required dummy object.",
      distractors: [
        "",
        "The word order is incorrect; the object pronoun 'it' must precede the adjective complement 'extremely difficult'.",
        "This choice omits the required anticipatory object pronoun 'it' needed to complete the 'make + it + adjective + infinitive' structure.",
        "Adding the verb 'is' creates an independent clause that cannot grammatically follow the participle 'making'."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ord-010",
    section: "structure",
    category: "word_order",
    difficulty: 2,
    stem: "Beyond the orbit of Neptune ______ a massive ring of icy bodies collectively referred to as the Kuiper Belt.",
    options: [
      "lies",
      "does it lie",
      "it lies",
      "lying"
    ],
    answer: 0,
    explanation: {
      rule: "A prepositional phrase of location at the beginning of a sentence can trigger subject-verb inversion.",
      why: "The sentence begins with the locative phrase 'Beyond the orbit of Neptune', allowing the main verb 'lies' to precede the subject 'a massive ring'.",
      trap: "Option C is tempting because it uses standard subject-verb order, but it introduces an unnecessary pronoun that disrupts the sentence.",
      distractors: [
        "",
        "The auxiliary 'does' is used for questions, not for standard locative inversion, and the pronoun 'it' is redundant.",
        "The pronoun 'it' is redundant and prevents the necessary subject-verb inversion triggered by the initial prepositional phrase.",
        "The present participle 'lying' cannot function as the main verb of the sentence."
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  }
];
