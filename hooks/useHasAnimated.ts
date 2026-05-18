

"use client";
import { useState } from "react";
 
/**
 * Synchronously checks sessionStorage on first render.
 * No useEffect = no flash, no delayed state update.
 */
export function useHasAnimated(key: string): boolean {
  const [hasAnimated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = sessionStorage.getItem(`animated:${key}`);
    sessionStorage.setItem(`animated:${key}`, "true");
    return stored === "true";
  });
 
  return hasAnimated;
}
 