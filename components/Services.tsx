import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { services } from "@/data/content";

export default function Services() {
  const items = services.map((service) => ({
    title: service.title,
    content: (
      <div className="max-w-2xl">
        <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <Section
      id="services"
      label="Ce que je fais"
      title={
        <>
          Une seule personne,{" "}
          <em className="font-serif font-normal italic text-accent">
            toute la stack
          </em>
          .
        </>
      }
      subtitle="De l'idée à la mise en ligne, je prends en charge l'ensemble du développement."
    >
      <Accordion items={items} numbered defaultOpen={0} />
    </Section>
  );
}