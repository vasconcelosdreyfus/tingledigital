import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { validationLogos } from "@/content/data/apps";
import { cn } from "@/lib/utils";

// A Rock World vem primeiro e um degrau maior; as demais dividem a mesma altura.
const FEATURED = "Rock World";

interface ValidationLogosProps {
  eyebrow: string;
  className?: string;
}

/**
 * Faixa estática de logos reais. Todos em uma cor só:
 * claro = preto a 70% (brightness(0)); escuro = branco (brightness(0) invert(1)).
 * brightness(0) preserva o alfa, então logos brancos com fundo transparente também aparecem no tema claro.
 */
export function ValidationLogos({ eyebrow, className }: ValidationLogosProps) {
  const ordered = [
    ...validationLogos.filter((l) => l.name === FEATURED),
    ...validationLogos.filter((l) => l.name !== FEATURED),
  ];

  return (
    <section
      aria-label={eyebrow}
      className={cn("py-12 lg:py-16", className)}
      style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <Container>
        <Reveal>
          <p className="text-eyebrow text-center mb-8" style={{ color: "var(--text-secondary)" }}>
            {eyebrow}
          </p>
        </Reveal>
        <RevealGroup
          as="ol"
          stagger={0.08}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14"
        >
          {ordered.map((logo) => {
            const featured = logo.name === FEATURED;
            return (
              <RevealItem as="li" key={logo.name} className="flex items-center">
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  sizes="200px"
                  className={cn(
                    "w-auto brightness-0 dark:invert",
                    featured ? "h-10 sm:h-12 opacity-90 dark:opacity-100" : "h-8 sm:h-9 opacity-70 dark:opacity-80",
                  )}
                />
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
