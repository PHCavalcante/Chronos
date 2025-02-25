import { MongoClient } from "mongodb";

export default async function connectToDatabase(connectionString){
    let mongoClient;

    try{
        mongoClient = await new MongoClient(connectionString).connect();
        return mongoClient;
    }catch(error){
        console.log("Error connecting to the database", error);
        process.exit();
    }
}