"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

/** Wrapper that paints a soft glow following the pointer, tinted by `color`. */
export function Spotlight({
  children,
  className = "",
  color = "rgb(200 245 60)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onPointerMove={handleMove}
      style={{ "--spot": color } as CSSProperties}
      className={`group/spot relative isolate ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--spot) 14%, transparent), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
