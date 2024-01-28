import { io } from "./http";

interface RoonUser {
  socket_id: string;
  username: string;
  roon: string;
}

interface Message {
  username: string;
  text: string;
  roon: string;
  date: Date;
}

const users: RoonUser[] = [];
const messages: Message[] = [];
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
    const message: Message = {
      roon: data.roon,
      username: data.username,
      text: data.msg,
      date: new Date(),
    };

    messages.push(message);
    io.to(data.roon).emit("message", message);
  });
});

function getMessagesRoon(roon: string) {
  const messagesRoon = messages.filter((message) => message.roon === roon);
  return messagesRoon;
}
