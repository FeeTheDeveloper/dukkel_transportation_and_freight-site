import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { StepList } from "@/components/shared/step-list";
import { TargetMarkets } from "@/components/shared/target-markets";
import { documentationReadiness, procurementPathway } from "@/lib/data";

export const metadata: Metadata = {
  title: "Government Contracting",
  description:
    "How agencies, procurement offices, and prime contractors engage Dukeel for transportation and logistics support."
};

export default function GovernmentContractingPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Contracting"
        title="Transportation support for public-sector work"
        description="Dukeel is a veteran-owned, Texas-based freight and logistics company positioned to support agencies and prime contractors with disciplined freight execution and organized documentation."
        image={{
          src: "/media/dukeel/government-logistics",
          alt: "Navy semi-truck inside a large distribution facility with wrapped pallets and forklifts"
        }}
        primaryCta={{ href: "/contact#procurement", label: "Procurement inquiry" }}
        secondaryCta={{ href: "/services", label: "Review services" }}
      />

      <section className="bg-midnight text-white">
        <MotionSection className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="Positioning"
                  title="What contracting teams can expect"
                  description="Clear answers, organized paperwork, and execution that matches the agreed scope. Dukeel supports government and defense logistics, dedicated hauling, priority freight, and contract-based transportation."
                  invert
                />
              </div>
              <TargetMarkets />
            </div>
          </Container>
        </MotionSection>
      </section>

      <MotionSection className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Request to engagement"
            title="The procurement pathway"
            description="A straightforward route from first requirement to scoped work, built for contracting officers and prime partners."
          />
          <StepList className="mt-12" steps={procurementPathway} />
        </Container>
      </MotionSection>

      <MotionSection className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Documentation readiness"
            title="Paperwork, handled directly"
            description="Registration status and business records are confirmed with buyers through proper channels rather than displayed as badges."
          />
          <dl className="mt-12 grid gap-px bg-navy/10 md:grid-cols-3">
            {documentationReadiness.map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8">
                <dt className="text-xl font-semibold text-navy">{item.title}</dt>
                <dd className="mt-3 text-ink/70">{item.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/contact#procurement">
              Start a procurement inquiry
            </Link>
            <Link className="button-ghost" href="/services#government-logistics">
              Government logistics service
            </Link>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
