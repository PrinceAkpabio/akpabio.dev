const en = {
  nav: {
    works: "works",
    contact: "contact",
    resume: "résumé",
    availableForHire: "available for hire",
    backToHome: "back to home",
  },
  hero: {
    intro:
      "I am a Developer based in Abuja, Nigeria, dedicated to crafting interactive digital experiences on the web, collaborating with various industry leaders to achieve this goal.",
    hireMe: "Hire Me",
    role1: "Frontend",
    role2: "Developer",
  },
  works: {
    title: "works",
  },
  contact: {
    title: "contact",
    message:
      "Got a question, proposal or project or want to work together on something? Feel free to reach out.",
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
        year: "2024 - present",
        overview:
          "Wakanow's flagship multi-product travel platform - flights, hotels, payments and account management - serving customers, agents and staff across Nigeria and beyond.",
        contributions: [
          "Customer authentication: email/password, Google SSO and Microsoft SSO",
          "Agent, employee and customer login + registration journeys",
          "Password reset and account recovery flows",
          "Flight and hotel booking journeys",
          "Payment integrations and dynamic, validated forms",
          "User profile management",
        ],
        outcome:
          "Expanded sign-in options and smoother onboarding, with maintainable frontend modules shared across product teams.",
      },
      {
        id: 2,
        title: "Saudi Visa Booking Platform",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "A standalone Umrah and Saudi visa product with its own end-to-end booking workflow.",
        contributions: [
          "Visa application workflow and customer information capture",
          "Passport management and dynamic application forms",
          "Validation workflows and booking management",
          "Backend API integrations",
        ],
        outcome:
          "A self-contained booking journey handling complex, multi-step visa applications.",
      },
      {
        id: 3,
        title: "Saudi Visa Admin Portal",
        role: "Frontend Engineer",
        year: "2026",
        overview:
          "Internal operations portal for staff to review and process visa applications.",
        contributions: [
          "Application review workflows and status management",
          "Admin operations tooling and data-management interfaces",
          "Workflow automation for processing steps",
        ],
        outcome:
          "Gave operations staff a structured tool to manage applications at scale.",
      },
      {
        id: 4,
        title: "White-label Payment Platform",
        role: "Software Engineer",
        year: "2024",
        overview:
          "A reusable payment and checkout experience used across products, including white-label partners.",
        contributions: [
          "Payment collection and generic checkout experiences",
          "White-label payment support",
          "Transaction processing and booking-payment integration",
          "Error handling and recovery flows",
        ],
        outcome:
          "One payment surface reused across multiple products and partners.",
      },
      {
        id: 5,
        title: "FCMB Shares Purchase Platform",
        role: "Frontend Engineer",
        year: "July 2024",
        overview:
          "Internal platform used by FCMB bank staff to process customer share purchases (fintech domain).",
        contributions: [
          "Share purchase workflow and customer onboarding interfaces",
          "Form handling and validation for purchase requests",
          "Integration with backend banking services",
        ],
        outcome:
          "Equipped bank staff with a focused tool for processing share purchases.",
      },
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
