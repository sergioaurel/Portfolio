import { image, p } from "framer-motion/client";

export const profile = {
  name: "Aurel",
  initials: "AS",
  title: "Développeur Web Full-Stack",
  location: "Cotonou, Bénin",
  tagline:
    "Développeur web spécialisé dans la création d'applications modernes, performantes et adaptées aux besoins des entreprises. De l'idée au déploiement, je transforme des concepts en solutions web concrètes.",
  github: "https://github.com/sergioaurel",
  email: "sergioaurelkpodo@gmail.com", // à remplacer
  siteUrl: "https://portfolio-three-orpin-h5vwmrcmb1.vercel.app/", // à remplacer après le déploiement
  cv: "/cv-aurel.pdf",
  availability: "Disponible pour des missions freelance", // à adapter
};
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "Services", href: "#services" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  image?: string; // ex: "/projects/jobconnect.png"
};

export const projects: Project[] = [
  {
    title: "JobConnect Bénin",
    category: "Plateforme de stages",
    description:
      "Plateforme multi-rôles de gestion des stages : mise en relation étudiants, entreprises et encadrants.",
    tags: ["Laravel 12", "MySQL", "Tailwind CSS"],
    link: "https://job-connect-t743.onrender.com/",
    image: "/projects/pic2.png",
  },
  {
    title: "OWO Market",
    category: "SaaS",
    description: "Plateforme SaaS de gestion pour commerçants au Bénin.",
    tags: ["Laravel", "MySQL", "SaaS"],
    link: "https://www.owomarket.app/",
    image: "/projects/pic1.png",
  },
//   {
//     title: "Bénin Auto École",
//     category: "E-learning",
//     description: "Plateforme d'apprentissage en ligne pour auto-écoles.",
//     tags: ["Laravel 11", "LMS", "MySQL"],
//     link: "",
//     image: "/projects/benin-auto-ecole.png",
//   },
  {
    title: "Rotary Club Cotonou Centre",
    category: "Site institutionnel",
    description:
      "Site web institutionnel développé en PHP natif avec architecture MVC.",
    tags: ["PHP MVC", "Tailwind CSS"],
    link: "https://www.rotarycotonoucentre.com/",
    image: "/projects/pic3.png",
  },
];
export const skills = [
  { category: "Backend", items: ["PHP", "Laravel", "MySQL", "API REST"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
  { category: "Outils", items: ["Git", "GitHub", "Composer", "npm"] },
];

export const experiences = [
  {
    role: "Stagiaire",
    company: "Adjinankou Group",
    description: "Stage au sein d'une agence de communication.",
    period: "Sept 2025 - Dec 2025",
  },
  {
    role: "Étudiant en développement web",
    company: "EIG Bénin",
    description:
      "Formation en développement web full-stack et réalisation de projets académiques.",
    period: "2024 - 2026",
  },
  
  
];
 export const about = {
  paragraphs: [
    "Je suis étudiant en développement web à l'EIG Bénin, à Cotonou. Je conçois des applications full-stack avec Laravel, PHP, MySQL et Tailwind CSS, du modèle de données jusqu'à l'interface.",
    "J'ai fait mes premières armes en entreprise lors d'un stage à Adjinankou Group, une agence de communication, où j'ai appris à travailler avec des besoins clients concrets.",
    "Ce qui me motive : construire des applications utiles et adaptées au marché béninois, simples à prendre en main et solides dans la durée.",
  ],
  quote: "Un bon code est un code qu'on comprend encore six mois plus tard.", // à remplacer par ta propre phrase
  internships: 1,
};

export const services = [
  {
    title: "Développement full-stack",
    summary:
      "Une application complète, de la base de données à l'interface, livrée et prête à l'emploi.",
    points: [
      "Laravel, PHP et MySQL",
      "Authentification et gestion des rôles",
      "Tableaux de bord et espaces d'administration",
    ],
  },
  {
    title: "Backend & API",
    summary:
      "Une logique métier solide et des données bien structurées côté serveur.",
    points: [
      "API REST propres et documentées",
      "Validation des données et sécurité",
      "Conception de bases de données MySQL",
    ],
  },
  {
    title: "Frontend",
    summary:
      "Des interfaces claires, rapides et agréables, sur mobile comme sur ordinateur.",
    points: [
      "Tailwind CSS et design responsive",
      "Next.js et React",
      "Animations légères avec Framer Motion",
    ],
  },
  {
    title: "Mise en ligne & suivi",
    summary:
      "Je m'occupe de la publication de l'application et de ses évolutions.",
    points: [
      "Configuration de l'hébergement et du domaine",
      "Mise en production",
      "Corrections et mises à jour après livraison",
    ],
  },
];

export const process = [
  {
    title: "Comprendre le besoin",
    text: "On clarifie ensemble l'objectif, les utilisateurs et les fonctionnalités indispensables.",
  },
  {
    title: "Concevoir",
    text: "Je prépare la structure, la base de données et les maquettes avant d'écrire le code.",
  },
  {
    title: "Développer",
    text: "Je construis l'application par étapes, avec des points réguliers pour valider l'avancement.",
  },
  {
    title: "Livrer et accompagner",
    text: "Mise en ligne, prise en main et corrections après livraison.",
  },
];

export const faq = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Des applications web sur mesure : plateformes de gestion, sites institutionnels, outils pour commerçants ou organisations.",
  },
  {
    question: "Avec quelles technologies travaillez-vous ?",
    answer:
      "Principalement Laravel, PHP, MySQL et Tailwind CSS, ainsi que Next.js et React pour les interfaces modernes.",
  },
  {
    question: "Combien de temps dure un projet ?",
    answer:
      "Cela dépend de la taille du besoin. Après un premier échange, je vous donne un calendrier réaliste avant de commencer.",
  },
  {
    question: "Le site sera-t-il adapté au téléphone ?",
    answer:
      "Oui, toutes mes interfaces sont conçues pour s'adapter aux mobiles, tablettes et ordinateurs.",
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer:
      "Je reste disponible pour les corrections et les évolutions. On définit ensemble le suivi souhaité.",
  },
];
export const socials = [
  { name: "github", label: "GitHub", href: "https://github.com/sergioaurel" },
  { name: "linkedin", label: "LinkedIn", href: "" },
  { name: "facebook", label: "Facebook", href: "" },
  { name: "instagram", label: "Instagram", href: "" },
] as const;