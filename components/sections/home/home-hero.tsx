"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HomeHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function HomeHero({
  eyebrow,
  titleLine1,
  titleLine2,
  titleAccent,
  subtitle,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  return (
    <section className="relative bg-white pt-32 pb-24 lg:pt-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill announcement */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex"
          >
            <Link
              href="/cognita"
              className="group inline-flex items-center gap-2 rounded-full border border-[#E5E5E3] bg-white px-4 py-1.5 text-sm text-[#6B6B6B] hover:border-[#D4D4D2] hover:text-[#0A0A0A] transition-colors shadow-sm"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0A0A0A]" />
              <span>Lançamento Cognita 2025 — saiba mais</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-1 text-balance text-[#0A0A0A]"
          >
            {titleLine1} {titleLine2} {titleAccent}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 mx-auto max-w-2xl text-lg text-[#6B6B6B] text-pretty leading-relaxed sm:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24"
        >
          <div className="mx-auto max-w-5xl rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] shadow-2xl shadow-black/5 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E5E5E3] bg-white">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-4 flex-1 max-w-xs">
                <div className="inline-flex items-center gap-2 rounded-md bg-[#F8F8F7] px-3 py-1 text-xs text-[#6B6B6B]">
                  <span>🔒</span>
                  <span>cognita.app</span>
                </div>
              </div>
            </div>

            {/* App content */}
            <div className="grid grid-cols-[180px_1fr] h-[400px]">
              <aside className="border-r border-[#E5E5E3] bg-white p-4 space-y-1">
                <div className="text-xs font-bold text-[#0A0A0A] mb-4">COGNITA</div>
                {["Dashboard", "Turmas", "Diário", "Boletim", "Famílias", "Relatórios"].map((item, i) => (
                  <div
                    key={item}
                    className={`text-sm rounded px-3 py-2 ${
                      i === 1
                        ? "bg-[#F8F8F7] text-[#0A0A0A] font-medium"
                        : "text-[#6B6B6B] hover:bg-[#FAFAF9]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              <main className="p-6 overflow-hidden bg-white">
                <div className="text-xs text-[#A0A0A0] mb-1">Turma · 5º Ano A</div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-5">Diário de Classe</h3>

                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Alunos", value: "28" },
                    { label: "Presença", value: "96%" },
                    { label: "Aulas", value: "142" },
                    { label: "Média", value: "8.4" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-[#E5E5E3] bg-[#FAFAF9] p-3">
                      <div className="text-[10px] uppercase tracking-wider text-[#A0A0A0]">
                        {s.label}
                      </div>
                      <div className="text-lg font-bold text-[#0A0A0A] mt-1">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    ["Ana Beatriz", "Presente"],
                    ["Bernardo S.", "Presente"],
                    ["Caio Mendes", "Falta"],
                    ["Daniela L.", "Presente"],
                  ].map(([name, status]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-md border border-[#E5E5E3] bg-white px-3 py-2"
                    >
                      <span className="text-sm text-[#0A0A0A]">{name}</span>
                      <span
                        className={`text-xs font-medium ${
                          status === "Falta" ? "text-[#DC2626]" : "text-[#16A34A]"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
