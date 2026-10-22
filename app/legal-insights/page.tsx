import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import BlogExplorer from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Legal Insights & Jurisprudence | Veyra Legal",
  description: "Authoritative appellate analysis, commercial litigation commentaries, and corporate jurisprudence from Veyra Legal Chambers.",
};

export default function LegalInsightsPage() {
  const h = pageHeads.blog;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <BlogExplorer />
    </>
  );
}
