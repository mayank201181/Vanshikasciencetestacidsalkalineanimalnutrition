"use client";

import { useState } from "react";
import { DigestionJourney, FoodTestLab, NeutralisationLab, PhExplorer, SaltNamer } from "@/components/Labs";

const LABS = [
  { key: "ph", label: "🌈 pH explorer", el: <PhExplorer /> },
  { key: "neut", label: "⚖️ Neutralisation", el: <NeutralisationLab /> },
  { key: "salt", label: "🧂 Salt namer", el: <SaltNamer /> },
  { key: "dig", label: "🍞 Digestion journey", el: <DigestionJourney /> },
  { key: "food", label: "🧫 Food tests", el: <FoodTestLab /> },
];

export default function LabPage() {
  const [tab, setTab] = useState("ph");
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">🔬 Interactive labs</h1>
        <p className="mt-1 text-slate-600">Change things and watch what happens — the best way to make the facts stick.</p>
      </div>
      <div className="nav-scroll flex gap-1.5 overflow-x-auto pb-1">
        {LABS.map((l) => (
          <button
            key={l.key}
            onClick={() => setTab(l.key)}
            className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-bold ${tab === l.key ? "bg-indigo-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
      {LABS.find((l) => l.key === tab)?.el}
    </div>
  );
}
