import { MongoClient } from "mongodb";

const globalForMongo = globalThis;

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI environment variable");
  if (!globalForMongo.__orlanoMongoClientPromise) {
    globalForMongo.__orlanoMongoClientPromise = new MongoClient(uri).connect();
  }
  try {
    const client = await globalForMongo.__orlanoMongoClientPromise;
    const db = client.db(process.env.MONGODB_DB_NAME || "orlano_gardens");
    if (!globalForMongo.__orlanoCmsIndexesPromise) {
      globalForMongo.__orlanoCmsIndexesPromise = Promise.all([
        db.collection("admins").createIndex({ email: 1 }, { unique: true }),
        db.collection("articles").createIndex({ slug: 1 }, { unique: true }),
        db.collection("articles").createIndex({ status: 1, publishAt: -1 }),
        db.collection("cms_records").createIndex({ type: 1, order: 1 }),
        db.collection("media").createIndex({ createdAt: -1 }),
        db.collection("password_otps").createIndex(
          { expiresAt: 1 },
          { expireAfterSeconds: 0 },
        ),
      ]);
    }
    await globalForMongo.__orlanoCmsIndexesPromise;
    return db;
  } catch (error) {
    globalForMongo.__orlanoMongoClientPromise = null;
    globalForMongo.__orlanoCmsIndexesPromise = null;
    throw error;
  }
}
