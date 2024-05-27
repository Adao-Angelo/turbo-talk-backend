import { serverHttp } from "./http";
import { config } from "dotenv";
import "./webSocket";

config();
const port = process.env.SOCKET_PORT || 4000;

serverHttp.listen(3000, () => {
  console.info("Socket is runner on " + port);
});
