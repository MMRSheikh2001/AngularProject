export interface Transaction {
  id?: string;
  userId: string;
  orderId: string;
  amount: number;
  type: 'credit' | 'debit';
  platformFee: number;
  freelancerAmount: number;
  previousHash: string;
  currentHash: string;
  createdAt: string;
}