import { io } from "./http";
import { createUserSessionController } from "./modules/Users/controllers/CreateSessionUserRoon";
import { createMessageControler } from "./modules/message/controllers/CreateMessageController";
import { getMessagesRoon } from "./modules/message/controllers/getMessageRoon";

io.on("connection", (socket) => {
  socket.on("select_roon", (data, callback) => {
    socket.join(data.roon);
    createUserSessionController.execute(socket, data);
    const messagesRoon = getMessagesRoon.execute(data.roon);
    callback(messagesRoon);
  });

  socket.on("message", (data) => {
    const message = createMessageControler.execute(data);
    io.to(data.roon).emit("message", message);
  });
});
