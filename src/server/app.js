const express = require("express");
const debug = require("debug");
var cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const port = 5002;
app.use(cors());

app.get("/", async (req, res) => {
  const url = "mongodb://localhost/";
  const dbName = "resistor";

  let client;
  try {
    client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const results = await db.collection("resistordata").find().toArray();
    const modifiedResults = {};
    results.forEach(
      ({ color, value, tolerance }) =>
        (modifiedResults[color] = { value, tolerance })
    );
    res.send(modifiedResults);
    client.close();
  } catch (error) {
    debug(error.stack);
  }
});

app.listen(port, () => {
  console.log(`${port}`);
});
