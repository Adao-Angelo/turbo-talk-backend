interface ICreateMessageDTO {
  user: string;
  text: string;
  room: string;
  date: Date;
}

interface IMessageRepository {
  create(message: ICreateMessageDTO): void;
}

export { ICreateMessageDTO, IMessageRepository };
