"use client";

import { motion } from "framer-motion";

type Severity = "Critical" | "High" | "Medium";

interface Finding {
  date: string;
  severity: Severity;
  title: string;
}

const findings: Finding[] = [
  {
    date: "2025-12-01",
    severity: "Critical",
    title: "Reentrancy via callback in staking module",
  },
  {
    date: "2025-11-15",
    severity: "High",
    title: "Arithmetic precision loss in AMM curve",
  },
  {
    date: "2025-10-22",
    severity: "Medium",
    title: "Stale oracle price in liquidation path",
  },
  {
    date: "2025-09-30",
    severity: "High",
    title: "Unvalidated input in ZK-proof verifier",
  },
  {
    date: "2025-08-14",
    severity: "Medium",
    title: "Model inversion attack on federated endpoint",
  },
];

const severityColor: Record<Severity, string> = {
  Critical: "bg-red-500/15 text-red-400 border-red-500/20",
  High: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  Medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
};

export default function SecurityNotes() {
  return (
    <section id="findings" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 font-mono text-sm text-text-secondary">
            {"// Selected work"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Security Notes
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-border rounded-md border border-border bg-surface">
          {findings.map((finding, i) => (
            <motion.div
              key={finding.date + finding.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: "easeOut",
              }}
              className="group flex flex-col gap-3 px-5 py-4 transition-colors duration-150 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="shrink-0 font-mono text-xs text-text-secondary">
                {finding.date}
              </span>
              <span
                className={`inline-flex w-fit shrink-0 items-center rounded border px-2 py-0.5 font-mono text-[11px] leading-none ${severityColor[finding.severity]}`}
              >
                {finding.severity}
              </span>
              <span className="text-sm text-text-primary transition-colors duration-150 group-hover:text-accent">
                {finding.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
