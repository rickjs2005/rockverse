"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EmberCanvas from "@/components/EmberCanvas";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section id="newsletter" className="relative overflow-hidden bg-void py-24 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,6,0,0.16),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-72 w-[70vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.08),transparent_70%)] blur-2xl"
      />
      <EmberCanvas density={30} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="display text-xs tracking-[0.35em] text-gold"
        >
          Backstage exclusivo
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="display mt-4 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
        >
          Entre para a <span className="text-fire">turnê</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-md text-smoke">
          Histórias, discos raros e curiosidades direto no seu e-mail. Sem spam
          — só o que faz barulho.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          {sent ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="display mx-auto inline-block rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-sm tracking-widest text-gold"
            >
              🤘 Bem-vindo ao backstage!
            </motion.p>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/35 backdrop-blur-md transition-colors focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                data-cursor
                className="display glow-red group relative overflow-hidden rounded-full bg-blood px-8 py-4 text-sm tracking-widest text-white transition-transform active:scale-95"
              >
                <span className="relative z-10">Inscrever</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-flame to-gold transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
