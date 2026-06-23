"use client";

import React from "react";
import styles from "@/styles/header.module.scss";
import { SunDim } from "@phosphor-icons/react";
import BurgerMenu from "./burger-menu";
import { MenuState } from "./page-wrapper";
import Link from "next/link";
import { useTheme } from "./theme-provider";
import { useTranslation } from "./language-provider";
import LanguageSwitcher from "./language-switcher";

export default function Header({ isActive, openMenu }: MenuState) {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={styles.pageHeaderWrapper}>
      <div className={styles.headerSection}>
        <Link href="/" className={styles.logoName}>akpabio.dev</Link>
        <div className={styles.status}>
          <span className={styles.statusIconWrapper}>
            <span className={styles.statusIcon}></span>
          </span>
          <span className={styles.statusText}>
            {t("nav.availableForHire")}
          </span>
        </div>
      </div>
      <div className={styles.headerSection}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={t("a11y.toggleTheme")}
        >
          <SunDim weight="regular" />
        </button>
        <LanguageSwitcher />
      </div>

      <div className={styles.headerSection}>
        <BurgerMenu isActive={isActive} openMenu={openMenu} />
      </div>
    </div>
  );
}
