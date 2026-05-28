import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { LocaleToggle } from "@/components/layout/locale-toggle";

const columns = [
  {
    title: "Produtos",
    items: [
      { href: "/cognita", label: "Cognita" },
      { href: "/eter", label: "Eter" },
    ],
  },
  {
    title: "Serviços",
    items: [
      { href: "/consultoria", label: "Consultoria" },
      { href: "/utilities", label: "Utilities" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { href: "/cases", label: "Cases" },
      { href: "/sobre", label: "Sobre" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[--color-border] bg-[--color-bg]">
      <Container size="xl" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-6">
            <Image
              src="/brand/logo-placeholder.svg"
              alt="Tingle Digital"
              width={140}
              height={32}
            />
            <p className="max-w-sm text-sm text-[--color-text-muted]">
              Tecnologia com alma criativa. Construímos produtos, consultamos com impacto
              e modernizamos utilities.
            </p>
            <LocaleToggle />
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-eyebrow mb-4 text-[--color-text-muted]">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[--color-text] transition-colors hover:text-[--color-accent-yellow]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[--color-border] pt-8 text-xs text-[--color-text-subtle] sm:flex-row">
          <p>© {year} Tingle Digital. Todos os direitos reservados.</p>
          <p>CNPJ · contato@tingledigital.com</p>
        </div>
      </Container>
    </footer>
  );
}
