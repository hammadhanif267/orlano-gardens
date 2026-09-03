import nodemailer from "nodemailer";

export async function sendOtpEmail({ to, otp }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
  });
  return transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject: "Orlano Gardens admin password change OTP",
    text: `Your OTP is ${otp}. It expires in ${process.env.OTP_EXPIRES_MINUTES || 10} minutes.`
  });
}
