import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { operatingFacts } from "@/lib/data";

export function Manifesto() {
  return (
    <section className="bg-night text-white">
      <MotionSection className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <p className="eyebrow eyebrow-invert self-start">Operating standard</p>
            <p className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              Every load is treated like a mission: scoped clearly, planned precisely, and communicated from pickup to
              delivery. <span className="text-steel">No noise. No guesswork. Just disciplined execution.</span>
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
            {operatingFacts.map((fact) => (
              <div key={fact.label} className="border-b border-white/15 py-6 pr-4 lg:border-b-0">
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">{fact.label}</dt>
                <dd className="mt-2 font-condensed text-2xl font-semibold uppercase text-white sm:text-3xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </MotionSection>
    </section>
  );
}
