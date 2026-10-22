import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Practice Areas | Comprehensive Legal Counsel",
  description:
    "Explore our specialized legal practice areas including commercial litigation, corporate M&A, international arbitration, intellectual property rights, and regulatory advisory.",
};

export default function PracticeAreasPage() {
  const h = pageHeads.services;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <Process />
      <Services />
    </>
  );
}
