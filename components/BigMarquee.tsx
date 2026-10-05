export default function BigMarquee() {
  const words = Array.from({ length: 8 });

  return (
    <a
      href="#contact"
      aria-label="Aller au formulaire de contact"
      className="group block overflow-hidden border-y border-line py-8"
    >
      <ul className="flex w-max animate-marquee items-center gap-10 [animation-duration:25s] group-hover:[animation-play-state:paused]">
        {words.map((_, i) => (
          <li
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-6xl font-semibold tracking-tight text-ink transition group-hover:text-accent md:text-8xl"
          >
            Parlons-en
            <span className="h-3 w-3 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </a>
  );
}