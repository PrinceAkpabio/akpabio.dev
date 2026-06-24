import { MotionValue } from "framer-motion";

export interface Project {
  id: number;
  /** Desktop card image (works grid). */
  src: string;
  /** Optional object-position for the desktop card crop, e.g. "left top". */
  cardPosition?: string;
  /** Mobile card image (works stack); falls back to src. */
  srcMobile?: string;
  /** Desktop gallery; falls back to [src]. */
  images?: string[];
  /** Mobile gallery; falls back to imagesMobile ?? images ?? [src]. */
  imagesMobile?: string[];
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
// non-translated facts. Desktop screenshots are used on desktop, mobile on mobile.
export const projects: Project[] = [
  {
    id: 1,
    src: "/wakanow-travel.jpg",
    cardPosition: "left top",
    srcMobile: "/wakanow-travel-card.jpg",
    images: [
      "/wakanow-travel-1.jpg",
      "/wakanow-travel-2.jpg",
      "/wakanow-travel-3.jpg",
    ],
    imagesMobile: [
      "/wakanow-travel-g1.jpg",
      "/wakanow-travel-g2.jpg",
      "/wakanow-travel-g3.jpg",
    ],
    company: "Wakanow",
    stack: ["Angular", "TypeScript", "RxJS", "REST APIs", "OAuth"],
    liveUrl: "https://www.wakanow.com/?x-ms-routing-name=prod",
  },
  {
    id: 2,
    src: "/saudi-visa-booking.jpg",
    srcMobile: "/saudi-visa-booking-card.jpg",
    images: [
      "/saudi-visa-booking-1.jpg",
      "/saudi-visa-booking-2.jpg",
      "/saudi-visa-booking-3.jpg",
    ],
    imagesMobile: [
      "/saudi-visa-booking-g1.jpg",
      "/saudi-visa-booking-g2.jpg",
      "/saudi-visa-booking-g3.jpg",
    ],
    company: "Wakanow",
    stack: ["Angular", "Reactive Forms", "TypeScript"],
    liveUrl: "https://umrah.wakanow.com",
  },
  {
    id: 3,
    src: "/saudi-visa-admin.jpg",
    srcMobile: "/saudi-visa-admin-card.jpg",
    images: [
      "/saudi-visa-admin-1.jpg",
      "/saudi-visa-admin-2.jpg",
      "/saudi-visa-admin-3.jpg",
    ],
    imagesMobile: [
      "/saudi-visa-admin-g1.jpg",
      "/saudi-visa-admin-g2.jpg",
      "/saudi-visa-admin-g3.jpg",
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
