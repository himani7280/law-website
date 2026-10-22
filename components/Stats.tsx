"use client";
import { motion } from "framer-motion";
import { stats } from "@/data/data";
import { fadeUp, cardPop, stagger } from "@/lib/variants";
import Counter from "./ui/Counter";

export default function Stats() {
  return (
    <section className="relative bg-cream">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container-x grid grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-3 pb-10 sm:pb-14 lg:pb-16 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={cardPop} className="border-l-2 border-gold-500 pl-3 sm:pl-5">
            <p className="font-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest-900">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[10px] sm:text-sm font-medium uppercase tracking-wider text-forest-800/70 leading-tight">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
