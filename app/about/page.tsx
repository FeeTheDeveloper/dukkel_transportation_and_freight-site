import type { Metadata } from "next";
import Link from "next/link";

import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dukeel Transportation's veteran-owned, mission-driven approach to freight and logistics."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built around readiness, professionalism, and confidence under pressure"
        description="Dukeel Transportation is presented as a modern logistics partner for organizations that need freight service backed by discipline, responsiveness, and a premium contractor-grade presence."
        primaryCta={{ href: "/contact", label: "Talk with our team" }}
      />

      <MotionSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="surface-panel p-8 sm:p-10">
              <span className="eyebrow">Our story</span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">A veteran-owned identity with operational intent</h2>
              <p className="mt-5">
                Every part of the brand is designed to signal trust quickly: a disciplined color system, clear copy,
                and a structure that speaks equally well to commercial clients and public sector stakeholders.
              </p>
              <p className="mt-4">
                The result is a logistics website that feels premium without losing practical clarity, pairing a strong
                mission posture with the speed and responsiveness expected from modern freight operations.
              </p>
            </article>

            <article className="surface-panel p-8 sm:p-10">
              <span className="eyebrow">Positioning</span>
              <h2 className="mt-5 text-3xl font-semibold">What defines Dukeel</h2>
              <div className="mt-6 space-y-4">
                {["Veteran-led values", "Contract-facing presentation", "Scalable freight support", "Precision communication"].map(
                  (item) => (
                    <div key={item} className="rounded-[22px] bg-surface px-5 py-4 text-sm font-medium text-ink/80">
                      {item}
                    </div>
                  )
                )}
              </div>
            </article>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="surface-panel p-8">
                <h2 className="text-2xl font-semibold">{value.title}</h2>
                <p className="mt-4">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link className="button-ghost" href="/services">
              Explore service capabilities
            </Link>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
