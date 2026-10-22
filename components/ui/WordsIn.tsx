"use client";
import { motion } from "framer-motion";
import { stagger, wordIn } from "@/lib/variants";

/* Text that appears one word at a time (blur -> sharp). */
export default function WordsIn({ text, className, step = 0.04, delay = 0, as: Tag = "p" }: { text: string; className?: string; step?: number; delay?: number; as?: "p" | "span" | "div" }) {
  const M = motion[Tag];
  return (
    <M variants={stagger(step, delay)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={wordIn} className="mr-[0.28em] inline-block">{w}</motion.span>
      ))}
    </M>
  );
}
