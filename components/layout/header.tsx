"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/cognita", label: "Cognita" },
  { href: "/eter", label: "Eter" },
  { href: "/consultoria", label: "Consultoria" },
  { href: "/utilities", label: "Utilities" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[--color-border]/60 bg-[--color-bg]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container size="xl" className="flex h-16 items-center justify-between gap-8">
        <Link
          href="/"
          aria-label="Tingle Digital — home"
          className="flex items-center gap-2"
        >
          <Image
            src="/brand/logo-placeholder.svg"
            alt="Tingle Digital"
            width={120}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[--color-text-muted] transition-colors hover:text-[--color-text]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleToggle className="hidden sm:inline-flex" />
          <Button size="sm" asChild>
            <Link href="/contato">Fale conosco</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
