"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { hero } from "@/data/data";
import { fadeUp, stagger, wordReveal } from "@/lib/variants";
import Counter from "./ui/Counter";
import Typewriter from "./ui/Typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-forest-900 pb-10 sm:pb-12 lg:pb-14 pt-28 sm:pt-32 lg:pt-36">
      <div className="container-x relative grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
        <motion.div variants={stagger(0.1, 0.2)} initial="hidden" animate="show" className="text-center lg:col-span-7 lg:text-left lg:-mt-4">
          <motion.span variants={fadeUp} className="eyebrow">{hero.eyebrow}</motion.span>

          <h1 className="section-title mt-3.5 text-white leading-[1.08]">
            {hero.words.map((w, k) => (
              <span key={k} className="mr-[0.22em] inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className={`inline-block leading-[1.08] pb-0.5 ${k === hero.words.length - 1 ? "shimmer-text italic" : ""}`}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div variants={fadeUp} className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/85 lg:justify-start">
            <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-gold-400 text-ink shadow-md shadow-gold-500/20 transition-all duration-300 hover:bg-white hover:scale-105"><CheckCircle2 size={15} /></span>
            <span>Advocates in</span>
            <Typewriter words={hero.rotating} className="inline-block min-w-0 sm:min-w-[12rem] font-semibold text-gold-300" />
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-[390px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[4px] sm:border-[5px] border-gold-400/70 shadow-2xl shadow-gold-500/20 bg-forest-950">
            <Image src={hero.floatImage} alt="Senior legal counsel at work" fill priority sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
          </div>

          <div className="absolute -bottom-4 -left-2 h-28 w-28 overflow-hidden rounded-full border-[4px] sm:border-[5px] border-forest-900 shadow-xl sm:-bottom-6 sm:-left-10 sm:h-40 sm:w-40 bg-forest-950">
            <Image src={hero.image} alt="Veyra Legal chambers and law library" fill sizes="200px" className="object-cover" />
          </div>

          <div className="absolute right-0 top-2 h-24 w-24 sm:-right-8 sm:top-4 sm:h-32 sm:w-32">
            <svg viewBox="0 0 200 200" className="h-full w-full animate-spinSlow text-gold-300">
              <defs><path id="heroCircle" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" /></defs>
              <text fontSize="16" letterSpacing="2.2" fill="currentColor" className="font-body font-bold uppercase">
                <textPath href="#heroCircle">Litigation • Corporate • Arbitration • Counsel • </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-ink font-title font-semibold text-gold-400 text-xs sm:text-sm shadow-md border border-gold-400/40">VL</span>
          </div>

          <div className="hidden sm:block absolute -right-2 sm:-right-8 bottom-10 rounded-2xl bg-gold-400 px-4 py-3 sm:px-5 sm:py-3.5 text-ink shadow-2xl">
            <p className="font-title text-2xl sm:text-3xl font-semibold text-ink"><Counter to={25} suffix="+" /></p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/70">{hero.badge.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
