"use client";
import { band } from "@/data/data";
import ParallaxBg from "./ui/ParallaxBg";
import Reveal from "./ui/Reveal";

export default function QuoteBand() {
  return (
    <ParallaxBg src={band.image} overlay="bg-ink/70" className="py-20 sm:py-28">
      <Reveal className="container-x text-center max-w-4xl mx-auto">
        <p className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal italic text-white/95 leading-relaxed sm:leading-relaxed">“{band.quote}”</p>
        <p className="shimmer-text mt-4 sm:mt-5 font-title text-base sm:text-lg lg:text-xl font-semibold tracking-wide">{band.by}</p>
      </Reveal>
    </ParallaxBg>
  );
}
