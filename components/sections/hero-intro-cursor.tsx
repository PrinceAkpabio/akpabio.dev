"use client";

import { motion, type Variants } from "framer-motion";
import loadingStyles from "@/styles/hero.module.scss";

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1, 1],
    },
  },
};

export default function HeroIntroCursorBlinker() {
  return (
    <motion.div
      className={loadingStyles.cursorBlinker}
      variants={cursorVariants}
      animate="blinking"
    />
  );
}
