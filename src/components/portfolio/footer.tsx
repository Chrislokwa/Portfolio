"use client";

import { identity, navLinks } from "@/lib/portfolio-data";

/**
 * Pied de page collé en bas de l'écran (mt-auto sur le conteneur
 * racine min-h-screen de la page).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-muted/40 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-serif text-sm font-semibold text-foreground">
          {identity.fullName}
          <span className="text-primary">.</span>
        </p>

        <nav aria-label="Navigation du pied de page">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {year} · Kinshasa, RD Congo
        </p>
      </div>
    </footer>
  );
}
