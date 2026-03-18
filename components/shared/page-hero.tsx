import Link from "next/link";

import { Container } from "@/components/shared/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 text-white sm:py-28">
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_58%)]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <span className="eyebrow border-white/20 bg-white/10 text-white">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
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
