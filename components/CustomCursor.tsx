"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [big, setBig] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.25 });

  useEffect(() => {
    setMounted(true);
    let touchTimer: NodeJS.Timeout;

    const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      x.set(clientX);
      y.set(clientY);
      setVisible(true);
      const isInteractive = !!(target as HTMLElement)?.closest?.(
        "a, button, input, select, textarea, [role='button'], label"
      );
      setBig(isInteractive);
    };

    // Pointer & Mouse move handles mouse, pen, and touch emulation
    const handlePointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    // Touch events for mobile/small screen devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        clearTimeout(touchTimer);
        updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        clearTimeout(touchTimer);
        updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    };

    const handleTouchEnd = () => {
      touchTimer = setTimeout(() => {
        setVisible(false);
      }, 600);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(touchTimer);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          scale: big ? 2.3 : 1,
          opacity: big ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_0_1.5px_#12060c,0_0_0_3px_rgba(255,255,255,0.9)]"
      />
    </motion.div>
  );
}
