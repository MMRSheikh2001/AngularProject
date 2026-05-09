export interface Job {
  id?: string;
  employerId: string;
  title: string;
  description: string;
  companyName: string;
  companyLogo: string;
  city: string;
  area: string;
  salaryMin: number;
  salaryMax: number;
  jobType: 'full-time' | 'part-time' | 'remote' | 'contract';
  experienceRequired: string;
  deadline: string;
  status: 'open' | 'closed' | 'paused';
  isDeleted: boolean;
  createdAt: string;
}