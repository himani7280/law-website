"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/data/data";
import { fadeUp } from "@/lib/variants";
import Img from "./ui/Img";
import SectionHead from "./ui/SectionHead";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section className="section-pad relative overflow-hidden bg-forest-900 text-white">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHead eyebrow={timeline.eyebrow} title={timeline.title} light center />
        <div ref={ref} className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-3 sm:left-4 top-0 w-px bg-white/15 md:left-1/2" />
          <motion.div style={{ scaleY: h }} className="absolute bottom-0 left-3 sm:left-4 top-0 w-px origin-top bg-gold-400 md:left-1/2" />

          {timeline.items.map((t, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <motion.div
                key={t.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="relative mb-12 sm:mb-16 grid items-center gap-5 sm:gap-6 pl-8 sm:pl-12 last:mb-0 md:grid-cols-2 md:gap-16 lg:gap-24 md:pl-0"
              >
                <span className="absolute left-[5px] sm:left-[9px] top-6 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-4 border-forest-900 bg-gold-400 ring-2 ring-gold-400 md:left-1/2 md:top-1/2 md:-ml-2 md:-mt-2" />

                <div className={`group relative aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/40 ${imageLeft ? "" : "md:order-2"}`}>
                  <Img src={t.image} alt={t.title} sizes="(max-width:768px) 100vw, 45vw" className="transition-transform duration-[1400ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 rounded-full bg-gold-400 px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-bold text-ink">{t.year}</span>
                </div>

                <div className={imageLeft ? "" : "md:order-1 md:text-right"}>
                  <span className="outline-text font-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-gold-400 select-none">{t.year}</span>
                  <h3 className="mt-1.5 sm:mt-2 font-title text-xl sm:text-2xl lg:text-3xl font-semibold break-words">{t.title}</h3>
                  <span className={`mt-2.5 sm:mt-4 block h-[2px] w-10 sm:w-12 bg-gold-400 ${imageLeft ? "" : "md:ml-auto"}`} />
                  <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-white/75">{t.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
