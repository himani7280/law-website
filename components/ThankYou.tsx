"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Mail, ArrowLeft } from "lucide-react";
import { thanks, site } from "@/data/data";
import { fadeUp, stagger, ease } from "@/lib/variants";
import Typewriter from "./ui/Typewriter";

/* Balance scale — drawn as SVG, beam sways gently, pans follow the beam ends */
function Scale() {
  const sway = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };
  const gold = "url(#goldGrad)";
  const Pan = ({ x, dir }: { x: number; dir: 1 | -1 }) => (
    <motion.g
      animate={{ y: [-7.3 * dir, 7.3 * dir, -7.3 * dir] }}
      transition={sway}
    >
      <path d={`M${x} 92 L${x - 46} 232 M${x} 92 L${x + 46} 232 M${x} 92 L${x} 232`} stroke={gold} strokeWidth="1.2" opacity=".9" />
      <path d={`M${x - 62} 232 Q${x} 292 ${x + 62} 232 Z`} fill={gold} />
      <ellipse cx={x} cy="232" rx="62" ry="6" fill="#f1dcae" opacity=".85" />
    </motion.g>
  );
  return (
    <svg viewBox="-12 0 444 520" className="h-full w-full drop-shadow-[0_20px_50px_rgba(185,138,62,.25)]" role="img" aria-label="Balance scale">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1dcae" />
          <stop offset=".45" stopColor="#b98a3e" />
          <stop offset="1" stopColor="#6f4f1c" />
        </linearGradient>
      </defs>
      {/* base */}
      <path d="M130 500 h160 l-14 -26 h-132 z" fill={gold} />
      <rect x="150" y="452" width="120" height="22" rx="3" fill={gold} />
      <rect x="196" y="120" width="28" height="334" rx="6" fill={gold} />
      <rect x="190" y="400" width="40" height="10" rx="3" fill="#f1dcae" opacity=".7" />
      {/* finial */}
      <path d="M210 14 l9 28 h-18 z" fill="#f1dcae" />
      <circle cx="210" cy="52" r="9" fill={gold} />
      <rect x="198" y="64" width="24" height="14" rx="3" fill={gold} />
      {/* beam + pans */}
      <motion.g style={{ transformOrigin: "210px 92px" }} animate={{ rotate: [-3.5, 3.5, -3.5] }} transition={sway}>
        <path d="M60 92 Q135 70 210 88 Q285 70 360 92 Q285 84 210 98 Q135 84 60 92 Z" fill={gold} />
        <circle cx="60" cy="92" r="6" fill="#f1dcae" />
        <circle cx="360" cy="92" r="6" fill="#f1dcae" />
      </motion.g>
      <circle cx="210" cy="92" r="11" fill="#1e0a14" stroke={gold} strokeWidth="3" />
      <Pan x={60} dir={-1} />
      <Pan x={360} dir={1} />
    </svg>
  );
}

export default function ThankYou() {
  const [ref, setRef] = useState("");
  useEffect(() => {
    setRef("AL-" + Math.random().toString(36).slice(2, 8).toUpperCase());
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-950 px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,#3b1527_0%,#1e0a14_45%,#12060c_80%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:repeating-linear-gradient(115deg,transparent_0_70px,rgba(185,138,62,.05)_70px_71px)]" />
      {/* gold corner lines (top-left / bottom-right) */}
      <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease }} className="pointer-events-none absolute -left-10 top-16 h-px w-72 -rotate-45 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.2, ease }} className="pointer-events-none absolute -left-16 top-28 h-px w-56 -rotate-45 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <motion.span initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease }} className="pointer-events-none absolute -right-10 bottom-16 h-px w-72 -rotate-45 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* rising gold dust */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -520], opacity: [0, 0.8, 0] }}
          transition={{ duration: 8 + (i % 6) * 1.5, repeat: Infinity, delay: i * 0.55, ease: "linear" }}
          style={{ left: `${(i * 37 + 8) % 100}%`, bottom: `${(i * 13) % 30}%`, width: 2 + (i % 3), height: 2 + (i % 3) }}
          className="pointer-events-none absolute rounded-full bg-gold-300"
        />
      ))}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-13rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        {/* left: content */}
        <motion.div variants={stagger(0.13, 0.1)} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-gold-400/70 bg-gold-400/10 text-gold-400">
              <motion.span aria-hidden animate={{ scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} className="absolute inset-0 rounded-full border border-gold-400" />
              <motion.span initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 220, damping: 12, delay: 0.3 }}><Check size={18} strokeWidth={3} /></motion.span>
            </span>
            <span className="eyebrow">Brief received</span>
            {ref && <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-widest text-white/50">REF · {ref}</span>}
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 font-title text-6xl font-semibold leading-[1.02] text-[#f8f1e7] sm:text-7xl lg:text-8xl">
            {"Thank".split("").map((c, k) => (
              <motion.span key={k} initial={{ opacity: 0, y: 40, scale: 1.4 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3 + k * 0.08, duration: 0.7, ease }} className="inline-block">{c}</motion.span>
            ))}{" "}
            {"You".split("").map((c, k) => (
              <motion.span key={k} initial={{ opacity: 0, y: 40, scale: 1.4 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8 + k * 0.1, duration: 0.7, ease }} className="shimmer-text inline-block">{c}</motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 font-title text-2xl font-light text-white/80 sm:text-3xl">
            Empowering Clients With <Typewriter words={["Supreme Court Advocates", "Corporate Counsel", "Litigation Strategists", "Arbitration Counsel"]} className="text-gold-300" />
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4">
            <span className="h-[2px] w-14 bg-gold-400" />
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold-300/90 sm:text-xs">Uncompromising Legal Advocacy &amp; Strategic Defense</p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={thanks.href} className="btn-gold"><ArrowLeft size={16} />{thanks.button}</Link>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-ghost"><Phone size={15} />{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hidden items-center gap-2 text-sm text-white/55 transition hover:text-gold-300 sm:inline-flex"><Mail size={15} />{site.email}</a>
          </motion.div>
        </motion.div>

        {/* right: scale */}
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease, delay: 0.2 }} className="relative order-1 mx-auto h-[300px] w-full max-w-[360px] sm:h-[420px] lg:order-2 lg:h-[560px] lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[100px]" />
          <Scale />
        </motion.div>
      </div>
    </section>
  );
}
