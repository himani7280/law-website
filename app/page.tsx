import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

