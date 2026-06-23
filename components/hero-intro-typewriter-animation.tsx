import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import loadingStyles from "@/styles/hero.module.scss";

const baseText =
  "I am a Developer based in Abuja, Nigeria, dedicated to crafting interactive digital experiences on the web, collaborating with various industry leaders to achieve this goal.";

export default function HeroIntroductionTypewriterAnimation({
  skip,
  start,
}: {
  skip?: boolean;
  start?: boolean;
}) {
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
  }, [count, skip, start]);

  return (
    <span className={loadingStyles.typewriterEffectWrapper}>
      <motion.p className={loadingStyles.introText}>{displayText}</motion.p>
    </span>
  );
}
