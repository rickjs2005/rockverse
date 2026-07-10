"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="2.5" y="6" width="19" height="13" rx="4" />
        <path d="M10.5 10l4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Spotify",
    href: "#",
    icon: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <path d="M7.5 10.5c3.5-1 6.5-.7 9 .8M8 13.5c3-.8 5.4-.5 7.5.7M8.7 16.2c2.3-.6 4.1-.4 5.8.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />,
  },
];

export default function Footer() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewRaw = useTransform(velocity, [-1500, 0, 1500], [-5, 0, 5]);
  const skewSpring = useSpring(skewRaw, { stiffness: 200, damping: 30 });
  const skewX = useReducedMotion() ? 0 : skewSpring;

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-void">
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/2 h-64 w-[90vw] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(225,6,0,0.12),transparent_70%)] blur-2xl"
      />

      <div aria-hidden className="select-none overflow-hidden whitespace-nowrap border-b border-white/5 py-6">
        <motion.div style={{ skewX }}>
          <div className="animate-marquee inline-flex gap-8">
            {Array.from({ length: 2 }).map((_, block) => (
              <span key={block} className="inline-flex gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="display inline-flex items-center gap-8 text-4xl text-white/40 sm:text-5xl">
                    LONG LIVE ROCK N&apos; ROLL <span className="text-blood/60">★</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-10"
      >
        <motion.div variants={fadeUp}>
          <a href="#" className="display text-3xl tracking-wider text-white">
            ROCK<span className="text-fire">VERSE</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-smoke">{SITE.description}</p>
          <div className="mt-6 flex items-end gap-1" aria-hidden>
            {[0.5, 1, 0.65, 0.9, 0.4, 0.8, 0.55, 0.95, 0.6].map((peak, i) => (
              <motion.span
                key={i}
                animate={{ scaleY: [0.3, peak, 0.3] }}
                transition={{ duration: 1.4 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 origin-bottom rounded-t-full bg-gradient-to-t from-blood/60 to-gold/60"
                style={{ height: 24 }}
              />
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_18px_rgba(255,184,0,0.25)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4.5 w-4.5">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.nav variants={fadeUp} aria-label="Mapa do site">
          <span className="display text-xs tracking-[0.3em] text-white/40">Mapa do site</span>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group text-sm text-smoke transition-colors hover:text-white">
                  <span className="mr-2 inline-block text-blood opacity-0 transition-all group-hover:mr-3 group-hover:opacity-100">
                    ›
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div variants={fadeUp}>
          <span className="display text-xs tracking-[0.3em] text-white/40">Coleção</span>
          <ul className="mt-4 space-y-2.5 text-sm text-smoke">
            <li>7 décadas mapeadas</li>
            <li>8 bandas lendárias</li>
            <li>8 vinis essenciais</li>
            <li>6 lendas no hall</li>
            <li>4 festivais históricos</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col justify-between gap-8">
          <div>
            <span className="display text-xs tracking-[0.3em] text-white/40">Backstage</span>
            <p className="mt-4 text-sm text-smoke">
              Receba histórias e discos raros no seu e-mail.
            </p>
            <a
              href="#newsletter"
              className="display mt-4 inline-block rounded-full border border-blood/60 px-5 py-2.5 text-xs tracking-widest text-white transition-all duration-300 hover:bg-blood hover:glow-red"
            >
              Receber novidades
            </a>
          </div>
          <a
            href="#"
            aria-label="Voltar ao topo"
            className="group flex h-12 w-12 items-center justify-center self-start rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold md:self-end"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </a>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-white/35 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} {SITE.name} — feito com volume no talo.</p>
          <p>
            Next.js · Framer Motion · Imagens: Unsplash ·{" "}
            <a
              href="https://milweb.com.br"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-gold"
            >
              Site por MilWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
