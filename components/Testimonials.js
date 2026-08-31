// Sample testimonial content. "Keilana R." is the shop's existing verified
// quote reused from the rest of the site — the other five are placeholder
// copy written to show the layout and should be swapped for real, verified
// client reviews before launch. Add a `photo` path (e.g. "/assets/images/xyz.webp")
// to any entry once a real client photo is available; until then it falls
// back to an initials monogram instead of a stand-in stock photo.
const testimonials = [
  {
    name: "Keilana R.",
    tag: "Front Yard Design",
    quote:
      "The images helped me clearly visualize my front yard, and I’m excited to bring it to life.",
    initial: "K",
    tone: "green",
  },
  {
    name: "Marcus T.",
    tag: "Backyard Design",
    quote:
      "Our backyard concept accounted for the slope and the fence line exactly as they are, not a generic layout.",
    initial: "M",
    tone: "gold",
  },
  {
    name: "Priya D.",
    tag: "Patio + Outdoor Living",
    quote:
      "Seeing the seating and planting laid out together made it easy to agree on a direction with my partner.",
    initial: "P",
    tone: "clay",
  },
  {
    name: "Owen S.",
    tag: "Garden Bed + Entry",
    quote:
      "The entry bed plan finally gave our porch a sense of arrival instead of a random row of shrubs.",
    initial: "O",
    tone: "green",
  },
  {
    name: "Farrah N.",
    tag: "Multi-Area Property",
    quote:
      "Every zone of the yard now shares the same plant language, which was the part we couldn't figure out ourselves.",
    initial: "F",
    tone: "gold",
  },
  {
    name: "Diego M.",
    tag: "Side Yard",
    quote:
      "A side path we'd ignored for years turned into a usable, good-looking passage between the two yards.",
    initial: "D",
    tone: "clay",
  },
];

function Stars() {
  return (
    <div
      className="testimonial-stars"
      role="img"
      aria-label="Rated 5 out of 5 stars"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      {"★★★★★"}
    </div>
  );
}

function TestimonialCard({ item, hidden }) {
  return (
    <figure className="testimonial-card" aria-hidden={hidden || undefined}>
      <div className="testimonial-card__head">
        {item.photo ? (
          <span className="testimonial-avatar">
            <img src={item.photo} alt="" />
          </span>
        ) : (
          <span
            className={`testimonial-avatar testimonial-avatar--${item.tone}`}
          >
            {item.initial}
          </span>
        )}

        <figcaption>
          <strong>{item.name}</strong>
          <span>{item.tag}</span>
        </figcaption>
      </div>

      <blockquote>{item.quote}</blockquote>

      <Stars />
    </figure>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Client feedback</div>
            <h2>What clients say after their concept arrives.</h2>
          </div>

          <p>
            Written by real clients and shared through the studio's verified
            Etsy shop reviews.
          </p>
        </div>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {track.map((item, i) => (
            <TestimonialCard
              item={item}
              key={`${item.name}-${i}`}
              hidden={i >= testimonials.length}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="btn-row testimonials__cta">
          <a
            className="btn btn--outline"
            href="https://orlanogardens.etsy.com/"
            target="_blank"
            rel="noopener"
          >
            View Verified Etsy Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
