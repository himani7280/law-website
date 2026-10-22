"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/data/data";
import SectionHead from "./ui/SectionHead";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between h-full">
          <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-forest-900/10 shadow-lg">
            <Image
              src={(faq as { image?: string }).image || "/banner-lady-justice.webp"}
              alt="Legal Representation & Chambers"
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">Confidential Legal Advisory</span>
              <p className="mt-1 font-title text-lg font-semibold">Have Specific Case Questions?</p>
              <p className="mt-0.5 text-xs text-white/75">Our Senior Advocates evaluate case briefs under strict privilege.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {faq.items.map((f, i) => {
            const on = open === i;
            return (
              <motion.div layout key={f.q} className={`overflow-hidden rounded-2xl border transition-colors ${on ? "border-gold-500 bg-cream" : "border-forest-900/10"}`}>
                <button onClick={() => setOpen(on ? null : i)} className="group/faq flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                  {f.q}
                  <motion.span animate={{ rotate: on ? 135 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400 transition-all duration-300 group-hover/faq:scale-105 group-hover/faq:bg-gold-400 group-hover/faq:text-ink shadow-xs">
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-5 pb-5 text-sm leading-relaxed text-forest-800/75"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
