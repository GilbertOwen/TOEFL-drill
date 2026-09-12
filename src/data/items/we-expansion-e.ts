import type { ErrorItem } from "../../types";

export const items: ErrorItem[] = [
  {
    id: "we-sva-006",
    section: "written_expression",
    category: "subject_verb_agreement",
    difficulty: 3,
    segments: [
      { text: "The gradual accumulation of heavy metals, along with synthetic pesticides used extensively in conventional farming, " },
      { text: "poses", label: "A" },
      { text: " a " },
      { text: "severe", label: "B" },
      { text: " threat to " },
      { text: "local", label: "C" },
      { text: " aquifers and the wildlife that " },
      { text: "rely", label: "D" },
      { text: " on them." }
    ],
    answer: 3,
    explanation: {
      rule: "Subject-Verb Agreement: A relative pronoun's verb must agree with its antecedent.",
      why: "The relative pronoun 'that' refers to the uncountable noun 'wildlife', so it requires the singular verb 'relies'.",
      trap: "The plural noun 'aquifers' nearby might trick students into thinking the antecedent is plural.",
      distractors: [
        "The singular verb 'poses' correctly agrees with the singular simple subject 'accumulation'.",
        "The adjective 'severe' correctly modifies the noun 'threat'.",
        "The adjective 'local' correctly modifies the noun 'aquifers'.",
        ""
      ],
      corrected: "The gradual accumulation of heavy metals, along with synthetic pesticides used extensively in conventional farming, poses a severe threat to local aquifers and the wildlife that relies on them."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-tns-008",
    section: "written_expression",
    category: "verb_tense",
    difficulty: 2,
    segments: [
      { text: "During the early decades of the twentieth century, abstract expressionists " },
      { text: "rejected", label: "A" },
      { text: " the traditional " },
      { text: "rules", label: "B" },
      { text: " of perspective and proportion that " },
      { text: "dominates", label: "C" },
      { text: " European art " },
      { text: "for", label: "D" },
      { text: " centuries." }
    ],
    answer: 2,
    explanation: {
      rule: "Verb Tense: Events that occurred and ended before another past event require the past perfect tense.",
      why: "The action of dominating occurred before the past action of rejecting, so it must be 'had dominated', not 'dominates'.",
      trap: "Students might mistake the relative clause for a statement of a general, ongoing fact, which would take the present tense.",
      distractors: [
        "The past tense 'rejected' correctly aligns with the past time marker 'During the early decades of the twentieth century'.",
        "The plural noun 'rules' is correct here as it refers to multiple conventions of art.",
        "",
        "The preposition 'for' correctly introduces a duration of time ('centuries')."
      ],
      corrected: "During the early decades of the twentieth century, abstract expressionists rejected the traditional rules of perspective and proportion that had dominated European art for centuries."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-tns-009",
    section: "written_expression",
    category: "verb_tense",
    difficulty: 3,
    segments: [
      { text: "By the time the Voyager 2 spacecraft " },
      { text: "encountered", label: "A" },
      { text: " Neptune in 1989, it " },
      { text: "had already traveled", label: "B" },
      { text: " more than three billion miles, " },
      { text: "sends", label: "C" },
      { text: " back unprecedented images of the outer " },
      { text: "solar system", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Verb Form: A reduced adverbial clause of concurrent action requires a present participle.",
      why: "The concurrent action of sending images must be expressed with the present participle 'sending', not the conjugated verb 'sends'.",
      trap: "The verb 'sends' might seem to parallel other verbs, but this clause lacks a conjunction, so a participle is required.",
      distractors: [
        "The simple past 'encountered' correctly follows 'By the time' to indicate a completed past event.",
        "The past perfect 'had already traveled' correctly indicates action completed before 1989.",
        "",
        "The compound noun 'solar system' is correct."
      ],
      corrected: "By the time the Voyager 2 spacecraft encountered Neptune in 1989, it had already traveled more than three billion miles, sending back unprecedented images of the outer solar system."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-vfm-006",
    section: "written_expression",
    category: "verb_form",
    difficulty: 2,
    segments: [
      { text: "In order to " },
      { text: "accurately", label: "A" },
      { text: " map the ocean floor, researchers use sonar technology that " },
      { text: "bouncing", label: "B" },
      { text: " sound waves off the seabed, measuring the " },
      { text: "time", label: "C" },
      { text: " it takes for the echoes to " },
      { text: "return", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "Verb Form: A relative pronoun serving as the subject of a clause must be followed by a conjugated verb.",
      why: "The relative clause 'that bouncing...' lacks a finite verb. It should be the conjugated verb 'bounces'.",
      trap: "The participle 'bouncing' might look correct if the student thinks it's a reduced relative clause, but the presence of 'that' requires a full verb.",
      distractors: [
        "The adverb 'accurately' correctly modifies the infinitive verb 'map'.",
        "",
        "The noun 'time' is correctly used as the object of the participle 'measuring'.",
        "The base verb 'return' correctly follows the infinitive marker 'to'."
      ],
      corrected: "In order to accurately map the ocean floor, researchers use sonar technology that bounces sound waves off the seabed, measuring the time it takes for the echoes to return."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-pas-006",
    section: "written_expression",
    category: "passive_voice",
    difficulty: 3,
    segments: [
      { text: "Because " },
      { text: "nearly all", label: "A" },
      { text: " atmospheric ozone " },
      { text: "concentrates", label: "B" },
      { text: " in the stratosphere, it acts as a " },
      { text: "vital", label: "C" },
      { text: " shield that protects Earth from harmful ultraviolet " },
      { text: "radiation", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "Passive Voice: When the subject receives the action rather than performing it, the verb must be in the passive voice.",
      why: "Ozone does not concentrate itself; it 'is concentrated' by natural forces, requiring the passive voice.",
      trap: "The active verb 'concentrates' sounds plausible because non-living subjects are sometimes used with active verbs, but here the passive is required.",
      distractors: [
        "The phrase 'nearly all' correctly modifies the uncountable noun 'ozone'.",
        "",
        "The adjective 'vital' correctly modifies the noun 'shield'.",
        "The uncountable noun 'radiation' is used correctly without an article."
      ],
      corrected: "Because nearly all atmospheric ozone is concentrated in the stratosphere, it acts as a vital shield that protects Earth from harmful ultraviolet radiation."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-pag-006",
    section: "written_expression",
    category: "pronoun_agreement",
    difficulty: 2,
    segments: [
      { text: "Although the common cold " },
      { text: "is", label: "A" },
      { text: " caused by over two hundred different viruses, " },
      { text: "they", label: "B" },
      { text: " generally " },
      { text: "produces", label: "C" },
      { text: " similar symptoms in most " },
      { text: "infected", label: "D" },
      { text: " individuals." }
    ],
    answer: 1,
    explanation: {
      rule: "Pronoun Agreement: A pronoun must agree in number with its antecedent.",
      why: "The pronoun refers back to the singular subject 'the common cold', so it should be the singular pronoun 'it'.",
      trap: "The plural noun 'viruses' immediately preceding the pronoun makes 'they' seem like a correct plural reference.",
      distractors: [
        "The singular verb 'is' correctly agrees with the singular subject 'cold'.",
        "",
        "The singular verb 'produces' correctly agrees with its actual subject, which should be singular ('it').",
        "The past participle 'infected' correctly functions as an adjective modifying 'individuals'."
      ],
      corrected: "Although the common cold is caused by over two hundred different viruses, it generally produces similar symptoms in most infected individuals."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-prf-008",
    section: "written_expression",
    category: "pronoun_reference",
    difficulty: 3,
    segments: [
      { text: "While early agricultural societies depended heavily on rainfall, the development of " },
      { text: "complex", label: "A" },
      { text: " irrigation systems allowed " },
      { text: "them", label: "B" },
      { text: " to cultivate crops in regions where " },
      { text: "it", label: "C" },
      { text: " was previously " },
      { text: "impossible", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Pronoun Reference: A pronoun must have a clear, specific noun antecedent.",
      why: "The pronoun 'it' has no logical singular noun antecedent in the sentence to refer to what was impossible. It should be the demonstrative 'this' or 'such cultivation'.",
      trap: "The pronoun 'it' is often used as an empty subject (dummy it), making it seem acceptable, but here a specific reference to the action of cultivating crops is required.",
      distractors: [
        "The adjective 'complex' correctly modifies 'irrigation systems'.",
        "The pronoun 'them' correctly refers to the plural noun 'agricultural societies'.",
        "",
        "The adjective 'impossible' correctly describes the state of cultivation before irrigation."
      ],
      corrected: "While early agricultural societies depended heavily on rainfall, the development of complex irrigation systems allowed them to cultivate crops in regions where such cultivation was previously impossible."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-rpr-007",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 2,
    segments: [
      { text: "The intricate web of fungal networks, often " },
      { text: "referred", label: "A" },
      { text: " to as the 'wood wide web', " },
      { text: "connects", label: "B" },
      { text: " trees and plants, enabling " },
      { text: "they", label: "C" },
      { text: " to share " },
      { text: "vital", label: "D" },
      { text: " nutrients." }
    ],
    answer: 2,
    explanation: {
      rule: "Pronoun Form: A pronoun functioning as the object of a verb or verbal must be in the objective case.",
      why: "The pronoun is the object of the participle 'enabling', so it must be the objective pronoun 'them', not the subjective 'they'.",
      trap: "Students might confuse subjective and objective pronoun cases, especially when the pronoun is positioned near infinitives.",
      distractors: [
        "The past participle 'referred' is correctly used in the reduced relative clause.",
        "The singular verb 'connects' correctly agrees with the subject 'web'.",
        "",
        "The adjective 'vital' correctly modifies 'nutrients'."
      ],
      corrected: "The intricate web of fungal networks, often referred to as the 'wood wide web', connects trees and plants, enabling them to share vital nutrients."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-wfm-007",
    section: "written_expression",
    category: "word_form",
    difficulty: 3,
    segments: [
      { text: "Due to its " },
      { text: "extraordinary", label: "A" },
      { text: " tensile strength and flexibility, spider silk has inspired materials scientists to develop " },
      { text: "synthetic", label: "B" },
      { text: " alternatives for " },
      { text: "use", label: "C" },
      { text: " in medicine and " },
      { text: "engineer", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "Word Form: Parallel structures connected by conjunctions like 'and' must use the same part of speech.",
      why: "The word 'engineer' is a verb or a person noun, but it needs to be the abstract noun 'engineering' to be parallel with the noun 'medicine'.",
      trap: "The word 'engineer' is a noun, which might seem correct, but it refers to a person rather than a field of study like 'medicine'.",
      distractors: [
        "The adjective 'extraordinary' correctly modifies the noun phrase 'tensile strength'.",
        "The adjective 'synthetic' correctly modifies the noun 'alternatives'.",
        "The noun 'use' correctly serves as the object of the preposition 'for'.",
        ""
      ],
      corrected: "Due to its extraordinary tensile strength and flexibility, spider silk has inspired materials scientists to develop synthetic alternatives for use in medicine and engineering."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-art-007",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 2,
    segments: [
      { text: "In " },
      { text: "a", label: "A" },
      { text: " late 1960s, a team of researchers at Stanford University " },
      { text: "conducted", label: "B" },
      { text: " a series of psychological experiments on delayed " },
      { text: "gratification", label: "C" },
      { text: " in " },
      { text: "young", label: "D" },
      { text: " children." }
    ],
    answer: 0,
    explanation: {
      rule: "Article/Determiner: Specific decades require the definite article 'the'.",
      why: "The phrase referring to a specific decade must be 'the late 1960s', not 'a late 1960s'.",
      trap: "The article 'a' might seem acceptable if the student mistakes 'late' as requiring an indefinite article, but specific historical periods take 'the'.",
      distractors: [
        "",
        "The past tense verb 'conducted' correctly indicates a completed past action.",
        "The uncountable noun 'gratification' is used correctly without an article in this prepositional phrase.",
        "The adjective 'young' correctly modifies 'children'."
      ],
      corrected: "In the late 1960s, a team of researchers at Stanford University conducted a series of psychological experiments on delayed gratification in young children."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-art-008",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 3,
    segments: [
      { text: "The discovery of " },
      { text: "Rosetta Stone", label: "A" },
      { text: " provided " },
      { text: "scholars", label: "B" },
      { text: " with the crucial key needed to " },
      { text: "decipher", label: "C" },
      { text: " ancient Egyptian hieroglyphics for the first " },
      { text: "time", label: "D" },
      { text: "." }
    ],
    answer: 0,
    explanation: {
      rule: "Article/Determiner: Unique historical artifacts and specific monuments typically require the definite article 'the'.",
      why: "As a unique, specific artifact, it must be referred to as 'the Rosetta Stone'.",
      trap: "Because 'Rosetta Stone' is a proper noun, students might mistakenly apply the rule that proper nouns (like names of people or cities) do not take articles.",
      distractors: [
        "",
        "The plural noun 'scholars' is used correctly in a general sense without an article.",
        "The base verb 'decipher' correctly follows the infinitive marker 'to'.",
        "The noun 'time' is correctly used in the fixed idiomatic expression 'for the first time'."
      ],
      corrected: "The discovery of the Rosetta Stone provided scholars with the crucial key needed to decipher ancient Egyptian hieroglyphics for the first time."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-cnt-006",
    section: "written_expression",
    category: "countability_quantifier",
    difficulty: 2,
    segments: [
      { text: "Despite the implementation of strict regulations, " },
      { text: "a large amount of", label: "A" },
      { text: " manufacturing factories continue to " },
      { text: "release", label: "B" },
      { text: " untreated wastewater directly " },
      { text: "into", label: "C" },
      { text: " nearby river " },
      { text: "systems", label: "D" },
      { text: "." }
    ],
    answer: 0,
    explanation: {
      rule: "Countability/Quantifier: 'Amount' is used with uncountable nouns, while 'number' is used with plural countable nouns.",
      why: "The noun 'factories' is a plural countable noun, so the quantifier must be 'a large number of', not 'a large amount of'.",
      trap: "The phrase 'a large amount of' sounds natural to non-native speakers who may not distinguish between countable and uncountable quantifiers.",
      distractors: [
        "",
        "The base verb 'release' correctly follows the infinitive marker 'to'.",
        "The preposition 'into' correctly indicates movement toward the inside of the river systems.",
        "The plural noun 'systems' correctly indicates multiple rivers."
      ],
      corrected: "Despite the implementation of strict regulations, a large number of manufacturing factories continue to release untreated wastewater directly into nearby river systems."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-prp-007",
    section: "written_expression",
    category: "preposition",
    difficulty: 2,
    segments: [
      { text: "The rapid expansion of urban areas has " },
      { text: "resulted", label: "A" },
      { text: " in a significant decrease " },
      { text: "in", label: "B" },
      { text: " the natural habitats " },
      { text: "available", label: "C" },
      { text: " " },
      { text: "by", label: "D" },
      { text: " local wildlife populations." }
    ],
    answer: 3,
    explanation: {
      rule: "Preposition: The adjective 'available' takes the preposition 'to' when followed by the receiver.",
      why: "Habitats are made available 'to' wildlife, not 'by' wildlife.",
      trap: "The preposition 'by' often indicates an agent, which might seem correct to a non-native speaker incorrectly linking it to populations.",
      distractors: [
        "The verb 'resulted' correctly takes 'in' to show the effect of the urban expansion.",
        "The preposition 'in' correctly follows 'decrease'.",
        "The adjective 'available' correctly modifies 'habitats'.",
        ""
      ],
      corrected: "The rapid expansion of urban areas has resulted in a significant decrease in the natural habitats available to local wildlife populations."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-cor-006",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 3,
    segments: [
      { text: "Not only " },
      { text: "did", label: "A" },
      { text: " the invention of the printing press make books widely accessible, " },
      { text: "and", label: "B" },
      { text: " it also " },
      { text: "standardized", label: "C" },
      { text: " spelling and syntax across different " },
      { text: "regional", label: "D" },
      { text: " dialects." }
    ],
    answer: 1,
    explanation: {
      rule: "Correlative Pair: The correlative conjunction 'not only' must be paired with 'but also'.",
      why: "The pairing 'not only... and also' is incorrect; it must be 'not only... but also'.",
      trap: "The conjunction 'and' seems logical to connect two additive ideas, masking the strict correlative pair rule.",
      distractors: [
        "The auxiliary verb 'did' is correctly used for subject-verb inversion after negative adverbial 'Not only'.",
        "",
        "The past tense verb 'standardized' correctly balances with the past tense meaning of the first clause.",
        "The adjective 'regional' correctly modifies the noun 'dialects'."
      ],
      corrected: "Not only did the invention of the printing press make books widely accessible, but it also standardized spelling and syntax across different regional dialects."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-cor-007",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 2,
    segments: [
      { text: "Migratory birds rely " },
      { text: "either", label: "A" },
      { text: " on the Earth's magnetic field " },
      { text: "nor", label: "B" },
      { text: " on celestial cues to navigate across thousands of " },
      { text: "miles", label: "C" },
      { text: " during " },
      { text: "their", label: "D" },
      { text: " annual journeys." }
    ],
    answer: 1,
    explanation: {
      rule: "Correlative Pair: The correlative conjunction 'either' must be paired with 'or'.",
      why: "The word 'either' is used, so the second part of the pair must be 'or', not 'nor'.",
      trap: "The word 'nor' sounds like a formal conjunction similar to 'or', but it must only pair with 'neither'.",
      distractors: [
        "The conjunction 'either' correctly initiates the choice between two navigation methods.",
        "",
        "The plural noun 'miles' correctly follows 'thousands of'.",
        "The possessive pronoun 'their' correctly refers back to 'Migratory birds'."
      ],
      corrected: "Migratory birds rely either on the Earth's magnetic field or on celestial cues to navigate across thousands of miles during their annual journeys."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-sup-006",
    section: "written_expression",
    category: "comparative_superlative",
    difficulty: 2,
    segments: [
      { text: "The blue whale is widely considered to be the " },
      { text: "largest", label: "A" },
      { text: " animal " },
      { text: "that", label: "B" },
      { text: " has ever lived " },
      { text: "on", label: "C" },
      { text: " Earth, surpassing even the " },
      { text: "most big", label: "D" },
      { text: " dinosaurs in sheer mass." }
    ],
    answer: 3,
    explanation: {
      rule: "Comparative/Superlative: One-syllable adjectives form the superlative by adding '-est'.",
      why: "The adjective 'big' has one syllable, so its superlative form is 'biggest', not 'most big'.",
      trap: "The structure 'the most + adjective' is used for longer adjectives, which might trick students into thinking it applies to all adjectives.",
      distractors: [
        "The superlative 'largest' correctly uses '-est' for a one-syllable adjective.",
        "The relative pronoun 'that' correctly introduces the restrictive clause modifying 'animal'.",
        "The preposition 'on' is correctly used with 'Earth'.",
        ""
      ],
      corrected: "The blue whale is widely considered to be the largest animal that has ever lived on Earth, surpassing even the biggest dinosaurs in sheer mass."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-rdn-006",
    section: "written_expression",
    category: "redundancy",
    difficulty: 2,
    segments: [
      { text: "In " },
      { text: "modern", label: "A" },
      { text: " economics, inflation is generally defined as a steady, " },
      { text: "continuous", label: "B" },
      { text: " rise in the general level of prices for goods and services " },
      { text: "over", label: "C" },
      { text: " a specific period of " },
      { text: "time", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "Redundancy: Do not use two words with the exact same meaning consecutively unless required for stylistic emphasis.",
      why: "The words 'steady' and 'continuous' mean essentially the same thing in this context; one is redundant.",
      trap: "Using pairs of synonymous adjectives is common in informal speech, making the redundancy harder to spot.",
      distractors: [
        "The adjective 'modern' correctly modifies 'economics'.",
        "",
        "The preposition 'over' correctly indicates the span of a duration.",
        "The phrase 'period of time' is standard phrasing."
      ],
      corrected: "In modern economics, inflation is generally defined as a continuous rise in the general level of prices for goods and services over a specific period of time."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-plu-006",
    section: "written_expression",
    category: "singular_plural_noun",
    difficulty: 2,
    segments: [
      { text: "Many anthropologists believe that the Neanderthals possessed complex " },
      { text: "tool", label: "A" },
      { text: " and weapons, suggesting a level of " },
      { text: "cognitive", label: "B" },
      { text: " sophistication " },
      { text: "comparable", label: "C" },
      { text: " to that of early modern " },
      { text: "humans", label: "D" },
      { text: "." }
    ],
    answer: 0,
    explanation: {
      rule: "Singular/Plural Noun: Nouns connected by 'and' in a list should logically be parallel in number.",
      why: "Since 'weapons' is plural and refers to multiple items possessed by the group, 'tool' should also be plural 'tools'.",
      trap: "The word 'tool' functions fine as a singular noun, but parallel structure in this list demands the plural form.",
      distractors: [
        "",
        "The adjective 'cognitive' correctly modifies 'sophistication'.",
        "The adjective 'comparable' correctly modifies the noun phrase 'level of cognitive sophistication'.",
        "The plural noun 'humans' correctly pairs with the plural 'Neanderthals'."
      ],
      corrected: "Many anthropologists believe that the Neanderthals possessed complex tools and weapons, suggesting a level of cognitive sophistication comparable to that of early modern humans."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-adv-006",
    section: "written_expression",
    category: "adjective_adverb",
    difficulty: 3,
    segments: [
      { text: "The newly developed vaccine has proven " },
      { text: "exceptionally", label: "A" },
      { text: " effective at " },
      { text: "preventing", label: "B" },
      { text: " transmission of the virus, even among " },
      { text: "high", label: "C" },
      { text: " vulnerable populations in " },
      { text: "densely", label: "D" },
      { text: " populated areas." }
    ],
    answer: 2,
    explanation: {
      rule: "Adjective/Adverb: An adverb must be used to modify an adjective.",
      why: "The word modifies the adjective 'vulnerable', so it must be the adverb 'highly', not the adjective 'high'.",
      trap: "The adjective 'high' seems correct because 'high' can sometimes function as an adverb (e.g., 'jump high'), but modifying an adjective requires 'highly'.",
      distractors: [
        "The adverb 'exceptionally' correctly modifies the adjective 'effective'.",
        "The gerund 'preventing' correctly follows the preposition 'at'.",
        "",
        "The adverb 'densely' correctly modifies the participle 'populated'."
      ],
      corrected: "The newly developed vaccine has proven exceptionally effective at preventing transmission of the virus, even among highly vulnerable populations in densely populated areas."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-dng-006",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "Constructed over a period of two decades, " },
      { text: "millions", label: "A" },
      { text: " of tourists " },
      { text: "visit", label: "B" },
      { text: " the Taj Mahal each year to " },
      { text: "admire", label: "C" },
      { text: " its stunning " },
      { text: "marble", label: "D" },
      { text: " architecture." }
    ],
    answer: 0,
    explanation: {
      rule: "Dangling Modifier: An introductory participial phrase must logically modify the subject of the main clause.",
      why: "The phrase 'Constructed over a period of two decades' illogically modifies 'millions of tourists'. It should modify 'the Taj Mahal'.",
      trap: "The main clause is grammatically correct on its own, hiding the mismatch between the modifier and the subject.",
      distractors: [
        "",
        "The plural verb 'visit' correctly agrees with the plural subject 'millions of tourists'.",
        "The base verb 'admire' correctly follows the infinitive marker 'to'.",
        "The noun 'marble' correctly functions as an adjective modifying 'architecture'."
      ],
      corrected: "Constructed over a period of two decades, the Taj Mahal is visited by millions of tourists each year to admire its stunning marble architecture."
    },
    verified: true,
    addedOn: "2026-09-12"
  }
];
