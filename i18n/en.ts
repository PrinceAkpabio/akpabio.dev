const en = {
  nav: {
    works: "works",
    contact: "contact",
    resume: "résumé",
    // REVISIT AUGUST: consider adding "blog" once Medium posts are live
    availableForHire: "available for hire",
    backToHome: "back to home",
  },
  hero: {
    // REVISIT AUGUST: once Flight Analytics is live, update to:
    // "Software engineer with a focus on travel-domain data pipelines and production frontend systems.
    //  Five years shipping booking, payment, and visa products at scale. Now building in the DE space."
    intro:
      "Software engineer based in Abuja, Nigeria. Five years building production interfaces for travel and fintech products, and currently getting deeper into data engineering and backend systems.",
    hireMe: "Hire Me",
    role1: "Software",
    // REVISIT AUGUST: consider cycling role2 between "Engineer" / "Data Engineer" via typewriter
    role2: "Engineer",
  },
  works: {
    title: "works",
  },
  contact: {
    title: "contact",
    // REVISIT AUGUST: if you have a DE-specific CTA after the Medium post goes live,
    // add a secondary line: "Read about how I built the Flight Price Analytics pipeline →"
    message:
      "Building something and need a sharp engineer? Or just want to talk about data systems and travel tech? Either way, get in touch.",
    cta1: "Let's",
    cta2: "Talk",
    designedBy: "Designed by",
  },
  project: {
    previous: "previous project",
    next: "next project",
    visitSite: "visit live site",
    labels: {
      company: "company",
      role: "role",
      year: "year",
      stack: "stack",
      overview: "overview",
      contributions: "what i built",
      outcome: "outcome",
    },
    items: [
      {
        id: 1,
        title: "Wakanow Travel Platform",
        role: "Frontend Engineer",
        year: "2024 – present",
        overview:
          "Wakanow's flagship travel platform powering flight bookings, hotel reservations, travel extras, payments, and customer account management across multiple markets. One of West Africa's largest travel technology products, serving customers, agents, and internal teams at scale.",
        contributions: [
          "Built and maintained core booking experiences across Flights, Hotels, and Travel Extras",
          "Implemented customer, agent, and employee authentication journeys including Google and Microsoft SSO",
          "Developed payment and checkout integrations, including PSS payment support and feature-flagged rollouts",
          "Enhanced currency conversion and pricing experiences across multiple markets",
          "Built dynamic forms, validation workflows, and customer profile management features",
          "Contributed to shared frontend modules and platform-wide components used across multiple products",
        ],
        outcome:
          "Delivered features across booking, payments, authentication, and account management while helping evolve a shared frontend architecture used throughout the Wakanow ecosystem.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "A standalone Umrah and Saudi visa product with its own end-to-end booking workflow, separate from the main Wakanow platform.",
        contributions: [
          "Visa application workflow and customer information capture",
          "Passport management and dynamic application forms",
          "Multi-step validation workflows and booking management",
          "Backend API integrations for visa processing",
        ],
        outcome:
          "The visa application process is complex and document-heavy. The work here was making that navigable for customers without needing a staff member to walk them through it.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Internal operations portal for Wakanow staff to review, process, and manage visa applications submitted through the customer-facing booking platform.",
        contributions: [
          "Application review workflows and status management",
          "Admin operations tooling and data management interfaces",
          "Workflow automation for multi-step processing",
        ],
        outcome:
          "Before this, operations teams were tracking applications manually. The portal gave them a proper workflow: review, update status, process next steps, all in one place.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software Engineer",
        year: "2024",
        overview:
          "A reusable payment and checkout experience built to work across Wakanow products and white-label partners.",
        contributions: [
          "Payment collection and generic checkout experiences",
          "White-label payment support across partner integrations",
          "Transaction processing and booking-payment integration",
          "Error handling and recovery flows",
        ],
        outcome:
          "The same payment surface now runs across multiple Wakanow products and partner integrations. It was built to be reused, and it is.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend Engineer",
        year: "2024",
        overview:
          "Internal platform used by First City Monument Bank (FCMB) staff at counters and supervisory level to process customer share purchase requests.",
        contributions: [
          "Share purchase workflow and customer onboarding interfaces",
          "Form handling and validation for purchase requests",
          "Integration with backend banking services",
        ],
        outcome:
          "Counter staff and supervisors got a proper tool for processing share purchases. Validated forms, integrated with banking services, built for the pace of a bank floor.",
      },
      // REVISIT AUGUST: uncomment and complete this block once Flight Analytics is live
      // {
      //   id: 6,
      //   title: "Flight Price Analytics",
      //   role: "Data Engineer",
      //   year: "2025",
      //   overview:
      //     "A personal data engineering project. An automated ETL pipeline pulling daily flight pricing data from the Amadeus API across West Africa to Europe routes, with a transform layer and a live dashboard on top.",
      //   contributions: [
      //     "Python ETL pipeline: extract from Amadeus API, load to PostgreSQL",
      //     "Transform layer: null cleaning, airline code normalisation, 7-day rolling average price per route",
      //     "Scheduled runs via GitHub Actions so the whole thing runs without me touching it",
      //     "React dashboard: price trends per route, cheapest day widget, airline comparison",
      //     "Deployed pipeline on Railway, dashboard on Vercel",
      //   ],
      //   outcome:
      //     "A fully automated data pipeline processing real flight pricing data. Built it partly because I wanted a DE project to show, and partly because working at Wakanow gave me enough domain knowledge to make it actually useful.",
      // },
    ],
  },
  gallery: {
    expand: "click to expand",
  },
  loader: {
    loading: "loading",
  },
  a11y: {
    toggleTheme: "Toggle theme",
    toggleSound: "Toggle sound",
    expandImage: "Expand project image",
    previousImage: "Previous image",
    nextImage: "Next image",
    projectImage: "Project image",
    viewProject: "View project",
  },
};

export type Dictionary = typeof en;
export default en;