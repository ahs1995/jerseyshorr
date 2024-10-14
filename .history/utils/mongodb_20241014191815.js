import mongoose from "mongoose";

const MONGODB_URL = process.env.DB_URL;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable");
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = (await mongoose.connect(MONGODB_URL, opts)).then(
      (mongoose) => {
        return mongoose;
      },
    );
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// import { MongoClient } from "mongodb";

// const url = process.env.DB_URL;
// const options = {};

// if (!url) {
//   throw new Error("Please add your Mongo url to .env.local");
// }

// let client = new MongoClient(url, options);
// let clientPromise;

// if (process.env.NODE_ENV !== "production") {
//   if (!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   clientPromise = client.connect();
// }

// export default clientPromise;
