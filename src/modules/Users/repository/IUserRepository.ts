interface ICreateUserSessionDTO {
  socket_id: string;
  username: string;
  roon: string;
}
interface IUserRepository {
  CreteSession(userRoon: ICreateUserSessionDTO): void;
}
export { IUserRepository, ICreateUserSessionDTO };
