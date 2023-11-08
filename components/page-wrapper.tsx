"use client";

import React from "react";
import styles from "@/styles/page-wrapper.module.scss";

type PageContextProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageContextProps) {
  return (
    <div className={styles.pageWrapperBackground}>
      <div className={styles.pageWrapperTop}>
        <div className={styles.pageWrapperTopLeftGrid}></div>
        <div className={styles.pageWrapperTopPadding}></div>
        <div className={styles.pageWrapperTopRightGrid}></div>
      </div>

      <div className={styles.pageWrapperMain}>
        <div className={styles.pageWrapperLeftPadding}></div>

        <div className={styles.pageWrapperMainChildren}>{children}</div>

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
