import { MongoClient } from "mongodb";

let isDbConnected = null;

const CLUSTER_URL = "mongodb+srv://Akhnita:akhu123@cluster0.ak1vyfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(CLUSTER_URL);

// async makes the function asynchronous, so we can use await
async function connectToDatabase(dbName) {
  if (!isDbConnected) {
    try {
      // connect to mongodb cluster
      await client.connect();
      isDbConnected = client.db(dbName);
      console.log("✅ Database connected successfully");
    } catch (e) {
      console.error(`❌ Database connection error: ${e.message}`);
    }
  } else {
    console.log("⚡ Database already connected");
  }

  return isDbConnected;
}

export default connectToDatabase;
