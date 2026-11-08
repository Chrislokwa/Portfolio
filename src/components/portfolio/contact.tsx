"use client";

import {
  AtSign,
  Check,
  Copy,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { identity } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { useState, type FormEvent } from "react";

const socialIcons: Record<string, LucideIcon> = {
  facebook: Facebook,
  x: AtSign,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

export function Contact() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Message portfolio — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${senderEmail}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      toast({
        title: "Email copié !",
        description: identity.email,
        duration: 2500,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({
        title: "Impossible de copier",
        description: "Sélectionnez l'adresse manuellement.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-sm sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <h2 className="mx-auto mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Travaillons ensemble
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Un poste, un stage, un projet de gestion ou de développement web ?
              Je suis à l'écoute — écrivez-moi, je réponds rapidement.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 grid max-w-xl gap-4 text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium text-foreground">
                  Nom
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    className="h-11 rounded-lg border border-border bg-background px-3 font-normal outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="Votre nom"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-foreground">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 rounded-lg border border-border bg-background px-3 font-normal outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="vous@exemple.com"
                  />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-medium text-foreground">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-y rounded-lg border border-border bg-background px-3 py-2 font-normal outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Décrivez brièvement votre demande…"
                />
              </label>
              <Button type="submit" size="lg" className="w-full sm:w-fit sm:justify-self-center">
                <Send className="h-4 w-4" aria-hidden="true" />
                Préparer l’email
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Votre application de messagerie s’ouvrira avec le message prérempli.
              </p>
            </form>

            <div className="mx-auto mt-7 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${identity.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Envoyer un email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? "Copié !" : "Copier l'adresse"}
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              <a
                href={`mailto:${identity.email}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {identity.email}
              </a>
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {identity.location}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={identity.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={identity.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              {identity.socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.platform}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
