"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  label,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {label && (
          <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {label}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-xs text-sm text-muted">{subtitle}</p>
          )}
        </div>

        <div className="mt-12">{children}</div>
      </motion.div>
    </section>
  );
}