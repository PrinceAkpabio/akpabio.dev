"use client";

import Contact from "@/components/contact";
import React, { useEffect, useState } from "react";
import styles from "@/styles/works.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const [projectId, setProjectId] = useState(1);
  const router = useRouter();

  const navLinkAction = () => {
    router.push("/");

    setTimeout(() => {
      router.push("#works-section");
    }, 500);
  };

  useEffect(() => {
    const slug = Number(params.slug);
    setProjectId(slug);
  }, [params]);

  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.introduction}>
          <div className={styles.left}>
            <Link href="/" className={styles.introText}>
              back to home
            </Link>
          </div>
          <div className={styles.right}>
            <span onClick={() => navLinkAction()} className={styles.menuItem}>
              Works
            </span>
            <Link href="#contact-section" className={styles.menuItem}>
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
          <p className={styles.name}>projectname {params.slug}</p>
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
