/**
 * ============================================================
 *  DONNÉES DU PORTFOLIO — LOKWA BENGE CHRIS
 * ============================================================
 *  Toutes les informations affichées sur le site sont
 *  centralisées ici. Modifiez ce fichier pour mettre à jour
 *  le contenu sans toucher au code des composants.
 * ============================================================
 */

export const identity = {
  firstName: "Chris",
  fullName: "Lokwa Benge Chris",
  initials: "LC",
  title: "Diplômé en Informatique de Gestion",
  tagline:
    "Développement web (Python / Django) & gestion financière — des solutions de gestion sur mesure pour les besoins stratégiques des entreprises.",
  email: "christlokwa056@gmail.com",
  githubUrl: "https://github.com/Chrislokwa",
  linkedinUrl: "https://www.linkedin.com/in/chris-lokwa-4235292b9",
  socialLinks: [
    { platform: "Facebook", href: "https://www.facebook.com/share/1Kfns7TyyB/?mibextid=wwXlfr", icon: "facebook" },
    { platform: "X", href: "https://x.com/chris_lokwa59266?s=11", icon: "x" },
    { platform: "Instagram", href: "https://www.instagram.com/chris_lokwa07?obrf=MWZrbHR2g3OWRoNQ%3D%3D&utm_source=qr", icon: "instagram" },
    { platform: "WhatsApp", href: "https://wa.me/243863450321", icon: "whatsapp" },
  ] as const,
  location: "Kinshasa, RD Congo",
  birthDate: "07 juillet 2005",
  availability: "Ouvert aux opportunités",
  /** Fichier PDF servi depuis /public — affiché via le bouton « Télécharger le CV » */
  cvFile: "/CV_LOKWA_BENGE_CHRIS.pdf",
  /** Photo professionnelle stockée dans /public. */
  photoFile: "/img_chris.jpg",
};

export const about = {
  paragraphs: [
    "Diplômé en informatique de gestion, j'allie de solides compétences en développement web (Python/Django) à une expérience concrète de la gestion financière en milieu professionnel. Cette double casquette me permet de comprendre les besoins métier des entreprises et de les traduire en applications fiables et utiles au quotidien.",
    "Rigoureux et orienté résultats, je conçois des applications et des solutions de gestion sur mesure : modélisation de bases de données, développement back-end, support technique et assistance utilisateurs. Mon passage au sein d'organismes comme l'OGEFREM (DANTIC) et la Congolaise de Voies Maritimes m'a forgé un sens du service et du travail bien fait.",
    "Je souhaite aujourd'hui mettre ce profil polyvalent — à la croisée de la technique et de la gestion — au service d'une équipe qui valorise l'initiative, la précision et l'envie d'apprendre.",
  ],
  quickFacts: [
    { label: "Nom complet", value: "Lokwa Benge Chris" },
    { label: "Naissance", value: "07 juillet 2005" },
    { label: "Localisation", value: "Kinshasa, RD Congo" },
    { label: "Diplôme", value: "Licence en Informatique de Gestion (EIFI)" },
    { label: "Email", value: "christlokwa056@gmail.com" },
  ],
  languages: ["Français", "Anglais", "Lingala"],
};

export type SkillGroup = {
  title: string;
  icon: "code" | "database" | "finance" | "tools";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Développement Web",
    icon: "code",
    skills: [
      "Python",
      "Django (back-end & templates)",
      "HTML5",
      "CSS3 · Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    title: "Bases de Données",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "Modélisation MCD / MLD", "SQL"],
  },
  {
    title: "Gestion & Finance",
    icon: "finance",
    skills: [
      "Gestion financière & budgétaire",
      "Comptabilité générale & SYSCOHADA (bases)",
      "Élaboration de rapports",
      "Excel intermédiaire (formules & fonctions)",
    ],
  },
  {
    title: "Outils & Environnement",
    icon: "tools",
    skills: ["VS Code", "GitHub", "Canva", "Pack Office (Word, Excel, PowerPoint)", "Windows 10 / 11", "Linux"],
  },
];

/**
 * PROJETS : les cartes ci-dessous s'appuient sur les réalisations
 * et compétences du CV. Remplacez-les ou complétez-les avec vos
 * propres réalisations (titre, période, description, technologies).
 */
export type Project = {
  title: string;
  period: string;
  context: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  screenshotPath: string;
};

