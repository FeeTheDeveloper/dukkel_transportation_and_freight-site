// All photography is AI-generated illustrative cinematography (see
// docs/MEDIA_LEDGER.md). Alt text describes the scene, never a Dukeel asset.
export const services = [
  {
    slug: "freight-transportation",
    title: "Freight Transportation",
    summary: "Local, regional, and long-haul freight moved with disciplined planning.",
    description:
      "Over-the-road freight support for commercial shippers, project cargo, and recurring transportation demand across local, regional, and long-haul lanes.",
    scope: ["Local, regional, and long-haul lanes", "Pickup-to-delivery coordination", "Direct status communication"],
    image: {
      src: "/media/dukeel/freight-road",
      alt: "Navy semi-truck with a silver trailer on an open highway at sunset"
    }
  },
  {
    slug: "dedicated-hauling",
    title: "Dedicated Hauling & Load Management",
    summary: "Reserved capacity and structured load planning for repeat lanes.",
    description:
      "Dedicated hauling and load management for shippers that need consistency on recurring routes, with one accountable point of contact.",
    scope: ["Recurring route planning", "Load scheduling and sequencing", "Single point of accountability"],
    image: {
      src: "/media/dukeel/interstate-aerial",
      alt: "Aerial view of a highway interchange with freight trucks crossing open Texas plains"
    }
  },
  {
    slug: "priority-freight",
    title: "Time-Critical & Priority Freight",
    summary: "Rapid-response coordination when the delivery window is tight.",
    description:
      "Priority freight coordination for urgent shipments and compressed timelines, with planning that starts at first contact.",
    scope: ["Rapid planning and activation", "Timeline-focused coordination", "High-attention shipment handling"],
    image: {
      src: "/media/dukeel/priority-freight",
      alt: "Navy semi-truck parked beside a loading dock at dusk"
    }
  },
  {
    slug: "government-logistics",
    title: "Government & Defense Logistics Support",
    summary: "Transportation support built for public-sector expectations.",
    description:
      "Logistics support for agencies, prime contractors, and public-sector transportation scopes that require precise execution and organized documentation.",
    scope: ["Mission-support freight movement", "Documentation-ready communication", "Prime and subcontract coordination"],
    image: {
      src: "/media/dukeel/government-logistics",
      alt: "Navy semi-truck inside a large distribution facility with wrapped pallets and forklifts"
    }
  },
  {
    slug: "contract-transportation",
    title: "Contract-Based Transportation",
    summary: "Term-based transportation agreements scoped to defined lanes and volumes.",
    description:
      "Contract-based transportation for commercial shippers, primes, and public-sector buyers who need defined lanes, volumes, schedules, and reporting under an agreement.",
    scope: ["Defined lanes, volumes, and schedules", "Agreed reporting cadence", "Scalable as contract scope grows"],
    image: {
      src: "/media/dukeel/contract-terminal",
      alt: "Navy tractor and white trailer moving through an indoor freight terminal"
    }
  }
] as const;

export type Service = (typeof services)[number];

// Markets Dukeel intends to pursue. These are not clients, partners, or awarded contracts.
export const targetMarkets = [
  "Department of Defense programs",
  "Department of Transportation programs",
  "Emergency management and FEMA-supported response",
  "State and local procurement offices",
  "Prime contractors seeking transportation subcontractors"
] as const;

export const operatingFacts = [
  { label: "Ownership", value: "Veteran-owned" },
  { label: "Headquarters", value: "Texas-based" },
  { label: "Service lines", value: "Five" },
  { label: "Buyers", value: "Commercial & public sector" }
] as const;

export const methodology = [
  {
    step: "01",
    title: "Scope",
    description: "Confirm freight type, origin and destination, timing, and any documentation the shipment or contract requires."
  },
  {
    step: "02",
    title: "Plan",
    description: "Set equipment, routing, schedule, and a single point of contact before the load moves."
  },
  {
    step: "03",
    title: "Execute",
    description: "Move the freight with direct status communication from pickup through delivery."
  },
  {
    step: "04",
    title: "Close out",
    description: "Confirm delivery and return the paperwork your team or contracting office needs."
  }
] as const;

export const procurementPathway = [
  {
    step: "01",
    title: "Requirement",
    description: "Share the scope: lanes, volumes, timelines, solicitation or task order context, and point of contact."
  },
  {
    step: "02",
    title: "Capability discussion",
    description: "We review fit, equipment, and schedule, and answer questions from contracting staff or prime partners."
  },
  {
    step: "03",
    title: "Documentation",
    description: "We exchange the business documentation the buyer requires and confirm registration status directly."
  },
  {
    step: "04",
    title: "Engagement",
    description: "Agreed scope moves into planning and execution with a defined reporting cadence."
  }
] as const;

export const documentationReadiness = [
  {
    title: "Capability overview",
    description: "Service scope, operating area, and points of contact, provided on request."
  },
  {
    title: "SAM.gov and CAGE",
    description: "Federal registration is part of Dukeel's contracting plan. Current status is confirmed directly with buyers."
  },
  {
    title: "Business records",
    description: "Entity and tax documentation shared through the buyer's secure channel, never posted publicly."
  }
] as const;

export const values = [
  {
    title: "Discipline",
    description: "Clear planning, clear communication, and follow-through on every commitment."
  },
  {
    title: "Accountability",
    description: "One responsible point of contact and straight answers about status."
  },
  {
    title: "Mission first",
    description: "Each load is approached with urgency and respect for what depends on it."
  }
] as const;
