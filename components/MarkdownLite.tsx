import React from "react";

// A tiny, safe markdown renderer. Supports:
//   **bold**, *italic*, `code`
//   paragraphs separated by blank lines
//   "- " bullet lists
//   simple pipe tables (| a | b | / |---|---| / | c | d |)
// It never uses dangerouslySetInnerHTML, so authored content can't inject HTML.

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`)/g;
  const parts = text.split(regex);
  parts.forEach((part, i) => {
    if (!part) return;
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={key} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(
        <code key={key} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-pink-700">
          {part.slice(1, -1)}
        </code>,
      );
    } else if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
      nodes.push(<em key={key} className="italic">{part.slice(1, -1)}</em>);
    } else {
      nodes.push(<React.Fragment key={key}>{part}</React.Fragment>);
    }
  });
  return nodes;
}

const isTableLine = (l: string) => /^\s*\|.*\|\s*$/.test(l);
const isSeparator = (l: string) => /^\s*\|(\s*:?-{2,}:?\s*\|)+\s*$/.test(l);
const cells = (l: string) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

function Table({ lines, k }: { lines: string[]; k: string }) {
  const rows = lines.filter((l) => !isSeparator(l)).map(cells);
  const hasHeader = lines.length > 1 && isSeparator(lines[1]);
  const head = hasHeader ? rows[0] : null;
  const body = hasHeader ? rows.slice(1) : rows;
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse overflow-hidden rounded-lg text-sm">
        {head && (
          <thead>
            <tr>
              {head.map((c, i) => (
                <th key={i} className="border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-left font-semibold text-slate-800">
                  {renderInline(c, `${k}-h${i}`)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="odd:bg-white even:bg-slate-50">
              {r.map((c, ci) => (
                <td key={ci} className="border border-slate-200 px-2.5 py-1.5 align-top text-slate-700">
                  {renderInline(c, `${k}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarkdownLite({ text, className = "" }: { text: string; className?: string }) {
  const blocks = text.trim().split(/\n\s*\n/);
  return (
    <div className={`space-y-3 leading-relaxed text-slate-700 ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim().length);
        if (lines.length && lines.every(isTableLine)) {
          return <Table key={bi} lines={lines} k={`t${bi}`} />;
        }
        const isList = lines.length > 0 && lines.every((l) => l.trim().startsWith("- "));
        if (isList) {
          return (
            <ul key={bi} className="ml-1 space-y-1.5">
              {lines.map((l, li) => (
                <li key={li} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <span>{renderInline(l.trim().slice(2), `${bi}-${li}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        // mixed block: a lead line followed by bullets
        const firstBullet = lines.findIndex((l) => l.trim().startsWith("- "));
        if (firstBullet > 0 && lines.slice(firstBullet).every((l) => l.trim().startsWith("- "))) {
          return (
            <div key={bi} className="space-y-1.5">
              <p>{renderInline(lines.slice(0, firstBullet).join(" "), `p-${bi}`)}</p>
              <ul className="ml-1 space-y-1.5">
                {lines.slice(firstBullet).map((l, li) => (
                  <li key={li} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{renderInline(l.trim().slice(2), `${bi}-b${li}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return <p key={bi}>{renderInline(lines.join(" "), `p-${bi}`)}</p>;
      })}
    </div>
  );
}
