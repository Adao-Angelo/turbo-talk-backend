import { io } from "./httpServer";

io.on("connection", (socket) => {
  socket.on("select_room", (data, callback) => {});

  socket.on("message", (data) => {});
});
