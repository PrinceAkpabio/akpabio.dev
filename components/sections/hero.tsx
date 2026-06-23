"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/hero.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typewriter from "./typewriter";
import { useScrollTo } from "@/components/providers/lenis-provider";
import { useLoading } from "@/components/providers/loading-context";
import { useTranslation } from "@/components/providers/language-provider";
import Flashlight from "./flashlight";

export default function Hero() {
  const scrollTo = useScrollTo();
  const isLoading = useLoading();
  const { t } = useTranslation();
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
            <Typewriter
              textKey="hero.intro"
              duration={2}
              ease="easeInOut"
              delay={0.3}
              className={styles.introText}
              skip={skipIntro}
              start={!isLoading}
            />
          </span>
          <span ref={heroHireMeItem} style={{ display: "none" }}>
            <Typewriter
              textKey="hero.hireMe"
              duration={1}
              ease="easeOut"
              delay={2.5}
              className={styles.hireMeText}
              skip={skipIntro}
              start={!isLoading}
              showCursor
            />
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
            {t("nav.works")}
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
            {t("nav.contact")}
          </Link>
          <Link
            ref={resumeMenuItem}
            href="/prince-akpabio-cv.pdf"
            className={styles.menuItem}
            download="prince-akpabio-cv"
            target="_blank"
          >
            {t("nav.resume")}
          </Link>
        </div>
      </div>

      <div className={styles.introductionBottom}>
        <div ref={firstNameItem} className={styles.name} data-flashlight="grow">
          Prince
        </div>
        <div ref={lastNameItem} className={styles.name} data-flashlight="grow">
          Akpabio
        </div>
        <div ref={roleOneItem} className={styles.role} data-flashlight="grow">
          {t("hero.role1")}
        </div>
        <div ref={roleTwoItem} className={styles.role} data-flashlight="grow">
          {t("hero.role2")}
        </div>

        <div ref={animatedScrollIcon} className={styles.animatedScrollIcon}>
          <div ref={ellipseOneItem} className={styles.ellipseOne}></div>
        </div>
      </div>
    </div>
  );
}
