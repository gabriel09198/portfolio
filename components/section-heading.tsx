import type { ReactNode } from "react";

export function Serif({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal tracking-[-0.02em] italic">{children}</span>;
}

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          <span className="text-accent">{index}</span> / {label}
        </p>
        <h2 className="mt-4 text-5xl leading-[0.95] font-semibold tracking-[-0.045em] sm:text-7xl">
          {title}
        </h2>
      </div>
      {children && <p className="max-w-sm text-pretty text-muted md:text-right">{children}</p>}
    </div>
  );
}
