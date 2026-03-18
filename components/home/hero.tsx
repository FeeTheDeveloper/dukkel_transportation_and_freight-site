"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { HeroTruck } from "@/components/graphics/hero-truck";
import { Container } from "@/components/shared/container";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="eyebrow border-white/20 bg-white/10 text-white">Contract-ready freight operations</span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Mission-Driven Freight & Logistics Execution
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Veteran-owned. Contract-ready. Built for precision logistics.
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              Dukeel Transportation & Freight Corporation is a Texas-based, veteran-owned freight and logistics company
              delivering disciplined execution for commercial transportation and government support requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="button-primary" href="/contact">
                Request Services
              </Link>
              <Link className="button-secondary" href="/government-contracting">
                Government Contracting
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-display text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <HeroTruck />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
