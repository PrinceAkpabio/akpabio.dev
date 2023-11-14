import { useState, useEffect } from "react";

type MousePosition = { x: number | null; y: number | null };

const useMousePosition = () => {
  let initialMousePosition: MousePosition = { x: null, y: null };
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
