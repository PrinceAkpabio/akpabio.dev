"use client";

import React, { useState } from "react";
import styles from "@/styles/nav.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../utils/anim";
import NavLink from "./navigation-link";
import { SunDim } from "@phosphor-icons/react";

export interface NavItem {
  title: string;
  href: string;
  download?: boolean;
}

export type NavLinkDataItem = {
  index: number;
  title: string;
  href: string;
  download?: boolean;
};
export interface NavLinkItem {
  data: NavLinkDataItem;
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  openMenu: NavLinkAction;
}

export type NavLinkAction = () => void;

export interface NavLinkActionInterface {
  openMenu: () => void;
}

const navItems: NavItem[] = [
  {
    title: "Works",
    href: "#works-section",
    download: false,
  },
  {
    title: "Contact",
    href: "#contact-section",
    download: false,
  },
  {
    title: "RESUMé",
    href: "/prince-akpabio-cv.pdf",
    download: true,
  },
  {
    title: "available for hire",
    href: "#",
  },
];

export default function Nav({ openMenu }: NavLinkActionInterface) {
  const pathname = usePathname();

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
          <SunDim color="#666666" weight="regular" cursor="pointer" />
          <span className={styles.languageText}>EN</span>
          <span className={styles.line}></span>
          <span className={styles.languageText}>FR</span>
        </div>
      </div>
    </motion.div>
  );
}
