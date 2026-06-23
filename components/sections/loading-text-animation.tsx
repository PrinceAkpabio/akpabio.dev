"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./cursor";
import loadingStyles from "@/styles/loading.module.scss";
import { useTranslation } from "@/components/providers/language-provider";

export default function LoadingTextAnimation() {
  const { t } = useTranslation();
  const baseText = t("loader.loading");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count, baseText]);

  return (
    <span className={loadingStyles.loadingTextWrapper}>
      <motion.span className={loadingStyles.loadingText}>
        {displayText}
      </motion.span>
      <CursorBlinker />
    </span>
  );
}
