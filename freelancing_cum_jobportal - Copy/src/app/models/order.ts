export interface Order {
  id?: string;
  gigId: string;
  clientId: string;
  freelancerId: string;
  totalAmount: number;
  commissionAmount: number;
  status: 'pending' | 'active' | 'delivered' | 'revision' | 'completed' | 'cancelled' | 'disputed';
  isDeleted: boolean;
  createdAt: string;
  completedAt: string;
}