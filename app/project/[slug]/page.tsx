"use client";

import Contact from "@/components/contact";
import React, { use } from "react";
import styles from "@/styles/works.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useScrollTo } from "@/components/lenis-provider";
import Flashlight from "@/components/flashlight";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectId = Number(slug);
  const scrollTo = useScrollTo();

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
            projectname {slug}
          </p>
        </div>

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <div className={styles.tag}>
              <div className={styles.label}>client</div>
              <div className={styles.content}>experimental client</div>
            </div>
            <div className={styles.tag}>
              <div className={styles.label}>year</div>
              <div className={styles.content}>2021</div>
            </div>
            <div className={styles.tag}>
              <div className={styles.label}>role</div>
              <div className={styles.content}>frontend developer</div>
            </div>
            <div className={styles.tag}>
              <div className={styles.label}>challenge</div>
              <div className={styles.content}>experimental challenge</div>
            </div>
            <div className={styles.tag}>
              <div className={styles.label}>process</div>
              <div className={styles.content}>experimental process</div>
            </div>
            <div className={styles.tag}>
              <div className={styles.label}>outcome</div>
              <div className={styles.content}>
                experimental outcome. you can place links here.
              </div>
            </div>
          </div>

          <div className={styles.projectImage}>
            <Image
              width={100}
              height={100}
              src={
                projectId === 2
                  ? `/project-0${projectId}.png`
                  : `/project-0${projectId}.jpg`
              }
              alt="project image"
              className={styles.imageContent}
              data-flashlight="grow"
            />
          </div>
        </div>

        <div className={styles.projectNavigation}>
          <div className={styles.left}>
            <Link
              href={`/project/00${projectId > 1 ? projectId - 1 : 1}`}
              className={styles.previousLabel}
            >
              previous project
            </Link>
          </div>
          <div className={styles.right}>
            <Link
              href={`/project/00${projectId < 8 ? projectId + 1 : 8}`}
              className={styles.nextLabel}
            >
              next project
            </Link>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
