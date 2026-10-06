import type { FigureKey } from "@/lib/types";

/** Universal indicator colours for pH 0–14 (red → orange → yellow → green → blue → purple). */
export const PH_COLORS = [
  "#c62828", "#e53935", "#f4511e", "#fb8c00", "#ffa726", "#fdd835", "#d4e157",
  "#43a047", "#29b6f6", "#1e88e5", "#1565c0", "#283593", "#4527a0", "#6a1b9a", "#4a148c",
];

export function phTextColor(ph: number) {
  return ph >= 3 && ph <= 8 ? "#1f2937" : "#ffffff";
}

export type Organ =
  | "mouth" | "oesophagus" | "liver" | "gall" | "stomach" | "pancreas"
  | "small" | "large" | "rectum" | "anus";

const LETTERS: Partial<Record<Organ, string>> = {
  mouth: "A", oesophagus: "B", liver: "C", stomach: "D", pancreas: "E",
  small: "F", large: "G", rectum: "H", anus: "I",
};

const NAMES: Record<Organ, string> = {
  mouth: "mouth", oesophagus: "oesophagus", liver: "liver", gall: "gall bladder", stomach: "stomach",
  pancreas: "pancreas", small: "small intestine", large: "large intestine", rectum: "rectum", anus: "anus",
};

// label anchor (where the text/letter sits) and target (point on the organ)
const LABELS: { organ: Organ; side: "L" | "R"; y: number; tx: number; ty: number }[] = [
  { organ: "mouth", side: "R", y: 52, tx: 222, ty: 58 },
  { organ: "oesophagus", side: "R", y: 112, tx: 215, ty: 118 },
  { organ: "stomach", side: "R", y: 172, tx: 286, ty: 182 },
  { organ: "pancreas", side: "R", y: 226, tx: 280, ty: 238 },
  { organ: "large", side: "R", y: 274, tx: 307, ty: 284 },
  { organ: "small", side: "R", y: 322, tx: 262, ty: 330 },
  { organ: "rectum", side: "R", y: 392, tx: 224, ty: 400 },
  { organ: "liver", side: "L", y: 160, tx: 124, ty: 166 },
  { organ: "gall", side: "L", y: 214, tx: 175, ty: 203 },
  { organ: "anus", side: "L", y: 424, tx: 208, ty: 421 },
];

