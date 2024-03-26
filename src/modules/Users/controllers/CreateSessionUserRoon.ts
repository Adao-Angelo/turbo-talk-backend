import { IUserRepository } from "../repository/IUserRepository";
import { userRepository } from "../repository/UersRepository";
import { findUser } from "./findeUser";

class CreateUserSessionController {
  constructor(private userR: IUserRepository) {}
  execute(socket: any, data: any) {
    this.userR.CreteSession(socket, data);
  }
}
const createUserSessionController = new CreateUserSessionController(
  userRepository
);
export { createUserSessionController };
