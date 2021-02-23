const { MongoClient } = require('mongodb');
require('dotenv/config');

const url = process.env.DB_CONNECTION;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        db.collection('users').deleteOne({
            username: "patrick.mvdb"
        });
    } catch(err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);