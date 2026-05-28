import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Marquee } from "@/components/motion/marquee";
import type { Client } from "@/content/data/clients";

interface LogosMarqueeProps {
  eyebrow?: string;
  title?: string;
  clients: Client[];
  tone?: "default" | "elevated";
}

export function LogosMarquee({
  eyebrow = "Confiam na Tingle",
  title,
  clients,
  tone = "elevated",
}: LogosMarqueeProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            {title && <h2 className="text-display-3 mt-4 max-w-2xl">{title}</h2>}
          </div>
        </div>
      </Container>
      <Marquee speed="slow" pauseOnHover className="border-y border-[--color-border] py-8">
        {clients.map((c) => (
          <span
            key={c.name}
            className="text-2xl font-bold text-[--color-text-muted] hover:text-[--color-text] transition-colors px-8 whitespace-nowrap"
          >
            {c.name}
          </span>
        ))}
      </Marquee>
    </Section>
  );
}
