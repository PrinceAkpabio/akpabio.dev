"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/hero.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroIntroductionTypewriterAnimation from "./hero-intro-typewriter-animation";
import HeroHireMeTypewriterAnimation from "./hero-hire-me-typewriter-animation";
import { useScrollTo } from "./lenis-provider";
import { useLoading } from "./loading-context";
import Flashlight from "./flashlight";

export default function Hero() {
  const scrollTo = useScrollTo();
  const isLoading = useLoading();
  const [skipIntro, setSkipIntro] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const heroIntroItem = useRef(null);
  const heroHireMeItem = useRef(null);

  const worksMenuItem = useRef(null);
  const contactMenuItem = useRef(null);
  const resumeMenuItem = useRef(null);

  const firstNameItem = useRef(null);
  const lastNameItem = useRef(null);
  const roleOneItem = useRef(null);
  const roleTwoItem = useRef(null);

  const animatedScrollIcon = useRef(null);
  const ellipseOneItem = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.4, ease: "power2.out" },
    });

    tl.from(heroIntroItem.current, { display: "none" })
      .to(heroIntroItem.current, { display: "block" })
      .from(heroHireMeItem.current, { display: "none" })
      .to(heroHireMeItem.current, { display: "block", delay: 1.5 })
      .from(worksMenuItem.current, { opacity: 0, y: "-100px" })
      .to(worksMenuItem.current, { opacity: 1, y: 0 })
      .from(contactMenuItem.current, { opacity: 0, y: "-100px" })
      .to(contactMenuItem.current, { opacity: 1, y: 0 })
      .from(resumeMenuItem.current, { opacity: 0, y: "-100px" })
      .to(resumeMenuItem.current, { opacity: 1, y: 0 })
      .from(firstNameItem.current, { opacity: 0, x: "200px" })
      .to(firstNameItem.current, { opacity: 1, x: 0 })
      .from(lastNameItem.current, { opacity: 0, x: "200px" })
      .to(lastNameItem.current, { opacity: 1, x: 0 })
      .from(roleOneItem.current, { opacity: 0, x: "200px" })
      .to(roleOneItem.current, { opacity: 1, x: 0 })
      .from(roleTwoItem.current, { opacity: 0, x: "200px" })
      .to(roleTwoItem.current, { opacity: 1, x: 0 })
      .to(animatedScrollIcon.current, { opacity: 1 });

    timelineRef.current = tl;

    // Looping scroll cue, kept independent of the reveal timeline so the reveal
    // can still be fast-forwarded to its end
    gsap.fromTo(
      ellipseOneItem.current,
      { y: 0, width: "18px", height: "18px" },
      {
        y: "-25px",
        width: "14px",
        height: "18px",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
  }, []);

  // Start the reveal only once the loader has reached 100%
  useEffect(() => {
    if (!isLoading) timelineRef.current?.play();
  }, [isLoading]);

  // Let the first scroll/keypress fast-forward the intro instead of waiting
  useEffect(() => {
    if (skipIntro) return;
    const handleSkip = () => setSkipIntro(true);
    window.addEventListener("wheel", handleSkip, { passive: true, once: true });
    window.addEventListener("touchmove", handleSkip, {
      passive: true,
      once: true,
    });
    window.addEventListener("keydown", handleSkip, { once: true });
    return () => {
      window.removeEventListener("wheel", handleSkip);
      window.removeEventListener("touchmove", handleSkip);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [skipIntro]);

  useEffect(() => {
    if (skipIntro) timelineRef.current?.progress(1);
  }, [skipIntro]);

  return (
    <div id="heroGrid" className={styles.heroSection}>
      <Flashlight gridId="heroGrid" />

      <div className={styles.introduction}>
        <div className={styles.left}>
          <span ref={heroIntroItem} style={{ display: "none" }}>
            <HeroIntroductionTypewriterAnimation
              skip={skipIntro}
              start={!isLoading}
            />
          </span>
          <span ref={heroHireMeItem} style={{ display: "none" }}>
            <HeroHireMeTypewriterAnimation skip={skipIntro} start={!isLoading} />
          </span>
        </div>
        <div className={styles.right}>
          <Link
            ref={worksMenuItem}
            href="#works-section"
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#works-section");
            }}
          >
            Works
          </Link>
          <Link
            ref={contactMenuItem}
            href="#contact-section"
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact-section");
            }}
          >
            Contact
          </Link>
          <Link
            ref={resumeMenuItem}
            href="/prince-akpabio-cv.pdf"
            className={styles.menuItem}
            download="prince-akpabio-cv"
            target="_blank"
          >
            RESUMé
          </Link>
        </div>
      </div>

      <div className={styles.introductionBottom}>
        <div ref={firstNameItem} className={styles.name}>
          Prince
        </div>
        <div ref={lastNameItem} className={styles.name}>
          Akpabio
        </div>
        <div ref={roleOneItem} className={styles.role}>
          Frontend
        </div>
        <div ref={roleTwoItem} className={styles.role}>
          Developer
        </div>

        <div ref={animatedScrollIcon} className={styles.animatedScrollIcon}>
          {/* <div ref={ellipseTwoItem} className={styles.ellipseTwo}></div> */}
          <div ref={ellipseOneItem} className={styles.ellipseOne}></div>
        </div>
        {/* <Image className={styles.scrollSvg} src={Scroll} alt="Scroll svg" /> */}
      </div>
    </div>
  );
}
