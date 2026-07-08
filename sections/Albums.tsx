"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ALBUMS } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { scaleIn, staggerContainer, viewportOnce } from "@/animations/variants";
import type { Album } from "@/types";

function Vinyl({ album, spinning }: { album: Album; spinning?: boolean }) {
  return (
    <div
      className={`vinyl-grooves relative aspect-square w-full rounded-full bg-[#0a0a0a] shadow-[0_10px_40px_rgba(0,0,0,0.8)] ${
        spinning ? "animate-spin-slow" : ""
      }`}
    >
      <div
        className="absolute inset-[31%] rounded-full border border-black/60"
        style={{ background: album.vinyl }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <span className="display text-[7px] leading-tight text-black/80 sm:text-[8px]">
            {album.band}
          </span>
          <span className="text-[6px] text-black/60 sm:text-[7px]">{album.year}</span>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-void ring-1 ring-white/20" />
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_45deg,transparent_0deg,rgba(255,255,255,0.08)_20deg,transparent_60deg,transparent_180deg,rgba(255,255,255,0.05)_200deg,transparent_240deg)]"
      />
    </div>
  );
}

function AlbumModal({ album, onClose }: { album: Album; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-void/90 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Álbum ${album.title}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="grid max-h-[90vh] w-full max-w-3xl grid-cols-1 gap-8 overflow-y-auto rounded-panel border border-white/10 bg-graphite p-6 shadow-lift sm:p-10 md:grid-cols-[240px_1fr]"
      >
        <div className="mx-auto w-48 md:w-full">
          <Vinyl album={album} spinning />
        </div>

        <div>
          <span className="display text-xs tracking-[0.3em] text-gold">
            {album.band} · {album.year} · {album.label}
          </span>
          <h3 className="display mt-2 text-3xl text-white sm:text-4xl">{album.title}</h3>
          <p className="mt-4 text-sm text-smoke">{album.description}</p>
          <p className="mt-4 rounded-xl border border-flame/25 bg-flame/5 p-4 text-xs text-white/75">
            <span className="display mr-2 tracking-[0.25em] text-flame">Curiosidade</span>
            {album.fact}
          </p>

          <div className="mt-6">
            <span className="display text-[10px] tracking-[0.3em] text-white/40">Faixas</span>
            <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {album.tracks.map((track, i) => (
                <li key={track} className="flex items-baseline gap-3 text-sm text-white/75">
                  <span className="display text-[10px] text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {track}
                </li>
              ))}
            </ol>
          </div>

          <button
            onClick={onClose}
            className="display mt-8 rounded-full border border-white/20 px-6 py-2.5 text-xs tracking-widest text-white transition-colors hover:border-blood hover:bg-blood"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Albums() {
  const [selected, setSelected] = useState<Album | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section id="albuns" className="relative overflow-hidden bg-graphite/40 py-24 md:py-36">
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-[50vh] w-[40vw] bg-[radial-gradient(ellipse,rgba(225,6,0,0.08),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="VINIL"
          eyebrow="Discoteca"
          title="Vinis que valem uma vida"
          description="Oito discos que qualquer coleção respeita. Clique para girar o vinil e ver as faixas."
        />
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {ALBUMS.map((album) => (
            <motion.button
              key={album.title}
              variants={scaleIn}
              onClick={() => setSelected(album)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              data-cursor="GIRAR"
              className="group text-left"
            >
              <div className="relative">
                <div className="absolute left-[10%] top-0 w-[88%] transition-transform duration-500 ease-out group-hover:translate-x-[16%] group-hover:rotate-[14deg]">
                  <motion.div style={{ rotate: prefersReducedMotion ? 0 : scrollRotate }}>
                    <Vinyl album={album} />
                  </motion.div>
                </div>

                <div className="relative z-10 flex aspect-square w-[88%] flex-col justify-between overflow-hidden rounded-md border border-white/10 bg-[#0b0b0d] p-4 shadow-[8px_0_28px_rgba(0,0,0,0.6)] transition-colors duration-500 group-hover:border-white/25 sm:p-5">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.14] transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: album.vinyl }}
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-sm border border-white/20 px-1.5 py-0.5 text-[9px] tracking-widest text-white/60">
                      {album.label.toUpperCase()}
                    </span>
                    <span className="display text-[10px] text-white/50">{album.year}</span>
                  </div>
                  <h3 className="display relative text-lg leading-[0.95] text-white sm:text-2xl lg:text-[1.7rem]">
                    {album.title}
                  </h3>
                  <div className="relative">
                    <span className="display block text-[11px] tracking-[0.25em] text-white/60">
                      {album.band.toUpperCase()}
                    </span>
                    <span className="mt-2 flex items-center justify-between text-[8px] tracking-[0.2em] text-white/55">
                      33⅓ RPM · STEREO
                      <span
                        aria-hidden
                        className="h-1 w-14 rounded-full"
                        style={{ background: album.vinyl }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/50 transition-colors group-hover:text-gold">
                Girar o disco →
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <AlbumModal album={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
