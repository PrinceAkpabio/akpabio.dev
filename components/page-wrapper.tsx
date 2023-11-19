"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/page-wrapper.module.scss";
import loadingStyles from "@/styles/loading.module.scss";
import Header from "./header";
import Loading from "../app/loading";
import useMousePosition from "@/utils/useMousePosition";

type PageContextProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageContextProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { x, y } = useMousePosition();
  const size = 40;

  useEffect(() => {
    let loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loading></Loading>
      ) : ( */}
      <div className={styles.pageWrapperBackground}>
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
          <Header></Header>
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
      </div>
      {/* )} */}
    </>
  );
}
