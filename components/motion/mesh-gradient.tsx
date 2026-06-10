"use client";

import * as React from "react";

interface MeshGradientProps {
  className?: string;
  colors?: [string, string, string, string];
  speed?: number;
}

export function MeshGradient({
  className = "",
  colors = ["#FFEB00", "#FF2D75", "#00F0FF", "#B8FF00"],
  speed = 1,
}: MeshGradientProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const t = frame * 0.003 * speed;
      const blobs = [
        {
          x: w * (0.5 + Math.sin(t * 0.7) * 0.3),
          y: h * (0.4 + Math.cos(t * 0.5) * 0.25),
          r: Math.min(w, h) * 0.55,
          c: colors[0],
        },
        {
          x: w * (0.5 + Math.cos(t * 0.4) * 0.35),
          y: h * (0.6 + Math.sin(t * 0.6) * 0.3),
          r: Math.min(w, h) * 0.5,
          c: colors[1],
        },
        {
          x: w * (0.5 + Math.sin(t * 0.6 + 1.5) * 0.3),
          y: h * (0.5 + Math.cos(t * 0.45 + 1) * 0.35),
          r: Math.min(w, h) * 0.45,
          c: colors[2],
        },
        {
          x: w * (0.5 + Math.cos(t * 0.55 + 2) * 0.25),
          y: h * (0.5 + Math.sin(t * 0.4 + 2) * 0.25),
          r: Math.min(w, h) * 0.4,
          c: colors[3],
        },
      ];

      ctx.globalCompositeOperation = "screen";
      for (const blob of blobs) {
        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.r
        );
        grad.addColorStop(0, hexToRgba(blob.c, 0.45));
        grad.addColorStop(0.5, hexToRgba(blob.c, 0.18));
        grad.addColorStop(1, hexToRgba(blob.c, 0));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";

      frame++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [colors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ filter: "blur(40px)" }}
      aria-hidden="true"
    />
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
