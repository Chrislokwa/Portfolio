"use client";

import { Languages, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="apropos" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="À propos"
          title="Un profil à la croisée de la technique et de la gestion"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Texte de présentation */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "first:pl-10 relative" : ""}>
                  {i === 0 ? (
                    <Quote
                      className="absolute left-0 top-1 h-6 w-6 text-primary/40"
                      aria-hidden="true"
                    />
                  ) : null}
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <Languages className="h-4 w-4 text-primary" aria-hidden="true" />
                Langues
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {about.languages.map((lang) => (
                  <Badge
                    key={lang}
                    variant="secondary"
                    className="rounded-full px-4 py-1.5 text-sm"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Carte « En bref » */}
          <Reveal delay={0.12}>
            <Card className="border-border/80 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  En bref
                </h3>
                <Separator className="my-4" />
                <dl className="space-y-4">
                  {about.quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 break-words text-sm font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
