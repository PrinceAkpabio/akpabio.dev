"use client";

import { useState, useEffect } from "react";

type Grid = Array<{ columns: Array<null> }>;

const usePageGrid = (
  gridId: string,
  cellHeight: number = 64,
  cellWidth: number = 64
): Grid => {
  let gridElement: HTMLElement;

  if (typeof window !== "undefined") {
    gridElement = document.getElementById(gridId) as HTMLElement;
  }

  let initialGrid = new Array(8).fill({
    columns: new Array(10).fill(null),
  });

  const [grid, setGrid] = useState(initialGrid);
  const [isGridNull, setIsGridNull] = useState(true);

  const updatePageGrid = (e: any) => {
    let newGrid = new Array(
      Math.ceil(gridElement?.offsetHeight / cellHeight)
    ).fill({
      columns: new Array(Math.ceil(gridElement?.offsetWidth / cellWidth)).fill(
        null
      ),
    });

    setGrid(newGrid);
  };

  useEffect(() => {
    if (gridElement !== null && isGridNull) {
      setIsGridNull(false);
      updatePageGrid(false);
    }
    window.addEventListener("resize", updatePageGrid);

    return () => window.removeEventListener("resize", updatePageGrid);
  }, []);

  return grid;
};

export default usePageGrid;
