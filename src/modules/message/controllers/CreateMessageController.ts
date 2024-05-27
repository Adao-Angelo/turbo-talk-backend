import { IMessageRepository } from "../Repositories/IMessageRepository";
import { messageRepository } from "../Repositories/MessageRepository";
import { Message } from "../model/message";

class CreateMessageController {
  constructor(private messageR: IMessageRepository) {}

  execute(data: any) {
    const message: Message = {
      room: data.room,
      user: data.username,
      text: data.msg,
      date: new Date(),
    };
    this.messageR.create(message);
    return message;
  }
}
const createMessageController = new CreateMessageController(messageRepository);
export { createMessageController };
