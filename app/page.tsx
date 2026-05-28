import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Section spacing="xl">
      <Container>
        <Eyebrow color="yellow">Em construção · Plan 2</Eyebrow>
        <h1 className="text-display-1 mt-4 text-balance">
          Tingle Digital.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[--color-text-muted]">
          A home definitiva é construída no Plano 2. Por enquanto, confira o{" "}
          <Link
            href="/design-system"
            className="text-[--color-accent-yellow] underline underline-offset-4"
          >
            design system
          </Link>
          .
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/design-system">Ver design system</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
