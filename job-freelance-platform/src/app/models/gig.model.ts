import { Category } from './job.model';
import { ChatRoom } from './chat.model';
import { GigOrderStatus } from './enums.model';
import { UserModel } from './user.model';

export interface Gig {
  id?: string | number;
  freelancerId: string | number;
  categoryId?: string | number;
  freelancer?: UserModel;
  category?: Category;
  title: string;
  description: string;
  basicPrice: number;
  deliveryDays: number;
  revisions: number;
  isActive: boolean;
  createdAt?: string;
}

export interface GigOrder {
  id?: string | number;
  gigId: string | number;
  buyerId: string | number;
  freelancerId: string | number;
  chatRoomId?: string | number;
  gig?: Gig;
  buyer?: UserModel;
  freelancer?: UserModel;
  chatRoom?: ChatRoom;
  quotedPrice?: number;
  agreedPrice?: number;
  finalPrice?: number;
  status: GigOrderStatus;
  deliveryMessage?: string;
  deliveryFileUrl?: string;
  deliveredAt?: string;
  acceptedAt?: string;
  rejectedAt?: string;
  autoRefundAt?: string;
  createdAt?: string;
}

export interface Review {
  id?: string | number;
  gigId: string | number;
  gigOrderId: string | number;
  reviewerId: string | number;
  gig?: Gig;
  gigOrder?: GigOrder;
  reviewer?: UserModel;
  rating: number;
  comment: string;
  createdAt?: string;
}
