import type { Metadata } from "next";
import { pageHeads } from "@/data/data";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import PhotoStrip from "@/components/PhotoStrip";

export const metadata: Metadata = { title: "Who We Are" };

export default function WhoWeArePage() {
  const h = pageHeads.about;
  return (
    <>
      <PageHero title={h.title} crumb={h.crumb} image={h.image} />
      <About />
      <Timeline />
      <PhotoStrip />
    </>
  );
}
