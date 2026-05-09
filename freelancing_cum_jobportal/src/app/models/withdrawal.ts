export interface Withdrawal {
  id?: string;
  userId: string;
  amount: number;
  method: 'bank' | 'mobile';
  status: 'pending' | 'approved' | 'rejected';
}