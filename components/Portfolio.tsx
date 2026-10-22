"use client";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/data";
import Img from "./ui/Img";
import SectionHead from "./ui/SectionHead";

export default function Portfolio() {
  const list = portfolio.items;
  const track = [...list, ...list];

  return (
    <section className="section-pad overflow-hidden bg-cream">
      <div className="container-x">
        <div className="mb-6 sm:mb-8 text-center">
          <SectionHead eyebrow={portfolio.eyebrow} title={portfolio.title} center />
        </div>
      </div>

      {/* endless auto-sliding strip – pauses on hover */}
      <div className="group relative [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div
          className="flex w-max animate-marquee items-start group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${Math.max(list.length, 1) * 7}s` }}
        >
          {track.map((p, i) => (
            <article key={i} aria-hidden={i >= list.length} className="group/card w-[270px] shrink-0 pr-6 sm:w-[340px]">
              <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/5] bg-forest-950">
                <Img src={p.image} alt={p.title} sizes="340px" className="transition-transform duration-[1400ms] group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-forest-900 shadow-sm">{p.cat}</span>
                <span className="absolute right-4 top-4 grid h-11 w-11 -translate-y-2 place-items-center rounded-full bg-gold-400 text-ink opacity-0 transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100 hover:!bg-forest-950 hover:!text-gold-400"><ArrowUpRight size={18} /></span>
                <p className="absolute bottom-4 left-5 translate-y-3 font-semibold text-gold-300 opacity-0 transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100">{p.result}</p>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-forest-950">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

