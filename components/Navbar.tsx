"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants/data";
import { cn } from "@/lib/utils";

const MAGNET_MAX = 3;

function NavLink({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.15;
    x.set(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dx)));
    y.set(Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, dy)));
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy }}
      className="group relative inline-block text-sm text-smoke transition-colors hover:text-white"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blood to-gold transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-void/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="display text-xl tracking-wider text-white">
          ROCK<span className="text-fire">VERSE</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
          <li>
            <a
              href="#newsletter"
              className="display rounded-full border border-blood/60 px-5 py-2 text-xs tracking-widest text-white transition-all duration-300 hover:bg-blood hover:glow-red"
            >
              Receber novidades
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-300",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 bg-white transition-all duration-300", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-300",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/5 bg-void/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display block py-3 text-2xl tracking-wide text-white/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pb-4 pt-3">
                <a
                  href="#newsletter"
                  onClick={() => setOpen(false)}
                  className="display glow-red inline-block rounded-full bg-blood px-7 py-3 text-sm tracking-widest text-white"
                >
                  Receber novidades
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">{SITE.tagline}</span>
    </motion.header>
  );
}
