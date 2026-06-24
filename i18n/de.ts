import type { Dictionary } from "./en";

const de: Dictionary = {
  nav: {
    works: "projekte",
    contact: "kontakt",
    resume: "lebenslauf",
    availableForHire: "verfügbar für projekte",
    backToHome: "zurück zur startseite",
  },
  hero: {
    intro:
      "Ich bin ein Entwickler aus Abuja, Nigeria, der sich der Gestaltung interaktiver digitaler Erlebnisse im Web widmet und mit verschiedenen Branchenführern zusammenarbeitet, um dieses Ziel zu erreichen.",
    hireMe: "Stell mich ein",
    role1: "Frontend",
    role2: "Entwickler",
  },
  works: {
    title: "projekte",
  },
  contact: {
    title: "kontakt",
    message:
      "Hast du eine Frage, einen Vorschlag oder ein Projekt, oder möchtest du an etwas zusammenarbeiten? Melde dich gerne.",
    cta1: "lass uns",
    cta2: "reden",
    designedBy: "Gestaltet von",
  },
  project: {
    previous: "vorheriges projekt",
    next: "nächstes projekt",
    visitSite: "live-website ansehen",
    labels: {
      company: "unternehmen",
      role: "rolle",
      year: "jahr",
      stack: "technologien",
      overview: "überblick",
      contributions: "was ich gebaut habe",
      outcome: "ergebnis",
    },
    items: [
      {
        id: 1,
        title: "Wakanow Travel Platform",
        role: "Frontend-Entwickler",
        year: "2024 - heute",
        overview:
          "Wakanows zentrale Multi-Produkt-Reiseplattform - Flüge, Hotels, Zahlungen und Kontoverwaltung - für Kunden, Agenten und Mitarbeiter in Nigeria und darüber hinaus.",
        contributions: [
          "Kundenauthentifizierung: E-Mail/Passwort, Google SSO und Microsoft SSO",
          "Anmelde- und Registrierungsabläufe für Agenten, Mitarbeiter und Kunden",
          "Abläufe zum Zurücksetzen des Passworts und zur Kontowiederherstellung",
          "Buchungsabläufe für Flüge und Hotels",
          "Zahlungsintegrationen und dynamische, validierte Formulare",
          "Verwaltung des Benutzerprofils",
        ],
        outcome:
          "Mehr Anmeldeoptionen und ein reibungsloserer Onboarding-Prozess, mit wartbaren Frontend-Modulen, die von mehreren Produktteams genutzt werden.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend-Entwickler",
        year: "2026",
        overview:
          "Ein eigenständiges Produkt für Umrah- und Saudi-Visa mit einem eigenen durchgängigen Buchungsablauf.",
        contributions: [
          "Visumantragsablauf und Erfassung von Kundendaten",
          "Passverwaltung und dynamische Antragsformulare",
          "Validierungsabläufe und Buchungsverwaltung",
          "Backend-API-Integrationen",
        ],
        outcome:
          "Ein eigenständiger Buchungsablauf, der komplexe, mehrstufige Visumanträge bewältigt.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend-Entwickler",
        year: "2026",
        overview:
          "Internes Betriebsportal, mit dem Mitarbeiter Visumanträge prüfen und bearbeiten.",
        contributions: [
          "Abläufe zur Antragsprüfung und Statusverwaltung",
          "Admin-Betriebswerkzeuge und Datenverwaltungsoberflächen",
          "Automatisierung von Bearbeitungsschritten",
        ],
        outcome:
          "Gab dem Betriebspersonal ein strukturiertes Werkzeug zur Verwaltung von Anträgen im großen Maßstab.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software-Entwickler",
        year: "2024",
        overview:
          "Eine wiederverwendbare Zahlungs- und Checkout-Erfahrung, die über mehrere Produkte hinweg genutzt wird, einschließlich White-Label-Partnern.",
        contributions: [
          "Zahlungseinzug und generische Checkout-Erlebnisse",
          "Unterstützung für White-Label-Zahlungen",
          "Transaktionsverarbeitung und Zahlungs-Buchungs-Integration",
          "Fehlerbehandlung und Wiederherstellungsabläufe",
        ],
        outcome:
          "Eine einzige Zahlungsoberfläche, die über mehrere Produkte und Partner hinweg wiederverwendet wird.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend-Entwickler",
        year: "Juli 2024",
        overview:
          "Interne Plattform, mit der Mitarbeiter der FCMB-Bank Aktienkäufe von Kunden bearbeiten (Fintech-Bereich).",
        contributions: [
          "Aktienkaufablauf und Oberflächen für das Kunden-Onboarding",
          "Formularverarbeitung und Validierung für Kaufanträge",
          "Integration mit Backend-Bankdiensten",
        ],
        outcome:
          "Stattete Bankmitarbeiter mit einem fokussierten Werkzeug zur Bearbeitung von Aktienkäufen aus.",
      },
    ],
  },
  gallery: {
    expand: "zum vergrößern klicken",
  },
  loader: {
    loading: "lädt",
  },
  a11y: {
    toggleTheme: "thema wechseln",
    toggleSound: "ton ein-/ausschalten",
    expandImage: "projektbild vergrößern",
    previousImage: "vorheriges bild",
    nextImage: "nächstes bild",
    projectImage: "projektbild",
    viewProject: "projekt ansehen",
  },
};

export default de;
