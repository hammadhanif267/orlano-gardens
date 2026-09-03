"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const timer = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.body.classList.remove("route-leaving");
    document.body.classList.add("route-entering");
    const enterTimer = window.setTimeout(
      () => document.body.classList.remove("route-entering"),
      260,
    );
    return () => window.clearTimeout(enterTimer);
  }, [pathname]);

  useEffect(() => {
    const navigate = (event) => {
      const link = event.target.closest("a[href]");
      if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
      ) {
        return;
      }

      const next = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      if (
        next.origin !== current.origin ||
        (next.pathname === current.pathname && next.search === current.search)
      ) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("route-leaving");
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        router.push(`${next.pathname}${next.search}${next.hash}`);
      }, 120);
    };

    document.addEventListener("click", navigate);
    return () => {
      document.removeEventListener("click", navigate);
      window.clearTimeout(timer.current);
    };
  }, [router]);

  return (
    <div className="route-progress" aria-hidden="true">
      <span />
    </div>
  );
}
