import express from "express";
import cors from "cors";
import { getEventsController, postEventsController, editEventsController, removeEventsController } from "../controllers/controller.js";

const corsOptions = {
  origin: "http://chronos-events.vercel.app",
  optionsSuccessStatus: 200,
};

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/events", getEventsController);
    app.post("/events", postEventsController);
    app.put("/events/:eventId", editEventsController);
    app.delete("/events/:eventId", removeEventsController);
}

export default routes;