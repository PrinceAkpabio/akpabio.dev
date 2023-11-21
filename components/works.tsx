"use client";

import React from "react";
import styles from "@/styles/works.module.scss";
import Image from "next/image";
import ProjectImage1 from "@/public/project-01.jpg";
import ProjectImage2 from "@/public/project-02.png";
import ProjectImage3 from "@/public/project-03.jpg";
import ProjectImage4 from "@/public/project-04.jpg";
import ProjectImage5 from "@/public/project-05.jpg";
import ProjectImage6 from "@/public/project-06.jpg";
import ProjectImage7 from "@/public/project-07.jpg";
import ProjectImage8 from "@/public/project-08.jpg";

export default function Works() {
  return (
    <div id="works-section" className={styles.worksSection}>
      <div className={styles.sectionTitle}>
        <p className={styles.title}> Works</p>
      </div>

      <div className={styles.worksGrid}>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage1}
            alt="Project Image 1"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 001
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage2}
            alt="Project Image 2"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 002
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage3}
            alt="Project Image 3"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 003
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage4}
            alt="Project Image 4"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 004
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage5}
            alt="Project Image 5"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 005
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage6}
            alt="Project Image 6"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 006
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage7}
            alt="Project Image 7"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 007
          </figcaption>
        </figure>
        <figure className={styles.workItem}>
          <Image
            src={ProjectImage8}
            alt="Project Image 8"
            className={styles.workItemImage}
          />

          <figcaption className={styles.workItemName}>
            projectname 008
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
