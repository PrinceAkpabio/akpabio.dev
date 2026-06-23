"use client";

import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import { useScrollTo } from "./lenis-provider";
import Flashlight from "./flashlight";

export default function Contact() {
  const scrollTo = useScrollTo();

  return (
    <div id="contactGrid" className={styles.contactSection}>
      <Flashlight gridId="contactGrid" />

      <div id="contact-section" className={styles.contact}>
        <div className={styles.left}>
          <p className={styles.contactTitle}>CONTACT</p>
          <p className={styles.contactMessage}>
            Got a question, proposal or project or want to work together on
            something? Feel free to reach out.
          </p>
        </div>
        <div className={styles.right}></div>
      </div>

      <div className={styles.contactMiddle}>
        <div className={styles.callToAction} data-flashlight="grow">
          Let’s
        </div>
        <div className={styles.callToAction} data-flashlight="grow">
          Talk
        </div>
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.left}>
          <p className={styles.designTag}>
            {" "}
            Designed by{" "}
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
            Works
          </Link>
          <Link
            href="#contact-section"
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact-section");
            }}
          >
            Contact
          </Link>
          <Link
            href="/prince-akpabio-cv.pdf"
            className={styles.menuItem}
            download="prince-akpabio-cv"
            target="_blank"
          >
            RESUMé
          </Link>
        </div>
      </div>
    </div>
  );
}
