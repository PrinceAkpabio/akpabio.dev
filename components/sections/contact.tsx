"use client";

import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import Flashlight from "./flashlight";
import SectionNav from "@/components/layout/section-nav";
import { useTranslation } from "@/components/providers/language-provider";

export default function Contact() {
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
          <SectionNav className={styles.menuItem} />
        </div>
      </div>
    </div>
  );
}
