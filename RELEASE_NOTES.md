# Orlano Gardens — logo, testimonials, hydration, and cleanup

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
- Dependency audit: zero known production vulnerabilities.
- Hydration console sweep: seven representative routes passed with no hydration warnings.
- Production route smoke test: all 28 sitemap routes returned HTTP 200.
- Logo, favicon, icon, sitemap, testimonials route, and redirects returned the expected status.
