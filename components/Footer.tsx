import { navLinks, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl italic text-ink">
            Fait avec soin à {profile.location.split(",")[0]}.
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Si vous avez une idée, je serai ravi de la transformer en
            application web.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </p>
        <a href="#accueil" className="hover:text-ink">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}