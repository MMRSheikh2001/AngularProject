import { NotificationType } from './enums.model';
import { UserModel } from './user.model';

export interface Notification {
  id?: string | number;
  userId: string | number;
  user?: UserModel;
  title: string;
  message: string;
  notificationType: NotificationType;
  referenceId?: string | number;
  referenceType?: string;
  isRead: boolean;
  createdAt?: string;
}
