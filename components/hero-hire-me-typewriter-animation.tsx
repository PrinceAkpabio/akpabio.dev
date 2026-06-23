import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import loadingStyles from "@/styles/hero.module.scss";
import HeroIntroCursorBlinker from "./hero-intro-cursor";
import { useTranslation } from "./language-provider";

export default function HeroHireMeTypewriterAnimation({
  skip,
  start,
}: {
  skip?: boolean;
  start?: boolean;
}) {
  const { t } = useTranslation();
  const baseText = t("hero.hireMe");
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
      duration: 1,
      ease: "easeOut",
      delay: 2.5,
    });
    return controls.stop;
  }, [count, skip, start, baseText]);

  return (
    <span className={loadingStyles.typewriterEffectWrapper}>
      <motion.p className={loadingStyles.hireMeText}>{displayText}</motion.p>
      <HeroIntroCursorBlinker />
    </span>
  );
}
