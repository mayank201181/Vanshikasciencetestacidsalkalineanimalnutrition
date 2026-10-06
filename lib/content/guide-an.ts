import type { GuideSection } from "../types";

// Revision guide: Animal Nutrition (digestion), Year 8.
// Follows docs/syllabus.md (school knowledge organiser + AN word glossary) and content-spec.md.
// Vegetarian food examples throughout.

export const GUIDE_AN: GuideSection[] = [
  // 1. Nutrients
  {
    id: "an-nutrients",
    topic: "an",
    lesson: "Nutrients",
    heading: "The seven nutrients",
    discovery: {
      problem:
        "Imagine eating nothing but plain rice, as much as you like, every single day. You would have plenty of energy. So what could possibly go wrong?",
      idea:
        "Energy is only one of the jobs food does. Rice is mostly carbohydrate, so you would soon be short of protein for growth and repair, vitamins and minerals to keep your body working, and fibre to keep food moving. There are seven nutrient groups, each with its own job, and no single food gives you all of them in the right amounts. That is why you need a variety of foods.",
    },
    body:
      "Food contains **nutrients**: the substances your body needs for energy, growth and good health. There are **seven nutrient groups**, and each one has its own job.\n\n" +
      "| Nutrient | Job | Example foods |\n" +
      "|---|---|---|\n" +
      "| Carbohydrates | energy | rice, bread, pasta, potato |\n" +
      "| Proteins | growth and repair | dal, beans, chickpeas, tofu, paneer |\n" +
      "| Fats (lipids) | stored energy and insulation | butter, oil, nuts, cheese |\n" +
      "| Vitamins | healthy body maintenance, e.g. vitamin C for the immune system | oranges, fruit, vegetables |\n" +
      "| Minerals | e.g. calcium for strong bones and teeth | milk, cheese, leafy greens |\n" +
      "| Fibre | keeps food and faeces moving | wholegrain bread, beans, vegetables |\n" +
      "| Water | needed for all body reactions | drinks, fruit, soup |\n\n" +
      "Things to notice:\n\n" +
      "- **Carbohydrates** and **fats** both give you energy. Carbohydrates are your everyday fuel; fat is an energy **store** that also **insulates** you (keeps you warm).\n" +
      "- **Vitamins** and **minerals** are needed only in **small amounts**, but without them you become ill.\n" +
      "- **Fibre** cannot be digested, so it is never absorbed and gives you **no energy**. Its job is to keep food and faeces moving along your gut, which prevents **constipation**.\n" +
      "- **Water** is needed for every chemical reaction in your body. Not drinking enough leads to **dehydration**.\n\n" +
      "Most foods contain **more than one** nutrient. Dal is rich in protein but also gives you carbohydrate and fibre; cheese gives you protein, fat and calcium. Eating a **variety** of foods is the easiest way to get all seven.",
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400" role="img" aria-label="A plate split into the seven nutrient groups, each with an example food: carbohydrates (rice, bread), proteins (dal, paneer), fats (butter, oil), vitamins (oranges), minerals (milk), fibre (wholegrains), water (drinks)" font-family="sans-serif">
      <circle cx="240" cy="200" r="192" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M240,200 L415.5,159.9 A180,180 0 0,1 380.7,312.2 Z" fill="#fde68a" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L380.7,312.2 A180,180 0 0,1 240,380 Z" fill="#fecaca" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L240,380 A180,180 0 0,1 99.3,312.2 Z" fill="#fed7aa" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L99.3,312.2 A180,180 0 0,1 64.5,159.9 Z" fill="#bbf7d0" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L64.5,159.9 A180,180 0 0,1 161.9,37.8 Z" fill="#e9d5ff" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L161.9,37.8 A180,180 0 0,1 318.1,37.8 Z" fill="#d9f99d" stroke="#ffffff" stroke-width="3"/>
      <path d="M240,200 L318.1,37.8 A180,180 0 0,1 415.5,159.9 Z" fill="#bae6fd" stroke="#ffffff" stroke-width="3"/>
      <circle cx="240" cy="200" r="48" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="355" y="223.3" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Carbohydrates</text>
      <text x="355" y="240.3" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">rice, bread</text>
      <text x="291.2" y="303.3" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Proteins</text>
      <text x="291.2" y="320.3" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">dal, paneer</text>
      <text x="188.8" y="303.3" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Fats</text>
      <text x="188.8" y="320.3" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">butter, oil</text>
      <text x="125" y="223.3" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Vitamins</text>
      <text x="125" y="240.3" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">oranges</text>
      <text x="147.7" y="123.4" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Minerals</text>
      <text x="147.7" y="140.4" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">milk</text>
      <text x="240" y="79" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Fibre</text>
      <text x="240" y="96" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">wholegrains</text>
      <text x="332.3" y="123.4" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Water</text>
      <text x="332.3" y="140.4" font-size="12" font-style="italic" text-anchor="middle" fill="#475569">drinks</text>
      <text x="240" y="197" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">7 nutrient</text>
      <text x="240" y="213" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">groups</text>
    </svg>`,
    diagramCaption:
      "The seven nutrient groups, each with an example food. The slices are drawn the same size only to fit the labels: a balanced diet needs DIFFERENT amounts of each group.",
    keyPoints: [
      "There are seven nutrient groups: carbohydrates, proteins, fats (lipids), vitamins, minerals, fibre and water.",
      "Carbohydrates give energy; proteins are for growth and repair; fats are for stored energy and insulation.",
      "Vitamins (e.g. vitamin C for the immune system) and minerals (e.g. calcium for bones and teeth) are needed in small amounts.",
      "Fibre is not digested and gives no energy, but it keeps food and faeces moving.",
      "Water is needed for all the chemical reactions in your body.",
    ],
    whyItWorks:
      "Your body is doing many different jobs at once: releasing energy, building and repairing cells, fighting infections and making bones. Each job needs different raw materials, so each nutrient group has its own role, and no single food can supply them all in the right amounts.",
    memoryTrick:
      "The seven groups: Cool Penguins Find Vanilla Milkshakes Fairly Wonderful (Carbohydrates, Proteins, Fats, Vitamins, Minerals, Fibre, Water). For the jobs: CARbohydrates are CAR fuel (energy), and PROteins are the PRO builders (growth and repair).",
    examTip:
      "Never write that fibre gives you energy. Fibre cannot be digested, so it is never absorbed; its job is to keep food and faeces moving. Also learn the exact phrases examiners look for: proteins are for 'growth and repair', and fats are for 'stored energy and insulation'.",
    thinkDeeper:
      "Water gives you no energy at all, yet a person can survive for weeks without food but only a few days without water. Using the jobs of the nutrients, suggest why water is so urgent, and what the body uses for energy when food runs out.",
  },

  // 2. Balanced diet
  {
    id: "an-diet",
    topic: "an",
    lesson: "Balanced diet",
    heading: "A balanced diet and health",
    discovery: {
      problem:
        "Hundreds of years ago, sailors on long voyages had plenty of hard ship's biscuits to eat, yet many developed bleeding gums, and their cuts would not heal. They were getting lots of energy from their food, so why were they ill?",
      idea:
        "They were missing one nutrient. With no fresh fruit or vegetables on board, they had almost no vitamin C, so they developed a deficiency disease called scurvy. Staying healthy is not just about eating ENOUGH food; it is about eating the right BALANCE of nutrients.",
    },
    body:
      "A **balanced diet** contains **all the nutrients in the right amounts**. That does *not* mean equal amounts: you need lots of carbohydrate but only tiny amounts of vitamins and minerals.\n\n" +
      "**How much energy you need** depends on your:\n\n" +
      "- **age**: growing teenagers need lots of energy\n" +
      "- **activity**: a footballer uses more energy than someone watching TV\n" +
      "- **size**: a bigger body needs more energy\n" +
      "- **pregnancy**: a pregnant woman needs extra energy for her growing baby\n\n" +
      "**Malnutrition** means a poor or unbalanced diet that leads to health problems. It can mean too little **or** too much:\n\n" +
      "- **Too little:** not eating enough protein can make children very weak. Missing a vitamin or mineral causes a **deficiency disease**: **scurvy** (vitamin C), **rickets** (vitamin D or calcium; soft, weak bones) or **anaemia** (iron; tired and pale).\n" +
      "- **Too much:** if you take in **more energy than you use**, the extra is **stored as fat**. Over time this can lead to **obesity** (being very overweight), which raises the risk of heart disease and type 2 diabetes.\n" +
      "- **Too little water:** **dehydration** makes you feel tired and gives you a headache.\n\n" +
      "**Reading a food label.** Labels show amounts **per 100 g**, so you can compare foods fairly even when portion sizes are different.\n\n" +
      "| Per 100 g | Wholemeal bread | Crisps |\n" +
      "|---|---|---|\n" +
      "| Energy (kJ) | 1000 | 2200 |\n" +
      "| Fat (g) | 3 | 33 |\n" +
      "| Fibre (g) | 7 | 4 |\n\n" +
      "Gram for gram, the crisps have more than twice the energy and eleven times the fat of the bread, but less fibre.",
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 304" role="img" aria-label="Energy balance see-saw: energy in from food and drink on one side, energy used for moving, growing, keeping warm and staying alive on the other. Balanced means weight stays steady; more in than used means extra is stored as fat; less in than used means the body uses its stores" font-family="sans-serif">
      <text x="240" y="22" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Energy balance</text>
      <rect x="44" y="38" width="160" height="108" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="124" y="64" font-size="13" font-weight="bold" text-anchor="middle" fill="#92400e">ENERGY IN</text>
      <text x="124" y="86" font-size="12" text-anchor="middle" fill="#78350f">from food</text>
      <text x="124" y="104" font-size="12" text-anchor="middle" fill="#78350f">and drink</text>
      <text x="124" y="126" font-size="12" font-style="italic" text-anchor="middle" fill="#78350f">rice, dal, fruit</text>
      <rect x="276" y="38" width="160" height="108" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="356" y="64" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a">ENERGY USED</text>
      <text x="356" y="86" font-size="12" text-anchor="middle" fill="#1e40af">moving, growing,</text>
      <text x="356" y="104" font-size="12" text-anchor="middle" fill="#1e40af">keeping warm,</text>
      <text x="356" y="122" font-size="12" text-anchor="middle" fill="#1e40af">staying alive</text>
      <rect x="30" y="146" width="420" height="9" rx="4" fill="#475569"/>
      <path d="M240,155 L214,196 L266,196 Z" fill="#94a3b8" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
      <line x1="170" y1="197" x2="310" y2="197" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
      <text x="240" y="220" font-size="12" font-weight="bold" text-anchor="middle" fill="#166534">Balanced: energy in = energy used, so weight stays steady</text>
      <rect x="14" y="234" width="218" height="62" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="123" y="253" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">More in than used</text>
      <text x="123" y="270" font-size="11" text-anchor="middle" fill="#7f1d1d">extra energy stored as fat</text>
      <text x="123" y="286" font-size="11" text-anchor="middle" fill="#7f1d1d">→ weight gain (obesity risk)</text>
      <rect x="248" y="234" width="218" height="62" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="357" y="253" font-size="12" font-weight="bold" text-anchor="middle" fill="#075985">Less in than used</text>
      <text x="357" y="270" font-size="11" text-anchor="middle" fill="#0c4a6e">body uses its energy stores</text>
      <text x="357" y="286" font-size="11" text-anchor="middle" fill="#0c4a6e">→ weight loss</text>
    </svg>`,
    diagramCaption:
      "The energy balance. If the energy in from food equals the energy you use, your weight stays steady. More in than used: the extra is stored as fat. Less in than used: the body uses up its stores.",
    keyPoints: [
      "A balanced diet contains all the nutrients in the right amounts (not equal amounts).",
      "Energy needs depend on age, activity, body size and pregnancy.",
      "Malnutrition is a poor or unbalanced diet: too little (e.g. not enough protein, deficiency diseases) OR too much (obesity).",
      "If you take in more energy than you use, the extra is stored as fat, which can lead to obesity.",
      "Deficiency diseases: scurvy (vitamin C), rickets (vitamin D or calcium), anaemia (iron).",
    ],
    whyItWorks:
      "Energy from food cannot just vanish. Your body either uses it (for moving, growing, keeping warm and staying alive) or stores it, mostly as fat. So if the energy in is bigger than the energy used, the extra has to go somewhere, and it is stored as fat.",
    memoryTrick:
      "MALnutrition means BAD nutrition (mal means bad, as in malfunction), and bad can be too little OR too much. Deficiencies: scurvy is the pirate disease (no citrus fruit at sea, so no vitamin C), and rickets makes bones rickety (not enough vitamin D or calcium).",
    examTip:
      "Malnutrition does NOT only mean starving. An unbalanced diet with too much energy (leading to obesity) is malnutrition too. In food-label questions, compare the 'per 100 g' values and quote the numbers with their units.",
    thinkDeeper:
      "Two friends eat exactly the same meals every day. One stays the same weight, but the other slowly puts on weight. Use the energy balance see-saw to suggest two different reasons why.",
  },

  // 3. Food tests
  {
    id: "an-food-tests",
    topic: "an",
    lesson: "Food tests",
    heading: "Food tests: finding the nutrients",
    discovery: {
      problem:
        "Drop orange-brown iodine solution onto a slice of raw potato and it turns blue-black almost at once. Drop it onto a piece of paneer and it stays orange-brown. What is the potato telling you?",
      idea:
        "The potato is full of starch, and iodine turns blue-black when starch is present. Paneer has no starch, so the iodine stays orange-brown. Every food test works like this: a reagent changes colour only when one particular nutrient is there. A colour change is a positive result.",
    },
    body:
      "You can't see nutrients, so scientists use **food tests**: chemicals called **reagents** that **change colour** when a particular nutrient is present. Solid food is chopped or crushed first so the reagent can reach the nutrients.\n\n" +
      "| Nutrient | Reagent | Method | Negative colour | Positive colour |\n" +
      "|---|---|---|---|---|\n" +
      "| Starch | iodine solution | add a few drops | orange-brown | blue-black |\n" +
      "| Sugar (glucose) | Benedict's solution | add, then heat in a hot water bath | blue | green → yellow → orange → brick red |\n" +
      "| Protein | biuret (potassium hydroxide + copper sulfate) | add and mix | blue | purple / lilac |\n" +
      "| Fat (lipid) | ethanol, then water | shake with ethanol, pour into water | clear | milky white emulsion |\n\n" +
      "**Benedict's is special** in two ways. It **must be heated**: cold Benedict's stays blue even if sugar is there. And the colour tells you **how much** sugar there is: green means a little, brick red means lots. The further along the colours go, the more sugar.\n\n" +
      "**Staying safe:**\n\n" +
      "- Wear **eye protection (goggles)**. Biuret contains potassium hydroxide, an alkali that can damage your eyes.\n" +
      "- Heat Benedict's in a **hot water bath**, never straight in a flame, so it warms gently and can't spit out.\n" +
      "- **Ethanol is flammable**, so keep it well away from flames.\n\n" +
      "A **positive** result means the colour changed, so the nutrient **is** present. A **negative** result means the reagent stayed its starting colour, so that nutrient is not there.",
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 252" role="img" aria-label="Four test tubes showing positive food test results: starch with iodine turns blue-black, sugar with Benedict's and heat turns brick red, protein with biuret turns purple or lilac, fat with ethanol then water gives a milky white emulsion" font-family="sans-serif">
      <text x="240" y="20" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Positive results</text>
      <text x="60" y="44" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Starch</text>
      <path d="M46,92 V154 A14,14 0 0,0 74,154 V92 Z" fill="#1e1b4b"/>
      <path d="M45,54 V153 A15,15 0 0,0 75,153 V54" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="60" y="190" font-size="12" text-anchor="middle" fill="#475569">iodine</text>
      <text x="60" y="208" font-size="11" text-anchor="middle" fill="#64748b">orange-brown →</text>
      <text x="60" y="228" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e1b4b">blue-black</text>
      <text x="180" y="44" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Sugar</text>
      <path d="M166,92 V154 A14,14 0 0,0 194,154 V92 Z" fill="#b4442a"/>
      <path d="M165,54 V153 A15,15 0 0,0 195,153 V54" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="180" y="190" font-size="12" text-anchor="middle" fill="#475569">Benedict's + heat</text>
      <text x="180" y="208" font-size="11" text-anchor="middle" fill="#64748b">blue →</text>
      <text x="180" y="228" font-size="13" font-weight="bold" text-anchor="middle" fill="#b4442a">brick red</text>
      <text x="300" y="44" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Protein</text>
      <path d="M286,92 V154 A14,14 0 0,0 314,154 V92 Z" fill="#a78bfa"/>
      <path d="M285,54 V153 A15,15 0 0,0 315,153 V54" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="300" y="190" font-size="12" text-anchor="middle" fill="#475569">biuret</text>
      <text x="300" y="208" font-size="11" text-anchor="middle" fill="#64748b">blue →</text>
      <text x="300" y="228" font-size="13" font-weight="bold" text-anchor="middle" fill="#6d28d9">purple / lilac</text>
      <text x="420" y="44" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e293b">Fat (lipid)</text>
      <path d="M406,92 V154 A14,14 0 0,0 434,154 V92 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="414" cy="104" r="2.2" fill="#cbd5e1"/>
      <circle cx="425" cy="116" r="2.2" fill="#cbd5e1"/>
      <circle cx="416" cy="130" r="2.2" fill="#cbd5e1"/>
      <circle cx="426" cy="141" r="2.2" fill="#cbd5e1"/>
      <circle cx="418" cy="154" r="2.2" fill="#cbd5e1"/>
      <path d="M405,54 V153 A15,15 0 0,0 435,153 V54" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="420" y="190" font-size="12" text-anchor="middle" fill="#475569">ethanol + water</text>
      <text x="420" y="208" font-size="11" text-anchor="middle" fill="#64748b">clear →</text>
      <text x="420" y="228" font-size="13" font-weight="bold" text-anchor="middle" fill="#475569">milky white</text>
    </svg>`,
    diagramCaption:
      "Positive results for the four food tests. A colour change like these means the nutrient IS present.",
    keyPoints: [
      "Starch: iodine solution turns from orange-brown to blue-black.",
      "Sugar (glucose): Benedict's solution, heated in a hot water bath, turns from blue to green, yellow, orange or brick red (brick red = lots of sugar).",
      "Protein: biuret reagent (potassium hydroxide + copper sulfate) turns from blue to purple/lilac.",
      "Fat (lipid): shake with ethanol, then pour into water; a milky white emulsion means fat is present.",
      "Safety: wear goggles; heat in a water bath, not a flame; ethanol is flammable, so keep it away from flames.",
    ],
    whyItWorks:
      "Each reagent reacts with one particular kind of nutrient to make a new, coloured substance, so the colour only appears when that nutrient is there. In the fat test, fat dissolves in ethanol but not in water, so when you pour it into water the fat comes out as tiny droplets that make the water look milky.",
    memoryTrick:
      "Protein goes Purple (two Ps). Benedict's needs a hot water Bath and ends at Brick red (three Bs). For starch, picture iodine on a potato turning midnight blue-black.",
    examTip:
      "Don't mix up the two B reagents: BENEDICT'S is for sugar and must be heated; BIURET is for protein and is not heated. Say 'blue-black' for starch (not just 'black' or 'blue'), and always say that Benedict's is heated in a hot water bath.",
    thinkDeeper:
      "A student adds Benedict's solution to some fruit juice but forgets to heat it. It stays blue, so she writes 'no sugar'. Explain why her conclusion is not valid. Why would it also help to test a tube of plain water (with no food in it) at the same time?",
  },

  // 4. Journey of food
  {
    id: "an-system",
    topic: "an",
    lesson: "Journey through the digestive system",
    heading: "The digestive system: the journey of food",
    discovery: {
      problem:
        "Astronauts on the International Space Station float about with no 'down', yet every mouthful they swallow still reaches their stomach. If gravity isn't pulling food down, what is pushing it along?",
      idea:
        "Muscles in the wall of the gut squeeze in waves behind the food, pushing it along like toothpaste squeezed along a tube. In the oesophagus (gullet) this squeezing is called peristalsis. It happens all along the gut, so food keeps moving whichever way up you are.",
    },
    body:
      "The **digestive system** is the organ system that breaks food down so it can be **absorbed into the bloodstream**. Food travels through one long tube, always in this order:\n\n" +
      "**mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus**\n\n" +
      "| Organ | Job |\n" +
      "|---|---|\n" +
      "| Mouth | teeth chew food into small pieces (mechanical digestion); amylase in saliva starts digesting starch (chemical digestion) |\n" +
      "| Oesophagus (gullet) | muscle contractions push food down to the stomach (peristalsis) |\n" +
      "| Stomach | churns food and mixes it with hydrochloric acid and enzymes |\n" +
      "| Small intestine | digestion finishes, using enzymes from the pancreas and its own wall; digested food is absorbed into the blood |\n" +
      "| Large intestine | absorbs water from undigested food |\n" +
      "| Rectum | stores faeces |\n" +
      "| Anus | where faeces leave the body |\n\n" +
      "Digestion starts in the mouth in two ways. **Mechanical digestion** is your teeth physically breaking food into smaller pieces, which gives enzymes more surface to work on. **Chemical digestion** is enzymes breaking the large molecules themselves into small ones.\n\n" +
      "The stomach's **hydrochloric acid** has two jobs: it **kills bacteria** in your food, and it gives the **right (acidic) conditions** for the stomach's **protease** enzymes to start digesting protein.\n\n" +
      "Two helpers are **not** part of the tube. The **liver** makes **bile** (stored in the **gall bladder**), and the **pancreas** makes **enzymes**. Both are released into the small intestine, but **food never passes through the liver or pancreas**.\n\n" +
      "All along the tube, **muscles** in the gut wall squeeze the food onwards (**peristalsis**), so it moves one way only: from mouth to anus.",
    figure: "digestive-named",
    diagramCaption:
      "The digestive system. Food travels along the tube from mouth to anus; the liver, gall bladder and pancreas add substances, but food never passes through them.",
    keyPoints: [
      "Order: mouth, oesophagus, stomach, small intestine, large intestine, rectum, anus.",
      "Mouth: teeth (mechanical digestion) and amylase in saliva (chemical digestion) start digestion.",
      "Stomach: churns food with enzymes and hydrochloric acid, which kills bacteria and gives the right conditions for protease.",
      "Small intestine: digestion finishes and food is absorbed. Large intestine: water is absorbed.",
      "The liver (bile) and pancreas (enzymes) add substances, but food does not pass through them.",
    ],
    whyItWorks:
      "Food must be broken into molecules small enough to pass into the blood, and that takes several stages: chewing makes the pieces smaller, then acid and enzymes break the molecules down, and only then can the small intestine absorb them. Each organ is specialised for one stage, like stations on a production line, except that this line takes food apart.",
    memoryTrick:
      "My Old Sock Smells Like Rotten Apples: Mouth, Oesophagus, Stomach, Small intestine, Large intestine, Rectum, Anus. 'Smells' comes before 'Like', so small comes before large.",
    examTip:
      "Two classic slips: putting the large intestine before the small intestine (food reaches the SMALL intestine first), and putting the liver or pancreas in the path of food. Also, stomach acid is not an enzyme: its jobs are to kill bacteria and give the right conditions for protease.",
    thinkDeeper:
      "The large intestine absorbs water from undigested food. Predict what the faeces would be like if food moved through the large intestine (a) much faster than normal and (b) much more slowly than normal. Explain your answers.",
  },

  // 5. Enzymes
  {
    id: "an-enzymes",
    topic: "an",
    lesson: "How do enzymes work?",
    heading: "Enzymes: the chemical scissors",
    discovery: {
      problem:
        "Chew a piece of plain bread or a mouthful of plain rice for a minute without swallowing. Slowly, it starts to taste sweet. Nobody added any sugar, so where did the sweetness come from?",
      idea:
        "Your saliva contains an enzyme called amylase. It cuts the long starch molecules in the bread into small sugar molecules, and sugar tastes sweet. You have just tasted digestion happening in your own mouth.",
    },
    body:
      "**Enzymes** are **proteins** that **speed up (catalyse)** chemical reactions. In digestion they act like **chemical scissors**, cutting **large insoluble molecules** into **small soluble molecules** that can be absorbed into the blood. Enzymes are **not living things**, and they are **not used up**: one enzyme can cut again and again.\n\n" +
      "| Large molecule | Broken down into | Enzyme | Where |\n" +
      "|---|---|---|---|\n" +
      "| Carbohydrate (starch) | glucose | carbohydrase (e.g. amylase, maltase) | mouth (saliva), small intestine |\n" +
      "| Protein | amino acids | protease | stomach, small intestine |\n" +
      "| Lipid (fat) | glycerol + 3 fatty acids | lipase | small intestine |\n\n" +
      "Why two carbohydrases? **Amylase** cuts starch into a smaller sugar called **maltose**, then **maltase** cuts maltose into **glucose**.\n\n" +
      "**Where are enzymes made?** The **pancreas** makes all three types and releases them into the **small intestine**. The **salivary glands** make amylase, the **stomach** makes protease, and the wall of the small intestine makes some enzymes too.\n\n" +
      "**Lock and key.** Each enzyme has a special shape (the lock) that only **one type of molecule** (the key) fits, just as only one key fits your front door. That's why protease can't digest starch and amylase can't digest protein.\n\n" +
      "Enzymes work best at **body temperature (about 37 °C)**. In the cold they work slowly; if they get too hot, their shape changes and they stop working.",
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 330" role="img" aria-label="Enzymes as chemical scissors: carbohydrase cuts a starch chain into glucose molecules, protease cuts a protein chain into amino acids, and lipase splits a fat into glycerol and three fatty acids" font-family="sans-serif">
      <text x="95" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">Large, insoluble</text>
      <text x="380" y="20" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b">Small, soluble</text>
      <text x="16" y="48" font-size="13" font-weight="bold" fill="#1e293b">Starch</text>
      <path d="M41,74 H48 M74,74 H81 M107,74 H114 M140,74 H147" stroke="#b45309" stroke-width="3"/>
      <polygon points="41,74 34.5,85.3 21.5,85.3 15,74 21.5,62.7 34.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="74,74 67.5,85.3 54.5,85.3 48,74 54.5,62.7 67.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="107,74 100.5,85.3 87.5,85.3 81,74 87.5,62.7 100.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="140,74 133.5,85.3 120.5,85.3 114,74 120.5,62.7 133.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="173,74 166.5,85.3 153.5,85.3 147,74 153.5,62.7 166.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <path d="M192,74 H273 M273,68 L284,74 L273,80 Z" stroke="#334155" stroke-width="2.5" fill="#334155" stroke-linejoin="round"/>
      <text x="238" y="64" font-size="13" font-weight="bold" text-anchor="middle" fill="#b45309">carbohydrase</text>
      <text x="238" y="94" font-size="11" text-anchor="middle" fill="#475569">(amylase, maltase)</text>
      <polygon points="325,74 318.5,85.3 305.5,85.3 299,74 305.5,62.7 318.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="359,74 352.5,85.3 339.5,85.3 333,74 339.5,62.7 352.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="393,74 386.5,85.3 373.5,85.3 367,74 373.5,62.7 386.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="427,74 420.5,85.3 407.5,85.3 401,74 407.5,62.7 420.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <polygon points="461,74 454.5,85.3 441.5,85.3 435,74 441.5,62.7 454.5,62.7" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <text x="380" y="106" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400e">glucose (sugar)</text>
      <text x="16" y="152" font-size="13" font-weight="bold" fill="#1e293b">Protein</text>
      <line x1="26" y1="178" x2="166" y2="178" stroke="#334155" stroke-width="2.5"/>
      <circle cx="26" cy="178" r="9" fill="#fca5a5" stroke="#334155" stroke-width="1.5"/>
      <rect x="46" y="170" width="16" height="16" rx="2" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
      <polygon points="82,168 92,186 72,186" fill="#86efac" stroke="#334155" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="110,168 120,178 110,188 100,178" fill="#fcd34d" stroke="#334155" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="138" cy="178" r="9" fill="#c4b5fd" stroke="#334155" stroke-width="1.5"/>
      <rect x="158" y="170" width="16" height="16" rx="2" fill="#f9a8d4" stroke="#334155" stroke-width="1.5"/>
      <path d="M192,178 H273 M273,172 L284,178 L273,184 Z" stroke="#334155" stroke-width="2.5" fill="#334155" stroke-linejoin="round"/>
      <text x="238" y="168" font-size="13" font-weight="bold" text-anchor="middle" fill="#be123c">protease</text>
      <circle cx="305" cy="178" r="9" fill="#fca5a5" stroke="#334155" stroke-width="1.5"/>
      <rect x="327" y="170" width="16" height="16" rx="2" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
      <polygon points="365,168 375,186 355,186" fill="#86efac" stroke="#334155" stroke-width="1.5" stroke-linejoin="round"/>
      <polygon points="395,168 405,178 395,188 385,178" fill="#fcd34d" stroke="#334155" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="425" cy="178" r="9" fill="#c4b5fd" stroke="#334155" stroke-width="1.5"/>
      <rect x="447" y="170" width="16" height="16" rx="2" fill="#f9a8d4" stroke="#334155" stroke-width="1.5"/>
      <text x="380" y="210" font-size="12" font-weight="bold" text-anchor="middle" fill="#9f1239">amino acids</text>
      <text x="16" y="242" font-size="13" font-weight="bold" fill="#1e293b">Fat (lipid)</text>
      <rect x="20" y="252" width="13" height="48" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="1.5"/>
      <path d="M33,260 L41,256 L49,264 L57,256 L65,264 L73,256 L81,264 L89,256 L97,264 L105,256 L113,264 L121,256 L129,264 L137,256 L145,264 L153,256 L161,264 L169,256 M33,276 L41,272 L49,280 L57,272 L65,280 L73,272 L81,280 L89,272 L97,280 L105,272 L113,280 L121,272 L129,280 L137,272 L145,280 L153,272 L161,280 L169,272 M33,292 L41,288 L49,296 L57,288 L65,296 L73,288 L81,296 L89,288 L97,296 L105,288 L113,296 L121,288 L129,296 L137,288 L145,296 L153,288 L161,296 L169,288" fill="none" stroke="#d97706" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M192,276 H273 M273,270 L284,276 L273,282 Z" stroke="#334155" stroke-width="2.5" fill="#334155" stroke-linejoin="round"/>
      <text x="238" y="266" font-size="13" font-weight="bold" text-anchor="middle" fill="#047857">lipase</text>
      <rect x="304" y="252" width="13" height="48" rx="3" fill="#c4b5fd" stroke="#5b21b6" stroke-width="1.5"/>
      <path d="M346,260 L354,256 L362,264 L370,256 L378,264 L386,256 L394,264 L402,256 L410,264 L418,256 L426,264 L434,256 L442,264 L450,256 L458,264 M346,276 L354,272 L362,280 L370,272 L378,280 L386,272 L394,280 L402,272 L410,280 L418,272 L426,280 L434,272 L442,280 L450,272 L458,280 M346,292 L354,288 L362,296 L370,288 L378,296 L386,288 L394,296 L402,288 L410,296 L418,288 L426,296 L434,288 L442,296 L450,288 L458,296" fill="none" stroke="#d97706" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <text x="310" y="320" font-size="12" font-weight="bold" text-anchor="middle" fill="#5b21b6">glycerol</text>
      <text x="402" y="320" font-size="12" font-weight="bold" text-anchor="middle" fill="#b45309">3 fatty acids</text>
    </svg>`,
    diagramCaption:
      "Enzymes as chemical scissors. Each one cuts only its own type of large, insoluble molecule into small, soluble pieces that can be absorbed.",
    keyPoints: [
      "Enzymes are proteins that speed up (catalyse) reactions. They are not alive and are not used up.",
      "Carbohydrases (amylase, then maltase) break starch down into sugars, ending as glucose: in the mouth and small intestine.",
      "Protease breaks proteins into amino acids: in the stomach and small intestine.",
      "Lipase breaks lipids into glycerol and 3 fatty acids: in the small intestine.",
      "Each enzyme fits only one type of molecule (lock and key) and works best at body temperature, about 37 °C.",
    ],
    whyItWorks:
      "Starch and proteins are long chains made of small units joined together, and a fat is glycerol joined to three fatty acids. These big molecules are too large to pass through the wall of the small intestine, so enzymes cut the links between the units. The small, soluble pieces can then pass into the blood.",
    memoryTrick:
      "The name tells you the target, and -ase means enzyme: CARBOHYDRase cuts CARBOHYDRates, PROTEase cuts PROTEins, LIPase cuts LIPids. Products in order (starch, protein, fat): Good Athletes Feel Great = Glucose, Amino acids, Fatty acids + Glycerol.",
    examTip:
      "Never write that enzymes are alive or that they 'die'. They are proteins, not living things, and they are not used up. Match the pairs exactly: protein makes AMINO ACIDS (not glucose), and lipids make FATTY ACIDS AND GLYCEROL, so name both for the mark.",
    thinkDeeper:
      "Your body makes no enzyme that can break down fibre. Use the lock-and-key idea to explain why fibre passes straight through your gut, and why that turns out to be useful.",
  },

  // 6. Bile and pancreas
  {
    id: "an-bile",
    topic: "an",
    lesson: "Digestion",
    heading: "Helpers: liver, bile and pancreas",
    discovery: {
      problem:
        "Pour some cooking oil into a glass of water and stir: the oil floats in big blobs. Add a squirt of washing-up liquid and shake, and the oil breaks into lots of tiny droplets spread through the water. Your liver makes a liquid that does a similar job inside you. Why would that help you digest fat?",
      idea:
        "Lipase can only work on the SURFACE of a fat droplet. Breaking one big droplet into lots of tiny ones gives a much bigger surface area, so lipase can get at far more of the fat at once. That liquid is bile, and breaking fat into small droplets is called emulsifying.",
    },
    body:
      "Two organs help digestion even though **food never passes through them**: the **liver** and the **pancreas**.\n\n" +
      "**Bile, made in the liver**\n\n" +
      "- **Bile** is made in the **liver**, stored in the **gall bladder** and released into the **small intestine**.\n" +
      "- Bile **emulsifies** fat: it breaks big fat droplets **up** into lots of **small droplets**.\n" +
      "- Small droplets have a much **bigger surface area** for **lipase** to work on, so fat is digested **faster**.\n" +
      "- Bile is **alkaline**, so it **neutralises the stomach acid** as food arrives in the small intestine, giving the enzymes there the right conditions. That's a neutralisation reaction, just like the ones in your Acids & Alkalis unit!\n\n" +
      "**Bile is NOT an enzyme.** It breaks fat **UP**, not **DOWN**. After emulsifying, the droplets are still fat, just smaller. Only **lipase** actually breaks fat **down** into **glycerol and fatty acids**.\n\n" +
      "**The pancreas** makes all three types of digestive enzyme, **carbohydrase, protease and lipase**, and releases them into the **small intestine**, where they finish digesting starch and protein, and digest fat.\n\n" +
      "So in the small intestine the liver and pancreas work as a team: **bile** gets the fat ready and neutralises the acid, then the **pancreas's enzymes** do the chemical digestion.",
    diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 236" role="img" aria-label="Bile emulsifies fat: one big fat droplet is broken up into many small droplets, giving a much bigger surface area for lipase enzymes to work on" font-family="sans-serif">
      <circle cx="82" cy="100" r="50" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
      <text x="82" y="105" font-size="14" font-weight="bold" text-anchor="middle" fill="#713f12">fat</text>
      <text x="82" y="176" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">1 big droplet</text>
      <text x="82" y="194" font-size="11" text-anchor="middle" fill="#475569">small surface area</text>
      <path d="M148,100 H229 M229,94 L240,100 L229,106 Z" stroke="#4d7c0f" stroke-width="3" fill="#4d7c0f" stroke-linejoin="round"/>
      <text x="194" y="70" font-size="14" font-weight="bold" text-anchor="middle" fill="#3f6212">bile</text>
      <text x="194" y="88" font-size="12" text-anchor="middle" fill="#3f6212">(emulsifies)</text>
      <text x="194" y="124" font-size="11" text-anchor="middle" fill="#475569">breaks fat UP,</text>
      <text x="194" y="139" font-size="11" text-anchor="middle" fill="#475569">not down</text>
      <circle cx="322" cy="62" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="346" cy="56" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="371" cy="60" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="396" cy="57" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="419" cy="66" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="310" cy="86" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="334" cy="82" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="358" cy="81" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="383" cy="83" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="407" cy="88" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="430" cy="92" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="318" cy="110" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="343" cy="106" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="367" cy="105" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="392" cy="108" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="415" cy="113" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="329" cy="133" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="353" cy="130" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="378" cy="131" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="402" cy="135" r="10" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="425" cy="137" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="342" cy="154" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="366" cy="153" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="390" cy="156" r="9" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <g transform="translate(292,40) rotate(35)"><path d="M-12,6 L15,-7.5 M-12,-6 L15,7.5" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/><path d="M-11.5,8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0 M-11.5,-8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0" fill="none" stroke="#15803d" stroke-width="2"/></g>
      <g transform="translate(446,44) rotate(145)"><path d="M-12,6 L15,-7.5 M-12,-6 L15,7.5" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/><path d="M-11.5,8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0 M-11.5,-8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0" fill="none" stroke="#15803d" stroke-width="2"/></g>
      <g transform="translate(452,150) rotate(215)"><path d="M-12,6 L15,-7.5 M-12,-6 L15,7.5" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/><path d="M-11.5,8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0 M-11.5,-8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0" fill="none" stroke="#15803d" stroke-width="2"/></g>
      <g transform="translate(290,160) rotate(-35)"><path d="M-12,6 L15,-7.5 M-12,-6 L15,7.5" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/><path d="M-11.5,8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0 M-11.5,-8.5 a4.5,4.5 0 1,0 -9,0 a4.5,4.5 0 1,0 9,0" fill="none" stroke="#15803d" stroke-width="2"/></g>
      <text x="370" y="30" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">lipase (enzyme)</text>
      <text x="370" y="194" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">lots of small droplets</text>
      <text x="370" y="212" font-size="11" text-anchor="middle" fill="#475569">much bigger surface area for lipase</text>
    </svg>`,
    diagramCaption:
      "Bile emulsifies fat: one big droplet is broken UP into lots of small droplets. It is the same amount of fat, but with a much bigger surface area, so lipase (the green scissors) can digest it faster.",
    keyPoints: [
      "Bile is made in the liver, stored in the gall bladder and released into the small intestine.",
      "Bile emulsifies fat: it breaks big droplets UP into small droplets, giving a bigger surface area for lipase.",
      "Bile is not an enzyme. Lipase is the enzyme that breaks fat DOWN into glycerol and fatty acids.",
      "Bile is alkaline and neutralises the stomach acid.",
      "The pancreas makes carbohydrase, protease and lipase and releases them into the small intestine.",
    ],
    whyItWorks:
      "Lipase can only reach fat at the surface of a droplet, where the fat touches the watery liquid around it. Splitting one big droplet into many small ones exposes far more surface, so many more lipase molecules can work at the same time and the fat is digested much faster.",
    memoryTrick:
      "Think of bile as washing-up liquid for fat: it doesn't destroy the grease, it just breaks it UP into tiny droplets. The liver is the bile factory; the gall bladder is the storage cupboard.",
    examTip:
      "The number one mistake is writing that bile breaks fat down, digests fat or is an enzyme. Bile EMULSIFIES fat (breaks it UP into small droplets); lipase breaks it DOWN. Also, bile is MADE in the liver; the gall bladder only stores it.",
    thinkDeeper:
      "Some people have their gall bladder removed. Their liver still makes bile, but now it trickles slowly into the small intestine all the time instead of being squirted in when a meal arrives. Suggest why doctors may advise them to avoid very fatty meals.",
  },

  // 7. Absorption
  {
    id: "an-absorption",
    topic: "an",
    lesson: "Adaptations of the small intestine",
    heading: "Absorption: small intestine and villi",
    discovery: {
      problem:
        "Your small intestine is a narrow tube, only about 2.5 cm wide. Yet if you could flatten out its whole inner surface, it would cover around 30 square metres, about a third of a badminton court! How can a narrow tube have so much surface?",
      idea:
        "Its inner wall is folded and covered in millions of tiny finger-like villi, and even the cells on each villus have tiny folds of their own. Folding a surface into lots of 'fingers' packs a huge area into a small space, just as a fluffy towel has far more surface than a flat sheet the same size. More surface means more digested food can be absorbed at the same time.",
    },
    body:
      "After digestion, food molecules are **small and soluble**: **glucose**, **amino acids**, **fatty acids** and **glycerol**. They pass through the wall of the **small intestine** into the **blood**. This is **absorption**. **Vitamins, minerals and water** are already small enough, so they are absorbed without being digested.\n\n" +
      "The small intestine is **adapted** for fast, efficient absorption:\n\n" +
      "- **Villi**: millions of finger-like projections give a **very large surface area**, so more food is absorbed at once.\n" +
      "- **Walls one cell thick**: food molecules only have a **short distance** to travel into the blood.\n" +
      "- **Lots of capillaries**: a **good blood supply** carries absorbed food away quickly, so more can keep moving in.\n\n" +
      "**Towel vs sheet:** to dry yourself, a fluffy towel works much better than a flat sheet of the same size, because its tiny loops give it a far bigger surface. Villi do the same job for absorbing food.\n\n" +
      "**What's left?** **Fibre** and any **undigested food** can't be absorbed, so they move on to the **large intestine**, which **absorbs water** from them to make **solid faeces**. The faeces are stored in the **rectum** and leave through the **anus**.\n\n" +
      "**If villi are damaged** (as happens in coeliac disease, when the body reacts badly to gluten, a protein in wheat), the surface area becomes much **smaller**, so **less food is absorbed**. A person can then become malnourished even though they eat plenty.",
    figure: "villus",
    diagramCaption:
      "Villi (one is called a villus) lining the small intestine. Each villus has a wall only one cell thick and a network of blood capillaries inside, so small, soluble food molecules pass quickly into the blood.",
    keyPoints: [
      "Absorption: small soluble molecules (glucose, amino acids, fatty acids, glycerol) pass through the wall of the small intestine into the blood.",
      "Villi are finger-like projections that give a very large surface area.",
      "Walls one cell thick give a short distance; lots of capillaries give a good blood supply to carry food away.",
      "Vitamins, minerals and water are absorbed without being digested.",
      "The large intestine absorbs water from undigested food (including fibre) to make solid faeces.",
    ],
    whyItWorks:
      "Absorption happens across a surface, so the more surface there is, the more molecules can cross at the same time. A thin wall means each molecule has only a short way to go, and flowing blood carries absorbed food away, so the blood next to the wall never fills up and absorption keeps going.",
    memoryTrick:
      "The 3 S's of the small intestine: Surface area (villi), Short distance (walls one cell thick) and Supply of blood (lots of capillaries).",
    examTip:
      "Always say WHY an adaptation helps. Not just 'it has villi', but 'villi give a large surface area, so more digested food is absorbed at once'. And don't mix up the intestines: the SMALL intestine absorbs digested food; the LARGE intestine absorbs WATER.",
    thinkDeeper:
      "The small intestine is several metres long, and food takes hours to pass through it. Suggest two reasons why a much shorter small intestine would absorb less digested food, even if it still had villi.",
  },
];
