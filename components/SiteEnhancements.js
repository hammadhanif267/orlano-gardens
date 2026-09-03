"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
    const controller = new AbortController();
    const listen = (target, type, handler, options = {}) =>
      target.addEventListener(type, handler, {
        ...options,
        signal: controller.signal,
      });
    const all = (selector, scope = document) =>
      Array.from(scope.querySelectorAll(selector));

    all("[data-accordion-trigger]").forEach((trigger) => {
      const panel = document.getElementById(
        trigger.getAttribute("aria-controls"),
      );
      if (!panel) return;
      listen(trigger, "click", () => {
        const open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
    });

    all("[data-filter-system]").forEach((system) => {
      const search = system.querySelector("[data-filter-search]");
      const items = all("[data-search]", system);
      const empty = system.querySelector("[data-filter-empty]");
      const apply = () => {
        const term = search?.value.trim().toLowerCase() || "";
        let visible = 0;
        items.forEach((item) => {
          item.hidden = Boolean(
            term &&
            !(item.dataset.search || item.textContent)
              .toLowerCase()
              .includes(term),
          );
          if (!item.hidden) visible += 1;
        });
        if (empty) empty.hidden = visible !== 0;
      };
      if (search) listen(search, "input", apply);
    });

    const faqSearch = document.querySelector("[data-faq-search]");
    if (faqSearch)
      listen(faqSearch, "input", () => {
        const term = faqSearch.value.trim().toLowerCase();
        const items = all("[data-faq-item]");
        let visible = 0;
        items.forEach((item) => {
          item.hidden = Boolean(
            term && !item.textContent.toLowerCase().includes(term),
          );
          if (!item.hidden) visible += 1;
        });
        const empty = document.querySelector("[data-faq-empty]");
        if (empty) empty.hidden = visible !== 0;
      });

    const progress = document.querySelector("[data-article-progress]");
    const article = document.querySelector("[data-article]");
    if (progress && article)
      listen(
        window,
        "scroll",
        () => {
          const rect = article.getBoundingClientRect();
          const total = Math.max(article.offsetHeight - window.innerHeight, 1);
          const traveled = Math.min(Math.max(-rect.top, 0), total);
          progress.style.width = `${Math.min(100, (traveled / total) * 100)}%`;
        },
        { passive: true },
      );

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("motion-ready");
      const elements = all(".motion-rise");
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.12 },
      );
      elements.forEach((element) => observer.observe(element));
      return () => {
        document.body.classList.remove("motion-ready");
        observer.disconnect();
        controller.abort();
      };
    }

    return () => {
      document.body.classList.remove("motion-ready");
      controller.abort();
    };
  }, [pathname]);
  return null;
}
