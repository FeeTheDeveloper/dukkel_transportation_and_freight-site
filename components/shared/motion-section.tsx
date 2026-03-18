"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionSection({ children, className = "" }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

