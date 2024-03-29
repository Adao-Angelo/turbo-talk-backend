import { IMessageRepository } from "../Repositories/IMessageRepository";
import { messageRepository } from "../Repositories/MessageRepository";
import { Message } from "../model/message";

class CreateMessageControler {
  constructor(private messageR: IMessageRepository) {}

  execute(data: any) {
    const message: Message = {
      roon: data.roon,
      user: data.username,
      text: data.msg,
      date: new Date(),
    };
    this.messageR.create(message);
    return message;
  }
}
const createMessageControler = new CreateMessageControler(messageRepository);
export { createMessageControler };
