import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cases",
  description: "Em breve — cases recentes da Tingle Digital.",
};

export default function CasesPage() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[80vh] flex items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow mb-6" style={{ color: "var(--text-secondary)" }}>
            Em breve
          </p>
          <h1 className="text-display-1 text-balance" style={{ color: "var(--text)" }}>
            Estamos compilando os cases.
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-pretty leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Em breve uma galeria completa com QBANHO + Equatorial, Hubz + Equatorial, EPES + Casa Brasil, Transforma Nova Iguaçu, FIXER, Circuito Musical das Águas, e mais.
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Por enquanto, conheça os principais em destaque na home.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/#cases">
                Ver cases em destaque
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">Falar com a Tingle</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
