import { messageRepository } from "../Repositories/MessageRepository";

class GetMessagesRoom {
  constructor() {}
  execute(room: string) {
    const messages = messageRepository.messages;
    const messagesRoom = messages.filter((message) => message.room === room);
    return messagesRoom;
  }
}
const getMessagesRoom = new GetMessagesRoom();
export { getMessagesRoom };
