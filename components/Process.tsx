"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code, Rocket } from "lucide-react";
import Section from "@/components/Section";
import { process } from "@/data/content";

const icons = [ClipboardList, PenTool, Code, Rocket];

export default function Process() {
  return (
    <Section
      id="process"
      label="Méthode de travail"
      title={
        <>
          Comment un projet passe du{" "}
          <em className="font-serif font-normal italic text-accent">
            brief
          </em>{" "}
          à la mise en ligne.
        </>
      }
    >
      <ol className="grid gap-4 md:grid-cols-4">
        {process.map((step, index) => {
          const Icon = icons[index];

          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">
                  Étape {String(index + 1).padStart(2, "0")}
                </span>
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}