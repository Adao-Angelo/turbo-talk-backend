import { io } from "./http";

interface RoonUser {
  socket_id: string;
  username: string;
  roon: string;
}

const users: RoonUser[] = [];

io.on("connection", (socket) => {
  socket.on("select_roon", (data) => {
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

    console.log(users);
  });
});
