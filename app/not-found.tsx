import Link from "next/link";
import { getLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const english = (await getLocale()) === "en";

  const quickLinks = english
    ? [
        { href: "/", label: "Home" },
        { href: "/cases", label: "Cases" },
        { href: "/consultoria", label: "Consulting" },
        { href: "/utilities", label: "Utilities" },
        { href: "/sobre", label: "About" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/cases", label: "Cases" },
        { href: "/consultoria", label: "Consultoria" },
        { href: "/utilities", label: "Utilities" },
        { href: "/sobre", label: "Sobre" },
      ];

  return (
    <section
      className="py-24 lg:py-36"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
            404
          </p>
          <h1 className="text-display-1 text-balance">
            {english ? "Page not found." : "Página não encontrada."}
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            {english
              ? "The address you tried to visit does not exist or has moved. Choose one of the paths below or talk directly to our team."
              : "O endereço que você tentou acessar não existe ou mudou de lugar. Escolha um dos caminhos abaixo ou fale diretamente com a equipe."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/contato">
                {english ? "Go to Contact" : "Ir para Contato"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">{english ? "Back to Home" : "Voltar para Home"}</Link>
            </Button>
          </div>

          <nav
            aria-label={english ? "Main pages" : "Páginas principais"}
            className="mt-12 border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--surface-elevated)]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
