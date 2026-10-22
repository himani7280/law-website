import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "Book a Consultation | Veyra Legal",
  description: "Schedule a privileged consultation with our senior advocates and partners for commercial, appellate, arbitration, and constitutional matters.",
};

export default function BookConsultationPage() {
  const h = pageHeads.quote;
  return (
    <>
      <PageHero
        title="Schedule Legal Consultation"
        crumb="Book Consultation"
        image={h.image}
      />
      <Quote />
    </>
  );
}
