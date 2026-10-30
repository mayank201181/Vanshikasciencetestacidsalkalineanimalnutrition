import { notFound } from "next/navigation";
import { TOPICS } from "@/lib/sections";
import { GuideView } from "@/components/GuideView";
import type { TopicId } from "@/lib/types";

export function generateStaticParams() {
  return [{ topic: "aa" }, { topic: "an" }];
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = TOPICS[topic as TopicId];
  return { title: t ? `${t.title} guide · Test Prep Lab` : "Guide" };
}

export default async function GuidePage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  if (topic !== "aa" && topic !== "an") notFound();
  return <GuideView topic={topic} />;
}
