"use client";

import React, { useEffect, useState } from "react";
import loadingStyles from "@/styles/loading.module.scss";

export default function HundredPercentLoadingTextAnimation() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startCountUp: NodeJS.Timeout;

    if (count < 100) {
      startCountUp = setInterval(() => {
        setCount(count + 1);
      }, 120);
    } else {
      setCount(100);
    }

    return () => clearInterval(startCountUp);
  }, [count]);

  return (
    <div
      className={
        count === 100
          ? loadingStyles.loadedNumberCount
          : loadingStyles.numberCount
      }
    >
      {count}%
    </div>
  );
}
