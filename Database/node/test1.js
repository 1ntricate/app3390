const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tester123:tester12345@cluster0.mzsfais.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
