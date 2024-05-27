import { io } from "./http";
import { createUserSessionController } from "./modules/Users/controllers/CreateSessionUserRoon";
import { createMessageController } from "./modules/message/controllers/CreateMessageController";
import { getMessagesRoom } from "./modules/message/controllers/getMessageRoom";

io.on("connection", (socket) => {
  socket.on("select_room", (data, callback) => {
    socket.join(data.room);
    createUserSessionController.execute(socket, data);
    const messagesRoom = getMessagesRoom.execute(data.room);
    callback(messagesRoom);
  });

  socket.on("message", (data) => {
    const message = createMessageController.execute(data);
    io.to(data.room).emit("message", message);
  });
});
