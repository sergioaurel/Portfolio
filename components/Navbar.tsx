"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, profile } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#accueil"
          aria-label={`${profile.name}, retour à l'accueil`}
          className="transition hover:opacity-80"
        >
          <Logo size="sm" />
        </a>

        <ul className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 lg:inline-block"
        >
          Me contacter
        </a>

        <button
          className="text-ink lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-base px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-muted hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-black"
            >
              Me contacter
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}