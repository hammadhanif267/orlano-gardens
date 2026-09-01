"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page status-page--error" role="alert">
      <div className="status-card">
        <div className="status-code">500</div>
        <p className="eyebrow">Something went wrong</p>
        <h1>We could not load this page.</h1>
        <p>There was a temporary problem. Please try again, or return to the Orlano Gardens home page.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn btn--gold" type="button" onClick={() => reset()}>Try Again</button>
          <Link className="btn btn--light" href="/">Return Home</Link>
        </div>
      </div>
    </main>
  );
}
