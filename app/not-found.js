import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main id="main-content">
        <section className="not-found">
          <div className="container">
            <div className="not-found__code">404</div>
            <h1>This path does not lead anywhere.</h1>
            <p>
              The page may have moved, the address may be mistyped, or the link
              should not exist. Use the working routes below.
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--gold" href="/">
                Return Home
              </Link>
              <Link className="btn btn--light" href="/site-map">
                Open Site Map
              </Link>
              <button
                className="btn btn--outline"
                style={{ borderColor: "var(--white)", color: "var(--white)" }}
                type="button"
                data-go-back=""
              >
                Go Back
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
