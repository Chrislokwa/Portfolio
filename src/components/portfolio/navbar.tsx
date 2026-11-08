"use client";

import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { identity, navLinks } from "@/lib/portfolio-data";

/**
 * Barre de navigation fixe : logo, liens ancrés avec surlignage
 * de la section active, bouton CV, bascule clair/sombre et menu
 * mobile plein écran réduit.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  /* Léger changement de style dès que la page défile */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Détection de la section visible (scroll-spy) */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Logo / monogramme */}
        <a
          href="#accueil"
          onClick={closeMenu}
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          {identity.initials}
          <span className="text-primary">.</span>
        </a>

        {/* Liens — bureau */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Bascule clair / sombre — icônes pilotées par la classe .dark,
              donc rendu identique côté serveur et client */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Basculer entre thème clair et thème sombre"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
            <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
          </Button>

          {/* Bouton CV — bureau */}
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={identity.cvFile} download="CV_Lokwa_Benge_Chris.pdf">
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger CV
            </a>
          </Button>

          {/* Bouton menu — mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-3 text-base ${
                    active === link.href
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <a href={identity.cvFile} download="CV_Lokwa_Benge_Chris.pdf">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Télécharger le CV (PDF)
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
