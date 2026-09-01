# Orlano Gardens — Next.js

Production-ready Next.js App Router source for the Orlano Gardens website.

## Run

```bash
npm ci
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Notes
- Shared header, footer, cookie controls, and client-side interactions are componentized.
- The dedicated testimonials route is available at `/testimonials`; the home-page testimonial section remains in place.
- The supplied transparent logo is stored at `public/assets/images/orlano-gardens-logo.png` and used in the header, footer, and loading state.
- Favicon files are generated from the supplied favicon artwork through the App Router icon conventions.
- Design CSS and local fonts are compiled from `app/base.css` and `app/fonts`; project imagery remains under `public/assets/images`.
- `npm run lint` performs a non-interactive ESLint and Core Web Vitals rule check.
- Forms still use the original mailto flow; no backend/admin panel is included yet.
- Admin panel can be added as the next phase without changing the public-site routes.
