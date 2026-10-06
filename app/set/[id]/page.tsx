import { notFound } from "next/navigation";
import { ALL_SETS, getSet } from "@/lib/content";
import { SetClient } from "./SetClient";

export function generateStaticParams() {
  return ALL_SETS.map((s) => ({ id: s.set.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = getSet(id);
  return { title: s ? `${s.set.title} · Test Prep Lab` : "Question set" };
}

export default async function SetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!getSet(id)) notFound();
  return <SetClient id={id} />;
}
