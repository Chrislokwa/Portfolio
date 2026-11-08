import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

/* Typographie du portfolio :
   - Lora (serif)  → titres élégants
   - Inter (sans)  → corps de texte sobre et lisible */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokwa Benge Chris · Portfolio — Informatique de Gestion",
  description:
    "Portfolio de Lokwa Benge Chris : diplômé en informatique de gestion, développeur web Python/Django et gestionnaire financier. Projets, compétences, expériences et contact.",
  keywords: [
    "Lokwa Benge Chris",
    "portfolio",
    "informatique de gestion",
    "développeur web",
    "Django",
    "Python",
    "Kinshasa",
    "RD Congo",
  ],
  authors: [{ name: "Lokwa Benge Chris" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lokwa Benge Chris · Portfolio",
    description:
      "Développeur web (Python/Django) & gestion financière — des solutions de gestion sur mesure.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F4" },
    { media: "(prefers-color-scheme: dark)", color: "#131A26" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
