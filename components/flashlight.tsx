"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import loadingStyles from "@/styles/loading.module.scss";
import usePageGrid from "@/utils/usePageGrid";

/**
 * The grid + flashlight + green masked-cursor backdrop, shared by the hero,
 * works, contact and loader sections. Render it as the first child of a
 * `position: relative` section that carries `id={gridId}`.
 *
 * Pointer tracking is element-relative (so it stays accurate after scrolling)
 * and smoothed with a spring, which fixes the lag and drift of the old setup.
 */
export default function Flashlight({
  gridId,
  maskSize = 40,
}: {
  gridId: string;
  maskSize?: number;
}) {
  const grid = usePageGrid(gridId);
  const maskRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const springX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = maskRef.current?.getBoundingClientRect();
      if (!rect) return;
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  // Center the masked circle on the pointer
  const maskX = useTransform(springX, (v) => v - maskSize / 2);
  const maskY = useTransform(springY, (v) => v - maskSize / 2);
  const maskPosition = useMotionTemplate`${maskX}px ${maskY}px`;
  const flashlight = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, transparent, #111 90%)`;

  return (
    <>
      <motion.div
        ref={maskRef}
        aria-hidden
        className={loadingStyles.mask}
        style={{ maskPosition, maskSize: `${maskSize}px` }}
      />

      <motion.div
        aria-hidden
        className={loadingStyles.flashlight}
        style={{ background: flashlight }}
      />

      <motion.div aria-hidden className={loadingStyles.gridWrapper}>
        {grid.map((row, idx: number) => (
          <div key={idx} className={loadingStyles.row}>
            {row.columns.map((_, idxx: number) => (
              <span key={idxx} className={loadingStyles.cell}></span>
            ))}
          </div>
        ))}
      </motion.div>
    </>
  );
}
