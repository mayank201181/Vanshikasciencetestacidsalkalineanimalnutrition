"use client";

import { useMemo, useState } from "react";
import { DigestiveSystem, PH_COLORS, PhScale, phTextColor, type Organ } from "./Figures";
import { normalise } from "@/lib/grade";

function Frame({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
      <p className="mt-1 text-slate-600">{intro}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Btn({ onClick, children, tone = "indigo", disabled }: { onClick: () => void; children: React.ReactNode; tone?: "indigo" | "slate" | "emerald" | "rose"; disabled?: boolean }) {
  const cls = {
    indigo: "bg-indigo-600 text-white hover:bg-indigo-700",
    slate: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    emerald: "bg-emerald-600 text-white hover:bg-emerald-700",
    rose: "bg-rose-600 text-white hover:bg-rose-700",
  }[tone];
  return (
    <button onClick={onClick} disabled={disabled} className={`rounded-xl px-3.5 py-2 text-sm font-bold transition disabled:opacity-40 ${cls}`}>
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// 1) pH explorer

const PH_EXAMPLES = [
  "battery acid", "stomach acid", "lemon juice", "vinegar", "tomato juice", "black coffee", "rain water",
  "pure water", "baking soda solution", "toothpaste", "soap", "ammonia cleaner", "bleach", "oven cleaner", "drain cleaner (caustic soda)",
];

function phBand(ph: number) {
  if (ph <= 2) return { name: "strongly acidic", colour: "red" };
  if (ph <= 4) return { name: "weakly acidic", colour: "orange" };
  if (ph <= 6) return { name: "weakly acidic", colour: "yellow" };
  if (ph === 7) return { name: "neutral", colour: "green" };
  if (ph <= 10) return { name: "weakly alkaline", colour: "blue" };
  return { name: "strongly alkaline", colour: "dark blue / purple" };
}

export function PhExplorer() {
  const [ph, setPh] = useState(2);
  const [log, setLog] = useState<string | null>(null);
  const band = phBand(ph);
  const blueLitmus = ph < 7 ? "#dc2626" : "#2563eb";
  const redLitmus = ph > 7 ? "#2563eb" : "#dc2626";
  function dilute() {
    if (ph === 7) {
      setLog("It's already neutral — adding water keeps it at pH 7.");
      return;
    }
    const next = ph < 7 ? ph + 1 : ph - 1;
    setLog(
      next === 7
        ? "After LOTS of water it gets very close to 7 — but an acid never goes above 7 (or an alkali below 7) just by diluting."
        : `Diluting moves the pH towards 7 (${ph} → ${next}): fewer acid/alkali particles in the same volume.`,
    );
    setPh(next);
  }
  return (
    <Frame title="🌈 pH explorer" intro="Slide through the pH scale. Watch the universal indicator colour and both litmus papers — then try diluting.">
      <input type="range" min={0} max={14} value={ph} onChange={(e) => { setPh(Number(e.target.value)); setLog(null); }} className="w-full accent-indigo-600" aria-label="pH" />
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <div className="grid h-24 w-24 place-items-center rounded-2xl text-4xl font-extrabold shadow-inner" style={{ background: PH_COLORS[ph], color: phTextColor(ph) }}>
          {ph}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-extrabold text-slate-900">pH {ph}: {band.name}</p>
          <p className="text-slate-600">Universal indicator: <strong>{band.colour}</strong></p>
          <p className="text-slate-600">For example: <strong>{PH_EXAMPLES[ph]}</strong></p>
        </div>
        <div className="flex gap-3">
          {[
            ["blue litmus", blueLitmus, ph < 7 ? "turns red" : "stays blue"],
            ["red litmus", redLitmus, ph > 7 ? "turns blue" : "stays red"],
          ].map(([name, colour, txt]) => (
            <div key={name} className="text-center">
              <div className="mx-auto h-16 w-6 rounded-sm border border-slate-300" style={{ background: `linear-gradient(${colour} 55%, ${name === "blue litmus" ? "#2563eb" : "#dc2626"} 55%)` }} />
              <p className="mt-1 text-xs font-semibold text-slate-700">{name}</p>
              <p className="text-xs text-slate-500">{txt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="diagram mt-4">
        <PhScale marker={ph} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Btn onClick={dilute}>💧 Dilute with water</Btn>
        {log && <p className="text-sm text-slate-700">{log}</p>}
      </div>
      <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
        Notice: litmus only tells you <strong>acid or alkali</strong>. In a neutral solution neither litmus paper changes. Universal indicator tells you <strong>how</strong> acidic or alkaline (a pH number).
      </p>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 2) Neutralisation lab (0.1 mol/dm³ strong acid + strong alkali)

const ACIDS = [
  { name: "hydrochloric acid", ending: "chloride" },
  { name: "sulfuric acid", ending: "sulfate" },
  { name: "nitric acid", ending: "nitrate" },
];
const HYDROXIDES = ["sodium", "potassium", "lithium", "calcium"];

function phAfter(vAlkali: number, vAcid = 25) {
  const excess = 0.1 * vAcid - 0.1 * vAlkali; // mmol of acid left (negative = alkali left)
  const total = vAcid + vAlkali;
  if (Math.abs(excess) < 1e-9) return 7;
  const c = Math.abs(excess) / total;
  const ph = excess > 0 ? -Math.log10(c) : 14 + Math.log10(c);
  return Math.min(14, Math.max(0, ph));
}

export function NeutralisationLab() {
  const [acid, setAcid] = useState(0);
  const [metal, setMetal] = useState(0);
  const [v, setV] = useState(0);
  const [evaporated, setEvaporated] = useState(false);
  const [history, setHistory] = useState<number[]>([0]);
  const ph = phAfter(v);
  const rounded = Math.round(ph);
  const salt = `${HYDROXIDES[metal]} ${ACIDS[acid].ending}`;
  const neutral = Math.abs(ph - 7) < 0.01;
  const add = (dv: number) => {
    const nv = Math.round((v + dv) * 100) / 100;
    if (nv > 50) return;
    setV(nv);
    setHistory((h) => [...h, nv]);
    setEvaporated(false);
  };
  const reset = () => {
    setV(0);
    setHistory([0]);
    setEvaporated(false);
  };
  const pts = history.map((x) => `${20 + (x / 50) * 260},${150 - (phAfter(x) / 14) * 130}`).join(" ");
  return (
    <Frame title="⚖️ Neutralisation lab" intro="25 cm³ of acid with universal indicator is in the flask. Add alkali and try to stop EXACTLY at neutral (green, pH 7).">
      <div className="flex flex-wrap gap-3 text-sm">
        <label className="font-semibold text-slate-700">
          Acid{" "}
          <select value={acid} onChange={(e) => { setAcid(Number(e.target.value)); reset(); }} className="ml-1 rounded-lg border border-slate-300 px-2 py-1">
            {ACIDS.map((a, i) => (<option key={a.name} value={i}>{a.name}</option>))}
          </select>
        </label>
        <label className="font-semibold text-slate-700">
          Alkali{" "}
          <select value={metal} onChange={(e) => { setMetal(Number(e.target.value)); reset(); }} className="ml-1 rounded-lg border border-slate-300 px-2 py-1">
            {HYDROXIDES.map((m, i) => (<option key={m} value={i}>{m} hydroxide</option>))}
          </select>
        </label>
      </div>
      <div className="mt-4 grid items-center gap-4 sm:grid-cols-[160px_1fr]">
        <svg viewBox="0 0 160 190" role="img" aria-label={`Flask at pH ${ph.toFixed(1)}`} className="mx-auto w-40">
          <path d="M60 10 L100 10 L100 60 L145 170 Q148 180 138 180 L22 180 Q12 180 15 170 L60 60 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
          <path d={`M${60 - 0.5} 95 L${100.5} 95 L143 170 Q146 178 137 178 L23 178 Q14 178 17 170 Z`} fill={PH_COLORS[rounded]} opacity="0.9" />
          <text x="80" y="150" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="sans-serif" fill={phTextColor(rounded)}>pH {ph.toFixed(1)}</text>
        </svg>
        <div>
          <p className="text-sm text-slate-600">Alkali added: <strong>{v.toFixed(2)} cm³</strong></p>
          <p className={`mt-1 text-lg font-extrabold ${neutral ? "text-emerald-700" : ph < 7 ? "text-rose-700" : "text-violet-700"}`}>
            {neutral ? "🎯 Exactly neutral!" : ph < 7 ? "Still acidic — acid is in excess" : "Overshot! Now alkaline — alkali is in excess"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Btn onClick={() => add(5)}>+5 cm³</Btn>
            <Btn onClick={() => add(1)}>+1 cm³</Btn>
            <Btn onClick={() => add(0.05)}>+1 drop</Btn>
            <Btn tone="slate" onClick={reset}>Reset</Btn>
          </div>
          <svg viewBox="0 0 300 165" className="mt-3 w-full max-w-sm" role="img" aria-label="Graph of pH against volume of alkali added">
            <line x1="20" y1="150" x2="285" y2="150" stroke="#94a3b8" />
            <line x1="20" y1="10" x2="20" y2="150" stroke="#94a3b8" />
            <line x1="20" y1={150 - (7 / 14) * 130} x2="285" y2={150 - (7 / 14) * 130} stroke="#43a047" strokeDasharray="4 3" />
            <text x="24" y={150 - (7 / 14) * 130 - 4} fontSize="10" fill="#2e7d32" fontFamily="sans-serif">pH 7</text>
            <polyline points={pts} fill="none" stroke="#4f46e5" strokeWidth="2.5" />
            <text x="150" y="163" fontSize="10" textAnchor="middle" fill="#475569" fontFamily="sans-serif">volume of alkali added (cm³) →</text>
            <text x="6" y="12" fontSize="10" fill="#475569" fontFamily="sans-serif">pH</text>
          </svg>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-slate-50 p-3 font-semibold text-slate-800">
        {HYDROXIDES[metal]} hydroxide + {ACIDS[acid].name} → <span className="text-emerald-700">{salt}</span> + water
      </div>
      {neutral && (
        <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
          {!evaporated ? (
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-emerald-900">The flask now holds a neutral solution of <strong>{salt}</strong> in water. How do you get the solid salt?</p>
              <Btn tone="emerald" onClick={() => setEvaporated(true)}>🔥 Evaporate the water</Btn>
            </div>
          ) : (
            <p className="text-emerald-900">
              ✨ Heating it gently in an evaporating basin drives off the <strong>water</strong>, leaving white crystals of <strong>{salt}</strong>. (In real life you&apos;d repeat without indicator, or the crystals would be coloured!)
            </p>
          )}
        </div>
      )}
      <p className="mt-3 rounded-xl bg-violet-50 p-3 text-sm text-violet-900">
        🧩 <strong>Puzzle:</strong> try adding 1 cm³ at a time near 25 cm³. Why do chemists add the last bit <em>drop by drop</em>? (Between 24 cm³ and 26 cm³ the pH leaps from under 3 to over 11 — one extra cm³ and you&apos;ve overshot neutral!)
      </p>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 3) Salt namer

const SALT_METALS = ["sodium", "potassium", "lithium", "calcium", "magnesium", "copper"];

export function SaltNamer() {
  const [metal, setMetal] = useState(0);
  const [acid, setAcid] = useState(0);
  const [mode, setMode] = useState<"build" | "quiz" | "back">("build");
  const [q, setQ] = useState({ m: 1, a: 2 });
  const [answer, setAnswer] = useState("");
  const [pickM, setPickM] = useState(-1);
  const [pickA, setPickA] = useState(-1);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [streakCount, setStreak] = useState(0);
  const newQ = () => {
    setQ({ m: Math.floor(Math.random() * SALT_METALS.length), a: Math.floor(Math.random() * 3) });
    setAnswer("");
    setPickM(-1);
    setPickA(-1);
    setFeedback(null);
  };
  const correctSalt = `${SALT_METALS[q.m]} ${ACIDS[q.a].ending}`;
  return (
    <Frame title="🧂 Salt namer" intro="The salt's first name comes from the metal in the hydroxide; its second name comes from the acid.">
      <div className="mb-4 flex gap-1 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
        {(
          [
            ["build", "Build it"],
            ["quiz", "Name the salt"],
            ["back", "Work backwards"],
          ] as const
        ).map(([m, label]) => (
          <button key={m} onClick={() => { setMode(m); newQ(); }} className={`flex-1 rounded-lg px-3 py-1.5 ${mode === m ? "bg-white text-slate-900 shadow" : "text-slate-500"}`}>
            {label}
          </button>
        ))}
      </div>
      {mode === "build" && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {SALT_METALS.map((m, i) => (
              <button key={m} onClick={() => setMetal(i)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${metal === i ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-800"}`}>
                {m} hydroxide
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {ACIDS.map((a, i) => (
              <button key={a.name} onClick={() => setAcid(i)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${acid === i ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-800"}`}>
                {a.name}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 p-4 text-lg">
            <span className="font-bold text-sky-700">{SALT_METALS[metal]}</span> hydroxide + <span className="font-bold text-rose-700">{ACIDS[acid].name.split(" ")[0]}</span> acid →{" "}
            <span className="font-extrabold">
              <span className="text-sky-700">{SALT_METALS[metal]}</span> <span className="text-rose-700">{ACIDS[acid].ending}</span>
            </span>{" "}
            + water
          </div>
          <p className="text-sm text-slate-600">
            Reactants (left of the arrow) → products (right). {SALT_METALS[metal] === "copper" ? "Copper hydroxide is insoluble, so it is a base but not an alkali — it still neutralises the acid." : `${SALT_METALS[metal][0].toUpperCase()}${SALT_METALS[metal].slice(1)} hydroxide dissolves in water, so it is an alkali (a soluble base).`}
          </p>
        </div>
      )}
      {mode === "quiz" && (
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">
            {SALT_METALS[q.m]} hydroxide + {ACIDS[q.a].name} → <span className="text-indigo-600">?</span> + water
          </p>
          <div className="flex gap-2">
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Name the salt" className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2" />
            <Btn
              onClick={() => {
                const ok = normalise(answer) === normalise(correctSalt);
                setFeedback(ok ? `✅ Yes — ${correctSalt}!` : `❌ It's ${correctSalt}: ${SALT_METALS[q.m]} (from the hydroxide) + ${ACIDS[q.a].ending} (from ${ACIDS[q.a].name}).`);
                setStreak((s) => (ok ? s + 1 : 0));
              }}
            >
              Check
            </Btn>
          </div>
          {feedback && (
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-slate-800">{feedback}</p>
              <Btn tone="slate" onClick={newQ}>Next →</Btn>
            </div>
          )}
          <p className="text-sm text-slate-500">Streak: {streakCount} 🔥</p>
        </div>
      )}
      {mode === "back" && (
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">
            Which alkali and acid make <span className="text-indigo-600">{correctSalt}</span> + water?
          </p>
          <div className="flex flex-wrap gap-2">
            {SALT_METALS.map((m, i) => (
              <button key={m} onClick={() => setPickM(i)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${pickM === i ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-800"}`}>
                {m} hydroxide
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {ACIDS.map((a, i) => (
              <button key={a.name} onClick={() => setPickA(i)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${pickA === i ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-800"}`}>
                {a.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Btn
              disabled={pickM < 0 || pickA < 0}
              onClick={() => {
                const ok = pickM === q.m && pickA === q.a;
                setFeedback(ok ? "✅ Spot on — you worked backwards from the name!" : `❌ ${correctSalt} needs ${SALT_METALS[q.m]} hydroxide (metal) + ${ACIDS[q.a].name} (-${ACIDS[q.a].ending.slice(-3)} ending).`);
                setStreak((s) => (ok ? s + 1 : 0));
              }}
            >
              Check
            </Btn>
            {feedback && <Btn tone="slate" onClick={newQ}>Next →</Btn>}
          </div>
          {feedback && <p className="text-slate-800">{feedback}</p>}
          <p className="text-sm text-slate-500">Streak: {streakCount} 🔥</p>
        </div>
      )}
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 4) Digestion journey

type NState = "whole" | "digesting" | "absorbed" | "left";
const STEPS: { organ: Organ; title: string; text: string; added?: string; state: Record<string, NState> }[] = [
  {
    organ: "mouth",
    title: "Mouth",
    text: "Teeth chew the food into smaller pieces (mechanical digestion). Saliva contains amylase, a carbohydrase, which starts breaking starch into sugar (chemical digestion).",
    added: "saliva (amylase)",
    state: { starch: "digesting", protein: "whole", fat: "whole", fibre: "whole", water: "whole" },
  },
  {
    organ: "oesophagus",
    title: "Oesophagus (gullet)",
    text: "A muscular tube. Waves of muscle contractions squeeze the food down to the stomach — it even works upside down!",
    state: { starch: "digesting", protein: "whole", fat: "whole", fibre: "whole", water: "whole" },
  },
  {
    organ: "stomach",
    title: "Stomach",
    text: "Churns and mixes food with hydrochloric acid and protease. The acid kills bacteria and gives the right (acidic, about pH 2) conditions for protease to start breaking proteins into amino acids.",
    added: "hydrochloric acid + protease",
    state: { starch: "digesting", protein: "digesting", fat: "whole", fibre: "whole", water: "whole" },
  },
  {
    organ: "liver",
    title: "Liver & gall bladder (food doesn't go here!)",
    text: "The liver makes bile, stored in the gall bladder and squirted into the small intestine. Bile is alkaline (neutralises the stomach acid) and emulsifies fats — big droplets into tiny droplets. It is NOT an enzyme.",
    added: "bile",
    state: { starch: "digesting", protein: "digesting", fat: "digesting", fibre: "whole", water: "whole" },
  },
  {
    organ: "pancreas",
    title: "Pancreas (food doesn't go here either)",
    text: "Makes carbohydrase, protease and lipase and releases them into the small intestine to finish digestion.",
    added: "carbohydrase, protease, lipase",
    state: { starch: "digesting", protein: "digesting", fat: "digesting", fibre: "whole", water: "whole" },
  },
  {
    organ: "small",
    title: "Small intestine",
    text: "Digestion finishes: starch → glucose, protein → amino acids, fat → fatty acids + glycerol. These small soluble molecules (plus vitamins, minerals and water) are absorbed through the villi into the blood capillaries.",
    state: { starch: "absorbed", protein: "absorbed", fat: "absorbed", fibre: "whole", water: "digesting" },
  },
  {
    organ: "large",
    title: "Large intestine",
    text: "Absorbs water from the undigested food, making the faeces more solid. Fibre can't be digested — it bulks up the faeces and keeps everything moving.",
    state: { starch: "absorbed", protein: "absorbed", fat: "absorbed", fibre: "left", water: "absorbed" },
  },
  {
    organ: "rectum",
    title: "Rectum",
    text: "Stores the faeces until you go to the toilet.",
    state: { starch: "absorbed", protein: "absorbed", fat: "absorbed", fibre: "left", water: "absorbed" },
  },
  {
    organ: "anus",
    title: "Anus",
    text: "Faeces — undigested food such as fibre, plus bacteria and dead cells — leave the body.",
    state: { starch: "absorbed", protein: "absorbed", fat: "absorbed", fibre: "left", water: "absorbed" },
  },
];

const STATE_META: Record<NState, { label: string; cls: string }> = {
  whole: { label: "not digested yet", cls: "bg-slate-100 text-slate-600" },
  digesting: { label: "being digested", cls: "bg-amber-100 text-amber-800" },
  absorbed: { label: "absorbed into blood ✓", cls: "bg-emerald-100 text-emerald-800" },
  left: { label: "left behind (can't be digested)", cls: "bg-stone-200 text-stone-700" },
};

export function DigestionJourney() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  const labels: Record<string, string> = { starch: "Starch (carbohydrate)", protein: "Protein", fat: "Fat (lipid)", fibre: "Fibre", water: "Water" };
  const waterLabel = (st: NState) => (st === "digesting" ? "being absorbed" : st === "absorbed" ? "rest absorbed ✓ (faeces become solid)" : "not absorbed yet");
  return (
    <Frame title="🍞 Journey of a vegetable sandwich" intro="Step through the digestive system and track what happens to each nutrient.">
      <div className="grid gap-4 md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="diagram">
          <DigestiveSystem mode="named" highlight={s.organ} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
            Stop {i + 1} of {STEPS.length}
          </p>
          <h3 className="text-xl font-extrabold text-slate-900">{s.title}</h3>
          <p className="mt-1 text-slate-700">{s.text}</p>
          {s.added && <p className="mt-2 text-sm font-semibold text-indigo-700">➕ Added here: {s.added}</p>}
          <ul className="mt-3 space-y-1.5">
            {Object.entries(s.state).map(([k, st]) => (
              <li key={k} className="flex items-center justify-between gap-2 text-sm">
                <span className="font-semibold text-slate-700">{labels[k]}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${STATE_META[st].cls}`}>{k === "water" ? waterLabel(st) : STATE_META[st].label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <Btn tone="slate" disabled={i === 0} onClick={() => setI(i - 1)}>← Back</Btn>
            <Btn disabled={i === STEPS.length - 1} onClick={() => setI(i + 1)}>Next stop →</Btn>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ---------------------------------------------------------------------------
// 5) Food test lab

type TestKey = "iodine" | "benedicts" | "biuret" | "emulsion";
const TESTS: { key: TestKey; name: string; nutrient: string; neg: [string, string]; how: string }[] = [
  { key: "iodine", name: "Iodine", nutrient: "starch", neg: ["#d97706", "orange-brown"], how: "Drop iodine solution onto the food." },
  { key: "benedicts", name: "Benedict's (heated)", nutrient: "sugar", neg: ["#2563eb", "blue"], how: "Add Benedict's solution and heat in a hot water bath for a few minutes." },
  { key: "biuret", name: "Biuret", nutrient: "protein", neg: ["#3b82f6", "blue"], how: "Add biuret reagent (potassium hydroxide + copper sulfate)." },
  { key: "emulsion", name: "Ethanol + water", nutrient: "fat", neg: ["#e0f2fe", "clear"], how: "Shake the food with ethanol, then pour into water." },
];

const FOODS: { name: string; emoji: string; r: Record<TestKey, null | [string, string]> }[] = [
  { name: "Potato", emoji: "🥔", r: { iodine: ["#1e1b4b", "blue-black"], benedicts: null, biuret: null, emulsion: null } },
  { name: "Apple juice", emoji: "🧃", r: { iodine: null, benedicts: ["#b91c1c", "brick red"], biuret: null, emulsion: null } },
  { name: "Bread", emoji: "🍞", r: { iodine: ["#1e1b4b", "blue-black"], benedicts: ["#65a30d", "green (a little sugar)"], biuret: ["#8b5cf6", "purple"], emulsion: null } },
  { name: "Chickpeas", emoji: "🫘", r: { iodine: ["#1e1b4b", "blue-black"], benedicts: null, biuret: ["#7c3aed", "purple"], emulsion: null } },
  { name: "Paneer", emoji: "🧀", r: { iodine: null, benedicts: null, biuret: ["#7c3aed", "purple"], emulsion: ["#ffffff", "milky white"] } },
  { name: "Milk", emoji: "🥛", r: { iodine: null, benedicts: ["#ea580c", "orange"], biuret: ["#8b5cf6", "purple"], emulsion: ["#ffffff", "milky white"] } },
  { name: "Cooking oil", emoji: "🫒", r: { iodine: null, benedicts: null, biuret: null, emulsion: ["#ffffff", "milky white"] } },
  { name: "Water (control)", emoji: "💧", r: { iodine: null, benedicts: null, biuret: null, emulsion: null } },
];

function Tube({ colour, cloudy, label }: { colour: string; cloudy?: boolean; label: string }) {
  return (
    <div className="text-center">
      <svg viewBox="0 0 40 120" className="mx-auto h-28 w-10" role="img" aria-label={label}>
        <path d="M8 4 L32 4 L32 100 Q32 116 20 116 Q8 116 8 100 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
        <path d="M9.5 46 L30.5 46 L30.5 100 Q30.5 114.5 20 114.5 Q9.5 114.5 9.5 100 Z" fill={colour} stroke={cloudy ? "#cbd5e1" : "none"} />
        {cloudy && <rect x="9.5" y="46" width="21" height="14" fill="#ffffff" opacity="0.95" />}
      </svg>
      <p className="mt-1 text-xs font-semibold text-slate-700">{label}</p>
    </div>
  );
}

export function FoodTestLab() {
  const [food, setFood] = useState(0);
  const [done, setDone] = useState<Partial<Record<TestKey, boolean>>>({});
  const [mystery, setMystery] = useState<number | null>(null);
  const [guess, setGuess] = useState<string | null>(null);
  const current = mystery ?? food;
  const f = FOODS[current];
  const ran = TESTS.filter((t) => done[t.key]);
  const contains = useMemo(() => ran.filter((t) => f.r[t.key]).map((t) => t.nutrient), [ran, f]);

  return (
    <Frame title="🧫 Food test lab" intro="Pick a food, run the four tests, and decide which nutrients it contains. Then try the mystery-food challenge.">
      {mystery === null ? (
        <div className="flex flex-wrap gap-2">
          {FOODS.map((x, i) => (
            <button key={x.name} onClick={() => { setFood(i); setDone({}); }} className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${food === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}`}>
              {x.emoji} {x.name}
            </button>
          ))}
          <Btn tone="emerald" onClick={() => { setMystery(Math.floor(Math.random() * (FOODS.length - 1))); setDone({}); setGuess(null); }}>
            🕵️ Mystery food challenge
          </Btn>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-bold text-slate-800">🕵️ Mystery food in the test tube! Run tests, then guess.</p>
          <Btn tone="slate" onClick={() => { setMystery(null); setDone({}); setGuess(null); }}>Exit challenge</Btn>
        </div>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {TESTS.map((t) => {
          const res = f.r[t.key];
          const isDone = !!done[t.key];
          return (
            <div key={t.key} className="rounded-2xl border border-slate-200 p-3 text-center">
              <p className="text-sm font-extrabold text-slate-800">{t.name}</p>
              <p className="text-xs text-slate-500">tests for {t.nutrient}</p>
              <div className="my-2">
                {isDone ? (
                  <Tube colour={res ? res[0] : t.neg[0]} cloudy={t.key === "emulsion" && !!res} label={res ? res[1] : t.neg[1]} />
                ) : (
                  <Tube colour="#f1f5f9" label="not tested" />
                )}
              </div>
              {isDone ? (
                <p className={`text-xs font-bold ${res ? "text-emerald-700" : "text-slate-500"}`}>{res ? `✅ ${t.nutrient} present` : `no ${t.nutrient}`}</p>
              ) : (
                <button onClick={() => setDone((d) => ({ ...d, [t.key]: true }))} className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white" title={t.how}>
                  Run test
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
        {ran.length === 0 ? (
          "Tap “Run test” on each tube. Hint: you need all four tests to be sure."
        ) : (
          <>
            So far: {contains.length ? <strong>contains {contains.join(", ")}</strong> : "none of the tested nutrients"}
            {ran.length < 4 && " … keep testing!"}
          </>
        )}
      </div>

      {mystery !== null && (
        <div className="mt-3">
          <p className="mb-2 text-sm font-bold text-slate-800">Which food is it?</p>
          <div className="flex flex-wrap gap-2">
            {FOODS.slice(0, -1).map((x, i) => (
              <button
                key={x.name}
                onClick={() => setGuess(i === mystery ? `✅ Yes! It was ${x.name}.` : `❌ Not ${x.name} — look at which tests were positive and try again.`)}
                className="rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
              >
                {x.emoji} {x.name}
              </button>
            ))}
          </div>
          {guess && <p className="mt-2 font-semibold text-slate-800">{guess}</p>}
        </div>
      )}
      <p className="mt-3 text-xs text-slate-500">Safety: goggles on; heat Benedict&apos;s in a water bath (not a direct flame); ethanol is flammable — keep it away from flames.</p>
    </Frame>
  );
}
