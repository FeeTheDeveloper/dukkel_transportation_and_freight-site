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

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between gap-4 lg:h-20">
          <Link className="flex min-w-0 items-center" href="/">
            <DukeelLogoMark className="h-12 w-auto flex-none min-[420px]:hidden" />
            <DukeelLogoFull className="hidden h-12 w-auto min-[420px]:block sm:h-[3.35rem] lg:h-[3.55rem]" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? "bg-navy text-white" : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link className="button-ghost" href="/contact">
              Request Services
            </Link>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition hover:bg-navy/5 lg:hidden"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-navy/10 bg-white lg:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      pathname === item.href ? "bg-navy text-white" : "bg-surface text-navy/80"
                    }`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link className="button-primary mt-2" href="/contact" onClick={() => setIsOpen(false)}>
                  Request Services
                </Link>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
