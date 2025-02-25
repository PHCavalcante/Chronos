import express from "express";
import routes from "./routes/routes.js";

const app = express();
routes(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
