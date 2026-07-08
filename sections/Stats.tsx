"use client";

import { motion } from "framer-motion";
import { STATS } from "@/constants/data";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-void py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,6,0,0.07),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="SETLIST"
          eyebrow="Em números"
          title="O rock em escala"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] lg:p-10"
            >
              <span
                aria-hidden
                className="display absolute right-6 top-6 text-xs text-white/25"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display block text-6xl text-white lg:text-7xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="mt-4 block text-sm tracking-wide text-smoke">
                {stat.label}
              </span>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blood to-gold transition-all duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
