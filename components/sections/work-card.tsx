"use client";

import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/projects";
import { activateOnKey } from "@/lib/a11y";
import { useTranslation } from "@/components/providers/language-provider";

export default function WorkCard({ src, title, id }: Project) {
  const router = useRouter();
  const { t } = useTranslation();

  const openProject = () => router.push(`/project/00${id}`);

  return (
    <figure
      onClick={openProject}
      onKeyDown={activateOnKey(openProject)}
      role="button"
      tabIndex={0}
      aria-label={`${t("a11y.viewProject")}: ${title}`}
      className={styles.workItem}
    >
      <Image
        width={100}
        height={100}
        src={src}
        alt={t("a11y.projectImage")}
        className={styles.workItemImage}
        data-flashlight="grow"
      />

      <figcaption className={styles.workItemName}>{title}</figcaption>
    </figure>
  );
}
