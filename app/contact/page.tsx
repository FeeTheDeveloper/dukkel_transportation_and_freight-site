import type { Metadata } from "next";

import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { MailIcon, PhoneIcon } from "@/components/shared/icons";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request logistics support, discuss government contracting, or connect with Dukeel Transportation."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to move freight with confidence and precision?"
        description="Share the shipment profile, contract environment, or execution timeline. Dukeel Transportation is structured to respond with clarity and urgency."
      />

      <MotionSection className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="surface-panel p-8 sm:p-10">
              <span className="eyebrow">Direct contact</span>
              <h2 className="mt-5 text-3xl font-semibold">Start the conversation</h2>
              <div className="mt-8 space-y-5">
                <a
                  className="flex items-center gap-4 rounded-[24px] bg-surface px-5 py-5 transition hover:-translate-y-1"
                  href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-deepBlue/70">Phone</p>
                    <p className="mt-1 font-semibold text-navy">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  className="flex items-center gap-4 rounded-[24px] bg-surface px-5 py-5 transition hover:-translate-y-1"
                  href={`mailto:${siteConfig.email}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-deepBlue/70">Email</p>
                    <p className="mt-1 font-semibold text-navy">{siteConfig.email}</p>
                  </div>
                </a>
              </div>

              <p className="mt-8 text-sm text-ink/70">{siteConfig.address}</p>
            </article>

            <article className="surface-panel p-8 sm:p-10">
              <span className="eyebrow">Request outline</span>
              <h2 className="mt-5 text-3xl font-semibold">Information to include</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Pickup and delivery geography",
                  "Requested timeline or urgency level",
                  "Freight type and handling notes",
                  "Contract or agency context if applicable",
                  "Expected cadence: one-time, surge, or recurring",
                  "Primary point of contact and decision window"
                ].map((item) => (
                  <div key={item} className="rounded-[22px] bg-surface px-5 py-5 text-sm text-ink/80">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] bg-navy px-6 py-6 text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-white/60">Fastest route</p>
                <p className="mt-3 text-lg text-white/80">
                  For quickest response, include the phrase <span className="font-semibold text-white">Priority Freight Request</span> in the email subject line.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
