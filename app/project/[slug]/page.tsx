"use client";

import Contact from "@/components/sections/contact";
import { use, useEffect } from "react";
import styles from "@/styles/works.module.scss";
import Link from "next/link";
import { useLenis } from "@/components/providers/lenis-provider";
import { useTranslation } from "@/components/providers/language-provider";
import Flashlight from "@/components/sections/flashlight";
import ProjectGallery from "@/components/sections/project-gallery";
import SectionNav from "@/components/layout/section-nav";
import { projects } from "@/lib/projects";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectId = Number(slug);
  const project = projects.find((p) => p.id === projectId) ?? projects[0];
  const images = project.images ?? [project.src];
  const lenis = useLenis();
  const { t } = useTranslation();

  const hasPrevious = projectId > 1;
  const hasNext = projectId < projects.length;

  // Land at the top whenever the project changes (prev/next, or arriving from works)
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [projectId, lenis]);

  return (
    <>
      <div id="projectGrid" className={styles.projectSection}>
        <Flashlight gridId="projectGrid" />

        <div className={styles.introduction}>
          <div className={styles.left}>
            <Link href="/" className={styles.introText}>
              {t("nav.backToHome")}
            </Link>
          </div>
          <div className={styles.right}>
            <SectionNav className={styles.menuItem} />
          </div>
        </div>

        <div className={styles.projectName}>
          <p className={styles.name} data-flashlight="grow">
            {project.title}
          </p>
        </div>

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            {project.tags.map((tag) => (
              <div className={styles.tag} key={tag.label}>
                <div className={styles.label}>
                  {t(`project.labels.${tag.label}`)}
                </div>
                <div className={styles.content}>{tag.content}</div>
              </div>
            ))}
          </div>

          <div className={styles.projectImage} data-flashlight="grow">
            <ProjectGallery images={images} alt={project.title} />
          </div>
        </div>

        <div className={styles.projectNavigation}>
          <div className={styles.left}>
            {hasPrevious ? (
              <Link
                href={`/project/00${projectId - 1}`}
                className={styles.previousLabel}
              >
                {t("project.previous")}
              </Link>
            ) : (
              <span
                className={`${styles.previousLabel} ${styles.disabled}`}
                aria-disabled="true"
              >
                {t("project.previous")}
              </span>
            )}
          </div>
          <div className={styles.right}>
            {hasNext ? (
              <Link
                href={`/project/00${projectId + 1}`}
                className={styles.nextLabel}
              >
                {t("project.next")}
              </Link>
            ) : (
              <span
                className={`${styles.nextLabel} ${styles.disabled}`}
                aria-disabled="true"
              >
                {t("project.next")}
              </span>
            )}
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
