import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { TextReveal } from "@/components/motion/text-reveal";

interface HomeManifestoProps {
  eyebrow: string;
  paragraphs: string[];
}

export function HomeManifesto({ eyebrow, paragraphs }: HomeManifestoProps) {
  return (
    <Section spacing="xl" tone="elevated">
      <Container size="md">
        <Eyebrow color="pink">{eyebrow}</Eyebrow>
        <div className="mt-10 space-y-10">
          {paragraphs.map((p, i) => (
            <TextReveal
              key={i}
              as="p"
              text={p}
              className="text-display-3 text-balance leading-tight"
              stagger={0.02}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
