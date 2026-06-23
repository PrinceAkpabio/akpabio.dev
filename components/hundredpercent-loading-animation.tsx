"use client";

import React, { useEffect, useState } from "react";
import loadingStyles from "@/styles/loading.module.scss";
import { motion } from "framer-motion";

export default function HundredPercentLoadingTextAnimation({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 100) {
      onComplete?.();
      return;
    }

    const tick = setTimeout(() => setCount(count + 1), 20);
    return () => clearTimeout(tick);
  }, [count, onComplete]);

  return (
    <motion.div
      className={
        count === 100
          ? loadingStyles.loadedNumberCount
          : loadingStyles.numberCount
      }
    >
      {count}%
    </motion.div>
  );
}
