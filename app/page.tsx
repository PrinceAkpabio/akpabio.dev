"use client";

import React, { useEffect } from "react";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Hero />
      <Works />
      <Contact />
    </>
  );
}
