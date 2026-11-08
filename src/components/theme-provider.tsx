"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Fournisseur de thème clair / sombre (via la classe .dark).
 * Le thème clair — blanc cassé & bleu marine — est le thème
 * par défaut du portfolio.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
