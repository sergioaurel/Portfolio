import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { faq } from "@/data/content";

export default function Faq() {
  const items = faq.map((entry) => ({
    title: entry.question,
    content: (
      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        {entry.answer}
      </p>
    ),
  }));

  return (
    <Section
      id="faq"
      label="FAQ"
      title={
        <>
          Les questions qu&apos;on me pose{" "}
          <em className="font-serif font-normal italic text-accent">
            souvent
          </em>{" "}
          avant de commencer.
        </>
      }
    >
      <Accordion items={items} />
    </Section>
  );
}