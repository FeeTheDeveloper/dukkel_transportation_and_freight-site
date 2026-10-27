import type { Metadata } from "next";

import { MailIcon, PhoneIcon } from "@/components/shared/icons";
import { Container } from "@/components/shared/container";
import { MotionSection } from "@/components/shared/motion-section";
import { PageHero } from "@/components/shared/page-hero";
import { mailtoHref, siteConfig, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request freight support or start a government procurement inquiry with Dukeel Transportation."
};

// No server-side intake is live yet: both routes open a pre-filled email in the
// visitor's own mail app, and the page says so plainly.
const routes = [
  {
    id: "freight",
    eyebrow: "Commercial shippers",
    title: "Freight service inquiry",
    description: "For freight transportation, dedicated hauling, or priority loads.",
    include: [
      "Pickup and delivery area",
      "Freight type, weight, and handling notes",
      "Requested pickup date or delivery window",
      "One-time, recurring, or dedicated",
      "Your name, business, and best phone number"
    ],
    subject: "Freight service inquiry",
    body: [
      "Name:",
      "Business:",
      "Phone (optional):",
      "Service needed (freight / dedicated hauling / priority):",
      "Origin area:",
      "Destination area:",
      "Requested schedule:",
      "Freight details:",
      ""
    ].join("\n")
  },
  {
    id: "procurement",
    eyebrow: "Agencies & prime contractors",
    title: "Government / prime procurement inquiry",
    description: "For government logistics support or contract-based transportation.",
    include: [
      "Agency or prime contractor",
      "Solicitation, task order, or requirement reference if available",
      "Lanes, volumes, and period of performance",
      "Documentation you will need from Dukeel",
      "Contracting point of contact and timeline"
    ],
    subject: "Government / prime procurement inquiry",
    body: [
      "Name:",
      "Agency or prime contractor:",
      "Phone (optional):",
      "Requirement or solicitation reference:",
      "Lanes / service area:",
      "Volumes and period of performance:",
      "Documentation needed:",
      "Timeline:",
      ""
    ].join("\n")
  }
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Two direct routes in"
        description="Choose the route that fits your request. Each one opens a pre-filled email to Dukeel so nothing important gets missed."
        image={{ src: "/media/dukeel/priority-freight", alt: "Navy semi-truck parked beside a loading dock at dusk" }}
      />

      <MotionSection className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-px bg-navy/10 lg:grid-cols-2">
            {routes.map((route) => (
              <article key={route.id} aria-labelledby={`${route.id}-title`} className="scroll-mt-28 bg-white p-6 sm:p-10" id={route.id}>
                <p className="eyebrow">{route.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold" id={`${route.id}-title`}>
                  {route.title}
                </h2>
                <p className="mt-3">{route.description}</p>

                <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-deepBlue">What to include</h3>
                <ul className="mt-3 divide-y divide-navy/10 border-y border-navy/10">
                  {route.include.map((item) => (
                    <li key={item} className="flex items-center gap-3 py-3 text-ink/80">
                      <span aria-hidden="true" className="h-1.5 w-1.5 flex-none bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a className="button-primary mt-8 w-full sm:w-auto" href={mailtoHref(route.subject, route.body)}>
                  <MailIcon className="h-4 w-4" />
                  Email {route.id === "freight" ? "a freight request" : "a procurement inquiry"}
                </a>
                <p className="mt-3 text-sm text-ink/60">Opens a pre-filled message in your email app, addressed to {siteConfig.email}.</p>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <section className="bg-night text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <a className="group" href={telHref}>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-steel">
                <PhoneIcon className="h-4 w-4" />
                Phone
              </p>
              <p className="mt-3 font-condensed text-3xl font-semibold text-white group-hover:text-accent">{siteConfig.phone}</p>
            </a>
            <a className="group" href={`mailto:${siteConfig.email}`}>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-steel">
                <MailIcon className="h-4 w-4" />
                Email
              </p>
              <p className="mt-3 break-all font-condensed text-3xl font-semibold text-white group-hover:text-accent">{siteConfig.email}</p>
            </a>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">Address</p>
              <address className="mt-3 font-condensed text-3xl font-semibold not-italic text-white">
                {siteConfig.addressLine1}
                <br />
                {siteConfig.addressLine2}
              </address>
            </div>
          </div>
          <p className="mt-12 max-w-2xl text-sm text-white/55">
            Please do not email classified, controlled, or sensitive shipment details. We will arrange a secure channel when a
            requirement calls for one.
          </p>
        </Container>
      </section>
    </>
  );
}
