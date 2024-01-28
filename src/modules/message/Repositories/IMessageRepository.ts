
interface ICreatMessageDTO {
  user: string;
  text: string;
  roon: string;
  date: Date;
}

interface IMessageRepository {
  create(message: ICreatMessageDTO): void;
}

export { ICreatMessageDTO, IMessageRepository };
