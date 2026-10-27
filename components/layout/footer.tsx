import Link from "next/link";

import { DukeelLogoFull } from "@/components/brand/logo";
import { Container } from "@/components/shared/container";
import { navItems, siteConfig, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <DukeelLogoFull className="h-14 sm:h-16" />
            <p className="mt-6 text-white/65">
              Veteran-owned and Texas-based, Dukeel provides freight and logistics support for commercial and government
              transportation requirements.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">Navigation</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="text-white/75 transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">Contact</p>
            <address className="mt-5 space-y-3 not-italic text-white/75">
              <p className="font-semibold text-white">{siteConfig.legalName}</p>
              <a className="block transition hover:text-white" href={telHref}>
                {siteConfig.phone}
              </a>
              <a className="block transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <p className="text-white/75">
                {siteConfig.addressLine1}
                <br />
                {siteConfig.addressLine2}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-white/50">Photography on this site is illustrative and does not depict Dukeel equipment or staff.</p>
        </div>
      </Container>
    </footer>
  );
}
