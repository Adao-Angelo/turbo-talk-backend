import { Message } from "../model/message";
import { ICreateMessageDTO, IMessageRepository } from "./IMessageRepository";

class MessageRepository implements IMessageRepository {
  messages: Message[] = [];
  create(message: ICreateMessageDTO): void {
    this.messages.push(message);
  }
}

const messageRepository = new MessageRepository();
export { messageRepository };
