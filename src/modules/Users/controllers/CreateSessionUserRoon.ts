import { IUserRepository } from "../repository/IUserRepository";
import { userRepository } from "../repository/UersRepository";

class CreateUserSessionController {
  constructor(private userR: IUserRepository) {}

  execute() {}
}
