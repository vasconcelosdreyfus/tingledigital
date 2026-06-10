import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";

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
    <footer className="border-t border-[#E5E5E3] bg-[#FAFAF9]">
      <Container size="xl" className="py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <p className="text-2xl font-bold tracking-tight">tingle.</p>
            <p className="max-w-sm text-sm text-[#6B6B6B] leading-relaxed">
              Tecnologia com alma criativa. Construímos produtos, consultamos com
              impacto e modernizamos utilities.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors"
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
        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 border-t border-[#E5E5E3] pt-8 text-xs text-[#A0A0A0]">
          <p>© {year} Tingle Digital. Todos os direitos reservados.</p>
          <p>CNPJ 33.486.049/0001-55 · dreyfus@tingledigital.com</p>
        </div>
      </Container>
    </footer>
  );
}
