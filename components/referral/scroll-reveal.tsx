"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll("section, .hero-grid");
    targets.forEach((t) => t.classList.add("reveal"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    targets.forEach((t) => obs.observe(t));

    return () => obs.disconnect();
  }, []);

  return null;
}
