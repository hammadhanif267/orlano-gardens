# Orlano Gardens — Next.js

Converted from the supplied static website into a Next.js App Router project.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Notes
- Shared header, footer, cookie controls, and client-side interactions are componentized.
- Existing design CSS, fonts, and project imagery are preserved under `public/assets`.
- The supplied Orlano Gardens logo is included as `public/assets/images/orlano-logo.jpg` and used in the site header/footer.
- Forms still use the original mailto flow; no backend/admin panel is included yet.
- Admin panel can be added as the next phase without changing the public-site routes.
