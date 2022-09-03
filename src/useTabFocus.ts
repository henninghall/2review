import { useEffect } from "react";

export const useTabFocus = (onFocus: () => void) => {
  useEffect(() => {
    if (!document.addEventListener) return;
    const change = () => {
      if (document.visibilityState === "visible") onFocus();
    };
    document.addEventListener("visibilitychange", change);
    return () => {
      document.removeEventListener("visibilitychange", change);
    };
  }, [onFocus]);
};
