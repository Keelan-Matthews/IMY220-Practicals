const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://keelan:myPassword@dbexample.083t7kn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
require("regenerator-runtime/runtime.js");

async function getEvents(query, projections) {
    await client.connect();
    const database = client.db('DBExample');
    const collection = database.collection('events');
    const cursor = collection.find(query, projections);
    const results = await cursor.toArray();
    console.log(results);
}

const query = {
    "locations.area": "Brooklyn",
    "locations.date": {
        $gt: "2022/10/08",
        $lt: "2022/10/26"
    }
};

const projections = {
    _id: 0,
    name: 1,
    description: 1
};

getEvents(query, {projection: projections});