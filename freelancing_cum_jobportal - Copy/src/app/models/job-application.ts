export interface JobApplication {
  id?: string;
  jobId: string;
  applicantId: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: string;
}