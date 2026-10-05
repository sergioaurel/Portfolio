"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LaptopFrame from "@/components/LaptopFrame";
import Section from "@/components/Section";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section
      id="projets"
      label="Projets sélectionnés"
      title={
        <>
          Des réalisations{" "}
          <em className="font-serif font-normal italic text-accent">
            concrètes
          </em>
          , utilisées au quotidien.
        </>
      }
      subtitle="Applications web conçues pour des besoins réels, au Bénin et au-delà."
    >
      <div className="space-y-8">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="group overflow-hidden rounded-3xl border border-line bg-[radial-gradient(ellipse_at_top,rgba(255,90,31,0.14),#0f0f0f_65%)] transition hover:border-accent/50"
          >
            <div className="px-6 pt-10 md:px-16 md:pt-14">
              <div className="transition duration-500 group-hover:-translate-y-1">
                <LaptopFrame title={project.title} image={project.image} />
              </div>
            </div>

            <div className="flex items-end justify-between gap-6 border-t border-line/60 p-6 md:px-10">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-widest text-muted">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir ${project.title}`}
                  className="shrink-0 rounded-full border border-line p-3 text-muted transition hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}