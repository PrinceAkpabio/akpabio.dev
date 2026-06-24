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
      "Je suis un développeur basé à Abuja, au Nigéria, dédié à la création d'expériences numériques interactives sur le web, en collaborant avec divers leaders du secteur pour atteindre cet objectif.",
    hireMe: "Engagez-moi",
    role1: "Développeur",
    role2: "Frontend",
  },
  works: {
    title: "projets",
  },
  contact: {
    title: "contact",
    message:
      "Une question, une proposition ou un projet, ou envie de collaborer sur quelque chose ? N'hésitez pas à me contacter.",
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
        year: "2024 - présent",
        overview:
          "La plateforme de voyage multi-produits phare de Wakanow - vols, hôtels, paiements et gestion de compte - au service des clients, agents et employés au Nigéria et au-delà.",
        contributions: [
          "Authentification client : e-mail/mot de passe, Google SSO et Microsoft SSO",
          "Parcours de connexion et d'inscription pour agents, employés et clients",
          "Flux de réinitialisation de mot de passe et de récupération de compte",
          "Parcours de réservation de vols et d'hôtels",
          "Intégrations de paiement et formulaires dynamiques validés",
          "Gestion du profil utilisateur",
        ],
        outcome:
          "Davantage d'options de connexion et une intégration plus fluide, avec des modules frontend maintenables partagés entre les équipes produit.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Ingénieur Frontend",
        year: "2026",
        overview:
          "Un produit autonome de visa pour la Omra et l'Arabie saoudite, doté de son propre flux de réservation de bout en bout.",
        contributions: [
          "Flux de demande de visa et collecte des informations client",
          "Gestion des passeports et formulaires de demande dynamiques",
          "Flux de validation et gestion des réservations",
          "Intégrations d'API backend",
        ],
        outcome:
          "Un parcours de réservation autonome gérant des demandes de visa complexes en plusieurs étapes.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Ingénieur Frontend",
        year: "2026",
        overview:
          "Portail d'exploitation interne permettant au personnel d'examiner et de traiter les demandes de visa.",
        contributions: [
          "Flux d'examen des demandes et gestion des statuts",
          "Outils d'exploitation administrative et interfaces de gestion des données",
          "Automatisation des étapes de traitement",
        ],
        outcome:
          "A fourni au personnel d'exploitation un outil structuré pour gérer les demandes à grande échelle.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Ingénieur logiciel",
        year: "2024",
        overview:
          "Une expérience de paiement et de règlement réutilisable, utilisée sur plusieurs produits, y compris des partenaires en marque blanche.",
        contributions: [
          "Flux d'encaissement et expériences de paiement génériques",
          "Prise en charge des paiements en marque blanche",
          "Traitement des transactions et intégration paiement-réservation",
          "Gestion des erreurs et flux de récupération",
        ],
        outcome:
          "Une seule surface de paiement réutilisée sur plusieurs produits et partenaires.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Ingénieur Frontend",
        year: "juillet 2024",
        overview:
          "Plateforme interne utilisée par le personnel de la banque FCMB pour traiter les achats d'actions des clients (domaine de la fintech).",
        contributions: [
          "Flux d'achat d'actions et interfaces d'intégration client",
          "Gestion et validation des formulaires de demande d'achat",
          "Intégration avec les services bancaires backend",
        ],
        outcome:
          "A doté le personnel de la banque d'un outil dédié au traitement des achats d'actions.",
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
