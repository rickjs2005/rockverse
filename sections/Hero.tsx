"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { HERO_IMAGE } from "@/constants/data";
import EmberCanvas from "@/components/EmberCanvas";
import MagneticButton from "@/components/MagneticButton";

const EQ_BARS = [
  0.4, 0.9, 0.55, 1, 0.7, 0.45, 0.85, 0.6, 1, 0.5, 0.75, 0.4, 0.95, 0.65, 0.8, 0.5,
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADLINE_LINES = [
  { text: "O SOM QUE", delay: 0.35, lineClass: "", letterClass: "" },
  { text: "MUDOU O", delay: 0.5, lineClass: "text-stroke", letterClass: "" },
  {
    text: "MUNDO",
    delay: 0.65,
    lineClass: "drop-shadow-[0_0_45px_rgba(255,107,0,0.45)]",
    letterClass: "text-fire",
  },
];

function KineticLine({
  text,
  delay,
  lineClass,
  letterClass,
}: {
  text: string;
  delay: number;
  lineClass: string;
  letterClass: string;
}) {
  return (
    <span className={`block overflow-hidden ${lineClass}`.trim()}>
      {Array.from(text).map((char, i) =>
        char === " " ? (
          <span key={i} aria-hidden className="whitespace-pre">
            {" "}
          </span>
        ) : (
          <motion.span
            key={i}
            aria-hidden
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.035,
              ease: EASE,
            }}
            className={`inline-block ${letterClass}`.trim()}
          >
            {char}
          </motion.span>
        )
      )}
    </span>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const bgX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const bgY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const titleX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const lightX = useTransform(sx, [-0.5, 0.5], ["35%", "65%"]);

  const onMouseMove = (e: React.MouseEvent) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-8">
        <Image
          src={HERO_IMAGE}
          alt="Banda de rock no palco em contraluz, com fumaça e amplificadores"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="img-grade object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/55 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/70" />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ left: lightX }}
        className="absolute top-0 h-[60vh] w-[45vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(225,6,0,0.35),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[40vh] w-[90vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,0,0.18),transparent_70%)] blur-3xl"
      />

      <motion.div
        aria-hidden
        animate={{ rotate: [-6, 5, -6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] left-[12%] h-[85vh] w-40 origin-top bg-gradient-to-b from-gold/25 via-gold/5 to-transparent blur-xl"
        style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0 100%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: [7, -5, 7] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] right-[15%] h-[85vh] w-48 origin-top bg-gradient-to-b from-blood/30 via-blood/5 to-transparent blur-xl"
        style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0 100%)" }}
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, 70, 0], y: [0, -35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[8%] left-[5%] h-72 w-[36rem] rounded-full bg-white/[0.045] blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -60, 0], y: [0, 25, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[2%] h-80 w-[30rem] rounded-full bg-white/[0.035] blur-3xl"
      />

      <EmberCanvas />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[8%] top-[24%] z-10 hidden lg:block"
      >
        <motion.svg
          viewBox="0 0 120 120"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="h-36 w-36 drop-shadow-[0_0_25px_rgba(255,184,0,0.25)]"
        >
          <defs>
            <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(255,184,0,0.5)" strokeWidth="1" />
          <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(255,184,0,0.35)" strokeWidth="1" />
          <text className="display" fill="#ffb800" fontSize="13.5" letterSpacing="3">
            <textPath href="#badge-circle">★ EST. 1951 ★ TURN IT UP ★ PLAY IT LOUD</textPath>
          </text>
          <path
            d="M60 48l3.6 7.6 8.4 1.1-6.2 5.8 1.6 8.3L60 66.7l-7.4 4.1 1.6-8.3-6.2-5.8 8.4-1.1z"
            fill="#ffb800"
          />
        </motion.svg>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display mb-6 flex items-center gap-4 text-xs tracking-[0.4em] text-gold sm:text-sm"
        >
          <span className="h-px w-12 bg-gradient-to-r from-blood to-gold" />
          Desde 1951 · Volume no máximo
        </motion.p>

        <motion.h1
          style={{ x: titleX }}
          aria-label="O som que mudou o mundo"
          className="display text-[17vw] leading-[0.85] text-white sm:text-[13vw] lg:text-[10.5rem]"
        >
          {reducedMotion ? (
            <>
              <span className="block">O SOM QUE</span>
              <span className="text-stroke block">MUDOU O</span>
              <span className="text-fire block drop-shadow-[0_0_45px_rgba(255,107,0,0.45)]">
                MUNDO
              </span>
            </>
          ) : (
            HEADLINE_LINES.map((line) => (
              <KineticLine
                key={line.text}
                text={line.text}
                delay={line.delay}
                lineClass={line.lineClass}
                letterClass={line.letterClass}
              />
            ))
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 max-w-xl text-base text-white/70 md:text-lg"
        >
          Sete décadas de riffs, rebeldia e multidões. Uma viagem imersiva pela
          história do rock — das rádios de 1950 aos festivais de hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton href="#historia">Iniciar a viagem</MagneticButton>
          <MagneticButton href="#albuns" variant="ghost">
            Álbuns icônicos
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-6 z-10 flex items-end gap-1.5 lg:left-10"
      >
        {EQ_BARS.map((peak, i) => (
          <motion.span
            key={i}
            animate={{ scaleY: [0.25, peak, 0.4, peak * 0.8, 0.25] }}
            transition={{
              duration: 1.2 + (i % 4) * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 origin-bottom rounded-t-full bg-gradient-to-t from-blood to-gold"
            style={{ height: 44 }}
          />
        ))}
        <span className="display ml-3 self-end pb-0.5 text-[10px] tracking-[0.3em] text-white/40">
          LIVE
        </span>
      </motion.div>

      <motion.a
        href="#historia"
        aria-label="Scroll para a linha do tempo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 transition-colors hover:text-gold sm:flex"
      >
        <span className="display text-[10px] tracking-[0.4em]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-white/15">
          <motion.span
            animate={{ y: ["-100%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-transparent via-gold to-gold"
          />
        </span>
      </motion.a>
    </section>
  );
}
