import Link from "next/link";

import { DukeelLogoFull } from "@/components/brand/logo";
import { Container } from "@/components/shared/container";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy/10 bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="inline-flex rounded-[24px] bg-white px-5 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
              <DukeelLogoFull className="h-12 w-auto sm:h-14" />
            </div>
            <p className="mt-4 text-white/70">
              Veteran-owned and Texas-based, Dukeel provides dependable freight and logistics support for commercial and
              government transportation requirements.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Navigation</p>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} className="text-white/75 transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Contact</p>
            <div className="mt-4 space-y-3 text-white/75">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for responsive logistics operations and Vercel-ready deployment.</p>
        </div>
      </Container>
    </footer>
  );
}
