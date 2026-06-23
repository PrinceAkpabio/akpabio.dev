"use client";

import React, { useRef } from "react";
import styles from "@/styles/works.module.scss";
import { Project, projects } from "@/utils/projects";
import WorkCard from "./work-card";
import WorkCardMobile from "./work-card-mobile";
import { useScroll } from "framer-motion";
import Flashlight from "./flashlight";
import { useTranslation } from "./language-provider";

export default function Works() {
  const { t } = useTranslation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} id="works-section" className={styles.worksSection}>
      <Flashlight gridId="works-section" />

      <div className={styles.sectionTitle}>
        <p className={styles.title}>{t("works.title")}</p>
      </div>

      <div className={styles.worksGrid}>
        {projects.map((project: Project, idx: number) => {
          return <WorkCard key={`p_${idx}`} {...project} />;
        })}
      </div>

      <div className={styles.worksGridMobile}>
        {projects.map((project: Project, idx: number) => {
          const targetScale = 1 - (projects.length - idx) * 0.05;
          return (
            <WorkCardMobile
              key={`p_${idx}`}
              i={idx}
              {...project}
              progress={scrollYProgress}
              range={[idx * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
