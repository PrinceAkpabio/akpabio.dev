import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import loadingStyles from "@/styles/hero.module.scss";
import { useTranslation } from "./language-provider";

export default function HeroIntroductionTypewriterAnimation({
  skip,
  start,
}: {
  skip?: boolean;
  start?: boolean;
}) {
  const { t } = useTranslation();
  const baseText = t("hero.intro");
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
      duration: 2,
      ease: "easeInOut",
      delay: 0.3,
    });
    return controls.stop;
  }, [count, skip, start, baseText]);

  return (
    <span className={loadingStyles.typewriterEffectWrapper}>
      <motion.p className={loadingStyles.introText}>{displayText}</motion.p>
    </span>
  );
}
