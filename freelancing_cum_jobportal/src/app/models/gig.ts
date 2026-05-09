export interface Gig {
  id?: string;
  freelancerId: string;
  categoryId: string;
  title: string;
  description: string;
  status: 'active' | 'paused' | 'deleted';
  isDeleted: boolean;
  coverImage?: string;
  rating?: number;
  totalOrders?: number;
}