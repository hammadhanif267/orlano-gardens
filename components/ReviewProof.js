import Link from "next/link";
import { ETSY_REVIEWS_URL, verifiedReviews } from "@/lib/site";

export default function ReviewProof({ compact = false }) {
  const reviewLoop = [...verifiedReviews, ...verifiedReviews];

  return (
    <section
      className={`review-proof section${compact ? " review-proof--compact" : ""}`}
      id="client-reviews"
    >
      <div className="container">
        <div className="review-proof__heading">
          <div>
            <div className="eyebrow">Verified Etsy feedback</div>
            <h2>Clear work. Responsive service. Useful direction.</h2>
            <p className="review-proof__statement">
              <span aria-hidden="true">★★★★★</span>
              <strong>5 star feedback from verified Etsy clients</strong>
            </p>
          </div>
        </div>
        <div className="review-marquee" aria-label="Selected verified Etsy reviews">
          <div className="review-marquee__track">
          {reviewLoop.map((review, index) => (
            <figure
              className="review-card"
              key={`${review.name}-${index}`}
              aria-hidden={index >= verifiedReviews.length ? "true" : undefined}
            >
              <div className="review-card__stars" aria-hidden="true">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>Verified Etsy client</span>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>
        <div className="review-proof__footer">
          <p>
            Selected excerpts use the exact wording and public names shown on
            Etsy. Visit the shop to read the complete verified review record.
          </p>
          <a
            className="btn btn--gold btn--sm"
            href={ETSY_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Verified Etsy Reviews <span aria-hidden="true">↗</span>
          </a>
          {!compact && (
            <Link className="text-link" href="/portfolio#client-reviews">
              See all proof
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
