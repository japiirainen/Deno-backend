import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { Match } from "../types.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("Bettingsite");
const csgomatches = db.collection("csgomatches");

const addMatch = async (match: Match) => {
  const response = await csgomatches.insertOne(match);
  return {
    id: response.$oid,
    ...match,
  };
};

export { addMatch };