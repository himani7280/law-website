"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, stagger, wordReveal } from "@/lib/variants";

type Props = { title: string; crumb: string; image: string; parent?: { label: string; href: string } };

export default function PageHero({ title, crumb, image, parent }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-900 pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pt-36">
      <div className="container-x relative grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div variants={stagger(0.12, 0.2)} initial="hidden" animate="show" className="text-center lg:text-left min-w-0">
          <motion.nav variants={fadeUp} className="mb-2.5 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs text-white/70 max-w-full">
            <Link href="/" className="hover:text-gold-300">Home</Link>
            <ChevronRight size={13} className="text-gold-400" />
            {parent && (<><Link href={parent.href} className="hover:text-gold-300">{parent.label}</Link><ChevronRight size={13} className="text-gold-400" /></>)}
            <span className="text-gold-300">{crumb}</span>
          </motion.nav>
          <h1 className="section-title text-white my-1.5 leading-[1.08] break-words">
            {title.split(" ").map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className="inline-block leading-[1.08] pb-0.5">{w}</motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <div className="relative mx-auto hidden h-48 sm:h-52 w-full max-w-[320px] sm:max-w-[350px] overflow-hidden rounded-t-[999px] rounded-b-3xl border-4 border-gold-400/40 shadow-2xl lg:block bg-forest-950">
          <Image src={image} alt={title} fill priority sizes="(max-width:1024px) 100vw, 350px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
