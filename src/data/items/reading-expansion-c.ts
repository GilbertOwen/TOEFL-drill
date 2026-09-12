import type { Passage } from "../../types.ts";

export const passages: Passage[] = [
  {
    id: "rp-011",
    title: "Coral Bleaching",
    topic: "marine biology",
    wordCount: 224,
    paragraphs: [
      "Coral reefs are among the most diverse ecosystems on Earth, providing habitat for countless marine species. However, these vibrant underwater structures are increasingly threatened by a phenomenon known as coral bleaching. This process occurs when corals experience environmental stress, most commonly due to high water temperatures. In response, they expel the symbiotic algae, called zooxanthellae, that reside in their tissues. These algae are crucial to the corals' survival, as they provide up to ninety percent of the energy the corals need through photosynthesis.",
      "When the algae are expelled, the corals lose their vibrant colors, revealing their stark white skeletons. A bleached coral is not dead, but it is severely weakened and highly susceptible to disease. If the environmental stress is temporary and temperatures return to normal quickly, the corals can reacquire algae and recover. However, if the stress persists for prolonged periods, the corals will eventually starve, leaving behind degraded reefs that can no longer support the communities of fish that depend on them.",
      "The increasing frequency of mass bleaching events worldwide has alarmed marine biologists. Localized bleaching has evolved into a global crisis, largely driven by rising ocean temperatures. Some scientists are investigating whether certain coral species possess genetic traits that make them more resilient to heat stress, hoping that such heat-tolerant varieties might be used to restore damaged reefs in the future."
    ],
    items: [
      {
        id: "rd-main-007",
        section: "reading",
        category: "main_idea",
        difficulty: 2,
        prompt: "What does the passage mainly discuss?",
        options: [
          "The reproductive strategies of symbiotic algae",
          "The causes and consequences of coral bleaching",
          "Methods for restoring degraded coral reefs",
          "The biodiversity of marine ecosystems"
        ],
        answer: 1,
        explanation: {
          rule: "The main idea must summarize the entire passage, encompassing all paragraphs without focusing too heavily on a single detail.",
          why: "Paragraph 1 explains what causes bleaching, paragraph 2 describes its effects on the corals and reefs, and paragraph 3 discusses it as a global crisis. Option B perfectly encapsulates these points.",
          trap: "C mentions restoring reefs, which is discussed in the final paragraph, but it is only a minor point, not the main focus.",
          distractors: [
            "The passage discusses algae's role in providing energy, not their reproductive strategies.",
            "",
            "Restoration is only briefly mentioned as a future hope in the final sentence.",
            "Biodiversity is mentioned in the first sentence to establish context, but it is not the main topic."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-voc-007",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 1,
        prompt: "The word “vibrant” in paragraph 2 is closest in meaning to",
        options: ["fading", "bright", "transparent", "natural"],
        answer: 1,
        anchorParagraph: 2,
        lineHint: "lose their vibrant colors",
        explanation: {
          rule: "A vocabulary-in-context question asks for a synonym that fits logically in the sentence.",
          why: "The passage states that corals lose their 'vibrant' colors and reveal 'stark white' skeletons. This contrast implies that the original colors were strong and bright.",
          trap: "Fading relates to losing color, but 'vibrant' describes the color before it was lost.",
          distractors: [
            "Fading is the opposite of what vibrant means; the colors fade when the algae are expelled.",
            "",
            "If the colors were transparent, they would not hide the white skeletons beneath them.",
            "While the colors are natural, the context contrasts them specifically with white, pointing to brightness or intensity."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-det-007",
        section: "reading",
        category: "stated_detail",
        difficulty: 2,
        prompt: "According to paragraph 1, why are zooxanthellae essential to corals?",
        options: [
          "They protect corals from high water temperatures.",
          "They supply the majority of the corals' energy.",
          "They rebuild the corals' stark white skeletons.",
          "They help the corals expel environmental toxins."
        ],
        answer: 1,
        anchorParagraph: 1,
        lineHint: "provide up to ninety percent of the energy",
        explanation: {
          rule: "A detail question asks for specific information directly stated in the text.",
          why: "The passage explicitly states that these algae 'provide up to ninety percent of the energy the corals need'. Option B is a direct paraphrase.",
          trap: "A is tempting because temperatures are mentioned, but the algae do not protect against heat; rather, they are expelled because of it.",
          distractors: [
            "High temperatures cause the corals to expel the algae; the algae do not protect against the heat.",
            "",
            "The algae do not build the skeletons, which are revealed only after the algae are gone.",
            "The passage never mentions the algae removing environmental toxins."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-inf-007",
        section: "reading",
        category: "inference",
        difficulty: 3,
        prompt: "It can be inferred from paragraph 2 that if water temperatures remain unusually high for a long time,",
        options: [
          "corals will permanently adapt to survive without algae",
          "corals will immediately die upon expelling their algae",
          "fish populations relying on the reefs will likely decline",
          "the algae will return to the coral despite the heat"
        ],
        answer: 2,
        anchorParagraph: 2,
        explanation: {
          rule: "An inference must be a logical conclusion drawn from information explicitly provided in the passage.",
          why: "The paragraph states that if stress persists, corals will starve, leaving degraded reefs that 'can no longer support the communities of fish that depend on them.' It logically follows that those fish populations will decline.",
          trap: "B might seem plausible, but the passage states a bleached coral is 'not dead' immediately, but will eventually starve if the stress persists.",
          distractors: [
            "The passage explicitly states they will starve if the algae do not return; they do not adapt to live without them.",
            "The passage says a bleached coral 'is not dead, but it is severely weakened'.",
            "",
            "The passage states corals reacquire algae only if 'temperatures return to normal quickly'."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-ref-006",
        section: "reading",
        category: "reference",
        difficulty: 2,
        prompt: "The word “them” in paragraph 2 refers to",
        options: ["corals", "periods", "reefs", "communities"],
        answer: 2,
        anchorParagraph: 2,
        lineHint: "depend on them",
        explanation: {
          rule: "A pronoun replaces a preceding noun. The correct noun must fit the grammatical and logical context of the sentence.",
          why: "The sentence describes 'degraded reefs that can no longer support the communities of fish that depend on them.' The fish communities depend on the reefs.",
          trap: "Corals is a plausible guess, but structurally the clause 'that can no longer support...' modifies 'reefs', and it is the reefs that the fish rely on for habitat.",
          distractors: [
            "The fish depend on the broader reef structure for habitat, which is the immediate antecedent.",
            "Periods of time cannot physically support communities of fish.",
            "",
            "The communities cannot depend on themselves in this context; they depend on the habitat."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  },
  {
    id: "rp-012",
    title: "Mercantilism",
    topic: "colonial American history",
    wordCount: 206,
    paragraphs: [
      "During the seventeenth and eighteenth centuries, the economic relationship between Great Britain and its North American colonies was governed by mercantilism. This economic theory held that a nation's wealth was determined by its accumulation of precious metals, achieved by maximizing exports and minimizing imports. To implement this policy, Parliament passed the Navigation Acts, designed to control colonial trade and ensure that it primarily benefited the mother country.",
      "Under these regulations, certain valuable colonial products could only be shipped directly to England. Tobacco, sugar, and indigo were among the most lucrative of these protected commodities. Furthermore, the laws required that all goods bound for the colonies from Europe had to first pass through English ports, where they were subject to taxes. This system forced colonial merchants to buy manufactured goods almost exclusively from British suppliers, effectively creating a captive market.",
      "While mercantilism successfully stimulated the growth of British shipping, it increasingly bred resentment among the American colonists. Many colonial merchants turned to smuggling to evade the restrictive laws, establishing illicit trade networks with French and Dutch merchants. As the British government intensified its efforts to enforce the trade regulations, the economic grievances of the colonists merged with political disputes, ultimately setting the stage for the American Revolution."
    ],
    items: [
      {
        id: "rd-exc-005",
        section: "reading",
        category: "except_not",
        difficulty: 3,
        prompt: "According to the passage, all of the following were true of the Navigation Acts EXCEPT:",
        options: [
          "They forced colonists to buy most manufactured goods from Britain.",
          "They allowed colonial merchants to trade freely with the Dutch.",
          "They required goods from Europe to pass through English ports.",
          "They restricted the shipment of certain valuable colonial products."
        ],
        answer: 1,
        anchorParagraph: 2,
        explanation: {
          rule: "An EXCEPT question asks for the option that is NOT stated in the passage or contradicts the passage.",
          why: "Option B contradicts the passage. The Navigation Acts did not allow free trade with the Dutch; instead, the colonists traded with the Dutch illegally through 'illicit trade networks' (smuggling) to evade the Acts.",
          trap: "The passage does mention Dutch merchants in paragraph 3, making it seem like a true statement if the reader misses the word 'illicit' or 'evade'.",
          distractors: [
            "This is true; paragraph 2 states the system forced merchants to buy almost exclusively from British suppliers.",
            "",
            "This is true; paragraph 2 states goods from Europe had to pass through English ports and be taxed.",
            "This is true; paragraph 2 notes that certain products could only be shipped to England."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-pur-006",
        section: "reading",
        category: "author_purpose",
        difficulty: 3,
        prompt: "Why does the author mention “Tobacco, sugar, and indigo” in paragraph 2?",
        options: [
          "To argue that agriculture was the only profitable industry in the colonies",
          "To provide examples of valuable products that were restricted by trade laws",
          "To explain why the colonies were forced to import manufactured goods",
          "To demonstrate the failure of British agricultural policies"
        ],
        answer: 1,
        anchorParagraph: 2,
        lineHint: "Tobacco, sugar, and indigo",
        explanation: {
          rule: "Author's purpose questions ask why information is included. The answer is usually found in the sentence immediately preceding the mentioned detail.",
          why: "The preceding sentence discusses 'certain valuable colonial products' that were restricted to being shipped only to England. Tobacco, sugar, and indigo are given as specific examples of these 'protected commodities.'",
          trap: "A is a broad assumption. While these crops were profitable, the author never claims agriculture was the *only* profitable industry.",
          distractors: [
            "The passage does not state that agriculture was the only profitable sector, merely that these specific crops were lucrative.",
            "",
            "The colonists had to import manufactured goods because of the Navigation Acts, not because they grew these specific crops.",
            "The passage does not mention any failure of agricultural policies; the focus is on trade regulations."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-voc-008",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 2,
        prompt: "The word “lucrative” in paragraph 2 is closest in meaning to",
        options: ["profitable", "abundant", "fragile", "essential"],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "most lucrative of these",
        explanation: {
          rule: "Determine the meaning of the vocabulary word by substituting the options and checking which one maintains the logical flow of the sentence.",
          why: "The text discusses 'valuable' products and wealth accumulation. 'Profitable' fits the context of goods that generated significant wealth.",
          trap: "Abundant is a common descriptor for agricultural goods, but the focus of mercantilism is on financial wealth, making 'profitable' the exact fit.",
          distractors: [
            "",
            "While they may have been abundant, the passage emphasizes their financial value in an economic system.",
            "There is no indication that these trade goods were delicate or easily broken.",
            "They were valuable for trade, but not necessarily 'essential' for basic survival."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-org-005",
        section: "reading",
        category: "organization",
        difficulty: 3,
        prompt: "How is the information in the passage organized?",
        options: [
          "It compares the economic policies of Britain, France, and the Netherlands.",
          "It defines an economic policy, describes its implementation, and details its consequences.",
          "It presents a timeline of the most important events in the American Revolution.",
          "It outlines a problem faced by the British government and offers a solution."
        ],
        answer: 1,
        explanation: {
          rule: "Organization questions require mapping out the primary function of each paragraph in sequence.",
          why: "Paragraph 1 defines mercantilism, paragraph 2 explains how it was implemented via the Navigation Acts, and paragraph 3 describes the resulting colonial resentment and consequences.",
          trap: "A mentions Britain, France, and the Netherlands, but the passage does not compare their policies; it only mentions French and Dutch merchants as smuggling partners.",
          distractors: [
            "French and Dutch merchants are mentioned only as smuggling partners, not to compare national policies.",
            "",
            "The American Revolution is mentioned at the very end as a consequence, but the passage is not a timeline of its events.",
            "The passage explains a historical policy and its effects, rather than proposing a solution to a problem."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-rst-005",
        section: "reading",
        category: "restatement",
        difficulty: 2,
        prompt: "Which of the following best expresses the essential information in the highlighted sentence? \n“This economic theory held that a nation's wealth was determined by its accumulation of precious metals, achieved by maximizing exports and minimizing imports.”",
        options: [
          "Mercantilism encouraged nations to import more goods than they exported to save precious metals.",
          "Under mercantilism, a country grew rich by exporting more than it imported to gather precious metals.",
          "Precious metals were considered valuable only if a nation could export them successfully.",
          "Nations accumulated wealth by minimizing their production and importing precious metals."
        ],
        answer: 1,
        anchorParagraph: 1,
        lineHint: "This economic theory held that a nation's wealth",
        explanation: {
          rule: "A restatement must convey the exact same core meaning as the original sentence without omitting crucial details or introducing errors.",
          why: "Option B correctly paraphrases 'accumulation of precious metals' as gathering them, and 'maximizing exports and minimizing imports' as exporting more than importing.",
          trap: "A flips the relationship, suggesting importing more than exporting, which is the exact opposite of the sentence's meaning.",
          distractors: [
            "This reverses the original meaning, which calls for maximizing exports.",
            "",
            "The metals themselves were the wealth; the goal was to accumulate them, not export them.",
            "The sentence says to minimize imports, not maximize them, and says nothing about minimizing production."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  },
  {
    id: "rp-013",
    title: "Auroras",
    topic: "atmospheric science",
    wordCount: 226,
    paragraphs: [
      "The spectacular light shows known as auroras, which illuminate the skies in high-latitude regions, are the visible result of complex interactions between the Earth's magnetic field and the solar wind. The sun constantly emits a stream of charged particles into space. When this solar wind reaches the Earth, it is largely deflected by the magnetosphere, an invisible shield surrounding the planet. However, at the magnetic poles, the field lines dip inward, allowing some solar particles to enter the upper atmosphere.",
      "As these energetic particles cascade downward, they collide with the atoms and molecules of atmospheric gases, predominantly oxygen and nitrogen. These collisions transfer energy to the gases, temporarily placing them in an excited state. When the atoms return to their normal resting state, they release the excess energy in the form of photons, producing the brilliant colors characteristic of the aurora. The specific colors depend on the type of gas involved and the altitude.",
      "Oxygen at lower altitudes produces the most common pale yellowish-green hues, while high-altitude oxygen emits rare red light. Nitrogen is responsible for the blue and purplish-red colors that often fringe the lower edges of the auroral bands. Because the intensity of the solar wind fluctuates with the solar cycle, the most spectacular displays tend to occur during periods of maximum sunspot activity, when solar storms send massive bursts of particles toward Earth."
    ],
    items: [
      {
        id: "rd-main-008",
        section: "reading",
        category: "main_idea",
        difficulty: 2,
        prompt: "What is the primary focus of the passage?",
        options: [
          "The effects of solar storms on the Earth's magnetic shield",
          "The scientific mechanism behind the creation and colors of auroras",
          "The role of atmospheric gases in blocking solar wind",
          "The differences between oxygen and nitrogen in the upper atmosphere"
        ],
        answer: 1,
        explanation: {
          rule: "The main idea should cover the origin of the phenomenon (paragraph 1), how it physically occurs (paragraph 2), and the variations it produces (paragraph 3).",
          why: "The passage explains what auroras are (solar wind interacting with the magnetic field) and how they get their colors (gas collisions). Option B encompasses this entire process.",
          trap: "A is discussed in the final sentence and first paragraph, but the focus is on the light shows (auroras), not just the magnetic shield.",
          distractors: [
            "The passage focuses on the visible auroras caused by solar wind, not on damage to the magnetic shield itself.",
            "",
            "The gases do not block the solar wind; the magnetosphere does. The gases merely light up when hit.",
            "While paragraph 3 discusses the colors they produce, the passage as a whole is not primarily a comparison of the two gases."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-inf-008",
        section: "reading",
        category: "inference",
        difficulty: 3,
        prompt: "It can be inferred from the passage that auroras are rarely seen near the equator because",
        options: [
          "the atmosphere near the equator lacks sufficient oxygen and nitrogen",
          "the solar wind does not travel that far from the sun",
          "the Earth's magnetic field lines do not dip inward at the equator",
          "the sunspot activity only affects the polar regions of the Earth"
        ],
        answer: 2,
        anchorParagraph: 1,
        explanation: {
          rule: "An inference must be firmly supported by the text. Look for rules or conditions stated in the passage and apply them to the question.",
          why: "Paragraph 1 states that the solar wind is largely deflected, but 'at the magnetic poles, the field lines dip inward, allowing some solar particles to enter'. Therefore, away from the poles (like the equator), the field does not dip inward, keeping particles out.",
          trap: "A is scientifically false and entirely unmentioned in the text, though it might sound plausible to a distracted reader.",
          distractors: [
            "The passage never suggests that atmospheric gases are missing near the equator.",
            "The solar wind reaches the Earth as a whole; it is deflected by the magnetosphere.",
            "",
            "Sunspot activity affects the intensity of the solar wind globally, but the particles only enter where the magnetic field allows them to (the poles)."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-det-008",
        section: "reading",
        category: "stated_detail",
        difficulty: 1,
        prompt: "According to paragraph 2, what causes the excited atoms to release photons?",
        options: [
          "They collide with other energetic particles.",
          "They return to their normal resting state.",
          "They mix with different types of atmospheric gases.",
          "They are exposed to intense sunlight."
        ],
        answer: 1,
        anchorParagraph: 2,
        lineHint: "When the atoms return to their normal resting state",
        explanation: {
          rule: "Locate the specific event in the text and see what directly triggers the action asked about.",
          why: "Paragraph 2 explicitly states, 'When the atoms return to their normal resting state, they release the excess energy in the form of photons.'",
          trap: "A describes what puts them in an excited state in the first place, not what causes the release of photons.",
          distractors: [
            "Collisions excite the atoms; the photons are released only when they calm back down.",
            "",
            "The passage does not say that gases mixing causes the photon release.",
            "The auroras are night sky phenomena and do not require sunlight to release photons; they require solar wind particles."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-ton-005",
        section: "reading",
        category: "tone_attitude",
        difficulty: 3,
        prompt: "What is the author's attitude toward auroras?",
        options: [
          "Alarmed and cautionary",
          "Objective and explanatory",
          "Skeptical and questioning",
          "Dismissive and critical"
        ],
        answer: 1,
        explanation: {
          rule: "The tone reflects the author's emotional state or purpose. Informational science passages are almost always objective.",
          why: "The author simply explains the physical processes that cause auroras in a clear, factual manner, without expressing personal emotion or bias. Words like 'spectacular' and 'brilliant' are used descriptively.",
          trap: "A student might choose A if they focus on words like 'storms' or 'massive bursts', but the author is not warning the reader.",
          distractors: [
            "The author expresses no fear or warning about the solar storms or auroras.",
            "",
            "The author presents the mechanics as established facts, not as theories to be doubted.",
            "The author calls the displays 'spectacular', which is the opposite of dismissive."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-loc-005",
        section: "reading",
        category: "where_in_passage",
        difficulty: 2,
        prompt: "Where in the passage does the author explain why auroras are not always equally bright or frequent?",
        options: [
          "Paragraph 1",
          "Paragraph 2",
          "The beginning of Paragraph 3",
          "The end of Paragraph 3"
        ],
        answer: 3,
        explanation: {
          rule: "Locate the exact sentence that discusses the variation in frequency or brightness.",
          why: "The final sentence of paragraph 3 explains that 'the intensity of the solar wind fluctuates... the most spectacular displays tend to occur during periods of maximum sunspot activity'.",
          trap: "Paragraph 1 mentions the constant stream of particles, but does not explain the *fluctuations* in intensity.",
          distractors: [
            "Paragraph 1 introduces the solar wind but does not discuss how it fluctuates over time.",
            "Paragraph 2 explains how light is produced, but not why the intensity varies over time.",
            "The beginning of paragraph 3 discusses color variations based on altitude, not frequency or overall intensity.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  },
  {
    id: "rp-014",
    title: "Carnivorous Plants",
    topic: "plant biology",
    wordCount: 231,
    paragraphs: [
      "Carnivorous plants have evolved extraordinary adaptations that allow them to thrive in nutrient-poor environments, such as acidic bogs and rocky outcrops. Because these soils lack sufficient nitrogen and phosphorus, essential elements for plant growth, these unique flora supplement their diet by capturing and digesting insects and other small prey. Over millions of years, modified leaves have transformed into sophisticated traps, utilizing a variety of mechanisms to secure their meals.",
      "The Venus flytrap is the most famous example of an active trap. Its leaves feature sensitive trigger hairs; when an insect brushes against multiple hairs in quick succession, the leaf halves snap shut in a fraction of a second, imprisoning the victim. In contrast, pitcher plants employ a passive pitfall mechanism. Their leaves form deep, slippery cavities filled with digestive enzymes. Unsuspecting insects are lured by nectar, lose their footing on the slick edges, and tumble into the fluid below, where they are dissolved.",
      "Sundews utilize yet another strategy, deploying sticky “flypaper” traps. The upper surfaces of their leaves are covered with glandular tentacles that secrete glistening drops of mucilage. This substance acts as an adhesive, entangling insects that land on it. Once prey is caught, the tentacles slowly bend inward to maximize contact and release enzymes. By extracting vital minerals from their captured prey, carnivorous plants secure a competitive advantage in habitats where more conventional plants would quickly perish from starvation."
    ],
    items: [
      {
        id: "rd-exc-006",
        section: "reading",
        category: "except_not",
        difficulty: 2,
        prompt: "The passage mentions all of the following as mechanisms used by carnivorous plants to trap prey EXCEPT",
        options: [
          "Snap traps activated by sensory hairs",
          "Deep cavities filled with fluid",
          "Vines that wrap tightly around insects",
          "Sticky secretions that act as adhesive"
        ],
        answer: 2,
        explanation: {
          rule: "Scan the passage for the items in the list. The correct answer is the one not found in the text.",
          why: "Paragraph 2 describes the Venus flytrap (snap traps) and pitcher plants (deep cavities). Paragraph 3 describes sundews (sticky secretions). Wrapping vines are never mentioned.",
          trap: "Paragraph 3 mentions that tentacles 'bend inward', which might sound like wrapping vines, but they are tentacles on a leaf, not vines.",
          distractors: [
            "The Venus flytrap uses this mechanism, as described in paragraph 2.",
            "Pitcher plants use this mechanism, forming 'deep, slippery cavities'.",
            "",
            "Sundews use 'sticky flypaper traps' with mucilage that acts as an adhesive."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-voc-009",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 1,
        prompt: "The word “perish” in paragraph 3 is closest in meaning to",
        options: ["die", "compete", "grow", "escape"],
        answer: 0,
        anchorParagraph: 3,
        lineHint: "perish from starvation",
        explanation: {
          rule: "Substitute the options into the sentence. The correct word must fit seamlessly into the context provided by the surrounding words.",
          why: "The sentence states that conventional plants would 'perish from starvation'. Starvation causes death, making 'die' the only logical synonym.",
          trap: "Compete is in the same sentence ('competitive advantage'), so it might visually trick a rushing reader.",
          distractors: [
            "",
            "To compete from starvation makes no sense.",
            "Starvation prevents growth; it does not cause it.",
            "Plants cannot physically escape from an environment."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-ref-007",
        section: "reading",
        category: "reference",
        difficulty: 2,
        prompt: "The word “their” in paragraph 1 refers to",
        options: ["environments", "soils", "elements", "flora"],
        answer: 3,
        anchorParagraph: 1,
        lineHint: "supplement their diet",
        explanation: {
          rule: "Pronouns refer back to a noun that matches in plurality and makes sense in the context of the action.",
          why: "The phrase says 'these unique flora supplement their diet'. The flora (plants) are the ones supplementing their own diet by eating insects.",
          trap: "Soils is the subject of the previous clause, but soils do not have a 'diet' to supplement.",
          distractors: [
            "Environments do not capture insects to supplement a diet.",
            "Soils lack nutrients, but they do not eat insects.",
            "Elements cannot have a diet.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-inf-009",
        section: "reading",
        category: "inference",
        difficulty: 3,
        prompt: "It can be inferred from the passage that pitcher plants",
        options: [
          "require insects to brush against their trigger hairs to close",
          "do not actively move to capture their prey",
          "grow primarily in soils that are rich in nitrogen",
          "digest prey much faster than the Venus flytrap"
        ],
        answer: 1,
        anchorParagraph: 2,
        explanation: {
          rule: "An inference combines stated facts to draw a necessary conclusion.",
          why: "The passage states that the Venus flytrap uses an 'active' trap with moving parts. In contrast, pitcher plants employ a 'passive' mechanism where insects just 'lose their footing' and tumble in. Therefore, pitcher plants do not actively move to catch prey.",
          trap: "A is a true statement about Venus flytraps, not pitcher plants.",
          distractors: [
            "This describes the Venus flytrap, not the pitcher plant.",
            "",
            "Paragraph 1 establishes that all these plants grow in nutrient-poor soils lacking nitrogen.",
            "The passage does not compare the speed of digestion between the two plants."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-org-006",
        section: "reading",
        category: "organization",
        difficulty: 3,
        prompt: "How does the author organize the passage?",
        options: [
          "By classifying different types of carnivorous plants based on where they grow",
          "By explaining a general biological adaptation and then giving specific examples",
          "By contrasting the nutritional needs of carnivorous plants with those of conventional plants",
          "By detailing the chronological evolution of plant trapping mechanisms"
        ],
        answer: 1,
        explanation: {
          rule: "Determine the structural relationship between the first paragraph and the subsequent ones.",
          why: "Paragraph 1 introduces the general adaptation (capturing insects due to poor soil). Paragraphs 2 and 3 provide specific examples of this adaptation (Venus flytrap, pitcher plant, sundew).",
          trap: "C is mentioned in the final sentence, but the passage as a whole is organized around mechanisms of trapping, not a continuous contrast of nutritional needs.",
          distractors: [
            "The plants are classified by their trapping mechanisms, not by their geographic locations.",
            "",
            "While mentioned briefly at the end, contrasting nutritional needs is not the organizing principle of the passage.",
            "The passage mentions they evolved over millions of years, but it does not trace a chronological timeline."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  },
  {
    id: "rp-015",
    title: "Ragtime",
    topic: "American music history",
    wordCount: 220,
    paragraphs: [
      "At the turn of the twentieth century, a new musical style called ragtime swept across the United States, altering the trajectory of American popular music. Emerging primarily from African American communities in Midwestern cities, ragtime was characterized by its syncopated rhythm. The melody is played in a ragged, off-beat manner against a steady bass line, creating a propulsive momentum that captivated listeners and inspired a national dance craze.",
      "While ragtime was occasionally performed by brass bands, it was quintessentially piano music. Scott Joplin, often celebrated as the “King of Ragtime,” was its most prominent composer. His 1899 publication of the “Maple Leaf Rag” became an unprecedented success, selling over a million copies of sheet music. This achievement was significant because it established sheet music, rather than live performances, as the primary medium for disseminating popular music in that era, allowing amateur pianists nationwide to master the rhythms.",
      "The dominance of ragtime was relatively brief, waning by the late 1910s as it gradually evolved into early jazz. However, its historical impact was profound. Ragtime was the first instrumental music of African American origin to achieve mainstream popularity among a broad cross-section of the public. It broke down racial barriers in the music publishing industry and introduced complex rhythmic concepts that remained foundational to jazz and popular music for decades to come."
    ],
    items: [
      {
        id: "rd-main-009",
        section: "reading",
        category: "main_idea",
        difficulty: 2,
        prompt: "What is the passage mainly about?",
        options: [
          "The life and musical achievements of Scott Joplin",
          "The differences between ragtime and early jazz",
          "The origins, characteristics, and historical impact of ragtime",
          "The role of sheet music in early American popular culture"
        ],
        answer: 2,
        explanation: {
          rule: "The main idea encompasses the subject of all paragraphs without being overly specific to just one.",
          why: "Paragraph 1 covers origins and characteristics, Paragraph 2 covers its spread and composers, and Paragraph 3 covers its decline and lasting legacy. Option C summarizes this entire arc.",
          trap: "Scott Joplin is prominently featured in paragraph 2, making option A tempting, but he is only an example within the broader discussion of ragtime.",
          distractors: [
            "Scott Joplin is discussed only in paragraph 2; the passage is about the genre as a whole.",
            "Jazz is only mentioned at the end as what ragtime evolved into; they are not contrasted.",
            "",
            "Sheet music is highlighted in paragraph 2, but it is a detail explaining ragtime's spread, not the main topic."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-pur-007",
        section: "reading",
        category: "author_purpose",
        difficulty: 3,
        prompt: "Why does the author mention the “Maple Leaf Rag” in paragraph 2?",
        options: [
          "To argue that Scott Joplin was a better composer than his contemporaries",
          "To demonstrate the financial struggles of African American musicians",
          "To give an example of a brass band arrangement of ragtime",
          "To illustrate the massive commercial success of ragtime sheet music"
        ],
        answer: 3,
        anchorParagraph: 2,
        lineHint: "Maple Leaf Rag",
        explanation: {
          rule: "Identify what the author is trying to prove in the sentence where the specific example is used.",
          why: "The author notes that the publication of 'Maple Leaf Rag' sold over a million copies, using it to show how sheet music became the primary, highly successful medium for disseminating the genre.",
          trap: "A assumes the author is ranking Joplin, but the passage only calls him 'prominent', not inherently superior in quality.",
          distractors: [
            "The author notes Joplin was prominent but does not compare his skill to others.",
            "The piece was an 'unprecedented success,' which indicates financial triumph, not struggle.",
            "The text specifies that the success was in 'sheet music' for piano, not for brass bands.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-det-009",
        section: "reading",
        category: "stated_detail",
        difficulty: 1,
        prompt: "According to paragraph 1, what musical feature characterizes ragtime?",
        options: [
          "A slow and steady tempo",
          "A syncopated, off-beat melody",
          "The absence of a bass line",
          "The use of multiple vocal harmonies"
        ],
        answer: 1,
        anchorParagraph: 1,
        lineHint: "characterized by its syncopated rhythm",
        explanation: {
          rule: "Match the detail in the question to a direct statement in the indicated paragraph.",
          why: "Paragraph 1 explicitly states that ragtime is 'characterized by its syncopated rhythm' and describes the melody as being played in a 'ragged, off-beat manner'.",
          trap: "A is wrong because the passage says it has 'propulsive momentum', implying energy, not slowness.",
          distractors: [
            "The passage describes it as having 'propulsive momentum', not a slow tempo.",
            "",
            "The passage explicitly says it is played 'against a steady bass line'.",
            "Vocals are never mentioned; ragtime is described as instrumental."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-rst-006",
        section: "reading",
        category: "restatement",
        difficulty: 3,
        prompt: "Which of the following best expresses the essential information in the highlighted sentence? \n“Ragtime was the first instrumental music of African American origin to achieve mainstream popularity among a broad cross-section of the public.”",
        options: [
          "Ragtime became widely popular, making it the earliest African American instrumental genre to reach a diverse national audience.",
          "Because it was so popular, ragtime forced the American public to listen to more instrumental music.",
          "African American musicians created ragtime so they could achieve mainstream popularity with the general public.",
          "Most of the American public preferred ragtime over other instrumental music because of its African American origins."
        ],
        answer: 0,
        anchorParagraph: 3,
        lineHint: "Ragtime was the first instrumental music",
        explanation: {
          rule: "The correct restatement must keep the original meaning: it was the 'first' of its kind ('African American instrumental') to achieve 'mainstream popularity' ('diverse national audience').",
          why: "Option A accurately rephrases 'first instrumental music of African American origin' to 'earliest African American instrumental genre' and 'broad cross-section of the public' to 'diverse national audience.'",
          trap: "C shifts the intent; the original sentence states a historical outcome, while C implies it was a deliberate strategy by the musicians.",
          distractors: [
            "",
            "The sentence does not claim it forced the public to listen to anything.",
            "The sentence states the outcome of the music, not the motives of the creators.",
            "The text says nothing about the public's preferences being driven by the music's origins."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-loc-006",
        section: "reading",
        category: "where_in_passage",
        difficulty: 2,
        prompt: "Where in the passage does the author mention the genre that eventually replaced ragtime?",
        options: [
          "Paragraph 1",
          "The beginning of Paragraph 2",
          "The beginning of Paragraph 3",
          "The end of Paragraph 3"
        ],
        answer: 2,
        explanation: {
          rule: "Scan the text for mentions of what came after ragtime.",
          why: "The first sentence of paragraph 3 states that ragtime's dominance waned in the late 1910s 'as it gradually evolved into early jazz'.",
          trap: "D is tempting because jazz is mentioned again at the end of paragraph 3, but it was introduced as the replacement at the beginning.",
          distractors: [
            "Paragraph 1 discusses origins, not what replaced it.",
            "Paragraph 2 discusses composers and sheet music.",
            "",
            "The end of paragraph 3 discusses ragtime's legacy, not the timing of its replacement."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  },
  {
    id: "rp-016",
    title: "Catalysts",
    topic: "physical chemistry",
    wordCount: 233,
    paragraphs: [
      "In chemical reactions, the speed at which reactants are converted into products can be dramatically accelerated by the introduction of a catalyst. A catalyst is a substance that lowers the activation energy required for a reaction to proceed, without being consumed or permanently altered in the process. Because they are not used up, catalysts can participate in multiple reaction cycles, making them highly efficient. Even tiny amounts of a catalytic material can facilitate the transformation of massive quantities of reactants.",
      "Catalysts are generally classified into two categories based on their physical state relative to the reacting substances. Homogeneous catalysts exist in the same phase as the reactants, typically as dissolved molecules in a liquid solution. This intimate mixing allows for highly uniform interactions but makes separating the catalyst from the final product difficult. Heterogeneous catalysts exist in a different phase, most commonly as solid surfaces over which gaseous or liquid reactants flow. The automotive catalytic converter is a classic example.",
      "In biological systems, nature employs its own sophisticated catalysts known as enzymes. These complex proteins are remarkably specific, often designed to catalyze only a single biochemical reaction within a cell. Enzymes operate efficiently at mild temperatures, unlike many industrial catalysts that require extreme heat and pressure. Without the rapid reaction rates enabled by these biological catalysts, the complex chemical processes necessary to sustain life would occur far too slowly to support living organisms."
    ],
    items: [
      {
        id: "rd-exc-007",
        section: "reading",
        category: "except_not",
        difficulty: 2,
        prompt: "According to paragraph 1, all of the following are true of catalysts EXCEPT:",
        options: [
          "They are permanently changed by the reactions they participate in.",
          "They lower the activation energy required for a reaction.",
          "They accelerate the conversion of reactants into products.",
          "They can be used repeatedly in multiple reaction cycles."
        ],
        answer: 0,
        anchorParagraph: 1,
        explanation: {
          rule: "Find the option that contradicts a stated fact in the text.",
          why: "Paragraph 1 explicitly states that a catalyst acts 'without being consumed or permanently altered in the process.' Therefore, option A is false and is the correct answer.",
          trap: "Catalysts *cause* change, which might make a rushing reader assume they are also changed.",
          distractors: [
            "",
            "This is true; the text says they lower 'the activation energy required'.",
            "This is true; the text says they accelerate 'the speed at which reactants are converted'.",
            "This is true; the text says they 'can participate in multiple reaction cycles'."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-voc-010",
        section: "reading",
        category: "vocabulary_in_context",
        difficulty: 3,
        prompt: "The word “intimate” in paragraph 2 is closest in meaning to",
        options: ["close", "private", "affectionate", "complex"],
        answer: 0,
        anchorParagraph: 2,
        lineHint: "intimate mixing allows",
        explanation: {
          rule: "Choose the synonym that correctly matches how the word is used in a scientific context.",
          why: "The phrase 'intimate mixing' refers to molecules dissolved together in the same liquid phase. In physical chemistry, 'intimate' means very close physical contact.",
          trap: "B and C are common meanings of 'intimate' in interpersonal human contexts, but they are completely nonsensical when applied to molecules.",
          distractors: [
            "",
            "Molecules do not possess privacy.",
            "Molecules do not have emotions or affection.",
            "While the reaction may be complex, 'intimate' specifically describes the physical closeness of the mixing."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-ref-008",
        section: "reading",
        category: "reference",
        difficulty: 2,
        prompt: "The phrase “a classic example” in paragraph 2 refers to an example of",
        options: [
          "a biological enzyme",
          "a homogeneous catalyst",
          "a heterogeneous catalyst",
          "a final product"
        ],
        answer: 2,
        anchorParagraph: 2,
        lineHint: "catalytic converter is a classic example",
        explanation: {
          rule: "The referent is found by looking at the immediately preceding topic.",
          why: "The preceding sentence describes 'Heterogeneous catalysts' which exist as solid surfaces over which gases flow. The catalytic converter is then given as an example of this category.",
          trap: "B is the other type of catalyst discussed in the paragraph, but the text had already moved on to discussing heterogeneous catalysts.",
          distractors: [
            "Enzymes are discussed in paragraph 3.",
            "Homogeneous catalysts are discussed earlier in the paragraph, not immediately prior.",
            "",
            "The converter is not the final product of a chemical reaction."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-inf-010",
        section: "reading",
        category: "inference",
        difficulty: 3,
        prompt: "What can be inferred from paragraph 3 about industrial catalysts?",
        options: [
          "They are generally less specific than biological enzymes.",
          "They require extremely cold conditions to function properly.",
          "They are primarily composed of complex proteins.",
          "They often need harsh environmental conditions to work efficiently."
        ],
        answer: 3,
        anchorParagraph: 3,
        explanation: {
          rule: "Use a contrast provided in the text to infer a characteristic of the opposite subject.",
          why: "The passage states that enzymes operate at 'mild temperatures', *unlike* many industrial catalysts that 'require extreme heat and pressure'. Extreme heat and pressure represent harsh environmental conditions.",
          trap: "A might be scientifically true in reality, but it cannot be inferred from the text, which contrasts their operating conditions, not their specificity.",
          distractors: [
            "The passage notes that enzymes are specific, but doesn't explicitly compare industrial catalysts on specificity.",
            "The text says they require extreme *heat*, not cold.",
            "Enzymes are complex proteins, not industrial catalysts.",
            ""
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      },
      {
        id: "rd-ton-006",
        section: "reading",
        category: "tone_attitude",
        difficulty: 3,
        prompt: "Which of the following best describes the author's tone when discussing enzymes in paragraph 3?",
        options: [
          "Appreciative",
          "Doubtful",
          "Indifferent",
          "Critical"
        ],
        answer: 0,
        anchorParagraph: 3,
        explanation: {
          rule: "Identify the author's attitude by looking at the adjectives used to describe the subject.",
          why: "The author describes enzymes as 'sophisticated,' 'remarkably specific,' and enabling rates without which life could not exist. This language shows appreciation and respect for their biological function.",
          trap: "A student might choose Indifferent because it's a science passage, but the use of positive qualitative words ('sophisticated', 'remarkably') elevates it beyond pure neutrality.",
          distractors: [
            "",
            "The author expresses no doubt about how enzymes work.",
            "The author uses strong positive adjectives, showing more engagement than indifference.",
            "The author does not criticize or find fault with enzymes."
          ]
        },
        verified: true,
        addedOn: "2026-09-12"
      }
    ]
  }
];
