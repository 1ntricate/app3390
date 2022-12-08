


const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://tester123:12345@cluster0.mzsfais.mongodb.net/test";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
  
    const db = client.db("coinsDB");
    const coll = db.collection("CoinsCollection");


    const cursor = coll.find();

  
    await cursor.forEach(console.log);
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);
