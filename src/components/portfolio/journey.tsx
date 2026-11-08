"use client";

import {
  Award,
  Briefcase,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { certifications, education, experiences } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/**
 * Point de repère vertical utilisé par les deux frises
 * (expériences et formation).
 */
function TimelineDot({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 bg-card text-primary shadow-sm">
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

export function Journey() {
  return (
    <section
      id="parcours"
      className="scroll-mt-20 bg-muted/40 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Parcours"
          title="Expériences & formation"
          description="Du terrain financier aux projets informatiques : un parcours progressif, ancré dans le monde de l'entreprise congolaise."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* ---- Expériences professionnelles ---- */}
          <div>
            <Reveal>
              <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
                Expériences professionnelles
              </h3>
            </Reveal>

            <ol className="relative space-y-10 border-l border-border pl-10">
              {experiences.map((exp, i) => (
                <li key={exp.company} className="relative">
                  <TimelineDot icon={Briefcase} />
                  <Reveal delay={i * 0.1}>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {exp.period}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="mt-2 text-base font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.missions.map((mission, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60"
                          />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* ---- Formation + certifications ---- */}
          <div>
            <Reveal>
              <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <GraduationCap
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                Parcours scolaire
              </h3>
            </Reveal>

            <ol className="relative space-y-8 border-l border-border pl-10">
              {education.map((edu, i) => (
                <li key={edu.degree} className="relative">
                  <TimelineDot icon={GraduationCap} />
                  <Reveal delay={i * 0.08}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {edu.period}
                    </p>
                    <h4 className="mt-1 text-base font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <h3 className="mb-2 mt-12 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                Autres formations & certifications
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Formations complémentaires en outils bureautiques, développement web et compétences numériques.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="group rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                  >
                    {cert.imagePath && (
                      <div className="mb-4 aspect-[16/9] overflow-hidden rounded-lg border border-border/70 bg-muted">
                        <img
                          src={cert.imagePath}
                          alt={`Aperçu du certificat : ${cert.title}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Award className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-snug text-foreground">
                          {cert.title}
                        </p>
                        <p className="mt-1 text-xs font-medium text-primary">
                          {cert.issuer}
                        </p>
                        {cert.detail ? (
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            {cert.detail}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
