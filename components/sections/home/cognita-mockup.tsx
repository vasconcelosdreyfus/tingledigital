"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function CognitaMockup() {
  return (
    <div className="relative w-full h-full p-6">
      {/* Browser frame */}
      <div className="relative w-full h-full rounded-2xl border border-[#2A2A35] bg-[#0a0a0f] overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2A35] bg-[#15151f]/60">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-4 flex-1">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#0a0a0f] px-3 py-1 text-xs text-[#888899]">
              <span>🔒</span>
              <span>cognita.app</span>
            </div>
          </div>
        </div>

        {/* App layout: sidebar + main */}
        <div className="grid grid-cols-[140px_1fr] h-[calc(100%-44px)]">
          {/* Sidebar */}
          <aside className="border-r border-[#2A2A35] bg-[#0c0c12] p-3 space-y-1">
            <div className="text-[10px] font-bold text-[#00F0FF] mb-3">COGNITA</div>
            {["Dashboard", "Turmas", "Diário", "Boletim", "Famílias"].map((item, i) => (
              <div
                key={item}
                className={`text-xs rounded px-2 py-1.5 ${
                  i === 1
                    ? "bg-[#00F0FF]/10 text-[#00F0FF]"
                    : "text-[#888899] hover:bg-[#15151f]"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="p-5 overflow-hidden">
            <div className="text-xs text-[#888899] mb-1">Turma · 5º Ano A</div>
            <h3 className="text-lg font-bold text-[#F5F5FA] mb-4">Diário de Classe</h3>

            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Alunos", value: "28", color: "#00F0FF" },
                { label: "Presença", value: "96%", color: "#B8FF00" },
                { label: "Aulas", value: "142", color: "#FFEB00" },
                { label: "Média", value: "8.4", color: "#FF2D75" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-[#2A2A35] bg-[#15151f] p-2">
                  <div className="text-[9px] uppercase tracking-wider text-[#888899]">
                    {s.label}
                  </div>
                  <div className="text-base font-black" style={{ color: s.color }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              {[
                ["Ana Beatriz", "Presente", "#B8FF00"],
                ["Bernardo S.", "Presente", "#B8FF00"],
                ["Caio Mendes", "Falta", "#FF2D75"],
                ["Daniela L.", "Presente", "#B8FF00"],
                ["Eduardo R.", "Presente", "#B8FF00"],
              ].map(([name, status, color]) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between rounded-md border border-[#2A2A35] bg-[#0a0a0f]/60 px-2.5 py-1.5"
                >
                  <span className="text-xs text-[#F5F5FA]">{name}</span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider"
                    style={{ color: color as string }}
                  >
                    {status}
                  </span>
                </motion.div>
              ))}
            </div>
          </main>
        </div>

        {/* Glow */}
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}
