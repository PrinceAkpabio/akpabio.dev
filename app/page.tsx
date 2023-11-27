"use client";

import React, { useEffect } from "react";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      gestureOrientation: "both",
      smoothWheel: true,
      smoothTouch: true, // Mobile
      touchMultiplier: 2, // sensibility on mobile
      infinite: false, // Infinite scrolling
    });

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Works />
      <Contact />
    </>
  );
}
