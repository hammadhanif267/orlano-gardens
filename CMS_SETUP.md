# Orlano Gardens CMS setup

The rebuilt dashboard is available at `/admin`.

## Required deployment environment variables

Copy every key from `.env.example` into the Vercel project settings. Use real values for MongoDB, the session secret and Gmail SMTP credentials.

- `MONGODB_URI`: MongoDB Atlas connection string
- `MONGODB_DB_NAME`: `orlano_gardens`
- `ADMIN_EMAIL`: `orlanogardens@gmail.com`
- `ADMIN_PASSWORD`: initial password used only to create the first administrator
- `AUTH_SECRET`: long random session-signing secret
- `SMTP_USER`: `orlanogardens@gmail.com`
- `SMTP_PASSWORD`: Gmail App Password, not the normal Gmail password
- `SMTP_FROM`: `orlanogardens@gmail.com`
- `NEXT_PUBLIC_SITE_URL`: final public domain

## Stored MongoDB collections

- `admins`: administrator email, role and password hash
- `articles`: drafts, scheduled posts and published articles
- `article_revisions`: article snapshots before edits
- `cms_records`: page, product, service, review, FAQ, legal, navigation and settings records
- `cms_revisions`: content snapshots before edits
- `media`: uploaded image bytes and metadata
- `password_otps`: hashed OTP values with automatic expiry

The application creates its required MongoDB indexes automatically after the first successful database connection.
