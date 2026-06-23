"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/page-wrapper.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import Flashlight from "./flashlight";
import LoadingTextAnimation from "./loading-text-animation";
import HundredPercentLoadingTextAnimation from "./hundredpercent-loading-animation";

export default function PageLoaderElement({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageLoadingWrapperBackground}>
      <div className={styles.pageWrapperTop}>
        <div className={styles.pageWrapperTopLeftGrid}></div>
        <div className={styles.pageWrapperTopPadding}></div>
        <div className={styles.pageWrapperTopRightGrid}></div>
      </div>

      <div className={styles.pageLoadingWrapperMain}>
        <div className={styles.pageWrapperLeftPadding}></div>

        <div id="loadingGrid" className={loadingStyles.pageLoaderMain}>
          <Flashlight gridId="loadingGrid" />

          <LoadingTextAnimation />

          {done && (
            <HundredPercentLoadingTextAnimation onComplete={onComplete} />
          )}
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
