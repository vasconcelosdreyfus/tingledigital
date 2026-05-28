"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AllowedTag = "h1" | "h2" | "h3" | "p" | "span";

interface TextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: AllowedTag;
}

export function TextReveal({
  text,
  className,
  stagger = 0.04,
  delay = 0,
  as = "p",
}: TextRevealProps) {
  const words = text.split(" ");
  const Tag = motion[as] as React.ComponentType<
    HTMLMotionProps<AllowedTag> & { className?: string }
  >;

  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
