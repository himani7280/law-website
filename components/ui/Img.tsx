"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = { src: string; alt: string; className?: string; priority?: boolean; sizes?: string; kenburns?: boolean };

/* HD image that zooms out into place as it scrolls into view (optionally a slow, endless zoom in/out). */
export default function Img({ src, alt, className = "", priority, sizes = "(max-width: 768px) 100vw, 50vw", kenburns }: Props) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.3 }}
      whileInView={kenburns ? { scale: [1.3, 1.02, 1.12, 1.02] } : { scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={kenburns ? { duration: 18, times: [0, 0.18, 0.6, 1], ease: "easeInOut", repeat: Infinity, repeatDelay: 0 } : { duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image src={src} alt={alt} fill quality={92} priority={priority} sizes={sizes} className={`object-cover ${className}`} />
    </motion.div>
  );
}
