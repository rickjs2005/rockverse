"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BANDS } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { tiltIn, staggerContainer, viewportOnce } from "@/animations/variants";
import type { Band } from "@/types";

function BandCard({ band }: { band: Band }) {
  return (
    <motion.article
      variants={tiltIn}
      data-cursor
      className="group relative aspect-[3/4] overflow-hidden rounded-card border border-white/5 bg-graphite shadow-card"
    >
      <Image
        src={band.image}
        alt={`Banda ${band.name}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="img-grade object-cover opacity-70 grayscale-[0.7] transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0"
      />
      <span
        aria-hidden
        className="display absolute right-4 top-4 rotate-6 rounded-sm border px-2 py-1 text-[10px] tracking-widest opacity-70 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100"
        style={{ borderColor: `${band.accent}88`, color: band.accent }}
      >
        EST. {band.year}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse at bottom, ${band.accent}33, transparent 65%)` }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="display text-[10px] tracking-[0.3em]" style={{ color: band.accent }}>
          {band.genre} · {band.year}
        </span>
        <h3 className="display mt-1 text-3xl text-white">{band.name}</h3>
        <p className="mt-1 text-xs text-white/50">{band.country}</p>

        <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-48 group-hover:opacity-100">
          <p className="text-xs leading-relaxed text-white/70">
            {band.members.join(" · ")}
          </p>
          <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/50">
            Essenciais: {band.albums.join(" · ")}
          </p>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(to right, ${band.accent}, transparent)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${band.accent}14 50%, transparent 60%)`,
        }}
      />
    </motion.article>
  );
}

export default function Bands() {
  return (
    <section id="bandas" className="relative bg-graphite/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="ÍDOLOS"
          eyebrow="Panteão"
          title="As bandas que viraram religião"
          description="Oito nomes que transformaram acordes em legado — e shows em rituais coletivos."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BANDS.map((band) => (
            <BandCard key={band.name} band={band} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
