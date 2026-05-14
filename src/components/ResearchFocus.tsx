"use client";

import { motion } from "framer-motion";

const areas = [
  {
    index: "01",
    title: "Smart Contract Security",
    description:
      "Formal verification, invariant testing, and protocol-level audits for DeFi and infrastructure contracts.",
  },
  {
    index: "02",
    title: "AI Safety & Adversarial Research",
    description:
      "Studying failure modes, adversarial inputs, and alignment risks in production AI systems.",
  },
  {
    index: "03",
    title: "Cryptographic Protocol Analysis",
    description:
      "Reviewing zero-knowledge systems, MPC implementations, and consensus mechanisms for correctness.",
  },
];

export default function ResearchFocus() {
  return (
    <section id="research" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 font-mono text-sm text-text-secondary">
            {"// What we do"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Research Areas
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <motion.div
              key={area.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group rounded-md border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent-subtle"
            >
              <div className="mb-4 h-px w-10 bg-accent" />
              <span className="font-mono text-xs text-text-secondary">
                {area.index}
              </span>
              <h3 className="mt-2 text-base font-medium text-text-primary">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
