import express from "express";
import cors from "cors";
import { getEventsController, postEventsController, editEventsController, removeEventsController } from "../controllers/controller.ts";

const corsOptions = {
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
}

const routes = (app: express) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/events", getEventsController);
    app.post("/events", postEventsController);
    app.put("/events/:eventId", editEventsController);
    app.delete("/events/:eventId", removeEventsController);
}

export default routes;