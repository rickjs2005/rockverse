"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    // globals.css sets `scroll-behavior: smooth`, which fights with Lenis.
    const previousScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    // Anchor links: let Lenis drive the scroll (with navbar offset).
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      const anchor = (event.target as Element | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || !document.querySelector(hash)) return;
      event.preventDefault();
      lenis.scrollTo(hash, { offset: -80 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
