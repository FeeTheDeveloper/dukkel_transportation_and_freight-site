import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/shared/icons";
import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/lib/data";

// Bento layout: two wide features on top, three below on large screens.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function ServiceFeatures() {
  return (
    <MotionSection className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Five service lines. One operating standard."
            description="From a single urgent load to a term contract, every engagement runs on the same planning and communication discipline."
          />
          <Link className="button-ghost self-start lg:self-auto" href="/services">
            All services
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <li key={service.slug} className={`${spans[index]} ${index === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
              <Link
                className="group relative flex aspect-[4/5] h-full overflow-hidden bg-night sm:aspect-[4/3]"
                href={`/services#${service.slug}`}
              >
                <Image
                  alt={service.image.alt}
                  className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  fill
                  sizes={index < 2 ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  src={service.image.src}
                />
                <div className="absolute inset-0 bg-scrim-bottom" />
                <div className="relative mt-auto p-6 sm:p-7">
                  <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/75">{service.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </MotionSection>
  );
}
