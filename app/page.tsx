import { ContactCta } from "@/components/home/contact-cta";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { ProcurementFocus } from "@/components/home/procurement-focus";
import { ServiceFeatures } from "@/components/home/service-features";
import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StepList } from "@/components/shared/step-list";
import { methodology } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServiceFeatures />
      <ProcurementFocus />
      <MotionSection className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Methodology"
            title="How a load moves with Dukeel"
            description="The same four steps on every engagement, whether it is one urgent shipment or a recurring contract lane."
          />
          <StepList className="mt-12" steps={methodology} />
        </Container>
      </MotionSection>
      <ContactCta />
    </>
  );
}
