"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/cognita", label: "Cognita" },
  { href: "/eter", label: "Eter" },
  { href: "/consultoria", label: "Consultoria" },
  { href: "/utilities", label: "Utilities" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E5E3] bg-white/80 backdrop-blur-xl">
      <Container size="xl" className="flex h-16 items-center justify-between gap-8">
        <Link href="/" aria-label="Tingle Digital — home" className="text-lg font-bold tracking-tight">
          tingle.
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/contato">Entrar em contato</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contato">Começar projeto</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
