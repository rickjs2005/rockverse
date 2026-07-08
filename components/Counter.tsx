"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = Math.round(latest).toLocaleString("pt-BR");
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      <span className="text-fire">{suffix}</span>
    </span>
  );
}
