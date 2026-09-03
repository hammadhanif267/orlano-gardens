import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const globalForMongo = globalThis;
const clientPromise =
  globalForMongo.__orlanoMongoClientPromise ||
  new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.__orlanoMongoClientPromise = clientPromise;
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB_NAME || "orlano_gardens");
}
