"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { profile, projects } from "@/data/content";

const badges = ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Next.js"];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-base">
      {/* 1. Dégradé orange sur toute la hauteur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_90%_at_70%_25%,#e07a3f_0%,#b8501f_35%,#6b2209_65%,#1a0a05_100%)]"
      />

      {/* 2. Fondu vers le noir, juste avant le bandeau */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base"
      />

      {/* 3. Texte « Full Stack » en contour */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[1vw] bottom-8 select-none whitespace-nowrap text-[20vw] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] md:text-[10vw]"
      >
        Full Stack
      </span>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Introduction
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            Des solutions web conçues pour{" "}
            <em className="font-serif font-normal italic">vraies</em>{" "}
            entreprises.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
            {profile.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur">
              <p className="text-3xl font-semibold text-white">
                {projects.length}+
              </p>
              <p className="mt-1 text-xs text-white/60">Projets réalisés</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur">
              <p className="flex items-center gap-1 text-lg font-semibold text-white">
                <MapPin size={16} /> Cotonou
              </p>
              <p className="mt-1 text-xs text-white/60">Bénin</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Démarrer un projet <ArrowRight size={16} />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Voir mes projets
            </a>
          </div>
        </motion.div>

        <ProfileCard />
      </div>
    </section>
  );
}