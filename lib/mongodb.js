import { MongoClient } from "mongodb";

// if(!process.env.MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

const MONGODB_URI = process.env.MONGODB_URI;

let client, clientPromise;
client = new MongoClient(MONGODB_URI, {});
clientPromise = client.connect();

export default clientPromise;