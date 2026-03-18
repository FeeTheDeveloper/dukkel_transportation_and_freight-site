import type { Metadata } from "next";
import Link from "next/link";

import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { governmentBadges } from "@/lib/data";

export const metadata: Metadata = {
  title: "Government Contracting",
  description: "Contract-ready transportation positioning for agencies, primes, and public sector logistics programs."
};

export default function GovernmentContractingPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Contracting"
        title="A transportation brand built to speak clearly in public sector environments"
        description="Dukeel Transportation is positioned to support contract-facing logistics needs with disciplined communication, polished presentation, and execution-minded freight coordination."
        primaryCta={{ href: "/contact", label: "Discuss a contract need" }}
        secondaryCta={{ href: "/services", label: "Review services" }}
      />

      <MotionSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-panel p-8">
              <span className="eyebrow">Compatibility</span>
              <h2 className="mt-5 text-3xl font-semibold">Aligned for mission-oriented transportation scopes</h2>
              <p className="mt-5">
                Our positioning supports conversations with agencies, prime contractors, and procurement teams that
                value dependable execution and concise operational communication.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {governmentBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-deepBlue/10 bg-surface px-4 py-2 text-sm font-medium text-deepBlue"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-panel p-8">
              <h2 className="text-3xl font-semibold">What buyers can expect</h2>
              <div className="mt-6 grid gap-4">
                {[
                  "A veteran-owned identity communicated with a clean, procurement-friendly visual language",
                  "Logistics messaging that fits defense, transportation, emergency response, and infrastructure programs",
                  "Operational structure that emphasizes readiness, timeline awareness, and accountability",
                  "A site foundation ready for future additions such as capability statements, NAICS details, and SAM references"
                ].map((item) => (
                  <div key={item} className="rounded-[22px] bg-surface px-5 py-5 text-sm text-ink/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="pb-20 sm:pb-24">
        <Container>
          <div className="surface-panel px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">Next step</span>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Need a contract-ready transportation presence?</h2>
                <p className="mt-4 max-w-2xl">
                  This foundation is ready to expand with capability statements, procurement identifiers, and more
                  detailed compliance content as your contracting profile grows.
                </p>
              </div>
              <Link className="button-primary" href="/contact">
                Request a capabilities discussion
              </Link>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