export function DigestiveSystem({
  mode = "named",
  highlight,
  className = "",
}: {
  mode?: "named" | "lettered";
  highlight?: Organ;
  className?: string;
}) {
  const hl = (o: Organ) => highlight === o;
  const glow = "#f59e0b";
  const title =
    mode === "lettered"
      ? "Diagram of the human digestive system with organs labelled A to I"
      : "Labelled diagram of the human digestive system";
  return (
    <svg viewBox="0 0 460 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title} className={className}>
      {/* body */}
      <circle cx="210" cy="42" r="32" fill="#fdebd9" stroke="#e2b893" strokeWidth="2" />
      <rect x="198" y="70" width="24" height="26" fill="#fdebd9" />
      <path d="M150 92 Q100 96 94 140 L90 380 Q92 420 140 428 L280 428 Q328 420 330 380 L326 140 Q320 96 270 92 Z" fill="#fff6ec" stroke="#e2b893" strokeWidth="2" />
      {/* mouth */}
      <ellipse cx="210" cy="58" rx="10" ry="5" fill="#b91c1c" stroke={hl("mouth") ? glow : "#7f1d1d"} strokeWidth={hl("mouth") ? 5 : 1.5} />
      {/* oesophagus */}
      {hl("oesophagus") && <path d="M210 64 Q212 110 218 162" fill="none" stroke={glow} strokeWidth="16" strokeLinecap="round" opacity="0.6" />}
      <path d="M210 64 Q212 110 218 162" fill="none" stroke="#e98f8f" strokeWidth="8" strokeLinecap="round" />
      {/* liver */}
      <path d="M108 150 Q150 128 235 150 Q230 180 190 196 Q140 210 112 196 Q100 175 108 150 Z" fill="#a8552e" stroke={hl("liver") ? glow : "#6f3417"} strokeWidth={hl("liver") ? 5 : 2} />
      {/* gall bladder */}
      <ellipse cx="180" cy="202" rx="9" ry="6" fill="#4d9a4d" stroke={hl("gall") ? glow : "#2f6b2f"} strokeWidth={hl("gall") ? 4 : 1.5} />
      {/* stomach */}
      <ellipse cx="252" cy="192" rx="42" ry="28" transform="rotate(-25 252 192)" fill="#f7a8bb" stroke={hl("stomach") ? glow : "#cc6d86"} strokeWidth={hl("stomach") ? 5 : 2} />
      {/* pancreas */}
      <path d="M190 236 Q230 224 282 230 Q290 238 278 245 Q235 249 195 247 Q183 243 190 236 Z" fill="#f2cd6b" stroke={hl("pancreas") ? glow : "#b8922f"} strokeWidth={hl("pancreas") ? 5 : 1.5} />
      {/* small intestine */}
      {hl("small") && (
        <path d="M236 214 C238 236 226 250 214 256 C170 268 156 282 170 292 C190 306 260 286 270 300 C282 316 170 312 162 328 C154 344 266 330 268 346 C270 362 180 354 170 366 C162 376 150 380 138 372" fill="none" stroke={glow} strokeWidth="20" strokeLinecap="round" opacity="0.55" />
      )}
      <path d="M236 214 C238 236 226 250 214 256 C170 268 156 282 170 292 C190 306 260 286 270 300 C282 316 170 312 162 328 C154 344 266 330 268 346 C270 362 180 354 170 366 C162 376 150 380 138 372" fill="none" stroke="#f0a0a0" strokeWidth="10" strokeLinecap="round" />
      {/* large intestine */}
      {hl("large") && <path d="M135 380 L130 268 Q130 258 142 258 L288 258 Q300 258 300 270 L300 360 Q298 388 250 386 L222 388" fill="none" stroke={glow} strokeWidth="28" strokeLinejoin="round" opacity="0.55" />}
      <path d="M135 380 L130 268 Q130 258 142 258 L288 258 Q300 258 300 270 L300 360 Q298 388 250 386 L222 388" fill="none" stroke="#c98a5a" strokeWidth="17" strokeLinejoin="round" strokeLinecap="round" />
      {/* rectum + anus */}
      {hl("rectum") && <path d="M215 386 L215 412" stroke={glow} strokeWidth="24" strokeLinecap="round" opacity="0.6" />}
      <path d="M215 386 L215 412" stroke="#a5683a" strokeWidth="14" strokeLinecap="round" />
      <circle cx="215" cy="421" r="4.5" fill="#5b3a29" stroke={hl("anus") ? glow : "none"} strokeWidth="4" />

      {/* labels */}
      {LABELS.map((l) => {
        const letter = LETTERS[l.organ];
        if (mode === "lettered" && !letter) return null;
        const xLabel = l.side === "R" ? 352 : 84;
        const lineEnd = mode === "lettered" ? (l.side === "R" ? xLabel - 12 : xLabel - 2) : l.side === "R" ? xLabel - 4 : xLabel + 2;
        const isHl = hl(l.organ);
        return (
          <g key={l.organ}>
            <line x1={l.tx} y1={l.ty} x2={lineEnd} y2={l.y} stroke={isHl ? glow : "#475569"} strokeWidth={isHl ? 2 : 1} />
            {mode === "lettered" ? (
              <g>
                <circle cx={l.side === "R" ? xLabel + 2 : xLabel - 16} cy={l.y} r="14" fill="#ffffff" stroke="#334155" strokeWidth="2" />
                <text x={l.side === "R" ? xLabel + 2 : xLabel - 16} y={l.y + 5.5} textAnchor="middle" fontSize="16" fontWeight="800" fontFamily="sans-serif" fill="#0f172a">
                  {letter}
                </text>
              </g>
            ) : (
              <text
                x={l.side === "R" ? xLabel : xLabel}
                y={l.y + 4}
                textAnchor={l.side === "R" ? "start" : "end"}
                fontSize="12.5"
                fontWeight={isHl ? 800 : 600}
                fontFamily="sans-serif"
                fill={isHl ? "#b45309" : "#1e293b"}
              >
                {NAMES[l.organ]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Villus({ className = "" }: { className?: string }) {
  const villi = [30, 100, 170, 240];
  return (
    <svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of villi in the small intestine with capillaries inside" className={className}>
      {/* digested food molecules in the gut */}
      {[[60, 40], [90, 62], [150, 34], [200, 58], [255, 30], [292, 64], [120, 76], [230, 84]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={i % 2 ? "#16a34a" : "#f59e0b"} />
      ))}
      <path d="M150 46 L150 66" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
        </marker>
      </defs>
      {/* intestine wall */}
      <rect x="20" y="196" width="290" height="34" rx="4" fill="#f9c0c8" stroke="#d98a98" />
      {villi.map((x) => (
        <g key={x}>
          <path d={`M${x} 200 L${x} 112 Q${x + 25} 72 ${x + 50} 112 L${x + 50} 200`} fill="#fbd3da" stroke="#d98a98" strokeWidth="2" />
          {/* capillary loop: red in, blue out */}
          <path d={`M${x + 16} 198 L${x + 16} 120 Q${x + 25} 102 ${x + 34} 120 L${x + 34} 198`} fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <path d={`M${x + 20} 190 L${x + 30} 150 M${x + 20} 160 L${x + 30} 130`} stroke="#dc2626" strokeWidth="1.2" />
        </g>
      ))}
      {/* labels */}
      <g fontFamily="sans-serif" fontSize="12" fill="#1e293b">
        <line x1="290" y1="112" x2="330" y2="96" stroke="#475569" />
        <text x="334" y="92" fontWeight="700">villus</text>
        <text x="334" y="106">finger-like:</text>
        <text x="334" y="120">huge surface area</text>
        <line x1="263" y1="150" x2="330" y2="150" stroke="#475569" />
        <text x="334" y="146" fontWeight="700">capillaries</text>
        <text x="334" y="160">carry food away</text>
        <line x1="292" y1="180" x2="330" y2="196" stroke="#475569" />
        <text x="334" y="196" fontWeight="700">thin wall</text>
        <text x="334" y="210">one cell thick</text>
        <text x="20" y="20" fontWeight="700">small soluble molecules (glucose, amino acids…)</text>
        <text x="20" y="246" fill="#9f1239">wall of the small intestine</text>
      </g>
    </svg>
  );
}

const PH_EXAMPLES: { ph: number; label: string; row: 0 | 1 }[] = [
  { ph: 1, label: "stomach acid", row: 0 },
  { ph: 3, label: "vinegar", row: 1 },
  { ph: 7, label: "pure water", row: 0 },
  { ph: 9, label: "toothpaste", row: 1 },
  { ph: 10, label: "soap", row: 0 },
  { ph: 12, label: "bleach", row: 1 },
  { ph: 13, label: "oven cleaner", row: 0 },
];

export function PhScale({ className = "", marker }: { className?: string; marker?: number }) {
  const x0 = 15;
  const w = 30;
  return (
    <svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The pH scale from 0 to 14 with universal indicator colours" className={className}>
      <g fontFamily="sans-serif">
        <text x={x0} y="16" fontSize="12" fill="#b91c1c" fontWeight="700">← more acidic</text>
        <text x="465" y="16" fontSize="12" fill="#4a148c" fontWeight="700" textAnchor="end">more alkaline →</text>
        {PH_COLORS.map((c, i) => (
          <g key={i}>
            <rect x={x0 + i * w} y="24" width={w} height="38" fill={c} stroke={marker === i ? "#0f172a" : "#ffffff"} strokeWidth={marker === i ? 3 : 1} />
            <text x={x0 + i * w + w / 2} y="48" textAnchor="middle" fontSize="13" fontWeight="700" fill={phTextColor(i)}>{i}</text>
          </g>
        ))}
        <path d={`M${x0 + 2} 70 L${x0 + 7 * w - 2} 70`} stroke="#b91c1c" strokeWidth="2" />
        <text x={x0 + 3.5 * w} y="84" textAnchor="middle" fontSize="12" fill="#b91c1c" fontWeight="700">ACIDIC (below 7)</text>
        <text x={x0 + 7.5 * w} y="84" textAnchor="middle" fontSize="12" fill="#2e7d32" fontWeight="700">NEUTRAL</text>
        <path d={`M${x0 + 8 * w + 2} 70 L${x0 + 15 * w - 2} 70`} stroke="#4527a0" strokeWidth="2" />
        <text x={x0 + 11.5 * w} y="84" textAnchor="middle" fontSize="12" fill="#4527a0" fontWeight="700">ALKALINE (above 7)</text>
        {PH_EXAMPLES.map((e) => (
          <g key={e.ph}>
            <line x1={x0 + e.ph * w + w / 2} y1="88" x2={x0 + e.ph * w + w / 2} y2={e.row ? 118 : 100} stroke="#94a3b8" />
            <text x={x0 + e.ph * w + w / 2} y={e.row ? 130 : 112} textAnchor="middle" fontSize="11" fill="#334155">{e.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Figure({ figure, className = "" }: { figure: FigureKey; className?: string }) {
  switch (figure) {
    case "digestive-lettered":
      return <DigestiveSystem mode="lettered" className={className} />;
    case "digestive-named":
      return <DigestiveSystem mode="named" className={className} />;
    case "villus":
      return <Villus className={className} />;
    case "ph-scale":
      return <PhScale className={className} />;
  }
}
