# Orlano Gardens — responsive workflow and decorative cleanup

## Responsive revision

- Standardized every numbered `.process-line` workflow across the home, services, how-it-works, about, and inquiry routes.
- Desktop workflows now keep each gold number at the start of its step and use one continuous straight connector aligned through the number centers.
- Mobile and tablet workflows now stack vertically with each gold number directly to the left of its heading and the description aligned beneath the heading.
- Added a narrow-phone adjustment for 320–380 px screens without shrinking tap targets or body copy.
- Removed the large decorative circular curves from all hero and CTA sections site-wide.
- Removed the obsolete home-page-only curve suppression so the behavior is controlled by the shared stylesheet.

## Previous maintenance revision

This build completes the requested Next.js maintenance pass:

- Replaced the old header, footer, and loading-state logo with the supplied transparent Orlano Gardens artwork.
- Added favicon, app icon, and Apple touch icon variants from the supplied favicon artwork.
- Added a complete `/testimonials` page and changed the header link from the home-page anchor to the dedicated route.
- Kept the existing home-page testimonial section and centralized its card data for reuse.
- Removed pre-hydration DOM mutations from the lightbox, pricing recommender, article tools, and footer year.
- Added a real ESLint configuration and a non-interactive `npm run lint` command.
- Upgraded to Next.js 16.3.4 and resolved the dependency audit findings.
- Consolidated CSS and font assets into the App Router source structure for Turbopack compatibility.
- Removed the duplicate legacy static website, unused static JavaScript, duplicate legal page, obsolete brand files, and unreferenced images.
- Preserved `/portfolio` and `/terms-of-service` as permanent redirects to canonical routes.

Verification completed:

- ESLint: passed with zero warnings.
- Production build: passed on Next.js 16.3.4.
- Shared numbered workflows confirmed on 10 routes.
- Hero and CTA curve generators removed from the shared stylesheet.
- Dependency audit: zero known production vulnerabilities.
- Hydration console sweep: seven representative routes passed with no hydration warnings.
- Production route smoke test: all 28 sitemap routes returned HTTP 200.
- Logo, favicon, icon, sitemap, testimonials route, and redirects returned the expected status.
