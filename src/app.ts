import Express from "express";
import { config } from "dotenv";
import "./server";

const app = Express();
config();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => console.info("App listening on port " + port));
