"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex w-14 h-7 p-0.5 rounded-full cursor-pointer transition-colors duration-300"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      <div
        className="flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300"
        style={{
          backgroundColor: "var(--text)",
          transform: isDark ? "translateX(28px)" : "translateX(0)",
        }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5" strokeWidth={2} style={{ color: "var(--bg)" }} />
        ) : (
          <Sun className="w-3.5 h-3.5" strokeWidth={2} style={{ color: "var(--bg)" }} />
        )}
      </div>
    </button>
  );
}
