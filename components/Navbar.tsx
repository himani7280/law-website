"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/data/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <header className="fixed inset-x-0 top-2 sm:top-4 z-50 px-2 sm:px-4 xl:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gold-400/30 bg-ink/95 px-3 sm:px-4 xl:px-6 py-1.5 sm:py-2 text-white shadow-2xl shadow-black/25 backdrop-blur-xl">
        <Link href="/" className="flex items-center pl-0.5 sm:pl-1 xl:pl-2 shrink-0" aria-label={`${site.name} - ${site.tagline}`}>
          <Image
            src={site.logo}
            alt={`${site.name} - ${site.tagline}`}
            width={280}
            height={80}
            className="h-10 sm:h-12 md:h-13 lg:h-11 xl:h-[3.65rem] w-auto max-w-[150px] sm:max-w-[220px] lg:max-w-[170px] xl:max-w-[290px] object-contain transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0 lg:gap-0.5 xl:gap-1 lg:flex shrink min-w-0">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="relative rounded-full px-2 py-1 text-[12px] xl:px-3.5 xl:py-1.5 xl:text-sm font-medium text-white/80 transition hover:text-white whitespace-nowrap">
              {active(n.href) && (
                <span className="absolute inset-0 rounded-full bg-white/15" />
              )}
              <span className="relative">{n.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link href="/book-a-consultation" className="group hidden items-center gap-1.5 lg:gap-2 rounded-full bg-gold-400 py-1.5 pl-3 pr-1 text-xs xl:pl-4 xl:pr-1.5 xl:text-sm font-semibold text-ink transition hover:bg-gold-300 sm:flex whitespace-nowrap">
            <span>Book a Consultation</span>
            <span className="grid h-6 w-6 xl:h-7 xl:w-7 place-items-center rounded-full bg-ink text-gold-400 transition-all duration-300 group-hover:rotate-45 group-hover:bg-forest-900">
              <ArrowUpRight size={14} />
            </span>
          </Link>
          <button aria-label="Menu" onClick={() => setOpen(true)} className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold-400 hover:text-ink lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Dark Frosted Glass Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Right-Side Premium Slide Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[85vw] max-w-sm flex-col justify-between border-l border-gold-400/25 bg-[#12060c] p-6 text-white shadow-2xl overflow-y-auto sm:w-[380px]"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={200}
                  height={60}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-gold-400 hover:bg-gold-400 hover:text-ink"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Navigation Links with Refined Font Size */}
              <nav className="my-6 flex flex-1 flex-col justify-center space-y-1">
                {nav.map((n, i) => {
                  const isCurrent = active(n.href);
                  return (
                    <motion.div
                      key={n.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                    >
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-xl px-3.5 py-3 transition-colors ${
                          isCurrent
                            ? "bg-gold-400/15 text-gold-300 font-semibold border-l-2 border-gold-400"
                            : "text-white/85 hover:bg-white/5 hover:text-gold-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[11px] font-semibold text-gold-400/70 tracking-widest">0{i + 1}</span>
                          <span className="font-title text-base sm:text-lg">{n.label}</span>
                        </span>
                        <ArrowUpRight size={16} className={`transition-all ${isCurrent ? "opacity-100 text-gold-400" : "opacity-0 group-hover:opacity-100 text-gold-400"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer & Direct CTA */}
              <div className="border-t border-white/10 pt-5">
                <Link
                  href="/book-a-consultation"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full flex justify-center py-3 text-sm font-semibold"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
