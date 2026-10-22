"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { process } from "@/data/data";
import SectionHead from "./ui/SectionHead";

const flipIn = {
  hidden: { rotateY: 180 },
  show: (i: number) => ({ rotateY: 0, transition: { duration: 1.1, delay: 0.25 + i * 0.22, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function Process() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <SectionHead eyebrow={process.eyebrow} title={process.title} center />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="relative grid gap-8 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {process.steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={flipIn}
              custom={i}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative h-[22rem] rounded-3xl shadow-xl shadow-forest-900/10"
            >
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* front – content over photo */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]">
                <Image src={s.image} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/75 to-ink/45" />
                <div className="relative flex h-full flex-col justify-end p-7 text-white">
                  <span className="absolute left-7 top-6 font-title text-6xl font-bold text-gold-400">{s.n}</span>
                  <span className="mb-4 h-[2px] w-10 bg-gold-400" />
                  <h3 className="font-title text-2xl font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{s.text}</p>
                </div>
              </div>

              {/* back – clean photo; shows on hover and while the card flips in */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image src={s.image} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/30" />
                <div className="relative flex h-full flex-col items-center justify-center p-7 text-center text-white">
                  <span className="font-title text-8xl font-bold text-gold-400">{s.n}</span>
                  <span className="my-4 h-[2px] w-14 bg-gold-400" />
                  <h3 className="font-title text-2xl font-semibold leading-snug">{s.title}</h3>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
