import { serverHttp } from "./httpServer";
import { config } from "dotenv";
import "./socket.io";

config();
const port = process.env.SOCKET_PORT || 4000;

serverHttp.listen(3000, () => {
  console.info("Socket is runner on " + port);
});
