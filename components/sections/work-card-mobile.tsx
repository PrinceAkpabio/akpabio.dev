"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { WorkCardMobileProps } from "@/lib/projects";
import { activateOnKey } from "@/lib/a11y";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/components/providers/language-provider";

export default function WorkCardMobile({
  src,
  id,
  i,
  progress,
  range,
  targetScale,
}: WorkCardMobileProps) {
  const router = useRouter();
  const { t, dict } = useTranslation();
  const container = useRef(null);
  const title = dict.project.items.find((item) => item.id === id)?.title ?? "";

  const openProject = () => router.push(`/project/00${id}`);

  // Zoom the image as the card scrolls into place
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Shrink the card as later cards stack over it (depth)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.figure
        onClick={openProject}
        onKeyDown={activateOnKey(openProject)}
        role="button"
        tabIndex={0}
        aria-label={`${t("a11y.viewProject")}: ${title}`}
        className={styles.card}
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className={styles.cardImage}>
          <motion.div
            className={styles.cardImageInner}
            style={{ scale: imageScale }}
          >
            <Image
              fill
              sizes="100vw"
              src={src}
              alt={t("a11y.projectImage")}
              className={styles.workItemImage}
            />
          </motion.div>
        </div>
        <figcaption className={styles.workItemName}>{title}</figcaption>
      </motion.figure>
    </div>
  );
}
