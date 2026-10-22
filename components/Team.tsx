"use client";
import Image from "next/image";
import { team } from "@/data/data";
import SectionHead from "./ui/SectionHead";

export default function Team() {
  const members = team.members;

  return (
    <section id="team" className="section-pad relative overflow-hidden bg-[#12060c] text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-[140px]" />

      <div className="container-x relative">
        <SectionHead eyebrow="Chambers Gallery" title="Chambers Leadership" light center />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 w-full">
          {members.map((m, idx) => {
            const isSecondRow = idx >= 4;
            return (
              <div
                key={m.id}
                className={`group relative aspect-[3/4.2] sm:aspect-[3/4.5] w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] lg:max-w-none mx-auto overflow-hidden transition-all duration-500 border border-white/15 hover:border-gold-400/70 hover:scale-[1.02] hover:shadow-2xl rounded-t-[999px] rounded-b-2xl ${
                  isSecondRow
                    ? "lg:rounded-b-[999px] lg:rounded-t-2xl"
                    : "lg:rounded-t-[999px] lg:rounded-b-2xl"
                }`}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Overlay: Always visible on mobile/tablet for legibility, hover on desktop */}
                <div
                  className={`absolute inset-x-0 bottom-0 pointer-events-none opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                    isSecondRow
                      ? "h-40 bg-gradient-to-t from-[#12060c] via-[#12060c]/85 to-transparent lg:rounded-b-[999px] rounded-b-2xl"
                      : "h-36 bg-gradient-to-t from-[#12060c] via-[#12060c]/85 to-transparent rounded-b-2xl"
                  }`}
                />

                {/* Top Experience Pill - Centered at dome apex so arch curve never cuts or clips it */}
                <span className="absolute top-4 sm:top-4.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full bg-[#12060c]/85 backdrop-blur-md px-3 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-gold-300 border border-gold-400/35 shadow-lg transition-transform duration-300 group-hover:scale-105 pointer-events-none">
                  {m.experience}
                </span>

                {/* Text details: Always visible on touch/mobile, reveals on hover on desktop */}
                <div
                  className={`absolute z-20 text-white opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 pointer-events-none ${
                    isSecondRow
                      ? "bottom-4 left-4 right-4 text-center px-1 lg:bottom-11"
                      : "bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-left"
                  }`}
                >
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400 block">
                    {m.role}
                  </span>
                  <h4 className="font-title text-base sm:text-lg lg:text-xl font-bold leading-tight text-white group-hover:text-gold-300 transition-colors mt-0.5 sm:mt-1">
                    {m.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5 sm:mt-1 font-medium">
                    {m.specialty}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
