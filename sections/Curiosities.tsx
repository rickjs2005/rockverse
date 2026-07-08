"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CURIOSITIES } from "@/constants/data";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations/variants";
import { cn } from "@/lib/utils";

export default function Curiosities() {
  return (
    <section className="relative bg-paper py-24 text-ink md:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tone="light"
          ghost="FANZINE"
          eyebrow="Bastidores"
          title="Histórias que ninguém te contou"
          description="A parte da história que não cabe nos discos: leilões absurdos, acasos geniais e recordes improváveis."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 md:grid-cols-6"
        >
          {CURIOSITIES.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              data-cursor
              className={cn(
                "group relative overflow-hidden rounded-card border border-ink/10 bg-white/60 shadow-[0_16px_40px_-24px_rgb(22_19_15/0.35)] backdrop-blur-sm",
                item.size === "large" && "md:col-span-4 md:row-span-2",
                item.size === "medium" && "md:col-span-2",
                item.size === "small" && "md:col-span-3"
              )}
            >
              {item.image && (
                <div className="relative h-52 overflow-hidden md:h-64">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="img-grade object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/80 to-transparent" />
                </div>
              )}
              <div className="relative p-7">
                {item.highlight && (
                  <span className="text-fire display block text-5xl leading-none sm:text-6xl">
                    {item.highlight}
                  </span>
                )}
                <h3 className="display mt-3 text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blood to-gold transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blood/40 to-transparent"
      />
    </section>
  );
}
