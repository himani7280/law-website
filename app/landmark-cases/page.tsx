import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import QuoteBand from "@/components/QuoteBand";

export const metadata: Metadata = { title: "Landmark Cases" };

export default function LandmarkCasesPage() {
  const h = pageHeads.portfolio;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <Portfolio />
      <Gallery />
      <QuoteBand />
    </>
  );
}
