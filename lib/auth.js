import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getDb } from "./mongodb";

const SESSION_HOURS = Number(process.env.SESSION_EXPIRES_HOURS || 12);

export async function ensureAdmin() {
  const db = await getDb();
  const email = (process.env.ADMIN_EMAIL || "orlanogardens@gmail.com").toLowerCase();
  const existing = await db.collection("admins").findOne({ email });
  if (!existing && process.env.ADMIN_PASSWORD) {
    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    await db.collection("admins").insertOne({
      email, passwordHash, role: "superadmin",
      createdAt: new Date(), updatedAt: new Date()
    });
  }
  return db.collection("admins").findOne({ email });
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export function createSession(admin) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Missing AUTH_SECRET environment variable");
  return jwt.sign(
    { sub: String(admin._id), email: admin.email, role: admin.role },
    secret,
    { expiresIn: `${SESSION_HOURS}h` }
  );
}

export function verifySession(token) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Missing AUTH_SECRET environment variable");
  return jwt.verify(token, secret);
}

export function generateOtp() {
  return String(crypto.randomInt(100000, 1000000));
}

export function hashOtp(otp) {
  return crypto.createHash("sha256").update(otp).digest("hex");
}
