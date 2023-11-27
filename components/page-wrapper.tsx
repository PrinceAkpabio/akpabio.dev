"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "@/styles/page-wrapper.module.scss";
import Header from "./header";
import Loading from "../app/loading";
import Nav from "./navigation";

type PageContextProps = {
  children: React.ReactNode;
};

export type MenuState = {
  isActive: boolean;
  openMenu: () => void;
};

export default function PageWrapper({ children }: PageContextProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isLoading === false) {
      // Remove overflow hidden from the body styling to enable scrolling
      document.body.style.overflowY = "scroll";
    }

    let loadingTimer = setTimeout(() => {
      // Remove overflow hidden from the body styling to enable scrolling
      document.body.style.overflowY = "scroll";
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>

      <div className={styles.pageWrapperBackground}>
        <div className={styles.pageWrapperTop}>
          <div className={styles.pageWrapperTopLeftGrid}></div>
          <Header
            isActive={isActive}
            openMenu={() => {
              setIsActive(!isActive);
              isActive
                ? (document.body.style.overflowY = "scroll")
                : (document.body.style.overflowY = "hidden");
            }}
          ></Header>
          <div className={styles.pageWrapperTopRightGrid}></div>
        </div>

        <div className={styles.pageWrapperMain}>
          <div className={styles.pageWrapperLeftPadding}></div>

          <main className={styles.pageWrapperMainChildren}>{children}</main>

          <div className={styles.pageWrapperRightPadding}></div>
        </div>

        <div className={styles.pageWrapperBottom}>
          <div className={styles.pageWrapperBottomLeftGrid}></div>
          <div className={styles.pageWrapperBottomPadding}></div>
          <div className={styles.pageWrapperBottomRightGrid}></div>
        </div>

        <AnimatePresence mode="wait">
          {isActive && (
            <Nav
              openMenu={() => {
                setIsActive(!isActive);
                isActive
                  ? (document.body.style.overflowY = "scroll")
                  : (document.body.style.overflowY = "hidden");
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
