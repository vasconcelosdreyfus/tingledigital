import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { ProductSplit } from "@/components/shared/product-split";

interface ProductHighlight {
  pillar: "cognita" | "eter";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
}

interface HomeProductSpotlightProps {
  eyebrow: string;
  title: string;
  products: ProductHighlight[];
}

export function HomeProductSpotlight({ eyebrow, title, products }: HomeProductSpotlightProps) {
  return (
    <>
      <Section spacing="lg" tone="elevated">
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-display-2 mt-4 max-w-3xl text-balance">{title}</h2>
        </Container>
      </Section>
      {products.map((p, i) => (
        <ProductSplit
          key={p.pillar}
          pillar={p.pillar}
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
          bullets={p.bullets}
          cta={p.cta}
          imageRight={i % 2 === 0}
        />
      ))}
    </>
  );
}
