"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";

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
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
      }}
    >
      <Container size="xl" className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Tingle Digital — home" className="text-lg font-bold tracking-tight" style={{ color: "var(--text)" }}>
          tingle.
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <Button size="sm" asChild>
            <Link href="/contato">Começar projeto</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
