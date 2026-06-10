"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/primitives/container";

interface Feature {
  id: string;
  label: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}

interface HomeFeaturesTabsProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

export function HomeFeaturesTabs({
  eyebrow,
  title,
  subtitle,
  features,
}: HomeFeaturesTabsProps) {
  const [active, setActive] = React.useState(features[0]!.id);
  const activeFeature = features.find((f) => f.id === active) ?? features[0]!;

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E5E5E3]">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-eyebrow text-[#6B6B6B] mb-4">{eyebrow}</p>
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">{title}</h2>
          <p className="mt-6 text-lg text-[#6B6B6B] text-pretty">{subtitle}</p>
        </div>

        {/* Tab buttons */}
        <div className="mx-auto max-w-4xl mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] p-1">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  active === f.id
                    ? "bg-white text-[#0A0A0A] shadow-sm"
                    : "text-[#6B6B6B] hover:text-[#0A0A0A]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-display-3 text-balance text-[#0A0A0A]">
                  {activeFeature.title}
                </h3>
                <p className="mt-4 text-base text-[#6B6B6B] leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>
              <div className="rounded-xl border border-[#E5E5E3] bg-[#FAFAF9] overflow-hidden shadow-lg shadow-black/5">
                {activeFeature.visual}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
