"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <Section
      id="parcours"
      label="Parcours"
      title={
        <>
          Chaque projet m&apos;a appris{" "}
          <em className="font-serif font-normal italic text-accent">
            quelque chose
          </em>{" "}
          de plus.
        </>
      }
    >
      <ol className="divide-y divide-line border-y border-line">
        {experiences.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="grid gap-3 py-8 md:grid-cols-[1.2fr_1.6fr_auto] md:items-start md:gap-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-ink">{exp.role}</h3>
              <p className="mt-1 text-sm text-muted">{exp.company}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {exp.description}
            </p>
            <time className="w-fit rounded-full border border-line px-3 py-1 text-xs text-muted">
              {exp.period}
            </time>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}