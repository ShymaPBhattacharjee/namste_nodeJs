const { MongoClient } = require("mongodb");

const url ="mongodb+srv://namastedev_shyam:SidheswariMaa%4025@namastenode.6yj33.mongodb.net/";

// "mongodb://namastedev_shyam:SidheswariMaa@25@namastenode-shard-00-00.6yj33.mongodb.net:27017,namastenode-shard-00-01.6yj33.mongodb.net:27017,namastenode-shard-00-02.6yj33.mongodb.net:27017/HelloWorld?ssl=true&replicaSet=namastenode-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    const db = client.db(dbName);
    const collection = db.collection("helloWorld");

    //insert data
    const data = {
      firstName: "Shyam",
      lastName: "Bhattacharjee",
      city: "Burdwan",
      phone: "8145978398"
    };

    // const insertResult = await collection.insertMany([data]);

    // // READ
    // const findResult = await collection.find({}).toArray();
    // console.log("Find Documents => ", findResult);

    // //count
    // const countResult = await collection.countDocuments({});
    // console.log("Count of Documents", countResult); 

    // Find all documents of a filter firstName: Deepika
    const result = await collection.find({firstName: "Shyam"}).toArray();
    console.log(result);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
