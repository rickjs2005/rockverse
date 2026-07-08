"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

function useScrollSkew() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewRaw = useTransform(velocity, [-1500, 0, 1500], [-5, 0, 5]);
  const skewX = useSpring(skewRaw, { stiffness: 200, damping: 30 });
  const reducedMotion = useReducedMotion();
  return reducedMotion ? 0 : skewX;
}

interface MarqueeDividerProps {
  words: string[];
  accent?: boolean;
}

export default function MarqueeDivider({ words, accent = false }: MarqueeDividerProps) {
  const skewX = useScrollSkew();

  return (
    <div
      aria-hidden
      className="select-none overflow-hidden whitespace-nowrap border-y border-white/5 bg-void py-5"
    >
      <motion.div style={{ skewX }}>
        <div className="animate-marquee inline-flex gap-10">
          {Array.from({ length: 2 }).map((_, block) => (
            <span key={block} className="inline-flex gap-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-10">
                  {words.map((word, w) => (
                    <span key={w} className="inline-flex items-center gap-10">
                      <span
                        className={
                          accent
                            ? "text-fire display text-3xl sm:text-4xl"
                            : "display text-3xl text-white/45 sm:text-4xl"
                        }
                      >
                        {word}
                      </span>
                      <span className={accent ? "text-white/45" : "text-blood/70"}>★</span>
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
