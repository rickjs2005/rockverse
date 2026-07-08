import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const riseMask: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const tiltIn: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -2, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
