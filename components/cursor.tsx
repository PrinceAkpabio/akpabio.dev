import { motion } from "framer-motion";
import loadingStyles from "@/styles/loading.module.scss";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1, 1],
    },
  },
};

export default function CursorBlinker() {
  return (
    <motion.div
      className={loadingStyles.cursorBlinker}
      variants={cursorVariants}
      animate="blinking"
      // className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
    />
  );
}
