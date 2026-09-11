import type { ErrorItem } from "../../types.ts";

export const items: ErrorItem[] = [
  {
    id: "we-art-001",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 2,
    segments: [
      { text: "Olympus Mons, " },
      { text: "rising", label: "A" },
      { text: " more than twenty kilometers above the " },
      { text: "surrounding", label: "B" },
      { text: " plains, " },
      { text: "has been", label: "C" },
      { text: " dormant for millions of years but is considered " },
      { text: "a largest", label: "D" },
      { text: " volcano in the solar system." }
    ],
    answer: 3,
    explanation: {
      rule: "A superlative adjective uniquely identifies a noun, so it must be preceded by the definite article *the*, not the indefinite article *a*.",
      why: "The phrase *largest volcano* refers to a single, unique extreme, so the determiner must be *the largest*.",
      trap: "The word *a* is very common before adjectives and nouns (*a large volcano*), so reading quickly through the superlative ending makes *a largest* blend in.",
      distractors: [
        "*Rising* correctly introduces a participial phrase modifying Olympus Mons.",
        "*Surrounding* is an adjective correctly describing the plains.",
        "*Has been* is the present perfect tense, correctly showing a state that began in the past and continues today.",
        ""
      ],
      corrected: "Olympus Mons, rising more than twenty kilometers above the surrounding plains, has been dormant for millions of years but is considered the largest volcano in the solar system."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-art-002",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 3,
    segments: [
      { text: "Although " },
      { text: "an evidence", label: "A" },
      { text: " from recent excavations " },
      { text: "suggests", label: "B" },
      { text: " that the settlement was " },
      { text: "abandoned", label: "C" },
      { text: " quickly, researchers who study the region remain uncertain about " },
      { text: "what caused", label: "D" },
      { text: " the sudden collapse." }
    ],
    answer: 0,
    explanation: {
      rule: "Uncountable nouns cannot be preceded by the singular indefinite article *a* or *an*.",
      why: "The noun *evidence* is uncountable in English, so *an evidence* is incorrect. It should be simply *evidence* or *some evidence*.",
      trap: "In many languages, words for *evidence* or *proof* are countable, and it looks like a normal singular noun, making the indefinite article seem natural.",
      distractors: [
        "",
        "*Suggests* correctly agrees with the singular (uncountable) subject *evidence*.",
        "*Abandoned* is the past participle in a correct passive voice construction.",
        "*What caused* correctly opens a noun clause serving as the object of the preposition *about*."
      ],
      corrected: "Although evidence from recent excavations suggests that the settlement was abandoned quickly, researchers who study the region remain uncertain about what caused the sudden collapse."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-art-003",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 3,
    segments: [
      { text: "Because they " },
      { text: "lack", label: "A" },
      { text: " chlorophyll, fungi must absorb " },
      { text: "a nourishment", label: "B" },
      { text: " from organic matter in their environment, often " },
      { text: "forming", label: "C" },
      { text: " symbiotic " },
      { text: "relationships", label: "D" },
      { text: " with the roots of nearby trees." }
    ],
    answer: 1,
    explanation: {
      rule: "An uncountable noun representing a generalized substance or concept cannot take the indefinite article *a*.",
      why: "The word *nourishment* is uncountable, so it cannot be counted with *a*. The article must be removed to read *absorb nourishment*.",
      trap: "The noun follows a transitive verb and an article provides a familiar rhythm, masking the fact that the noun itself is uncountable.",
      distractors: [
        "*Lack* correctly agrees with the plural pronoun *they*.",
        "",
        "*Forming* is a participle that correctly reduces a coordinate clause (*and they often form*).",
        "*Relationships* is a plural countable noun correctly functioning as the object of *forming*."
      ],
      corrected: "Because they lack chlorophyll, fungi must absorb nourishment from organic matter in their environment, often forming symbiotic relationships with the roots of nearby trees."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-art-004",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 2,
    segments: [
      { text: "Stalactites, " },
      { text: "which hang", label: "A" },
      { text: " from the ceilings of limestone caves, " },
      { text: "are formed", label: "B" },
      { text: " when water " },
      { text: "containing", label: "C" },
      { text: " dissolved minerals drips slowly from fractures in " },
      { text: "these type", label: "D" },
      { text: " of porous rock." }
    ],
    answer: 3,
    explanation: {
      rule: "A demonstrative determiner must match the number of the noun it modifies: *this* and *that* for singular nouns, *these* and *those* for plural nouns.",
      why: "The noun *type* is singular, but the determiner *these* is plural. It must be corrected to *this type*.",
      trap: "The plural word *fractures* comes just before the phrase, and *rock* conveys a plural or collective sense, pulling the reader toward a plural determiner.",
      distractors: [
        "*Which hang* is a correct relative clause describing plural *stalactites*.",
        "*Are formed* correctly uses the passive voice to describe how stalactites are created.",
        "*Containing* is a participle correctly reducing the phrase *that contains*.",
        ""
      ],
      corrected: "Stalactites, which hang from the ceilings of limestone caves, are formed when water containing dissolved minerals drips slowly from fractures in this type of porous rock."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-art-005",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 2,
    segments: [
      { text: "By " },
      { text: "capturing", label: "A" },
      { text: " motion that was " },
      { text: "invisible", label: "B" },
      { text: " to the naked eye, Eadweard Muybridge's famous sequence of photographs provided " },
      { text: "a unprecedented", label: "C" },
      { text: " look at " },
      { text: "how", label: "D" },
      { text: " horses gallop." }
    ],
    answer: 2,
    explanation: {
      rule: "The indefinite article must be *an* when the following word begins with a vowel sound.",
      why: "The word *unprecedented* begins with a short *u* vowel sound, so it requires *an unprecedented* instead of *a unprecedented*.",
      trap: "Test takers may read visually rather than auditorily, or they might unconsciously auto-correct the article while scanning the sentence.",
      distractors: [
        "*Capturing* is a gerund correctly acting as the object of the preposition *by*.",
        "*Invisible* correctly functions as a predicate adjective following *was*.",
        "",
        "*How* correctly introduces a noun clause that acts as the object of the preposition *at*."
      ],
      corrected: "By capturing motion that was invisible to the naked eye, Eadweard Muybridge's famous sequence of photographs provided an unprecedented look at how horses gallop."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cor-001",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 3,
    segments: [
      { text: "The sudden " },
      { text: "increase in", label: "A" },
      { text: " import tariffs " },
      { text: "affected", label: "B" },
      { text: " not only the large manufacturing firms " },
      { text: "that relied", label: "C" },
      { text: " on foreign materials " },
      { text: "and also", label: "D" },
      { text: " the smaller retail businesses." }
    ],
    answer: 3,
    explanation: {
      rule: "The correlative conjunction *not only* must be paired exactly with *but also*.",
      why: "The first half of the pair is *not only*, so the second half must be *but also*, not *and also*.",
      trap: "The phrase *and also* carries the same additive meaning as *but also* and sounds perfectly natural in casual speech, hiding the formal structural error.",
      distractors: [
        "*Increase in* correctly uses the preposition *in* to indicate what rose.",
        "*Affected* is the main verb in the simple past tense.",
        "*That relied* correctly introduces a relative clause modifying the firms.",
        ""
      ],
      corrected: "The sudden increase in import tariffs affected not only the large manufacturing firms that relied on foreign materials but also the smaller retail businesses."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cor-002",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 3,
    segments: [
      { text: "In his " },
      { text: "influential essays", label: "A" },
      { text: ", Ralph Waldo Emerson argued that a true scholar must rely either on personal intuition " },
      { text: "nor", label: "B" },
      { text: " on " },
      { text: "direct observation", label: "C" },
      { text: " of nature " },
      { text: "rather than", label: "D" },
      { text: " on traditional authority." }
    ],
    answer: 1,
    explanation: {
      rule: "The correlative conjunction *either* must be paired with *or*, while *neither* pairs with *nor*.",
      why: "The sentence starts the pair with *either*, so the second half must be *or*, not *nor*.",
      trap: "Because *nor* is a valid conjunction for *neither*, it can slip by readers who lose track of whether the pairing started with a negative or positive word.",
      distractors: [
        "*Influential essays* correctly positions an adjective before a plural noun.",
        "",
        "*Direct observation* is a correct noun phrase acting as the object of the preposition *on*.",
        "*Rather than* correctly sets up a contrast with the previously mentioned sources of reliance."
      ],
      corrected: "In his influential essays, Ralph Waldo Emerson argued that a true scholar must rely either on personal intuition or on direct observation of nature rather than on traditional authority."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cor-003",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 3,
    segments: [
      { text: "The " },
      { text: "complex", label: "A" },
      { text: " root system of the mesquite tree allows it both to extract water from " },
      { text: "deep underground", label: "B" },
      { text: " aquifers and " },
      { text: "surviving", label: "C" },
      { text: " prolonged droughts in the desert " },
      { text: "environment", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Elements joined by a correlative pair like *both...and* must have parallel grammatical structures.",
      why: "The first part of the pair is an infinitive (*to extract*). The second part must also be an infinitive (*to survive*), but it is a gerund (*surviving*).",
      trap: "The gerund *surviving* sounds like an ongoing condition and is a valid word, but it structurally breaks the mandatory parallel frame set up by *both*.",
      distractors: [
        "*Complex* correctly modifies the noun phrase *root system*.",
        "*Deep underground* correctly modifies the noun *aquifers*.",
        "",
        "*Environment* correctly acts as the object of the preposition *in*."
      ],
      corrected: "The complex root system of the mesquite tree allows it both to extract water from deep underground aquifers and to survive prolonged droughts in the desert environment."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-cor-004",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 2,
    segments: [
      { text: "Because the atmospheric " },
      { text: "interference", label: "A" },
      { text: " is too great, neither optical telescopes " },
      { text: "or", label: "B" },
      { text: " radio arrays " },
      { text: "located", label: "C" },
      { text: " at sea level can match the clarity of instruments " },
      { text: "placed", label: "D" },
      { text: " in orbit." }
    ],
    answer: 1,
    explanation: {
      rule: "The correlative conjunction *neither* must always be paired with *nor*.",
      why: "The phrase begins with *neither*, so the conjunction connecting the two subjects must be *nor*, not *or*.",
      trap: "The word *or* is the standard alternative conjunction, and since *neither* already establishes the negative meaning, adding *or* feels logically sufficient to many speakers.",
      distractors: [
        "*Interference* is a correct singular noun serving as the subject of the dependent clause.",
        "",
        "*Located* is a reduced participle describing where the arrays are.",
        "*Placed* is a past participle modifying *instruments*."
      ],
      corrected: "Because the atmospheric interference is too great, neither optical telescopes nor radio arrays located at sea level can match the clarity of instruments placed in orbit."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rdn-001",
    section: "written_expression",
    category: "redundancy",
    difficulty: 2,
    segments: [
      { text: "" },
      { text: "To draft", label: "A" },
      { text: " the new federal constitution, the delegates decided to review " },
      { text: "various", label: "B" },
      { text: " state charters that had already been " },
      { text: "successfully implemented", label: "C" },
      { text: " and " },
      { text: "combine together", label: "D" },
      { text: " the best elements." }
    ],
    answer: 3,
    explanation: {
      rule: "Formal English avoids redundant adverbs that repeat the inherent meaning of the verb.",
      why: "The verb *combine* already means to join things together, making the word *together* redundant. The phrase should simply be *combine the best elements*.",
      trap: "The phrase *combine together* is an extremely common idiom in spoken English, so it does not sound wrong to the ear.",
      distractors: [
        "*To draft* correctly uses an infinitive to express the purpose of the delegates' actions.",
        "*Various* is a standard adjective describing the multiple state charters.",
        "*successfully implemented* is a correct passive phrase modified by an adverb.",
        ""
      ],
      corrected: "To draft the new federal constitution, the delegates decided to review various state charters that had already been successfully implemented and combine the best elements."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rdn-002",
    section: "written_expression",
    category: "redundancy",
    difficulty: 2,
    segments: [
      { text: "The theory of plate tectonics " },
      { text: "eventually provided", label: "A" },
      { text: " a " },
      { text: "comprehensive", label: "B" },
      { text: " explanation for the global " },
      { text: "distribution of", label: "C" },
      { text: " earthquakes, although it " },
      { text: "first began", label: "D" },
      { text: " as a controversial hypothesis." }
    ],
    answer: 3,
    explanation: {
      rule: "Words that repeat the same concept are redundant and should be avoided in formal writing.",
      why: "The verb *began* indicates the start or first stage of something, so adding the adverb *first* before it is unnecessarily repetitive.",
      trap: "People frequently say *first began* or *first started* in conversation for emphasis, making the repetition difficult to notice.",
      distractors: [
        "*Eventually provided* correctly pairs an adverb of time with a past-tense verb.",
        "*Comprehensive* correctly modifies the noun *explanation*.",
        "*Distribution of* correctly links the noun *distribution* with the thing being distributed.",
        ""
      ],
      corrected: "The theory of plate tectonics eventually provided a comprehensive explanation for the global distribution of earthquakes, although it began as a controversial hypothesis."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rdn-003",
    section: "written_expression",
    category: "redundancy",
    difficulty: 2,
    segments: [
      { text: "" },
      { text: "To reach", label: "A" },
      { text: " their summer breeding grounds, Arctic terns undertake a massive migration " },
      { text: "annually each year", label: "B" },
      { text: ", " },
      { text: "flying", label: "C" },
      { text: " from the shores of Antarctica " },
      { text: "all the way", label: "D" },
      { text: " to the northern tundra." }
    ],
    answer: 1,
    explanation: {
      rule: "Do not use two time expressions side by side if they mean the exact same thing.",
      why: "The word *annually* means *each year*. Using both together is a blatant redundancy; one of them must be deleted.",
      trap: "Both *annually* and *each year* are perfectly correct time markers on their own, and test takers might read them as a reinforcing pair rather than a grammatical error.",
      distractors: [
        "*To reach* correctly introduces an infinitive of purpose.",
        "",
        "*Flying* is a present participle correctly introducing a phrase describing the migration.",
        "*All the way* is an acceptable idiomatic phrase emphasizing distance."
      ],
      corrected: "To reach their summer breeding grounds, Arctic terns undertake a massive migration annually, flying from the shores of Antarctica all the way to the northern tundra."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rdn-004",
    section: "written_expression",
    category: "redundancy",
    difficulty: 3,
    segments: [
      { text: "Although the central bank attempted " },
      { text: "to stimulate", label: "A" },
      { text: " the economy by " },
      { text: "lowering", label: "B" },
      { text: " interest rates, the policy was not " },
      { text: "sufficient enough", label: "C" },
      { text: " to overcome the " },
      { text: "effects", label: "D" },
      { text: " of the severe recession." }
    ],
    answer: 2,
    explanation: {
      rule: "Adjectives and adverbs that express the identical degree or limit should not be combined.",
      why: "The adjective *sufficient* means *enough*. Combining them into *sufficient enough* is redundant; the phrase should just be *sufficient*.",
      trap: "The structure *adjective + enough* (e.g., *strong enough*, *fast enough*) is a standard grammatical pattern, making *sufficient enough* visually fit the mold despite the logical duplication.",
      distractors: [
        "*To stimulate* correctly acts as the infinitive object of *attempted*.",
        "*Lowering* is a gerund correctly acting as the object of the preposition *by*.",
        "",
        "*Effects* is a plural countable noun correctly functioning as the object of *overcome*."
      ],
      corrected: "Although the central bank attempted to stimulate the economy by lowering interest rates, the policy was not sufficient to overcome the effects of the severe recession."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-dng-001",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "" },
      { text: "Discovering", label: "A" },
      { text: " in the arid badlands of South Dakota, the massive " },
      { text: "fossilized", label: "B" },
      { text: " bones " },
      { text: "were carefully excavated", label: "C" },
      { text: " by paleontologists " },
      { text: "who recognized", label: "D" },
      { text: " them as a new species of dinosaur." }
    ],
    answer: 0,
    explanation: {
      rule: "An introductory participial phrase must logically modify the subject of the main clause. A present participle (-ing) means the subject performed the action.",
      why: "The subject *the massive fossilized bones* cannot discover anything; they were discovered. The participle must be the passive *Discovered*.",
      trap: "The sentence contains the logical agents (*paleontologists*) later on, allowing the reader to assemble the story without realizing the introductory phrase attaches to the wrong noun.",
      distractors: [
        "",
        "*Fossilized* correctly acts as an adjective modifying *bones*.",
        "*Were carefully excavated* is the correct passive main verb phrase for the bones.",
        "*Who recognized* correctly introduces a relative clause modifying the paleontologists."
      ],
      corrected: "Discovered in the arid badlands of South Dakota, the massive fossilized bones were carefully excavated by paleontologists who recognized them as a new species of dinosaur."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-dng-002",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "" },
      { text: "Having been written", label: "A" },
      { text: " mostly at night, Edgar Allan Poe found the quiet darkness of his chamber " },
      { text: "essential", label: "B" },
      { text: " " },
      { text: "for composing", label: "C" },
      { text: " the chilling stories " },
      { text: "that made", label: "D" },
      { text: " him famous." }
    ],
    answer: 0,
    explanation: {
      rule: "An introductory phrase must modify the main subject that directly follows it. A passive participial phrase means the subject received the action.",
      why: "The main subject is *Edgar Allan Poe*. Poe was not written at night; he did the writing. The active phrase *Writing mostly at night* is required.",
      trap: "The phrase perfectly describes the *stories* mentioned later in the sentence. A reader focusing on the overall meaning of the sentence easily skips over the strict structural attachment.",
      distractors: [
        "",
        "*Essential* is an object complement adjective modifying *the quiet darkness*.",
        "*For composing* correctly uses a preposition and a gerund to express purpose.",
        "*That made* correctly introduces a relative clause describing the stories."
      ],
      corrected: "Writing mostly at night, Edgar Allan Poe found the quiet darkness of his chamber essential for composing the chilling stories that made him famous."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-dng-003",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "" },
      { text: "Observed", label: "A" },
      { text: " through a high-powered telescope, astronomers can " },
      { text: "track", label: "B" },
      { text: " the erratic path of a comet " },
      { text: "as", label: "C" },
      { text: " it approaches the sun and begins " },
      { text: "to shed", label: "D" },
      { text: " its icy outer layers." }
    ],
    answer: 0,
    explanation: {
      rule: "A past participle (-ed/-en) at the beginning of a sentence means the subject of the main clause receives the action.",
      why: "The subject *astronomers* are not the ones being observed; they are doing the observing. The active present participle *Observing* is needed.",
      trap: "The phrase *observed through a telescope* is highly familiar and logically applies to the *comet*, but grammatically it attaches to the immediately following subject, *astronomers*.",
      distractors: [
        "",
        "*Track* is correctly in its base form after the modal *can*.",
        "*As* is a subordinate conjunction correctly indicating simultaneous action.",
        "*To shed* is an infinitive correctly acting as the object of *begins*."
      ],
      corrected: "Observing through a high-powered telescope, astronomers can track the erratic path of a comet as it approaches the sun and begins to shed its icy outer layers."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-dng-004",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "" },
      { text: "Used", label: "A" },
      { text: " primarily " },
      { text: "to construct", label: "B" },
      { text: " monumental public buildings, the ancient Romans " },
      { text: "mixed", label: "C" },
      { text: " volcanic ash with lime and seawater " },
      { text: "to create", label: "D" },
      { text: " an incredibly durable form of concrete." }
    ],
    answer: 0,
    explanation: {
      rule: "When a sentence opens with a participle, the noun performing or receiving that action must be the subject immediately following the comma.",
      why: "The Romans were not used to construct buildings; they used the concrete. The active participle *Using* (e.g., *Using it primarily to construct...*) or a restructured sentence is required.",
      trap: "The passive phrase *used primarily to construct* flawlessly describes the concrete mentioned at the end of the sentence, distracting the reader from the dangling grammatical link to the Romans.",
      distractors: [
        "",
        "*To construct* is a correct infinitive expressing purpose.",
        "*Mixed* is the main verb, in the simple past, matching the historical context.",
        "*To create* correctly explains the purpose behind mixing the ingredients."
      ],
      corrected: "Using it primarily to construct monumental public buildings, the ancient Romans mixed volcanic ash with lime and seawater to create an incredibly durable form of concrete."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rpr-002",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 2,
    segments: [
      { text: "The double-helix structure of DNA, " },
      { text: "which", label: "A" },
      { text: " was " },
      { text: "definitively modeled", label: "B" },
      { text: " by researchers in the 1950s, " },
      { text: "it", label: "C" },
      { text: " serves as the molecular blueprint for all " },
      { text: "living", label: "D" },
      { text: " organisms." }
    ],
    answer: 2,
    explanation: {
      rule: "A subject cannot be repeated by a pronoun in the same clause. The subject connects directly to its verb, no matter how many modifying words separate them.",
      why: "The subject is *The double-helix structure*, and its verb is *serves*. The pronoun *it* is a redundant second subject and must be deleted.",
      trap: "The long relative clause creates distance between the subject and the verb, making a pronoun feel like a natural way to resume the main thought.",
      distractors: [
        "*Which* correctly serves as the relative pronoun introducing the clause about DNA.",
        "*Definitively modeled* is a correct passive verb phrase with an adverb.",
        "",
        "*Living* is a present participle functioning properly as an adjective modifying *organisms*."
      ],
      corrected: "The double-helix structure of DNA, which was definitively modeled by researchers in the 1950s, serves as the molecular blueprint for all living organisms."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rpr-003",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 3,
    segments: [
      { text: "The Erie Canal, " },
      { text: "completed", label: "A" },
      { text: " in 1825, provided a navigable water route " },
      { text: "that", label: "B" },
      { text: " merchants " },
      { text: "used it", label: "C" },
      { text: " " },
      { text: "to transport", label: "D" },
      { text: " goods from the Atlantic Ocean to the Great Lakes." }
    ],
    answer: 2,
    explanation: {
      rule: "In a relative clause, the relative pronoun (such as *that*) acts as the object of the verb. Adding a personal pronoun as an object creates redundancy.",
      why: "The relative pronoun *that* refers to the *route* and already acts as the object of *used*. The pronoun *it* must be deleted to leave *that merchants used*.",
      trap: "In spoken language, speakers often leave in the pronoun as a placeholder, making *used it* sound conversationally normal.",
      distractors: [
        "*Completed* is a past participle correctly introducing a reduced relative clause.",
        "*That* correctly introduces the relative clause modifying *water route*.",
        "",
        "*To transport* is an infinitive expressing the purpose of using the canal."
      ],
      corrected: "The Erie Canal, completed in 1825, provided a navigable water route that merchants used to transport goods from the Atlantic Ocean to the Great Lakes."
    },
    verified: true,
    addedOn: "2026-09-11"
  },
  {
    id: "we-rpr-004",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 3,
    segments: [
      { text: "The rare metallic deposits " },
      { text: "that accumulate", label: "A" },
      { text: " around deep-ocean hydrothermal vents " },
      { text: "they", label: "B" },
      { text: " are " },
      { text: "currently being", label: "C" },
      { text: " investigated by geologists " },
      { text: "as", label: "D" },
      { text: " a potential source of industrial resources." }
    ],
    answer: 1,
    explanation: {
      rule: "Once a main clause has a subject, a pronoun cannot be inserted right before the verb to duplicate that subject.",
      why: "The main subject is *deposits*, and the verb phrase is *are currently being investigated*. The pronoun *they* repeats the subject and must be removed.",
      trap: "The subject is separated from the verb by an eight-word relative clause. Re-introducing the subject with a pronoun is a common spoken restart.",
      distractors: [
        "*That accumulate* correctly serves as the verb phrase inside the relative clause.",
        "",
        "*Currently being* is part of a correct present continuous passive verb structure.",
        "*As* correctly introduces the role or capacity of the deposits."
      ],
      corrected: "The rare metallic deposits that accumulate around deep-ocean hydrothermal vents are currently being investigated by geologists as a potential source of industrial resources."
    },
    verified: true,
    addedOn: "2026-09-11"
  }
];
