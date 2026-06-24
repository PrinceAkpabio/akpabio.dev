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
      "Softwareentwickler mit Sitz in Abuja, Nigeria. Fünf Jahre Erfahrung im Aufbau produktiver Oberflächen für Reise- und Fintech-Produkte, und derzeit vertiefe ich mich in Data Engineering und Backend-Systeme.",
    hireMe: "Stell mich ein",
    role1: "Software",
    role2: "entwickler",
  },
  works: {
    title: "projekte",
  },
  contact: {
    title: "kontakt",
    message:
      "Du baust etwas und brauchst einen versierten Ingenieur? Oder möchtest du einfach über Datensysteme und Reisetechnologie sprechen? So oder so, melde dich.",
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
        year: "2024 – heute",
        overview:
          "Wakanows zentrale Reiseplattform für Flugbuchungen, Hotelreservierungen, Reise-Extras, Zahlungen und die Verwaltung von Kundenkonten über mehrere Märkte hinweg. Eines der größten Reisetechnologie-Produkte Westafrikas, das Kunden, Agenten und interne Teams in großem Maßstab bedient.",
        contributions: [
          "Aufbau und Pflege der zentralen Buchungserlebnisse für Flüge, Hotels und Reise-Extras",
          "Umsetzung der Authentifizierungsabläufe für Kunden, Agenten und Mitarbeiter, einschließlich Google und Microsoft SSO",
          "Entwicklung von Zahlungs- und Checkout-Integrationen, einschließlich PSS-Zahlungsunterstützung und Feature-Flag-gesteuerten Rollouts",
          "Verbesserung der Währungsumrechnung und Preisdarstellung über mehrere Märkte hinweg",
          "Erstellung dynamischer Formulare, Validierungsabläufe und Funktionen zur Verwaltung von Kundenprofilen",
          "Beiträge zu gemeinsam genutzten Frontend-Modulen und plattformweiten Komponenten, die in mehreren Produkten verwendet werden",
        ],
        outcome:
          "Lieferung von Funktionen in den Bereichen Buchung, Zahlungen, Authentifizierung und Kontoverwaltung sowie Mitwirkung an der Weiterentwicklung einer gemeinsamen Frontend-Architektur, die im gesamten Wakanow-Ökosystem genutzt wird.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend-Entwickler",
        year: "2026",
        overview:
          "Ein eigenständiges Produkt für Umrah- und Saudi-Visa mit einem eigenen durchgängigen Buchungsablauf, getrennt von der Hauptplattform von Wakanow.",
        contributions: [
          "Visumantragsablauf und Erfassung von Kundendaten",
          "Passverwaltung und dynamische Antragsformulare",
          "Mehrstufige Validierungsabläufe und Buchungsverwaltung",
          "Backend-API-Integrationen für die Visumbearbeitung",
        ],
        outcome:
          "Die Visumbeantragung ist ein komplexer, dokumentenlastiger Prozess. Die Arbeit bestand darin, ihn für Kunden navigierbar zu machen, ohne dass ein Mitarbeiter sie begleiten muss.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend-Entwickler",
        year: "2026",
        overview:
          "Internes Betriebsportal, mit dem Wakanow-Mitarbeiter über die kundenseitige Buchungsplattform eingereichte Visumanträge prüfen, bearbeiten und verwalten.",
        contributions: [
          "Abläufe zur Antragsprüfung und Statusverwaltung",
          "Admin-Betriebswerkzeuge und Datenverwaltungsoberflächen",
          "Workflow-Automatisierung für die mehrstufige Bearbeitung",
        ],
        outcome:
          "Zuvor verfolgten die Betriebsteams die Anträge manuell. Das Portal gab ihnen einen richtigen Arbeitsablauf: prüfen, Status aktualisieren, nächste Schritte bearbeiten, alles an einem Ort.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software-Entwickler",
        year: "2024",
        overview:
          "Eine wiederverwendbare Zahlungs- und Checkout-Erfahrung, entwickelt für den Einsatz über Wakanow-Produkte und White-Label-Partner hinweg.",
        contributions: [
          "Zahlungseinzug und generische Checkout-Erlebnisse",
          "Unterstützung für White-Label-Zahlungen über Partnerintegrationen hinweg",
          "Transaktionsverarbeitung und Zahlungs-Buchungs-Integration",
          "Fehlerbehandlung und Wiederherstellungsabläufe",
        ],
        outcome:
          "Dieselbe Zahlungsoberfläche läuft jetzt über mehrere Wakanow-Produkte und Partnerintegrationen. Sie wurde für die Wiederverwendung gebaut, und genau so wird sie genutzt.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend-Entwickler",
        year: "2024",
        overview:
          "Interne Plattform, die von Mitarbeitern der First City Monument Bank (FCMB) an den Schaltern und auf Aufsichtsebene genutzt wird, um Anträge von Kunden auf Aktienkäufe zu bearbeiten.",
        contributions: [
          "Aktienkaufablauf und Oberflächen für das Kunden-Onboarding",
          "Formularverarbeitung und Validierung für Kaufanträge",
          "Integration mit Backend-Bankdiensten",
        ],
        outcome:
          "Schaltermitarbeiter und Vorgesetzte erhielten ein richtiges Werkzeug zur Bearbeitung von Aktienkäufen. Validierte Formulare, integriert mit Bankdiensten, gebaut für das Tempo eines Bankschalters.",
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
