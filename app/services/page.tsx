import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactCta } from "@/components/home/contact-cta";
import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freight transportation, dedicated hauling, priority freight, government logistics support, and contract-based transportation from Dukeel."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Freight support, scoped to the job"
        description="Five service lines for commercial shippers, prime contractors, and public-sector buyers, all run on the same planning and communication discipline."
        image={{ src: "/media/dukeel/freight-road", alt: "Navy semi-truck with a silver trailer on an open highway at sunset" }}
        primaryCta={{ href: "/contact#freight", label: "Request Freight Support" }}
        secondaryCta={{ href: "/government-contracting", label: "Government Contracting" }}
      />

      <nav aria-label="Services on this page" className="sticky top-20 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
        <Container>
          <ul className="flex gap-6 overflow-x-auto py-4 text-sm font-semibold text-navy/70">
            {services.map((service) => (
              <li key={service.slug} className="flex-none">
                <a className="transition hover:text-navy" href={`#${service.slug}`}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="bg-white">
        {services.map((service, index) => (
          <MotionSection key={service.slug} className="py-16 sm:py-24">
            <Container>
              <article
                className={`grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                id={service.slug}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-night">
                  <Image alt={service.image.alt} className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src={service.image.src} />
                </div>
                <div>
                  <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </p>
                  <h2 className="section-title mt-3">{service.title}</h2>
                  <p className="mt-5 text-lg">{service.description}</p>
                  <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-center gap-3 py-3 font-medium text-navy">
                        <span aria-hidden="true" className="h-1.5 w-1.5 flex-none bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="button-ghost mt-8"
                    href={service.slug === "government-logistics" || service.slug === "contract-transportation" ? "/contact#procurement" : "/contact#freight"}
                  >
                    Discuss this service
                  </Link>
                </div>
              </article>
            </Container>
          </MotionSection>
        ))}
      </div>

      <ContactCta />
    </>
  );
}
