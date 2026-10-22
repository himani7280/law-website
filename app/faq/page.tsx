import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Veyra Legal",
  description:
    "Clear answers on legal representation, retainer models, court procedures, fee structures, confidentiality, and counsel briefing at Veyra Legal.",
};

export default function FaqPage() {
  const h = pageHeads.faq;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <Faq />
      <CtaBanner />
    </>
  );
}
