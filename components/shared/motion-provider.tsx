"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Honours the visitor's reduced-motion setting for every framer-motion animation.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
