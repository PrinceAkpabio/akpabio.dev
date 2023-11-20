"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import styles from "@/styles/page-wrapper.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import usePageGrid from "@/utils/usePageGrid";
import LoadingTextAnimation from "./loading-text-animation";
import HundredPercentLoadingTextAnimation from "./hundredpercent-loading-animation";

export default function PageLoaderElement() {
  const [done, setDone] = useState(false);
  const { x, y } = useMousePosition();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const grid = usePageGrid("loadingGrid");
  const size = 40;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1500);
  }, [done]);
  return (
    <div className={styles.pageLoadingWrapperBackground}>
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

      <div className={styles.pageWrapperTop}>
        <div className={styles.pageWrapperTopLeftGrid}></div>
        <div className={styles.pageWrapperTopPadding}></div>
        <div className={styles.pageWrapperTopRightGrid}></div>
      </div>

      <div className={styles.pageLoadingWrapperMain}>
        <div className={styles.pageWrapperLeftPadding}></div>

        <div
          id="loadingGrid"
          className={loadingStyles.pageLoaderMain}
          onMouseMoveCapture={handleMouseMove}
        >
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

          <LoadingTextAnimation />

          {done && <HundredPercentLoadingTextAnimation />}
        </div>

        <div className={styles.pageWrapperRightPadding}></div>
      </div>

      <div className={styles.pageWrapperBottom}>
        <div className={styles.pageWrapperBottomLeftGrid}></div>
        <div className={styles.pageWrapperBottomPadding}></div>
        <div className={styles.pageWrapperBottomRightGrid}></div>
      </div>
    </div>
  );
}
