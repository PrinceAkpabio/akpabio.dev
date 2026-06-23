"use client";

import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import { useScrollTo } from "./lenis-provider";
import Flashlight from "./flashlight";
import { useTranslation } from "./language-provider";

export default function Contact() {
  const scrollTo = useScrollTo();
  const { t } = useTranslation();

  return (
    <div id="contactGrid" className={styles.contactSection}>
      <Flashlight gridId="contactGrid" />

      <div id="contact-section" className={styles.contact}>
        <div className={styles.left}>
          <p className={styles.contactTitle}>{t("contact.title")}</p>
          <p className={styles.contactMessage}>{t("contact.message")}</p>
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.contactMiddle}>
        <div className={styles.callToAction} data-flashlight="grow">
          {t("contact.cta1")}
        </div>
        <div className={styles.callToAction} data-flashlight="grow">
          {t("contact.cta2")}
        </div>
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.left}>
          <p className={styles.designTag}>
            {t("contact.designedBy")}{" "}
            <Link
              className={styles.link}
              href="https://linkedin.com/in/jameschimdindu"
              target="_blank"
            >
              James Chimdindu
            </Link>
          </p>
        </div>
        <div className={styles.right}>
          <Link
            href="#works-section"
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#works-section");
            }}
          >
            {t("nav.works")}
          </Link>
          <Link
            href="#contact-section"
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact-section");
            }}
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/prince-akpabio-cv.pdf"
            className={styles.menuItem}
            download="prince-akpabio-cv"
            target="_blank"
          >
            {t("nav.resume")}
          </Link>
        </div>
      </div>
    </div>
  );
}
