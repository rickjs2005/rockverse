"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
}

export default function MagneticButton({
  children,
  href = "#",
  variant = "solid",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "display group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm tracking-widest transition-colors duration-300",
        variant === "solid" &&
          "bg-blood text-white glow-red hover:bg-ember",
        variant === "ghost" &&
          "border border-white/25 text-white backdrop-blur-sm hover:border-gold hover:text-gold",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "solid" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-flame to-gold transition-transform duration-500 ease-out group-hover:translate-x-0" />
      )}
    </motion.a>
  );
}
