"use client";

import { useEffect, useState } from "react";

type Grid = Array<{ columns: Array<null> }>;

const DEFAULT_GRID: Grid = new Array(8).fill({
  columns: new Array(10).fill(null),
});

const usePageGrid = (
  gridId: string,
  cellHeight: number = 64,
  cellWidth: number = 64
): Grid => {
  const [grid, setGrid] = useState<Grid>(DEFAULT_GRID);

  useEffect(() => {
    const gridElement = document.getElementById(gridId);
    if (!gridElement) return;

    const measureGrid = () => {
      const rows = Math.ceil(gridElement.offsetHeight / cellHeight);
      const columns = Math.ceil(gridElement.offsetWidth / cellWidth);
      setGrid(new Array(rows).fill({ columns: new Array(columns).fill(null) }));
    };

    const observer = new ResizeObserver(measureGrid);
    observer.observe(gridElement);

    return () => observer.disconnect();
  }, [gridId, cellHeight, cellWidth]);

  return grid;
};

export default usePageGrid;
