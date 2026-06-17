// ──────────────────────────────────────────────────────────────
// Tout le contenu du site est ici. Modifie ce fichier pour changer
// les textes, les coordonnées, les services ou les compétences —
// tu n'as pas besoin de toucher aux composants.
// ──────────────────────────────────────────────────────────────

export const identity = {
  name: "Ange Lionel Koulidiati",
  brand: "IA Conception",
  roles: ["Graphiste", "Développeur", "Créateur IA"],
  tagline:
    "Je conçois des logos, des affiches, des vidéos et des sites web pour les entreprises et créateurs qui veulent une image forte — en combinant design graphique et intelligence artificielle.",
  location: "Ouagadougou, Burkina Faso",
};

export const contact = {
  whatsappNumber: "22676625367", // format international sans le "+", sans espaces
  whatsappDisplay: "+226 76 62 53 67",
  instagramHandle: "@yeah_i_m_lionel",
  instagramUrl: "https://instagram.com/yeah_i_m_lionel",
  // Ajoute ton email ici si tu veux l'afficher, sinon laisse vide
  email: "",
};

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Devis", href: "#devis" },
];

// icon: nom d'une icône lucide-react (https://lucide.dev/icons)
export const services = [
  {
    icon: "Sparkles",
    title: "Logos générés par IA",
    description:
      "Une identité visuelle unique, explorée à travers des dizaines de pistes IA puis affinée à la main pour qu'elle te ressemble vraiment.",
    seed: 1,
  },
  {
    icon: "LayoutTemplate",
    title: "Affiches publicitaires",
    description:
      "Des visuels percutants pour vos événements, promotions ou campagnes — pensés pour WhatsApp, Instagram et l'impression.",
    seed: 2,
  },
  {
    icon: "Clapperboard",
    title: "Vidéos promotionnelles IA",
    description:
      "Des courtes vidéos générées et montées avec l'IA pour présenter un produit, un service ou un événement sans budget de tournage.",
    seed: 3,
  },
  {
    icon: "Code2",
    title: "Sites web",
    description:
      "Des sites vitrines rapides, responsives et faciles à maintenir, du portfolio personnel à la page entreprise.",
    seed: 4,
  },
];

export const skills = [
  "Photoshop",
  "Canva",
  "HTML / CSS",
  "JavaScript",
  "React / Next.js",
  "IA générative",
  "Prompt Engineering",
  "Montage vidéo",
];

export const about = {
  bio:
    "Étudiant en classe préparatoire MPSI à l'École Polytechnique de Ouagadougou, je partage mon temps entre les mathématiques, le code et la création visuelle. IA Conception est née de cette double passion : utiliser la rigueur du développement et la puissance de l'IA générative pour produire des visuels que les méthodes classiques mettraient des heures à réaliser.",
  facts: [
    { label: "Formation", value: "MPSI — École Polytechnique de Ouagadougou" },
    { label: "Basé à", value: "Ouagadougou, Burkina Faso" },
    { label: "Disponibilité", value: "Projets freelance, à distance" },
  ],
};

// Section "Réalisations" : remplace ces entrées par tes vrais projets
// (titre, description, et idéalement une image dans /public) dès que tu en as.
export const projects = [
  {
    title: "Identité visuelle — à venir",
    category: "Logo & branding",
    description: "Espace réservé pour ton premier projet client ou personnel.",
    seed: 1,
  },
  {
    title: "Campagne affiche — à venir",
    category: "Affiche publicitaire",
    description: "Ajoute ici une affiche réalisée pour un événement ou une marque.",
    seed: 2,
  },
  {
    title: "Vidéo promo — à venir",
    category: "Vidéo IA",
    description: "Ajoute ici une vidéo courte générée ou montée avec l'IA.",
    seed: 3,
  },
  {
    title: "Site vitrine — à venir",
    category: "Développement web",
    description: "Ajoute ici un site que tu as conçu, avec un lien vers la version en ligne.",
    seed: 4,
  },
];

export const quoteOptions = {
  serviceTypes: [
    "Logo / identité visuelle",
    "Affiche publicitaire",
    "Vidéo promotionnelle IA",
    "Site web",
    "Autre",
  ],
  budgets: ["Moins de 25 000 FCFA", "25 000 – 75 000 FCFA", "75 000 FCFA et plus", "À discuter"],
};
