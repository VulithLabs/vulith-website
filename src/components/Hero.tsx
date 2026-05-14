"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      {/* Radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-subtle)_0%,_transparent_70%)] opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 font-mono text-sm text-text-secondary"
        >
          {"// Web3 & AI Security"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl"
        >
          Research-driven Web3 & AI security organization.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Based in Singapore. Focused on protocol-level security, formal
          verification, and adversarial AI research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#research"
            className="inline-flex h-10 items-center rounded border border-border px-5 text-sm text-text-primary transition-colors duration-200 hover:border-text-secondary hover:bg-surface"
          >
            Read our research
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded border border-border px-5 text-sm text-text-secondary transition-colors duration-200 hover:border-text-secondary hover:text-text-primary"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
