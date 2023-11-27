"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { Project } from "@/utils/projects";
import { MotionValue, useScroll, useTransform } from "framer-motion";

export default function WorkCardMobile({
  src,
  title,
  id,
  i,
  tags,
  progress,
  range,
  targetScale,
}: Project) {
  const router = useRouter();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(
    progress as MotionValue<number>,
    range as number[],
    [1, targetScale as number]
  );

  const navigateToSingleProjectPage = (projectId: string) => {
    router.push(`/project/${projectId}`);
  };
  return (
    <figure
      ref={container}
      onClick={() => navigateToSingleProjectPage(`00${id}`)}
      className={styles.workItem}
      style={{
        // scale: scale.isAnimating() ? scale.getVelocity() : scale.get(),
        top: `calc(-5vh + ${(i as number) * 30}px)`,
      }}
    >
      <Image
        width={100}
        height={100}
        src={`${src}`}
        alt="Project Image"
        style={
          {
            // scale: imageScale.isAnimating()
            //   ? imageScale.getVelocity()
            //   : imageScale.get(),
          }
        }
        className={styles.workItemImage}
      />

      <figcaption className={styles.workItemName}>{title}</figcaption>
    </figure>
  );
}
