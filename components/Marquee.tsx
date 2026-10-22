import { marquee } from "@/data/data";

export default function Marquee() {
  const list = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden bg-gold-400 py-4 sm:py-5 border-y border-gold-600/30 shadow-inner">
      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12">
        {list.map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-8 sm:gap-12 whitespace-nowrap font-title text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-ink"
          >
            <span>{m}</span>
            <span className="text-ink/60 text-xl sm:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}


