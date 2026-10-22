"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/data";
import SectionHead from "./ui/SectionHead";

const DELAY = 6000;
const bg = "/portfolio-books.webp";

const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.items.length;
  const go = useCallback((d: number) => setI((p) => (p + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), DELAY);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  const t = testimonials.items[i];

  return (
    <section className="section-pad grain relative isolate overflow-hidden bg-ink text-white">
      <Image src={bg} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/95 via-ink/85 to-ink/95" />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gold-500/20 blur-[110px]" />

      <div className="container-x relative">
        <SectionHead eyebrow={testimonials.eyebrow} title={testimonials.title} light center />

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] px-3.5 sm:px-14 pb-8 sm:pb-10 pt-12 sm:pt-14 text-center shadow-2xl backdrop-blur-md">
            <span className="absolute left-1/2 top-0 grid h-14 w-14 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-400 text-ink shadow-xl shadow-gold-500/30">
              <Quote size={22} className="sm:hidden" fill="currentColor" />
              <Quote size={26} className="hidden sm:block" fill="currentColor" />
            </span>

            <div className="relative min-h-[280px] sm:min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-center gap-1 text-gold-400">
                    {Array.from({ length: 5 }, (_, k) => <Star key={k} size={15} fill="currentColor" />)}
                  </div>
                  <p className="mt-5 sm:mt-6 font-title text-base xs:text-lg sm:text-2xl lg:text-[1.7rem] leading-relaxed">“{t.text}”</p>
                  <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full overflow-hidden border-2 border-gold-400/80 shadow-lg shadow-gold-500/20 bg-ink">
                      {(t as any).image ? (
                        <Image
                          src={(t as any).image}
                          alt={t.name}
                          fill
                          sizes="56px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <span className="grid h-full w-full place-items-center bg-gold-400/15 font-semibold text-gold-300">
                          {initials(t.name)}
                        </span>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gold-300">{t.name}</p>
                      <p className="text-sm text-white/65">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button aria-label="Previous testimonial" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white border border-white/30 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink hover:scale-105">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-3">
                {testimonials.items.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`Testimonial ${k + 1}`}
                    onClick={() => setI(k)}
                    className="relative h-2 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
                    style={{ width: k === i ? 48 : 8 }}
                  >
                    {k === i && (
                      <motion.span
                        key={`${i}-${paused}`}
                        className="absolute inset-y-0 left-0 bg-gold-400"
                        initial={{ width: paused ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: paused ? 0 : DELAY / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button aria-label="Next testimonial" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white border border-white/30 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink hover:scale-105">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
