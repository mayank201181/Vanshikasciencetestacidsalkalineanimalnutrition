"use client";

import { PhScale } from "@/components/Figures";

function Box({ title, children, tone = "slate" }: { title: string; children: React.ReactNode; tone?: "rose" | "emerald" | "slate" | "amber" }) {
  const cls = {
    rose: "border-rose-200 bg-rose-50/50",
    emerald: "border-emerald-200 bg-emerald-50/50",
    slate: "border-slate-200 bg-white",
    amber: "border-amber-300 bg-amber-50",
  }[tone];
  return (
    <section className={`break-inside-avoid rounded-2xl border p-4 ${cls}`}>
      <h3 className="mb-2 font-extrabold text-slate-900">{title}</h3>
      <div className="space-y-1.5 text-sm leading-relaxed text-slate-800">{children}</div>
    </section>
  );
}

function T({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="border border-slate-300 bg-slate-100 px-2 py-1 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className="border border-slate-300 bg-white px-2 py-1 align-top">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CramPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">⚡ Cram sheet</h1>
          <p className="text-slate-600">Everything that matters on one page — read it Thursday morning.</p>
        </div>
        <button onClick={() => window.print()} className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 print:hidden">
          🖨️ Print
        </button>
      </div>

      <h2 className="text-xl font-extrabold text-rose-700">🧪 Acids &amp; Alkalis</h2>
      <div className="diagram rounded-2xl border border-slate-200 bg-white p-2">
        <PhScale />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Box title="pH & indicators" tone="rose">
          <p><strong>Below 7 = acid · 7 = neutral · above 7 = alkali.</strong> Lower pH = more acidic; higher pH = more alkaline.</p>
          <p><strong>Litmus:</strong> blue → <strong>red</strong> in acid; red → <strong>blue</strong> in alkali; neutral: neither changes. Litmus can&apos;t show <em>how</em> acidic.</p>
          <p><strong>Universal indicator:</strong> red (strong acid) → orange/yellow (weak acid) → green (neutral) → blue (weak alkali) → purple (strong alkali). Gives a pH number.</p>
          <p><strong>Red cabbage indicator:</strong> chop, soak in hot water, filter. Red/pink in acid, purple neutral, green/yellow in alkali.</p>
          <p><strong>Diluting</strong> an acid → pH rises towards 7 but never above 7.</p>
        </Box>
        <Box title="Acids, alkalis & bases" tone="rose">
          <p><strong>Kitchen acids:</strong> citric (lemons), ascorbic (vitamin C, oranges), ethanoic (vinegar), carbonic (fizzy drinks).</p>
          <p><strong>Lab acids:</strong> hydrochloric (HCl), sulfuric (H₂SO₄), nitric (HNO₃).</p>
          <p><strong>Alkalis:</strong> sodium hydroxide, potassium hydroxide, calcium hydroxide; soap, toothpaste, bleach, oven cleaner &amp; caustic soda (most dangerous).</p>
          <p><strong>Base</strong> = neutralises an acid (metal oxides, hydroxides, carbonates). <strong>Alkali = a SOLUBLE base.</strong></p>
        </Box>
        <Box title="Safety" tone="rose">
          <p><strong>Hazard</strong> = could cause harm · <strong>Risk</strong> = the chance it will · <strong>Precaution</strong> = action that reduces the risk (goggles!).</p>
          <p><strong>Concentrated</strong> → corrosive symbol (destroys skin, metal). <strong>Dilute</strong> → often irritant (exclamation mark).</p>
          <p>Dilute = <strong>fewer acid particles in the same volume</strong> → less dangerous.</p>
        </Box>
        <Box title="Neutralisation & salts" tone="rose">
          <p><strong>acid + alkali → salt + water</strong> (a chemical reaction: new substances).</p>
          <p>Make a neutral solution: indicator in the acid, add alkali bit by bit (stir) until <strong>green</strong>. Get the salt: <strong>evaporate the water</strong> (evaporating basin).</p>
          <T head={["Acid", "Salt ending"]} rows={[["hydrochloric", "…chloride"], ["sulfuric", "…sulfate"], ["nitric", "…nitrate"]]} />
          <p>First name = the metal: <em>potassium hydroxide + sulfuric acid → potassium sulfate + water</em>. Reactants on the left, products on the right.</p>
        </Box>
        <Box title="Everyday neutralisation" tone="rose">
          <p><strong>Indigestion:</strong> too much hydrochloric acid in the stomach → antacid (a base, e.g. magnesium hydroxide) neutralises it.</p>
          <p><strong>Farming:</strong> lime (calcium hydroxide) neutralises acidic soil. Lime is also added to lakes hit by acid rain.</p>
          <p><strong>Toothpaste</strong> (alkaline) neutralises acid from mouth bacteria.</p>
          <p><strong>Bee</strong> sting = acid → <strong>b</strong>icarbonate of soda. <strong>Wasp</strong> sting = alkali → <strong>v</strong>inegar.</p>
        </Box>
        <Box title="Investigating indigestion (results tables)" tone="rose">
          <p><strong>Independent</strong> = what you change (type of antacid). <strong>Dependent</strong> = what you measure (acid neutralised). <strong>Control</strong> = keep the same (volume &amp; concentration of acid, mass of antacid, same indicator).</p>
          <p>Table: independent variable in the <strong>first column</strong>; <strong>units in the headings</strong>, not in the cells; repeats + a <strong>mean</strong> column.</p>
          <p>Mean: <strong>leave out the anomaly</strong>, add the rest, divide by how many you used.</p>
        </Box>
      </div>

      <h2 className="pt-2 text-xl font-extrabold text-emerald-700">🍎 Animal Nutrition</h2>
      <div className="grid gap-3 md:grid-cols-2">
        <Box title="The seven nutrients" tone="emerald">
          <T
            head={["Nutrient", "Job"]}
            rows={[
              ["Carbohydrates", "energy"],
              ["Proteins", "growth and repair"],
              ["Fats (lipids)", "stored energy + insulation"],
              ["Vitamins", "healthy body maintenance (vit C → immune system)"],
              ["Minerals", "e.g. calcium → strong bones & teeth"],
              ["Fibre", "keeps food/faeces moving (not digested)"],
              ["Water", "needed for all body reactions"],
            ]}
          />
          <p><strong>Malnutrition</strong> = poor/unbalanced diet (too little OR too much). <strong>Obesity</strong> = more energy in than used → stored as fat. <strong>Dehydration</strong> = not enough water (tired, headache).</p>
        </Box>
        <Box title="Food tests" tone="emerald">
          <T
            head={["For", "Add", "Positive result"]}
            rows={[
              ["Starch", "iodine", "orange-brown → blue-black"],
              ["Sugar", "Benedict's + HEAT (water bath)", "blue → green → yellow → orange → brick red"],
              ["Protein", "biuret", "blue → purple / lilac"],
              ["Fat", "ethanol, then water", "milky white emulsion"],
            ]}
          />
        </Box>
        <Box title="The journey of food" tone="emerald">
          <p><strong>Mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus.</strong> Food does NOT pass through the liver or pancreas.</p>
          <p><strong>Mouth:</strong> teeth (mechanical) + amylase in saliva (chemical). <strong>Oesophagus:</strong> muscles push food down. <strong>Stomach:</strong> churns; hydrochloric acid kills bacteria + right conditions for protease.</p>
          <p><strong>Small intestine:</strong> digestion finishes; food absorbed into the blood. <strong>Large intestine:</strong> absorbs water. <strong>Rectum:</strong> stores faeces. <strong>Anus:</strong> faeces leave.</p>
        </Box>
        <Box title="Enzymes" tone="emerald">
          <T
            head={["Food", "Enzyme", "Broken into", "Where"]}
            rows={[
              ["Starch", "carbohydrase (amylase)", "glucose (sugars)", "mouth + small intestine"],
              ["Protein", "protease", "amino acids", "stomach + small intestine"],
              ["Fat (lipid)", "lipase", "fatty acids + glycerol", "small intestine"],
            ]}
          />
          <p>Enzymes = proteins that <strong>speed up</strong> reactions; not alive; not used up. Made in the <strong>pancreas</strong> → released into the small intestine. Each enzyme fits one type of molecule (lock and key).</p>
        </Box>
        <Box title="Bile & absorption" tone="emerald">
          <p><strong>Bile:</strong> made in the liver, stored in the gall bladder. <strong>Emulsifies</strong> fat (big droplets → small droplets = bigger surface area for lipase). Breaks fat UP, not DOWN — <strong>not an enzyme</strong>. Alkaline: neutralises stomach acid.</p>
          <p><strong>Small intestine adaptations:</strong> villi → huge surface area · walls one cell thick → short distance · lots of capillaries → good blood supply.</p>
          <p>Vitamins, minerals and water are absorbed <strong>without</strong> being digested. Fibre <strong>can&apos;t</strong> be digested.</p>
        </Box>
      </div>

      <Box title="🚨 Top 10 traps that lose marks" tone="amber">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Red litmus does NOT turn red in acid — it stays red. Blue litmus turns red in acid.</li>
          <li>Nitric acid → nitr<strong>ate</strong> (not nitride); sulfuric → sulf<strong>ate</strong>; hydrochloric → chlor<strong>ide</strong>.</li>
          <li>Diluting an acid makes the pH go UP towards 7 — it never becomes alkaline.</li>
          <li>Bile is not an enzyme: it emulsifies (breaks UP); lipase digests (breaks DOWN).</li>
          <li>Food never passes through the liver or pancreas.</li>
          <li>Units belong in the column heading, e.g. “Volume of acid (cm³)”.</li>
          <li>Leave out the anomalous result before working out a mean.</li>
          <li>Fibre isn&apos;t digested and doesn&apos;t give energy — it keeps food moving.</li>
          <li>Starch digestion starts in the mouth; protein in the stomach; fat in the small intestine.</li>
          <li>Small intestine absorbs digested food; large intestine absorbs water.</li>
        </ol>
      </Box>
    </div>
  );
}
