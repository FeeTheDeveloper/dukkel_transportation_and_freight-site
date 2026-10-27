import type { Metadata } from "next";
import Link from "next/link";

import { ContactCta } from "@/components/home/contact-cta";
import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Dukeel Transportation & Freight Corporation is a veteran-owned, Texas-based freight and logistics company."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Veteran-owned. Texas-based. Mission-first."
        description="Dukeel Transportation & Freight Corporation brings the discipline and accountability of military service to commercial freight and public-sector logistics."
        image={{ src: "/media/dukeel/hero-still", alt: "Navy semi-truck at a loading dock under a dusk sky" }}
        primaryCta={{ href: "/contact", label: "Contact Dukeel" }}
      />

      <MotionSection className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <p className="eyebrow self-start">Who we are</p>
            <div className="space-y-6 text-lg">
              <p className="font-display text-2xl font-medium leading-snug text-navy sm:text-3xl">
                Dukeel is a veteran-owned freight and logistics company based in Texas, serving commercial shippers and
                public-sector transportation requirements.
              </p>
              <p>
                We provide local, regional, and long-haul freight, dedicated hauling and load management, priority freight,
                government and defense logistics support, and contract-based transportation.
              </p>
              <p>
                Our operating standard comes from military service: plan carefully, communicate directly, and finish the
                mission. That is how every load is handled, whatever its size.
              </p>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Values" title="What we hold ourselves to" description="Three commitments that shape every engagement." />
          <dl className="mt-12 grid gap-px bg-navy/10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 sm:p-8">
                <dt className="font-condensed text-3xl font-semibold uppercase text-navy">{value.title}</dt>
                <dd className="mt-3 text-ink/70">{value.description}</dd>
              </div>
            ))}
          </dl>
          <Link className="button-ghost mt-12" href="/services">
            Explore services
          </Link>
        </Container>
      </MotionSection>

      <ContactCta />
    </>
  );
}
