# Orlano Gardens

Professional static website for remote outdoor design, premade garden plans,
portfolio proof, landscape company collaboration and garden education.

## Local development

```bash
npm ci
npm run dev:next
```

## Validation and export

```bash
npm run check
npm start
```

The production export is written to `out/`. The Sites project binding is stored in `.openai/hosting.json`.

## Site structure

- `/services` compares the two service paths.
- `/custom-design-service` explains the personalized service and links each package to its exact Etsy listing.
- `/ready-to-use-designs` contains the ready made plan catalogue, with a dedicated specification, gallery and Etsy purchase page for every product.
- `/portfolio` combines design work, client proof, social reach and landscape company partnership information.
- `/garden-guides` contains ten source linked articles.
- `/contact` directs visitors to Etsy, Instagram or email without collecting form data on the website.

Legacy service, project, testimonial and brief routes are preserved as permanent redirects in `public/_redirects`.

## Canonical domain

`NEXT_PUBLIC_SITE_URL` sets the canonical origin at build time. Keep the Sites URL while the Site is hosted on Sites. Change it to `https://orlanogardens.com` only after that domain is connected and serving the production website.

## Advertising boundary

AdSense remains inactive unless valid client and article slot IDs are present
and `NEXT_PUBLIC_GOOGLE_CMP_READY=true`. Do not enable that flag until a Google
certified consent platform is configured. Add `ads.txt` only after Google issues
the exact record.

## Environment file

Copy `.env.example` to `.env.local` for local configuration. The supplied file
contains public settings and blank AdSense fields only. Keep any future private
credentials out of the source archive and Git history.
