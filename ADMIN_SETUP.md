# Orlano Gardens Admin / MongoDB setup

1. Copy `.env.example` to `.env.local` (local) or add the same variables in your deployment provider.
2. Put your MongoDB connection string in `MONGODB_URI`.
3. Set `ADMIN_PASSWORD` to the initial administrator password. The application hashes it before storing it in MongoDB.
4. Set a strong random `AUTH_SECRET`.
5. Configure SMTP/Gmail App Password variables so password-change OTP emails can be sent.
6. Visit `/admin` to sign in with `ADMIN_EMAIL` and the initial password.
7. Sessions expire after 12 hours and the dashboard has a Logout button.
8. Change-password OTP endpoints are included and use MongoDB for temporary OTP records.

The public website files/design are not intentionally restyled by the admin foundation.
