"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/data/data";
import { cardPop, stagger } from "@/lib/variants";
import SectionHead from "./ui/SectionHead";

export default function Gallery() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-x">
        <SectionHead eyebrow={gallery.eyebrow} title={gallery.title} light center />
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid auto-rows-[200px] gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.items.map((g: { label: string; src: string; span: string }) => (
            <motion.figure key={g.label} variants={cardPop} className={`group relative overflow-hidden rounded-[1.75rem] ${g.span}`}>
              <Image src={g.src} alt={g.label} fill quality={85} sizes="(max-width:640px) 100vw, 40vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-5 translate-y-2 font-title text-lg font-semibold text-white transition-transform group-hover:translate-y-0">{g.label}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
