"use client";

import Image from "next/image";
import styles from "@/styles/works.module.scss";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/projects";
import { useTranslation } from "@/components/providers/language-provider";

export default function WorkCard({ src, title, ...items }: Project) {
  const router = useRouter();
  const { t } = useTranslation();

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
        src={src}
        alt={t("a11y.projectImage")}
        className={styles.workItemImage}
        data-flashlight="grow"
      />

      <figcaption className={styles.workItemName}>{title}</figcaption>
    </figure>
  );
}