export const projects: Project[] = [
  {
    title: "HGR Makala TB — Suivi de la tuberculose",
    period: "Projet de formation",
    context: "Hôpital Général de Référence de Makala · Kinshasa",
    description:
      "Application web Django pour digitaliser le suivi des patients atteints de tuberculose à l'HGR Makala. Elle centralise les dossiers patients et de traitement, les rendez-vous, le suivi thérapeutique et les examens de laboratoire, avec des outils de consultation et de statistiques.",
    tech: ["Python", "Django 6", "Jinja2", "HTMX", "Semantic UI", "PostgreSQL"],
    githubUrl: "https://github.com/Chrislokwa/hgr-makala-tb",
    screenshotPath: "/HGR.jpg",
  },
  {
    title: "Hebdocaisse — Suivi des apports hebdomadaires",
    period: "Projet personnel",
    context: "Gestion des contributions d'équipe",
    description:
      "Application web pour suivre les contributions hebdomadaires d'une équipe. Elle permet de gérer les membres et les paiements, visualiser les montants attendus et reçus, repérer les retards, consulter l'historique avec filtres et exporter des rapports PDF hebdomadaires ou mensuels.",
    tech: ["Django", "PostgreSQL", "Tailwind CSS", "Alpine.js", "WeasyPrint"],
    demoUrl: "https://hebdocaisse.vercel.app/",
    screenshotPath: "/hebdocaisse.png",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  missions: string[];
};

export const experiences: Experience[] = [
  {
    role: "Directeur financier (CDF / CFO)",
    company: "Geek Genuis",
    period: "2024 — Aujourd’hui",
    type: "Startup en phase de lancement",
    missions: [
      "Gestion financière générale de la startup pendant sa phase de lancement.",
      "Suivi des cotisations et des entrées d’argent, ainsi que des dépenses et autres sorties de fonds.",
      "Préparation de prévisions financières pour accompagner la planification des activités.",
    ],
  },
  {
    role: "Stagiaire en Informatique",
    company: "OGEFREM (DANTIC)",
    period: "2026",
    type: "Stage académique",
    missions: [
      "Support technique et assistance utilisateurs : résolution d'incidents, installation et configuration des postes de travail (Windows 10/11), paramétrage d'outils (Outlook, suites bureautiques).",
      "Développement et modélisation : participation à l'analyse fonctionnelle et à la conception de bases de données (MCD, MLD) pour une application interne.",
      "Réseaux et maintenance : câblage réseau (sertissage RJ45), tests de connexion et interventions sur le parc informatique (hardware / software).",
    ],
  },
  {
    role: "Stagiaire",
    company: "Congolaise de Voies Maritimes (CVM SA)",
    period: "2022 · 1 mois",
    type: "Stage d'observation — Finance",
    missions: [
      "Participation aux activités quotidiennes de l'entreprise.",
      "Observation et apprentissage des pratiques professionnelles dans la finance.",
      "Assistance aux différentes tâches financières.",
      "Développement de compétences professionnelles en milieu réel.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: "Licence en Informatique de Gestion",
    school: "École Informatique de Finance (EIFI)",
    period: "2023 — 2026",
  },
  {
    degree: "Diplôme d'État en Commerciale et Gestion",
    school: "Collège Cardinal Etsou",
    period: "2018 — 2023",
  },
  {
    degree: "Certificat d'Études Primaires",
    school: "CS The Little Champion",
    period: "2011 — 2017",
  },
];

export const certifications: {
  title: string;
  issuer: string;
  detail: string;
  imagePath?: string;
}[] = [
  {
    title: "Formation pratique en Pack Office complet",
    issuer: "CECONTEC — Kinshasa",
    detail: "MS Word, Excel, PowerPoint…",
  },
  {
    title: "Sololearn — Développement web",
    issuer: "Sololearn",
    detail: "HTML, CSS, JavaScript",
  },
  {
    title: "Marketing des médias sociaux avec l'IA",
    issuer: "Sololearn",
    detail: "Stratégies de contenu assistées par IA",
  },
  {
    title: "Analyse de données avec l'IA",
    issuer: "Sololearn",
    detail: "Exploitation de données assistée par IA",
  },
  {
    title: "Gestion de projet améliorée par l'IA",
    issuer: "Sololearn",
    detail: "Planification et suivi de projets",
    imagePath: "/certification/gestion%20projet.JPG",
  },
];

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];
