import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    works: "projets",
    contact: "contact",
    resume: "cv",
    availableForHire: "disponible pour un poste",
    backToHome: "retour à l'accueil",
  },
  hero: {
    intro:
      "Ingénieur logiciel basé à Abuja, au Nigéria. Cinq ans à construire des interfaces de production pour des produits de voyage et de fintech, et je m'oriente actuellement vers l'ingénierie des données et les systèmes backend.",
    hireMe: "Engagez-moi",
    role1: "Ingénieur",
    role2: "logiciel",
  },
  works: {
    title: "projets",
  },
  contact: {
    title: "contact",
    message:
      "Vous construisez quelque chose et cherchez un ingénieur affûté ? Ou vous voulez simplement parler de systèmes de données et de tech du voyage ? Dans tous les cas, contactez-moi.",
    cta1: "parlons",
    cta2: "ensemble",
    designedBy: "Conçu par",
  },
  project: {
    previous: "projet précédent",
    next: "projet suivant",
    visitSite: "voir le site en ligne",
    labels: {
      company: "entreprise",
      role: "rôle",
      year: "année",
      stack: "technologies",
      overview: "aperçu",
      contributions: "ce que j'ai construit",
      outcome: "résultat",
    },
    items: [
      {
        id: 1,
        title: "Wakanow Travel Platform",
        role: "Ingénieur Frontend",
        year: "2024 – présent",
        overview:
          "La plateforme de voyage phare de Wakanow, qui gère les réservations de vols, d'hôtels, les extras de voyage, les paiements et la gestion des comptes clients sur plusieurs marchés. L'un des plus grands produits technologiques de voyage d'Afrique de l'Ouest, au service des clients, des agents et des équipes internes à grande échelle.",
        contributions: [
          "Conception et maintenance des parcours de réservation principaux : Vols, Hôtels et Extras de voyage",
          "Mise en œuvre des parcours d'authentification client, agent et employé, y compris Google et Microsoft SSO",
          "Développement des intégrations de paiement et de règlement, dont la prise en charge du paiement PSS et des déploiements pilotés par feature flags",
          "Amélioration de la conversion des devises et de l'affichage des prix sur plusieurs marchés",
          "Création de formulaires dynamiques, de flux de validation et de fonctionnalités de gestion du profil client",
          "Contribution aux modules frontend partagés et aux composants transverses utilisés sur plusieurs produits",
        ],
        outcome:
          "Livraison de fonctionnalités couvrant la réservation, les paiements, l'authentification et la gestion des comptes, tout en contribuant à faire évoluer une architecture frontend partagée utilisée dans tout l'écosystème Wakanow.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Ingénieur Frontend",
        year: "2026",
        overview:
          "Un produit autonome de visa pour la Omra et l'Arabie saoudite, doté de son propre flux de réservation de bout en bout, distinct de la plateforme principale de Wakanow.",
        contributions: [
          "Flux de demande de visa et collecte des informations client",
          "Gestion des passeports et formulaires de demande dynamiques",
          "Flux de validation en plusieurs étapes et gestion des réservations",
          "Intégrations d'API backend pour le traitement des visas",
        ],
        outcome:
          "La demande de visa est un processus complexe et lourd en documents. Le travail a consisté à le rendre navigable pour les clients, sans qu'un membre du personnel doive les accompagner.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Ingénieur Frontend",
        year: "2026",
        overview:
          "Portail d'exploitation interne permettant au personnel de Wakanow d'examiner, de traiter et de gérer les demandes de visa soumises via la plateforme de réservation destinée aux clients.",
        contributions: [
          "Flux d'examen des demandes et gestion des statuts",
          "Outils d'exploitation administrative et interfaces de gestion des données",
          "Automatisation des flux pour le traitement en plusieurs étapes",
        ],
        outcome:
          "Auparavant, les équipes d'exploitation suivaient les demandes manuellement. Le portail leur a donné un véritable flux de travail : examiner, mettre à jour le statut, traiter les étapes suivantes, le tout au même endroit.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Ingénieur logiciel",
        year: "2024",
        overview:
          "Une expérience de paiement et de règlement réutilisable, conçue pour fonctionner sur l'ensemble des produits Wakanow et des partenaires en marque blanche.",
        contributions: [
          "Encaissement des paiements et expériences de règlement génériques",
          "Prise en charge des paiements en marque blanche sur les intégrations partenaires",
          "Traitement des transactions et intégration paiement-réservation",
          "Gestion des erreurs et flux de récupération",
        ],
        outcome:
          "La même surface de paiement fonctionne désormais sur plusieurs produits Wakanow et intégrations partenaires. Elle a été conçue pour être réutilisée, et elle l'est.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Ingénieur Frontend",
        year: "2024",
        overview:
          "Plateforme interne utilisée par le personnel de First City Monument Bank (FCMB), aux guichets et au niveau de la supervision, pour traiter les demandes d'achat d'actions des clients.",
        contributions: [
          "Flux d'achat d'actions et interfaces d'intégration des clients",
          "Gestion et validation des formulaires pour les demandes d'achat",
          "Intégration avec les services bancaires backend",
        ],
        outcome:
          "Le personnel de guichet et les superviseurs ont obtenu un véritable outil pour traiter les achats d'actions. Des formulaires validés, intégrés aux services bancaires, conçus pour le rythme d'une agence.",
      },
    ],
  },
  gallery: {
    expand: "cliquez pour agrandir",
  },
  loader: {
    loading: "chargement",
  },
  a11y: {
    toggleTheme: "changer de thème",
    toggleSound: "activer ou désactiver le son",
    expandImage: "agrandir l'image du projet",
    previousImage: "image précédente",
    nextImage: "image suivante",
    projectImage: "image du projet",
    viewProject: "voir le projet",
  },
};

export default fr;
