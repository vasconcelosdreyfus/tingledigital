"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Lock, Check } from "lucide-react";

export function EterMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      {/* Phone frame */}
      <div className="relative w-[220px] h-[440px] rounded-[36px] border-[3px] border-[#2A2A35] bg-[#0a0a0f] overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-[#0a0a0f] z-10 border border-[#2A2A35]" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-[#888899]">
          <span>9:41</span>
          <span>•••</span>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A35]">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-[#FF2D75]" />
            <h3 className="text-sm font-black text-[#F5F5FA]">Eter</h3>
          </div>
          <span className="text-[10px] font-bold text-[#B8FF00] flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8FF00]" />
            online
          </span>
        </div>

        {/* Chat list */}
        <div className="px-3 py-3 space-y-2">
          <div className="text-[9px] uppercase tracking-wider text-[#5a5a6a] px-1 mb-1">
            Conversas
          </div>

          {[
            { name: "Júlia", preview: "Mandou os arquivos?", time: "14:32", unread: 2 },
            { name: "Carlos M.", preview: "Vamos amanhã às 9h", time: "12:08", unread: 0 },
            { name: "Equipe Legal", preview: "Documento aprovado.", time: "10:44", unread: 5 },
            { name: "Ana", preview: "🔒 Mensagem criptografada", time: "09:21", unread: 0 },
          ].map((chat, i) => (
            <motion.div
              key={chat.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 rounded-xl border border-[#2A2A35] bg-[#15151f] px-2.5 py-2"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF2D75] to-[#7A00FF] flex items-center justify-center text-[10px] font-black text-white">
                {chat.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F5F5FA]">{chat.name}</span>
                  <span className="text-[9px] text-[#5a5a6a]">{chat.time}</span>
                </div>
                <div className="text-[10px] text-[#888899] truncate">{chat.preview}</div>
              </div>
              {chat.unread > 0 && (
                <div className="h-4 min-w-4 px-1 rounded-full bg-[#FF2D75] text-[9px] font-bold text-white flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent">
          <p className="text-[9px] text-[#888899] flex items-center justify-center gap-1.5">
            <Check className="h-2.5 w-2.5 text-[#B8FF00]" />
            <Check className="h-2.5 w-2.5 text-[#B8FF00] -ml-1.5" />
            <span>Criptografia ponta-a-ponta</span>
          </p>
        </div>

        {/* Glow */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF2D75 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}
