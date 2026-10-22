"use client";
import { useEffect, useState } from "react";

/* Types a word letter by letter, pauses, deletes, then moves to the next one. */
export default function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && n < w.length) t = setTimeout(() => setN(n + 1), 85);
    else if (!del) t = setTimeout(() => setDel(true), 1400);
    else if (n > 0) t = setTimeout(() => setN(n - 1), 45);
    else { setDel(false); setI((i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [n, del, i, words]);

  return (
    <span className={className}>
      {words[i].slice(0, n)}
      <span className="ml-0.5 inline-block w-[2px] translate-y-[2px] animate-pulse bg-gold-400">&nbsp;</span>
    </span>
  );
}
