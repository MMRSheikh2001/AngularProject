export interface Report {
  id?: string;
  reportedUserId: string;
  reportedBy: string;
  reason: string;
  status: 'pending' | 'reviewed' | 'actioned' | 'dismissed';
}