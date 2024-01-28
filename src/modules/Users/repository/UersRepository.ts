import { RoonUser } from "../model/user";
import { ICreateUserSessionDTO, IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  users: RoonUser[] = [];
  constructor() {}

  CreteSession(userRoon: ICreateUserSessionDTO): void {}
}

const userRepository = new UserRepository();
