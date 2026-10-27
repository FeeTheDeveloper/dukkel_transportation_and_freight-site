import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, description, image, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <Image alt={image.alt} className="-z-10 object-cover object-right" fill priority sizes="100vw" src={image.src} />
      <div className="absolute inset-0 -z-10 bg-night/45 sm:hidden" />
      <div className="absolute inset-0 -z-10 bg-scrim-bottom sm:bg-scrim-left" />

      <Container className="relative pb-16 pt-40 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-invert">{eyebrow}</p>
          <h1 className="display-title mt-5 text-white">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link className="button-primary" href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="button-secondary" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
