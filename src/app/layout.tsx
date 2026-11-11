import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { identity } from "@/lib/portfolio-data";

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

const siteUrl = "https://chrislokwa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lokwa Benge Chris | Développeur web Python et Django à Kinshasa",
    template: "%s | Lokwa Benge Chris",
  },
  description:
    "Découvrez le portfolio de Lokwa Benge Chris, développeur web Python et Django à Kinshasa, diplômé en informatique de gestion. Projets, compétences, parcours et contact.",
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
  creator: "Lokwa Benge Chris",
  applicationName: "Portfolio de Lokwa Benge Chris",
  category: "technology",
  alternates: { canonical: "/", languages: { "fr-CD": "/" } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lokwa Benge Chris · Portfolio",
    description:
      "Développeur web (Python/Django) & gestion financière — des solutions de gestion sur mesure.",
    type: "website",
    locale: "fr_CD",
    siteName: "Portfolio de Lokwa Benge Chris",
  },
  twitter: {
    card: "summary",
    title: "Lokwa Benge Chris | Développeur web Python et Django",
    description:
      "Portfolio, projets et parcours de Lokwa Benge Chris, développeur web à Kinshasa.",
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
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                url: siteUrl,
                name: identity.fullName,
                jobTitle: "Développeur web Python et Django",
                description:
                  "Diplômé en informatique de gestion, spécialisé en développement web Python/Django et gestion financière.",
                email: identity.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kinshasa",
                  addressCountry: "CD",
                },
                knowsLanguage: ["fr", "en", "ln"],
                sameAs: [identity.githubUrl, identity.linkedinUrl],
              }),
            }}
          />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
