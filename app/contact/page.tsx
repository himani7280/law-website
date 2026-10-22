import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const h = pageHeads.contact;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <Contact />
    </>
  );
}
