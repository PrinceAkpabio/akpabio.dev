"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/page-wrapper.module.scss";
import Header from "./header";
import Loading from "../app/loading";

type PageContextProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageContextProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 15200);
  }, []);

  return (
    <>
      {/* <Loading></Loading> */}
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className={styles.pageWrapperBackground}>
          <div className={styles.pageWrapperTop}>
            <div className={styles.pageWrapperTopLeftGrid}></div>
            <Header></Header>
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
      )}
    </>
  );
}
