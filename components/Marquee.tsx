import { skills } from "@/data/content";

export default function Marquee() {
  const items = skills.flatMap((group) => group.items);
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-base py-5">
      <ul className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm text-muted"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}