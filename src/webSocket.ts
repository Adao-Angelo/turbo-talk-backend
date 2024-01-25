import { io } from "./http";

io.on("connection", (socket) => {
  socket.on("select_roon", (datas) => {
    console.log(datas);
  });
  socket.on("message", (datas_msg) => {
    console.log(datas_msg);
  });
});
