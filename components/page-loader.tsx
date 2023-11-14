"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/page-wrapper.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import usePageGrid from "@/utils/usePageGrid";
import LoadingTextAnimation from "./loading-text-animation";
import HundredPercentLoadingTextAnimation from "./hundredpercent-loading-animation";

export default function PageLoaderElement() {
  const [done, setDone] = useState(false);
  const { x, y } = useMousePosition();
  const grid = usePageGrid("loadingGrid");
  const size = 40;

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1500);
  }, [done]);
  return (
    <div className={styles.pageWrapperBackground}>
      <div className={styles.pageWrapperTop}>
        <div className={styles.pageWrapperTopLeftGrid}></div>
        <div className={styles.pageWrapperTopPadding}></div>
        <div className={styles.pageWrapperTopRightGrid}></div>
      </div>

      <div className={styles.pageWrapperMain}>
        <div className={styles.pageWrapperLeftPadding}></div>

        <div className={loadingStyles.pageLoaderMain}>
          <motion.div
            id="loadingGrid"
            className={loadingStyles.mask}
            animate={{
              WebkitMaskPosition: `${(x as number) - (size + 60)}px ${
                (y as number) - (size + 60)
              }px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
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
