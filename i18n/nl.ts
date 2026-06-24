import type { Dictionary } from "./en";

const nl: Dictionary = {
  nav: {
    works: "projecten",
    contact: "contact",
    resume: "cv",
    availableForHire: "beschikbaar voor werk",
    backToHome: "terug naar home",
  },
  hero: {
    intro:
      "Ik ben een ontwikkelaar uit Abuja, Nigeria, toegewijd aan het creëren van interactieve digitale ervaringen op het web, in samenwerking met diverse marktleiders om dit doel te bereiken.",
    hireMe: "Huur mij in",
    role1: "Frontend",
    role2: "Ontwikkelaar",
  },
  works: {
    title: "projecten",
  },
  contact: {
    title: "contact",
    message:
      "Een vraag, voorstel of project, of wil je ergens aan samenwerken? Neem gerust contact op.",
    cta1: "laten we",
    cta2: "praten",
    designedBy: "Ontworpen door",
  },
  project: {
    previous: "vorig project",
    next: "volgend project",
    visitSite: "bekijk live site",
    labels: {
      company: "bedrijf",
      role: "rol",
      year: "jaar",
      stack: "technologieën",
      overview: "overzicht",
      contributions: "wat ik heb gebouwd",
      outcome: "resultaat",
    },
    items: [
      {
        id: 1,
        title: "Wakanow Travel Platform",
        role: "Frontend Engineer",
        year: "2024 - heden",
        overview:
          "Wakanows toonaangevende multi-product reisplatform - vluchten, hotels, betalingen en accountbeheer - voor klanten, agenten en medewerkers in Nigeria en daarbuiten.",
        contributions: [
          "Klantauthenticatie: e-mail/wachtwoord, Google SSO en Microsoft SSO",
          "Inlog- en registratietrajecten voor agenten, medewerkers en klanten",
          "Wachtwoordherstel- en accountherstelstromen",
          "Boekingstrajecten voor vluchten en hotels",
          "Betalingsintegraties en dynamische, gevalideerde formulieren",
          "Beheer van gebruikersprofielen",
        ],
        outcome:
          "Meer inlogopties en een soepelere onboarding, met onderhoudbare frontend-modules die door meerdere productteams worden gedeeld.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Een op zichzelf staand Umrah- en Saudi-visumproduct met een eigen end-to-end boekingsproces.",
        contributions: [
          "Visumaanvraagproces en vastleggen van klantgegevens",
          "Paspoortbeheer en dynamische aanvraagformulieren",
          "Validatieprocessen en boekingsbeheer",
          "Backend-API-integraties",
        ],
        outcome:
          "Een op zichzelf staand boekingstraject dat complexe visumaanvragen in meerdere stappen afhandelt.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Intern operationeel portaal waarmee medewerkers visumaanvragen beoordelen en verwerken.",
        contributions: [
          "Beoordelingsprocessen voor aanvragen en statusbeheer",
          "Beheertools en interfaces voor gegevensbeheer",
          "Automatisering van verwerkingsstappen",
        ],
        outcome:
          "Gaf operationeel personeel een gestructureerd hulpmiddel om aanvragen op schaal te beheren.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software Engineer",
        year: "2024",
        overview:
          "Een herbruikbare betaal- en checkout-ervaring die over meerdere producten heen wordt gebruikt, inclusief white-labelpartners.",
        contributions: [
          "Betalingsinning en generieke checkout-ervaringen",
          "Ondersteuning voor white-labelbetalingen",
          "Transactieverwerking en betaling-boekingintegratie",
          "Foutafhandeling en herstelstromen",
        ],
        outcome:
          "Eén betaaloppervlak dat over meerdere producten en partners heen wordt hergebruikt.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend Engineer",
        year: "juli 2024",
        overview:
          "Intern platform dat door medewerkers van FCMB-bank wordt gebruikt om aandelenaankopen van klanten te verwerken (fintech-domein).",
        contributions: [
          "Aandelenaankoopproces en interfaces voor klant-onboarding",
          "Formulierafhandeling en validatie voor aankoopaanvragen",
          "Integratie met backend-bankdiensten",
        ],
        outcome:
          "Voorzag bankmedewerkers van een gericht hulpmiddel voor het verwerken van aandelenaankopen.",
      },
    ],
  },
  gallery: {
    expand: "klik om te vergroten",
  },
  loader: {
    loading: "laden",
  },
  a11y: {
    toggleTheme: "thema wisselen",
    toggleSound: "geluid aan/uit",
    expandImage: "projectafbeelding vergroten",
    previousImage: "vorige afbeelding",
    nextImage: "volgende afbeelding",
    projectImage: "projectafbeelding",
    viewProject: "project bekijken",
  },
};

export default nl;
