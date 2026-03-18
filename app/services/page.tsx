import type { Metadata } from "next";
import Link from "next/link";

import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore freight transportation, government logistics, dedicated hauling, and priority freight support."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Logistics support that feels prepared before the first dispatch"
        description="Our services are organized for buyers who need both confidence in presentation and reliability in execution, from recurring commercial lanes to contract-driven freight operations."
        primaryCta={{ href: "/contact", label: "Request services" }}
        secondaryCta={{ href: "/government-contracting", label: "Government contracting" }}
      />

      <MotionSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="surface-panel p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold">{service.title}</h2>
                  <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Active capability
                  </span>
                </div>
                <p className="mt-5 max-w-2xl">{service.description}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[22px] bg-surface px-4 py-4 text-sm font-medium text-ink/80">
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="pb-20 sm:pb-24">
        <Container>
          <div className="surface-panel grid gap-10 px-6 py-8 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:px-14 lg:py-12">
            <div>
              <span className="eyebrow">Operating model</span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Service architecture that supports repeatable performance</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clear communication from request intake through delivery confirmation",
                "Responsive planning for changing timelines and urgent movement windows",
                "Professional presentation for commercial, institutional, and public sector buyers",
                "Scalable structure for contract lanes, surge support, and ongoing hauling needs"
              ].map((item) => (
                <div key={item} className="rounded-[24px] bg-white p-5 text-sm text-ink/80 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link className="button-ghost" href="/contact">
              Start a service request
            </Link>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
