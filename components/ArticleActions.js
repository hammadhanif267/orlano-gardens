"use client";

import { useEffect, useRef, useState } from "react";

export default function ArticleActions() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyLink = async () => {
    const canonical =
      document.querySelector('link[rel="canonical"]')?.href ||
      window.location.href.split("#")[0];
    try {
      await navigator.clipboard.writeText(canonical);
    } catch {
      const field = document.createElement("textarea");
      field.value = canonical;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="article-actions" aria-label="Article actions">
      <button type="button" onClick={copyLink}>
        {copied ? "Link Copied" : "Copy Link"}
      </button>
      <button type="button" onClick={() => window.print()}>
        Print Article
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Article link copied" : ""}
      </span>
    </div>
  );
}
