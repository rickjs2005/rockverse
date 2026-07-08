"use client";

import { motion } from "framer-motion";
import { INSTRUMENTS } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import InstrumentIcon from "@/components/InstrumentIcon";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";

export default function Instruments() {
  return (
    <section className="relative overflow-hidden bg-void py-24 md:py-36">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-96 w-[80vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.07),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Arsenal"
          title="As armas do palco"
          description="Cinco instrumentos, um objetivo: fazer o chão tremer."
          align="center"
          ghost="BACKLINE"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6"
        >
          {INSTRUMENTS.map((inst, i) => (
            <motion.div
              key={inst.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              data-cursor
              className="group relative rounded-card bg-gradient-to-b from-white/12 via-white/5 to-transparent p-px shadow-card"
            >
              <div className="relative flex h-full flex-col items-center gap-5 overflow-hidden rounded-[calc(var(--radius-card)-1px)] bg-graphite px-6 py-9 text-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% -10%, ${inst.accent}2e, transparent 65%)`,
                  }}
                />
                <span
                  aria-hidden
                  className="text-ghost display absolute -right-1 bottom-1 select-none text-6xl leading-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-4 rounded-full border border-white/10 transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_0_30px_var(--glow),inset_0_0_18px_var(--glow)]"
                    style={{ ["--glow" as string]: `${inst.accent}55` }}
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3.2 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative h-16 w-16 p-2 text-white/80 transition-colors duration-500 group-hover:text-white"
                    style={{ ["--glow" as string]: inst.accent }}
                  >
                    <InstrumentIcon
                      name={inst.icon}
                      className="h-full w-full transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_var(--glow)]"
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <span
                    className="display text-[10px] tracking-[0.3em]"
                    style={{ color: inst.accent }}
                  >
                    {inst.role}
                  </span>
                  <h3 className="display mt-1 text-xl text-white">{inst.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-smoke">
                    {inst.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
