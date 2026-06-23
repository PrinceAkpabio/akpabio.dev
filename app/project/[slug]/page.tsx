"use client";

import Contact from "@/components/contact";
import { use, useEffect } from "react";
import styles from "@/styles/works.module.scss";
import Link from "next/link";
import { useLenis, useScrollTo } from "@/components/lenis-provider";
import Flashlight from "@/components/flashlight";
import ProjectGallery from "@/components/project-gallery";
import { projects } from "@/utils/projects";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectId = Number(slug);
  const project = projects.find((p) => p.id === projectId) ?? projects[0];
  const images = project.images ?? [project.src];
  const scrollTo = useScrollTo();
  const lenis = useLenis();

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
              back to home
            </Link>
          </div>
          <div className={styles.right}>
            <span
              onClick={() => scrollTo("#works-section")}
              className={styles.menuItem}
            >
              Works
            </span>
            <Link
              href="#contact-section"
              className={styles.menuItem}
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact-section");
              }}
            >
              Contact
            </Link>
            <Link
              href="/prince-akpabio-cv.pdf"
              className={styles.menuItem}
              download="prince-akpabio-cv"
              target="_blank"
            >
              RESUMé
            </Link>
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
                <div className={styles.label}>{tag.label}</div>
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
                previous project
              </Link>
            ) : (
              <span
                className={`${styles.previousLabel} ${styles.disabled}`}
                aria-disabled="true"
              >
                previous project
              </span>
            )}
          </div>
          <div className={styles.right}>
            {hasNext ? (
              <Link
                href={`/project/00${projectId + 1}`}
                className={styles.nextLabel}
              >
                next project
              </Link>
            ) : (
              <span
                className={`${styles.nextLabel} ${styles.disabled}`}
                aria-disabled="true"
              >
                next project
              </span>
            )}
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
