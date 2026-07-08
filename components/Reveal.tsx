"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
