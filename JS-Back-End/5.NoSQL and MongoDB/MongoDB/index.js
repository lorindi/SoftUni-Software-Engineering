const mongodb = require("mongodb");
const connectionStr = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(connectionStr);

async function connectDb() {
  await client.connect();
  const db = client.db("catShelter");
  const cats = db.collection("cats");
  const result = await cats.find().toArray();
  console.log(result);
}
connectDb();
