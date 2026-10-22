"use client";
import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/variants";

type Props = {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, variants = fadeUp, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
