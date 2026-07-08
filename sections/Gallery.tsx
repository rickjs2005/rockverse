"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { scaleIn, staggerContainer, viewportOnce } from "@/animations/variants";
import { cn } from "@/lib/utils";

const RATIO_CLASS = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const directionRef = useRef(0);
  const touchStartXRef = useRef<number | null>(null);
  const close = useCallback(() => setLightbox(null), []);

  const next = useCallback(() => {
    directionRef.current = 1;
    setLightbox((i) => (i === null ? i : (i + 1) % GALLERY.length));
  }, []);

  const prev = useCallback(() => {
    directionRef.current = -1;
    setLightbox((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="galeria" className="relative bg-graphite/40 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          ghost="ENCORE"
          eyebrow="Na pista"
          title="Momentos em alta voltagem"
          description="Do palco ao backstage: as máquinas, as mãos e as multidões que fazem o barulho acontecer."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="columns-2 gap-4 md:columns-3 [&>*]:mb-4"
        >
          {GALLERY.map((img, i) => (
            <motion.button
              key={img.src}
              variants={scaleIn}
              onClick={() => {
                directionRef.current = 0;
                setLightbox(i);
              }}
              data-cursor="VER"
              aria-label={`Ampliar imagem: ${img.alt}`}
              className={cn(
                "group relative block w-full overflow-hidden rounded-card shadow-card",
                RATIO_CLASS[img.ratio]
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="img-grade object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="display absolute bottom-3 left-4 translate-y-3 text-[10px] tracking-[0.25em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Ver imagem
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização de imagem"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-void/95 p-4 backdrop-blur-md sm:p-10"
          >
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94, x: directionRef.current * 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartXRef.current === null) return;
                const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
                touchStartXRef.current = null;
                if (deltaX < -50) next();
                else if (deltaX > 50) prev();
              }}
              className="relative h-[80vh] w-full max-w-5xl"
            >
              <Image
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Imagem anterior"
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima imagem"
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
            <button
              onClick={close}
              aria-label="Fechar galeria"
              className="display absolute right-6 top-6 rounded-full border border-white/20 px-5 py-2 text-xs tracking-widest text-white transition-colors hover:border-blood hover:bg-blood"
            >
              Fechar
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50">
              {GALLERY[lightbox].alt} · {lightbox + 1}/{GALLERY.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
