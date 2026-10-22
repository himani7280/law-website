"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  to?: number;
  suffix?: string;
  prefix?: string;
  value?: string | number;
};

export default function Counter({ to, suffix = "", prefix = "", value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  let targetNumber = to ?? 0;
  let finalPrefix = prefix;
  let finalSuffix = suffix;

  if (value !== undefined) {
    if (typeof value === "number") {
      targetNumber = value;
    } else {
      const match = String(value).match(/^(.*?)([0-9]+(?:\.[0-9]+)?)(.*)$/);
      if (match) {
        finalPrefix = match[1] || prefix;
        targetNumber = parseFloat(match[2]);
        finalSuffix = match[3] || suffix;
      }
    }
  }

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, targetNumber, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, targetNumber]);

  return (
    <span ref={ref}>
      {finalPrefix}
      {val.toLocaleString("en-IN")}
      {finalSuffix}
    </span>
  );
}
