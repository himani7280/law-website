"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { footer, site } from "@/data/data";

const socialIcons: Record<string, typeof Facebook> = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
  YouTube: Youtube,
};

export default function Footer() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#12060c] text-white">
      {/* Background ambient lighting & subtle textures */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[700px] rounded-full bg-gold-500/10 blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      {/* Main Footer Container */}
      <div className="container-x relative py-6 sm:py-7">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-stretch">
          
          {/* 1. Left Column: Brand Logo (Shifted right to align with Header Logo) */}
          <div className="lg:col-span-4 flex items-center justify-start self-center pl-1 sm:pl-6 lg:pl-8">
            <Link href="/" aria-label={`${site.name} home`} className="inline-block group">
              <Image
                src={site.logo}
                alt={`${site.name} - ${site.tagline}`}
                width={280}
                height={80}
                className="h-10 sm:h-12 md:h-13 lg:h-11 xl:h-[3.65rem] w-auto max-w-[150px] sm:max-w-[220px] lg:max-w-[170px] xl:max-w-[290px] object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* 2. Middle Column: Quick Links */}
          <div className="lg:col-span-4 flex flex-col">
            <div>
              <h4 className="font-title text-base sm:text-[1.15rem] font-semibold text-white tracking-wide">Quick Links</h4>
              <div className="mt-2 h-[2.5px] w-10 bg-gold-400 rounded-full" />
            </div>
            <ul className="mt-3.5 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-2.5">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] sm:text-sm text-white/80 transition duration-200 hover:text-gold-300 hover:translate-x-1 py-0.5"
                  >
                    <ChevronRight size={13} className="text-gold-400 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    <span className="truncate">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Right Column: Our Chamber (Equally Height Aligned with Quick Links) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="font-title text-base sm:text-[1.15rem] font-semibold text-white tracking-wide">Our Chamber</h4>
              <div className="mt-2 h-[2.5px] w-10 bg-gold-400 rounded-full" />
            </div>
            
            <div className="mt-3.5 space-y-2.5 w-full flex-1 flex flex-col justify-center">
              {/* 1. Address */}
              <div className="group flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 w-full">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gold-400 text-ink mt-0.5">
                  <MapPin size={14} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400">Address</span>
                  <span className="block text-xs sm:text-[12.5px] text-white/85 leading-snug line-clamp-2" title={site.address}>{site.address}</span>
                </div>
              </div>

              {/* 2. Phone and Mail in 1 ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                {/* Phone */}
                <a
                  href={tel}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 min-w-0"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gold-400 text-ink transition-all duration-300 group-hover:scale-105">
                    <Phone size={13} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400">Phone</span>
                    <span className="block text-xs sm:text-[12.5px] font-semibold text-white/90 group-hover:text-gold-300 truncate">{site.phone}</span>
                  </div>
                </a>

                {/* Mail */}
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10 min-w-0"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gold-400 text-ink transition-all duration-300 group-hover:scale-105">
                    <Mail size={13} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400">Email</span>
                    <span className="block text-xs sm:text-[12.5px] font-semibold text-white/90 group-hover:text-gold-300 truncate">{site.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons underneath in 1 row */}
            <div className="mt-3 flex items-center gap-2.5">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label] ?? Facebook;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-8 w-8 sm:h-8.5 sm:w-8.5 place-items-center rounded-lg border border-white/15 bg-white/5 text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:text-ink hover:shadow-md hover:shadow-gold-400/20"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Bar: Copyright & Top Scroll */}
      <div className="relative border-t border-white/10 bg-black/40">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-2.5 sm:flex-row">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} {site.name} Advocates &amp; Legal Consultants. All Rights Reserved. <span className="text-white/30">|</span> Powered by Lestow
          </p>

          {/* Top Scroll Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-2 text-xs font-semibold text-gold-300 backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink hover:shadow-lg hover:shadow-gold-400/20"
          >
            <span>Back To Top</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:bg-ink group-hover:text-gold-300">
              <ArrowUp size={12} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* Floating Action Top Scroll Button (Desktop/Tablet >= 768px only, mobile has inline footer button) */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ y: -4, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:grid fixed bottom-6 right-6 z-40 h-12 w-12 place-items-center rounded-full bg-gold-400 text-ink shadow-2xl shadow-black/50 transition-colors hover:bg-gold-300"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </motion.button>
    </footer>
  );
}
