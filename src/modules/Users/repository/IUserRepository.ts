import { RoonUser } from "../model/user";

interface ICreateUserSessionDTO {
  socket_id: string;
  username: string;
  roon: string;
}
interface IUserRepository {
  users: RoonUser[];
  CreteSession(socket: any, data: any): void;
}
export { IUserRepository, ICreateUserSessionDTO };
