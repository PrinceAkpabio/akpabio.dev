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
        width={640}
        height={640}
        sizes="(min-width: 900px) 23vw, 100vw"
        src={src}
        alt={t("a11y.projectImage")}
        className={styles.workItemImage}
        data-flashlight="grow"
      />

      <figcaption className={styles.workItemName}>{title}</figcaption>
    </figure>
  );
}
