export interface HiringPipeline {
  id?: string;
  jobId: string;
  applicantId: string;
  stage: 'applied' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
  updatedAt: string;
}