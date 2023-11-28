import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import loadingStyles from "@/styles/hero.module.scss";

export default function HeroIntroductionTypewriterAnimation() {
  const baseText =
    "I am a Developer based in Abuja, Nigeria, dedicated to crafting interactive digital experiences on the web, collaborating with various industry leaders to achieve this goal." as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 10,
      ease: "easeInOut",
      delay: 5,
    });
    return controls.stop;
  }, []);

  return (
    <span className={loadingStyles.typewriterEffectWrapper}>
      <motion.p className={loadingStyles.introText}>{displayText}</motion.p>
    </span>
  );
}
