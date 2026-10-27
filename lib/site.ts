export const siteConfig = {
  name: "Dukeel Transportation",
  legalName: "Dukeel Transportation & Freight Corporation",
  shortName: "Dukeel",
  url: "https://dukeeltransport.com",
  description:
    "Veteran-owned, Texas-based freight and logistics support for commercial transportation and government contract execution.",
  phone: "469-708-5407",
  email: "contact@dukeeltransport.com",
  addressLine1: "990 TX-5",
  addressLine2: "Fairview, TX 75069",
  address: "990 TX-5 Fairview, TX 75069"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/government-contracting", label: "Government Contracting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const telHref = `tel:${siteConfig.phone.replace(/[^\d]/g, "")}`;

export function mailtoHref(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
