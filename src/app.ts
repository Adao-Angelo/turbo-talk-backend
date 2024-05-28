import Express from "express";
import { config } from "dotenv";
import "./websocketServer";
import { routers } from "./routes";

const app = Express();
app.use(routers);
config();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => console.info("App listening on port " + port));
