"use client";

import { useEffect } from "react";

const revealTargets = [
  ".elia-reference-about-copy",
  ".elia-reference-about-image",
  ".elia-reference-heading",
  ".elia-reference-card",
  ".elia-reference-custom-image",
  ".elia-reference-custom-copy",
  ".elia-reference-contact",
  ".contact-info-heading",
  ".contact-info-layout",
  ".inner-hero",
  ".inner-card",
  ".inner-prose > *",
  ".steps-grid article",
  ".policy-content article",
  ".contact-panel",
  ".collection-detail-hero > *"
].join(",");

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealTargets));
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -36px 0px"
    });

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
      observer.observe(element);
    });

    document.documentElement.classList.add("has-scroll-reveal");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
