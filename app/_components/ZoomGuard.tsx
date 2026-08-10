"use client";

import { useEffect } from "react";

export function ZoomGuard() {
  useEffect(() => {
    const preventZoomOutKey = (event: KeyboardEvent) => {
      if (!event.ctrlKey && !event.metaKey) return;

      const isZoomOut = event.key === "-"
        || event.key === "_"
        || event.code === "Minus"
        || event.code === "NumpadSubtract";

      if (isZoomOut) event.preventDefault();
    };

    const preventZoomOutWheel = (event: WheelEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.deltaY > 0) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", preventZoomOutKey, { capture: true });
    window.addEventListener("wheel", preventZoomOutWheel, { capture: true, passive: false });

    return () => {
      window.removeEventListener("keydown", preventZoomOutKey, { capture: true });
      window.removeEventListener("wheel", preventZoomOutWheel, { capture: true });
    };
  }, []);

  return null;
}
