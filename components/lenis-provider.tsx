"use client";

import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

/** Access the shared Lenis instance (null until it is created on mount). */
export const useLenis = () => useContext(LenisContext);

/**
 * Returns a function that smooth-scrolls to an in-page anchor (e.g. "#works-section").
 * If the target is not on the current page, it navigates home to that anchor instead.
 */
export const useScrollTo = () => {
  const lenis = useLenis();
  const router = useRouter();

  return useCallback(
    (href: string) => {
      if (!href.startsWith("#")) {
        router.push(href);
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        lenis
          ? lenis.scrollTo(target as HTMLElement, { offset: 0 })
          : target.scrollIntoView({ behavior: "smooth" });
      } else {
        // Target lives on the home page (e.g. linking to works from a project page)
        router.push(`/${href}`);
      }
    },
    [lenis, router]
  );
};

export default function LenisProvider({
  children,
  paused = false,
}: {
  children: ReactNode;
  paused?: boolean;
}) {
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

  // Lock scrolling while paused (e.g. during the loading screen)
  useEffect(() => {
    if (!lenis) return;
    paused ? lenis.stop() : lenis.start();
  }, [lenis, paused]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
