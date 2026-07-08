"use client";

import { motion } from "framer-motion";
import { GENRES } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { clipReveal, staggerContainer, viewportOnce } from "@/animations/variants";
import { cn } from "@/lib/utils";

export default function Genres() {
  return (
    <section id="generos" className="relative bg-graphite/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="DISTORTION"
          eyebrow="Ramificações"
          title="Uma árvore de distorção"
          description="O rock nunca foi um só. Cada galho tem sua estética, sua tribo e seu volume."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {GENRES.map((genre, i) => (
            <motion.article
              key={genre.name}
              variants={clipReveal}
              data-cursor
              className={cn(
                "group relative overflow-hidden rounded-card border border-white/8 bg-void p-7 shadow-card transition-colors duration-500 hover:border-white/20",
                i % 3 === 0 && "sm:row-span-1"
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-100",
                  genre.gradient
                )}
              />
              <span
                aria-hidden
                className="display absolute -right-2 -top-5 text-8xl text-white/[0.04] transition-all duration-500 group-hover:text-white/[0.08]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <span className="display text-[10px] tracking-[0.3em] text-white/40">
                  {genre.era}
                </span>
                <h3 className="display mt-2 w-fit bg-gradient-to-r from-blood to-gold bg-no-repeat pb-1 text-2xl text-white transition-all duration-500 [background-position:0_100%] [background-size:0%_2px] group-hover:translate-x-1 group-hover:[background-size:100%_2px]">
                  {genre.name}
                </h3>
                <p className="mt-3 min-h-[3.5rem] text-sm text-smoke">{genre.description}</p>
                <p className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/45">
                  {genre.bands.join(" · ")}
                  <span
                    aria-hidden
                    className="-translate-x-2 text-base text-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
