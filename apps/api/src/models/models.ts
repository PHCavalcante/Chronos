import { ObjectId } from "mongodb";
import connectToDatabase from "../config/databaseConfig.ts";

const connection = await connectToDatabase(process.env.STRING_CONNECTION);
const database = connection.db("ChronosDB");
const collection = database.collection("events");

function createMongoObjectId(id:string): ObjectId {
  return ObjectId.createFromHexString(id);
}

export async function getEvents() {
  return collection.find().toArray();
}
export async function postEvents(newEvent) {
  return await collection.insertOne(newEvent);
}
export async function editEvents(id, newEvent) {
  return await collection.updateOne(
    { _id: new ObjectId(createMongoObjectId(id)) },
    { $set: newEvent }
  );
}
export async function removeEvents(id) {
  return collection.deleteOne({ _id: new ObjectId(createMongoObjectId(id)) });
}
