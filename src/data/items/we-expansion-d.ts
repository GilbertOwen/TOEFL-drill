import type { ErrorItem } from "../../types.ts";

export const items: ErrorItem[] = [
  {
    id: "we-sva-005",
    section: "written_expression",
    category: "subject_verb_agreement",
    difficulty: 3,
    segments: [
      { text: "The widespread " },
      { text: "bleaching", label: "A" },
      { text: " of coral reefs, which " },
      { text: "provide", label: "B" },
      { text: " a crucial habitat for numerous marine species, " },
      { text: "have", label: "C" },
      { text: " alarmed oceanographers worldwide " },
      { text: "over the past", label: "D" },
      { text: " decade." }
    ],
    answer: 2,
    explanation: {
      rule: "Subject-verb agreement requires the main verb to agree with its true subject, not with intervening plural nouns.",
      why: "The true subject 'bleaching' is singular, so the main verb must be 'has', not 'have'.",
      trap: "The plural verb 'have' appears correct to someone who incorrectly links it to the immediately preceding plural nouns 'reefs' or 'species'.",
      distractors: [
        "The noun 'bleaching' is correctly formed and functions as the head of the noun phrase.",
        "The plural verb 'provide' correctly agrees with the plural relative pronoun 'which', referring to 'reefs'.",
        "",
        "The prepositional phrase 'over the past' is idiomatic and correctly introduces a duration of time."
      ],
      corrected: "The widespread bleaching of coral reefs, which provide a crucial habitat for numerous marine species, has alarmed oceanographers worldwide over the past decade."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-tns-007",
    section: "written_expression",
    category: "verb_tense",
    difficulty: 2,
    segments: [
      { text: "Before the " },
      { text: "completion", label: "A" },
      { text: " of the Transcontinental Railroad in 1869, settlers " },
      { text: "travel", label: "B" },
      { text: " for months across rugged terrain, " },
      { text: "facing", label: "C" },
      { text: " severe weather and scarce resources " },
      { text: "along", label: "D" },
      { text: " the journey." }
    ],
    answer: 1,
    explanation: {
      rule: "Verb tense must align with the time markers in the sentence.",
      why: "The phrase 'in 1869' and the context of a historical event dictate the use of the simple past tense 'traveled' instead of the present 'travel'.",
      trap: "The base form 'travel' might tempt a reader who fails to connect the main clause verb to the past time marker at the beginning of the sentence.",
      distractors: [
        "The noun 'completion' correctly describes the finishing of the railroad project.",
        "",
        "The present participle 'facing' correctly introduces a reduced adverbial clause modifying the settlers' actions.",
        "The preposition 'along' correctly indicates location moving on a path during the journey."
      ],
      corrected: "Before the completion of the Transcontinental Railroad in 1869, settlers traveled for months across rugged terrain, facing severe weather and scarce resources along the journey."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-vfm-005",
    section: "written_expression",
    category: "verb_form",
    difficulty: 2,
    segments: [
      { text: "Although the central bank has " },
      { text: "taken", label: "A" },
      { text: " aggressive measures to curb inflation, the prices of " },
      { text: "essential", label: "B" },
      { text: " goods have " },
      { text: "stubbornly", label: "C" },
      { text: " " },
      { text: "remaining", label: "D" },
      { text: " high." }
    ],
    answer: 3,
    explanation: {
      rule: "The auxiliary verb 'have' requires the past participle form of the main verb to create the present perfect tense.",
      why: "The auxiliary 'have' must be followed by the past participle 'remained', not the present participle 'remaining'.",
      trap: "The progressive '-ing' form sounds natural in isolation to describe an ongoing state, tricking those who overlook the auxiliary 'have'.",
      distractors: [
        "The past participle 'taken' correctly follows the auxiliary 'has'.",
        "The adjective 'essential' correctly modifies the noun 'goods'.",
        "The adverb 'stubbornly' correctly modifies the main verb.",
        ""
      ],
      corrected: "Although the central bank has taken aggressive measures to curb inflation, the prices of essential goods have stubbornly remained high."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-pas-005",
    section: "written_expression",
    category: "passive_voice",
    difficulty: 3,
    segments: [
      { text: "The rapid decay that " },
      { text: "typically", label: "A" },
      { text: " affects exposed " },
      { text: "parchment", label: "B" },
      { text: " was " },
      { text: "avoided", label: "C" },
      { text: " because the ancient manuscripts were deep within a sealed cave when " },
      { text: "discovering", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "A reduced adverbial clause requires a past participle when its implied subject receives the action.",
      why: "The manuscripts did not discover anything; they were discovered, so the passive past participle 'discovered' is required.",
      trap: "The progressive '-ing' form 'discovering' is a correctly formed active participle, confusing readers who miss the passive relationship with 'manuscripts'.",
      distractors: [
        "The adverb 'typically' is placed correctly to modify the verb 'affects'.",
        "The uncountable noun 'parchment' is correctly used without an article.",
        "The passive verb 'was avoided' correctly agrees with the singular subject 'decay'.",
        ""
      ],
      corrected: "The rapid decay that typically affects exposed parchment was avoided because the ancient manuscripts were deep within a sealed cave when discovered."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-pag-005",
    section: "written_expression",
    category: "pronoun_agreement",
    difficulty: 2,
    segments: [
      { text: "During the 19th century, the expansion of the American railway network facilitated " },
      { text: "industrial", label: "A" },
      { text: " growth, allowing the nation to transport " },
      { text: "their", label: "B" },
      { text: " raw materials " },
      { text: "efficiently", label: "C" },
      { text: " across vast " },
      { text: "distances", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "A pronoun must agree in number with the antecedent noun it refers to.",
      why: "The pronoun refers to the singular noun 'nation', so it must be the singular possessive 'its', not the plural 'their'.",
      trap: "The plural pronoun 'their' seems natural if one mentally associates it with the people or businesses of the nation, rather than the singular grammatical antecedent.",
      distractors: [
        "The adjective 'industrial' appropriately modifies the noun 'growth'.",
        "",
        "The adverb 'efficiently' correctly modifies the verb 'transport'.",
        "The plural noun 'distances' is correctly used after the adjective 'vast'."
      ],
      corrected: "During the 19th century, the expansion of the American railway network facilitated industrial growth, allowing the nation to transport its raw materials efficiently across vast distances."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-prf-007",
    section: "written_expression",
    category: "pronoun_reference",
    difficulty: 3,
    segments: [
      { text: "As the solar wind interacts with the Earth's magnetic field, " },
      { text: "it", label: "A" },
      { text: " channels charged particles toward the poles, where " },
      { text: "they", label: "B" },
      { text: " collide with atmospheric gases to produce " },
      { text: "brilliant", label: "C" },
      { text: " auroras visible in " },
      { text: "them", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "A pronoun must refer logically to a specific noun present in the sentence.",
      why: "The pronoun 'them' has no logical plural antecedent to serve as a location; it should be replaced by a specific noun like 'the sky'.",
      trap: "The plural 'them' might superficially seem to refer to 'poles' or 'gases', but auroras are not visible 'in' gases, causing a failure of logical reference.",
      distractors: [
        "The singular pronoun 'it' correctly refers to the Earth's magnetic field.",
        "The plural pronoun 'they' correctly refers to the 'charged particles'.",
        "The adjective 'brilliant' correctly modifies the plural noun 'auroras'.",
        ""
      ],
      corrected: "As the solar wind interacts with the Earth's magnetic field, it channels charged particles toward the poles, where they collide with atmospheric gases to produce brilliant auroras visible in the sky."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-rpr-005",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 3,
    segments: [
      { text: "The migratory patterns of monarch butterflies, which span " },
      { text: "thousands", label: "A" },
      { text: " of miles across North America, " },
      { text: "they", label: "B" },
      { text: " rely on complex navigation mechanisms " },
      { text: "guided", label: "C" },
      { text: " by the position of " },
      { text: "the sun", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "A subject that is already named must not be repeated by a pronoun in the same clause.",
      why: "The main subject 'migratory patterns' is redundantly repeated by the pronoun 'they' before the main verb 'rely'.",
      trap: "The pronoun 'they' is tempting because the long relative clause separates the main subject from its verb, making the sentence feel as if it needs a new subject.",
      distractors: [
        "The plural 'thousands' correctly forms a quantitative phrase with 'of miles'.",
        "",
        "The reduced participle 'guided' correctly modifies 'mechanisms'.",
        "The noun phrase 'the sun' correctly takes the definite article as a unique entity."
      ],
      corrected: "The migratory patterns of monarch butterflies, which span thousands of miles across North America, rely on complex navigation mechanisms guided by the position of the sun."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-rpr-006",
    section: "written_expression",
    category: "redundant_pronoun",
    difficulty: 2,
    segments: [
      { text: "The cost of " },
      { text: "reproducing", label: "A" },
      { text: " texts for the " },
      { text: "general", label: "B" },
      { text: " public was " },
      { text: "drastically", label: "C" },
      { text: " reduced by the revolutionary printing press that Johannes Gutenberg invented " },
      { text: "it", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "A relative pronoun ('that') already acts as the object in its relative clause, so an additional object pronoun is redundant.",
      why: "The pronoun 'it' is redundant because the relative pronoun 'that' already functions as the object of 'invented'.",
      trap: "The object pronoun 'it' feels natural in a simple clause ('Gutenberg invented it'), deceiving readers who forget it is embedded in a relative clause.",
      distractors: [
        "The gerund 'reproducing' correctly serves as the object of the preposition 'of'.",
        "The adjective 'general' correctly modifies the noun 'public'.",
        "The adverb 'drastically' is correctly used to modify the verb 'reduced'.",
        ""
      ],
      corrected: "The cost of reproducing texts for the general public was drastically reduced by the revolutionary printing press that Johannes Gutenberg invented."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-wfm-005",
    section: "written_expression",
    category: "word_form",
    difficulty: 1,
    segments: [
      { text: "Volcanic eruptions release massive amounts of ash into the atmosphere, causing " },
      { text: "significant", label: "A" },
      { text: " disruptions to global climate patterns and endangering the " },
      { text: "survive", label: "B" },
      { text: " of " },
      { text: "local", label: "C" },
      { text: " flora and " },
      { text: "fauna", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "A determiner like 'the' must be followed by a noun, not a verb.",
      why: "The word slot after 'the' requires the noun form 'survival', not the verb form 'survive'.",
      trap: "The verb 'survive' shares a root with the noun, tricking readers who focus on the meaning rather than the grammatical role required by 'the'.",
      distractors: [
        "The adjective 'significant' correctly modifies the plural noun 'disruptions'.",
        "",
        "The adjective 'local' correctly modifies the compound noun phrase 'flora and fauna'.",
        "The noun 'fauna' is correctly paired with 'flora' to refer to animal life."
      ],
      corrected: "Volcanic eruptions release massive amounts of ash into the atmosphere, causing significant disruptions to global climate patterns and endangering the survival of local flora and fauna."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-wfm-006",
    section: "written_expression",
    category: "word_form",
    difficulty: 3,
    segments: [
      { text: "In " },
      { text: "contemporary", label: "A" },
      { text: " architecture, the aesthetic " },
      { text: "appeal", label: "B" },
      { text: " of a skyscraper's exterior facade is just as " },
      { text: "vital", label: "C" },
      { text: " as its structural " },
      { text: "integrate", label: "D" },
      { text: "." }
    ],
    answer: 3,
    explanation: {
      rule: "An adjective modifying a core argument must precede a noun.",
      why: "The adjective 'structural' must modify the noun 'integrity', not the verb form 'integrate'.",
      trap: "The word 'integrate' sounds academic and is from the correct word family, masking its incorrect part of speech.",
      distractors: [
        "The adjective 'contemporary' correctly modifies 'architecture'.",
        "The noun 'appeal' correctly serves as the subject of the clause.",
        "The adjective 'vital' correctly follows the linking phrase 'is just as'.",
        ""
      ],
      corrected: "In contemporary architecture, the aesthetic appeal of a skyscraper's exterior facade is just as vital as its structural integrity."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-art-006",
    section: "written_expression",
    category: "article_determiner",
    difficulty: 2,
    segments: [
      { text: "Because " },
      { text: "the", label: "A" },
      { text: " deep ocean trenches remain largely unexplored, marine biologists frequently discover " },
      { text: "a", label: "B" },
      { text: " unusual organism that " },
      { text: "has", label: "C" },
      { text: " adapted to extreme pressure and " },
      { text: "darkness", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "The indefinite article 'an' precedes words starting with a vowel sound, while 'a' precedes consonant sounds.",
      why: "The adjective 'unusual' begins with a vowel sound, so it requires the article 'an', not 'a'.",
      trap: "The word 'unusual' starts with a 'u', which sometimes makes a consonant sound (like 'university'), tricking a reader who focuses on spelling rather than pronunciation.",
      distractors: [
        "The definite article 'the' correctly refers to specific known geographical features.",
        "",
        "The singular verb 'has' correctly agrees with the singular relative pronoun 'that', which refers to 'organism'.",
        "The abstract noun 'darkness' correctly requires no article in this general context."
      ],
      corrected: "Because the deep ocean trenches remain largely unexplored, marine biologists frequently discover an unusual organism that has adapted to extreme pressure and darkness."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-cnt-005",
    section: "written_expression",
    category: "countability_quantifier",
    difficulty: 2,
    segments: [
      { text: "Scientists have found that the new solar panels are " },
      { text: "significantly", label: "A" },
      { text: " more " },
      { text: "efficient", label: "B" },
      { text: " than " },
      { text: "older", label: "C" },
      { text: " models, despite an influx of funding that yielded " },
      { text: "fewer", label: "D" },
      { text: " evidence." }
    ],
    answer: 3,
    explanation: {
      rule: "Quantifiers must match the countability of the noun: 'fewer' is for countable plurals, and 'less' is for uncountable nouns.",
      why: "The noun 'evidence' is uncountable in English and requires the quantifier 'less', not 'fewer'.",
      trap: "The concept of 'evidence' can be pluralized in some other languages or everyday logic, making 'fewer' seem acceptable.",
      distractors: [
        "The adverb 'significantly' correctly modifies the comparative adjective phrase.",
        "The adjective 'efficient' correctly pairs with 'more' to form a comparative.",
        "The comparative adjective 'older' correctly contrasts with the 'new' panels.",
        ""
      ],
      corrected: "Scientists have found that the new solar panels are significantly more efficient than older models, despite an influx of funding that yielded less evidence."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-prp-005",
    section: "written_expression",
    category: "preposition",
    difficulty: 3,
    segments: [
      { text: "Fundamentally " },
      { text: "shaping", label: "A" },
      { text: " literature and the arts " },
      { text: "for", label: "B" },
      { text: " generations to come, the Harlem Renaissance fostered a profound pride " },
      { text: "of", label: "C" },
      { text: " African American " },
      { text: "culture", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Many nouns require fixed prepositions to link them to their objects.",
      why: "The noun 'pride' takes the preposition 'in' (pride in something), not 'of'.",
      trap: "The preposition 'of' frequently links nouns in genitive constructions (e.g., 'love of culture'), making it sound plausible to the ear.",
      distractors: [
        "The present participle 'shaping' correctly introduces a participial phrase.",
        "The preposition 'for' correctly indicates duration or target period.",
        "",
        "The noun 'culture' correctly acts as the object of the preposition."
      ],
      corrected: "Fundamentally shaping literature and the arts for generations to come, the Harlem Renaissance fostered a profound pride in African American culture."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-prp-006",
    section: "written_expression",
    category: "preposition",
    difficulty: 2,
    segments: [
      { text: "To " },
      { text: "stimulate", label: "A" },
      { text: " consumer spending and " },
      { text: "restore", label: "B" },
      { text: " confidence in the " },
      { text: "financial", label: "C" },
      { text: " markets, policymakers debated " },
      { text: "about", label: "D" },
      { text: " the most effective strategies." }
    ],
    answer: 3,
    explanation: {
      rule: "Transitive verbs take direct objects without needing a preposition in between.",
      why: "The verb 'debate' is transitive when discussing a topic and takes a direct object, so the preposition 'about' is redundant and incorrect.",
      trap: "The phrase 'debated about' mimics verbs like 'talked about' or 'argued about', leading readers to accept the intrusive preposition.",
      distractors: [
        "The infinitive verb 'stimulate' correctly indicates purpose.",
        "The base verb 'restore' correctly parallels 'stimulate' after the 'To'.",
        "The adjective 'financial' correctly modifies 'markets'.",
        ""
      ],
      corrected: "To stimulate consumer spending and restore confidence in the financial markets, policymakers debated the most effective strategies."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-cor-005",
    section: "written_expression",
    category: "correlative_pair",
    difficulty: 3,
    segments: [
      { text: "Early proponents of abstract expressionism " },
      { text: "believed", label: "A" },
      { text: " that art should not only convey pure emotion " },
      { text: "and", label: "B" },
      { text: " also reject the rigid conventions " },
      { text: "established", label: "C" },
      { text: " by traditional European " },
      { text: "academies", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "Correlative conjunctions must be used in fixed pairs without substitution.",
      why: "The conjunction 'not only' must be paired with 'but also', not 'and also'.",
      trap: "The word 'and' signals addition, which logically fits the meaning of the sentence, distracting the reader from the broken correlative pair.",
      distractors: [
        "The past tense 'believed' correctly anchors the main clause in past time.",
        "",
        "The past participle 'established' correctly begins a reduced relative clause modifying 'conventions'.",
        "The plural noun 'academies' is correctly used as the object of the preposition 'by'."
      ],
      corrected: "Early proponents of abstract expressionism believed that art should not only convey pure emotion but also reject the rigid conventions established by traditional European academies."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-sup-005",
    section: "written_expression",
    category: "comparative_superlative",
    difficulty: 2,
    segments: [
      { text: "Exerting a " },
      { text: "massive", label: "A" },
      { text: " gravitational pull that shapes the " },
      { text: "outer", label: "B" },
      { text: " solar system, Jupiter is significantly " },
      { text: "more larger", label: "C" },
      { text: " than all the terrestrial planets " },
      { text: "combined", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Comparative forms take either the suffix '-er' or the modifier 'more', but never both.",
      why: "The one-syllable adjective 'large' takes the suffix '-er' to become 'larger'; adding 'more' creates a double comparative error.",
      trap: "The intensifier 'significantly' creates space before the adjective, which can trick the ear into accepting 'more' as an additional degree marker.",
      distractors: [
        "The adjective 'massive' is correctly used to describe 'gravitational pull'.",
        "The adjective 'outer' accurately modifies the noun phrase 'solar system'.",
        "",
        "The participle 'combined' acts correctly to sum up the preceding plural noun phrase."
      ],
      corrected: "Exerting a massive gravitational pull that shapes the outer solar system, Jupiter is significantly larger than all the terrestrial planets combined."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-rdn-005",
    section: "written_expression",
    category: "redundancy",
    difficulty: 3,
    segments: [
      { text: "The " },
      { text: "unprecedented", label: "A" },
      { text: " discovery of a new hominid species in the cave system offered researchers a " },
      { text: "completely", label: "B" },
      { text: " unique perspective on " },
      { text: "human", label: "C" },
      { text: " evolutionary history that had previously " },
      { text: "been ignored", label: "D" },
      { text: "." }
    ],
    answer: 1,
    explanation: {
      rule: "Absolute adjectives like 'unique' (meaning one of a kind) cannot be modified by degree adverbs.",
      why: "The word 'unique' means entirely without equal; adding the intensifier 'completely' is redundant and illogical.",
      trap: "In casual speech, 'unique' is often treated loosely as a synonym for 'unusual' and paired with intensifiers, making the error hard to spot.",
      distractors: [
        "The adjective 'unprecedented' correctly modifies 'discovery' to mean never done before.",
        "",
        "The adjective 'human' correctly modifies the compound noun 'evolutionary history'.",
        "The passive past perfect 'been ignored' correctly indicates an action completed before the past discovery."
      ],
      corrected: "The unprecedented discovery of a new hominid species in the cave system offered researchers a unique perspective on human evolutionary history that had previously been ignored."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-plu-005",
    section: "written_expression",
    category: "singular_plural_noun",
    difficulty: 1,
    segments: [
      { text: "Many " },
      { text: "applicants", label: "A" },
      { text: " fail to submit the " },
      { text: "required", label: "B" },
      { text: " documentation on time, although the university offers several distinct scholarship " },
      { text: "program", label: "C" },
      { text: " to support " },
      { text: "international", label: "D" },
      { text: " students." }
    ],
    answer: 2,
    explanation: {
      rule: "Countable nouns following plural quantifiers like 'several', 'many', or 'few' must be in their plural form.",
      why: "The quantifier 'several' requires the plural noun 'programs', not the singular 'program'.",
      trap: "The intervening adjectives 'distinct scholarship' separate the quantifier from the noun, making the mismatched number less obvious.",
      distractors: [
        "The plural noun 'applicants' correctly agrees with the quantifier 'Many'.",
        "The participle 'required' acts correctly as an adjective modifying 'documentation'.",
        "",
        "The adjective 'international' correctly modifies the plural noun 'students'."
      ],
      corrected: "Many applicants fail to submit the required documentation on time, although the university offers several distinct scholarship programs to support international students."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-adv-005",
    section: "written_expression",
    category: "adjective_adverb",
    difficulty: 3,
    segments: [
      { text: "Supported " },
      { text: "almost", label: "A" },
      { text: " entirely by " },
      { text: "slender", label: "B" },
      { text: " flying buttresses, the massive stone vaults of the Gothic cathedral were designed so " },
      { text: "precise", label: "C" },
      { text: " that they remain intact " },
      { text: "today", label: "D" },
      { text: "." }
    ],
    answer: 2,
    explanation: {
      rule: "Adverbs, not adjectives, must be used to modify verbs.",
      why: "The word modifies the verb 'was designed', so it must take the adverb form 'precisely', not the adjective 'precise'.",
      trap: "The word 'precise' is situated near the noun phrase 'architectural framework', tempting readers to think it acts as a subject complement adjective.",
      distractors: [
        "The adverb 'almost' correctly modifies the adverb 'entirely'.",
        "The adjective 'slender' correctly modifies the compound noun 'flying buttresses'.",
        "",
        "The adverb 'today' correctly modifies the verb 'remain' to indicate present time."
      ],
      corrected: "Supported almost entirely by slender flying buttresses, the massive stone vaults of the Gothic cathedral were designed so precisely that they remain intact today."
    },
    verified: true,
    addedOn: "2026-09-12"
  },
  {
    id: "we-dng-005",
    section: "written_expression",
    category: "dangling_modifier",
    difficulty: 3,
    segments: [
      { text: "Locating", label: "A" },
      { text: " in the constellation of Orion, the bright " },
      { text: "star", label: "B" },
      { text: " Betelgeuse is " },
      { text: "classified", label: "C" },
      { text: " as a red supergiant and is expected " },
      { text: "to explode", label: "D" },
      { text: " as a supernova." }
    ],
    answer: 0,
    explanation: {
      rule: "An introductory participle phrase must use a past participle if the main subject receives the action, or a present participle if the subject performs it.",
      why: "The star Betelgeuse was located (discovered/placed) by astronomers; it does not perform the act of locating. Therefore, the passive past participle 'Located' is required.",
      trap: "The active participle 'Locating' might sound like a simple state of being to readers who fail to consider the passive relationship between the star and its position in the sky.",
      distractors: [
        "",
        "The singular noun 'star' correctly acts as the subject of the main clause.",
        "The passive verb 'classified' correctly follows the auxiliary 'is'.",
        "The infinitive 'to explode' correctly follows 'expected'."
      ],
      corrected: "Located in the constellation of Orion, the bright star Betelgeuse is classified as a red supergiant and is expected to explode as a supernova."
    },
    verified: true,
    addedOn: "2026-09-12"
  }
];
