import { RoonUser } from "../model/user";
import { userRepository } from "../repository/UersRepository";

class FindUser {
  constructor() {}

  execute(data: RoonUser) {
    const users = userRepository.users;
    const userRoon = users.find(
      (user) => user.username === data.username && user.roon === data.roon
    );
    return userRoon;
  }
}

const findUser = new FindUser();
export { findUser };
