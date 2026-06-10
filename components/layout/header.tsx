"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";

export function Header() {
  const t = useTranslations("header");

  const navItems = [
    { href: "/cognita", label: t("nav.cognita") },
    { href: "/eter", label: t("nav.eter") },
    { href: "/consultoria", label: t("nav.consultoria") },
    { href: "/utilities", label: t("nav.utilities") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/sobre", label: t("nav.sobre") },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)",
      }}
    >
      <Container size="xl" className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Tingle Digital — home"
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        >
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
            <Link href="/contato">{t("cta")}</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
