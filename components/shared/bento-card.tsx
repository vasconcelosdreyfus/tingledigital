"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, MessageCircle, Lightbulb, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoPillar = "cognita" | "eter" | "consultoria" | "utilities";

interface BentoCardProps {
  pillar: BentoPillar;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  size?: "default" | "wide" | "tall";
  className?: string;
}

const accentMap: Record<BentoPillar, { hex: string; rgba: string }> = {
  cognita: { hex: "#00F0FF", rgba: "rgba(0,240,255,0.6)" },
  eter: { hex: "#FF2D75", rgba: "rgba(255,45,117,0.6)" },
  consultoria: { hex: "#FFEB00", rgba: "rgba(255,235,0,0.6)" },
  utilities: { hex: "#B8FF00", rgba: "rgba(184,255,0,0.6)" },
};

const sizeMap: Record<NonNullable<BentoCardProps["size"]>, string> = {
  default: "lg:col-span-1 lg:row-span-1",
  wide: "lg:col-span-2 lg:row-span-1",
  tall: "lg:col-span-1 lg:row-span-2",
};

// Live widget: animated grade counter
function CognitaWidget({ color }: { color: string }) {
  const [grade, setGrade] = React.useState(7.5);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setGrade(() => +(Math.random() * 3 + 7).toFixed(1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-3">
      <BookOpen className="h-5 w-5" style={{ color }} />
      <div className="flex-1">
        <div className="text-[9px] uppercase tracking-wider text-[#888899]">Média 5º A</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={grade}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-black"
            style={{ color }}
          >
            {grade.toFixed(1)}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-end gap-0.5 h-6">
        {[40, 65, 80, 70, 90].map((h, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-sm"
            style={{ backgroundColor: color, opacity: 0.6 }}
            animate={{ height: `${h + Math.sin(Date.now() / 1000 + i) * 10}%` }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}

// Live widget: chat ripple with new message
function EterWidget({ color }: { color: string }) {
  const messages = ["Júlia: Vamos juntos? ✨", "Pedro: Sim, lá pelas 18h", "Ana: Conta comigo!"];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIdx((p) => (p + 1) % messages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-start gap-3">
      <div className="relative">
        <MessageCircle className="h-5 w-5" style={{ color }} />
        <motion.span
          className="absolute -top-1 -right-1 h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="flex-1 min-w-0 h-14">
        <div className="text-[9px] uppercase tracking-wider text-[#888899] mb-1">Conversa ativa</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border px-2.5 py-1.5 text-[11px] truncate"
            style={{ borderColor: `${color}40`, backgroundColor: `${color}0d`, color: "#F5F5FA" }}
          >
            {messages[idx]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Live widget: idea bulb pulse + step counter
function ConsultoriaWidget({ color }: { color: string }) {
  const phases = ["Diagnóstico", "Estratégia", "Execução", "Sustentação"];
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % phases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <Lightbulb className="h-5 w-5" style={{ color }} />
      </motion.div>
      <div className="flex-1">
        <div className="text-[9px] uppercase tracking-wider text-[#888899]">Em curso</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            className="text-sm font-bold"
            style={{ color }}
          >
            {phases[phase]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-0.5">
        {phases.map((_, i) => (
          <div
            key={i}
            className="h-3 w-1 rounded-full transition-colors"
            style={{ backgroundColor: i <= phase ? color : "#2A2A35" }}
          />
        ))}
      </div>
    </div>
  );
}

// Live widget: sensor ping with current value
function UtilitiesWidget({ color }: { color: string }) {
  const [voltage, setVoltage] = React.useState(220);
  const [current, setCurrent] = React.useState(8.4);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setVoltage(218 + Math.floor(Math.random() * 6));
      setCurrent(+(Math.random() * 3 + 7).toFixed(1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Zap className="h-5 w-5" style={{ color }} fill={color} />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color, opacity: 0.2 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="flex-1 flex gap-3">
        <div>
          <div className="text-[9px] uppercase tracking-wider text-[#888899]">Tensão</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={voltage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm font-black"
              style={{ color }}
            >
              {voltage}V
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-[#888899]">Corrente</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm font-black"
              style={{ color }}
            >
              {current}A
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PillarWidget({ pillar, color }: { pillar: BentoPillar; color: string }) {
  switch (pillar) {
    case "cognita": return <CognitaWidget color={color} />;
    case "eter": return <EterWidget color={color} />;
    case "consultoria": return <ConsultoriaWidget color={color} />;
    case "utilities": return <UtilitiesWidget color={color} />;
  }
}

export function BentoCard({
  pillar,
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "Saiba mais",
  size = "default",
  className,
}: BentoCardProps) {
  const accent = accentMap[pillar];
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-[#2A2A35] bg-[#15151f]/60 p-8 transition-all duration-300 hover:border-[#3A3A48]",
        sizeMap[size],
        className
      )}
      style={{ boxShadow: `inset 0 0 0 0 ${accent.rgba}` }}
    >
      {/* Animated gradient orb that follows hover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full blur-3xl opacity-25 transition-opacity group-hover:opacity-50"
        style={{ background: `radial-gradient(circle, ${accent.hex} 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <p className="text-eyebrow" style={{ color: accent.hex }}>{eyebrow}</p>
          <ArrowUpRight
            className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: accent.hex }}
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 text-3xl font-bold text-balance text-[#F5F5FA]">{title}</h3>
        <p className="mt-4 max-w-md text-base text-[#888899] leading-relaxed">
          {description}
        </p>
      </div>

      {/* LIVE widget */}
      <div className="relative z-10 my-6 rounded-2xl border border-[#2A2A35] bg-[#0a0a0f]/50 p-4">
        <PillarWidget pillar={pillar} color={accent.hex} />
      </div>

      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold">
        <span style={{ color: accent.hex }}>{ctaLabel}</span>
        <motion.span
          className="h-px"
          style={{ backgroundColor: accent.hex }}
          initial={{ width: 32 }}
          whileHover={{ width: 56 }}
        />
      </div>
    </Link>
  );
}
