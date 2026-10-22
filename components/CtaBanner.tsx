"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cta } from "@/data/data";
import { fadeUp, stagger } from "@/lib/variants";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-[2.5rem] bg-gold-400 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative p-7 sm:p-10">
            <motion.h2 variants={fadeUp} className="section-title text-ink">{cta.title}</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-lg text-ink/75">{cta.text}</motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link href={cta.primary.href} className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 sm:pl-7 pr-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                <span className="whitespace-nowrap">{cta.primary.label}</span>
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full bg-gold-400 text-ink transition-transform group-hover:rotate-45"><ArrowUpRight size={18} /></span>
              </Link>
              <a href={cta.secondary.href} className="text-xs sm:text-sm font-semibold text-ink underline decoration-2 underline-offset-8 whitespace-nowrap">{cta.secondary.label}</a>
            </motion.div>
          </motion.div>
          <div className="relative hidden h-full min-h-[280px] w-full overflow-hidden rounded-l-[999px] lg:block">
            <Image src={cta.image} alt={cta.title} fill sizes="(max-width:1024px) 100vw, 35vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
