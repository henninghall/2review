import { useEffect } from "react";

export const useTabBlur = (onBlur: () => void) => {
  useEffect(() => {
    if (!document.addEventListener) return;
    const change = () => {
      if (document.visibilityState === "hidden") onBlur();
    };
    document.addEventListener("visibilitychange", change);
    return () => {
      document.removeEventListener("visibilitychange", change);
    };
  }, [onBlur]);
};
