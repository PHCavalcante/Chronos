import { MongoClient } from "mongodb";

export default async function connectToDatabase(connectionString: string): Promise<MongoClient>{
    let mongoClient: MongoClient;

    try{
        mongoClient = await new MongoClient(connectionString).connect();
        return mongoClient;
    }catch(error){
        console.log("Error connecting to the database", error);
        process.exit();
    }
}