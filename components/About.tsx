"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Check } from "lucide-react";
import { about } from "@/data/data";
import { fadeLeft, fadeRight, fadeUp, stagger } from "@/lib/variants";
import Counter from "./ui/Counter";
import Img from "./ui/Img";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

export default function About() {
  return (
    <section className="section-pad overflow-hidden bg-cream">
      <div className="container-x grid items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
        {/* Left Column: Chambers Image & Credentials */}
        <Reveal variants={fadeLeft} className="relative w-full max-w-[340px] xs:max-w-md sm:max-w-lg lg:max-w-none mx-auto mb-8 sm:mb-10 lg:mb-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] rounded-b-[2rem] sm:rounded-b-[2.5rem] border-[3px] sm:border-4 border-gold-400/50 shadow-2xl bg-forest-950">
            <Img src={about.image} alt="Veyra Legal senior counsel chambers" sizes="(max-width:640px) 90vw, (max-width:1024px) 70vw, 50vw" priority />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-3 right-1 xs:-bottom-4 xs:right-2 sm:-bottom-6 sm:right-4 h-28 w-28 xs:h-32 xs:w-32 sm:h-44 sm:w-44 lg:h-48 lg:w-48 overflow-hidden rounded-full border-[3.5px] sm:border-[5px] border-cream shadow-2xl bg-forest-950"
          >
            <Image
              src={about.image2}
              alt="Senior Advocate"
              fill
              sizes="(max-width:640px) 128px, 192px"
              className="object-cover object-[center_15%]"
              priority
            />
          </motion.div>
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 rounded-xl sm:rounded-2xl bg-forest-900/95 px-3 sm:px-4 py-2 sm:py-2.5 text-white backdrop-blur-md border border-gold-400/40 shadow-xl">
            <span className="font-title text-xl sm:text-2xl md:text-3xl font-bold text-gold-400"><Counter to={25} suffix="+" /></span>
            <span className="block text-[8px] sm:text-[9.5px] font-semibold uppercase tracking-widest text-white/75">Years Jurisprudence</span>
          </div>
        </Reveal>

        {/* Right Column: About Veyra Legal Content */}
        <div className="w-full flex flex-col justify-center">
          <SectionHead eyebrow={about.eyebrow} title={about.title} className="mb-5 sm:mb-8 w-full" />
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 sm:space-y-5">
            {about.text.map((t) => (
              <motion.p key={t} variants={fadeUp} className="text-sm sm:text-base lg:text-lg leading-relaxed text-forest-800/85 font-normal">{t}</motion.p>
            ))}
            <motion.ul variants={stagger(0.08)} className="grid gap-x-6 gap-y-2.5 sm:gap-y-3.5 pt-1 sm:pt-2 grid-cols-1 sm:grid-cols-2">
              {about.points.map((p) => (
                <motion.li key={p} variants={fadeRight} className="group/item flex items-start gap-2.5 sm:gap-3 border-b border-forest-900/10 pb-2.5 text-xs sm:text-sm font-semibold text-forest-900 transition-colors hover:border-gold-500/40">
                  <span className="grid h-5 w-5 sm:h-6 sm:w-6 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400 transition-colors duration-300 group-hover/item:bg-gold-400 group-hover/item:text-ink mt-0.5"><Check size={13} /></span>
                  <span className="leading-snug break-words flex-1">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
            <div className="grid gap-3.5 sm:gap-4 pt-2 sm:pt-3 grid-cols-1 sm:grid-cols-2">
              {about.mission.map((m, i) => (
                <motion.div key={m.title} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="group rounded-2xl border border-forest-900/10 bg-white p-4 sm:p-5 shadow-sm transition-all hover:border-gold-500/30 hover:shadow-md">
                  <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-gold-400 text-ink transition-all duration-300 group-hover:scale-105 group-hover:bg-forest-900 group-hover:text-gold-400">{i === 0 ? <Target size={17} /> : <Eye size={17} />}</span>
                  <h3 className="mt-2.5 sm:mt-3 text-base sm:text-lg font-semibold text-forest-950 transition-colors group-hover:text-gold-600">{m.title}</h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-forest-900/85 leading-relaxed font-medium">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
