"use client";

import { getSet } from "@/lib/content";
import { Runner, type RunItem } from "@/components/Runner";

export function SetClient({ id }: { id: string }) {
  const s = getSet(id)!;
  const items: RunItem[] =
    s.kind === "mcq" ? s.set.questions.map((q) => ({ kind: "mcq" as const, q })) : s.set.questions.map((q) => ({ kind: "qa" as const, q }));
  return <Runner mode="set" runId={s.set.id} title={s.set.title} subtitle={s.set.subtitle} items={items} backHref="/bank" backLabel="📝 All sets" />;
}
