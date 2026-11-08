"use client";

import { Reveal } from "./reveal";

/**
 * En-tête de section homogène : sur-titre discret, titre serif
 * et description facultative.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      <span
        aria-hidden="true"
        className="mt-6 block h-px w-16 bg-primary/40"
      />
    </Reveal>
  );
}
