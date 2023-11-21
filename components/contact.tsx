"use client";

import React, { useEffect, MouseEvent } from "react";
import styles from "@/styles/contact.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import usePageGrid from "@/utils/usePageGrid";
import Link from "next/link";

export default function Contact() {
  const { x, y } = useMousePosition();
  const size = 40;
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const grid = usePageGrid("contactGrid");

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {}, []);

  return (
    <div
      id="contactGrid"
      className={styles.contactSection}
      onMouseMoveCapture={handleMouseMove}
    >
      <motion.div
        className={loadingStyles.mask}
        animate={{
          WebkitMaskPosition: `${(x as number) - (size + 10) / 2}px ${
            (y as number) - (size + 10) / 2
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

      <div id="contact-section" className={styles.contact}>
        <div className={styles.left}>
          <p className={styles.contactTitle}>CONTACT</p>
          <p className={styles.contactMessage}>
            Got a question, proposal or project or want to work together on
            something? Feel free to reach out.
          </p>
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.contactMiddle}>
        <div className={styles.callToAction}>Let’s</div>
        <div className={styles.callToAction}>Talk</div>
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.left}>
          <p className={styles.designTag}>
            {" "}
            Designed by{" "}
            <Link
              className={styles.link}
              href="https://linkedin.com/in/jameschimdindu"
              target="_blank"
            >
              James Chimdindu
            </Link>
          </p>
        </div>
        <div className={styles.right}>
          <Link href="#works-section" className={styles.menuItem}>
            Works
          </Link>
          <Link href="#contact-section" className={styles.menuItem}>
            Contact
          </Link>
          <Link
            href="/prince-akpabio-cv.pdf"
            className={styles.menuItem}
            download="prince-akpabio-cv"
            target="_blank"
          >
            RESUMé
          </Link>
        </div>
      </div>
    </div>
  );
}
