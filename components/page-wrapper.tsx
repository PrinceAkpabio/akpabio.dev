"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "@/styles/page-wrapper.module.scss";
import Header from "./header";
import Loading from "../app/loading";
import Nav from "./navigation";
import LenisProvider from "./lenis-provider";
import { LoadingContext } from "./loading-context";

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

  // Revealed only once the loader counter reaches 100%
  const handleLoaderComplete = useCallback(() => setIsLoading(false), []);

  // Scroll is locked while the menu is open by pausing Lenis (below)
  const toggleMenu = useCallback(() => setIsActive((active) => !active), []);

  useEffect(() => {
    if (isLoading) {
      // Lock the page behind the loader; Lenis is also paused via the provider
      document.body.style.overflowY = "hidden";
      // Safety net in case the counter stalls
      const fallback = setTimeout(() => setIsLoading(false), 8000);
      return () => clearTimeout(fallback);
    }

    document.body.style.overflowY = "scroll";
  }, [isLoading]);

  return (
    <LenisProvider paused={isLoading || isActive}>
      <LoadingContext.Provider value={isLoading}>
        <AnimatePresence mode="wait">
          {isLoading && <Loading onComplete={handleLoaderComplete} />}
        </AnimatePresence>

        <div className={styles.pageWrapperBackground}>
        <div className={styles.pageWrapperTop}>
          <div className={styles.pageWrapperTopLeftGrid}></div>
          <Header isActive={isActive} openMenu={toggleMenu}></Header>
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
          {isActive && <Nav openMenu={toggleMenu} />}
        </AnimatePresence>
        </div>
      </LoadingContext.Provider>
    </LenisProvider>
  );
}
