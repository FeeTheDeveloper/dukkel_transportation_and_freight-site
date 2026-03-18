"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowUpRightIcon, TruckIcon } from "@/components/shared/icons";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Freight services built for disciplined execution"
          description="Commercial shippers and contract partners rely on Dukeel for clear communication, operational precision, and dependable freight support when timelines matter."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="surface-panel group p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-glow">
                <TruckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4">{service.description}</p>
              <ul className="mt-5 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-deepBlue" href="/services">
            Explore all services
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </MotionSection>
  );
}
