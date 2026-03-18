import { ContactCta } from "@/components/home/contact-cta";
import { GovernmentSection } from "@/components/home/government-section";
import { Hero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { WhyDukeel } from "@/components/home/why-dukeel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GovernmentSection />
      <WhyDukeel />
      <ContactCta />
    </>
  );
}

