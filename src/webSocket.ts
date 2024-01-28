import { io } from "./http";
import { RoonUser } from "./modules/Users/model/user";
import { createMessageControler } from "./modules/message/controllers/CreateMessageController";
import { getMessagesRoon } from "./modules/message/controllers/getMessageRoon";


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
    const messagesRoon = getMessagesRoon.execute(data.roon);
    callback(messagesRoon);
  });

  socket.on("message", (data) => {
    const message = createMessageControler.execute(data);
    io.to(data.roon).emit("message", message);
  });
});
