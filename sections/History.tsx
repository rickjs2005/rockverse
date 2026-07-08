"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { DECADES } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import type { Decade } from "@/types";

function DecadeCard({ decade, index }: { decade: Decade; index: number }) {
  const left = index % 2 === 0;
  const reduceMotion = useReducedMotion();

  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yearX = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative grid items-start gap-6 md:grid-cols-2 md:gap-14",
        !left && "md:[direction:rtl]"
      )}
    >
      <motion.span
        aria-hidden
        whileInView={reduceMotion ? undefined : { scale: [1, 1.6, 1] }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[7px] top-2 hidden h-4 w-4 rounded-full border-2 border-void bg-gradient-to-br from-blood to-gold md:left-1/2 md:block md:-translate-x-1/2"
        style={{ x: "-50%", boxShadow: `0 0 18px ${decade.accent}88` }}
      />

      <motion.div
        initial={{ opacity: 0, x: left ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="group relative aspect-[3/2] overflow-hidden rounded-card shadow-card [direction:ltr] md:sticky md:top-28"
      >
        <motion.div
          style={{ y: reduceMotion ? 0 : imageY }}
          className="absolute -inset-y-[10%] inset-x-0"
        >
          <Image
            src={decade.image}
            alt={`Década de ${decade.years} — ${decade.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="img-grade object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
        <motion.span
          style={{
            x: reduceMotion ? 0 : yearX,
            color: decade.accent,
            textShadow: `0 0 40px ${decade.accent}66`,
          }}
          className="display absolute bottom-4 left-5 text-7xl leading-none opacity-90 sm:text-8xl"
        >
          {decade.years}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: left ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="[direction:ltr]"
      >
        <h3 className="display text-3xl text-white sm:text-4xl">{decade.title}</h3>
        <p className="mt-4 text-smoke">{decade.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {decade.artists.map((artist) => (
            <span
              key={artist}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {artist}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2 border-l-2 pl-4 text-sm text-white/70" style={{ borderColor: `${decade.accent}66` }}>
          {decade.events.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-white/10 bg-graphite/80 p-4">
          <span className="display text-[10px] tracking-[0.3em] text-gold">Você sabia?</span>
          <p className="mt-2 text-sm text-white/75">{decade.fact}</p>
        </div>

        <p className="mt-4 text-xs text-white/40">
          Álbuns essenciais: {decade.albums.join(" · ")}
        </p>
      </motion.div>
    </div>
  );
}

export default function History() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="historia" className="relative bg-void py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="1951—2026"
          eyebrow="Linha do tempo"
          title="Sete décadas de barulho"
          description="De Chuck Berry ao streaming: cada década reinventou o rock à sua maneira — e deixou cicatrizes gloriosas na cultura."
        />

        <div ref={ref} className="relative space-y-16 md:space-y-24">
          <div
            aria-hidden
            className="absolute left-[14px] top-0 hidden h-full w-0.5 bg-white/10 md:left-1/2 md:block md:-translate-x-1/2"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-[14px] top-0 hidden h-full w-0.5 origin-top bg-gradient-to-b from-gold via-flame to-blood md:left-1/2 md:block md:-translate-x-1/2"
          />
          {DECADES.map((decade, i) => (
            <DecadeCard key={decade.id} decade={decade} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
