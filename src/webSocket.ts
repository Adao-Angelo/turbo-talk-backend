import { io } from "./http";
import { createMessageControler } from "./modules/message/controllers/CreateMessageController";
import { Message } from "./modules/message/model/message";

interface RoonUser {
  socket_id: string;
  username: string;
  roon: string;
}

const users: RoonUser[] = [];

io.on("connection", (socket) => {
  socket.on("select_roon", (data, callback) => {
    socket.join(data.roon);
    const userRoon = users.find(
      (user) => user.username === data.username && user.roon === data.roon
    );
    if (userRoon) {
      userRoon.socket_id = socket.id;
    } else {
      users.push({
        socket_id: socket.id,
        username: data.username,
        roon: data.roon,
      });
    }

    const messagesRoon = getMessagesRoon(data.roon);
    callback(messagesRoon);
  });

  socket.on("message", (data) => {
    const message = createMessageControler.execute(data);
    io.to(data.roon).emit("message", message);
  });
});


