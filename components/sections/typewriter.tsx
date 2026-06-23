"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type Easing,
} from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/hero.module.scss";
import { useTranslation } from "@/components/providers/language-provider";
import HeroIntroCursorBlinker from "./hero-intro-cursor";

type TypewriterProps = {
  textKey: string;
  duration: number;
  ease: Easing;
  delay: number;
  className: string;
  skip?: boolean;
  start?: boolean;
  showCursor?: boolean;
};

export default function Typewriter({
  textKey,
  duration,
  ease,
  delay,
  className,
  skip,
  start,
  showCursor,
}: TypewriterProps) {
  const { t } = useTranslation();
  const baseText = t(textKey);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    if (skip) {
      count.set(baseText.length);
      return;
    }
    if (!start) return;

    const controls = animate(count, baseText.length, {
      type: "tween",
      duration,
      ease,
      delay,
    });
    return controls.stop;
  }, [count, skip, start, baseText, duration, ease, delay]);

  return (
    <span className={styles.typewriterEffectWrapper}>
      <motion.p className={className}>{displayText}</motion.p>
      {showCursor && <HeroIntroCursorBlinker />}
    </span>
  );
}
