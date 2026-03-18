"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ShieldIcon } from "@/components/shared/icons";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { contractingHighlights, governmentBadges } from "@/lib/data";

export function GovernmentSection() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <div className="surface-panel overflow-hidden bg-hero-gradient text-white">
          <div className="grid-overlay absolute inset-0 opacity-20" />
          <div className="relative grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
            <div>
              <SectionHeading
                eyebrow="Government Contracting"
                title="Prepared for government transportation support"
                description="Dukeel is built to engage agencies, procurement teams, and prime partners with disciplined communication, operational readiness, and a contract-ready business posture."
                invert
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {governmentBadges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="rounded-[22px] border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Agency Support</p>
                    <p className="mt-2 text-lg font-semibold text-white">{badge}</p>
                  </motion.div>
                ))}
              </div>

              <Link className="button-primary mt-8" href="/government-contracting">
                View contracting capabilities
              </Link>
            </div>

            <div className="grid gap-5">
              {contractingHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                  </div>
                  <p className="mt-4 text-white/75">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
