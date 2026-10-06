import type { MCQ, QuestionSet } from "../types";

// Set 3 · Mixed mock A — Acids & Alkalis and Animal Nutrition interleaved, like the real test.
// Order: 7 warmup (q01–q07) → 12 core (q08–q19) → 6 challenge (q20–q25).

export const MCQ_SET_3: QuestionSet<MCQ> = {
  id: "mcq-3",
  title: "Set 3 · Mixed mock A",
  subtitle: "Both topics, interleaved — like the real test",
  topic: "mixed",
  questions: [
    // ─────────────────────────── WARMUP ───────────────────────────
    {
      id: "s3-q01",
      topic: "aa",
      section: "aa-everyday",
      difficulty: "warmup",
      question: "Vinegar tastes sour because it contains an acid. Which acid is it?",
      options: ["Citric acid", "Carbonic acid", "Ethanoic acid", "Ascorbic acid"],
      answerIndex: 2,
      optionFeedback: [
        "Citric acid is a sour kitchen acid too, which makes it tempting — but it's the acid in lemons and other citrus fruits, not in vinegar.",
        "Carbonic acid is another acid you can safely drink, but it's the one in fizzy drinks, not in vinegar.",
        "Vinegar contains ethanoic acid, which gives it its sharp, sour taste and smell.",
        "Ascorbic acid is a food acid too, but it's the chemical name for vitamin C, found in oranges — not the acid in vinegar.",
      ],
      explanation:
        "Your kitchen contains several weak acids that are safe to eat or drink: **vinegar – ethanoic acid**, lemons – **citric acid**, oranges (vitamin C) – **ascorbic acid** and fizzy drinks – **carbonic acid**. A sour taste is a clue that a food is acidic. Memory trick: vinegar is made when bacteria turn **ethan**ol (the liquid you use in the fat test) into **ethan**oic acid.",
      hints: [
        "Some acid names match their food: citric sounds like citrus, and carbonic sounds like carbonated (fizzy) drinks.",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "s3-q02",
      topic: "an",
      section: "an-nutrients",
      difficulty: "warmup",
      question: "Butter, ghee and nuts are rich in fats (lipids). What are the main jobs of fats in the body?",
      options: [
        "Growth and repair of the body",
        "Stored energy and insulation",
        "The main source of quick energy",
        "Strong bones and teeth",
      ],
      answerIndex: 1,
      optionFeedback: [
        "Nuts do contain protein, so this is tempting — but growth and repair is the job of protein (from foods like lentils, beans and paneer), not fats.",
        "Fats store energy for later, and a layer of fat under the skin acts as insulation, helping to keep you warm.",
        "Fats do contain lots of energy, which makes this tempting — but the body's main source of quick energy is carbohydrates such as bread, rice and pasta; fat is energy stored for later.",
        "Butter and ghee are made from milk, which is famous for strong bones — but that's thanks to the mineral calcium, not the fat.",
      ],
      explanation:
        "**Fats (lipids) are for stored energy and insulation** — for example, butter gives energy and helps keep the body warm. Spare energy is stored as fat, and a layer of fat under the skin works like a blanket, reducing heat loss. Compare the other nutrients: **carbohydrates** = energy for activity, **proteins** = growth and repair, **minerals** = healthy bones and teeth. Memory trick: fat is your body's **lunchbox and duvet** — energy saved for later, plus warmth.",
      hints: [
        "Think about the two ways a thick layer of fat helps animals that live in very cold places, like polar bears.",
      ],
      strategy: "Recall the keyword",
    },
    {
      id: "s3-q03",
      topic: "aa",
      section: "aa-hazards",
      difficulty: "warmup",
      question:
        "You are using dilute hydrochloric acid in the lab. Which precaution best reduces the risk of acid splashing into your eyes?",
      options: ["Wearing safety goggles", "Wearing a lab coat", "Wearing plastic gloves", "Tying long hair back"],
      answerIndex: 0,
      optionFeedback: [
        "Safety goggles cover your eyes, so any splashes hit the goggles instead of your eyes.",
        "A lab coat is a sensible precaution that protects your skin and clothes from spills, but it does nothing to shield your eyes.",
        "Gloves are useful because they protect your hands from acid, but a splash could still reach your unprotected eyes.",
        "Tying long hair back is a good lab rule, but it's mainly to keep hair away from Bunsen flames — it won't stop acid reaching your eyes.",
      ],
      explanation:
        "A **hazard** is something that could cause harm, the **risk** is the chance that it actually does, and a **precaution** is an action that reduces the risk. Acid can damage your eyes very quickly, so the best precaution is a barrier in front of them: **safety goggles (eye protection)**. This is the school's own example of a precaution — wearing eye protection when handling an acid to stop it splashing in your eyes.",
      hints: ["Which piece of safety equipment actually covers the part of your body you are trying to protect?"],
      strategy: "Eliminate wrong options",
    },
    {
      id: "s3-q04",
      topic: "an",
      section: "an-nutrients",
      difficulty: "warmup",
      question: "Milk and yoghurt are good sources of calcium. What type of nutrient is calcium, and what is it needed for?",
      options: [
        "A vitamin – for strong bones and teeth",
        "A protein – for growth and repair",
        "A mineral – for stored energy and warmth",
        "A mineral – for strong bones and teeth",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Strong bones and teeth is the right job, but calcium is a mineral, not a vitamin — vitamins have letter names, like vitamin C and vitamin D.",
        "Milk and yoghurt do contain protein, which makes this tempting — but calcium itself is a mineral, and its job is building strong bones and teeth.",
        "You've got the right nutrient type — calcium is a mineral — but stored energy and warmth (insulation) is the job of fats.",
        "Calcium is a mineral, and your body uses it to build and keep strong bones and teeth.",
      ],
      explanation:
        "**Calcium is a mineral.** Minerals are needed for healthy bones, eyes, hair and more — the school's example is that **calcium in milk keeps your bones and teeth strong**. Minerals are already small enough to be absorbed without being digested. A long-term lack of calcium (or vitamin D) can cause **rickets**, where the bones become soft and weak.",
      hints: ["Vitamins usually have letter names, such as vitamin C. Does calcium have a letter name?"],
      strategy: "Recall the keyword",
    },
    {
      id: "s3-q05",
      topic: "aa",
      section: "aa-neutralisation",
      difficulty: "warmup",
      question:
        "Sodium hydroxide solution is added a little at a time to hydrochloric acid with universal indicator in it. The indicator turns green. What does this tell you about the solution?",
      options: ["It is weakly acidic (pH 5)", "It is neutral (pH 7)", "It is neutral (pH 0)", "It is weakly alkaline (pH 9)"],
      answerIndex: 1,
      optionFeedback: [
        "You would see yellow (weakly acidic, about pH 5) just before the end, while a little acid is left — but green means all the acid has been neutralised.",
        "Green on universal indicator means pH 7, so the acid has been exactly neutralised by the alkali.",
        "It's easy to think 'zero means nothing, so pH 0 must be neutral', but pH 0 is the strongly acidic end of the scale (red) — neutral is in the middle, at pH 7.",
        "Sodium hydroxide is an alkali, so you might expect the mixture to end up alkaline — but pH 9 would turn the indicator blue, not green.",
      ],
      explanation:
        "In neutralisation, an acid reacts with an alkali to make a **salt and water**: hydrochloric acid + sodium hydroxide → sodium chloride + water. As the alkali is added, universal indicator changes **red → orange → yellow → green**, and **green means pH 7: neutral** — neither acidic nor alkaline. Adding more alkali after this would turn it blue (alkaline), which is why you add the alkali a little at a time.",
      hints: ["Where on the pH scale is green — at one end, or in the middle?"],
      strategy: "Use the pH scale",
    },
    {
      id: "s3-q06",
      topic: "an",
      section: "an-diet",
      difficulty: "warmup",
      question:
        "Arjun eats a big lunch of dal and rice, then plays football all afternoon in the hot sun without drinking anything. By evening he feels tired and has a headache. What is the most likely cause?",
      options: [
        "Dehydration – not enough water in his body",
        "Malnutrition – a poor diet over a long time",
        "Obesity – being very overweight",
        "Constipation – not enough fibre in his diet",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Arjun lost lots of water by sweating and didn't replace it, and tiredness and headaches are classic signs of dehydration.",
        "Malnutrition can make you feel weak and tired, but it comes from a poor diet over a long time — Arjun ate a good meal and only went without water for one afternoon.",
        "Obesity can make exercise feel harder, but it means being very overweight, which builds up over months or years — not in one afternoon without a drink.",
        "Constipation is linked to a lack of fibre, so it sounds diet-related — but it means faeces are hard to pass, and it doesn't fit an afternoon of sweating with nothing to drink.",
      ],
      explanation:
        "**Dehydration** means **not having enough water in the body**. You lose water all the time in sweat, urine and breath — and much faster when you exercise in the heat — so you must replace it by drinking. Signs include **feeling tired, getting a headache** and feeling thirsty. Water is one of the seven nutrient groups in a balanced diet, even though it provides no energy.",
      hints: ["What did Arjun's body lose a lot of while running in the hot sun — and did he replace it?"],
      strategy: "Apply it to a new situation",
    },
    {
      id: "s3-q07",
      topic: "an",
      section: "an-system",
      difficulty: "warmup",
      question: "Where in the digestive system are faeces stored before they leave the body?",
      options: ["Anus", "Large intestine", "Rectum", "Gall bladder"],
      answerIndex: 2,
      optionFeedback: [
        "The anus is right next to the rectum, so it's easy to mix them up — but the anus is the opening where faeces leave the body, not where they are stored.",
        "The large intestine absorbs water to make faeces solid, which makes it tempting — but the faeces then move on to be stored in the rectum.",
        "The rectum is the last part of the gut before the anus, and it stores faeces until you go to the toilet.",
        "The gall bladder does store something — bile made by the liver — but food and faeces never pass through it.",
      ],
      explanation:
        "The end of food's journey is: **large intestine** (water is absorbed, making faeces solid) → **rectum** (faeces are **stored**) → **anus** (faeces **leave** the body). Faeces are the undigested material, such as fibre, that couldn't be absorbed. Memory trick: the **R**ectum **R**etains; the **A**nus **A**llows it out.",
      hints: ["Think about the last few parts of food's journey. Which part holds faeces, and which part is just the way out?"],
      strategy: "Follow the food",
    },

    // ──────────────────────────── CORE ────────────────────────────
    {
      id: "s3-q08",
      topic: "aa",
      section: "aa-hazards",
      difficulty: "core",
      question: "The exclamation mark hazard symbol (irritant) is usually found on which bottles in the school lab?",
      options: [
        "More concentrated acids and alkalis",
        "Dilute acids only, never alkalis",
        "Very toxic substances, like poisons",
        "More dilute acids and alkalis",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Concentrated acids and alkalis are hazardous, so this is tempting — but because they're more dangerous, they usually carry the corrosive symbol instead.",
        "Dilute acids do often carry this symbol, but so do dilute alkalis — alkalis can be just as hazardous as acids.",
        "Toxic sounds like a health warning, but very toxic substances that can kill in small amounts carry the skull and crossbones symbol — the exclamation mark is for less serious effects.",
        "The exclamation mark warns of an irritant, and more dilute acids and alkalis can irritate your skin and eyes without being corrosive.",
      ],
      explanation:
        "The **exclamation mark** symbol means a substance **may cause less serious health effects**, such as irritating your skin or eyes. It is usually found on **more dilute acids and alkalis**, because they have fewer acid (or alkali) particles in the same volume. **More concentrated** acids and alkalis usually carry the **corrosive** symbol instead, because they can destroy skin, metals and stonework.",
      hints: [
        "Is the exclamation mark a warning for a more serious or a less serious hazard than the corrosive symbol?",
        "Which are less dangerous: dilute or concentrated solutions? And remember that alkalis can be hazardous too.",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "s3-q09",
      topic: "an",
      section: "an-nutrients",
      difficulty: "core",
      question: "Oranges are rich in vitamin C. How does vitamin C help your body?",
      options: [
        "It helps your immune system fight infections like colds",
        "It is your body's main source of energy for being active",
        "It provides the building blocks your body uses to make muscle",
        "It keeps faeces moving smoothly along the digestive system",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Vitamins are for healthy body maintenance, and vitamin C helps your immune system fight infections such as the common cold.",
        "Oranges taste sweet, so it's tempting to link them with energy — but that energy comes from their sugar (a carbohydrate); vitamins don't provide energy.",
        "Vitamins help you grow up healthy, so this sounds possible — but building muscle is the job of protein (from foods like lentils, beans and paneer), not vitamin C.",
        "Oranges do contain some fibre, which keeps faeces moving — but that's the job of fibre, not vitamin C.",
      ],
      explanation:
        "**Vitamins are needed for healthy body maintenance**; you only need tiny amounts and they provide no energy. **Vitamin C** (found in oranges, lemons and many other fruits and vegetables) helps your body **launch an immune response**, for example against the virus that causes the common cold. A long-term lack of vitamin C causes the deficiency disease **scurvy**. Link to Acids & Alkalis: vitamin C's chemical name is **ascorbic acid**.",
      hints: [
        "Which nutrient group is vitamin C in, and what is that whole group for?",
        "Think about why people are often told to eat fruit when they have a cold.",
      ],
      strategy: "Recall the keyword",
    },
    {
      id: "s3-q10",
      topic: "aa",
      section: "aa-indicators",
      difficulty: "core",
      question:
        "Some homemade red cabbage indicator is purple in pure water and pink in lemon juice. When it is added to solution X, it turns green-yellow. What can you conclude about solution X?",
      options: ["It is weakly acidic", "It is neutral", "It is alkaline", "It is more acidic than lemon juice"],
      answerIndex: 2,
      optionFeedback: [
        "On universal indicator, yellow means weakly acidic, which makes this tempting — but red cabbage has its own colour code, and it turns red or pink in acids.",
        "Green means neutral on universal indicator, but this indicator shows neutral as purple — just as it was in pure water.",
        "Red cabbage indicator turns green to yellow in alkalis, so solution X must be alkaline.",
        "A different colour might seem to mean a stronger acid, but a stronger acid would turn red cabbage indicator an even deeper red — not green-yellow.",
      ],
      explanation:
        "Every indicator has its own colour code, so you can't borrow the colours from universal indicator. **Red cabbage indicator is red/pink in acids, purple in neutral solutions and green to yellow in alkalis.** Pure water (neutral) gave purple and lemon juice (acid) gave pink, so a change to green-yellow means solution X is **alkaline**. Because it shows several colours, red cabbage can give a rough idea of how strong an acid or alkali is — something litmus can't do.",
      hints: [
        "Purple was the colour in pure water, and pink was the colour in lemon juice. What does each of those colours stand for?",
        "Careful: don't use universal indicator's colours here. Red cabbage has its own colour code.",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "s3-q11",
      topic: "an",
      section: "an-food-tests",
      difficulty: "core",
      question:
        "Four fruit juices are each heated with Benedict's solution in a hot water bath. Which final colour shows the juice with the MOST sugar?",
      options: ["Green", "Blue-black", "Orange", "Brick red"],
      answerIndex: 3,
      optionFeedback: [
        "Green is the first colour change from blue, so it does show sugar — but only a small amount.",
        "Blue-black is a dark, strong-looking colour, but it's the positive result for the iodine test for starch — Benedict's solution never turns blue-black.",
        "Orange shows quite a lot of sugar, so it's tempting — but there's one more colour after orange in the sequence, and it means even more sugar.",
        "Brick red is the last colour in the Benedict's sequence, so it shows the most sugar — like the school's apple juice example.",
      ],
      explanation:
        "Benedict's solution starts **blue**. When it is heated with sugar (such as glucose), it changes colour — and the more sugar there is, the further along the sequence it goes: **blue → green → yellow → orange → brick red**. So staying blue means no sugar, and **brick red means lots of sugar**. Memory trick: the colours 'warm up' from cool blue to red-hot brick red — the hotter the colour, the more sugar.",
      hints: [
        "Benedict's solution starts blue. Does the colour change more, or less, when there is more sugar?",
        "Put the colours in order: blue → green → yellow → … Which colour comes at the very end?",
      ],
      strategy: "Recall the keyword",
    },
    {
      id: "s3-q12",
      topic: "aa",
      section: "aa-ph",
      difficulty: "core",
      question:
        "A tube of toothpaste has a pH of 9. Which option correctly describes the toothpaste and the colour it turns universal indicator?",
      options: ["Weakly acidic – yellow", "Weakly alkaline – blue", "Weakly alkaline – green", "Strongly alkaline – purple"],
      answerIndex: 1,
      optionFeedback: [
        "If you think bigger numbers mean more acidic, this is tempting — but acids have a pH below 7, and 9 is above 7, so toothpaste is alkaline.",
        "pH 9 is a little above 7, so toothpaste is weakly alkaline, and universal indicator is blue at around pH 8–10.",
        "You're right that it's weakly alkaline, but green is the colour for exactly pH 7 (neutral) — at pH 9 the indicator turns blue.",
        "pH 9 is alkaline, but only weakly — purple is for the strongly alkaline end of the scale (around pH 11–14), like oven cleaner.",
      ],
      explanation:
        "On the pH scale, **below 7 is acidic, 7 is neutral and above 7 is alkaline** — and the further from 7, the stronger. pH 9 is a little above 7, so toothpaste is **weakly alkaline** and turns universal indicator **blue** (pH 8–10). This is useful: toothpaste neutralises acids made by bacteria in your mouth, which helps prevent tooth decay.",
      hints: [
        "Is 9 above or below 7 — and is it just past 7, or right at the end of the scale?",
        "Universal indicator goes red → orange → yellow → green → blue → purple as the pH rises from 0 to 14.",
      ],
      strategy: "Use the pH scale",
    },
    {
      id: "s3-q13",
      topic: "an",
      section: "an-system",
      difficulty: "core",
      question:
        "Digestion begins in the mouth, and it is both mechanical and chemical. Which of these is CHEMICAL digestion in the mouth?",
      options: [
        "Amylase in saliva breaking starch into sugar",
        "Teeth grinding food into smaller pieces",
        "Saliva wetting food so it is easier to swallow",
        "Protease in saliva breaking down protein",
      ],
      answerIndex: 0,
      optionFeedback: [
        "This is chemical digestion: the enzyme amylase changes large starch molecules into smaller sugar molecules (maltose).",
        "Chewing is real digestion in the mouth, but it's mechanical — teeth break food into smaller pieces without changing the molecules.",
        "Saliva does wet food to help you swallow, but just wetting food doesn't break any molecules down — only the enzyme in saliva does that.",
        "Protease does chemically digest protein, but the enzyme in saliva is amylase — protein digestion starts in the stomach.",
      ],
      explanation:
        "**Mechanical digestion** physically breaks food into smaller pieces — like teeth chewing or the stomach churning — but the molecules stay the same. **Chemical digestion** uses **enzymes** to break large molecules into smaller, different ones. In the mouth, **amylase in saliva breaks starch into sugar (maltose)**, and chewing helps by giving the enzyme a bigger surface area to work on. Memory trick: mechanical makes the pieces smaller; chemical changes the molecules.",
      hints: [
        "Mechanical digestion only makes pieces smaller. Chemical digestion makes new, smaller molecules — so it needs an enzyme.",
        "Which enzyme is found in saliva, and which food molecule does it work on?",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "s3-q14",
      topic: "aa",
      section: "aa-ph",
      difficulty: "core",
      question:
        "Soap, lemon juice, oven cleaner and pure water are tested with universal indicator. Which list puts them in order from MOST ACIDIC to MOST ALKALINE?",
      options: [
        "Oven cleaner, soap, pure water, lemon juice",
        "Pure water, lemon juice, soap, oven cleaner",
        "Lemon juice, pure water, oven cleaner, soap",
        "Lemon juice, pure water, soap, oven cleaner",
      ],
      answerIndex: 3,
      optionFeedback: [
        "This has the right order but backwards — it runs from most alkaline to most acidic. The lower the pH, the more acidic, so lemon juice (about pH 2) must come first.",
        "Water can seem like the 'starting point', but pure water is neutral (pH 7), so it belongs in the middle, between the acid and the alkalis.",
        "Soap and oven cleaner are both alkalis, so they're easy to swap — but soap is a mild alkali (about pH 10) and oven cleaner is a very strong one (about pH 13), so oven cleaner comes last.",
        "Lemon juice is acidic (about pH 2), pure water is neutral (pH 7), soap is a mild alkali (about pH 10) and oven cleaner is a very strong alkali (about pH 13).",
      ],
      explanation:
        "On the pH scale, **the lower the pH, the more acidic; the higher the pH, the more alkaline**, and **pH 7 is neutral**. Lemon juice contains citric acid (about pH 2), pure water is neutral (pH 7), soap is a mild alkali (about pH 10) and oven cleaner is a very strong, corrosive alkali (about pH 13). Tip: first sort the substances into acids, neutral and alkalis, then put each group in order of strength.",
      hints: [
        "First sort them into acid, neutral and alkali. Which one belongs in the middle of the scale?",
        "Two of them are alkalis. Which is the mild one you wash your hands with, and which is the very strong, corrosive one?",
      ],
      strategy: "Use the pH scale",
    },
    {
      id: "s3-q15",
      topic: "an",
      section: "an-bile",
      difficulty: "core",
      question: "What does the pancreas do to help digestion?",
      options: [
        "It makes bile, which emulsifies fats in the small intestine",
        "It digests food that passes through the pancreas",
        "It makes enzymes that are released into the small intestine",
        "It makes hydrochloric acid, which kills bacteria in our food",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Bile does go into the small intestine, which makes this tempting — but bile is made by the liver (and stored in the gall bladder), not by the pancreas.",
        "It's easy to imagine food going through every organ, but food never passes through the pancreas — like the liver and gall bladder, it sits beside the gut and adds substances to it.",
        "The pancreas makes digestive enzymes — carbohydrase, protease and lipase — and releases them into the small intestine.",
        "The stomach sits right next to the pancreas, and it's the stomach that makes hydrochloric acid to kill bacteria — the pancreas makes enzymes instead.",
      ],
      explanation:
        "The **pancreas** makes **enzymes** — biological catalysts that speed up digestion: **carbohydrase** (starch → sugars), **protease** (proteins → amino acids) and **lipase** (lipids → fatty acids and glycerol). The enzymes are **made in the pancreas and released into the small intestine**, where digestion is finished. Like the liver and gall bladder, the pancreas adds substances to the gut, but food never passes through it.",
      hints: [
        "Food doesn't actually pass through the pancreas. It makes something and sends it into the gut.",
        "Bile is made by the liver, and hydrochloric acid by the stomach. So what does the pancreas make?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "s3-q16",
      topic: "aa",
      section: "aa-salts",
      difficulty: "core",
      question:
        "Some indigestion tablets contain magnesium hydroxide, which neutralises hydrochloric acid in the stomach. Which salt is made?",
      options: ["Sodium chloride", "Magnesium chloride", "Magnesium hydrochloride", "Magnesium sulfate"],
      answerIndex: 1,
      optionFeedback: [
        "Sodium chloride is table salt, so it's tempting to think every salt is this — but there's no sodium in the reactants; the metal here is magnesium.",
        "The metal in the hydroxide gives the first word (magnesium), and hydrochloric acid always makes a chloride.",
        "It's tempting to copy the acid's name, but the 'hydro' part doesn't stay in the salt — the hydrogen from the acid ends up in the water, so the salt is just a chloride.",
        "Magnesium is the right first word, but sulfates come from sulfuric acid — hydrochloric acid makes chlorides.",
      ],
      explanation:
        "To name a salt, the **first word comes from the metal** in the hydroxide and the **second word comes from the acid**: hydrochloric → **chloride**, sulfuric → **sulfate**, nitric → **nitrate**. So **magnesium hydroxide + hydrochloric acid → magnesium chloride + water**. This is how antacids ease indigestion: the base neutralises excess acid in the stomach.",
      hints: [
        "A salt's name has two parts: the first comes from the metal, the second from the acid.",
        "Which metal is in the reactants, and which ending do salts made from hydrochloric acid have?",
      ],
      strategy: "Name the salt (metal first, acid second)",
    },
    {
      id: "s3-q17",
      topic: "an",
      section: "an-food-tests",
      difficulty: "core",
      question:
        "In the Benedict's test, the test tube is heated in a hot water bath rather than directly in a Bunsen burner flame. Why?",
      options: [
        "Gentle, even heating makes hot liquid less likely to spit out",
        "Benedict's solution is flammable, so it could catch fire in a flame",
        "A water bath can heat the test tube to a higher temperature",
        "Direct heat from a flame would destroy the sugar in the food",
      ],
      answerIndex: 0,
      optionFeedback: [
        "Heating a test tube directly in a flame can make the liquid boil suddenly and spit out, but a water bath heats it gently and evenly, which is much safer.",
        "You may be thinking of the fat test, where ethanol is flammable and must be kept away from flames — Benedict's solution is mostly water and doesn't burn.",
        "It's the other way round: a Bunsen flame is far hotter than a water bath, which can't go above 100 °C — the point is gentler heating, not more heat.",
        "It's sensible to worry that strong heat might damage what you're testing for, but the sugar isn't destroyed — the problem with a flame is hot liquid spitting out.",
      ],
      explanation:
        "Benedict's solution must be **heated** for the colour change to happen. Heating a test tube **directly in a flame** heats the bottom very quickly, so the liquid can suddenly boil and **spit out** of the tube — a hazard to you and the people around you. A **hot water bath** heats the tube **gently and evenly** (it can't go above 100 °C), so the test is much **safer**. You should still wear eye protection and point the tube away from people.",
      hints: [
        "Think about what can happen when a small amount of liquid is heated very strongly in a narrow test tube.",
        "A water bath can never get hotter than about 100 °C. Is the reason about getting a result, or about staying safe?",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "s3-q18",
      topic: "aa",
      section: "aa-uses",
      difficulty: "core",
      question: "A bee sting is acidic. Which household substance is traditionally used to neutralise it?",
      options: ["Vinegar", "Lemon juice", "Cold water", "Bicarbonate of soda"],
      answerIndex: 3,
      optionFeedback: [
        "Vinegar is a well-known sting remedy, but it's used for wasp stings, which are alkaline — vinegar is an acid, so it can't neutralise an acidic bee sting.",
        "Lemon juice might seem soothing and natural, but it contains citric acid — adding more acid to an acidic sting won't neutralise it.",
        "Rinsing with water seems sensible, but water only dilutes the acid — the pH moves closer to 7 but stays acidic. To neutralise it you need an alkali.",
        "Bicarbonate of soda (baking soda) is a mild alkali, so it can neutralise the acid in a bee sting.",
      ],
      explanation:
        "To neutralise an **acid** you need an **alkali** (or another base): acid + alkali → salt + water. Bee stings are **acidic**, so they are traditionally treated with a mild alkali such as **bicarbonate of soda** (baking soda) or soap. Wasp stings are the opposite — alkaline — so they're treated with a weak acid such as vinegar. Memory trick: **B**ee → **B**icarbonate (both start with B).",
      hints: [
        "To neutralise an acid, what type of substance do you need to add?",
        "Which of these is an alkali, and which are acids or neutral?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "s3-q19",
      topic: "an",
      section: "an-diet",
      difficulty: "core",
      question: "Which of these best describes a balanced diet?",
      options: [
        "Equal amounts of each of the nutrient groups, including fibre and water",
        "Lots of fruit and vegetables, but no fats or sugary foods at all",
        "Every nutrient group, including fibre and water, in the right amounts",
        "Enough carbohydrate, protein and fat to give you the energy you need",
      ],
      answerIndex: 2,
      optionFeedback: [
        "'Balanced' sounds like 'equal', but you need far more of some nutrients (like carbohydrate and water) than others (like vitamins) — it means the right amounts, not equal amounts.",
        "Fruit and vegetables are great, but your body also needs some fat for stored energy and insulation — cutting out a whole nutrient group isn't balanced.",
        "A balanced diet has every nutrient group — carbohydrates, proteins, fats, vitamins, minerals, fibre and water — in the right amounts for your body.",
        "Energy matters, but a diet planned only around carbohydrate, protein and fat would miss vitamins, minerals, fibre and water — so it wouldn't be balanced.",
      ],
      explanation:
        "A **balanced diet** contains **all seven nutrient groups — carbohydrates, proteins, fats, vitamins, minerals, fibre and water — in the right amounts**. 'Right amounts' doesn't mean equal amounts: you need lots of carbohydrate and water but only tiny amounts of vitamins and minerals, and the amounts depend on your age, size and how active you are. Too little of a nutrient can lead to **malnutrition** or a **deficiency disease**, while regularly eating more energy than you use can lead to **obesity**.",
      hints: [
        "Fibre and water don't give you any energy — but do they still belong in a healthy diet?",
        "Does 'balanced' mean equal amounts of everything, or the amounts your body needs?",
      ],
      strategy: "Eliminate wrong options",
    },

    // ───────────────────────── CHALLENGE ──────────────────────────
    {
      id: "s3-q20",
      topic: "aa",
      section: "aa-neutralisation",
      difficulty: "challenge",
      question:
        "Copper oxide neutralises sulfuric acid, making copper sulfate and water. So why is copper oxide NOT called an alkali?",
      options: [
        "Only metal hydroxides can be alkalis, not metal oxides",
        "It is a base, but it does not dissolve in water",
        "It dissolves in water, and alkalis are insoluble bases",
        "It is too weak a base — alkalis are the strong bases",
      ],
      answerIndex: 1,
      optionFeedback: [
        "It's easy to think this because the lab alkalis are sodium and potassium hydroxide — but the rule is about dissolving: any base that dissolves in water is an alkali.",
        "Copper oxide neutralises acids, so it is a base — but it is insoluble, and an alkali is a base that dissolves in water.",
        "Solubility is the right idea, which makes this tempting — but it's the wrong way round: alkalis are the bases that DO dissolve in water, and copper oxide doesn't.",
        "Some people think a base is just a weak alkali, but strength isn't the difference — copper oxide neutralises acid perfectly well. What makes an alkali special is that it dissolves in water.",
      ],
      explanation:
        "A **base** is a substance that reacts with an acid to neutralise it and make a salt — metal **oxides, hydroxides and carbonates** are all bases. An **alkali is a base that dissolves in water** (a soluble base), such as sodium hydroxide. Copper oxide neutralises acids (copper oxide + sulfuric acid → copper sulfate + water), so it is a base, but it **does not dissolve** in water, so it is **not an alkali**. Memory trick: **all alkalis are bases, but not all bases are alkalis**.",
      hints: [
        "Copper oxide neutralises acids. What is the general name for any substance that does that?",
        "Recall the school's definition: an alkali is a special kind of base. What makes it special?",
        "Think about what happens if you stir copper oxide powder into water and leave it to settle.",
      ],
      strategy: "Compare and contrast",
    },
    {
      id: "s3-q21",
      topic: "an",
      section: "an-enzymes",
      difficulty: "challenge",
      question:
        "If you chew a piece of plain bread for a long time without swallowing, it starts to taste sweet. Why?",
      options: [
        "Protease in saliva breaks protein down into sugar",
        "Chewing alone breaks the starch molecules into sugar",
        "Starch dissolves in saliva, and dissolved starch tastes sweet",
        "Amylase in saliva breaks starch down into sugar",
      ],
      answerIndex: 3,
      optionFeedback: [
        "Protease is a digestive enzyme, so this sounds scientific — but the enzyme in saliva is amylase, and protease makes amino acids, not sugar.",
        "Chewing does help digestion, but it's mechanical — it breaks bread into smaller pieces, not molecules into sugar. That needs an enzyme.",
        "Dissolving sounds like digesting, but starch is insoluble and doesn't taste sweet — it has to be broken down into small, soluble sugar molecules first.",
        "Saliva contains amylase, which breaks the starch in bread into a sugar called maltose — the longer you chew, the more sugar is made.",
      ],
      explanation:
        "Bread is mostly **starch** — a large, insoluble carbohydrate that doesn't taste sweet. Saliva contains the enzyme **amylase** (a carbohydrase), which breaks starch down into a small, soluble sugar called **maltose**; this is **chemical digestion**, and it begins in the mouth. The longer you chew, the more time amylase has to work, so more sugar is made and the bread tastes sweeter. Enzymes aren't used up, so a little amylase can break down a lot of starch.",
      hints: [
        "What is the main nutrient in bread? Does it taste sweet on its own?",
        "Something in saliva can change one kind of molecule into another. What is it?",
        "Saliva contains a carbohydrase. Which carbohydrate does it work on, and what does it make?",
      ],
      strategy: "Apply it to a new situation",
    },
    {
      id: "s3-q22",
      topic: "aa",
      section: "aa-uses",
      difficulty: "challenge",
      question: "Wasp stings are alkaline. Which substance would traditionally be used to neutralise a wasp sting, and why?",
      options: [
        "Vinegar, because it is a weak acid",
        "Bicarbonate of soda, because it neutralises stings",
        "Vinegar, because it is a weak alkali",
        "Soap, because it is a mild alkali",
      ],
      answerIndex: 0,
      optionFeedback: [
        "An alkaline sting needs an acid to neutralise it, and vinegar contains ethanoic acid, which is a weak acid.",
        "Bicarbonate of soda is the famous sting remedy, but it's an alkali, so it works on acidic bee stings — adding an alkali to an alkaline wasp sting won't neutralise it.",
        "Vinegar is the right choice, but for the wrong reason — vinegar contains ethanoic acid, so it's a weak acid, not an alkali.",
        "Soap is traditionally used on acidic bee stings because it's a mild alkali — but a wasp sting is already alkaline, so soap can't neutralise it.",
      ],
      explanation:
        "Neutralisation needs **opposites**: an acid neutralises an alkali, and an alkali neutralises an acid. A **wasp sting is alkaline**, so it is traditionally treated with a **weak acid such as vinegar** (ethanoic acid). A **bee sting is acidic**, so that's the one treated with an alkali such as bicarbonate of soda or soap. Memory trick: **W**asp → **V**inegar — a W is just two Vs joined together!",
      hints: [
        "If something is alkaline, what type of substance would neutralise it?",
        "Check each reason carefully: is the substance named really an acid or an alkali?",
        "Bicarbonate of soda and soap are both alkalis. Look for the option that names an acid and describes it correctly.",
      ],
      strategy: "Eliminate wrong options",
    },
    {
      id: "s3-q23",
      topic: "an",
      section: "an-bile",
      difficulty: "challenge",
      question: "Bile is not an enzyme, yet it helps fats to be digested faster in the small intestine. How does it do this?",
      options: [
        "It chemically breaks fat molecules down into fatty acids and glycerol",
        "It dissolves the fat so it can be absorbed without being digested",
        "It splits fat into tiny droplets, giving lipase a bigger surface area",
        "It makes the small intestine acidic, so that lipase can work faster",
      ],
      answerIndex: 2,
      optionFeedback: [
        "Fatty acids and glycerol are the right products of fat digestion, which makes this tempting — but that's lipase's job; bile isn't an enzyme, so it breaks fat UP into droplets, not DOWN into molecules.",
        "Bile does help with fats, so this sounds possible — but it doesn't dissolve fat, and fat can't be absorbed until lipase has digested it into fatty acids and glycerol.",
        "Bile emulsifies fat, breaking big droplets up into lots of tiny ones, which gives lipase a much bigger surface area to work on, so digestion is faster.",
        "Stomach acid helps protease, so it's tempting to think acid helps lipase too — but bile is alkaline and neutralises the stomach acid entering the small intestine.",
      ],
      explanation:
        "Bile is made in the **liver**, stored in the **gall bladder** and released into the **small intestine**. It **emulsifies** fat: it breaks big fat droplets **up** (not down) into lots of tiny droplets, a bit like washing-up liquid on a greasy pan. Tiny droplets have a much **bigger total surface area**, so **lipase** can work on more fat at once and digest it into **fatty acids and glycerol** faster. Remember: bile changes the size of the droplets, not the fat molecules themselves.",
      hints: [
        "Bile can't break molecules apart, because it isn't an enzyme. What else could it do to a big blob of fat?",
        "Think of washing-up liquid on a greasy pan. What does it do to big blobs of grease?",
        "Lipase can only work on the outside surface of a fat droplet. Would one big drop, or lots of tiny ones, give it more surface to work on?",
      ],
      strategy: "Think about particles",
    },
    {
      id: "s3-q24",
      topic: "aa",
      section: "aa-investigation",
      difficulty: "challenge",
      question:
        "A group added dilute hydrochloric acid, drop by drop, to one crushed antacid tablet until the universal indicator turned green. They did this four times. What is the mean number of drops, ignoring the anomalous result?",
      table: {
        caption: "Drops of acid needed to neutralise one antacid tablet",
        headers: ["Trial", "Number of drops of acid"],
        rows: [
          ["1", "12"],
          ["2", "13"],
          ["3", "21"],
          ["4", "14"],
        ],
      },
      options: ["15 drops", "13 drops", "20 drops", "9.75 drops"],
      answerIndex: 1,
      optionFeedback: [
        "Adding all four results and dividing by 4 is the usual way to find a mean, but Trial 3 is anomalous and must be left out — it drags the mean up to 15.",
        "Trial 3 (21 drops) is anomalous, so the mean of the other three is (12 + 13 + 14) ÷ 3 = 39 ÷ 3 = 13 drops.",
        "You divided by 3, but you still included the anomalous 21 in the total (60 ÷ 3 = 20) — leave it out of the total as well: 39 ÷ 3 = 13.",
        "You were right to leave out the 21, but you then need to divide by 3 (the number of results you added), not by 4: 39 ÷ 3 = 13.",
      ],
      explanation:
        "An **anomalous result** doesn't fit the pattern of the others: Trial 3 (21 drops) is far higher than 12, 13 and 14, probably because of a mistake such as miscounting the drops. To calculate the **mean**, leave out the anomaly, **add up the remaining results and divide by how many you added**: (12 + 13 + 14) ÷ 3 = **13 drops**. Doing repeats helps you spot anomalies and makes your mean more reliable.",
      hints: [
        "Look for the result that doesn't fit the pattern of the others.",
        "Leave that result out completely — from the total AND from the number you divide by.",
        "Add up the three remaining results, then divide by 3.",
      ],
      strategy: "Read the data carefully",
    },
    {
      id: "s3-q25",
      topic: "an",
      section: "an-absorption",
      difficulty: "challenge",
      question:
        "The walls of the villi, and of the capillaries inside them, are only one cell thick. Why does this help the small intestine absorb digested food?",
      options: [
        "It gives the small intestine a much bigger surface area",
        "It lets large molecules like starch pass straight into the blood",
        "It gives the villi a much better blood supply to carry food away",
        "Digested food only has a short distance to travel into the blood",
      ],
      answerIndex: 3,
      optionFeedback: [
        "A big surface area is a key adaptation, which makes this tempting — but it comes from the huge number of finger-like villi, not from their walls being thin.",
        "Thin walls sound easy to get through, but they don't let large, insoluble molecules like starch through — only small, soluble molecules such as glucose are absorbed, which is why food must be digested first.",
        "A good blood supply is another adaptation, but it comes from having lots of capillaries — thin walls are about distance, not the amount of blood.",
        "Walls one cell thick mean digested food molecules only have a very short distance to travel to reach the blood, so they are absorbed quickly.",
      ],
      explanation:
        "The small intestine has three adaptations for **absorbing digested food into the blood** quickly: **villi** give a very large **surface area**, walls **one cell thick** give a **short distance** for molecules to travel, and **lots of capillaries** give a **good blood supply** to carry the food away. Each feature has its own reason, so in a test always match the feature to the right reason. Memory trick: the **three S's** — big **S**urface area, **S**hort distance, good blood **S**upply.",
      hints: [
        "Picture a glucose molecule moving from inside the small intestine into the blood. What is it travelling through?",
        "Would a molecule get into the blood faster through a thick wall or a thin wall — and why?",
        "Surface area comes from the number and shape of the villi, and blood supply from the many capillaries. So thin walls must be about something else.",
      ],
      strategy: "Think about particles",
    },
  ],
};
