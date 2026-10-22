import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team | Senior Advocates & Partners",
  description:
    "Meet the distinguished Senior Advocates, trial lawyers, and legal scholars leading Veyra Legal across the Supreme Court of India, High Courts, and Arbitral Tribunals.",
};

export default function TeamPage() {
  const h = pageHeads.team;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <Team />
    </>
  );
}
