"use client";

import Contact from "@/components/sections/contact";
import { use, useEffect } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useLenis } from "@/components/providers/lenis-provider";
import { useTranslation } from "@/components/providers/language-provider";
import Flashlight from "@/components/sections/flashlight";
import ProjectGallery from "@/components/sections/project-gallery";
import SectionNav from "@/components/layout/section-nav";
import useIsMobile from "@/hooks/useIsMobile";
import { projects } from "@/lib/projects";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectId = Number(slug);
  const project = projects.find((p) => p.id === projectId) ?? projects[0];
  const isMobile = useIsMobile();
  const desktopImages = project.images ?? [project.src];
  const mobileImages =
    project.imagesMobile ??
    (project.srcMobile ? [project.srcMobile] : desktopImages);
  const images = isMobile ? mobileImages : desktopImages;
  const lenis = useLenis();
  const { t, dict } = useTranslation();
  const item =
    dict.project.items.find((it) => it.id === project.id) ?? dict.project.items[0];

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
            {item.title}
          </p>
        </div>

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <div className={styles.meta}>
              <div className={styles.tag}>
                <div className={styles.label}>{t("project.labels.company")}</div>
                <div className={styles.content}>{project.company}</div>
              </div>
              <div className={styles.tag}>
                <div className={styles.label}>{t("project.labels.role")}</div>
                <div className={styles.content}>{item.role}</div>
              </div>
              <div className={styles.tag}>
                <div className={styles.label}>{t("project.labels.year")}</div>
                <div className={styles.content}>{item.year}</div>
              </div>
            </div>

            <div className={styles.tag}>
              <div className={styles.label}>{t("project.labels.overview")}</div>
              <p className={styles.content}>{item.overview}</p>
            </div>

            <div className={styles.tag}>
              <div className={styles.label}>
                {t("project.labels.contributions")}
              </div>
              <ul className={styles.contributions}>
                {item.contributions.map((contribution) => (
                  <li key={contribution} className={styles.content}>
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.tag}>
              <div className={styles.label}>{t("project.labels.stack")}</div>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.tag}>
              <div className={styles.label}>{t("project.labels.outcome")}</div>
              <p className={styles.content}>{item.outcome}</p>
            </div>

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                className={styles.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("project.visitSite")} <ArrowUpRight weight="bold" />
              </Link>
            )}
          </div>

          <div className={styles.projectImage} data-flashlight="grow">
            <ProjectGallery
              images={images}
              alt={item.title}
              imagePosition={isMobile ? undefined : project.cardPosition}
            />
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
