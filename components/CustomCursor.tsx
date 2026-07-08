"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]") ?? null;
      const labelValue =
        target?.closest("[data-cursor]")?.getAttribute("data-cursor") || null;
      // React bails out when the value is unchanged (Object.is), so these
      // setters only trigger a re-render when hover state / label actually change.
      setHovering(!!interactive);
      setLabel(labelValue);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 72 : hovering ? 56 : 32;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ember/70 ${
          label ? "bg-gold/10 backdrop-blur-[2px]" : ""
        }`}
        style={{ x: ringX, y: ringY }}
        animate={{
          width: size,
          height: size,
          opacity: hovering || label ? 1 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              className="display pointer-events-none select-none text-[9px] uppercase tracking-widest text-gold"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
