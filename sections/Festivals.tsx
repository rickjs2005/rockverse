"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FESTIVALS } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import type { Festival } from "@/types";

function FestivalCard({ festival, index }: { festival: Festival; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      data-cursor
      className="group relative h-[70vh] min-h-[480px] overflow-hidden rounded-panel shadow-lift"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[15%] inset-x-0">
        <Image
          src={festival.image}
          alt={`Festival ${festival.name}`}
          fill
          sizes="(max-width: 1024px) 100vw, 90vw"
          className="img-grade object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/10" />

      <div className="absolute inset-x-0 bottom-0 grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
        <div>
          <span className="display text-xs tracking-[0.35em] text-gold">
            {festival.location} · {festival.year}
          </span>
          <h3 className="display mt-2 text-5xl text-white sm:text-6xl lg:text-7xl">
            {festival.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
            {festival.history}
          </p>
          <p className="mt-4 max-w-2xl rounded-xl border border-white/15 bg-black/40 p-4 text-xs text-white/70 backdrop-blur-md md:text-sm">
            <span className="display mr-2 tracking-[0.25em] text-flame">Curiosidade</span>
            {festival.fact}
          </p>
        </div>
        <span
          aria-hidden
          className="display hidden text-8xl text-white/10 md:block lg:text-9xl"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
}

export default function Festivals() {
  return (
    <section id="festivais" className="relative bg-void py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
        <SectionHeading
          ghost="AO VIVO"
          eyebrow="Peregrinação"
          title="Templos ao ar livre"
          description="Lugares onde multidões viram uma coisa só. Quatro festivais que definiram o que é estar em um show."
        />
        <div className="space-y-10">
          {FESTIVALS.map((festival, i) => (
            <FestivalCard key={festival.name} festival={festival} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
