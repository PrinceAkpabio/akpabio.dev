"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { Project } from "@/utils/projects";

export default function WorkCard({ src, title, ...items }: Project) {
  const router = useRouter();

  const navigateToSingleProjectPage = (projectId: string) => {
    router.push(`/project/${projectId}`);
  };
  return (
    <figure
      onClick={() => navigateToSingleProjectPage(`00${items.id}`)}
      className={styles.workItem}
    >
      <Image
        width={100}
        height={100}
        src={`${src}`}
        alt="Project Image"
        className={styles.workItemImage}
      />

      <figcaption className={styles.workItemName}>{title}</figcaption>
    </figure>
  );
}
