"use client";

import { useCallback, useState } from "react";
import { ArrowDown, Download, Mail, MapPin, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { identity } from "@/lib/portfolio-data";

/**
 * Emplacement réservé pour la photo : affiche /photo.jpg si le
 * fichier est présent dans /public, sinon un cadre élégant avec
 * une icône. Il suffit de déposer « photo.jpg » dans public/.
 */
function PhotoFrame() {
  const [photoOk, setPhotoOk] = useState(true);

  /* Détection robuste d'une image déjà échouée : en dev (et sur
     réseau lent), l'erreur 404 peut survenir AVANT l'hydratation,
     donc avant que le handler onError ne soit attaché. La callback
     ref vérifie l'état de l'image au montage. */
  const handleImgRef = useCallback(
    (node: HTMLImageElement | null) => {
      if (node && node.complete && node.naturalWidth === 0) {
        setPhotoOk(false);
      }
    },
    []
  );

  return (
    <div className="relative">
      {/* Cadre décoratif décalé */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2rem] border border-primary/25"
      />
      <div className="relative h-64 w-64 overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-sm sm:h-72 sm:w-72">
        {photoOk ? (
          <img
            ref={handleImgRef}
            src={identity.photoFile}
            alt="Portrait de Lokwa Benge Chris"
            className="h-full w-full object-cover"
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <div
            aria-label="Emplacement réservé à votre photo"
            className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground"
          >
            <UserRound className="h-16 w-16 stroke-1" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em]">
              Votre photo
            </span>
          </div>
        )}
      </div>
      {/* Point de disponibilité */}
      <span className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        {identity.availability}
      </span>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Halo discret d'arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-primary"
          >
            Portfolio — Informatique de gestion
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Lokwa Benge{" "}
            <span className="italic text-primary">Chris</span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-5 text-lg text-foreground/80">
            {identity.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.22)}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {identity.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#projets">
                Découvrir mes projets
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={identity.cvFile} download="CV_Lokwa_Benge_Chris.pdf">
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger le CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.38)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {identity.location}
            </span>
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              {identity.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto lg:justify-self-end"
        >
          <PhotoFrame />
        </motion.div>
      </div>
    </section>
  );
}
