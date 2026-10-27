import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { siteConfig, telHref } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <Image
        alt=""
        className="-z-10 object-cover opacity-40"
        fill
        sizes="100vw"
        src="/media/dukeel/freight-road"
      />
      <div className="absolute inset-0 -z-10 bg-scrim-left" />

      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-invert">Start a request</p>
          <h2 className="display-title mt-5 text-white">Built for precision. Ready to move.</h2>
          <p className="mt-6 text-lg text-white/80">
            Tell us what needs to move, where, and when. Commercial shippers and procurement teams each have a direct route
            in.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/contact#freight">
              Request Freight Support
            </Link>
            <Link className="button-secondary" href="/contact#procurement">
              Procurement inquiry
            </Link>
          </div>
          <p className="mt-8 text-white/70">
            Or call{" "}
            <a className="font-semibold text-white underline decoration-accent underline-offset-4" href={telHref}>
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
