"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SocialIcon from "@/components/SocialIcon";
import { profile, socials } from "@/data/content";
import Logo from "@/components/Logo";

export default function ProfileCard() {
  const links = socials.filter((social) => social.href);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/60 font-serif text-lg italic text-white">
          <Logo />
        </span>
        <p className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs leading-tight text-white/80">
          <Sparkles size={14} className="shrink-0 text-accent" />
          {profile.availability}
        </p>
      </div>

      <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src="/pic4.jpg"
          alt={`Portrait de ${profile.name}`}
          fill
          priority
          sizes="384px"
          className="object-cover object-top"
        />
      </div>

      <div className="mt-5 text-center">
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-base font-medium text-white transition hover:text-accent"
        >
          {profile.email}
        </a>
        <p className="mt-1 text-xs text-white/55">Basé à {profile.location}</p>
      </div>

      <ul className="mt-5 flex justify-center gap-3">
        {links.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-accent hover:text-accent"
            >
              <SocialIcon name={social.name} />
            </a>
          </li>
        ))}
      </ul>

      <a
        href={profile.cv}
        download
        className="mt-5 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white transition hover:bg-white/10"
      >
        Télécharger mon CV
        <ArrowUpRight size={16} />
      </a>
    </motion.aside>
  );
}