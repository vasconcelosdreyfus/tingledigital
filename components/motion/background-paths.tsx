/** The original line motif, drawn statically so it never competes with the headline. */
export function BackgroundPaths() {
  return (
    <div className="hero-paths pointer-events-none absolute inset-0" aria-hidden>
      {[1, -1].map((position) => (
        <svg
          key={position}
          className="absolute inset-0 block h-full w-full"
          viewBox="0 0 696 316"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          style={{ color: "var(--text)" }}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <path
              key={i}
              d={`M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`}
              stroke="currentColor"
              strokeWidth={0.5 + i * 0.03}
              strokeOpacity={0.035 + i * 0.002}
            />
          ))}
        </svg>
      ))}
    </div>
  );
}
