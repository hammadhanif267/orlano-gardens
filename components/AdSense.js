"use client";

import Script from "next/script";
import { useEffect } from "react";

const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const cmpReady = process.env.NEXT_PUBLIC_GOOGLE_CMP_READY === "true";

export function AdSenseScript() {
  if (!client || !cmpReady) return null;
  return (
    <Script
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
    />
  );
}

export function AdSlot({ slot, label = "Advertisement" }) {
  useEffect(() => {
    if (!client || !cmpReady || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_error) {
      /* AdSense retries after the script is ready. */
    }
  }, [slot]);
  if (!client || !cmpReady || !slot) return null;
  return (
    <aside className="ad-placement" aria-label={label}>
      <span>{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
