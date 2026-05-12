export interface UserReputation {
  id?: string;
  userId: string;
  score: number;
  completedJobs: number;
  completedOrders: number;
  disputes: number;
}