import type { Variants } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export const stagger = (delay = 0.1, start = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: start } },
});

export const wordReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease } },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.1, ease } },
};

/* Cards: flip up from below while zooming in */
export const cardPop: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.82, rotateX: 28, transformPerspective: 900, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, rotateX: 0, transformPerspective: 900, filter: "blur(0px)", transition: { duration: 0.95, ease } },
};

/* Word-by-word text */
export const wordIn: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
};
