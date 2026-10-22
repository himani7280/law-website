"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, slugify } from "@/data/data";
import Icon from "./ui/Icon";
import Img from "./ui/Img";
import SectionHead from "./ui/SectionHead";

const tones = ["bg-cream", "bg-[#ecdcae]", "bg-white", "bg-gold-300", "bg-[#fff6df]", "bg-cream"];

export default function Services({ limit }: { limit?: number }) {
  const items = limit ? services.items.slice(0, limit) : services.items;

  return (
    <section className="section-pad relative bg-forest-900">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHead eyebrow={services.eyebrow} title={services.title} light center className="mb-6 sm:mb-8 max-w-2xl mx-auto text-center" />

        <div className="pb-4">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ top: 90 + i * 12 }}
              className={`group sticky mb-6 grid overflow-hidden rounded-[2rem] text-forest-900 shadow-2xl shadow-black/30 md:grid-cols-[1.1fr_0.9fr] ${tones[i % tones.length]}`}
            >
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="outline-text font-title text-6xl font-bold text-forest-900/70 sm:text-7xl">0{i + 1}</span>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-forest-900 text-gold-400 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-ink"><Icon name={s.icon} size={26} /></span>
                </div>
                <div className="mt-10">
                  <h3 className="font-title text-3xl font-semibold sm:text-4xl text-forest-950">{s.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-forest-900/85 font-medium">{s.text}</p>
                  <Link href={`/practice-areas/${slugify(s.title)}`} className="group/btn mt-7 inline-flex items-center gap-3 rounded-full bg-forest-900 py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white shadow-md hover:bg-forest-950 transition">
                    Explore practice area
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-ink transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-gold-300"><ArrowUpRight size={16} /></span>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[340px]">
                <Img src={s.image} alt={s.title} sizes="(max-width:768px) 100vw, 40vw" className="transition-transform duration-[1400ms] group-hover:scale-110" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
