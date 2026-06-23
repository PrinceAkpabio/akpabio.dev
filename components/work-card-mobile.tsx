"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { Project } from "@/utils/projects";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "./language-provider";

export default function WorkCardMobile({
  src,
  title,
  id,
  i,
  progress,
  range,
  targetScale,
}: Project) {
  const router = useRouter();
  const { t } = useTranslation();
  const container = useRef(null);

  // Zoom the image as the card scrolls into place
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Shrink the card as later cards stack over it (depth)
  const scale = useTransform(
    progress as MotionValue<number>,
    range as number[],
    [1, targetScale as number]
  );

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.figure
        onClick={() => router.push(`/project/00${id}`)}
        className={styles.card}
        style={{ scale, top: `calc(-5vh + ${(i as number) * 25}px)` }}
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
