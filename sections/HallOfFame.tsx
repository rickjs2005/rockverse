"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LEGENDS } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, viewportOnce } from "@/animations/variants";

export default function HallOfFame() {
  return (
    <section className="relative bg-void py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="LENDAS"
          eyebrow="Hall da fama"
          title="Lendas nunca desafinam"
          description="Artistas que transcenderam a música e viraram mitologia moderna."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LEGENDS.map((legend, i) => (
            <motion.article
              key={legend.name}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i % 2 === 0 ? -40 : 40,
                  rotate: i % 2 === 0 ? -2 : 2,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              data-cursor
              className="group relative flex gap-5 overflow-hidden rounded-card border border-white/8 bg-graphite/70 p-6 shadow-card transition-colors duration-500 hover:border-gold/40"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[calc(var(--radius-card)-0.25rem)]">
                <Image
                  src={legend.image}
                  alt={legend.name}
                  fill
                  sizes="96px"
                  className="object-cover grayscale transition-all duration-700 [clip-path:circle(100%)] group-hover:scale-110 group-hover:grayscale-0"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 scale-[1.06] rounded-[inherit] border-2 border-gold/0 transition-all duration-500 group-hover:scale-100 group-hover:border-gold/60"
                />
              </div>
              <div>
                <span className="display text-[10px] tracking-[0.3em] text-gold">
                  {legend.role} · {legend.years}
                </span>
                <h3 className="display mt-1 text-2xl text-white">{legend.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-smoke">{legend.legacy}</p>
              </div>
              <span
                aria-hidden
                className="absolute -bottom-6 -right-2 select-none text-7xl opacity-[0.04] transition-opacity duration-500 group-hover:opacity-10"
              >
                ★
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
