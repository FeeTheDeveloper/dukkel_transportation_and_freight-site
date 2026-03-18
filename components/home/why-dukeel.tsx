"use client";

import { motion } from "framer-motion";

import { BoltIcon, CompassIcon, LayersIcon, ShieldIcon, TruckIcon } from "@/components/shared/icons";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { pillars } from "@/lib/data";

const pillarIcons = [ShieldIcon, CompassIcon, LayersIcon, TruckIcon, BoltIcon];

export function WhyDukeel() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Dukeel"
          title="Why teams engage Dukeel"
          description="The message is straightforward: disciplined operations, dependable execution, and readiness to engage on commercial or government transportation requirements."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                className="surface-panel p-7 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold xl:text-2xl">{pillar.title}</h3>
                <p className="mt-4">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </MotionSection>
  );
}
