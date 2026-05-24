import { CompanyProfile } from './company.model';
import { ApplicationStatus } from './enums.model';
import { ResumeSnapshot } from './profile.model';
import { UserModel } from './user.model';
import { ChatRoom } from './chat.model';

export interface Category {
  id?: string | number;
  name: string;
  description: string;
  createdAt?: string;
}

export interface Job {
  id?: string | number;
  companyId: string | number;
  categoryId?: string | number;
  company?: CompanyProfile; // Optional populated entity
  category?: Category; // Optional populated entity
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  salaryMin: number;
  salaryMax: number;
  jobType: string;
  workplaceType: string;
  deadline: string;
  vacancy: number;
  isActive: boolean;
  createdAt?: string;
}

export interface JobApplication {
  id?: string | number;
  userId: string | number;
  jobId: string | number;
  resumeSnapshotId?: string | number;
  chatRoomId?: string | number;
  user?: UserModel;
  job?: Job;
  resumeSnapshot?: ResumeSnapshot;
  chatRoom?: ChatRoom;
  coverLetter: string;
  status: ApplicationStatus;
  appliedAt: string;
  createdAt?: string;
}
