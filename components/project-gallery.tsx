"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  Square,
} from "@phosphor-icons/react";
import { useLenis } from "./lenis-provider";
import { useTranslation } from "./language-provider";
import styles from "@/styles/project-gallery.module.scss";

/**
 * Project image with a "click to expand" lightbox: a full-screen viewer with
 * prev/next arrows and a multi-image counter. Driven by an images array so it
 * scales to however many images a project has.
 */
export default function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const lenis = useLenis();
  const { t } = useTranslation();
  const multiple = images.length > 1;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Lock scrolling and wire keyboard controls while the lightbox is open
  useEffect(() => {
    if (!open) return;
    lenis?.stop();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [open, next, prev, lenis]);

  return (
    <>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        aria-label={t("a11y.expandImage")}
      >
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 760px) 100vw, 760px"
          className={styles.thumbImage}
        />
        <span className={styles.expandHint}>
          {t("gallery.expand")} <ArrowUpRight weight="bold" />
        </span>
        <span className={styles.counter}>
          <Square weight="regular" /> {images.length}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {multiple && (
              <button
                type="button"
                className={styles.arrow}
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={t("a11y.previousImage")}
              >
                <CaretLeft />
              </button>
            )}

            <motion.div
              key={index}
              className={styles.stage}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={images[index]}
                alt={alt}
                fill
                sizes="90vw"
                className={styles.stageImage}
              />
              <span className={styles.counter}>
                <Square weight="regular" /> {index + 1}/{images.length}
              </span>
            </motion.div>

            {multiple && (
              <button
                type="button"
                className={styles.arrow}
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={t("a11y.nextImage")}
              >
                <CaretRight />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
