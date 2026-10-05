"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import Section from "@/components/Section";
import { profile } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio - ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nDe : ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-line bg-base px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <Section
      id="contact"
      label="Contact"
      title={
        <>
          Un projet en tête ? Parlons-en{" "}
          <em className="font-serif font-normal italic text-accent">
            calmement
          </em>
          .
        </>
      }
      subtitle="Dites-moi ce que vous voulez construire, je vous réponds rapidement."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <ul className="space-y-6 text-sm">
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-line p-2.5 text-accent">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                E-mail
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block text-ink hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-line p-2.5 text-accent">
              <GithubIcon size={16} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                GitHub
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-ink hover:text-accent"
              >
                github.com/sergioaurel
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="rounded-full border border-line p-2.5 text-accent">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Localisation
              </p>
              <p className="mt-1 text-ink">{profile.location}</p>
            </div>
          </li>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-line bg-surface p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              placeholder="Votre e-mail"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            placeholder="Parlez-moi de votre projet"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Envoyer le message <Send size={16} />
          </button>
        </form>
      </div>
    </Section>
  );
}