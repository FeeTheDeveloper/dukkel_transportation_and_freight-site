import Link from "next/link";

import { HeroMedia } from "@/components/home/hero-media";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-night text-white sm:min-h-[720px] lg:h-[calc(100svh-5rem)] lg:max-h-[880px] lg:items-center">
      <div className="absolute inset-0 -z-10">
        <HeroMedia />
        <div className="absolute inset-0 bg-night/45 lg:hidden" />
        <div className="absolute inset-0 bg-scrim-bottom lg:bg-scrim-left" />
      </div>

      <Container className="relative pb-16 pt-28 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-invert">Veteran-owned · Texas-based</p>
          <h1 className="display-title mt-6 text-white">
            Mission-Driven Freight.
            <span className="block text-accent">Precision in Motion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Dukeel Transportation &amp; Freight Corporation moves commercial freight and supports public-sector
            transportation requirements with disciplined planning and direct communication.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/contact#freight">
              Request Freight Support
            </Link>
            <Link className="button-secondary" href="/government-contracting">
              Government Contracting
            </Link>
          </div>
        </div>
      </Container>

      <p className="media-caption absolute bottom-6 left-4 hidden sm:left-6 sm:block lg:left-8">Illustrative cinematography</p>
    </section>
  );
}
