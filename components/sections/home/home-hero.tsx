"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface HomeHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const PARTICLE_POSITIONS = [
  { top: "12%", left: "8%" },
  { top: "22%", left: "78%" },
  { top: "35%", left: "15%" },
  { top: "48%", left: "92%" },
  { top: "60%", left: "5%" },
  { top: "72%", left: "65%" },
  { top: "85%", left: "30%" },
  { top: "18%", left: "55%" },
  { top: "42%", left: "42%" },
  { top: "68%", left: "85%" },
  { top: "28%", left: "25%" },
  { top: "55%", left: "70%" },
];

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
    <section className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-24">
      {/* Background orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[-15%] left-[-10%] w-[55vw] aspect-square rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,235,0,0.35) 0%, rgba(255,45,117,0.18) 45%, transparent 75%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-20%] right-[-12%] w-[60vw] aspect-square rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.32) 0%, rgba(184,255,0,0.18) 45%, transparent 75%)",
        }}
      />

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.2, 0.4, 0],
              y: [0, -16, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-[--color-text]"
            style={pos}
          />
        ))}
      </div>

      {/* Diagonal slash decoration */}
      <div
        className="absolute top-1/4 left-0 right-0 h-px opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-text), transparent)",
          transform: "rotate(-2deg)",
        }}
      />

      {/* Side sticker — DESDE 2019 */}
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 0 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute right-12 top-1/3 z-10"
      >
        <div className="rounded-2xl border border-[--color-accent-cyan]/40 bg-[--color-bg]/80 backdrop-blur px-5 py-3 shadow-[0_0_32px_-12px_rgba(0,240,255,0.5)]">
          <p className="text-eyebrow text-[--color-accent-cyan]">DESDE</p>
          <p className="text-3xl font-black text-[--color-text]">2019</p>
        </div>
      </motion.div>

      <Container className="relative z-10">
        {/* Top sticker badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFEB00] px-4 py-2 text-sm font-bold text-[#0a0a0f] shadow-[0_0_24px_rgba(255,235,0,0.4)]">
            <Star className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            <span>6 ANOS</span>
            <span className="opacity-50">·</span>
            <span>50+ PROJETOS</span>
            <span className="opacity-50">·</span>
            <span>10K+ PESSOAS</span>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#B8FF00] opacity-75 animate-ping" />
            <span className="relative rounded-full h-2 w-2 bg-[#B8FF00]" />
          </span>
          <p className="text-eyebrow text-[--color-text-muted]">{eyebrow}</p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-display-1 text-balance"
        >
          <span className="block">{titleLine1}</span>
          <span className="block">
            {titleLine2}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#FFEB00] via-[#FF2D75] to-[#00F0FF] bg-clip-text text-transparent">
                {titleAccent}
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 5 6 Q 75 2, 150 6 T 295 6"
                  stroke="url(#underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.1 }}
                />
                <defs>
                  <linearGradient id="underline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFEB00" />
                    <stop offset="50%" stopColor="#FF2D75" />
                    <stop offset="100%" stopColor="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 max-w-2xl text-xl text-[--color-text-muted] text-pretty leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="xl">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="ghost">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[--color-text-subtle]"
        >
          <span className="text-eyebrow">PARCEIROS</span>
          <span className="font-semibold text-[--color-text-muted]">Casa Brasil</span>
          <span className="opacity-50">·</span>
          <span className="font-semibold text-[--color-text-muted]">Hubz</span>
          <span className="opacity-50">·</span>
          <span className="font-semibold text-[--color-text-muted]">The Town</span>
          <span className="opacity-50">·</span>
          <span className="font-semibold text-[--color-text-muted]">QBanho</span>
        </motion.div>
      </Container>
    </section>
  );
}
