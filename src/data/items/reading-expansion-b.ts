import type { Passage } from "../../types.ts";

export const passages: Passage[] = [
  {
    id: "rp-007",
    title: "The Erie Canal and Market Expansion",
    topic: "economics",
    wordCount: 234,
    paragraphs: [
      "Completed in 1825, the Erie Canal transformed the economy of the United States by dramatically lowering the cost of transporting goods. Before its construction, moving agricultural products from the interior to the eastern coast required slow and expensive overland travel. The canal, which stretched 363 miles from the Hudson River to Lake Erie, provided a direct water route. As a result, freight rates dropped by as much as ninety percent, enabling western farmers to sell their surplus grain in eastern markets profitably.",
      "The canal's success stimulated a broader economic shift from local, self-sufficient farming to commercial agriculture. Because farmers could now rely on distant markets to buy their crops, they began to specialize in whatever goods their land produced most efficiently. In turn, they used their cash income to purchase manufactured goods from eastern factories. This reciprocal trade accelerated the growth of manufacturing centers in the Northeast and established a national market system that tied the country's regions together.",
      "However, the canal also brought significant disruptions to local economies. Small artisans who had previously supplied their neighbors with handmade goods suddenly found themselves competing with cheaper, mass-produced items shipped from eastern cities. Many local manufacturers were forced out of business, while others adapted by expanding their operations and adopting new industrial methods. Thus, while the canal generated widespread prosperity, it also demanded painful adjustments from those unable to compete in the new commercial environment."
    ],
    items: [
      {
        id: "rd-main-005",
        section: "reading",
        category: "main_idea",
        difficulty: 2,
        prompt: "What does the passage mainly discuss?",
        options: [
          "The engineering challenges involved in building the Erie Canal",
          "The economic transformations caused by the completion of the Erie Canal",
          "The reasons why eastern factories replaced local artisans in the 1800s",
          "The types of crops that western farmers grew for eastern markets"
        ],
        answer: 1,
        explanation: {
          rule: "A main-idea answer must cover the entire passage, encompassing both the immediate effects and the broader consequences discussed across all paragraphs.",
          why: "Paragraph 1 describes the drop in shipping costs, paragraph 2 the shift to commercial agriculture and national markets, and paragraph 3 the disruption of local economies. Option B captures all of these economic changes.",
          trap: "Option C focuses on the displacement of artisans, which is discussed only in paragraph 3. It is too narrow to be the main idea.",
          distractors: [
            "The passage never discusses how the canal was built or any engineering challenges.",
            "",
            "This is a detail from the final paragraph and does not cover the agricultural shift or the drop in shipping costs.",
            "The passage mentions grain in paragraph 1 but does not detail the specific types of crops grown."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-det-005",
        section: "reading",
        category: "stated_detail",
        difficulty: 2,
        prompt: "According to paragraph 1, what enabled western farmers to sell their crops profitably?",
        options: [
          "A dramatic reduction in freight rates",
          "The invention of new agricultural methods",
          "An increase in the demand for grain in the West",
          "The replacement of overland travel with railroads"
        ],
        answer: 0,
        anchorParagraph: 1,
        lineHint: "freight rates dropped",
        explanation: {
          rule: "Detail questions require finding a specific fact stated directly in the passage.",
          why: "The passage explicitly states that freight rates dropped by as much as ninety percent, enabling western farmers to sell their surplus grain profitably.",
          trap: "Option D mentions replacing overland travel, which feels right, but the passage says the canal provided a water route, not railroads.",
          distractors: [
            "",
            "New industrial methods are mentioned in paragraph 3, not new agricultural methods.",
            "The passage says they sold surplus grain in eastern markets, not that western demand increased.",
            "Railroads are not mentioned in the passage; the Erie Canal is a water route."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-voc-005",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 3,
        prompt: "The word “reciprocal” in paragraph 2 is closest in meaning to",
        options: [
          "mutual",
          "unexpected",
          "profitable",
          "competitive"
        ],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "This reciprocal trade",
        explanation: {
          rule: "For vocabulary in context, the correct choice must replace the word and maintain the logical relationship established in the sentence.",
          why: "The previous sentences describe farmers selling crops to distant markets and using the income to buy manufactured goods from the East. This is a two-way, or mutual, exchange.",
          trap: "Because the trade involves money, “profitable” seems like a logical fit. However, “reciprocal” describes the two-way nature of the trade between the regions, not its profitability.",
          distractors: [
            "",
            "The passage implies this trade was a direct consequence of the canal, not that it was a surprise.",
            "While the trade may have been profitable, the word specifically refers to the exchange happening in both directions.",
            "The trade between the regions was complementary, not competitive; competition is discussed in paragraph 3."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-loc-002",
        section: "reading",
        category: "where_in_passage",
        difficulty: 2,
        prompt: "Where in the passage does the author describe the negative effects of the canal on some local businesses?",
        options: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "The passage does not describe this"
        ],
        answer: 2,
        explanation: {
          rule: "Where-in-passage questions ask you to locate the exact paragraph that introduces a specific concept.",
          why: "Paragraph 3 explicitly discusses how the canal brought “significant disruptions to local economies” and forced many local manufacturers out of business.",
          trap: "Paragraph 1 mentions the phrase “expensive overland travel,” which sounds negative, but it describes the period before the canal.",
          distractors: [
            "Paragraph 1 discusses the positive drop in shipping costs.",
            "Paragraph 2 discusses the positive growth of commercial agriculture and national markets.",
            "",
            "The passage does describe this in paragraph 3."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-rst-003",
        section: "reading",
        category: "restatement",
        difficulty: 3,
        prompt: "Which of the following best expresses the essential information in the sentence “Thus, while the canal generated widespread prosperity, it also demanded painful adjustments from those unable to compete in the new commercial environment”? ",
        options: [
          "The canal created economic growth overall, but it caused difficulties for people who could not adapt to the new market.",
          "Although the canal required expensive adjustments, it ultimately allowed local artisans to become highly prosperous.",
          "Because the canal generated so much prosperity, no one was able to compete with the new commercial businesses.",
          "The new commercial environment was painful for everyone, despite the prosperity the canal promised."
        ],
        answer: 0,
        anchorParagraph: 3,
        lineHint: "demanded painful adjustments",
        explanation: {
          rule: "A restatement preserves the original sentence's core meaning and logical relationships, such as contrasts or conditions.",
          why: "The original sentence contrasts the general prosperity created by the canal with the hardship faced by those who could not compete. Option A accurately restates this contrast.",
          trap: "Option B uses the words “adjustments” and “prosperous,” but it reverses the meaning by claiming the artisans benefited, whereas the sentence says they faced painful adjustments.",
          distractors: [
            "",
            "The sentence states that those unable to compete faced painful adjustments, not that they became prosperous.",
            "The sentence says those unable to compete suffered, not that no one could compete.",
            "The sentence claims the adjustments were painful for those unable to compete, not for everyone."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      }
    ]
  },
  {
    id: "rp-008",
    title: "Emily Dickinson's Poetic Innovations",
    topic: "American literature",
    wordCount: 230,
    paragraphs: [
      "During her lifetime, Emily Dickinson published fewer than ten poems, yet she is now recognized as one of the most innovative voices in American literature. Writing quietly in her family home in Massachusetts, she produced over eighteen hundred poems that broke completely from the literary conventions of the nineteenth century. While most poets of her era favored predictable rhythms and standard punctuation, Dickinson crafted short, compressed verses that relied on irregular meter and striking, unconventional imagery.",
      "Perhaps the most distinctive feature of Dickinson's style is her use of the dash. Instead of employing commas or periods to separate thoughts, she used dashes of varying lengths and slants. This punctuation creates pauses that disrupt the traditional flow of reading, forcing the audience to slow down and consider the weight of individual words. Furthermore, she frequently capitalized nouns that normally would not be capitalized, giving abstract concepts like time, death, and nature an almost physical presence in her work.",
      "Because her poetry was so unusual, early editors frequently altered her manuscripts to make them more acceptable to readers. They smoothed out her uneven rhythms, replaced her dashes with standard punctuation, and corrected her seemingly idiosyncratic grammar. It was not until the 1955 publication of her complete original texts that scholars could fully appreciate the intentional complexity of her designs. Today, those once-controversial choices are celebrated as the hallmarks of her poetic genius."
    ],
    items: [
      {
        id: "rd-org-003",
        section: "reading",
        category: "organization",
        difficulty: 3,
        prompt: "How is the information in the passage organized?",
        options: [
          "It compares Dickinson's poetry to that of other nineteenth-century writers and then declares her the superior poet.",
          "It introduces Dickinson's break with tradition, details her specific techniques, and explains how her work's reception evolved.",
          "It chronologically lists the poems Dickinson wrote during her lifetime and analyzes their individual meanings.",
          "It presents a theory about why Dickinson stayed in Massachusetts and then offers evidence to support it."
        ],
        answer: 1,
        explanation: {
          rule: "An organization question asks for the passage's overall structural pattern. The right answer traces the purpose of each paragraph in order.",
          why: "Paragraph 1 introduces her innovative break from conventions, paragraph 2 describes her specific use of dashes and capitalization, and paragraph 3 traces how editors and later scholars treated her work.",
          trap: "Option A mentions other writers, which paragraph 1 briefly does, but the passage never sets up an extended comparison or ranks her as the single superior poet.",
          distractors: [
            "The passage contrasts her with others briefly but does not dedicate its structure to a comparison.",
            "",
            "The passage mentions she wrote over eighteen hundred poems but does not list or analyze individual poems chronologically.",
            "The passage mentions her family home as a biographical detail, not as a theory to be proven."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-inf-005",
        section: "reading",
        category: "inference",
        difficulty: 3,
        prompt: "It can be inferred from the passage that nineteenth-century readers of poetry generally expected",
        options: [
          "abstract concepts to be capitalized frequently",
          "poems to be compressed into very short verses",
          "regular rhythms and traditional punctuation",
          "poems to be published anonymously"
        ],
        answer: 2,
        explanation: {
          rule: "Inference questions require taking a stated fact and drawing a direct, logical conclusion that the author implies but does not state explicitly.",
          why: "Paragraph 1 states that most poets of her era favored “predictable rhythms and standard punctuation,” and paragraph 3 notes that editors altered her work to make it “more acceptable to readers.” This implies readers expected traditional forms.",
          trap: "Option A describes what Dickinson did, but the question asks what nineteenth-century readers expected, which was the opposite of Dickinson's style.",
          distractors: [
            "Dickinson capitalized abstract concepts, but this broke from what readers expected.",
            "Dickinson crafted short verses as an innovation, meaning it was not the standard expectation.",
            "",
            "The passage mentions she published few poems, but it says nothing about anonymous publishing."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-ton-003",
        section: "reading",
        category: "tone_attitude",
        difficulty: 2,
        prompt: "The author's attitude toward early editors of Dickinson's poetry is best described as",
        options: [
          "appreciative of their efforts to preserve her original texts",
          "critical of their failure to understand her poetic intentions",
          "neutral regarding their standard editing practices",
          "enthusiastic about their improvements to her grammar"
        ],
        answer: 1,
        explanation: {
          rule: "Tone questions ask for the author's underlying attitude. Look for evaluative words that show approval, disapproval, or neutrality.",
          why: "The author describes the editors as altering her manuscripts to make them “acceptable” by smoothing and correcting them, and notes that it took until 1955 for scholars to appreciate her “intentional complexity.” This suggests the editors failed to grasp her genius.",
          trap: "Option C might appeal to a reader who expects TOEFL passages to be entirely neutral, but the phrase “intentional complexity” shows the author believes the editors wrongly erased her deliberate artistic choices.",
          distractors: [
            "The editors altered her texts rather than preserving the originals.",
            "",
            "The author uses phrases like “intentional complexity” and “poetic genius” to contrast with the editors' changes, showing mild criticism.",
            "The author believes her idiosyncratic grammar was an intentional choice, not something that needed improvement."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-exc-003",
        section: "reading",
        category: "except_not",
        difficulty: 2,
        prompt: "According to paragraph 3, early editors made all of the following changes to Dickinson's poetry EXCEPT",
        options: [
          "smoothing out uneven rhythms",
          "replacing dashes with standard punctuation",
          "correcting seemingly idiosyncratic grammar",
          "rewriting the endings of her poems"
        ],
        answer: 3,
        anchorParagraph: 3,
        explanation: {
          rule: "EXCEPT questions require finding the one option that is not mentioned in the text. You must verify the other three in the passage.",
          why: "Paragraph 3 explicitly states that editors smoothed out uneven rhythms, replaced dashes, and corrected grammar. It never mentions rewriting the endings.",
          trap: "Because the editors altered her work heavily, rewriting endings sounds plausible, but it is the only action not specifically listed in the text.",
          distractors: [
            "This is directly mentioned in the text.",
            "This is directly mentioned in the text.",
            "This is directly mentioned in the text.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-loc-003",
        section: "reading",
        category: "where_in_passage",
        difficulty: 2,
        prompt: "Where in the passage does the author explain the effect of capitalizing abstract nouns?",
        options: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "The passage does not explain this"
        ],
        answer: 1,
        explanation: {
          rule: "Locate the exact paragraph where the specific idea from the prompt is described.",
          why: "Paragraph 2 states that she capitalized nouns normally left uncapitalized, “giving abstract concepts like time, death, and nature an almost physical presence.”",
          trap: "Paragraph 1 mentions her “striking, unconventional imagery,” which is related to her style, but it does not specifically discuss capitalization.",
          distractors: [
            "Paragraph 1 discusses irregular meter and striking imagery, not capitalization.",
            "",
            "Paragraph 3 discusses how editors altered her work.",
            "The explanation is clearly provided in paragraph 2."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      }
    ]
  },
  {
    id: "rp-009",
    title: "The Main Asteroid Belt",
    topic: "astronomy",
    wordCount: 231,
    paragraphs: [
      "Between the orbits of Mars and Jupiter lies the main asteroid belt, a vast ring of rocky fragments orbiting the Sun. Early astronomers theorized that these objects were the remains of a single planet that had been shattered by a massive collision. However, modern observations indicate that the combined mass of all the asteroids is less than that of Earth's Moon. Furthermore, the chemical composition of the fragments varies so significantly that they could not have originated from a single planetary body.",
      "Instead of being the wreckage of a destroyed world, the asteroid belt is now understood to be material that never successfully formed into a planet. During the early days of the solar system, dust and rock accumulated to form planets. In the region between Mars and Jupiter, however, the immense gravitational pull of Jupiter exerted strong tidal forces. These forces caused the rocky fragments to collide at high speeds, shattering them rather than allowing them to bind together into a larger mass.",
      "While most asteroids remain safely in the main belt, gravitational interactions can occasionally alter their orbits. Jupiter's gravity can slowly nudge an asteroid until it is flung into a new path, sometimes sending it into the inner solar system. These near-Earth asteroids are of great interest to scientists, both because they represent potential collision hazards and because they offer accessible records of the early solar system's composition."
    ],
    items: [
      {
        id: "rd-main-006",
        section: "reading",
        category: "main_idea",
        difficulty: 2,
        prompt: "What is the primary topic of the passage?",
        options: [
          "The reasons why Earth's Moon is larger than the asteroid belt",
          "The origins and characteristics of the main asteroid belt",
          "The methods astronomers use to track near-Earth asteroids",
          "The role of Jupiter's gravity in destroying an ancient planet"
        ],
        answer: 1,
        explanation: {
          rule: "The main idea must represent the central focus of the entire passage, not just a detail from one paragraph.",
          why: "Paragraph 1 describes what the belt is and refutes an old theory, paragraph 2 explains its true origin, and paragraph 3 discusses how asteroids leave the belt. Option B covers this entire scope.",
          trap: "Option D refers to Jupiter's gravity destroying a planet. This is a trap because paragraph 2 states that the planet never formed in the first place.",
          distractors: [
            "The Moon is mentioned only once in paragraph 1 for a mass comparison.",
            "",
            "Near-Earth asteroids are only discussed in the final paragraph.",
            "The passage explicitly states that the belt is material that never formed into a planet, not a destroyed ancient planet."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-voc-006",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 2,
        prompt: "The word “accumulated” in paragraph 2 is closest in meaning to",
        options: [
          "gathered",
          "heated",
          "collapsed",
          "vanished"
        ],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "dust and rock accumulated",
        explanation: {
          rule: "Replace the vocabulary word with each choice to see which one preserves the sentence's meaning.",
          why: "The sentence describes dust and rock coming together to form planets. “Gathered” accurately describes this process of collecting into a mass.",
          trap: "Because the passage discusses planets forming, one might think of the heat involved in planetary formation, making “heated” seem relevant. However, “accumulate” means to collect.",
          distractors: [
            "",
            "The rock and dust were collecting, not necessarily heating, to form planets.",
            "Collapsing implies falling apart or compressing suddenly, rather than collecting over time.",
            "The material did not vanish; it gathered together."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-ref-004",
        section: "reading",
        category: "reference",
        difficulty: 2,
        prompt: "The word “they” in paragraph 1 refers to",
        options: [
          "modern observations",
          "all the asteroids",
          "the fragments",
          "astronomers"
        ],
        answer: 2,
        anchorParagraph: 1,
        lineHint: "they could not have originated",
        explanation: {
          rule: "A pronoun must replace a specific, logically compatible noun that appeared earlier in the text.",
          why: "The sentence says that the chemical composition of “the fragments” varies so much that “they” could not have originated from a single body. “They” directly replaces “the fragments.”",
          trap: "“All the asteroids” appears in the previous sentence and makes logical sense, but “the fragments” is the subject of the immediate clause containing the pronoun.",
          distractors: [
            "Observations cannot originate from a planetary body.",
            "While asteroids are the topic, “the fragments” is the immediate plural noun in the sentence that the pronoun replaces.",
            "",
            "Astronomers did not originate from a planetary body."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-rst-004",
        section: "reading",
        category: "restatement",
        difficulty: 3,
        prompt: "Which of the following best expresses the essential information in the sentence “Instead of being the wreckage of a destroyed world, the asteroid belt is now understood to be material that never successfully formed into a planet”?",
        options: [
          "Scientists once believed the asteroid belt was a destroyed planet, but they now know it is debris that failed to combine into one.",
          "The asteroid belt was formed when a fully developed planet was destroyed into smaller pieces of material.",
          "It is now understood that the asteroid belt was created when successful planets left behind wreckage.",
          "Material that never formed into a planet eventually destroyed the asteroid belt."
        ],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "Instead of being the wreckage",
        explanation: {
          rule: "A correct restatement keeps the original sentence's relationships while changing the wording. Reject options that reverse the meaning.",
          why: "The sentence contrasts the old idea (a destroyed world) with the current understanding (material that never formed a planet). Option A accurately reflects this shift in understanding.",
          trap: "Option B states exactly the opposite of the sentence by claiming a developed planet was destroyed, which is the outdated theory the sentence refutes.",
          distractors: [
            "",
            "This reverses the meaning, stating the outdated theory as fact.",
            "The sentence says the material failed to form a planet, not that successful planets left wreckage.",
            "The material is the asteroid belt; it did not destroy the belt."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-loc-004",
        section: "reading",
        category: "where_in_passage",
        difficulty: 2,
        prompt: "Where in the passage does the author explain what prevented a planet from forming in the asteroid belt?",
        options: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "The passage does not explain this"
        ],
        answer: 1,
        explanation: {
          rule: "Locate the specific paragraph that answers the question's premise.",
          why: "Paragraph 2 explains that Jupiter's immense gravitational pull exerted tidal forces that caused fragments to collide and shatter, preventing them from binding into a planet.",
          trap: "Paragraph 1 mentions the theory of a destroyed planet, but paragraph 2 provides the actual mechanism that prevented formation.",
          distractors: [
            "Paragraph 1 refutes the single-planet theory based on mass and composition.",
            "",
            "Paragraph 3 discusses how Jupiter alters asteroid orbits today, not how it prevented planet formation.",
            "The passage explicitly explains this in paragraph 2."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      }
    ]
  },
  {
    id: "rp-010",
    title: "Glaciers and Landforms",
    topic: "geology",
    wordCount: 249,
    paragraphs: [
      "During the last ice age, massive sheets of ice covered much of North America, carving and reshaping the landscape beneath them. As these glaciers advanced, they acted like enormous bulldozers, scraping away soil and loose rock and plucking boulders from the bedrock. The ice dragged this immense load of debris over long distances, grinding the rocks against one another and crushing them into a fine powder known as glacial flour. This erosive action profoundly altered the terrain, leaving behind smoothed rock faces and deep, U-shaped valleys.",
      "When the climate eventually warmed, the glaciers began to melt and retreat, depositing the material they had carried. The unsorted mixture of clay, sand, gravel, and boulders dropped directly by the melting ice is called till. In many regions, the retreating glaciers left behind long ridges of till known as moraines. Terminal moraines mark the farthest point of a glacier's advance, providing a clear boundary of the ice sheet's maximum extent. Long Island and Cape Cod, for example, are both segments of a massive terminal moraine.",
      "The meltwater flowing away from the retreating ice also played a crucial role in shaping the land. Fast-flowing streams of meltwater carried finer sediments away from the glacier, eventually spreading them over broad, flat plains. Unlike the unsorted till dropped directly by the ice, these meltwater deposits were carefully sorted by the water's current, with heavier gravel settling first and lighter sand carried farther downstream. Today, these deposits are valuable sources of sand and gravel for construction."
    ],
    items: [
      {
        id: "rd-pur-004",
        section: "reading",
        category: "author_purpose",
        difficulty: 3,
        prompt: "Why does the author mention Long Island and Cape Cod in paragraph 2?",
        options: [
          "To provide examples of landforms created by terminal moraines",
          "To identify the locations where the ice age began in North America",
          "To explain why the climate eventually warmed and caused glaciers to retreat",
          "To contrast coastal glacial deposits with inland meltwater plains"
        ],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "Long Island and Cape Cod",
        explanation: {
          rule: "Author's purpose questions ask why a specific detail is included. The answer usually supports the concept introduced immediately before the detail.",
          why: "The sentence right before mentions that terminal moraines mark the farthest point of a glacier's advance. Long Island and Cape Cod are then introduced as physical examples of these massive terminal moraines.",
          trap: "Because they are specific geographic locations, Option B sounds plausible, but the passage uses them to illustrate landforms, not to pinpoint where the ice age began.",
          distractors: [
            "",
            "The passage does not state where the ice age began.",
            "These locations are results of glacial deposition, not the cause of climate warming.",
            "The passage does not contrast coastal and inland deposits in this paragraph."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-det-006",
        section: "reading",
        category: "stated_detail",
        difficulty: 2,
        prompt: "According to paragraph 3, how did meltwater deposits differ from till?",
        options: [
          "Meltwater deposits were dropped directly by the melting ice.",
          "Meltwater deposits contained large boulders plucked from bedrock.",
          "Meltwater deposits were sorted by the water's current.",
          "Meltwater deposits formed long ridges marking the glacier's maximum extent."
        ],
        answer: 2,
        anchorParagraph: 3,
        lineHint: "Unlike the unsorted till",
        explanation: {
          rule: "Detail questions require finding the exact comparison stated in the passage.",
          why: "Paragraph 3 explicitly contrasts meltwater deposits with till by stating that meltwater deposits “were carefully sorted by the water's current.”",
          trap: "Option A is exactly what the passage says about till, making it a tempting trap if a reader confuses the two subjects of the comparison.",
          distractors: [
            "This describes till, not meltwater deposits.",
            "Boulders are mentioned as part of the till dropped directly by ice, while meltwater carried finer sediments.",
            "",
            "Long ridges marking maximum extent describe terminal moraines, not meltwater plains."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-ton-004",
        section: "reading",
        category: "tone_attitude",
        difficulty: 3,
        prompt: "The tone of the passage is best described as",
        options: [
          "informative and objective",
          "alarmed and warning",
          "skeptical and questioning",
          "awed and poetic"
        ],
        answer: 0,
        explanation: {
          rule: "Tone questions assess the author's attitude. Academic passages describing natural processes usually rely on a neutral, factual tone.",
          why: "The passage uses clear, descriptive language to explain geological processes without expressing personal emotion or bias. It aims to inform.",
          trap: "Because the passage discusses “massive sheets of ice” and “enormous bulldozers,” a reader might choose “awed and poetic,” but the core purpose remains factual scientific description.",
          distractors: [
            "",
            "The passage describes past events, not future dangers, so there is no alarm.",
            "The author presents the processes as established facts, not theories to be questioned.",
            "While descriptive metaphors (bulldozers) are used, the overall tone is not poetic or emotional."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-exc-004",
        section: "reading",
        category: "except_not",
        difficulty: 3,
        prompt: "According to the passage, all of the following are mentioned as actions of advancing glaciers EXCEPT",
        options: [
          "scraping away soil and loose rock",
          "plucking boulders from the bedrock",
          "crushing rocks into glacial flour",
          "spreading fine sediments over flat plains"
        ],
        answer: 3,
        explanation: {
          rule: "For an EXCEPT question, find the three actions that are stated in the text and eliminate them. The correct answer will be the one not attributed to the subject.",
          why: "Paragraph 1 lists scraping soil, plucking boulders, and crushing rocks as actions of advancing glaciers. Paragraph 3 states that spreading fine sediments over flat plains was done by meltwater streams, not advancing glaciers.",
          trap: "Option D describes a real geological action mentioned in the passage, but it is performed by retreating meltwater, not the advancing ice.",
          distractors: [
            "This is mentioned in paragraph 1.",
            "This is mentioned in paragraph 1.",
            "This is mentioned in paragraph 1.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      },
      {
        id: "rd-org-004",
        section: "reading",
        category: "organization",
        difficulty: 3,
        prompt: "How does paragraph 3 relate to the rest of the passage?",
        options: [
          "It contradicts the claim that glaciers profoundly altered the landscape.",
          "It describes a secondary process of deposition that occurred as glaciers retreated.",
          "It provides the historical timeline for the events described in paragraph 1.",
          "It introduces a competing theory about the origin of glacial flour."
        ],
        answer: 1,
        explanation: {
          rule: "Look at the function of the paragraph within the whole passage. Paragraph 3 shifts from ice deposition to water deposition.",
          why: "Paragraph 1 covers advancing glaciers (erosion), paragraph 2 covers retreating ice (till deposition), and paragraph 3 adds another effect of the retreat: meltwater deposition. Thus, it describes a secondary process of deposition.",
          trap: "Option C mentions timeline. The passage is roughly chronological, but paragraph 3 does not provide dates or a strict timeline; it simply describes a concurrent process.",
          distractors: [
            "It supports the claim that glaciers altered the landscape.",
            "",
            "No specific historical timeline or dates are provided.",
            "It does not introduce any competing theories."
          ]
        },
        verified: true,
        addedOn: "2026-09-11"
      }
    ]
  }
];
