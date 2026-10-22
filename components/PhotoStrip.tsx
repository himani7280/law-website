"use client";
import Image from "next/image";
import { photoStrip } from "@/data/data";

/* Endless horizontal strip of photos with captions */
export default function PhotoStrip() {
  const list = [...photoStrip, ...photoStrip];
  return (
    <div className="overflow-hidden bg-ink py-3">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {list.map((p, i) => (
          <figure key={i} className="group relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96">
            <Image src={p.src} alt={p.label} fill quality={80} sizes="400px" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 font-title text-xl font-semibold text-white">{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
