import { messageRepository } from "../Repositories/MessageRepository";

class GetMessagesRoon {
  constructor() {}
  execute(roon: string) {
    const messages = messageRepository.messages;
    const messagesRoon = messages.filter((message) => message.roon === roon);
    return messagesRoon;
  }
}
const getMessagesRoon = new GetMessagesRoon();
export { getMessagesRoon };
