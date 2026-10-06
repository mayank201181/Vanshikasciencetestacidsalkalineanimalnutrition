import type { GuideSection } from "../types";

// Revision guide — Acids & Alkalis (Year 8, Exploring Science 7E/7F).
// One section per lesson on the school cover sheet, using the school's own definitions.

export const GUIDE_AA: GuideSection[] = [
  // ---------------------------------------------------------------- Lesson 1
  {
    id: "aa-everyday",
    topic: "aa",
    lesson: "Lesson 1",
    heading: "Acids and alkalis around us",
    discovery: {
      problem:
        "Imagine stirring a spatula of black copper oxide into one beaker of water, and a spatula of sodium hydroxide into another. Both substances can neutralise (cancel out) an acid, but only one of them is called an alkali. What do you think the difference could be?",
      idea:
        "Look at the beakers: the copper oxide just sits on the bottom, but the sodium hydroxide disappears because it dissolves. That is the whole difference! Both are bases, because both neutralise acids, but an alkali is a base that dissolves in water. So sodium hydroxide is a base AND an alkali, while copper oxide is a base but not an alkali.",
    },
    body:
      "Acids aren't only found in labs. If you look around your kitchen, you may find some **acids to eat or drink**:\n\n" +
      "| Found in | Acid it contains |\n" +
      "|---|---|\n" +
      "| lemons | citric acid |\n" +
      "| oranges (vitamin C) | ascorbic acid |\n" +
      "| vinegar | ethanoic acid |\n" +
      "| fizzy drinks | carbonic acid |\n\n" +
      "Some acids are more dangerous. The three **lab acids** you need to know can come **dilute** or **concentrated**: **hydrochloric acid (HCl)**, **sulfuric acid (H₂SO₄)** and **nitric acid (HNO₃)**.\n\n" +
      "**Alkalis** are common at home too, especially in cleaning products:\n\n" +
      "- **mild and safe:** soap, washing-up liquid, toothpaste\n" +
      "- **cleaning products:** bleach, washing powder\n" +
      "- **most dangerous:** oven cleaner and **caustic soda** (drain cleaner), which are very **corrosive**\n\n" +
      "Caustic soda is **sodium hydroxide**, a common lab alkali, along with **potassium hydroxide**.\n\n" +
      "A **base** is a substance that reacts with an acid to **neutralise** it and make a **salt**. **Metal oxides, metal hydroxides and metal carbonates** are all bases.\n\n" +
      "Many bases are **insoluble**: they don't dissolve in water. A base that **does** dissolve in water is called an **alkali**. So **an alkali is a soluble base**. All alkalis are bases, but not all bases are alkalis.",
    diagram: `<svg viewBox="0 0 460 292" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram. A large oval labelled bases contains a smaller circle labelled alkalis. Copper oxide and calcium carbonate are insoluble bases outside the alkali circle. Sodium hydroxide and potassium hydroxide are inside the alkali circle." font-family="sans-serif">
  <ellipse cx="230" cy="128" rx="215" ry="112" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
  <circle cx="300" cy="135" r="88" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="115" y="72" font-size="14" font-weight="bold" fill="#3730a3" text-anchor="middle">BASES</text>
  <text x="115" y="90" font-size="12" fill="#3730a3" text-anchor="middle">neutralise acids</text>
  <text x="115" y="128" font-size="12" fill="#1e293b" text-anchor="middle">copper oxide</text>
  <text x="115" y="146" font-size="12" fill="#1e293b" text-anchor="middle">calcium carbonate</text>
  <text x="115" y="170" font-size="11" font-style="italic" fill="#475569" text-anchor="middle">insoluble, so</text>
  <text x="115" y="184" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">NOT alkalis</text>
  <text x="300" y="100" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">ALKALIS</text>
  <text x="300" y="118" font-size="12" fill="#1e40af" text-anchor="middle">soluble bases</text>
  <text x="300" y="134" font-size="11" font-style="italic" fill="#1e40af" text-anchor="middle">(dissolve in water)</text>
  <text x="300" y="164" font-size="12" fill="#1e293b" text-anchor="middle">sodium hydroxide</text>
  <text x="300" y="182" font-size="12" fill="#1e293b" text-anchor="middle">potassium hydroxide</text>
  <text x="230" y="264" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">All alkalis are bases, but not all bases are alkalis.</text>
  <text x="230" y="283" font-size="12" fill="#475569" text-anchor="middle">Bases: metal oxides, metal hydroxides and metal carbonates</text>
</svg>`,
    diagramCaption:
      "Bases are the big group; alkalis are the bases that dissolve in water. Copper oxide and calcium carbonate are insoluble, so they are bases but not alkalis.",
    keyPoints: [
      "Kitchen acids: citric acid (lemons), ascorbic acid (vitamin C), ethanoic acid (vinegar), carbonic acid (fizzy drinks).",
      "Lab acids: hydrochloric acid (HCl), sulfuric acid (H₂SO₄) and nitric acid (HNO₃). They can be dilute or concentrated.",
      "Household alkalis: soap, washing-up liquid, toothpaste, bleach, washing powder, oven cleaner and caustic soda (drain cleaner).",
      "A base reacts with an acid and neutralises it. Metal oxides, metal hydroxides and metal carbonates are bases.",
      "An alkali is a soluble base: all alkalis are bases, but not all bases are alkalis.",
    ],
    whyItWorks:
      "'Alkaline' describes a solution, so a base can only make water alkaline if it dissolves and spreads through it. An insoluble base like copper oxide can still neutralise an acid that is poured onto it, but on its own it can't make the water alkaline, so it doesn't count as an alkali.",
    memoryTrick:
      "Think of bases as a club and alkalis as the club members who can swim (dissolve in water). Every swimmer is in the club, but not every club member can swim.",
    examTip:
      "Learn the definition word for word: an alkali is a soluble base (a base that dissolves in water). 'The opposite of an acid' won't get the mark. Also match each acid to its food: citric – lemons, ascorbic – vitamin C, ethanoic – vinegar, carbonic – fizzy drinks.",
    thinkDeeper:
      "Copper oxide neutralises acids, but if you stir it into water, red litmus paper stays red. Use the word 'soluble' to explain why. Caustic soda (sodium hydroxide) unblocks drains: which circle of the Venn diagram does it belong in, and what test would prove it?",
  },

  // ---------------------------------------------------------------- Lesson 1
  {
    id: "aa-hazards",
    topic: "aa",
    lesson: "Lesson 1",
    heading: "Hazards, risk and staying safe",
    discovery: {
      problem:
        "Two bottles in the school prep room are both labelled 'hydrochloric acid'. One has the corrosive hazard symbol; the other only has an exclamation mark. It's the same acid, so why the different warnings?",
      idea:
        "It's all about concentration. The concentrated bottle has lots of acid particles packed into every cm³. The dilute bottle has had water added, so there are fewer acid particles in the same volume. Fewer acid particles means less damage if it splashes, so the dilute acid is labelled as an irritant instead of corrosive.",
    },
    body:
      "Learn these three safety words exactly:\n\n" +
      "- **Hazard:** something that could cause harm (e.g. a corrosive acid).\n" +
      "- **Risk:** the chance that the hazard will actually cause harm.\n" +
      "- **Precaution:** an action taken to reduce the risk (e.g. wearing eye protection so acid can't splash into your eyes).\n\n" +
      "Lab acids come **concentrated** (lots of acid dissolved in a little water) or **dilute** (water has been added). Dilute acids are less dangerous because there are **fewer acid particles in the same volume**.\n\n" +
      "Concentrated acids and alkalis usually carry the **corrosive** symbol: they can destroy metals, stonework and skin. Dilute ones often carry the **irritant** symbol, an **exclamation mark**. They are not corrosive, but can still make skin and eyes sore.\n\n" +
      "**Hazard symbols to know:**\n\n" +
      "| Symbol | Warns about |\n" +
      "|---|---|\n" +
      "| Exploding bomb | explosion or reactivity |\n" +
      "| Flame | fire (flammable) |\n" +
      "| Flame over circle | oxidising: makes fires burn more fiercely |\n" +
      "| Gas cylinder | gas under pressure |\n" +
      "| Corrosion | destroys metals, skin and eyes |\n" +
      "| Skull and crossbones | toxic: small amounts can kill |\n" +
      "| Health hazard | serious health effects |\n" +
      "| Exclamation mark | irritant or harmful; ozone damage |\n" +
      "| Environment | harms life in water |\n" +
      "| Biohazard | organisms or toxins that cause disease |\n\n" +
      "**Reducing the risk** with acids and alkalis:\n\n" +
      "- use the **most dilute** solution that works\n" +
      "- wear **eye protection** (goggles)\n" +
      "- use **small volumes**\n" +
      "- **stand up**, so you can move away from a spill\n" +
      "- **wipe up spills** straight away\n" +
      "- splashed on your skin? **Wash it off with plenty of water**",
    diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particle diagram of two beakers holding the same volume of acid. The concentrated acid has many acid particles and few water particles. The dilute acid has only a few acid particles spread among many water particles." font-family="sans-serif">
  <text x="120" y="24" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Concentrated acid</text>
  <text x="340" y="24" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Dilute acid</text>
  <path d="M51.5 80 V192 Q51.5 198.5 58 198.5 H182 Q188.5 198.5 188.5 192 V80 Z" fill="#e0f2fe"/>
  <path d="M271.5 80 V192 Q271.5 198.5 278 198.5 H402 Q408.5 198.5 408.5 192 V80 Z" fill="#e0f2fe"/>
  <path d="M44 38 Q50 40 50 46 V192 Q50 200 58 200 H182 Q190 200 190 192 V46 Q190 40 196 38" fill="none" stroke="#64748b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M264 38 Q270 40 270 46 V192 Q270 200 278 200 H402 Q410 200 410 192 V46 Q410 40 416 38" fill="none" stroke="#64748b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M82 99a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M150 95a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M106 122a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M171 127a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M59 153a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M126 155a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M106 185a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M171 182a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.5"/>
  <path d="M58 96a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M103 94a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M125 98a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M170 98a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M60 124a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M82 127a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M126 126a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M147 123a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M81 156a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M102 152a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M149 152a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M170 156a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M59 184a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M80 181a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M125 182a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M147 185a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" fill="#dc2626"/>
  <path d="M280 96a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M325 94a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M347 98a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M370 95a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M392 98a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M282 124a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M304 127a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M326 122a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M348 126a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M391 127a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M279 153a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M303 156a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M324 152a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M371 152a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M392 156a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M302 181a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M326 185a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M347 182a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M369 185a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M391 182a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.5"/>
  <path d="M300 99a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M367 123a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M344 155a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M279 184a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" fill="#dc2626"/>
  <line x1="196" y1="80" x2="264" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="230" y="72" font-size="11" fill="#475569" text-anchor="middle">same volume</text>
  <text x="120" y="222" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Lots of acid particles</text>
  <text x="340" y="222" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Fewer acid particles</text>
  <text x="120" y="238" font-size="11" fill="#475569" text-anchor="middle">more hazardous</text>
  <text x="340" y="238" font-size="11" fill="#475569" text-anchor="middle">less hazardous</text>
  <rect x="45" y="248" width="150" height="22" rx="11" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="120" y="263" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Corrosive symbol</text>
  <rect x="262" y="248" width="156" height="22" rx="11" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="340" y="263" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Irritant symbol (!)</text>
  <circle cx="140" cy="287" r="6" fill="#dc2626"/>
  <text x="151" y="291" font-size="12" fill="#1e293b">acid particle</text>
  <circle cx="276" cy="287" r="4" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="285" y="291" font-size="12" fill="#1e293b">water particle</text>
</svg>`,
    diagramCaption:
      "Same volume, different crowding: the concentrated acid has far more acid particles in it, so it is more hazardous than the dilute acid.",
    keyPoints: [
      "Hazard = something that could cause harm. Risk = the chance that the hazard actually causes harm. Precaution = an action that reduces the risk.",
      "A dilute acid has fewer acid particles in the same volume, so it is less dangerous than a concentrated one.",
      "Concentrated acids and alkalis usually carry the corrosive symbol; dilute ones often carry the irritant (exclamation mark) symbol.",
      "Reduce the risk: use dilute solutions, wear goggles, use small volumes, stand up, wipe up spills and wash skin with plenty of water.",
    ],
    whyItWorks:
      "Acids do damage when their particles react with whatever they touch: skin, eyes or metal. In a dilute acid there are fewer acid particles in each drop, so a splash has fewer particles to react and does less harm. That's why diluting is one of the best ways to reduce the risk.",
    memoryTrick:
      "A shark is the hazard. The chance that it bites you is the risk. The shark cage is the precaution. And for the symbols: Concentrated → Corrosive (C goes with C).",
    examTip:
      "Don't mix up hazard and risk: the acid itself is the hazard, and the risk is how likely it is to hurt someone. When you explain why dilute acid is safer, use particles ('fewer acid particles in the same volume') rather than just saying it's 'weaker'.",
    thinkDeeper:
      "A bottle of concentrated sulfuric acid is locked in a cupboard. Is the hazard high or low? Is the risk high or low? Now a student carries it across a busy lab. Which has changed, the hazard or the risk, and what precautions would you add?",
  },

  // ---------------------------------------------------------------- Lesson 2
  {
    id: "aa-indicators",
    topic: "aa",
    lesson: "Lesson 2",
    heading: "Indicators: litmus and red cabbage",
    discovery: {
      problem:
        "You're handed three colourless liquids: one is an acid, one is an alkali and one is neutral. All you have is red and blue litmus paper. Can you work out which is which? And what can't litmus tell you?",
      idea:
        "Dip both colours into each liquid. If blue litmus turns red, it's the acid. If red litmus turns blue, it's the alkali. If neither changes, it's neutral. But litmus can't tell you how strongly acidic or alkaline something is: it just goes red or blue. For that you need an indicator with more colours.",
    },
    body:
      "An **indicator** is a dye that changes colour in acids and alkalis, so you can tell **acidic**, **alkaline** and **neutral** solutions apart.\n\n" +
      "**Litmus** comes as red or blue paper:\n\n" +
      "- **blue litmus turns red** in an acid\n" +
      "- **red litmus turns blue** in an alkali\n" +
      "- in a **neutral** solution, **neither** changes\n\n" +
      "The catch: **litmus can't tell you HOW acidic** (or alkaline) something is. Vinegar and concentrated hydrochloric acid both just turn it red.\n\n" +
      "**Make your own red cabbage indicator:**\n\n" +
      "- **chop** some red cabbage into small pieces\n" +
      "- cover it with **hot water** (ask an adult) or **crush** it with a little water to get the colour out\n" +
      "- leave it to **stand** for a few minutes, then **filter** it and keep the purple liquid\n\n" +
      "Red cabbage indicator turns **red/pink in acids**, stays **purple when neutral** and turns **green/yellow in alkalis**.\n\n" +
      "**Evaluating indicators:**\n\n" +
      "| Indicator | Good points | Limitations |\n" +
      "|---|---|---|\n" +
      "| Litmus | quick and clear | only acid or alkali, not how strong |\n" +
      "| Red cabbage | cheap, homemade, several colours | no exact pH; colours hard to judge |\n" +
      "| Universal indicator | many colours → a pH number | colour is judged by eye |\n" +
      "| pH probe | most precise reading | costs more |",
    diagram: `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Litmus results. Blue litmus turns red in acid but stays blue in neutral and alkaline solutions. Red litmus turns blue in alkali but stays red in acidic and neutral solutions." font-family="sans-serif">
  <text x="150" y="36" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">Start</text>
  <text x="235" y="36" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">In acid</text>
  <text x="320" y="36" font-size="13" font-weight="bold" fill="#16a34a" text-anchor="middle">In neutral</text>
  <text x="405" y="36" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">In alkali</text>
  <line x1="192" y1="50" x2="192" y2="176" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="12" y="84" font-size="13" font-weight="bold" fill="#1e293b">Blue litmus</text>
  <text x="12" y="154" font-size="13" font-weight="bold" fill="#1e293b">Red litmus</text>
  <rect x="118" y="62" width="64" height="34" rx="5" fill="#2563eb"/>
  <rect x="203" y="62" width="64" height="34" rx="5" fill="#dc2626" stroke="#0f172a" stroke-width="3"/>
  <rect x="288" y="62" width="64" height="34" rx="5" fill="#2563eb"/>
  <rect x="373" y="62" width="64" height="34" rx="5" fill="#2563eb"/>
  <rect x="118" y="132" width="64" height="34" rx="5" fill="#dc2626"/>
  <rect x="203" y="132" width="64" height="34" rx="5" fill="#dc2626"/>
  <rect x="288" y="132" width="64" height="34" rx="5" fill="#dc2626"/>
  <rect x="373" y="132" width="64" height="34" rx="5" fill="#2563eb" stroke="#0f172a" stroke-width="3"/>
  <text x="150" y="84" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">blue</text>
  <text x="235" y="84" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">red</text>
  <text x="320" y="84" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">blue</text>
  <text x="405" y="84" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">blue</text>
  <text x="150" y="154" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">red</text>
  <text x="235" y="154" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">red</text>
  <text x="320" y="154" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">red</text>
  <text x="405" y="154" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">blue</text>
  <text x="235" y="198" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">blue → red</text>
  <text x="320" y="198" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">no change</text>
  <text x="405" y="198" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">red → blue</text>
  <text x="230" y="234" font-size="13" fill="#1e293b" text-anchor="middle">Litmus shows acid or alkali, but not HOW acidic.</text>
</svg>`,
    diagramCaption:
      "Blue litmus changes only in acid (to red); red litmus changes only in alkali (to blue). In a neutral solution neither strip changes. The strips with a dark outline are the ones that changed.",
    keyPoints: [
      "An indicator is a dye that changes colour in acids and alkalis.",
      "Blue litmus turns red in acid; red litmus turns blue in alkali; in a neutral solution neither changes.",
      "Litmus tells you acid or alkali, but not how acidic or alkaline.",
      "Red cabbage indicator: red/pink in acid, purple when neutral, green/yellow in alkali.",
      "Universal indicator gives a pH number from its colour; a pH probe gives the most precise reading.",
    ],
    whyItWorks:
      "An indicator's dye can exist in different forms with different colours, and acids and alkalis switch it from one form to another. Litmus has only one switch, so it can only sort acid from alkali; red cabbage and universal indicator contain dyes that switch at lots of different pH values, so they show many colours.",
    memoryTrick: "BRA: Blue turns Red in Acid. Flip it for alkalis: Red turns Blue.",
    examTip:
      "Litmus is only ever red or blue. It never turns green or purple (those are universal indicator colours). Always say which paper you mean: 'blue litmus turns red', not just 'it turns red'.",
    thinkDeeper:
      "Red cabbage indicator gives lots of colours, but it doesn't come with a colour chart. How could you make your own chart, so that you could use red cabbage to estimate the pH of a liquid you've never tested?",
  },

  // ---------------------------------------------------------------- Lesson 3
  {
    id: "aa-ph",
    topic: "aa",
    lesson: "Lesson 3",
    heading: "Universal indicator and the pH scale",
    discovery: {
      problem:
        "Lemon juice and vinegar both turn blue litmus red, so both are acids. But which one is MORE acidic? Litmus can't help you here, so what could?",
      idea:
        "Universal indicator! It's a mixture of dyes that gives a different colour for each pH. Lemon juice turns it red (about pH 2) and vinegar turns it orange (about pH 3). The lower the pH, the more acidic the solution, so lemon juice is the more acidic of the two.",
    },
    body:
      "**Universal indicator** turns a different colour depending on the **pH** of a solution, and it works across the whole pH range. Use it as a **solution** (add a few drops) or as **paper** (dip it in, or spot the liquid on with a glass rod). Then **compare the colour with the colour chart** to read off the pH.\n\n" +
      "The **pH scale** (0–14) is a numbered scale that shows **how acidic or alkaline** a solution is:\n\n" +
      "- **below 7** = acidic\n" +
      "- **7** = neutral\n" +
      "- **above 7** = alkaline\n\n" +
      "| Colour | pH | Meaning |\n" +
      "|---|---|---|\n" +
      "| red | 0–2 | strongly acidic |\n" +
      "| orange or yellow | 3–6 | weakly acidic |\n" +
      "| green | 7 | neutral |\n" +
      "| blue | 8–10 | weakly alkaline |\n" +
      "| dark blue or purple | 11–14 | strongly alkaline |\n\n" +
      "**Everyday pH values** (approximate):\n\n" +
      "- **acidic:** stomach acid 1–2, lemon juice 2, vinegar 3, rain 5–6\n" +
      "- **neutral:** pure water 7\n" +
      "- **alkaline:** blood 7.4, toothpaste 8–9, soap 10, bleach 12, oven cleaner 13–14\n\n" +
      "**Comparing:** the **lower** the pH, the **more acidic** the solution; the **higher** the pH, the **more alkaline**. So pH 2 is more acidic than pH 5, and pH 13 is more alkaline than pH 9.\n\n" +
      "**Diluting** an acid (adding water) makes it less acidic, so its pH **rises towards 7**, but it **never goes above 7**. Adding water can't turn an acid into an alkali. (Diluting an alkali lowers its pH towards 7, but never below 7.)",
    figure: "ph-scale",
    diagram: `<svg viewBox="0 0 460 184" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pH scale from 0 to 14. An arrow shows that adding water to an acid at pH 1 raises its pH towards 7 but stops at 7. A second arrow shows that adding water to an alkali at pH 13 lowers its pH towards 7 but stops at 7." font-family="sans-serif">
  <text x="20" y="20" font-size="12" font-weight="bold" fill="#b91c1c">Acid + water: pH rises towards 7</text>
  <circle cx="62" cy="39" r="4.5" fill="#dc2626"/>
  <path d="M62 39 H202 M200 33 L211 39 L200 45 Z" fill="#dc2626" stroke="#dc2626" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="216" y1="29" x2="216" y2="49" stroke="#1e293b" stroke-width="3"/>
  <rect x="20" y="52" width="84" height="32" fill="#dc2626"/>
  <rect x="104" y="52" width="56" height="32" fill="#f97316"/>
  <rect x="160" y="52" width="56" height="32" fill="#facc15"/>
  <rect x="216" y="52" width="28" height="32" fill="#16a34a"/>
  <rect x="244" y="52" width="84" height="32" fill="#2563eb"/>
  <rect x="328" y="52" width="112" height="32" fill="#6d28d9"/>
  <text x="34" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">0</text>
  <text x="62" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
  <text x="90" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
  <text x="118" y="73" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">3</text>
  <text x="146" y="73" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">4</text>
  <text x="174" y="73" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">5</text>
  <text x="202" y="73" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">6</text>
  <text x="230" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">7</text>
  <text x="258" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">8</text>
  <text x="286" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">9</text>
  <text x="314" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">10</text>
  <text x="342" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">11</text>
  <text x="370" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">12</text>
  <text x="398" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">13</text>
  <text x="426" y="73" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">14</text>
  <line x1="244" y1="87" x2="244" y2="107" stroke="#1e293b" stroke-width="3"/>
  <circle cx="398" cy="97" r="4.5" fill="#2563eb"/>
  <path d="M398 97 H258 M260 91 L249 97 L260 103 Z" fill="#2563eb" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="440" y="124" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="end">Alkali + water: pH falls towards 7</text>
  <text x="230" y="152" font-size="12" fill="#1e293b" text-anchor="middle">Water is neutral, so adding it only moves the pH closer to 7.</text>
  <text x="230" y="172" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">An acid never becomes alkaline just by adding water.</text>
</svg>`,
    diagramCaption:
      "Adding water moves the pH towards 7 from either side: a diluted acid never becomes alkaline, and a diluted alkali never becomes acidic.",
    keyPoints: [
      "The pH scale runs from 0 to 14: below 7 is acidic, 7 is neutral, above 7 is alkaline.",
      "Universal indicator: red (strong acid) → orange/yellow (weak acid) → green (neutral) → blue (weak alkali) → purple (strong alkali).",
      "Compare the colour with the colour chart to read off the pH.",
      "Lower pH = more acidic; higher pH = more alkaline.",
      "Diluting an acid raises its pH towards 7, but never above 7.",
    ],
    whyItWorks:
      "Acidity is caused by hydrogen ions: the more of them packed into a solution, the lower its pH. Adding water spreads the hydrogen ions out, so the pH rises. But water itself is neutral (pH 7), so it can only bring an acid closer to 7, never past it.",
    memoryTrick:
      "The universal indicator colours run in rainbow order from acid to alkali. Richard Of York Gave Battle In Vain: Red (strong acid), Orange, Yellow, Green (neutral), Blue, Indigo, Violet (strong alkali).",
    examTip:
      "Lower pH means MORE acidic, not less: pH 1 is more acidic than pH 4. And if you're asked what happens when an acid is diluted, say the pH rises towards 7. Never say it becomes alkaline.",
    thinkDeeper:
      "Acid A has a pH of 2 and acid B has a pH of 4. Which is more acidic? If you added lots of water to acid A, could it end up less acidic than acid B? Could it ever turn universal indicator blue? Explain both answers.",
  },

  // ---------------------------------------------------------------- Lesson 4
  {
    id: "aa-neutralisation",
    topic: "aa",
    lesson: "Lesson 4",
    heading: "Neutralisation",
    discovery: {
      problem:
        "Hydrochloric acid is corrosive. Sodium hydroxide is corrosive. Yet if you mix them in exactly the right amounts, you end up with salty water. Where did the danger go?",
      idea:
        "The acid and the alkali react and cancel each other out. This is neutralisation. Both are used up, and two new substances are made: a salt (here, sodium chloride, which is table salt) and water. Get the amounts exactly right and the solution is neutral, pH 7. (Never taste anything in a lab, though!)",
    },
    body:
      "**Neutralisation** is the reaction between an **acid** and an **alkali** to produce a **salt** and **water**:\n\n" +
      "**acid + alkali → salt + water**\n\n" +
      "It is a **chemical reaction**: the acid and the alkali are used up and **new substances** are made.\n\n" +
      "**How to make a neutral solution from a metal hydroxide and an acid, then get the salt:**\n\n" +
      "- **Step 1:** measure some dilute acid into a beaker and add a few drops of **universal indicator**. It turns **red**.\n" +
      "- **Step 2:** add the alkali (e.g. sodium hydroxide solution) **a little at a time**, **stirring** after each addition.\n" +
      "- **Step 3:** stop when the indicator turns **green**. That's **pH 7: neutral**.\n" +
      "- **Step 4:** pour the solution into an **evaporating basin** and **heat it gently** (or leave it somewhere warm). The **water evaporates** and **crystals of salt** are left behind.\n\n" +
      "**Watch the pH:** as you add the alkali, the pH **rises**: red → orange → yellow → **green (pH 7)**. Add too much and you **overshoot**: the pH goes **above 7** and the indicator turns blue. That's why you add the alkali **drop by drop** as the colour gets close to green.",
    diagram: `<svg viewBox="0 0 480 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three steps. Step 1: a beaker of acid with universal indicator is red. Step 2: alkali is added from a dropping pipette while stirring, until the solution is green. Step 3: the neutral solution is heated gently in an evaporating basin on a tripod and gauze; the water evaporates and salt crystals are left." font-family="sans-serif">
  <path d="M41.5 112 V164 Q41.5 168.5 46 168.5 H114 Q118.5 168.5 118.5 164 V112 Z" fill="#f87171"/>
  <path d="M34 66 Q40 67 40 73 V164 Q40 170 46 170 H114 Q120 170 120 164 V73 Q120 67 126 66" fill="none" stroke="#64748b" stroke-width="3" stroke-linejoin="round"/>
  <path d="M134 128 H174 M172 122 L183 128 L172 134 Z" fill="#94a3b8" stroke="#94a3b8" stroke-width="3" stroke-linejoin="round"/>
  <path d="M201.5 100 V164 Q201.5 168.5 206 168.5 H274 Q278.5 168.5 278.5 164 V100 Z" fill="#4ade80"/>
  <path d="M194 66 Q200 67 200 73 V164 Q200 170 206 170 H274 Q280 170 280 164 V73 Q280 67 286 66" fill="none" stroke="#64748b" stroke-width="3" stroke-linejoin="round"/>
  <line x1="266" y1="50" x2="226" y2="160" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
  <path d="M236 30 H244 V76 L241 84 H239 L236 76 Z" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
  <ellipse cx="240" cy="22" rx="9" ry="11" fill="#94a3b8"/>
  <circle cx="240" cy="92" r="3.5" fill="#60a5fa"/>
  <path d="M294 128 H334 M332 122 L343 128 L332 134 Z" fill="#94a3b8" stroke="#94a3b8" stroke-width="3" stroke-linejoin="round"/>
  <path d="M384 80 q-5 -7 0 -14 q5 -7 0 -14 M400 78 q-5 -7 0 -14 q5 -7 0 -14 M416 80 q-5 -7 0 -14 q5 -7 0 -14" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
  <path d="M356 90 Q400 134 444 90 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M386 100 l5 -5 l5 5 l-5 5 Z M398 104 l5 -5 l5 5 l-5 5 Z M410 99 l5 -5 l5 5 l-5 5 Z" fill="#ffffff" stroke="#475569" stroke-width="1.2"/>
  <line x1="350" y1="114" x2="450" y2="114" stroke="#475569" stroke-width="3"/>
  <path d="M360 114 L350 170 M440 114 L450 170" fill="none" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
  <path d="M400 118 C393 127 394 135 400 140 C406 135 407 127 400 118 Z" fill="#60a5fa"/>
  <rect x="394" y="140" width="12" height="26" fill="#94a3b8"/>
  <rect x="380" y="164" width="40" height="6" rx="2" fill="#64748b"/>
  <text x="80" y="194" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Acid +</text>
  <text x="80" y="210" font-size="12" fill="#1e293b" text-anchor="middle">universal indicator</text>
  <text x="80" y="226" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">→ red</text>
  <text x="240" y="194" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">2. Add alkali</text>
  <text x="240" y="210" font-size="12" fill="#1e293b" text-anchor="middle">bit by bit, stirring,</text>
  <text x="240" y="226" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">until green (pH 7)</text>
  <text x="400" y="194" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">3. Heat gently</text>
  <text x="400" y="210" font-size="12" fill="#1e293b" text-anchor="middle">the water evaporates,</text>
  <text x="400" y="226" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">salt crystals left</text>
</svg>`,
    diagramCaption:
      "Step 1: acid + universal indicator is red. Step 2: add alkali bit by bit, stirring, until it turns green (pH 7). Step 3: heat gently in an evaporating basin; the water evaporates and salt crystals are left.",
    keyPoints: [
      "Neutralisation is the reaction between an acid and an alkali to produce a salt and water.",
      "acid + alkali → salt + water. It is a chemical reaction because new substances are made.",
      "To make a neutral solution, add the alkali a little at a time, stirring, until universal indicator turns green (pH 7).",
      "To get the salt, evaporate the water: heat gently in an evaporating basin, or leave it somewhere warm.",
      "As alkali is added the pH rises to 7; add too much and it goes above 7.",
    ],
    whyItWorks:
      "The hydrogen in the acid and the hydroxide in the alkali join to make water, so the acidic and alkaline parts cancel each other out. The pieces left over (the metal from the alkali and the rest of the acid) join together to make the salt.",
    memoryTrick: "Acid + alkali makes 'salty water': a salt + water.",
    examTip:
      "It's the WATER that evaporates; the salt is left behind as crystals. Never write 'the salt evaporates'. In method questions, always say how you know the solution is neutral: the universal indicator turns green (pH 7).",
    thinkDeeper:
      "You make a neutral solution using universal indicator and then evaporate it, but your salt crystals come out tinted green. Why? How could you change the method to get clean white crystals?",
  },

  // ---------------------------------------------------------------- Lesson 5
  {
    id: "aa-salts",
    topic: "aa",
    lesson: "Lesson 5",
    heading: "Naming salts and word equations",
    discovery: {
      problem:
        "Clue 1: sodium hydroxide + hydrochloric acid → sodium chloride + water. Clue 2: potassium hydroxide + nitric acid → potassium nitrate + water. Some indigestion tablets contain magnesium hydroxide, and your stomach contains hydrochloric acid. Can you predict the salt they make?",
      idea:
        "Magnesium chloride (+ water)! The first part of a salt's name comes from the metal in the hydroxide (magnesium). The second part comes from the acid (hydrochloric → chloride). Spot that pattern and you can name any of these salts.",
    },
    body:
      "Every neutralisation makes a **salt** and **water**. A salt's name has two parts: the **first name** comes from the **metal** in the hydroxide, and the **second name** comes from the **acid**.\n\n" +
      "| Acid | Salt ending |\n" +
      "|---|---|\n" +
      "| hydrochloric acid | chloride |\n" +
      "| sulfuric acid | sulfate |\n" +
      "| nitric acid | nitrate |\n\n" +
      "**Worked examples:**\n\n" +
      "- sodium hydroxide + hydrochloric acid → **sodium chloride** + water\n" +
      "- potassium hydroxide + sulfuric acid → **potassium sulfate** + water\n" +
      "- calcium hydroxide + nitric acid → **calcium nitrate** + water\n\n" +
      "These are **word equations**. The **reactants** (the substances you start with) are written on the **left**, before the arrow. The **products** (the new substances made) are written on the **right**, after the arrow.\n\n" +
      "**Working backwards:** what reacts to make **potassium nitrate**? The metal is potassium, so you need **potassium hydroxide**. The ending is nitrate, so you need **nitric acid**.\n\n" +
      "Remember: a **base** neutralises an acid to make a salt and water, and an **alkali is a soluble base**. The metal hydroxides here are all bases, and the ones that dissolve in water, like sodium hydroxide, are alkalis.",
    diagram: `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Salt name builder. Sodium hydroxide gives the first name, sodium. Hydrochloric acid gives the ending, chloride. Together they make sodium chloride plus water. Endings: hydrochloric acid gives chloride, sulfuric acid gives sulfate, nitric acid gives nitrate." font-family="sans-serif">
  <rect x="16" y="14" width="190" height="56" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="111" y="34" font-size="11" fill="#1e40af" text-anchor="middle">metal hydroxide</text>
  <text x="111" y="56" font-size="14" fill="#1e293b" text-anchor="middle"><tspan font-weight="bold" fill="#1d4ed8">sodium</tspan> hydroxide</text>
  <text x="230" y="48" font-size="14" font-weight="bold" fill="#475569" text-anchor="middle">+</text>
  <rect x="254" y="14" width="190" height="56" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="349" y="34" font-size="11" fill="#991b1b" text-anchor="middle">acid</text>
  <text x="349" y="56" font-size="14" fill="#1e293b" text-anchor="middle">hydro<tspan font-weight="bold" fill="#b91c1c">chlor</tspan>ic acid</text>
  <path d="M111 72 L134 97.3 M140 104 L130.3 100.7 L137.7 94 Z" fill="#2563eb" stroke="#2563eb" stroke-width="2" stroke-linejoin="round"/>
  <path d="M349 72 L307.5 99.1 M300 104 L304.8 94.9 L310.3 103.3 Z" fill="#dc2626" stroke="#dc2626" stroke-width="2" stroke-linejoin="round"/>
  <text x="118" y="96" font-size="11" fill="#1e40af" text-anchor="end">metal name</text>
  <text x="334" y="96" font-size="11" fill="#991b1b">acid ending</text>
  <rect x="70" y="108" width="150" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <rect x="220" y="108" width="150" height="44" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="145" y="136" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">sodium</text>
  <text x="295" y="136" font-size="14" font-weight="bold" fill="#b91c1c" text-anchor="middle">chloride</text>
  <text x="380" y="136" font-size="14" fill="#1e293b">+ water</text>
  <text x="230" y="180" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Endings from the acid</text>
  <text x="214" y="200" font-size="12" fill="#1e293b" text-anchor="end">hydrochloric acid</text>
  <text x="230" y="200" font-size="12" fill="#475569" text-anchor="middle">→</text>
  <text x="246" y="200" font-size="12" font-weight="bold" fill="#b91c1c">chloride</text>
  <text x="214" y="219" font-size="12" fill="#1e293b" text-anchor="end">sulfuric acid</text>
  <text x="230" y="219" font-size="12" fill="#475569" text-anchor="middle">→</text>
  <text x="246" y="219" font-size="12" font-weight="bold" fill="#b91c1c">sulfate</text>
  <text x="214" y="238" font-size="12" fill="#1e293b" text-anchor="end">nitric acid</text>
  <text x="230" y="238" font-size="12" fill="#475569" text-anchor="middle">→</text>
  <text x="246" y="238" font-size="12" font-weight="bold" fill="#b91c1c">nitrate</text>
</svg>`,
    diagramCaption:
      "Build the salt's name: the metal from the hydroxide comes first, then the ending from the acid. Water is always the other product.",
    keyPoints: [
      "Salt name = the metal from the hydroxide + an ending from the acid.",
      "Hydrochloric acid → chloride; sulfuric acid → sulfate; nitric acid → nitrate.",
      "metal hydroxide + acid → salt + water, e.g. sodium hydroxide + hydrochloric acid → sodium chloride + water.",
      "Reactants go on the left of the arrow; products go on the right.",
      "A base neutralises an acid; an alkali is a soluble base.",
    ],
    whyItWorks:
      "When the acid and the hydroxide react, the hydrogen from the acid joins the hydroxide to make water. The two leftover pieces, the metal from the hydroxide and the 'acid part' (chloride, sulfate or nitrate), join together as the salt. That's why its name is built from both.",
    memoryTrick:
      "Metal first, acid second, like a first name and a surname. For the ending, keep the middle of the acid's name: hydro-CHLOR-ic → CHLOR-ide, SULF-uric → SULF-ate, NITR-ic → NITR-ate.",
    examTip:
      "Chloride, not chlorine; sulfate, not sulfide; nitrate, not nitride. Don't forget '+ water' as the second product, and keep the reactants on the left of the arrow and the products on the right.",
    thinkDeeper:
      "Which acid and which hydroxide would you react to make potassium sulfate? Now try a salt you've never met before: lithium nitrate. Write the full word equation for each.",
  },

  // ---------------------------------------------------------------- Lesson 6
  {
    id: "aa-uses",
    topic: "aa",
    lesson: "Lesson 6",
    heading: "Neutralisation in everyday life",
    discovery: {
      problem:
        "Farmers spread white powder on their fields. People chew chalky tablets after a big meal. Some people dab vinegar on a wasp sting. What do these three things have in common?",
      idea:
        "They're all neutralisation! In each case something is too acidic or too alkaline, and adding a base (or an acid) cancels it out, making a salt and water instead.",
    },
    body:
      "Neutralisation is useful whenever something is **too acidic** (or too alkaline): add a base to cancel out an acid, or an acid to cancel out an alkali.\n\n" +
      "- **Indigestion:** your stomach makes **hydrochloric acid** to help digest food and kill bacteria. Too much acid causes **indigestion**. **Antacid** tablets contain a **base**, such as **magnesium hydroxide** or **calcium carbonate**, which **neutralises** the extra acid.\n" +
      "- **Farming:** many crops grow badly in **acidic soil**, so farmers spread **lime** (a base) to neutralise it.\n" +
      "- **Lakes:** **acid rain** can make lakes too acidic for fish. Adding **lime** neutralises the acid.\n" +
      "- **Teeth:** bacteria in your mouth feed on sugar and make **acid**, which attacks your teeth. **Toothpaste** is a **mild alkali**, so it neutralises the acid and helps **prevent tooth decay**.\n\n" +
      "**Stings** (traditional remedies):\n\n" +
      "- a **bee sting** is **acidic**, so it is traditionally treated with an alkali such as **bicarbonate of soda** (baking soda) or **soap**\n" +
      "- a **wasp sting** is **alkaline**, so it is traditionally treated with a weak acid such as **vinegar**\n" +
      "- a **nettle sting** contains an **acid**, so an alkali would neutralise it\n\n" +
      "In every case a **base** reacts with an **acid** to make a **salt** and **water**. For example: magnesium hydroxide + hydrochloric acid → magnesium chloride + water.",
    diagram: `<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels of everyday neutralisation. Indigestion: an antacid tablet containing a base neutralises extra stomach acid. Acidic soil: lime, a base, is spread on the soil. Tooth decay: toothpaste, a mild alkali, neutralises acid from mouth bacteria. Stings: a bee sting is acidic and is traditionally treated with bicarbonate of soda or soap; a wasp sting is alkaline and is traditionally treated with vinegar." font-family="sans-serif">
  <rect x="6" y="6" width="230" height="138" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="244" y="6" width="230" height="138" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="6" y="152" width="230" height="138" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="244" y="152" width="230" height="138" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="18" y="27" font-size="13" font-weight="bold" fill="#1e293b">Indigestion</text>
  <text x="256" y="27" font-size="13" font-weight="bold" fill="#1e293b">Acidic soil</text>
  <text x="18" y="173" font-size="13" font-weight="bold" fill="#1e293b">Tooth decay</text>
  <text x="256" y="173" font-size="13" font-weight="bold" fill="#1e293b">Stings</text>
  <rect x="40" y="36" width="11" height="28" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
  <ellipse cx="74" cy="76" rx="40" ry="24" transform="rotate(-12 74 76)" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
  <text x="74" y="81" font-size="12" font-weight="bold" fill="#be123c" text-anchor="middle">acid</text>
  <path d="M154 76 H126 M128 70 L117 76 L128 82 Z" fill="#64748b" stroke="#64748b" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="180" cy="76" r="22" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
  <text x="180" y="81" font-size="12" font-weight="bold" fill="#4f46e5" text-anchor="middle">base</text>
  <text x="121" y="122" font-size="12" fill="#1e293b" text-anchor="middle">Antacid (a base) neutralises</text>
  <text x="121" y="137" font-size="12" fill="#1e293b" text-anchor="middle">extra stomach acid</text>
  <rect x="262" y="84" width="196" height="22" rx="4" fill="#92400e"/>
  <line x1="318" y1="84" x2="318" y2="52" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
  <path d="M318 68 Q300 66 296 52 Q312 52 318 68 Z M318 60 Q336 58 340 44 Q324 44 318 60 Z" fill="#22c55e"/>
  <path d="M373 80a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M383 77a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M393 80a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M403 77a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M413 80a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M423 77a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M433 80a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
  <text x="406" y="64" font-size="11" fill="#475569" text-anchor="middle">lime (a base)</text>
  <text x="359" y="122" font-size="12" fill="#1e293b" text-anchor="middle">Lime neutralises acidic soil</text>
  <text x="359" y="137" font-size="12" fill="#1e293b" text-anchor="middle">and lakes hit by acid rain</text>
  <path d="M42 206 C42 194 54 190 64 198 C74 190 86 194 86 206 C86 220 82 228 80 242 C79 250 72 251 70 242 L66 228 L62 242 C60 251 53 250 52 242 C50 228 42 220 42 206 Z" fill="#ffffff" stroke="#64748b" stroke-width="2" stroke-linejoin="round"/>
  <path d="M90 203a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M96 212a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M89 221a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#dc2626"/>
  <text x="102" y="196" font-size="11" font-weight="bold" fill="#dc2626">acid</text>
  <path d="M134 217 q-7 -7 -14 0 q-7 7 -14 0" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
  <rect x="134" y="210" width="12" height="14" rx="2" fill="#0284c7"/>
  <rect x="146" y="206" width="66" height="22" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="179" y="244" font-size="11" fill="#0369a1" text-anchor="middle">toothpaste</text>
  <text x="121" y="268" font-size="12" fill="#1e293b" text-anchor="middle">Toothpaste (a mild alkali)</text>
  <text x="121" y="283" font-size="12" fill="#1e293b" text-anchor="middle">neutralises acid from bacteria</text>
  <path d="M268.5 201 H262 M268.5 246 H262" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="282" cy="190" rx="9" ry="6" fill="#e0f2fe" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="286" cy="201" rx="18" ry="11" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
  <path d="M282 191 V211 M292 191.5 V210.5" stroke="#1e293b" stroke-width="4"/>
  <circle cx="306" cy="201" r="6" fill="#1e293b"/>
  <text x="320" y="197" font-size="12" font-weight="bold" fill="#b91c1c">Bee = acid</text>
  <text x="320" y="213" font-size="12" fill="#1e293b">→ bicarb or soap</text>
  <ellipse cx="282" cy="236" rx="9" ry="6" fill="#e0f2fe" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="286" cy="246" rx="18" ry="8" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
  <path d="M281 239 V253 M291 239 V253" stroke="#1e293b" stroke-width="4"/>
  <circle cx="306" cy="246" r="5.5" fill="#1e293b"/>
  <text x="320" y="242" font-size="12" font-weight="bold" fill="#1d4ed8">Wasp = alkali</text>
  <text x="320" y="258" font-size="12" fill="#1e293b">→ vinegar</text>
  <text x="359" y="283" font-size="11" font-style="italic" fill="#475569" text-anchor="middle">traditional remedies</text>
</svg>`,
    diagramCaption:
      "Four everyday neutralisations: antacids for indigestion, lime for acidic soil and lakes, toothpaste against mouth acid, and traditional sting remedies.",
    keyPoints: [
      "Antacids contain a base (e.g. magnesium hydroxide or calcium carbonate) that neutralises extra hydrochloric acid in the stomach.",
      "Farmers add lime (a base) to neutralise acidic soil; lime is also added to lakes damaged by acid rain.",
      "Toothpaste is a mild alkali: it neutralises acid made by bacteria in your mouth, helping to prevent tooth decay.",
      "Bee sting = acidic → treat with an alkali (bicarbonate of soda or soap). Wasp sting = alkaline → treat with a weak acid (vinegar).",
    ],
    whyItWorks:
      "Every example is the same reaction: a base cancels out an unwanted acid (or an acid cancels out an unwanted alkali), turning it into a salt and water, which are far less harmful.",
    memoryTrick:
      "Bee → Bicarb, Wasp → Vinegar. B goes with B, and V and W sit next to each other in the alphabet.",
    examTip:
      "Explain the chemistry, not just the remedy: say that the base neutralises the acid (or the acid neutralises the alkali). And don't swap the stings: a bee sting is acidic, so it needs an alkali; a wasp sting is alkaline, so it needs an acid.",
    thinkDeeper:
      "Sodium hydroxide neutralises acid very well, so why don't indigestion tablets contain it? List the properties a good antacid should have.",
  },

  // -------------------------------------------------------------- Lessons 7–8
  {
    id: "aa-investigation",
    topic: "aa",
    lesson: "Lessons 7–8 (Key Assessment O1)",
    heading: "Investigating indigestion remedies",
    discovery: {
      problem:
        "Three brands of indigestion tablet all claim to 'neutralise excess stomach acid'. How could you find out, fairly, which one neutralises acid best?",
      idea:
        "Make it a fair test. Change only one thing: the type of antacid. Measure one thing: how much antacid it takes to neutralise the same amount of acid. Keep everything else the same. Then repeat, record your results in a clear table and compare the means.",
    },
    body:
      "**The practical:** put **25 cm³ of dilute hydrochloric acid** (it stands in for stomach acid) in a beaker with a few drops of **universal indicator**, which turns it red. Add powdered antacid **a little at a time** (e.g. 0.1 g), stirring, until it turns **green**, and record the total mass added. *Or:* add acid **drop by drop** to a fixed mass of antacid and **count the drops** it neutralises.\n\n" +
      "**Variables:**\n\n" +
      "- **Independent** (what you change): the **type of antacid**\n" +
      "- **Dependent** (what you measure): the **mass of antacid needed** (or the number of drops of acid)\n" +
      "- **Control** (what you keep the same): volume and concentration of acid, amount of indicator, stirring, temperature\n\n" +
      "Your Key Assessment is about the **results table**. A good one has the **independent variable in the first column**, **units in the column headings** (never in the cells), columns for **repeat readings** and a **mean**, and every value to the **same number of decimal places**.\n\n" +
      "*Example: mass of antacid needed to neutralise 25 cm³ of acid.*\n\n" +
      "| Antacid | Test 1 (g) | Test 2 (g) | Test 3 (g) | Mean (g) |\n" +
      "|---|---|---|---|---|\n" +
      "| A | 1.4 | 1.6 | 1.5 | 1.5 |\n" +
      "| B | 2.2 | 2.4 | 2.3 | 2.3 |\n" +
      "| C | 0.8 | 1.9 | 1.0 | 0.9 |\n\n" +
      "**Anomalies:** 1.9 g for antacid C doesn't fit the pattern of its other repeats, so it is an **anomalous result**. **Leave it out** of the mean: (0.8 + 1.0) ÷ 2 = **0.9 g**.\n\n" +
      "**Conclusion:** say what you found and back it up with data. *Antacid C was the most effective: it needed the smallest mass (0.9 g) to neutralise the acid, compared with 1.5 g for A and 2.3 g for B.*",
    diagram: `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A results table. The first column lists antacids A, B and C. A heading reading mass of antacid needed in grams spans columns for test 1, test 2, test 3 and the mean. Antacid A: 1.4, 1.6, 1.5, mean 1.5. Antacid B: 2.2, 2.4, 2.3, mean 2.3. Antacid C: 0.8, 1.9, 1.0, mean 0.9. The 1.9 is circled as an anomaly and left out of the mean." font-family="sans-serif">
  <text x="440" y="20" font-size="12" font-weight="bold" fill="#7c3aed" text-anchor="end">Units go in the headings, not in the cells</text>
  <path d="M362 25 V40 M357 38 L362 47 L367 38 Z" fill="#7c3aed" stroke="#7c3aed" stroke-width="2" stroke-linejoin="round"/>
  <rect x="30" y="50" width="400" height="48" fill="#f1f5f9"/>
  <rect x="354" y="98" width="76" height="72" fill="#ecfdf5"/>
  <path d="M126 50 V170 M126 74 H430 M202 74 V170 M278 74 V170 M354 74 V170 M30 98 H430 M30 122 H430 M30 146 H430" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
  <rect x="30" y="50" width="400" height="120" fill="none" stroke="#475569" stroke-width="2"/>
  <text x="78" y="79" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Antacid</text>
  <text x="278" y="67" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Mass of antacid needed (g)</text>
  <text x="164" y="91" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Test 1</text>
  <text x="240" y="91" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Test 2</text>
  <text x="316" y="91" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Test 3</text>
  <text x="392" y="91" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Mean</text>
  <text x="78" y="114" font-size="12" fill="#1e293b" text-anchor="middle">A</text>
  <text x="164" y="114" font-size="12" fill="#1e293b" text-anchor="middle">1.4</text>
  <text x="240" y="114" font-size="12" fill="#1e293b" text-anchor="middle">1.6</text>
  <text x="316" y="114" font-size="12" fill="#1e293b" text-anchor="middle">1.5</text>
  <text x="392" y="114" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">1.5</text>
  <text x="78" y="138" font-size="12" fill="#1e293b" text-anchor="middle">B</text>
  <text x="164" y="138" font-size="12" fill="#1e293b" text-anchor="middle">2.2</text>
  <text x="240" y="138" font-size="12" fill="#1e293b" text-anchor="middle">2.4</text>
  <text x="316" y="138" font-size="12" fill="#1e293b" text-anchor="middle">2.3</text>
  <text x="392" y="138" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">2.3</text>
  <text x="78" y="162" font-size="12" fill="#1e293b" text-anchor="middle">C</text>
  <text x="164" y="162" font-size="12" fill="#1e293b" text-anchor="middle">0.8</text>
  <text x="240" y="162" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">1.9</text>
  <text x="316" y="162" font-size="12" fill="#1e293b" text-anchor="middle">1.0</text>
  <text x="392" y="162" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">0.9</text>
  <ellipse cx="240" cy="158" rx="22" ry="10" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M78 192 V182 M73 184 L78 175 L83 184 Z" fill="#4f46e5" stroke="#4f46e5" stroke-width="2" stroke-linejoin="round"/>
  <text x="78" y="206" font-size="11" font-weight="bold" fill="#4f46e5" text-anchor="middle">independent variable</text>
  <text x="78" y="220" font-size="11" fill="#4f46e5" text-anchor="middle">in the first column</text>
  <path d="M240 192 V182 M235 184 L240 175 L245 184 Z" fill="#dc2626" stroke="#dc2626" stroke-width="2" stroke-linejoin="round"/>
  <text x="240" y="206" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">anomaly: leave it</text>
  <text x="240" y="220" font-size="11" fill="#dc2626" text-anchor="middle">out of the mean</text>
  <path d="M392 192 V182 M387 184 L392 175 L397 184 Z" fill="#16a34a" stroke="#16a34a" stroke-width="2" stroke-linejoin="round"/>
  <text x="392" y="206" font-size="11" fill="#166534" text-anchor="middle">(0.8 + 1.0) ÷ 2</text>
  <text x="392" y="220" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">= 0.9</text>
  <text x="230" y="248" font-size="12" fill="#1e293b" text-anchor="middle">Every value has the same number of decimal places (1 d.p.)</text>
</svg>`,
    diagramCaption:
      "A well-drawn results table: independent variable in the first column, units in the headings, repeats plus a mean, everything to 1 decimal place, and the anomaly left out of the mean.",
    keyPoints: [
      "Independent variable = what you change (type of antacid). Dependent variable = what you measure (mass of antacid needed, or drops of acid). Control variables = what you keep the same.",
      "Results table: the independent variable goes in the first column; units go in the headings, not in the cells.",
      "Include repeat readings and a mean column, with every value to the same number of decimal places.",
      "Spot anomalous results and leave them out when you calculate the mean.",
      "A conclusion says what you found and uses numbers from your results as evidence.",
    ],
    whyItWorks:
      "Changing only one thing means any difference in the results must be caused by that change: that's what makes it a fair test. Repeats and a mean smooth out small random errors, and leaving out an anomaly stops one bad reading from dragging the mean away from the true value.",
    memoryTrick: "Independent = I change it. Dependent = the Data I collect. Control = kept Constant.",
    examTip:
      "Put units in the column headings, e.g. 'Mass (g)', never after each number in the cells, and put the independent variable in the first column. When you calculate a mean, leave out any anomaly and round to the same number of decimal places as your data.",
    thinkDeeper:
      "Antacid C needed the smallest mass to neutralise the acid. Explain why a smaller mass means a more effective antacid. Then suggest one thing this experiment does NOT tell you about which tablet is the best one to buy.",
  },
];
