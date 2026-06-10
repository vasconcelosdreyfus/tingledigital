"use client";

import * as React from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";

interface HomeManifestoProps {
  eyebrow: string;
  paragraphs: string[];
}

export function HomeManifesto({ eyebrow, paragraphs }: HomeManifestoProps) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={sectionRef}>
      <Section spacing="xl" tone="elevated">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Sticky eyebrow + label */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow color="pink">{eyebrow}</Eyebrow>
              <p className="mt-4 text-eyebrow text-[#888899]">
                Como pensamos · como construímos
              </p>
            </div>

            {/* Paragraphs that reveal on scroll */}
            <div className="space-y-12">
              {paragraphs.map((p, i) => (
                <ParagraphReveal
                  key={i}
                  text={p}
                  index={i}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

interface ParagraphRevealProps {
  text: string;
  index: number;
  progress: MotionValue<number>;
}

function ParagraphReveal({ text, index, progress }: ParagraphRevealProps) {
  const start = 0.1 + index * 0.15;
  const end = start + 0.25;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  const y = useTransform(progress, [start, end], [40, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-display-3 text-balance leading-tight"
    >
      {text}
    </motion.p>
  );
}
