"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  driftX: number;
  hue: number;
  alpha: number;
  flicker: number;
}

export default function EmberCanvas({ density = 55 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let running = false;
    let inView = true;
    let embers: Ember[] = [];
    let width = 0;
    let height = 0;

    const spawn = (randomY: boolean): Ember => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 10,
      size: 0.6 + Math.random() * 2.2,
      speedY: 0.3 + Math.random() * 1.1,
      driftX: (Math.random() - 0.5) * 0.5,
      hue: 10 + Math.random() * 35,
      alpha: 0.25 + Math.random() * 0.55,
      flicker: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = window.innerWidth < 768 ? Math.floor(density / 2) : density;
      embers = Array.from({ length: count }, () => spawn(true));
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y -= e.speedY;
        e.x += e.driftX + Math.sin(e.y * 0.01) * 0.3;
        e.flicker += 0.08;
        if (e.y < -12) embers[i] = spawn(false);

        const glow = e.alpha * (0.7 + 0.3 * Math.sin(e.flicker));
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${e.hue}, 100%, 58%, ${glow})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${e.hue}, 100%, 50%, ${glow})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || !inView || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    observer.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    start();
    window.addEventListener("resize", resize);
    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
