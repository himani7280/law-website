"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/data";
import { fadeLeft, fadeRight, fadeUp, stagger } from "@/lib/variants";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

const items = [
  { Icon: Phone, label: "Call Us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { Icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}` },
  { Icon: MapPin, label: "Chambers Location", value: site.address, href: "#map" },
];

const field =
  "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export default function Contact() {
  const router = useRouter();
  useEffect(() => { router.prefetch("/thank-you"); }, [router]);
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    router.push("/thank-you");
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 250);
  };

  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <Reveal variants={fadeLeft} className="h-full">
            <div className="flex flex-col justify-between h-full">
              <SectionHead
                eyebrow="Contact Chambers"
                title={"Confidential\nConsultation"}
                text="Facing high-stakes commercial litigation, regulatory scrutiny, or complex corporate transactions? Reach out directly and our Senior Advocates will review your brief."
                className="mb-6 sm:mb-8"
              />
              <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-3.5 sm:grid-cols-1">
                {items.map(({ Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="group flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-4.5 sm:p-5 transition-colors hover:border-gold-500 hover:shadow-lg hover:shadow-gold-500/10"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-900 text-gold-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-ink shadow-sm">
                      <Icon size={20} />
                    </span>
                    <div className="overflow-hidden">
                      <h3 className="text-base font-semibold text-forest-950 transition-colors duration-300 group-hover:text-gold-600">{label}</h3>
                      <p className="mt-0.5 break-words text-sm text-forest-900/85 leading-relaxed font-medium">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </Reveal>

          <Reveal variants={fadeRight} className="h-full">
            <form onSubmit={submit} className="h-full flex flex-col justify-between space-y-3.5 rounded-3xl bg-white p-6 shadow-xl shadow-forest-900/10 sm:p-8 border border-forest-900/10">
              <div>
                <h3 className="font-title text-2xl font-bold text-forest-900">Send Us A Message</h3>
                <p className="text-xs text-forest-800/70 mt-1">All inquiries are reviewed under strict attorney-client privilege.</p>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2 pt-1">
                <input required name="name" placeholder="Full Name" className={field} />
                <input required type="tel" name="phone" placeholder="Phone Number" className={field} />
              </div>
              <input required type="email" name="email" placeholder="Email Address" className={field} />
              <input name="subject" placeholder="Matter Subject (e.g. Litigation, Corporate Advisory)" className={field} />
              <textarea required name="message" rows={4} placeholder="Brief description of the matter..." className={field} />
              <button type="submit" disabled={busy} className="btn-gold w-fit px-8 disabled:opacity-70 mt-2">
                {busy ? "Sending..." : "Send Confidential Message"} <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>

        {/* Themed USA Map Section */}
        <div id="map" className="mt-16 overflow-hidden rounded-3xl border-2 border-gold-400/40 bg-ink shadow-2xl">
          {/* Map Header Bar styled to match theme */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-400/20 bg-forest-900 px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-ink">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-title text-base font-bold text-gold-300">Veyra Legal Chambers · New York</p>
                <p className="text-xs text-white/70">{site.address}</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=1221+Avenue+of+the+Americas,+New+York,+NY+10020"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold text-gold-300 transition hover:bg-gold-400 hover:text-ink"
            >
              Open in Maps <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Map iframe with theme-matching color filter */}
          <div className="relative h-[360px] w-full overflow-hidden bg-[#12060c]">
            <iframe
              title="Veyra Legal New York Office"
              src="https://maps.google.com/maps?q=1221+Avenue+of+the+Americas,+New+York,+NY+10020&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 transition duration-700"
              style={{
                filter: "invert(92%) hue-rotate(180deg) brightness(85%) contrast(125%) saturate(160%) sepia(35%)",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
