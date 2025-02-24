import { ObjectId } from "mongodb";
import connectToDatabase from "../config/databaseConfig";


function createMongoObjectId(id:string): ObjectId {
  return ObjectId.createFromHexString(id);
}

export async function getEvents() {
  const connection = await connectToDatabase(
    process.env.STRING_CONNECTION ?? ""
  );
  const database = connection.db("ChronosDB");
  const collection = database.collection("events");
  return collection.find().toArray();
}
export async function postEvents(newEvent) {
  const connection = await connectToDatabase(
    process.env.STRING_CONNECTION ?? ""
  );
  const database = connection.db("ChronosDB");
  const collection = database.collection("events");
  return await collection.insertOne(newEvent);
}
export async function editEvents(id, newEvent) {
  const connection = await connectToDatabase(
    process.env.STRING_CONNECTION ?? ""
  );
  const database = connection.db("ChronosDB");
  const collection = database.collection("events");
  return await collection.updateOne(
    { _id: new ObjectId(createMongoObjectId(id)) },
    { $set: newEvent }
  );
}
export async function removeEvents(id) {
  const connection = await connectToDatabase(
    process.env.STRING_CONNECTION ?? ""
  );
  const database = connection.db("ChronosDB");
  const collection = database.collection("events");
  return collection.deleteOne({ _id: new ObjectId(createMongoObjectId(id)) });
}
