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

// How much the mask grows when hovering a [data-flashlight="grow"] element
const GROW_FACTOR = 2.75;

/**
 * The grid + flashlight + green masked-cursor backdrop, shared by the hero,
 * works, contact, project and loader sections. Render it as the first child of
 * an isolated `position: relative` section that carries `id={gridId}`.
 *
 * Pointer tracking is element-relative (accurate after scrolling) and spring
 * smoothed. The mask grows over elements marked `data-flashlight="grow"` (big
 * text and project images) so it protrudes at their edges and hides at centers.
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
  const size = useMotionValue(maskSize);

  const springX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });
  const springSize = useSpring(size, { stiffness: 250, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = maskRef.current?.getBoundingClientRect();
      if (!rect) return;
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);

      const target = e.target as HTMLElement | null;
      const overGrowTarget =
        !!target &&
        !!document.getElementById(gridId)?.contains(target) &&
        !!target.closest('[data-flashlight="grow"]');
      size.set(overGrowTarget ? maskSize * GROW_FACTOR : maskSize);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y, size, gridId, maskSize]);

  // Center the masked circle on the pointer, accounting for the live size
  const maskX = useTransform(
    [springX, springSize],
    ([px, s]: number[]) => px - s / 2
  );
  const maskY = useTransform(
    [springY, springSize],
    ([py, s]: number[]) => py - s / 2
  );
  const maskPosition = useMotionTemplate`${maskX}px ${maskY}px`;
  const maskSizeValue = useMotionTemplate`${springSize}px`;
  const flashlight = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, transparent, var(--black-100, #111) 90%)`;

  return (
    <>
      <motion.div
        ref={maskRef}
        aria-hidden
        className={loadingStyles.mask}
        style={{ maskPosition, maskSize: maskSizeValue }}
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
