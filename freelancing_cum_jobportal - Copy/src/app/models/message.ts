export interface Message {
  id?: string;
  chatId: string;
  senderId: string;
  message: string;
  status: 'sent' | 'delivered' | 'read';
  createdAt: string;
}