"use client";

import React from "react";
import styles from "@/styles/header.module.scss";
import { SunDim } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className={styles.pageHeaderWrapper}>
      <div className={styles.headerSection}>
        <span className={styles.logoName}>akpabio.dev</span>
        <div className={styles.status}>
          <span className={styles.statusIconWrapper}>
            <span className={styles.statusIcon}></span>
          </span>
          <span className={styles.statusText}>available for hire</span>
        </div>
      </div>
      <div className={styles.headerSection}>
        <SunDim color="#666666" weight="regular" cursor="pointer" />
        <span className={styles.languageText}>EN</span>
        <span className={styles.line}></span>
        <span className={styles.languageText}>FR</span>
      </div>
    </div>
  );
}
