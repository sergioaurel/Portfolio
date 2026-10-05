"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section
      id="competences"
      label="Compétences"
      title={
        <>
          Les outils que j&apos;utilise,{" "}
          <em className="font-serif font-normal italic text-accent">
            honnêtement
          </em>{" "}
          évalués.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="text-lg font-semibold text-ink">
              {group.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-base px-3 py-1.5 text-sm text-muted transition hover:border-accent hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}