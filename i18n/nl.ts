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
      "Software engineer gevestigd in Abuja, Nigeria. Vijf jaar ervaring met het bouwen van productie-interfaces voor reis- en fintech-producten, en momenteel verdiep ik me in data-engineering en backendsystemen.",
    hireMe: "Huur mij in",
    role1: "Software",
    role2: "Engineer",
  },
  works: {
    title: "projecten",
  },
  contact: {
    title: "contact",
    message:
      "Ben je iets aan het bouwen en heb je een scherpe engineer nodig? Of wil je gewoon praten over datasystemen en reistechnologie? Hoe dan ook, neem contact op.",
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
        year: "2024 – heden",
        overview:
          "Wakanows toonaangevende reisplatform voor vluchtboekingen, hotelreserveringen, reisextra's, betalingen en het beheer van klantaccounts over meerdere markten. Een van de grootste reistechnologieproducten van West-Afrika, dat klanten, agenten en interne teams op grote schaal bedient.",
        contributions: [
          "Bouw en onderhoud van de kernboekingservaringen voor Vluchten, Hotels en Reisextra's",
          "Implementatie van authenticatietrajecten voor klanten, agenten en medewerkers, inclusief Google en Microsoft SSO",
          "Ontwikkeling van betaal- en checkout-integraties, waaronder PSS-betalingsondersteuning en uitrol via feature flags",
          "Verbetering van valutaconversie en prijsweergave over meerdere markten",
          "Bouw van dynamische formulieren, validatieprocessen en functies voor klantprofielbeheer",
          "Bijdragen aan gedeelde frontend-modules en platformbrede componenten die in meerdere producten worden gebruikt",
        ],
        outcome:
          "Oplevering van functies voor boeking, betalingen, authenticatie en accountbeheer, en bijgedragen aan de doorontwikkeling van een gedeelde frontend-architectuur die in het hele Wakanow-ecosysteem wordt gebruikt.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Een op zichzelf staand Umrah- en Saudi-visumproduct met een eigen end-to-end boekingsproces, los van het hoofdplatform van Wakanow.",
        contributions: [
          "Visumaanvraagproces en vastleggen van klantgegevens",
          "Paspoortbeheer en dynamische aanvraagformulieren",
          "Validatieprocessen in meerdere stappen en boekingsbeheer",
          "Backend-API-integraties voor visumverwerking",
        ],
        outcome:
          "Een visumaanvraag is een complex en documentintensief proces. Het werk hier was om dat voor klanten begaanbaar te maken, zonder dat een medewerker hen erdoorheen hoeft te loodsen.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Intern operationeel portaal waarmee Wakanow-medewerkers visumaanvragen beoordelen, verwerken en beheren die via het klantgerichte boekingsplatform zijn ingediend.",
        contributions: [
          "Beoordelingsprocessen voor aanvragen en statusbeheer",
          "Beheertools en interfaces voor gegevensbeheer",
          "Workflow-automatisering voor verwerking in meerdere stappen",
        ],
        outcome:
          "Voorheen volgden de operationele teams aanvragen handmatig. Het portaal gaf hun een echte workflow: beoordelen, status bijwerken, volgende stappen verwerken, allemaal op één plek.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software Engineer",
        year: "2024",
        overview:
          "Een herbruikbare betaal- en checkout-ervaring, gebouwd om te werken over Wakanow-producten en white-labelpartners heen.",
        contributions: [
          "Betalingsinning en generieke checkout-ervaringen",
          "Ondersteuning voor white-labelbetalingen over partnerintegraties heen",
          "Transactieverwerking en betaling-boekingintegratie",
          "Foutafhandeling en herstelstromen",
        ],
        outcome:
          "Hetzelfde betaaloppervlak draait nu over meerdere Wakanow-producten en partnerintegraties. Het is gebouwd om hergebruikt te worden, en dat gebeurt ook.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend Engineer",
        year: "2024",
        overview:
          "Intern platform dat door medewerkers van First City Monument Bank (FCMB) aan de balie en op leidinggevend niveau wordt gebruikt om aanvragen van klanten voor aandelenaankopen te verwerken.",
        contributions: [
          "Aandelenaankoopproces en interfaces voor klant-onboarding",
          "Formulierafhandeling en validatie voor aankoopaanvragen",
          "Integratie met backend-bankdiensten",
        ],
        outcome:
          "Baliemedewerkers en leidinggevenden kregen een echt hulpmiddel voor het verwerken van aandelenaankopen. Gevalideerde formulieren, geïntegreerd met bankdiensten, gebouwd voor het tempo van een bankvloer.",
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
