"use client";

import { useState } from "react";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function ProjectScreenshot({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl border border-dashed border-border bg-muted/50">
      {loaded ? (
        <img
          src={src}
          alt={`Capture d’écran du projet : ${title}`}
          className="h-full w-full object-cover"
          onError={() => setLoaded(false)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center text-muted-foreground">
          <ImageIcon className="h-8 w-8 text-primary/70" aria-hidden="true" />
          <span className="text-sm font-medium">Emplacement de la capture</span>
          <code className="text-xs">public{src}</code>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations & travaux marquants"
          description="Des projets académiques, personnels et professionnels qui illustrent ma manière de travailler : comprendre le besoin, modéliser, développer, livrer."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Card className="group h-full border-border/80 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <ProjectScreenshot src={project.screenshotPath} title={project.title} />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="shrink-0 rounded-full px-3 py-1 text-xs"
                    >
                      {project.period}
                    </Badge>
                  </div>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
                    {project.context}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Voir le dépôt GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Visiter l’application
                    </a>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
