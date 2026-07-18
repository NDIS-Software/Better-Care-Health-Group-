"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

export function Pop({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, scale: .9, y: 34 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ type: "spring", stiffness: 130, damping: 19, delay }}>{children}</motion.div>;
}
