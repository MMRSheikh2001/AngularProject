export interface Dispute {
  id?: string;
  orderId: string;
  raisedBy: string;
  reason: string;
  status: 'open' | 'under-review' | 'resolved' | 'closed';
  adminAction: string;
}