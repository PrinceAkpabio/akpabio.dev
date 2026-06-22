"use client";

import Lenis from "@studio-freight/lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

/** Access the shared Lenis instance (null until it is created on mount). */
export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 2, // speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      gestureOrientation: "both",
      smoothWheel: true,
      smoothTouch: true, // Mobile
      touchMultiplier: 2, // sensibility on mobile
      infinite: false,
    });

    setLenis(instance);

    let frame = requestAnimationFrame(function raf(time) {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
