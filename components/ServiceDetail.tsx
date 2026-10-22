"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { serviceDetails, services, site, slugify } from "@/data/data";
import { fadeLeft, fadeRight, fadeUp, stagger } from "@/lib/variants";
import Icon from "./ui/Icon";
import Img from "./ui/Img";
import Reveal from "./ui/Reveal";

export default function ServiceDetail({ slug }: { slug: string }) {
  const item = services.items.find((s) => slugify(s.title) === slug)!;
  const d = serviceDetails[slug];

  return (
    <section className="section-pad bg-cream">
      <div className="container-x grid gap-8 lg:gap-12 lg:grid-cols-[1.7fr_1fr] min-w-0 w-full">
        <div className="min-w-0 w-full">
          <Reveal variants={fadeLeft}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Img src={item.image.replace("w=900", "w=1600")} alt={item.title} priority sizes="(max-width:1024px) 100vw, 65vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <span className="absolute bottom-5 left-5 grid h-16 w-16 place-items-center rounded-2xl bg-gold-400 text-ink shadow-lg">
                <Icon name={item.icon} size={30} />
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <h2 className="section-title">{item.title} Overview</h2>
            <p className="mt-5 leading-relaxed text-forest-800/75">{d.overview}</p>
          </Reveal>

          {/* Section 1: What's Included */}
          <div className="mt-12 sm:mt-14 rounded-3xl border border-forest-900/10 bg-white/60 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-forest-900/10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Deliverables &amp; Scope</span>
                <h3 className="font-title text-xl sm:text-2xl font-bold text-forest-950 mt-0.5">What&apos;s Included</h3>
              </div>
              <span className="text-xs font-semibold text-forest-900/60 bg-cream px-3 py-1 rounded-full border border-forest-900/10">
                {d.features.length} Scope Items
              </span>
            </div>

            <motion.ul variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
              {d.features.map((f) => (
                <motion.li key={f} variants={fadeUp} className="group/item flex items-start gap-3.5 rounded-2xl bg-white p-4 text-xs sm:text-sm font-semibold text-forest-900 shadow-sm border border-forest-900/10 transition-all duration-300 hover:border-gold-500/40 hover:shadow-md hover:bg-white">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400 text-ink transition-colors duration-300 group-hover/item:bg-forest-900 group-hover/item:text-gold-400 mt-0.5 shadow-sm">
                    <CheckCircle2 size={15} />
                  </span>
                  <span className="leading-snug pt-0.5">{f}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Strategic Advantages / Benefits */}
          <div className="mt-8">
            <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-3">
              {d.benefits.map((b) => (
                <motion.div key={b.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl bg-forest-900 p-5 sm:p-6 text-white shadow-xl border border-gold-400/20">
                  <h4 className="font-title text-lg font-semibold text-gold-300">{b.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section 2: How It Works (2 rows x 2 columns) */}
          <div className="mt-10 rounded-3xl border border-forest-900/10 bg-white/60 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-forest-900/10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Structured Engagement</span>
                <h3 className="font-title text-xl sm:text-2xl font-bold text-forest-950 mt-0.5">How It Works</h3>
              </div>
              <span className="text-xs font-semibold text-forest-900/60 bg-cream px-3 py-1 rounded-full border border-forest-900/10">
                4 Stage Process
              </span>
            </div>

            {/* 2 Rows x 2 Columns Grid */}
            <ol className="list-none mt-6 grid gap-4 sm:grid-cols-2">
              {d.steps.map((s, i) => (
                <li
                  key={s}
                  className="group flex items-center gap-4 rounded-2xl border border-forest-900/10 bg-white p-4.5 sm:p-5 shadow-sm transition-all duration-300 hover:border-gold-500/40 hover:shadow-md hover:bg-white"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-400 font-title text-base font-bold text-ink shadow-sm transition-colors duration-300 group-hover:bg-forest-900 group-hover:text-gold-400">
                    {i + 1}
                  </span>
                  <span className="font-title text-sm sm:text-base font-semibold text-forest-950 leading-snug">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Sticky Sidebar Column */}
        <aside className="min-w-0 w-full lg:sticky lg:top-24 xl:top-28 lg:self-start">
          <div className="space-y-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-lg shadow-forest-900/5 border border-forest-900/10">
              <h3 className="font-title text-xl font-semibold text-forest-950">All Practice Areas</h3>
              <ul className="mt-4 space-y-2">
                {services.items.map((s) => {
                  const on = slugify(s.title) === slug;
                  return (
                    <li key={s.title}>
                      <Link
                        href={`/practice-areas/${slugify(s.title)}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          on
                            ? "bg-forest-900 text-gold-300 shadow-md shadow-forest-950/20"
                            : "bg-cream text-forest-900 hover:bg-gold-400/25 hover:text-forest-950"
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <span className="shrink-0 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grain relative overflow-hidden rounded-2xl sm:rounded-3xl bg-forest-900 p-6 sm:p-7 text-white shadow-xl">
              <h3 className="font-title text-xl sm:text-2xl font-semibold text-white">Need Counsel In {item.title}?</h3>
              <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                Consult with a Senior Advocate for strategic advice and courtroom defense under statutory privilege.
              </p>
              <Link href="/book-a-consultation" className="btn-gold mt-6 w-full text-center">
                Schedule Consultation
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gold-300 hover:text-white transition"
              >
                <Phone size={14} className="text-gold-400" /> {site.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
