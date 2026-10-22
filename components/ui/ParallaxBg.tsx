"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = { src: string; alt?: string; overlay?: string; children?: React.ReactNode; className?: string; id?: string };

/* Full-bleed photo that drifts slowly as the section scrolls past. Children sit above a dark overlay. */
export default function ParallaxBg({ src, alt = "", overlay = "bg-ink/70", children, className = "", id }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} id={id} className={`relative isolate overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 -z-20">
        <Image src={src} alt={alt} fill quality={90} sizes="100vw" className="object-cover" />
      </motion.div>
      <div className={`absolute inset-0 -z-10 ${overlay}`} />
      {children}
    </section>
  );
}
