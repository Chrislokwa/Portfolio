"use client";

import {
  Banknote,
  Code2,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  finance: Banknote,
  tools: Wrench,
};

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Compétences"
          title="Ce que je sais faire"
          description="Des compétences techniques et de gestion construites pendant ma licence en informatique de gestion et affinées sur le terrain, en stage comme en projet."
        />

        <div className="mt-12 space-y-10">
          {[
            {
              title: "Technique",
              groups: skillGroups.filter((group) => group.icon !== "finance"),
            },
            {
              title: "Gestion & Finance",
              groups: skillGroups.filter((group) => group.icon === "finance"),
            },
          ].map((pole) => (
            <div key={pole.title}>
              <h3 className="mb-5 border-b border-border pb-3 font-serif text-xl font-semibold text-foreground">
                {pole.title}
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {pole.groups.map((group, i) => {
                  const Icon = iconMap[group.icon] ?? Code2;
                  return (
                    <Reveal key={group.title} delay={i * 0.08}>
                      <Card className="h-full border-border/80 bg-card shadow-sm transition-shadow hover:shadow-md">
                        <CardContent className="flex h-full flex-col p-6">
                          <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h4 className="text-base font-semibold text-foreground">
                              {group.title}
                            </h4>
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="rounded-full border-border bg-background px-3 py-1 text-[13px] font-normal text-foreground/80"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
