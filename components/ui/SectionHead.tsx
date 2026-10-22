"use client";
import { motion } from "framer-motion";
import { stagger, fadeUp, wordReveal } from "@/lib/variants";
import WordsIn from "./WordsIn";

type Props = { eyebrow: string; title: string; light?: boolean; center?: boolean; text?: string; className?: string };

export default function SectionHead({ eyebrow, title, light, center, text, className = "" }: Props) {
  const hasMb = /\bmb-/.test(className);
  const mbClass = hasMb ? "" : "mb-6 sm:mb-8";
  const alignClass = center && !className.includes("text-") ? "mx-auto text-center" : "";
  const maxWClass = !className.includes("max-w-") && !className.includes("w-full") ? "max-w-3xl" : "";
  const fullClass = [mbClass, alignClass, maxWClass, className].filter(Boolean).join(" ");

  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={fullClass}
    >
      <motion.span variants={fadeUp} className={`eyebrow ${center ? "eyebrow-center" : ""}`}>{eyebrow}</motion.span>
      <h2 className={`section-title mt-3.5 leading-[1.08] ${light ? "text-white" : "text-forest-900"}`}>
        {title.split("\n").map((line, lineIdx) => (
          <span key={lineIdx} className="block leading-[1.08]">
            {line.split(" ").map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-baseline">
                <motion.span variants={wordReveal} className="inline-block leading-[1.08] pb-0.5">{w}</motion.span>
              </span>
            ))}
          </span>
        ))}
      </h2>
      {text && (
        <WordsIn text={text} delay={0.5} step={0.03} className={`mt-5 text-base leading-relaxed ${light ? "text-white/70" : "text-forest-800/70"}`} />
      )}
    </motion.div>
  );
}
