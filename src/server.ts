import { serverHttp } from "./http";
import "./webSocket";
serverHttp.listen(3000, () => {
  console.log("server is runner on port 3000");
});
