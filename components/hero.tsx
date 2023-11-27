"use client";

import React, { useLayoutEffect, MouseEvent, useRef } from "react";
import styles from "@/styles/hero.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import usePageGrid from "@/utils/usePageGrid";
import Image from "next/image";
import Scroll from "../public/scroll.svg";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const { x, y } = useMousePosition();
  const size = 40;
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const grid = usePageGrid("heroGrid");

  const worksMenuItem = useRef(null);
  const contactMenuItem = useRef(null);
  const resumeMenuItem = useRef(null);

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

    normalTimeline
      .from(worksMenuItem.current, { opacity: 0, y: "-100px" })
      .to(worksMenuItem.current, { opacity: 1, y: 0 })
      .from(contactMenuItem.current, { opacity: 0, y: "-100px" })
      .to(contactMenuItem.current, { opacity: 1, y: 0 })
      .from(resumeMenuItem.current, { opacity: 0, y: "-100px" })
      .to(resumeMenuItem.current, { opacity: 1, y: 0 });

    normalTimeline.play().delay(5.5);
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
          <p className={styles.introText}>
            I am a Developer based in Abuja, Nigeria, dedicated to crafting
            interactive digital experiences on the web, collaborating with
            various industry leaders to achieve this goal.
          </p>
          <p className={styles.hireMeText}>Hire Me_</p>
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
        <div className={styles.name}>Prince</div>
        <div className={styles.name}>Akpabio</div>
        <div className={styles.role}>Frontend</div>
        <div className={styles.role}>Déveloper</div>

        <Image className={styles.scrollSvg} src={Scroll} alt="Scroll svg" />
      </div>
    </div>
  );
}
