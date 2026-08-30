# Orlano Gardens Website

Static multi-page website built with vanilla HTML, CSS and JavaScript.

## Open locally

Open `index.html` directly, or serve this folder with any static web server.

## Production configuration

- Replace `https://orlanogardens.com/` in metadata, `robots.txt` and `sitemap.xml` if the final domain differs.
- Connect optional analytics or advertising only after the consent tool and legal pages are updated.
- Forms intentionally prepare an email draft because this package has no server-side form endpoint.
- Keep Etsy checkout as the only payment route unless the service policy changes.
- Compress or replace project images only with authorized assets. Keep every visualization labeled `Digital Design Concept`.

## Structure

- `index.html` — root homepage
- `services/` — service hub and five individual services
- `portfolio/` — project hub and detailed case study
- `garden-guides/` — guide hub and four complete article pages
- `assets/css/styles.css` — complete design system
- `assets/js/site.js` — navigation, filters, accordions, forms, article tools and cookie controls
- legal, contact, pricing, process, about, FAQ, accessibility, site map and 404 pages at root

No framework, package manager or build step is required for the downloadable website.
