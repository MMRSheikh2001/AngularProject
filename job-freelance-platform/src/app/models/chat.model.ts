import { ChatType } from './enums.model';
import { UserModel } from './user.model';

export interface ChatRoom {
  id?: string | number;
  chatType: ChatType;
  isClosed: boolean;
  participantOneId: string | number;
  participantTwoId: string | number;
  participantOne?: UserModel;
  participantTwo?: UserModel;
  createdAt?: string;
}

export interface Message {
  id?: string | number;
  chatRoomId: string | number;
  senderId: string | number;
  receiverId: string | number;
  chatRoom?: ChatRoom;
  sender?: UserModel;
  receiver?: UserModel;
  message: string;
  fileUrl?: string;
  isRead: boolean;
  createdAt?: string;
}
