import type { KeyboardEvent } from "react";

/** onKeyDown that fires the handler on Enter/Space, for elements given role="button". */
export function activateOnKey(handler: () => void) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler();
    }
  };
}
