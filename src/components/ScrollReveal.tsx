"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({ children, delay, className, direction }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...(direction === "left" ? { x: -40 } : direction === "right" ? { x: 40 } : { y: 40 }) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay ?? 0 }}
      className={className ?? ""}
    >
      {children}
    </motion.div>
  );
}
