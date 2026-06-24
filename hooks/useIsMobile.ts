"use client";

import { useSyncExternalStore } from "react";

// Matches the works-grid breakpoint: the mobile stack shows at <= 899px.
const QUERY = "(max-width: 899px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;
const getServerSnapshot = () => false; // assume desktop during SSR

export default function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
