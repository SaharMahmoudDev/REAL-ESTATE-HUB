// hooks/useLoadMore.ts
import { useEffect, useRef } from "react";

export function useLoadMoreOnIntersect(onIntersect) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onIntersect();
      },
      { rootMargin: "100px" } 
    );

    obs.observe(el);
    return () => {
      obs.unobserve(el);
      obs.disconnect();
    };
  }, [onIntersect,ref]);

  return ref;
}
