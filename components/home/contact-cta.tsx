"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MotionSection } from "@/components/shared/motion-section";
import { Container } from "@/components/shared/container";

export function ContactCta() {
  return (
    <MotionSection className="pb-20 pt-4 sm:pb-24">
      <Container>
        <motion.div
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-10 text-white shadow-panel sm:px-10 lg:px-14 lg:py-14"
        >
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-lightBlue/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/20 bg-white/10 text-white">Immediate engagement</span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">Built for Precision. Ready for Execution.</h2>
              <p className="mt-4 max-w-xl text-white/75">
                Dukeel is positioned for dependable freight execution, responsive logistics support, and contract-ready
                engagement when speed, reliability, and operational clarity matter.
              </p>
            </div>

            <Link className="button-primary" href="/contact">
              Request Services
            </Link>
          </div>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
