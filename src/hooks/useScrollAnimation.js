import { useEffect, useRef } from "react";

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px",
    once = true,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add("visible");
            // If once is true, stop observing after animation triggers
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Remove visible class if element goes out of view (if once is false)
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, once]);

  return ref;
};

export default useScrollAnimation;
