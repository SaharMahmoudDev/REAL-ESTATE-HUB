import { useEffect, useRef } from "react";

 function useLoadMoreOnIntersect(onIntersect) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onIntersect();
      },
      { rootMargin: "40px" } 
    );

    obs.observe(el);
    return () => {
      obs.unobserve(el);
      obs.disconnect();
    };
  }, [onIntersect,ref]);

  return ref;
}
export default useLoadMoreOnIntersect