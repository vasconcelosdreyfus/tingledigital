import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";
import { contato } from "@/content/data/contato";

export const metadata: Metadata = {
  title: "Contato",
  description: contato.hero.subtitle,
  openGraph: { title: "Contato · Tingle Digital", description: contato.hero.subtitle },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={contato.hero.eyebrow}
        title={contato.hero.title}
        subtitle={contato.hero.subtitle}
        pillarColor="yellow"
      />

      <Section spacing="lg">
        <Container size="md">
          <ContactForm />
        </Container>
      </Section>

      <Section spacing="lg" tone="elevated">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div>
              <Eyebrow>{contato.channels.eyebrow}</Eyebrow>
              <h2 className="text-display-3 mt-4">{contato.channels.title}</h2>
            </div>
            <ul className="space-y-6">
              {contato.channels.items.map((ch) => (
                <li key={ch.label}>
                  <Link
                    href={ch.href}
                    className="group flex items-baseline justify-between gap-6 border-b border-[--color-border] pb-4 hover:border-[--color-accent-yellow]"
                  >
                    <span className="text-eyebrow text-[--color-text-muted]">{ch.label}</span>
                    <span className="text-lg font-bold group-hover:text-[--color-accent-yellow] transition-colors">
                      {ch.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container size="md">
          <Eyebrow>{contato.location.eyebrow}</Eyebrow>
          <h2 className="text-display-3 mt-4 text-balance">{contato.location.title}</h2>
          <p className="mt-6 text-lg text-[--color-text-muted] leading-relaxed">
            {contato.location.body}
          </p>
        </Container>
      </Section>
    </>
  );
}
