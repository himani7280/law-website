"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Lock, Phone, Scale, Send, ShieldCheck } from "lucide-react";
import { quote, site } from "@/data/data";
import { fadeLeft, fadeRight } from "@/lib/variants";
import Img from "./ui/Img";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";

const field =
  "w-full rounded-xl border border-forest-900/15 bg-white px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export default function Quote() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/thank-you");
  }, [router]);

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
      <div className="container-x grid items-start gap-10 lg:gap-14 lg:grid-cols-2">
        {/* Left Column: Heading, Consultation Image, and Chambers Contact Card */}
        <Reveal variants={fadeLeft} className="w-full">
          <SectionHead eyebrow={quote.eyebrow} title={quote.title} text={quote.text} className="mb-6 sm:mb-8 w-full text-left" />

          <div className="relative aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] w-full overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-4 border-gold-400/40 shadow-2xl bg-forest-950">
            <Img
              src={quote.image || "/consultation-chambers.webp"}
              alt="Veyra Legal consultation room and advocate chambers"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="inline-block rounded-full bg-gold-400/20 border border-gold-400/40 px-3 py-1 text-[11px] font-semibold text-gold-300">
                In-Person &amp; Virtual Consultations
              </span>
              <p className="mt-1 font-title text-sm sm:text-base font-semibold">Chambers at Supreme Court &amp; High Court Bar</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-forest-900/10 bg-white/70 p-4 sm:p-5 shadow-sm backdrop-blur-md flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-forest-900/60 uppercase tracking-wider">Direct Chambers Hotline</p>
              <a
                className="font-title text-lg sm:text-xl font-bold text-forest-950 hover:text-gold-600 transition"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                {site.phone}
              </a>
            </div>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-900 text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition shadow-md"
              aria-label="Call Chambers"
            >
              <Phone size={19} />
            </a>
          </div>
        </Reveal>

        {/* Right Column: Direct Consultation Form */}
        <Reveal variants={fadeRight} className="w-full">
          <div className="rounded-[2rem] border border-forest-900/10 bg-white p-4 sm:p-8 lg:p-8 shadow-2xl shadow-forest-900/10">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <h3 className="font-title text-2xl font-bold text-forest-900 sm:text-3xl">
                  Schedule Consultation
                </h3>
                <p className="mt-1 text-xs text-forest-800/70">
                  All communications are strictly protected under attorney-client privilege.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div>
                  <label className="text-xs font-semibold text-forest-900">Full Name *</label>
                  <input
                    required
                    name="name"
                    placeholder="Authorized Signatory / Full Name"
                    className={`mt-1.5 ${field}`}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-forest-900">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+1 (212) 555-0198"
                    className={`mt-1.5 ${field}`}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-forest-900">Official Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="counsel@entity.com"
                    className={`mt-1.5 ${field}`}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-forest-900">Practice Domain *</label>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className={`mt-1.5 ${field} text-forest-900 cursor-pointer`}
                  >
                    <option value="" disabled>Select Practice Domain</option>
                    {quote.services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-forest-900">Organization / Corporate Entity</label>
                <input
                  name="organization"
                  placeholder="Company Name (Optional)"
                  className={`mt-1.5 ${field}`}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-forest-900">
                  Confidential Matter Brief &amp; Relief Sought *
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Provide a succinct confidential summary of facts, dispute, or legal counsel required..."
                  className={`mt-1.5 ${field}`}
                />
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-gold-500/20 bg-gold-400/10 p-3 text-xs text-forest-900/80">
                <Lock size={15} className="shrink-0 text-gold-600" />
                <span>Protected by Attorney-Client Confidentiality. Encrypted transmission.</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="btn-gold w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-forest-950 shadow-lg shadow-gold-500/25 disabled:opacity-70"
                >
                  {busy ? "Redirecting to Confirmation..." : "Submit Consultation Request"} <Send size={15} />
                </button>
              </div>
            </form>
          </div>
        </Reveal>

        {/* Consultation Guarantees & Alignment Strip: Spans full container width across columns */}
        <div className="lg:col-span-2 -mt-3 sm:-mt-4 lg:-mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold-500/60 hover:shadow-md hover:bg-white">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-900 text-gold-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-ink">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-xs font-bold text-forest-950 group-hover:text-gold-600 transition-colors">Statutory Privilege</p>
              <p className="text-[11px] text-forest-900/85 mt-0.5 leading-relaxed font-medium">Sec 126 Evidence Act confidential protection</p>
            </div>
          </div>

          <div className="group flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold-500/60 hover:shadow-md hover:bg-white">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-900 text-gold-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-ink">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-xs font-bold text-forest-950 group-hover:text-gold-600 transition-colors">24h Case Review</p>
              <p className="text-[11px] text-forest-900/85 mt-0.5 leading-relaxed font-medium">Rapid turnaround for urgent court mentionings</p>
            </div>
          </div>

          <div className="group flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-white/90 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold-500/60 hover:shadow-md hover:bg-white">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-900 text-gold-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-400 group-hover:text-ink">
              <Scale size={20} />
            </span>
            <div>
              <p className="text-xs font-bold text-forest-950 group-hover:text-gold-600 transition-colors">Senior Advocate Review</p>
              <p className="text-[11px] text-forest-900/85 mt-0.5 leading-relaxed font-medium">Appellate merits &amp; strategic forum guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
