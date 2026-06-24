import { MotionValue } from "framer-motion";

export interface Project {
  id: number;
  src: string;
  /** Optional extra images for the project gallery; falls back to [src]. */
  images?: string[];
  /** Company / owner — a proper noun, so it is not translated. */
  company: string;
  /** Tech stack — names are universal, so not translated. */
  stack: string[];
  /** Public live URL; the "visit live site" link only renders when present. */
  liveUrl?: string;
}

/** A project plus the scroll-driven values the mobile stacking card needs. */
export type WorkCardMobileProps = Project & {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

// Translatable copy (title, role, overview, contributions, outcome) lives in the
// i18n dictionaries under project.items, keyed by id. This file holds only the
// non-translated facts.
export const projects: Project[] = [
  {
    id: 1,
    src: "/wakanow-travel.jpg",
    images: [
      "/wakanow-travel.jpg",
      "/wakanow-travel-2.jpg",
      "/wakanow-travel-3.jpg",
    ],
    company: "Wakanow",
    stack: ["Angular", "TypeScript", "RxJS", "REST APIs", "OAuth"],
    liveUrl: "https://www.wakanow.com/?x-ms-routing-name=prod",
  },
  {
    id: 2,
    src: "/saudi-visa-booking.jpg",
    images: [
      "/saudi-visa-booking.jpg",
      "/saudi-visa-booking-2.jpg",
      "/saudi-visa-booking-3.jpg",
    ],
    company: "Wakanow",
    stack: ["Angular", "Reactive Forms", "TypeScript"],
    liveUrl: "https://umrah.wakanow.com",
  },
  {
    id: 3,
    src: "/saudi-visa-admin.jpg",
    images: [
      "/saudi-visa-admin.jpg",
      "/saudi-visa-admin-2.jpg",
      "/saudi-visa-admin-3.jpg",
    ],
    company: "Wakanow",
    stack: ["Angular", "TypeScript", "Enterprise Forms"],
  },
  {
    id: 4,
    src: "/generic-payment.jpg",
    company: "Wakanow",
    stack: ["Angular", "Payment APIs", "TypeScript"],
  },
  {
    id: 5,
    src: "/fcmb-shares.jpg",
    company: "FCMB",
    stack: ["Angular", "TypeScript"],
  },
];
