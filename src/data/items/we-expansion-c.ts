import type { ErrorItem } from "../../types.ts";

export const items: ErrorItem[] = [
  {
    id: "we-cnt-002",
    section: "written_expression",
    category: "countability_quantifier",
    difficulty: 2,
    segments: [
      { text: "" },
      { text: "Much", label: "A" },
      { text: " astronomers " },
      { text: "believe", label: "B" },
      { text: " that the universe, " },
      { text: "expanding", label: "C" },
      { text: " at an accelerating rate, will " },
      { text: "eventually reach", label: "D" },
      { text: " a state of maximum entropy, a concept known as the heat death." }
    ],
    answer: 0,
    explanation: {
      rule: "Quantifier/Noun Agreement: 'Much' is used with uncountable nouns, whereas 'many' is used with plural countable nouns.",
      why: "The noun 'astronomers' is a plural countable noun, so it requires the quantifier 'many'.",
      trap: "Students might read 'much' at the beginning of the sentence and skip over the noun, or confuse it with expressions like 'much of'.",
      distractors: [
        "",
        "'believe' correctly agrees with the plural subject 'astronomers' in the present tense.",
        "The present participle 'expanding' correctly forms a reduced relative clause modifying 'the universe'.",
        "'eventually reach' is the correct base verb form following the modal 'will', appropriately modified by the adverb 'eventually'."
      ],
      corrected: "Many astronomers believe that the universe, expanding at an accelerating rate, will eventually reach a state of maximum entropy, a concept known as the heat death."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cnt-003",
    section: "written_expression",
    category: "countability_quantifier",
    difficulty: 3,
    segments: [
      { text: "Marine biologists " },
      { text: "have discovered", label: "A" },
      { text: " that a large " },
      { text: "amount", label: "B" },
      { text: " of coral reefs, " },
      { text: "which", label: "C" },
      { text: " provide crucial habitats for diverse species, are bleaching " },
      { text: "due to", label: "D" },
      { text: " rising ocean temperatures." }
    ],
    answer: 1,
    explanation: {
      rule: "Countability and Quantifiers: 'Amount' is used for uncountable nouns, while 'number' is used for plural countable nouns.",
      why: "The noun 'reefs' is a plural countable noun, so the correct phrase is 'a large number of'.",
      trap: "The phrase 'a large amount of' sounds idiomatic to many learners, masking the mismatch with the countable noun 'reefs'.",
      distractors: [
        "'have discovered' correctly uses the present perfect tense to indicate a recently completed action relevant to the present.",
        "",
        "'which' is the correct relative pronoun referring to the non-human 'coral reefs' in a non-restrictive relative clause.",
        "'due to' correctly acts as a preposition meaning 'caused by' before the noun phrase 'rising ocean temperatures'."
      ],
      corrected: "Marine biologists have discovered that a large number of coral reefs, which provide crucial habitats for diverse species, are bleaching due to rising ocean temperatures."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cnt-004",
    section: "written_expression",
    category: "countability_quantifier",
    difficulty: 2,
    segments: [
      { text: "During the Great Depression, the federal government " },
      { text: "implemented", label: "A" },
      { text: " numerous policies " },
      { text: "designed", label: "B" },
      { text: " to create " },
      { text: "less", label: "C" },
      { text: " regulations in the banking sector, " },
      { text: "hoping", label: "D" },
      { text: " to stimulate economic recovery." }
    ],
    answer: 2,
    explanation: {
      rule: "Countability and Quantifiers: 'Less' is used with uncountable nouns, whereas 'fewer' is used with plural countable nouns.",
      why: "Because 'regulations' is a plural countable noun, it requires the quantifier 'fewer' rather than 'less'.",
      trap: "In casual spoken English, 'less' is frequently used with countable nouns, making this formal written error hard to spot.",
      distractors: [
        "'implemented' correctly uses the past tense to describe a completed historical action.",
        "'designed' correctly functions as a past participle in a reduced relative clause modifying 'policies'.",
        "",
        "'hoping' is the correct present participle, initiating an adverbial phrase of purpose related to the main clause."
      ],
      corrected: "During the Great Depression, the federal government implemented numerous policies designed to create fewer regulations in the banking sector, hoping to stimulate economic recovery."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-prp-002",
    section: "written_expression",
    category: "preposition",
    difficulty: 2,
    segments: [
      { text: "The Appalachian Mountains, " },
      { text: "stretching", label: "A" },
      { text: " across the eastern United States, are " },
      { text: "primarily", label: "B" },
      { text: " composed " },
      { text: "from", label: "C" },
      { text: " ancient metamorphic and igneous rocks, which " },
      { text: "formed", label: "D" },
      { text: " hundreds of millions of years ago." }
    ],
    answer: 2,
    explanation: {
      rule: "Idiomatic Preposition: The verb 'compose' in the passive voice strictly takes the preposition 'of'.",
      why: "The phrase 'composed from' is incorrect; the idiomatic phrase is 'composed of'.",
      trap: "Students may confuse 'composed of' with 'made from', which has a similar meaning, leading them to accept the wrong preposition.",
      distractors: [
        "'stretching' correctly acts as a present participle introducing a participial phrase modifying 'The Appalachian Mountains'.",
        "'primarily' is an adverb correctly modifying the verb phrase 'are composed'.",
        "",
        "'formed' is correctly used in the past tense to describe the geological creation of the rocks."
      ],
      corrected: "The Appalachian Mountains, stretching across the eastern United States, are primarily composed of ancient metamorphic and igneous rocks, which formed hundreds of millions of years ago."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-prp-003",
    section: "written_expression",
    category: "preposition",
    difficulty: 3,
    segments: [
      { text: "" },
      { text: "In spite", label: "A" },
      { text: " the initial resistance " },
      { text: "from", label: "B" },
      { text: " conservative critics, the Impressionist movement, " },
      { text: "characterized by", label: "C" },
      { text: " its emphasis " },
      { text: "on", label: "D" },
      { text: " light and color, eventually revolutionized the entire Western art world." }
    ],
    answer: 0,
    explanation: {
      rule: "Prepositional Phrases: The expression 'in spite' must be followed by the preposition 'of' to form a complete prepositional phrase.",
      why: "The sentence uses 'In spite' directly before the noun phrase 'the initial resistance', omitting the required 'of'.",
      trap: "Students often conflate 'despite' (which takes no preposition) with 'in spite of', leading to the mixed, incorrect form 'in spite'.",
      distractors: [
        "",
        "'from' correctly indicates the source of the resistance.",
        "'characterized by' is the correct past participle phrase modifying 'the Impressionist movement'.",
        "'on' is the idiomatic preposition required after the noun 'emphasis'."
      ],
      corrected: "In spite of the initial resistance from conservative critics, the Impressionist movement, characterized by its emphasis on light and color, eventually revolutionized the entire Western art world."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-prp-004",
    section: "written_expression",
    category: "preposition",
    difficulty: 3,
    segments: [
      { text: "Seismologists rely " },
      { text: "with", label: "A" },
      { text: " complex networks of sensors, " },
      { text: "deeply", label: "B" },
      { text: " embedded " },
      { text: "in", label: "C" },
      { text: " the Earth's crust, to detect the subtle tectonic shifts " },
      { text: "that", label: "D" },
      { text: " precede major earthquakes." }
    ],
    answer: 0,
    explanation: {
      rule: "Dependent Preposition: The verb 'rely' must be followed by the preposition 'on' or 'upon'.",
      why: "The phrase 'rely with' is idiomatically incorrect; it should be 'rely on'.",
      trap: "The error appears early and uses a common preposition ('with'), which students might gloss over if they are translating directly from their native language.",
      distractors: [
        "",
        "'deeply' is a properly placed adverb modifying the participle 'embedded'.",
        "'in' correctly indicates location inside 'the Earth's crust'.",
        "'that' correctly introduces a restrictive relative clause modifying 'subtle tectonic shifts'."
      ],
      corrected: "Seismologists rely on complex networks of sensors, deeply embedded in the Earth's crust, to detect the subtle tectonic shifts that precede major earthquakes."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-sup-002",
    section: "written_expression",
    category: "comparative_superlative",
    difficulty: 2,
    segments: [
      { text: "Herman Melville's Moby-Dick, " },
      { text: "published", label: "A" },
      { text: " in 1851 and initially " },
      { text: "met", label: "B" },
      { text: " with mixed reviews, is now " },
      { text: "considered", label: "C" },
      { text: " one of the " },
      { text: "most great", label: "D" },
      { text: " American novels ever written." }
    ],
    answer: 3,
    explanation: {
      rule: "Superlative Form: Monosyllabic adjectives typically form the superlative by adding the suffix '-est' rather than using 'most'.",
      why: "The adjective 'great' is one syllable, so its correct superlative form is 'greatest', not 'most great'.",
      trap: "Because 'most' is used for multi-syllable words, learners might accidentally overgeneralize the rule to short adjectives.",
      distractors: [
        "'published' correctly acts as a past participle in a reduced relative clause.",
        "'met' correctly parallels 'published' as a past participle describing the novel's reception.",
        "'considered' correctly functions in the passive voice 'is considered'.",
        ""
      ],
      corrected: "Herman Melville's Moby-Dick, published in 1851 and initially met with mixed reviews, is now considered one of the greatest American novels ever written."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-sup-003",
    section: "written_expression",
    category: "comparative_superlative",
    difficulty: 3,
    segments: [
      { text: "The blue whale, a marine mammal " },
      { text: "capable of", label: "A" },
      { text: " reaching lengths of over one hundred feet, is " },
      { text: "undoubtedly", label: "B" },
      { text: " the " },
      { text: "more", label: "C" },
      { text: " massive creature " },
      { text: "known to", label: "D" },
      { text: " have lived on Earth." }
    ],
    answer: 2,
    explanation: {
      rule: "Superlative vs. Comparative: When comparing one entity to all others in a group, the superlative form is required.",
      why: "The sentence describes the blue whale in relation to all other creatures on Earth, requiring 'most' rather than the comparative 'more'.",
      trap: "The presence of 'the' before 'more' makes it look grammatically structural, tricking the reader into missing the logical requirement for a superlative.",
      distractors: [
        "'capable of' correctly uses an adjective phrase modifying 'mammal'.",
        "'undoubtedly' is an adverb correctly modifying the main verb phrase 'is the most massive'.",
        "",
        "'known to' correctly introduces the infinitive phrase 'have lived', describing the creature."
      ],
      corrected: "The blue whale, a marine mammal capable of reaching lengths of over one hundred feet, is undoubtedly the most massive creature known to have lived on Earth."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-sup-004",
    section: "written_expression",
    category: "comparative_superlative",
    difficulty: 2,
    segments: [
      { text: "" },
      { text: "As farest", label: "A" },
      { text: " as astronomers " },
      { text: "can determine", label: "B" },
      { text: ", the " },
      { text: "observable", label: "C" },
      { text: " universe contains billions of galaxies, each " },
      { text: "harboring", label: "D" },
      { text: " billions of stars and potentially habitable planetary systems." }
    ],
    answer: 0,
    explanation: {
      rule: "Idiomatic Equivalence: The correlative phrase 'as... as' requires the base form of the adjective or adverb in the middle.",
      why: "The phrase 'as farest as' improperly uses the superlative form 'farest' instead of the base adverb 'far'.",
      trap: "Students may recognize that distance is extreme here and think a superlative is needed, ignoring the rigid structure of the 'as... as' idiom.",
      distractors: [
        "",
        "'can determine' is correctly formulated as a modal verb phrase.",
        "'observable' correctly functions as an adjective modifying 'universe'.",
        "'harboring' correctly functions as a present participle introducing an absolute phrase modifying 'galaxies'."
      ],
      corrected: "As far as astronomers can determine, the observable universe contains billions of galaxies, each harboring billions of stars and potentially habitable planetary systems."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-plu-002",
    section: "written_expression",
    category: "singular_plural_noun",
    difficulty: 3,
    segments: [
      { text: "Inflation, " },
      { text: "defined as", label: "A" },
      { text: " a general increase in prices and a fall in the purchasing value of " },
      { text: "moneys", label: "B" },
      { text: ", " },
      { text: "has", label: "C" },
      { text: " profound implications for " },
      { text: "global", label: "D" },
      { text: " financial markets." }
    ],
    answer: 1,
    explanation: {
      rule: "Noun Pluralization: Uncountable nouns generally cannot take a plural '-s' suffix.",
      why: "The noun 'money' is uncountable in this context, so it cannot be pluralized as 'moneys'.",
      trap: "While 'moneys' or 'monies' exists in highly specific legal contexts, standard academic English treats 'money' as strictly uncountable.",
      distractors: [
        "'defined as' correctly initiates a non-restrictive participial phrase modifying 'Inflation'.",
        "",
        "'has' correctly agrees with the singular subject 'Inflation'.",
        "'global' correctly functions as an adjective modifying 'financial markets'."
      ],
      corrected: "Inflation, defined as a general increase in prices and a fall in the purchasing value of money, has profound implications for global financial markets."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-plu-003",
    section: "written_expression",
    category: "singular_plural_noun",
    difficulty: 2,
    segments: [
      { text: "The founding fathers, " },
      { text: "who drafted", label: "A" },
      { text: " the United States Constitution in 1787, " },
      { text: "sought", label: "B" },
      { text: " to establish a system of checks and " },
      { text: "balance", label: "C" },
      { text: " to prevent " },
      { text: "tyranny", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Idiomatic Noun Pairs: Fixed phrases in English often require specific plural forms for both elements.",
      why: "The standard political term is 'checks and balances', requiring the plural form for both nouns.",
      trap: "The word 'balance' seems logical since a system aims for a single state of balance, but the idiom requires the plural.",
      distractors: [
        "'who drafted' correctly forms a relative clause modifying 'The founding fathers'.",
        "'sought' is correctly used as the main past-tense verb for the subject 'The founding fathers'.",
        "",
        "'tyranny' is correctly used as an uncountable abstract noun object of 'prevent'."
      ],
      corrected: "The founding fathers, who drafted the United States Constitution in 1787, sought to establish a system of checks and balances to prevent tyranny."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-plu-004",
    section: "written_expression",
    category: "singular_plural_noun",
    difficulty: 3,
    segments: [
      { text: "Volcanic eruptions, which release " },
      { text: "massive", label: "A" },
      { text: " quantities of ash and gas " },
      { text: "into", label: "B" },
      { text: " the atmosphere, can cause " },
      { text: "significant", label: "C" },
      { text: " disruptions to local " },
      { text: "ecosystem", label: "D" },
      { text: " and global climate patterns." }
    ],
    answer: 3,
    explanation: {
      rule: "Countable Noun Articles/Plurals: A singular countable noun requires a determiner (like 'a' or 'the'); without one, it must be pluralized.",
      why: "The noun 'ecosystem' is a singular countable noun lacking an article, and it is coordinated with the plural 'patterns', so it must be pluralized to 'ecosystems'.",
      trap: "The modifier 'local' distracts from the noun itself, making the absence of an article or plural suffix less noticeable.",
      distractors: [
        "'massive' correctly functions as an adjective modifying 'quantities'.",
        "'into' correctly describes the direction of the released ash and gas.",
        "'significant' is a correctly formed adjective modifying 'disruptions'.",
        ""
      ],
      corrected: "Volcanic eruptions, which release massive quantities of ash and gas into the atmosphere, can cause significant disruptions to local ecosystems and global climate patterns."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-adv-002",
    section: "written_expression",
    category: "adjective_adverb",
    difficulty: 2,
    segments: [
      { text: "" },
      { text: "Initial", label: "A" },
      { text: " reluctant to accept the heliocentric model, the scientific community, " },
      { text: "influenced by", label: "B" },
      { text: " the meticulous observations of Galileo, " },
      { text: "eventually", label: "C" },
      { text: " embraced the " },
      { text: "concept", label: "D" },
      { text: "." }
    ],
    answer: 0,
    explanation: {
      rule: "Adverbial Modification: An adjective must be modified by an adverb, not another adjective.",
      why: "The word 'reluctant' is an adjective, so it must be modified by the adverb 'initially' rather than the adjective 'initial'.",
      trap: "Because 'initial' appears at the very beginning of the sentence, it mimics the appearance of a standard introductory adjective, obscuring its role as a modifier of 'reluctant'.",
      distractors: [
        "",
        "'influenced by' correctly introduces a reduced relative clause modifying 'the scientific community'.",
        "'eventually' correctly acts as an adverb modifying the verb 'embraced'.",
        "'concept' is correctly used as the singular noun object of 'embraced'."
      ],
      corrected: "Initially reluctant to accept the heliocentric model, the scientific community, influenced by the meticulous observations of Galileo, eventually embraced the concept."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-adv-003",
    section: "written_expression",
    category: "adjective_adverb",
    difficulty: 3,
    segments: [
      { text: "Many species of migratory birds " },
      { text: "possess", label: "A" },
      { text: " an " },
      { text: "incredible", label: "B" },
      { text: " sophisticated navigational system, " },
      { text: "relying on", label: "C" },
      { text: " the Earth's magnetic field to guide " },
      { text: "their", label: "D" },
      { text: " long-distance seasonal journeys." }
    ],
    answer: 1,
    explanation: {
      rule: "Adverbial Modification: When modifying an adjective, an adverb must be used.",
      why: "The word 'sophisticated' is an adjective, so it must be modified by the adverb 'incredibly', not the adjective 'incredible'.",
      trap: "The cluster of modifiers ('an incredible sophisticated navigational system') sounds superficially complex, allowing the missing '-ly' suffix to blend in.",
      distractors: [
        "'possess' is the correct plural verb form agreeing with 'Many species'.",
        "",
        "'relying on' correctly introduces a participial phrase showing method.",
        "'their' is the correct plural possessive adjective referring to 'migratory birds'."
      ],
      corrected: "Many species of migratory birds possess an incredibly sophisticated navigational system, relying on the Earth's magnetic field to guide their long-distance seasonal journeys."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-adv-004",
    section: "written_expression",
    category: "adjective_adverb",
    difficulty: 2,
    segments: [
      { text: "The Hudson River School, " },
      { text: "emerging", label: "A" },
      { text: " in the mid-nineteenth century, " },
      { text: "consisted of", label: "B" },
      { text: " a group of landscape painters " },
      { text: "who depicted", label: "C" },
      { text: " the American wilderness very " },
      { text: "romantic", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "Adverbs Modify Verbs: An adverb is required to describe how an action is performed.",
      why: "The word modifies the verb 'depicted', so it must be the adverb 'romantically' instead of the adjective 'romantic'.",
      trap: "The placement at the very end of the sentence makes it look like an object complement, hiding the fact that it is an adverb of manner.",
      distractors: [
        "'emerging' correctly forms a present participial phrase modifying 'The Hudson River School'.",
        "'consisted of' is the correct past-tense verb idiomatically requiring 'of'.",
        "'who depicted' correctly introduces a relative clause describing the 'painters'.",
        ""
      ],
      corrected: "The Hudson River School, emerging in the mid-nineteenth century, consisted of a group of landscape painters who depicted the American wilderness very romantically."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-wfm-002",
    section: "written_expression",
    category: "word_form",
    difficulty: 3,
    segments: [
      { text: "The rapid " },
      { text: "industrialize", label: "A" },
      { text: " of the United States in the late nineteenth century, " },
      { text: "fueled by", label: "B" },
      { text: " technological innovations, " },
      { text: "transformed", label: "C" },
      { text: " the nation " },
      { text: "into", label: "D" },
      { text: " a global economic powerhouse." }
    ],
    answer: 0,
    explanation: {
      rule: "Noun vs. Verb Form: The subject of a sentence, especially following an article and adjective, must be a noun.",
      why: "The word 'industrialize' is a verb, but the structure 'The rapid [noun] of' requires the noun form 'industrialization'.",
      trap: "The word shares a long root with the correct noun form, so learners reading quickly may visually process it as the noun.",
      distractors: [
        "",
        "'fueled by' is a correctly formed passive participial phrase modifying the subject.",
        "'transformed' acts correctly as the main past-tense verb.",
        "'into' is the correct preposition following 'transformed' to show a change of state."
      ],
      corrected: "The rapid industrialization of the United States in the late nineteenth century, fueled by technological innovations, transformed the nation into a global economic powerhouse."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-wfm-003",
    section: "written_expression",
    category: "word_form",
    difficulty: 2,
    segments: [
      { text: "The Civil Rights Act of 1964, " },
      { text: "signed", label: "A" },
      { text: " into law by President Lyndon B. Johnson, outlawed " },
      { text: "discriminate", label: "B" },
      { text: " based " },
      { text: "on", label: "C" },
      { text: " race, color, religion, sex, or " },
      { text: "national", label: "D" },
      { text: " origin." }
    ],
    answer: 1,
    explanation: {
      rule: "Noun as Direct Object: Transitive verbs require a noun or pronoun as their direct object.",
      why: "The verb 'outlawed' requires a noun object, so the verb form 'discriminate' must be changed to the noun form 'discrimination'.",
      trap: "Learners may recognize the root word and fail to verify the '-tion' suffix that marks it as a noun.",
      distractors: [
        "'signed' is a correctly used past participle forming a non-restrictive phrase.",
        "",
        "'on' is the correct preposition required by the participle 'based'.",
        "'national' is correctly used as an adjective modifying 'origin'."
      ],
      corrected: "The Civil Rights Act of 1964, signed into law by President Lyndon B. Johnson, outlawed discrimination based on race, color, religion, sex, or national origin."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-wfm-004",
    section: "written_expression",
    category: "word_form",
    difficulty: 3,
    segments: [
      { text: "Emily Dickinson's poetry, " },
      { text: "characterized by", label: "A" },
      { text: " its unconventional capitalization and " },
      { text: "extensive", label: "B" },
      { text: " use of dashes, remained largely " },
      { text: "unpublish", label: "C" },
      { text: " during her " },
      { text: "reclusive", label: "D" },
      { text: " lifetime." }
    ],
    answer: 2,
    explanation: {
      rule: "Participle as Adjective: Linking verbs like 'remain' are followed by adjectives, which can take the form of past participles.",
      why: "The base verb 'unpublish' cannot serve as an adjective; it must take the '-ed' participial form 'unpublished'.",
      trap: "The prefix 'un-' makes the word look like an adjective, misleading the reader to overlook the missing '-ed' suffix.",
      distractors: [
        "'characterized by' correctly introduces a participial phrase modifying 'poetry'.",
        "'extensive' is correctly used as an adjective modifying the noun phrase 'use of dashes'.",
        "",
        "'reclusive' correctly serves as an adjective describing the noun 'lifetime'."
      ],
      corrected: "Emily Dickinson's poetry, characterized by its unconventional capitalization and extensive use of dashes, remained largely unpublished during her reclusive lifetime."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-tns-005",
    section: "written_expression",
    category: "verb_tense",
    difficulty: 3,
    segments: [
      { text: "Radiometric dating techniques, which " },
      { text: "rely on", label: "A" },
      { text: " the decay of radioactive isotopes, " },
      { text: "have proven", label: "B" },
      { text: " that the Earth is " },
      { text: "approximately", label: "C" },
      { text: " 4.5 billion years old, a fact scientists " },
      { text: "discover", label: "D" },
      { text: " decades ago." }
    ],
    answer: 3,
    explanation: {
      rule: "Past Tense Indicator: Specific past time markers, such as 'decades ago', demand the simple past tense.",
      why: "The phrase 'decades ago' specifies a completed past action, so 'discover' must be the past tense 'discovered'.",
      trap: "The sentence begins with present and present perfect verbs ('rely on', 'have proven'), creating a false sense that all verbs should remain in the present.",
      distractors: [
        "'rely on' correctly uses the present tense to state an ongoing scientific fact.",
        "'have proven' correctly uses the present perfect to link a past discovery to its present relevance.",
        "'approximately' correctly functions as an adverb modifying the numerical phrase '4.5 billion'.",
        ""
      ],
      corrected: "Radiometric dating techniques, which rely on the decay of radioactive isotopes, have proven that the Earth is approximately 4.5 billion years old, a fact scientists discovered decades ago."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-tns-006",
    section: "written_expression",
    category: "verb_tense",
    difficulty: 2,
    segments: [
      { text: "In 1995, astronomers " },
      { text: "detect", label: "A" },
      { text: " the first exoplanet " },
      { text: "orbiting", label: "B" },
      { text: " a sun-like star, a monumental breakthrough that " },
      { text: "has since", label: "C" },
      { text: " sparked intense interest in the search for extraterrestrial " },
      { text: "life", label: "D" },
      { text: "." }
    ],
    answer: 0,
    explanation: {
      rule: "Past Tense Indicator: Specific historical dates require the simple past tense.",
      why: "The time marker 'In 1995' demands the past tense form 'detected', not the present 'detect'.",
      trap: "The verb is surrounded by present participles and present perfect forms ('orbiting', 'has since sparked'), which might lead a reader to accept the present form out of false parallelism.",
      distractors: [
        "",
        "'orbiting' is correctly used as a present participle in a reduced relative clause modifying 'exoplanet'.",
        "'has since' is correctly placed before 'sparked' to form the present perfect tense indicating an ongoing effect.",
        "'life' is correctly used as an uncountable noun representing the abstract concept being searched for."
      ],
      corrected: "In 1995, astronomers detected the first exoplanet orbiting a sun-like star, a monumental breakthrough that has since sparked intense interest in the search for extraterrestrial life."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-prf-005",
    section: "written_expression",
    category: "pronoun_reference",
    difficulty: 3,
    segments: [
      { text: "When honeybees, essential pollinators for " },
      { text: "numerous", label: "A" },
      { text: " agricultural crops, " },
      { text: "locate", label: "B" },
      { text: " a rich nectar source, " },
      { text: "it", label: "C" },
      { text: " perform a complex waggle dance to communicate the location to the " },
      { text: "hive", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Pronoun-Antecedent Agreement: A pronoun must agree in number with the noun it replaces.",
      why: "The pronoun refers to the plural subject 'honeybees', so the plural pronoun 'they' is required instead of the singular 'it'.",
      trap: "The lengthy appositive phrase separating the subject from its pronoun causes learners to lose track of the antecedent's plurality.",
      distractors: [
        "'numerous' correctly modifies the plural countable noun 'crops'.",
        "'locate' correctly agrees with the plural subject 'honeybees' in the present tense.",
        "",
        "'hive' is correctly used as the singular noun object representing the destination of the communication."
      ],
      corrected: "When honeybees, essential pollinators for numerous agricultural crops, locate a rich nectar source, they perform a complex waggle dance to communicate the location to the hive."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-prf-006",
    section: "written_expression",
    category: "pronoun_reference",
    difficulty: 2,
    segments: [
      { text: "Georgia O'Keeffe, a " },
      { text: "pioneer", label: "A" },
      { text: " of American modernism, is " },
      { text: "renowned", label: "B" },
      { text: " for her oversized paintings of flowers, " },
      { text: "which", label: "C" },
      { text: " emphasize " },
      { text: "its", label: "D" },
      { text: " intricate shapes and vibrant colors." }
    ],
    answer: 3,
    explanation: {
      rule: "Pronoun-Antecedent Agreement: A possessive adjective must agree in number with the noun it modifies or refers back to.",
      why: "The pronoun refers back to the plural noun 'flowers', so it must be the plural possessive 'their', not the singular 'its'.",
      trap: "The singular subject 'Georgia O'Keeffe' and singular concepts like 'modernism' at the beginning of the sentence might cause students to incorrectly anticipate a singular pronoun.",
      distractors: [
        "'pioneer' correctly functions as the head noun of the appositive describing Georgia O'Keeffe.",
        "'renowned' correctly functions as a predicate adjective following the verb 'is'.",
        "'which' is correctly used as a relative pronoun referring to 'paintings of flowers'.",
        ""
      ],
      corrected: "Georgia O'Keeffe, a pioneer of American modernism, is renowned for her oversized paintings of flowers, which emphasize their intricate shapes and vibrant colors."
    },
    verified: true,
    addedOn: "2026-09-11"
  }
];
