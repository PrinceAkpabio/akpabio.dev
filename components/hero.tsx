"use client";

import React, { useLayoutEffect, MouseEvent, useRef } from "react";
import styles from "@/styles/hero.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import {
  delay,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import usePageGrid from "@/utils/usePageGrid";
import Image from "next/image";
import Scroll from "../public/scroll.svg";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroIntroductionTypewriterAnimation from "./hero-intro-typewriter-animation";
import HeroHireMeTypewriterAnimation from "./hero-hire-me-typewriter-animation";

export default function Hero() {
  const { x, y } = useMousePosition();
  const size = 40;
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const grid = usePageGrid("heroGrid");

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

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+90vh",
      },
    });

    const normalTimeline = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "ease.in",
        stagger: { repeat: 0, yoyo: true, yoyoEase: true },
      },
    });

    const animatedScrollIconTimeline = gsap.timeline();

    animatedScrollIconTimeline
      .to(animatedScrollIcon.current, { opacity: 1 })
      .from(ellipseOneItem.current, {
        y: 0,
        ease: "ease.out",
        width: "18px",
        height: "18px",
        immediateRender: false,
      })
      .to(ellipseOneItem.current, {
        y: "-25px",
        width: "14px",
        height: "18px",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    normalTimeline
      .from(heroIntroItem.current, { display: "none", immediateRender: false })
      .to(heroIntroItem.current, { display: "block" })
      .from(heroHireMeItem.current, { display: "none", immediateRender: false })
      .to(heroHireMeItem.current, { display: "block", delay: 8 })
      .from(worksMenuItem.current, {
        opacity: 0,
        y: "-100px",
        immediateRender: false,
      })
      .to(worksMenuItem.current, { opacity: 1, y: 0 })
      .from(contactMenuItem.current, {
        opacity: 0,
        y: "-100px",
        immediateRender: false,
      })
      .to(contactMenuItem.current, { opacity: 1, y: 0 })
      .from(resumeMenuItem.current, {
        opacity: 0,
        y: "-100px",
        immediateRender: false,
      })
      .to(resumeMenuItem.current, { opacity: 1, y: 0 })
      .from(firstNameItem.current, {
        opacity: 0,
        x: "200px",
        delay: 0.7,
        immediateRender: false,
      })
      .to(firstNameItem.current, { opacity: 1, x: 0, ease: "ease.in" })
      .from(lastNameItem.current, {
        opacity: 0,
        x: "200px",
        immediateRender: false,
      })
      .to(lastNameItem.current, { opacity: 1, x: 0, ease: "ease.in" })
      .from(roleOneItem.current, {
        opacity: 0,
        x: "200px",
        delay: 0.7,
        immediateRender: false,
      })
      .to(roleOneItem.current, { opacity: 1, x: 0, ease: "ease.in" })
      .from(roleTwoItem.current, {
        opacity: 0,
        x: "200px",
        immediateRender: false,
      })
      .to(roleTwoItem.current, { opacity: 1, x: 0, ease: "ease.in" })
      .add(animatedScrollIconTimeline);

    normalTimeline.play().delay(5.5);

    return () => {
      gsap.killTweensOf(normalTimeline);
    };
  }, []);

  return (
    <div
      id="heroGrid"
      className={styles.heroSection}
      onMouseMoveCapture={handleMouseMove}
    >
      <motion.div
        className={loadingStyles.mask}
        animate={{
          WebkitMaskPosition: `${(x as number) - (size + 60)}px ${
            (y as number) - (size + 60)
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      ></motion.div>

      <motion.div
        className={loadingStyles.flashlight}
        style={{
          background: useMotionTemplate`radial-gradient(
            400px circle at ${mouseX}px ${mouseY}px,
            transparent,
            #111 90%
          )`,
        }}
      ></motion.div>

      <motion.div className={loadingStyles.gridWrapper}>
        {grid.map((row, idx: number) => (
          <div key={idx} className={loadingStyles.row}>
            {row.columns.map((cell, idxx: number) => (
              <span key={idxx} className={loadingStyles.cell}></span>
            ))}
          </div>
        ))}
      </motion.div>

      <div className={styles.introduction}>
        <div className={styles.left}>
          <span ref={heroIntroItem} style={{ display: "none" }}>
            <HeroIntroductionTypewriterAnimation />
          </span>
          <span ref={heroHireMeItem} style={{ display: "none" }}>
            <HeroHireMeTypewriterAnimation />
          </span>
        </div>
        <div className={styles.right}>
          <Link
            ref={worksMenuItem}
            href="#works-section"
            className={styles.menuItem}
          >
            Works
          </Link>
          <Link
            ref={contactMenuItem}
            href="#contact-section"
            className={styles.menuItem}
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
          Déveloper
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
