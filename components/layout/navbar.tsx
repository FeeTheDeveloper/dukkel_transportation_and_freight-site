"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DukeelLogoFull, DukeelLogoMark } from "@/components/brand/logo";
import { Container } from "@/components/shared/container";
import { navItems } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link aria-label="Dukeel Transportation home" className="flex min-w-0 items-center" href="/">
            <DukeelLogoMark className="h-12 flex-none min-[420px]:!hidden" priority />
            <DukeelLogoFull className="!hidden h-12 min-[420px]:!inline-block sm:h-14" priority />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative px-3 py-2 text-sm font-semibold transition ${
                  isActive(item.href) ? "text-navy" : "text-navy/65 hover:text-navy"
                }`}
                href={item.href}
              >
                {item.label}
                {isActive(item.href) ? <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent" /> : null}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link className="button-primary" href="/contact#freight">
              Request Freight Support
            </Link>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="inline-flex h-11 w-11 items-center justify-center border border-navy/15 text-navy transition hover:bg-surface lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-navy/10 bg-white lg:hidden"
          >
            <Container className="py-4">
              <nav aria-label="Mobile" className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`border-b border-navy/10 px-1 py-4 text-base font-semibold ${
                      isActive(item.href) ? "text-navy" : "text-navy/70"
                    }`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link className="button-primary mt-5" href="/contact#freight" onClick={() => setIsOpen(false)}>
                  Request Freight Support
                </Link>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
