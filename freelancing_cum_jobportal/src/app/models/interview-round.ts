export interface InterviewRound {
  id?: string;
  jobId: string;
  applicantId: string;
  roundNo: number;
  type: 'phone' | 'video' | 'onsite' | 'technical';
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback: string;
  scheduledAt: string;
}