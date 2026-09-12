import type { CompletionItem } from "../../types.ts";

export const items: CompletionItem[] = [
  {
    id: "st-subj-007",
    section: "structure",
    category: "missing_subject",
    difficulty: 3,
    stem: "Characterized by an unusually high concentration of iridium, ______ provided the first compelling evidence for a massive asteroid impact at the end of the Cretaceous period.",
    options: [
      "it was the geological layer known as the K-T boundary",
      "the geological layer known as the K-T boundary",
      "the geological layer known as the K-T boundary which",
      "that the geological layer known as the K-T boundary"
    ],
    answer: 1,
    explanation: {
      rule: "Every clause needs its own subject.",
      why: "The sentence begins with a participle phrase modifying the subject. The main verb 'provided' requires a subject noun phrase.",
      trap: "Options with extra verbs or subordinator words create run-on sentences or dependent clauses lacking a main verb.",
      distractors: [
        "adds an extra verb that creates a run-on sentence",
        "",
        "turns the main clause into a dependent relative clause",
        "turns the subject into a noun clause that lacks a main verb"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-subj-008",
    section: "structure",
    category: "missing_subject",
    difficulty: 2,
    stem: "Because traditional barter economies rely on the double coincidence of wants, ______ operating without a standardized currency face inherent limitations in facilitating complex trade.",
    options: [
      "they are markets",
      "for markets",
      "markets",
      "markets that"
    ],
    answer: 2,
    explanation: {
      rule: "Every clause needs its own subject.",
      why: "The dependent clause ends at the comma, so the main clause needs a subject for the verb 'face'.",
      trap: "Option A looks like a complete clause but clashes with the main verb 'face', while D creates a relative clause fragment.",
      distractors: [
        "adds a subject and verb, clashing with the main verb 'face'",
        "turns the subject into a prepositional phrase",
        "",
        "adds a relative pronoun that leaves the main clause without a verb"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-verb-007",
    section: "structure",
    category: "missing_verb",
    difficulty: 2,
    stem: "During the late nineteenth century, the rapid expansion of the railroad network across the American West ______ regional isolation and unified the national market.",
    options: [
      "to substantially reduce",
      "which substantially reduced",
      "reducing substantially",
      "substantially reduced"
    ],
    answer: 3,
    explanation: {
      rule: "Every clause needs a finite verb.",
      why: "The subject 'the rapid expansion' needs a main verb. 'reduced' is a finite verb that parallels 'unified'.",
      trap: "Participles and infinitives cannot serve as the main verb of a sentence.",
      distractors: [
        "uses an infinitive, which cannot act as a main verb",
        "creates a relative clause fragment",
        "uses a participle, which cannot serve as the main verb",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-verb-008",
    section: "structure",
    category: "missing_verb",
    difficulty: 2,
    stem: "Many species of deep-sea anglerfish, uniquely adapted to survive in environments completely devoid of sunlight, ______ bioluminescent lures to attract unsuspecting prey.",
    options: [
      "utilize",
      "utilizing",
      "they utilize",
      "are utilized"
    ],
    answer: 0,
    explanation: {
      rule: "Every clause needs a finite verb.",
      why: "The subject 'Many species of deep-sea anglerfish' is followed by a modifier. The main clause requires a finite active verb.",
      trap: "The passive voice or an -ing form often looks grammatically viable but logically or structurally fails.",
      distractors: [
        "",
        "uses an -ing participle, which cannot act as a finite verb",
        "inserts a redundant pronoun after the subject",
        "uses a passive verb form, which cannot take the direct object 'lures'"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-conn-007",
    section: "structure",
    category: "clause_connector",
    difficulty: 2,
    stem: "______ Herman Melville’s novel Moby-Dick was largely ignored by critics during his lifetime, it is now celebrated as one of the preeminent masterpieces of American literature.",
    options: [
      "However",
      "Although",
      "Despite",
      "As a result"
    ],
    answer: 1,
    explanation: {
      rule: "Two clauses need exactly one connector between them.",
      why: "The sentence contains two full clauses. A subordinator like 'Although' is required to join them.",
      trap: "Transition adverbs like 'However' or prepositions like 'Despite' cannot join two independent clauses without a semicolon.",
      distractors: [
        "is an adverb, not a conjunction, and cannot join two clauses",
        "",
        "is a preposition requiring a noun phrase, not a full clause",
        "is an adverbial transition that cannot connect two clauses directly"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rel-007",
    section: "structure",
    category: "relative_clause",
    difficulty: 3,
    stem: "The Hudson River School was a mid-nineteenth-century American art movement embodied by a group of landscape painters ______ aesthetic vision was heavily influenced by romanticism.",
    options: [
      "of which",
      "their",
      "whose",
      "who their"
    ],
    answer: 2,
    explanation: {
      rule: "A relative clause modifies a noun and requires a relative pronoun.",
      why: "The relative pronoun 'whose' indicates possession, linking 'painters' to their 'aesthetic vision'.",
      trap: "A simple possessive pronoun like 'their' creates a run-on sentence because it lacks a subordinating conjunction.",
      distractors: [
        "fails to express possession for people",
        "uses a simple possessive pronoun, creating a run-on sentence",
        "",
        "combines a relative pronoun and a possessive pronoun incorrectly"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rel-008",
    section: "structure",
    category: "relative_clause",
    difficulty: 2,
    stem: "Subduction zones are convergent plate boundaries ______ oceanic crust is continuously forced downward into the Earth's mantle, ultimately triggering volcanic activity.",
    options: [
      "which",
      "they are where",
      "in where",
      "where"
    ],
    answer: 3,
    explanation: {
      rule: "A relative clause modifies a noun and requires an appropriate relative word.",
      why: "The relative adverb 'where' refers to the location (subduction zones) and correctly links the modifying clause.",
      trap: "'which' requires a preposition (like 'in which') to correctly reference a physical location in this context.",
      distractors: [
        "requires a preposition such as 'in' to indicate location",
        "adds an independent subject and verb, creating a run-on",
        "incorrectly pairs a preposition with the relative adverb 'where'",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ncl-007",
    section: "structure",
    category: "noun_clause",
    difficulty: 2,
    stem: "Neurologists studying the mechanisms of memory consolidation have not yet fully determined ______ to retain information over a lifetime while discarding trivial details.",
    options: [
      "how the human brain manages",
      "how does the human brain manage",
      "the human brain manages how",
      "how manages the human brain"
    ],
    answer: 0,
    explanation: {
      rule: "A noun clause maintains statement word order even when it begins with a question word.",
      why: "The noun clause acts as the object of 'determined' and uses standard subject-verb order.",
      trap: "Test-takers often choose inverted word order thinking embedded questions behave like direct questions.",
      distractors: [
        "",
        "uses the inverted word order of a direct question",
        "places the question word incorrectly at the end of the clause",
        "inverts the subject and verb incorrectly"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rdc-007",
    section: "structure",
    category: "reduced_clause",
    difficulty: 3,
    stem: "______ from a vantage point outside the Milky Way, our galaxy would appear as a brilliant, tightly wound spiral structure with a prominent central bulge.",
    options: [
      "Viewing",
      "Viewed",
      "It is viewed",
      "When viewing"
    ],
    answer: 1,
    explanation: {
      rule: "A reduced adverb clause uses an -ed participle for a passive meaning.",
      why: "The past participle 'Viewed' gives a passive meaning, correctly implying that the galaxy is being viewed.",
      trap: "An active participle implies the subject itself is performing the action, which is logically flawed here.",
      distractors: [
        "uses an active participle, illogically implying the galaxy is looking at something",
        "",
        "includes a subject and verb, creating a run-on sentence without a connector",
        "uses an active participle that fails to match the passive meaning required"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-rdc-008",
    section: "structure",
    category: "reduced_clause",
    difficulty: 2,
    stem: "______ exclusively from natural resources found in the immediate environment, the traditional dwellings of the Pueblo peoples demonstrated remarkable architectural ingenuity.",
    options: [
      "Constructing",
      "They were constructed",
      "Constructed",
      "To construct"
    ],
    answer: 2,
    explanation: {
      rule: "A reduced clause uses an -ed participle for a passive meaning.",
      why: "The past participle 'Constructed' modifies 'the traditional dwellings,' indicating that they were built.",
      trap: "Adding a subject and verb like 'They were' seems to form a complete clause but creates a run-on sentence.",
      distractors: [
        "uses an active participle, illogically implying the dwellings built something",
        "creates a run-on sentence by introducing an independent clause without a connector",
        "",
        "uses an infinitive of purpose which does not fit the descriptive context"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-app-007",
    section: "structure",
    category: "appositive",
    difficulty: 2,
    stem: "______ associated with the Harlem Renaissance, Langston Hughes composed poetry that vividly captured the everyday experiences and enduring struggles of working-class Black Americans.",
    options: [
      "He was a leading figure",
      "That a leading figure",
      "As a leading figure was",
      "A leading figure"
    ],
    answer: 3,
    explanation: {
      rule: "An appositive is a noun phrase that renames the adjacent noun without using a verb.",
      why: "'A leading figure associated with the Harlem Renaissance' is a noun phrase that properly renames 'Langston Hughes'.",
      trap: "Options that add a subject and a verb disrupt the sentence architecture and create a run-on.",
      distractors: [
        "includes a subject and verb, creating a run-on sentence",
        "adds a noun clause marker that does not function as an appositive",
        "adds an unnecessary verb that disrupts the sentence structure",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-inv-008",
    section: "structure",
    category: "inversion",
    difficulty: 3,
    stem: "Only when the immense pressure of tectonic forces exceeds the structural integrity of the surrounding rock ______ along a fault line.",
    options: [
      "does an earthquake occur",
      "an earthquake occurs",
      "an earthquake does occur",
      "occurs an earthquake"
    ],
    answer: 0,
    explanation: {
      rule: "Subject and verb switch places after a fronted negative or limiting expression.",
      why: "The limiting expression 'Only when...' requires the main clause to invert its auxiliary verb and subject.",
      trap: "Standard subject-verb order looks correct natively but violates the required inversion triggered by 'Only when'.",
      distractors: [
        "",
        "uses standard subject-verb order, which is incorrect after 'Only when'",
        "fails to invert the auxiliary verb before the subject",
        "inverts the main verb instead of using an auxiliary verb"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-inv-009",
    section: "structure",
    category: "inversion",
    difficulty: 3,
    stem: "Not until the deployment of the Hubble Space Telescope in 1990 ______ adequately resolve the remarkably complex structures of distant nebulae.",
    options: [
      "astronomers could",
      "could astronomers",
      "astronomers who could",
      "that astronomers could"
    ],
    answer: 1,
    explanation: {
      rule: "Subject and verb switch places after a fronted negative expression.",
      why: "The sentence opens with the negative phrase 'Not until,' mandating inversion of the auxiliary 'could' and subject 'astronomers.'",
      trap: "Failing to invert the subject and auxiliary verb after a negative time expression is a frequent error.",
      distractors: [
        "retains standard word order, which is incorrect after a fronted negative time expression",
        "",
        "turns the main clause into a relative clause fragment",
        "adds a subordinating conjunction that leaves the sentence without a main clause"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-par-008",
    section: "structure",
    category: "parallel_structure",
    difficulty: 2,
    stem: "Effective monetary policy requires a central bank to carefully monitor inflation rates, regulate the money supply, and ______ economic stability during periods of market volatility.",
    options: [
      "maintaining",
      "maintenance of",
      "maintain",
      "to maintaining"
    ],
    answer: 2,
    explanation: {
      rule: "Elements joined by a coordinating conjunction must share the same grammatical form.",
      why: "The verbs in the series ('monitor,' 'regulate') are base-form infinitives. The third item must be the base form 'maintain.'",
      trap: "An -ing gerund or a noun phrase breaks the parallel list of base-form verbs.",
      distractors: [
        "uses an -ing form, breaking the parallel structure of the base-form verbs",
        "uses a noun phrase instead of a verb",
        "",
        "incorrectly adds a preposition and an -ing form to a list of infinitives"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-cmp-007",
    section: "structure",
    category: "comparison_structure",
    difficulty: 2,
    stem: "The intricate social hierarchies of African elephants are demonstrably ______ those observed in most other terrestrial mammalian species.",
    options: [
      "more complex as",
      "as complex than",
      "most complex than",
      "more complex than"
    ],
    answer: 3,
    explanation: {
      rule: "Comparisons use fixed frames, such as 'more + adjective + than'.",
      why: "The comparative adjective 'more complex' must be paired with 'than'.",
      trap: "Mixing elements of 'more... than' and 'as... as' creates a structurally invalid hybrid frame.",
      distractors: [
        "mixes the comparative 'more' with the correlative 'as'",
        "mixes the correlative 'as' with the comparative 'than'",
        "incorrectly pairs a superlative with 'than'",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-cmp-008",
    section: "structure",
    category: "comparison_structure",
    difficulty: 3,
    stem: "The techniques employed in Renaissance fresco painting were significantly different ______ used by medieval artisans to illuminate manuscripts.",
    options: [
      "from those",
      "than those",
      "from that",
      "than that"
    ],
    answer: 0,
    explanation: {
      rule: "The phrase 'different from' is the standard idiom, and compared items must logically match in number.",
      why: "'Different from' is the correct frame, and the plural pronoun 'those' correctly replaces the plural noun 'techniques.'",
      trap: "Using 'than' for difference or failing to match the singular/plural nature of the compared noun.",
      distractors: [
        "",
        "uses 'than' instead of the standard idiom 'from'",
        "uses a singular pronoun 'that' which fails to agree with plural 'techniques'",
        "uses 'than' and a singular pronoun, violating both idiom and agreement rules"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-sjv-008",
    section: "structure",
    category: "subjunctive",
    difficulty: 3,
    stem: "Following the disastrous financial panic of 1907, a coalition of prominent bankers insisted that the federal government ______ a centralized banking system to prevent future crises.",
    options: [
      "established",
      "establish",
      "establishes",
      "would establish"
    ],
    answer: 1,
    explanation: {
      rule: "After verbs of demand or recommendation, the that-clause takes the base form of the verb for every subject.",
      why: "The verb 'insisted' triggers the subjunctive mood, requiring the base form 'establish'.",
      trap: "The simple past tense 'established' looks correct for a historical sentence but violates the subjunctive rule.",
      distractors: [
        "uses the simple past tense, violating the subjunctive rule triggered by 'insisted'",
        "",
        "uses the present singular form instead of the base form",
        "uses a modal auxiliary instead of the required subjunctive base form"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ger-008",
    section: "structure",
    category: "gerund_infinitive",
    difficulty: 2,
    stem: "By strategically manipulating interest rates, the Federal Reserve can attempt ______ inflation without inducing a severe economic recession.",
    options: [
      "controlling",
      "for controlling",
      "to control",
      "control"
    ],
    answer: 2,
    explanation: {
      rule: "Certain verbs, such as 'attempt', require an infinitive object rather than a gerund.",
      why: "The verb 'attempt' must be followed by a to-infinitive to express its object.",
      trap: "Using a gerund (-ing) instead of an infinitive is a common mismatch for verbs that require the latter.",
      distractors: [
        "uses a gerund, which cannot follow the verb 'attempt'",
        "uses an incorrect prepositional phrase for a direct object",
        "",
        "uses a base form without 'to', which cannot serve as the object"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ger-009",
    section: "structure",
    category: "gerund_infinitive",
    difficulty: 2,
    stem: "Although early prospectors relied heavily on panning, modern mining corporations depend on ______ massive quantities of ore to extract commercially viable amounts of gold.",
    options: [
      "process",
      "to process",
      "processed",
      "processing"
    ],
    answer: 3,
    explanation: {
      rule: "Every preposition must be followed by a noun or a gerund.",
      why: "The phrase 'depend on' ends with a preposition, which requires the gerund form 'processing' as its object.",
      trap: "Test-takers frequently confuse prepositions that demand a gerund with standard infinitives.",
      distractors: [
        "uses a base verb form, which cannot serve as the object of a preposition",
        "uses an infinitive, violating the rule that prepositions take gerund objects",
        "uses a past participle instead of a noun or gerund",
        ""
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "st-ord-008",
    section: "structure",
    category: "word_order",
    difficulty: 3,
    stem: "The gravitational pull of a black hole is ______ light itself cannot attain the escape velocity required to break free from its event horizon.",
    options: [
      "so immense that",
      "immense so that",
      "such immense that",
      "so that immense"
    ],
    answer: 0,
    explanation: {
      rule: "English uses fixed frames like 'so + adjective + that' to indicate an extreme degree and its result.",
      why: "The frame 'so immense that' correctly places the adverb 'so' before the adjective 'immense'.",
      trap: "Rearranging the required correlative frame or swapping 'so' for 'such' violates the structural norm.",
      distractors: [
        "",
        "places the adjective before 'so', disrupting the correlative expression",
        "uses 'such' instead of 'so' before an adjective lacking a noun",
        "places 'that' before the adjective, breaking the required syntax"
      ]
    },
    verified: true,
    addedOn: "2026-09-12"
  }
];
