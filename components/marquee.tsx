import { marquee } from "@/lib/data";

export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <div className="overflow-hidden border-y border-line py-7 mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= marquee.length}
            className="flex items-center gap-10 pr-10 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            <span className={i % 2 ? "font-serif font-normal text-muted italic" : "text-fg/85"}>
              {item}
            </span>
            <span className="text-2xl text-accent">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
