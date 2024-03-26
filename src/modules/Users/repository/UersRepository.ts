import { findUser } from "../controllers/findeUser";
import { RoonUser } from "../model/user";
import { ICreateUserSessionDTO, IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  users: RoonUser[] = [];
  constructor() {}
  CreteSession(socket: any, data: any): void {
    const userRoon = findUser.execute(data);
    if (userRoon) {
      userRoon.socket_id = socket.id;
    } else {
     this.users.push({
        socket_id: socket.id,
        username: data.username,
        roon: data.roon,
      });
    }
  }
}
const userRepository = new UserRepository();
export { userRepository };
