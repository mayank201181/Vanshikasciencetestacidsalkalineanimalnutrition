import type { QA, QuestionSet } from "../types";

export const QA_SET_1: QuestionSet<QA> = {
  id: "written-1",
  title: "Written 1 · Core answers",
  subtitle: "Short written answers on both topics — marked instantly",
  topic: "mixed",
  questions: [
    // ───────────────────────── w1-q01 ─────────────────────────
    {
      id: "w1-q01",
      topic: "aa",
      section: "aa-indicators",
      difficulty: "warmup",
      question:
        "Describe how you would use red and blue litmus paper to find out whether a solution is acidic, alkaline or neutral.",
      marks: 3,
      hints: [
        "Dip one strip of each colour into the solution. Each colour of litmus can only change one way. Which strip would change in an acid?",
        "Acids and alkalis make litmus go opposite colours. What would you see if the solution is neither an acid nor an alkali?",
      ],
      modelAnswer:
        "Dip a strip of red litmus paper and a strip of blue litmus paper into the solution.\n\n- If the **blue litmus turns red**, the solution is **acidic**.\n- If the **red litmus turns blue**, the solution is **alkaline**.\n- If **neither paper changes colour** (blue stays blue and red stays red), the solution is **neutral**.",
      markScheme: [
        {
          point: "Blue litmus paper turns red in an acidic solution",
          keywords: [
            "turne red+acids",
            "turne red+acidic",
            "goes red+acids",
            "goes red+acidic",
            "litmus red+acids",
            "paper red+acids",
            "to red+acids",
            "to red+acidic",
            "yields red+acids",
            "red in acids",
          ],
          feedback:
            "Acids turn **blue litmus red**. Red litmus stays red in an acid, so it is the blue strip that shows you an acid.",
        },
        {
          point: "Red litmus paper turns blue in an alkaline solution",
          keywords: [
            "turne blue+alkal",
            "goes blue+alkal",
            "to blue+alkal",
            "litmus blue+alkal",
            "paper blue+alkal",
            "becomes blue+alkal",
            "yields blue+alkal",
            "blue in alkal",
            "blue in an alkal",
          ],
          feedback:
            "Alkalis turn **red litmus blue**. Blue litmus stays blue in an alkali, so it is the red strip that shows you an alkali.",
        },
        {
          point: "If neither paper changes colour, the solution is neutral",
          keywords: [
            "neither+neutral",
            "no change+neutral",
            "no colour change+neutral",
            "staye the same+neutral",
            "doesn't change+neutral",
            "doesnt change+neutral",
            "don't change+neutral",
            "not change+neutral",
            "nothing+neutral",
            "staye blue+staye red+neutral",
          ],
          feedback:
            "If **neither strip changes colour** (blue stays blue and red stays red), the solution is **neutral**. Litmus never turns green: green is a universal indicator colour.",
        },
      ],
      commonError:
        "Saying litmus turns green in a neutral solution. That is universal indicator; in a neutral solution litmus simply does not change. The other slip is swapping the papers: blue litmus turns red in acid, and red litmus turns blue in alkali.",
      strategy: "Compare and contrast",
    },

    // ───────────────────────── w1-q02 ─────────────────────────
    {
      id: "w1-q02",
      topic: "an",
      section: "an-nutrients",
      difficulty: "warmup",
      question:
        "State the main job of each of these nutrients: (a) carbohydrates, (b) proteins, (c) fibre.",
      marks: 3,
      hints: [
        "Think about why athletes eat pasta before a race, and what your body needs to do after you cut yourself or strain a muscle.",
        "Fibre cannot be digested. So how can it still help your digestive system?",
      ],
      modelAnswer:
        "- **(a) Carbohydrates** are the main source of **energy** (e.g. bread and pasta).\n- **(b) Proteins** are needed for **growth and repair**, e.g. building and repairing muscle.\n- **(c) Fibre** cannot be digested, but it **keeps food and faeces moving** through the digestive system, which **prevents constipation**.",
      markScheme: [
        {
          point: "Carbohydrates provide energy",
          keywords: ["energy", "energ", "engery", "enegry"],
          feedback:
            "Carbohydrates (like the starch in bread and pasta) are the body's main source of **energy**.",
        },
        {
          point: "Proteins are for growth and repair",
          keywords: [
            "growth",
            "grows",
            "repair",
            "repare",
            "build+muscle",
            "build+body",
            "new cells",
          ],
          feedback:
            "Proteins are needed for **growth and repair**, for example building and repairing muscle after sport.",
        },
        {
          point: "Fibre keeps food and faeces moving through the gut / prevents constipation",
          keywords: [
            "constipat",
            "constipation",
            "food moving",
            "food moves",
            "food along",
            "moving+gut",
            "faeces",
            "toilet",
            "bulk",
          ],
          feedback:
            "Fibre cannot be digested, but it **keeps food and faeces moving** through the digestive system and **prevents constipation**. Just writing 'helps digestion' is too vague to get the mark.",
        },
      ],
      commonError:
        "Saying fibre gives energy, or only writing 'fibre helps digestion'. Fibre cannot be digested at all. Its job is to keep food and faeces moving through the gut and prevent constipation.",
      strategy: "Recall the keyword",
    },

    // ───────────────────────── w1-q03 ─────────────────────────
    {
      id: "w1-q03",
      topic: "aa",
      section: "aa-ph",
      difficulty: "core",
      question:
        "Solution X has pH 2, solution Y has pH 7 and solution Z has pH 11. For each solution, give the colour universal indicator would turn and say whether the solution is acidic, neutral or alkaline.",
      marks: 3,
      hints: [
        "Picture the universal indicator colour chart. It runs like a rainbow from pH 0 to pH 14.",
        "Which pH is neutral? Is a pH below it acidic or alkaline? What about a pH above it?",
      ],
      modelAnswer:
        "- **X (pH 2):** universal indicator turns **red**, so X is **strongly acidic**.\n- **Y (pH 7):** universal indicator turns **green**, so Y is **neutral**.\n- **Z (pH 11):** universal indicator turns **dark blue/purple**, so Z is **strongly alkaline**.",
      markScheme: [
        {
          point: "X (pH 2): red, (strongly) acidic",
          keywords: ["red+acids", "red+acidic", "red+asid", "red+acedic"],
          feedback:
            "pH 2 is near the bottom of the scale, so universal indicator turns **red** and X is **strongly acidic**.",
        },
        {
          point: "Y (pH 7): green, neutral",
          keywords: ["green+neutral", "green+neutal", "green+nuetral", "green+neither"],
          feedback:
            "pH 7 is exactly in the middle of the scale. Universal indicator turns **green** and Y is **neutral**.",
        },
        {
          point: "Z (pH 11): dark blue / purple, (strongly) alkaline",
          keywords: [
            "purple+alkal",
            "blue+alkal",
            "violet+alkal",
            "purpel+alkal",
          ],
          feedback:
            "pH 11 is near the top of the scale, so universal indicator turns **dark blue or purple** and Z is **strongly alkaline**.",
        },
      ],
      commonError:
        "Mixing up the ends of the scale (a high pH like 11 is alkaline, not acidic), or giving only the colours without saying acidic, neutral or alkaline for each solution.",
      strategy: "Use the pH scale",
    },

    // ───────────────────────── w1-q04 ─────────────────────────
    {
      id: "w1-q04",
      topic: "an",
      section: "an-food-tests",
      difficulty: "core",
      question:
        "Describe how to test a food for sugar using Benedict's solution. Include what you would see if sugar is present.",
      marks: 4,
      hints: [
        "Solid food has to be prepared first so that any sugar can get into a liquid. What would you do to it?",
        "Benedict's solution starts off blue and only works when it is warmed. How would you heat it safely, and which colours show sugar?",
      ],
      modelAnswer:
        "- Crush a small piece of the food and mix it with a little water in a test tube.\n- Add a few drops of **Benedict's solution** (it is blue).\n- **Heat** the test tube in a **hot water bath** for a few minutes.\n- If sugar is present, the blue colour changes to **green, yellow, orange or brick red**. Brick red means there is a lot of sugar. If it stays blue, there is no sugar.",
      markScheme: [
        {
          point: "Crush or chop the food and mix it with a little water",
          keywords: [
            "crush",
            "grind",
            "chopp",
            "mashe",
            "cut up",
            "small pieces",
            "dissolve",
            "with water",
            "add water",
            "food and water",
          ],
          feedback:
            "First prepare the food: **crush or chop it and mix it with a little water** in a test tube, so any sugar dissolves and can react.",
        },
        {
          point: "Add Benedict's solution (which is blue)",
          keywords: [
            "add+benedict",
            "adding+benedict",
            "added+benedict",
            "pour+benedict",
            "put+benedict",
            "drops+benedict",
            "mix+benedict",
            "with benedict",
          ],
          feedback:
            "Next, **add a few drops of Benedict's solution** to the food sample. It starts off blue.",
        },
        {
          point: "Heat in a hot water bath for a few minutes",
          keywords: [
            "heat",
            "heated",
            "heating",
            "water bath",
            "hot water",
            "warm",
            "boils",
            "boiling",
            "bunsen",
          ],
          feedback:
            "Benedict's only works when it is **heated**. Put the test tube in a **hot water bath** for a few minutes.",
        },
        {
          point: "Positive result: blue changes to green / yellow / orange / brick red (brick red = lots of sugar)",
          keywords: ["brick red", "brick", "red", "orang", "yellow", "green"],
          feedback:
            "Give the result. If sugar is present, the blue colour changes to **green, yellow, orange or brick red**, and brick red means lots of sugar. If it stays blue, there is no sugar.",
        },
      ],
      commonError:
        "Forgetting to heat. Benedict's solution does not change colour unless it is heated in a hot water bath. Also mixing up the tests: blue-black is iodine (starch) and purple/lilac is biuret (protein).",
      strategy: "Think like a scientist (fair test)",
    },

    // ───────────────────────── w1-q05 ─────────────────────────
    {
      id: "w1-q05",
      topic: "aa",
      section: "aa-neutralisation",
      difficulty: "core",
      question:
        "Describe how you could make a neutral solution from potassium hydroxide and nitric acid, and then obtain solid crystals of the salt. Name the salt formed.",
      marks: 4,
      hints: [
        "How will you know exactly when the solution has become neutral?",
        "The salt is dissolved in the water. How can you get rid of the water but keep the salt? To name it: metal first, then the part that comes from the acid.",
      ],
      modelAnswer:
        "- Put some nitric acid in a beaker and add a few drops of **universal indicator** (it turns red).\n- Add potassium hydroxide solution **a little at a time**, stirring, until the indicator turns **green (pH 7)**. The solution is now neutral.\n- Pour the neutral solution into an **evaporating basin** and heat it gently (or leave it somewhere warm) so the **water evaporates**. Crystals of the salt are left behind.\n- The salt is **potassium nitrate**: potassium hydroxide + nitric acid → potassium nitrate + water.",
      markScheme: [
        {
          point: "Uses an indicator (e.g. universal indicator) or a pH probe to show when it is neutral",
          keywords: [
            "indicator",
            "universal",
            "indicater",
            "ph probe",
            "ph meter",
            "ph paper",
            "litmus",
          ],
          feedback:
            "You need a way to tell when the solution is neutral. Add a few drops of **universal indicator** (or use a pH probe).",
        },
        {
          point: "Adds the alkali a little at a time until the indicator turns green (pH 7)",
          keywords: [
            "green",
            "ph 7",
            "ph7",
            "ph of 7",
            "drop by drop",
            "little at a time",
            "bit at a time",
            "until neutral",
            "until it is neutral",
            "until it's neutral",
          ],
          feedback:
            "Add the potassium hydroxide **a little at a time** (stirring) and stop when the indicator turns **green, which is pH 7** (neutral).",
        },
        {
          point: "Evaporates the water (heat in an evaporating basin or leave in a warm place)",
          keywords: [
            "evaporat",
            "heat",
            "boils",
            "boiling",
            "warm place",
            "leave+dry",
            "dry out",
            "windowsill",
            "window sill",
            "basin",
          ],
          feedback:
            "The salt is dissolved, so you need to **evaporate the water**. Heat it gently in an evaporating basin or leave it in a warm place, and the salt crystals are left behind.",
        },
        {
          point: "Names the salt as potassium nitrate",
          keywords: [
            "potassium nitrat",
            "potasium nitrat",
            "pottasium nitrat",
            "potassuim nitrat",
          ],
          feedback:
            "Metal first, then the acid part: potassium hydroxide + nitric acid makes **potassium nitrate** (+ water). Nitric acid always gives a **nitrate**.",
        },
      ],
      commonError:
        "Calling the salt 'potassium nitride' or 'potassium nitric'. Nitric acid always makes a nitrate. Another lost mark is saying the salt evaporates: it is the WATER that evaporates, and the salt crystals are left behind.",
      strategy: "Think like a scientist (fair test)",
    },

    // ───────────────────────── w1-q06 ─────────────────────────
    {
      id: "w1-q06",
      topic: "an",
      section: "an-enzymes",
      difficulty: "core",
      question:
        "Name the enzyme that digests protein, the product it makes, and one place in the body where this happens.",
      marks: 3,
      hints: [
        "Enzyme names usually come from the food they break down, with '-ase' on the end.",
        "Proteins are long chains of smaller building blocks. What are they called? And which organ has acid that helps this enzyme work?",
      ],
      modelAnswer:
        "The enzyme is **protease**. It breaks proteins down into **amino acids**. This happens in the **stomach** (and also in the **small intestine**).",
      markScheme: [
        {
          point: "Protease",
          keywords: ["protease", "proteaze", "protiase", "pepsin", "trypsin"],
          feedback:
            "The enzyme that digests protein is **protease**. Enzyme names usually end in '-ase': protein is the food, protease is the enzyme.",
        },
        {
          point: "Amino acids",
          keywords: ["amino", "amino acid", "ammino", "amnio"],
          feedback:
            "Protease breaks proteins down into **amino acids**, which are small and soluble enough to be absorbed.",
        },
        {
          point: "In the stomach or the small intestine",
          keywords: [
            "stomach",
            "stomache",
            "small intestine",
            "small intestines",
            "duodenum",
            "small bowel",
          ],
          feedback:
            "Protein is digested in the **stomach** (which has acid and protease) and in the **small intestine**. The pancreas makes protease, but the digestion itself happens in the small intestine.",
        },
      ],
      commonError:
        "Writing 'protein' (the food) instead of 'protease' (the enzyme), or naming the pancreas or large intestine as the place. The pancreas makes protease, but protein is digested in the stomach and small intestine.",
      strategy: "Recall the keyword",
    },

    // ───────────────────────── w1-q07 ─────────────────────────
    {
      id: "w1-q07",
      topic: "aa",
      section: "aa-salts",
      difficulty: "core",
      question:
        "Calcium hydroxide is added to nitric acid until the solution is neutral. Write the word equation for this reaction and name the salt formed.",
      marks: 3,
      hints: [
        "A word equation has the reactants on the left of the arrow and the products on the right. The two reactants are named in the question.",
        "Neutralisation always makes a salt and one other product. The salt's first word comes from the metal in the alkali; the second comes from nitric acid.",
      ],
      modelAnswer:
        "**calcium hydroxide + nitric acid → calcium nitrate + water**\n\nThe reactants (calcium hydroxide and nitric acid) go on the left of the arrow and the products go on the right. The reaction produces the salt **calcium nitrate** and **water**.",
      markScheme: [
        {
          point: "The salt is calcium nitrate",
          keywords: [
            "calcium nitrat",
            "calcuim nitrat",
            "calsium nitrat",
            "calium nitrat",
          ],
          feedback:
            "Metal first, acid part second: calcium hydroxide + nitric acid makes **calcium nitrate**. Nitric acid always gives a nitrate (not a nitride).",
        },
        {
          point: "Water is the other product",
          keywords: ["water", "h2o", "watter", "warter"],
          feedback:
            "Every acid + alkali neutralisation makes a salt **and water**. Don't forget water on the products side.",
        },
        {
          point: "Written as reactants → products (calcium hydroxide + nitric acid on the left of the arrow)",
          keywords: [
            "yields+hydroxide+nitric",
            "makes+hydroxide+nitric",
            "produc+hydroxide+nitric",
            "forms calcium+hydroxide+nitric",
            "gives+hydroxide+nitric",
            "creat+hydroxide+nitric",
            "reactant+product",
          ],
          feedback:
            "Write it as **reactants → products**: calcium hydroxide + nitric acid → calcium nitrate + water. Use an arrow (you can type ->), not an equals sign.",
        },
      ],
      commonError:
        "Calling the salt 'calcium nitride' or 'calcium nitric', forgetting water as the second product, or using an equals sign instead of an arrow.",
      strategy: "Name the salt (metal first, acid second)",
    },

    // ───────────────────────── w1-q08 ─────────────────────────
    {
      id: "w1-q08",
      topic: "an",
      section: "an-absorption",
      difficulty: "core",
      question: "Explain three ways the small intestine is adapted for absorbing digested food.",
      marks: 3,
      hints: [
        "Think about the tiny finger-like structures that line the inside of the small intestine.",
        "For each feature, ask: does it give more area, a shorter distance, or a way to carry the food away quickly?",
      ],
      modelAnswer:
        "- The inside is covered in millions of finger-like **villi**, which give a very **large surface area**, so more digested food can be absorbed at once.\n- The walls of the villi are **very thin (only one cell thick)**, so digested food has only a **short distance** to travel into the blood.\n- Each villus has a network of **capillaries** (a good **blood supply**), which carries the absorbed food away quickly so more can be absorbed.",
      markScheme: [
        {
          point: "Villi give a very large surface area",
          keywords: [
            "villi",
            "villus",
            "surface area",
            "surface",
            "microvilli",
            "finger like",
            "folded",
            "folds",
          ],
          feedback:
            "The wall is covered in millions of finger-like **villi**, which give a very **large surface area**, so more food can be absorbed at once.",
        },
        {
          point: "Thin walls (one cell thick) give a short distance for absorption",
          keywords: [
            "thin walls",
            "wall is thin",
            "walls are thin",
            "very thin",
            "thin lining",
            "thin layer",
            "thinner",
            "cell thick",
            "one cell",
            "short distance",
          ],
          feedback:
            "The walls of the villi are **very thin (one cell thick)**, so digested food only has a **short distance** to travel into the blood.",
        },
        {
          point: "Lots of capillaries / a good blood supply carry the absorbed food away",
          keywords: [
            "capil",
            "cappil",
            "blood supply",
            "blood vessel",
            "blood flow",
            "lots of blood",
          ],
          feedback:
            "Each villus has lots of **capillaries** (a good **blood supply**) that carry the absorbed food away quickly, so more can be absorbed.",
        },
      ],
      commonError:
        "Naming a feature without saying how it helps: villi give a large surface area, thin walls give a short distance, and capillaries carry the food away. Also, don't mix this up with the large intestine, which absorbs water, not digested food.",
      strategy: "Recall the keyword",
    },

    // ───────────────────────── w1-q09 ─────────────────────────
    {
      id: "w1-q09",
      topic: "aa",
      section: "aa-hazards",
      difficulty: "core",
      question:
        "Explain why a dilute acid is less hazardous than a concentrated acid, and give one precaution when using acids.",
      marks: 3,
      hints: [
        "What has been added to make an acid dilute? Think about how many acid particles there are in each cm³.",
        "Which hazard symbol goes on dilute acids? Then think of something you do or wear in the lab to stay safe.",
      ],
      modelAnswer:
        "A dilute acid has **fewer acid particles in the same volume** than a concentrated acid (more of it is water). This makes it **less corrosive**: concentrated acids carry the corrosive hazard symbol, but dilute acids are often only an **irritant** (exclamation mark symbol). One precaution is to **wear eye protection (goggles)** so acid cannot splash into your eyes.",
      markScheme: [
        {
          point: "A dilute acid has fewer acid particles in the same volume",
          keywords: [
            "fewer+partic",
            "less+partic",
            "not as many+partic",
            "partic+same volume",
            "partic+spread",
            "fewer acids",
            "less acids",
          ],
          feedback:
            "Explain it using particles: a dilute acid has **fewer acid particles in the same volume** (more of it is water).",
        },
        {
          point: "So it is less corrosive (often only an irritant)",
          keywords: [
            "less corrosive",
            "not as corrosive",
            "not corrosive",
            "more corrosive",
            "corrosive+concentrat",
            "irritant",
            "iritant",
            "exclamation",
            "less damage",
          ],
          feedback:
            "Fewer acid particles means it is **less corrosive**. Concentrated acids carry the corrosive symbol, but dilute acids are often only an **irritant** (exclamation mark symbol).",
        },
        {
          point: "A sensible precaution, e.g. wear eye protection / goggles",
          keywords: [
            "goggle",
            "googles",
            "eye protection",
            "safety glasses",
            "glove",
            "lab coat",
            "clean up",
            "wipe up",
            "wash your",
            "wash it",
          ],
          feedback:
            "A precaution is an **action** that reduces the risk, e.g. **wear eye protection (goggles)**, clean up spills straight away, or wash acid off your skin with lots of water.",
        },
      ],
      commonError:
        "Saying a dilute acid is 'weaker' or 'safe' without explaining that it has fewer acid particles in the same volume. Also, a precaution must be an action (e.g. wear goggles). 'Acids are corrosive' is a hazard, not a precaution.",
      strategy: "Think about particles",
    },

    // ───────────────────────── w1-q10 ─────────────────────────
    {
      id: "w1-q10",
      topic: "an",
      section: "an-system",
      difficulty: "challenge",
      question:
        "Describe what happens to the starch in a mouthful of bread from the mouth to the blood.",
      marks: 4,
      hints: [
        "Follow the bread step by step: mouth → oesophagus → stomach → small intestine → blood. What happens to the starch at each stage?",
        "Two kinds of digestion happen in the mouth. Which enzyme digests starch, where else is it made, and what small molecule does starch end up as?",
      ],
      modelAnswer:
        "- **Mouth:** the **teeth chew** the bread into smaller pieces (**mechanical digestion**), giving a bigger surface area. **Saliva** contains the enzyme **amylase**, which starts breaking the starch down into sugar (maltose).\n- The food is swallowed, pushed down the oesophagus and passes through the stomach (stomach enzymes digest protein, not starch).\n- **Small intestine:** enzymes made in the **pancreas** (carbohydrase, including amylase) **finish** breaking the starch down **into glucose**.\n- **Absorption:** glucose is small and soluble, so it is **absorbed** through the thin walls of the **villi** into the blood capillaries.",
      markScheme: [
        {
          point: "Teeth chew the bread into smaller pieces (mechanical digestion)",
          keywords: [
            "teeth",
            "tooth",
            "chews",
            "chewing",
            "chewed",
            "mechanical",
            "small pieces",
            "grind",
            "crush",
          ],
          feedback:
            "Start in the mouth: the **teeth chew** the bread into smaller pieces (**mechanical digestion**), giving a bigger surface area for enzymes to work on.",
        },
        {
          point: "Amylase in saliva starts breaking starch down into sugar",
          keywords: [
            "amylase+saliva",
            "amylase+mouth",
            "carbohydrase+saliva",
            "saliva+enzyme",
            "saliva+sugar",
            "saliva+maltose",
            "saliva+digest",
            "saliva+break",
          ],
          feedback:
            "**Saliva** contains the enzyme **amylase**, which starts breaking starch down into sugar (maltose). Chemical digestion begins in the mouth.",
        },
        {
          point: "In the small intestine, enzymes from the pancreas (carbohydrase) finish breaking starch into glucose",
          keywords: [
            "pancrea",
            "finish",
            "completed",
            "into glucose",
            "to glucose",
            "small intestine enzyme",
            "small intestine amylase",
            "small intestine carbohydrase",
            "digested in the small intestine",
            "broken down in the small intestine",
          ],
          feedback:
            "In the **small intestine**, enzymes made in the **pancreas** (carbohydrase, including amylase) **finish** breaking the starch down into **glucose**.",
        },
        {
          point: "Glucose is absorbed through the villi of the small intestine into the blood",
          keywords: [
            "absor+blood",
            "absor+glucose",
            "absor+sugar",
            "absor+villi",
            "absor+small intestine",
            "villi",
            "villus",
            "capil",
            "diffus",
          ],
          feedback:
            "Glucose is small and soluble, so it is **absorbed** through the thin walls of the **villi** in the small intestine into the blood capillaries.",
        },
      ],
      commonError:
        "Saying starch is digested in the stomach, or that starch itself is absorbed. Starch is too big to be absorbed. It must first be broken down into glucose (by amylase in the mouth and enzymes from the pancreas in the small intestine), and then glucose passes through the villi into the blood.",
      strategy: "Follow the food",
    },
  ],
};
