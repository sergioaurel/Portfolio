"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { about, profile, projects, skills } from "@/data/content";

export default function About() {
  const stats = [
    { value: projects.length, label: "Projets réalisés" },
    {
      value: skills.flatMap((group) => group.items).length,
      label: "Technologies utilisées",
    },
    { value: skills.length, label: "Domaines couverts" },
    { value: about.internships, label: "Stage en agence" },
  ];

  return (
    <Section
      id="apropos"
      label="À propos"
      title={
        <>
          Derrière chaque application fiable, quelqu&apos;un qui soigne les{" "}
          <em className="font-serif font-normal italic text-accent">
            détails
          </em>
          .
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line"
        >
          <Image
            src="/pic5.jpg"
            alt={`Portrait de ${profile.name}`}
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
            <p className="font-serif text-lg italic text-ink">
              « {about.quote} »
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted">
              {profile.name}, {profile.location}
            </p>
          </figcaption>
        </motion.figure>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-sm leading-relaxed text-muted"
          >
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-surface p-5"
              >
                <dd className="text-3xl font-semibold text-ink">
                  {stat.value}
                  <span className="text-accent">+</span>
                </dd>
                <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}