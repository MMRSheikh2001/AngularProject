export interface Rating {
  id?: string;
  orderId: string;
  reviewerId: string;
  reviewedUserId: string;
  rating: number;
  comment: string;
}