import type { QA, QuestionSet } from "../types";

export const QA_SET_2: QuestionSet<QA> = {
  id: "written-2",
  title: "Written 2 · Exam-style",
  subtitle: "Longer answers: practicals, data and explaining — like the hardest test questions",
  topic: "mixed",
  questions: [
    // ---------------------------------------------------------------- w2-q01
    {
      id: "w2-q01",
      topic: "aa",
      section: "aa-investigation",
      difficulty: "core",
      question:
        "A student wants to find out which of three antacid (indigestion) powders works best. Plan a fair test to compare the three powders. In your plan, state the independent variable, the dependent variable and two control variables.",
      marks: 4,
      hints: [
        "The independent variable is the one thing you change on purpose; the dependent variable is what you measure to see the effect.",
        "Antacids neutralise acid. What could you measure to show how much acid each powder deals with? Then think of things that must stay the same so that only the powder changes.",
      ],
      modelAnswer:
        "Put 1 g of the first powder in a flask with some water and a few drops of universal indicator. Add dilute hydrochloric acid drop by drop, swirling, until the indicator turns green, and count the drops. Repeat with the other two powders.\n- **Independent variable:** the type of antacid powder (the brand).\n- **Dependent variable:** how much acid each powder neutralises — the number of drops (volume) of acid needed to turn the indicator green.\n- **Control variables:** the same mass of antacid (1 g) each time and the same concentration of hydrochloric acid (also the same indicator and the same temperature).",
      markScheme: [
        {
          point: "Independent variable: the type (brand) of antacid powder",
          keywords: [
            "type of antacid",
            "types of antacid",
            "type of powder",
            "kind of antacid",
            "brand",
            "which antacid",
            "different antacid",
            "antacid type",
            "variable is the antacid",
            "variable the antacid",
          ],
          feedback:
            "The **independent variable** is the one thing you change on purpose — here, the **type (brand) of antacid**.",
        },
        {
          point:
            "Dependent variable: how much acid each powder neutralises (e.g. the number of drops or volume of acid needed to turn the indicator green, or the mass of antacid needed)",
          keywords: [
            "how much acid",
            "how much antacid",
            "acid needed",
            "antacid needed",
            "drops of acid",
            "acid added",
            "acid neutral",
            "acid to neutral",
            "acid it neutral",
            "final ph",
          ],
          feedback:
            "The **dependent variable** is what you measure: **how much acid each powder neutralises** — e.g. the number of drops (or cm³) of acid needed to turn the indicator green.",
        },
        {
          point:
            "A control variable: the same volume of acid each time (or the same mass of antacid, if the acid is added to the powder)",
          keywords: [
            "same volume",
            "volume of acid",
            "volume of hydrochloric",
            "amount of acid",
            "same mass",
            "mass of antacid",
            "mass of powder",
            "amount of antacid",
            "amount of powder",
            "same weight",
          ],
          feedback:
            "Keep the amounts fixed: use the **same volume of acid** each time (or the **same mass of antacid**, e.g. 1 g, if you add the acid to the powder).",
        },
        {
          point:
            "A second, different control variable: e.g. the same concentration (strength) of acid, the same indicator, or the same temperature",
          keywords: [
            "concentrat",
            "strength",
            "same indicator",
            "amount of indicator",
            "drops of indicator",
            "temperature",
            "same acid",
            "same type of acid",
            "same volume+same mass",
          ],
          feedback:
            "Give a second, different control — e.g. the **same concentration of acid**, the same amount of the same indicator, or the same temperature.",
        },
      ],
      commonError:
        "Mixing up the variables: the independent variable is what YOU change (the type of antacid); the dependent variable is what you MEASURE (how much acid it neutralises). Vague controls like 'the same amount' or 'the same equipment' don't score — say exactly what stays the same, e.g. the same volume and concentration of acid.",
      strategy: "Think like a scientist (fair test)",
    },

    // ---------------------------------------------------------------- w2-q02
    {
      id: "w2-q02",
      topic: "an",
      section: "an-bile",
      difficulty: "core",
      question: "Explain how bile helps the digestion of fats.",
      marks: 3,
      hints: [
        "Which organ makes bile, where is it stored, and where is it released?",
        "Think of washing-up liquid on a greasy pan: what does it do to big blobs of fat — and why would that help an enzyme?",
      ],
      modelAnswer:
        "Bile is made in the **liver**, stored in the gall bladder and released into the small intestine. It **emulsifies** fats: it breaks large fat droplets up into lots of tiny droplets. (It breaks fat UP, not down — bile is not an enzyme.) The tiny droplets have a much larger **surface area**, so the enzyme **lipase** can digest the fat into fatty acids and glycerol much faster.",
      markScheme: [
        {
          point:
            "Bile is made in the liver (stored in the gall bladder) and released into the small intestine",
          keywords: ["liver", "gall bladder", "gallbladder", "small intestine", "intestine"],
          feedback:
            "Bile is made in the **liver**, stored in the **gall bladder** and released into the **small intestine**, where fats are digested.",
        },
        {
          point:
            "It emulsifies fat — breaks big fat droplets into many small droplets (it is not an enzyme)",
          keywords: [
            "emuls",
            "emulsify",
            "droplet",
            "break up",
            "break it up",
            "break them up",
            "fat up",
            "into small",
            "into tiny",
            "small pieces",
          ],
          feedback:
            "Bile **emulsifies** fat: it breaks big fat droplets UP into lots of small droplets. It does not digest fat chemically — bile is not an enzyme.",
        },
        {
          point:
            "This gives a much larger surface area, so the enzyme lipase can digest the fat faster",
          keywords: [
            "surface area",
            "surface",
            "more area",
            "bigger area",
            "larger area",
            "lipase+faster",
            "lipase+quicker",
            "lipase+speed",
            "enzyme+faster",
            "enzyme+quicker",
          ],
          feedback:
            "Lots of small droplets have a much bigger **surface area** than one big blob, so **lipase** can work on more of the fat at once and digest it **faster**.",
        },
      ],
      commonError:
        "Saying bile is an enzyme, or that it 'breaks fat down' into fatty acids. Bile only breaks fat UP into small droplets (emulsifies it); it is the enzyme lipase that actually digests the fat.",
      strategy: "Recall the keyword",
    },

    // ---------------------------------------------------------------- w2-q03
    {
      id: "w2-q03",
      topic: "aa",
      section: "aa-investigation",
      difficulty: "challenge",
      question:
        "A student mixed 1 g of each antacid powder with water and universal indicator, then added dilute hydrochloric acid until the mixture turned green. She did three trials for each antacid. (a) Identify the anomalous result. (b) Calculate the mean for Neutra, ignoring the anomalous result. (c) Which antacid is the most effective? Explain why.",
      table: {
        caption: "Volume of acid neutralised by 1 g of antacid (cm³)",
        headers: ["Antacid", "Trial 1", "Trial 2", "Trial 3"],
        rows: [
          ["Calmo", "20", "22", "21"],
          ["Neutra", "35", "12", "34"],
          ["Settla", "28", "27", "29"],
        ],
      },
      marks: 4,
      hints: [
        "An anomalous result doesn't fit the pattern of the other repeats for the same antacid.",
        "For the mean, add up only the results you are keeping and divide by how many there are. Then ask: which antacid neutralised the most acid per gram?",
      ],
      modelAnswer:
        "- (a) The anomalous result is **12 cm³** (Neutra, trial 2) — it is much lower than Neutra's other two results.\n- (b) Mean = (35 + 34) ÷ 2 = **34.5 cm³**.\n- (c) **Neutra is the most effective**, because 1 g of it neutralised the **largest volume of acid** (a mean of 34.5 cm³, compared with 28 cm³ for Settla and 21 cm³ for Calmo).",
      markScheme: [
        {
          point: "(a) The anomalous result is 12 cm³ (Neutra, trial 2)",
          keywords: ["12", "twelve", "12cm", "12cm3", "neutra trial 2", "second trial"],
          feedback:
            "Compare the repeats in each row: Neutra's trial 2 (**12 cm³**) is far lower than its other two results (35 and 34), so it is the anomaly — probably a mistake in measuring.",
        },
        {
          point: "(b) Mean for Neutra = (35 + 34) ÷ 2 = 34.5 cm³",
          keywords: [
            "34.5",
            "34.5cm",
            "34.5cm3",
            "34.50",
            "34 point 5",
            "thirty four point five",
          ],
          feedback:
            "Leave the anomaly out: (35 + 34) ÷ 2 = **34.5 cm³**. Including the 12 would give 27 cm³, which makes Neutra look worse than it really is.",
        },
        {
          point: "(c) Neutra is the most effective antacid",
          keywords: [
            "neutra is the most",
            "neutra is the best",
            "neutra is most",
            "neutra is best",
            "neutra it neutral",
            "neutra because",
            "neutra neutral",
            "c neutra",
            "effective is neutra",
            "antacid is neutra",
          ],
          feedback:
            "Compare the means: Calmo 21 cm³, Settla 28 cm³, Neutra 34.5 cm³ — so **Neutra** is the most effective.",
        },
        {
          point:
            "Because it neutralised the largest volume of acid per gram (the highest mean)",
          keywords: [
            "most acid",
            "more acid",
            "highe",
            "bigge",
            "largest volume",
            "largest amount",
            "largest mean",
            "more than the other",
            "neutralised the most",
            "neutralised more",
          ],
          feedback:
            "Back up your choice with the data: Neutra neutralised the **largest volume of acid** per gram (the highest mean), so less powder is needed to deal with the same amount of acid.",
        },
      ],
      commonError:
        "Including the anomaly in the mean: (35 + 12 + 34) ÷ 3 = 27 cm³, which wrongly makes Settla (28 cm³) look the best. Always remove the anomaly first, then compare the means.",
      strategy: "Read the data carefully",
    },

    // ---------------------------------------------------------------- w2-q04
    {
      id: "w2-q04",
      topic: "an",
      section: "an-diet",
      difficulty: "core",
      question:
        "A teenager eats mostly crisps, sweets and fizzy drinks. Explain two health problems this diet could cause and suggest two improvements.",
      marks: 4,
      hints: [
        "What do crisps, sweets and fizzy drinks contain lots of — and which nutrients are they missing?",
        "Think 'too much' (fat and sugar give lots of energy) and 'too little' (fibre, vitamins, minerals). For improvements, what could they add or swap?",
      ],
      modelAnswer:
        "- **Obesity:** crisps, sweets and fizzy drinks contain lots of fat and sugar, so the teenager takes in more energy than they use. The extra is stored as fat, so they become overweight.\n- **Constipation:** this food has almost no fibre, so food and faeces don't move along the gut easily. (The diet is also short of vitamins and minerals, which can cause deficiency diseases, and the sugar causes tooth decay.)\n- **Improvements:** eat more **fruit and vegetables** (for vitamins, minerals and fibre), and drink **water** instead of fizzy drinks — or swap sweets for wholegrain foods.",
      markScheme: [
        {
          point:
            "Obesity / becoming overweight — lots of fat and sugar means more energy is taken in than is used, and the extra is stored as fat",
          keywords: [
            "obesity",
            "obese",
            "overweight",
            "over weight",
            "weight gain",
            "gain weight",
            "put on weight",
            "gaining weight",
            "get fat",
            "too much energy",
          ],
          feedback:
            "Crisps, sweets and fizzy drinks are full of fat and sugar. Taking in more energy than you use means the extra is stored as fat, leading to **obesity**.",
        },
        {
          point:
            "A second, different problem: constipation (too little fibre), a deficiency disease such as scurvy (too few vitamins or minerals), or tooth decay (sugar)",
          keywords: [
            "constipat",
            "deficien",
            "scurvy",
            "lack of vitamin",
            "not enough vitamin",
            "enough vitamin",
            "tooth",
            "teeth",
            "diabetes",
            "heart disease",
          ],
          feedback:
            "Give a second, different problem: **constipation** (there is almost no fibre), a **deficiency disease** such as scurvy (not enough vitamins or minerals), or **tooth decay** (all that sugar).",
        },
        {
          point: "Improvement: eat more fruit and vegetables (for vitamins, minerals and fibre)",
          keywords: [
            "fruit",
            "vegetable",
            "veg",
            "veggie",
            "salad",
            "5 a day",
            "five a day",
            "apple",
            "banana",
            "carrot",
          ],
          feedback:
            "Suggest eating more **fruit and vegetables** — they give vitamins, minerals and fibre.",
        },
        {
          point:
            "A second, different improvement: e.g. drink water instead of fizzy drinks, eat wholegrain foods, beans or lentils, or cut down on crisps and sweets",
          keywords: [
            "water",
            "wholegrain",
            "whole grain",
            "wholemeal",
            "beans",
            "eat less",
            "eat fewer",
            "less fizzy",
            "less junk",
            "cut down",
          ],
          feedback:
            "Give a second, different change, e.g. drink **water** instead of fizzy drinks, choose **wholegrain** bread or cereal, add beans or lentils, or **cut down** on crisps and sweets.",
        },
      ],
      commonError:
        "Writing vague improvements such as 'eat healthier' or 'eat a balanced diet' — say exactly what to change (swap fizzy drinks for water, add fruit and vegetables). Also give two DIFFERENT problems, each linked to the food: sugar and fat → too much energy → obesity; no fibre → constipation.",
      strategy: "Apply it to a new situation",
    },

    // ---------------------------------------------------------------- w2-q05
    {
      id: "w2-q05",
      topic: "aa",
      section: "aa-uses",
      difficulty: "core",
      question:
        "Explain how neutralisation is useful in (a) treating indigestion and (b) farming.",
      marks: 4,
      hints: [
        "What causes indigestion, and what type of substance would cancel it out?",
        "Why might a farmer need to change the pH of a field, and what could they spread on it?",
      ],
      modelAnswer:
        "- **(a) Indigestion** is caused by **too much hydrochloric acid** in the stomach. An **antacid** tablet contains a base, such as magnesium hydroxide or calcium carbonate, which neutralises the excess acid, so the pain is relieved.\n- **(b) Farming:** some soils are too acidic for crops to grow well. Farmers spread **lime** (calcium hydroxide) on the fields. Lime is a base, so it neutralises the acid in the soil, raising the pH towards 7 so that **crops grow better**.",
      markScheme: [
        {
          point: "Indigestion is caused by too much (hydrochloric) acid in the stomach",
          keywords: [
            "much acid",
            "excess",
            "extra acid",
            "lots of acid",
            "more acid",
            "stomach acid",
            "acid in the stomach",
            "acid in your stomach",
            "hydrochloric",
            "acidic stomach",
          ],
          feedback: "Indigestion happens when the stomach makes **too much hydrochloric acid**.",
        },
        {
          point:
            "An antacid contains a base (e.g. magnesium hydroxide or calcium carbonate) that neutralises the excess acid",
          keywords: [
            "antacid",
            "indigestion tablet",
            "indigestion remedy",
            "tablet",
            "magnesium hydroxide",
            "milk of magnesia",
            "bicarbonate",
            "baking soda",
            "take an alkali",
            "take a base",
          ],
          feedback:
            "An **antacid** (indigestion tablet) contains a **base**, e.g. magnesium hydroxide or calcium carbonate, which neutralises the extra acid so the pain goes away.",
        },
        {
          point:
            "Farmers add lime (calcium hydroxide, calcium oxide or calcium carbonate) to soil that is too acidic",
          keywords: [
            "lime",
            "limestone",
            "calcium hydroxide",
            "calcium oxide",
            "calcium carbonate+soil",
            "acidic soil",
            "soil is acidic",
            "soil is too acidic",
            "alkali+soil",
            "base+soil",
          ],
          feedback:
            "Some soil is too acidic, so farmers spread **lime** on it (calcium hydroxide, calcium oxide or calcium carbonate — all bases).",
        },
        {
          point: "This neutralises the soil (pH nearer 7), so crops grow better",
          keywords: [
            "crops+grow",
            "crop+grow",
            "plant+grow",
            "growth",
            "grows",
            "grow better",
            "grow well",
            "can't grow",
            "cannot grow",
            "yield",
          ],
          feedback:
            "Neutralising the soil brings its pH nearer to 7, which most crops prefer — so **crops grow better** and the farmer gets a bigger harvest.",
        },
      ],
      commonError:
        "For (a), saying the antacid 'kills' or 'removes' the acid — it neutralises the EXTRA acid. For (b), forgetting to say WHY it helps: most crops grow badly in acidic soil, so neutralising it lets them grow better.",
      strategy: "Apply it to a new situation",
    },

    // ---------------------------------------------------------------- w2-q06
    {
      id: "w2-q06",
      topic: "an",
      section: "an-food-tests",
      difficulty: "core",
      question:
        "Describe how you would test a sample of cheese to show that it contains (a) protein and (b) fat. Give the positive result for each test.",
      marks: 4,
      hints: [
        "Which reagent contains copper sulfate, and what colour does it turn when protein is present?",
        "The fat test uses two liquids, one after the other. What would you see if fat is there?",
      ],
      modelAnswer:
        "- **(a) Protein:** put a small piece of cheese in a test tube with a little water and add **biuret reagent** (potassium hydroxide and copper sulfate solution), then shake gently. If protein is present, the blue colour turns **purple (lilac)**.\n- **(b) Fat:** crush a small piece of cheese and shake it with **ethanol**, then pour the ethanol into a test tube of **water**. If fat is present, a **milky white emulsion** forms.",
      markScheme: [
        {
          point: "Protein test: add biuret reagent (potassium hydroxide + copper sulfate)",
          keywords: [
            "biuret",
            "buiret",
            "biruet",
            "copper sulfate",
            "copper sulphate",
            "potassium hydroxide",
            "sodium hydroxide",
          ],
          feedback:
            "To test for protein, add **biuret reagent** — potassium hydroxide plus copper sulfate (it starts blue).",
        },
        {
          point: "Positive result: the blue biuret turns purple / lilac",
          keywords: ["purple", "lilac", "violet", "mauve", "lavender"],
          feedback: "If protein is present, biuret changes from blue to **purple (lilac)**.",
        },
        {
          point: "Fat test: shake the food with ethanol, then pour the liquid into water",
          keywords: ["ethanol+water", "alcohol+water", "ethanol+h2o", "alcohol+h2o"],
          feedback:
            "To test for fat, shake the food with **ethanol**, then pour the liquid into **water** — you need both, in that order.",
        },
        {
          point: "Positive result: a milky white emulsion (cloudy layer) forms",
          keywords: ["milky", "emulsion", "emuls", "cloud", "white", "creamy"],
          feedback: "If fat is present, a **milky white emulsion** (cloudy layer) appears.",
        },
      ],
      commonError:
        "Mixing up the food tests (Benedict's + heating is for sugar; iodine is for starch), or forgetting the water in the fat test — the milky emulsion only appears when the ethanol is poured into water.",
      strategy: "Recall the keyword",
    },

    // ---------------------------------------------------------------- w2-q07
    {
      id: "w2-q07",
      topic: "aa",
      section: "aa-neutralisation",
      difficulty: "challenge",
      question:
        "Sodium hydroxide is added slowly to hydrochloric acid containing universal indicator until the alkali is in excess. Describe and explain how the colour and pH change.",
      marks: 4,
      hints: [
        "What colour is universal indicator in a strong acid, in a neutral solution and in a strong alkali?",
        "Think in stages: lots of acid → acid being used up → exactly neutral → alkali left over.",
      ],
      modelAnswer:
        "At the start the solution is **red** because hydrochloric acid is strongly acidic (about **pH 1**). As sodium hydroxide is added it neutralises some of the acid, so the **pH rises** and the colour changes to **orange, then yellow**. When exactly enough alkali has been added, the solution turns **green (pH 7)** — it is neutral, because all the acid has reacted to make a salt (sodium chloride) and water. Adding more sodium hydroxide turns it **blue, then purple** (pH above 7), because there is now **extra alkali** with no acid left to react with it.",
      markScheme: [
        {
          point: "Starts red — about pH 1 (strongly acidic)",
          keywords: [
            "red",
            "ph 1",
            "ph1",
            "ph of 1",
            "ph 0",
            "ph 2",
            "strongly acidic",
            "strong acid",
          ],
          feedback:
            "Hydrochloric acid is strongly acidic, so the universal indicator starts **red** (about **pH 1**).",
        },
        {
          point:
            "As the alkali is added the acid is gradually neutralised: the pH rises and the colour goes orange, then yellow",
          keywords: [
            "orange",
            "yellow",
            "rise",
            "rises",
            "rising",
            "increas",
            "goes up",
            "go up",
            "higher",
            "less acidic",
          ],
          feedback:
            "As alkali is added the acid is gradually used up, so the **pH rises** and the colour passes through **orange and yellow**.",
        },
        {
          point:
            "Green at pH 7 — exactly neutral, because the acid and alkali have made a salt (sodium chloride) and water",
          keywords: [
            "green",
            "ph 7",
            "ph7",
            "ph of 7",
            "salt",
            "sodium chloride",
            "becomes neutral",
            "exactly neutral",
          ],
          feedback:
            "When exactly enough alkali has been added, the solution is **green, pH 7 (neutral)** — it now contains just a salt (sodium chloride) and water.",
        },
        {
          point: "Then blue, then purple — pH above 7 — because extra (excess) alkali is left over",
          keywords: [
            "blue",
            "purple",
            "violet",
            "above 7",
            "over 7",
            "more than 7",
            "higher than 7",
            "extra alkali",
            "too much alkali",
            "no acid left",
          ],
          feedback:
            "Once the alkali is in excess there is **extra alkali** and no acid left to react with it, so the pH goes **above 7** and the colour becomes **blue, then purple**.",
        },
      ],
      commonError:
        "Jumping straight from red to blue, or stopping at green. The pH rises gradually through orange and yellow to green (pH 7), then keeps rising to blue and purple once there is more alkali than acid.",
      strategy: "Use the pH scale",
    },

    // ---------------------------------------------------------------- w2-q08
    {
      id: "w2-q08",
      topic: "an",
      section: "an-enzymes",
      difficulty: "challenge",
      question:
        "Explain why large food molecules such as starch must be digested, and how enzymes help.",
      marks: 4,
      hints: [
        "Why can't a starch molecule get from your gut into your blood?",
        "What do enzymes do to the speed of a reaction — and what small molecules is starch broken into?",
      ],
      modelAnswer:
        "Large food molecules such as starch are **insoluble** and **too big** to pass through the wall of the small intestine into the blood, so they cannot be absorbed. Enzymes are **biological catalysts** (special proteins) that **speed up** the breakdown of these large molecules without being used up. Carbohydrase enzymes such as amylase break starch into **small soluble** sugars, ending up as **glucose**; protease breaks proteins into **amino acids**; lipase breaks fats into **fatty acids and glycerol**. These small, soluble molecules can then be **absorbed into the blood** through the villi of the small intestine.",
      markScheme: [
        {
          point:
            "Large molecules are insoluble / too big to pass through the gut wall into the blood, so they can't be absorbed",
          keywords: [
            "insolub",
            "not soluble",
            "too big",
            "to big",
            "too large",
            "can't pass",
            "cannot pass",
            "can't be absorbed",
            "cannot be absorbed",
            "can't fit",
          ],
          feedback:
            "Big molecules like starch are **insoluble** and **too big** to pass through the gut wall into the blood, so they can't be absorbed until they are broken down.",
        },
        {
          point: "Enzymes are biological catalysts (special proteins) that speed up the breakdown",
          keywords: [
            "cataly",
            "speed up",
            "faster",
            "quick",
            "rate",
            "are protein",
            "special protein",
            "less time",
          ],
          feedback:
            "Enzymes are **biological catalysts** — special proteins that **speed up** the breakdown reactions. They are not alive and they are not used up.",
        },
        {
          point:
            "They break the large molecules into small soluble molecules, e.g. starch → glucose, protein → amino acids, fat → fatty acids + glycerol",
          keywords: [
            "small soluble",
            "into soluble",
            "small molecules",
            "glucose",
            "sugar",
            "amino",
            "fatty acids",
            "glycerol",
            "maltose",
          ],
          feedback:
            "Enzymes break big molecules into **small soluble** ones: starch → **glucose** (sugars), protein → **amino acids**, fat → **fatty acids and glycerol**.",
        },
        {
          point: "The small molecules are absorbed into the blood in the small intestine",
          keywords: [
            "absorb",
            "absorp",
            "blood",
            "small intestine",
            "villi",
            "pass through",
            "diffuse",
            "into the body",
          ],
          feedback:
            "Only small, soluble molecules can be **absorbed into the blood** through the wall of the **small intestine** (its villi give a huge surface area).",
        },
      ],
      commonError:
        "Saying enzymes are alive or get used up — they are proteins that speed up reactions and can be used again. Another mark-loser: saying digestion makes food 'smaller' without saying the products are soluble and can be absorbed into the blood.",
      strategy: "Think about particles",
    },

    // ---------------------------------------------------------------- w2-q09
    {
      id: "w2-q09",
      topic: "aa",
      section: "aa-indicators",
      difficulty: "core",
      question:
        "Describe how to make an indicator from red cabbage, and evaluate it compared with universal indicator.",
      marks: 4,
      hints: [
        "How could you get the coloured dye out of the leaves, and then separate the liquid from the bits?",
        "Evaluate means give a strength and a weakness. What can universal indicator tell you that a homemade indicator can't?",
      ],
      modelAnswer:
        "**Making it:** chop (or grind) some red cabbage leaves into small pieces and put them in a beaker. Pour on hot water (or use ethanol), stir and leave for a few minutes, then **filter** the mixture and keep the purple liquid — this is the indicator.\n\n**Evaluation:** it is **cheap, natural and easy** to make at home, and it does change colour in acids and alkalis, so it can show whether something is acidic, neutral or alkaline. However, it is **less accurate** than universal indicator: there is no standard colour chart, so it cannot give an **exact pH number**, and some colours are hard to tell apart.",
      markScheme: [
        {
          point: "Chop, crush or grind the red cabbage into small pieces",
          keywords: [
            "chop",
            "chopp",
            "cut",
            "grind",
            "crush",
            "tear",
            "shred",
            "blend",
            "mash",
            "pieces",
          ],
          feedback:
            "First **chop, crush or grind** the cabbage into small pieces so the coloured dye can get out easily.",
        },
        {
          point: "Soak in hot water (or ethanol), stir, then filter to collect the coloured liquid",
          keywords: [
            "filter",
            "filtr",
            "sieve",
            "strain",
            "hot water",
            "boiling water",
            "warm water",
            "boil",
            "heat",
            "ethanol",
          ],
          feedback:
            "Add **hot water** (or ethanol), stir and leave it, then **filter** to collect the coloured liquid — that liquid is your indicator.",
        },
        {
          point:
            "Advantage: cheap, natural and easy to make — and it still changes colour in acids and alkalis",
          keywords: [
            "cheap",
            "easy",
            "easier",
            "easily",
            "natural",
            "free",
            "simple",
            "at home",
            "expensive",
            "safe",
          ],
          feedback:
            "An advantage: it is **cheap, natural and easy to make** at home, and it still shows whether a solution is acidic or alkaline.",
        },
        {
          point:
            "Disadvantage: it can't give an exact pH number (no standard colour chart), so it is less accurate than universal indicator",
          keywords: [
            "exact ph",
            "ph number",
            "accurate",
            "not accurate",
            "precise",
            "strong",
            "strength",
            "colour chart",
            "hard to",
            "harder",
          ],
          feedback:
            "A disadvantage: it can't give an **exact pH number** like universal indicator (there's no standard colour chart), so it is **less accurate** and its colours can be hard to judge.",
        },
      ],
      commonError:
        "Only describing how to make it and forgetting to evaluate — or saying red cabbage indicator 'doesn't work'. It does show acids and alkalis; its weakness is that it can't give an exact pH number the way universal indicator can.",
      strategy: "Compare and contrast",
    },

    // ---------------------------------------------------------------- w2-q10
    {
      id: "w2-q10",
      topic: "an",
      section: "an-system",
      difficulty: "challenge",
      question:
        "Describe the job of each of these in digestion: stomach, liver, pancreas, small intestine, large intestine.",
      marks: 5,
      hints: [
        "Follow the food: what happens to it in the stomach? Which two organs add substances to the small intestine even though food never passes through them?",
        "One organ makes bile and one makes enzymes; one intestine absorbs digested food and the other absorbs water.",
      ],
      modelAnswer:
        "- **Stomach:** churns the food and mixes it with **hydrochloric acid** and protease enzymes; the acid kills bacteria, and protein digestion starts here.\n- **Liver:** makes **bile** (stored in the gall bladder), which emulsifies fats.\n- **Pancreas:** makes **digestive enzymes** (carbohydrase, protease and lipase) and releases them into the small intestine.\n- **Small intestine:** digestion is finished and the small soluble molecules are **absorbed into the blood** through the villi.\n- **Large intestine:** **absorbs water** from the undigested food, making the faeces more solid.",
      markScheme: [
        {
          point:
            "Stomach: churns food with hydrochloric acid and protease (the acid kills bacteria)",
          keywords: [
            "churn",
            "hydrochloric",
            "acid",
            "bacteria",
            "germs",
            "mixes",
            "mixing",
            "squeez",
            "pepsin",
          ],
          feedback:
            "The **stomach** churns food with **hydrochloric acid** and protease; the acid kills bacteria and gives the right conditions for protease to start digesting protein.",
        },
        {
          point: "Liver: makes bile",
          keywords: ["bile", "bial", "makes bile", "produces bile", "emuls", "droplet"],
          feedback:
            "The **liver** makes **bile** (stored in the gall bladder), which emulsifies fat into small droplets.",
        },
        {
          point: "Pancreas: makes digestive enzymes and releases them into the small intestine",
          keywords: [
            "makes enzymes",
            "make enzymes",
            "making enzymes",
            "produces enzymes",
            "releases enzymes",
            "makes digestive",
            "produces digestive",
            "pancreas enzymes",
            "lipase",
            "amylase",
          ],
          feedback:
            "The **pancreas** makes **digestive enzymes** (carbohydrase, protease and lipase) and releases them into the small intestine.",
        },
        {
          point:
            "Small intestine: digestion finishes and the digested food is absorbed into the blood",
          keywords: [
            "blood",
            "villi",
            "nutrient",
            "small intestine absorb",
            "food is absorbed",
            "absorb digested",
            "absorb the digested",
            "absorb small",
            "finish",
            "complete",
          ],
          feedback:
            "In the **small intestine** digestion is completed and the small soluble molecules are **absorbed into the blood** through the villi.",
        },
        {
          point: "Large intestine: absorbs water (so the faeces become solid)",
          keywords: ["water", "absorb water", "solid", "drier", "dry", "h2o", "moisture"],
          feedback:
            "The **large intestine** **absorbs water** from the undigested food, so the faeces become more solid.",
        },
      ],
      commonError:
        "Mixing up which organ makes what: the LIVER makes bile (the gall bladder only stores it) and the PANCREAS makes enzymes. Also, saying the large intestine absorbs digested food — that happens in the small intestine; the large intestine mainly absorbs water.",
      strategy: "Follow the food",
    },
  ],
};
