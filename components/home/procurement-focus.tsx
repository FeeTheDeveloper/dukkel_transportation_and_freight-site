import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { TargetMarkets } from "@/components/shared/target-markets";

export function ProcurementFocus() {
  return (
    <section className="bg-midnight text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image
            alt="Navy semi-truck inside a large distribution facility with wrapped pallets and forklifts"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/media/dukeel/government-logistics"
          />
        </div>

        <MotionSection className="py-16 sm:py-24">
          <Container className="lg:max-w-2xl lg:px-14">
            <p className="eyebrow eyebrow-invert">Government contracting</p>
            <h2 className="section-title mt-5 text-white">Built to work inside procurement.</h2>
            <p className="mt-5 text-white/75">
              Agencies and prime contractors need a transportation partner that answers clearly, documents carefully, and
              executes to scope. Dukeel is organized around exactly that.
            </p>

            <TargetMarkets className="mt-10" />

            <Link className="button-primary mt-10" href="/government-contracting">
              Procurement pathway
            </Link>
          </Container>
        </MotionSection>
      </div>
    </section>
  );
}
