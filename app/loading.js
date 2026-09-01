import Image from "next/image";

export default function Loading() {
  return (
    <main className="status-page status-page--loading" aria-busy="true" aria-live="polite">
      <div className="status-card status-card--loading">
        <div className="loading-brand" aria-hidden="true">
          <Image
            src="/assets/images/orlano-gardens-logo.png"
            alt=""
            width={72}
            height={72}
            priority
          />
        </div>
        <p className="eyebrow">Orlano Gardens</p>
        <h1>Preparing your garden view</h1>
        <p>Please wait a moment while the page loads.</p>
        <div className="loading-track" aria-hidden="true"><span /></div>
      </div>
    </main>
  );
}
