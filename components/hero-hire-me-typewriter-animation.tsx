import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import loadingStyles from "@/styles/hero.module.scss";
import HeroIntroCursorBlinker from "./hero-intro-cursor";

export default function HeroHireMeTypewriterAnimation() {
  const baseText = "Hire Me" as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 7,
      ease: "easeOut",
      delay: 14,
    });
    return controls.stop;
  }, []);

  return (
    <span className={loadingStyles.typewriterEffectWrapper}>
      <motion.p className={loadingStyles.hireMeText}>{displayText}</motion.p>
      <HeroIntroCursorBlinker />
    </span>
  );
}
