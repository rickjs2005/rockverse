"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  ghost?: string;
  tone?: "dark" | "light";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  ghost,
  tone = "dark",
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "relative mb-14 flex flex-col gap-4 md:mb-20",
        align === "center" && "items-center text-center"
      )}
    >
      {ghost && (
        <span
          aria-hidden
          className={cn(
            "display pointer-events-none absolute select-none whitespace-nowrap leading-none",
            "hidden md:block md:-top-14 md:text-9xl lg:text-[12rem]",
            light ? "text-ghost-dark" : "text-ghost",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2"
          )}
        >
          {ghost}
        </span>
      )}
      <motion.span
        variants={fadeUp}
        className={cn(
          "display flex items-center gap-3 text-xs tracking-[0.35em]",
          light ? "text-blood" : "text-gold"
        )}
      >
        <span className="h-px w-10 bg-gradient-to-r from-blood to-gold" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className={cn(
          "display max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl",
          light ? "text-ink" : "text-white"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-xl text-base md:text-lg",
            light ? "text-ink/65" : "text-smoke"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
