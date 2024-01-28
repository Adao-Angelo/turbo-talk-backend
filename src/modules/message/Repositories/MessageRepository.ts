import { Message } from "../model/message";
import { ICreatMessageDTO, IMessageRepository } from "./IMessageRepository";

class MessageRepository implements IMessageRepository {
  messages: Message[] = [];
  create(message: ICreatMessageDTO): void {
    this.messages.push(message);
  }
}

export { MessageRepository };
