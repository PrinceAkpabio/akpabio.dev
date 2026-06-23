"use client";

import React, { useState } from "react";
import styles from "@/styles/nav.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/lib/anim";
import NavLink from "./navigation-link";
import { SunDim } from "@phosphor-icons/react";
import { useTheme } from "@/components/providers/theme-provider";
import { useTranslation } from "@/components/providers/language-provider";
import LanguageSwitcher from "./language-switcher";

export interface NavItem {
  title: string;
  href: string;
  download?: boolean;
}

export interface NavLinkProps {
  data: NavItem & { index: number };
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  openMenu: () => void;
}

export interface NavLinkActionInterface {
  openMenu: () => void;
}

export default function Nav({ openMenu }: NavLinkActionInterface) {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { title: t("nav.works"), href: "#works-section", download: false },
    { title: t("nav.contact"), href: "#contact-section", download: false },
    { title: t("nav.resume"), href: "/prince-akpabio-cv.pdf", download: true },
    { title: t("nav.availableForHire"), href: "#" },
  ];

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                openMenu={openMenu}
              ></NavLink>
            );
          })}
        </div>

        <div className={styles.footer}>
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
      </div>
    </motion.div>
  );
}
