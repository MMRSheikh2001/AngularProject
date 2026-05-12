export interface FreelancerStats {
  totalEarnings: number;
  completedOrders: number;
  ongoingOrders: number;
  responseRate: number;
  responseTime: string;
  completionRate: number;
  repeatClientPercent: number;
  memberSince: string;
  lastActive: string;
  isOnline: boolean;
  totalReviews: number;
  averageRating: number;
}

export interface EmployerStats {
  totalJobsPosted: number;
  totalHires: number;
  activeJobs: number;
  totalApplicants: number;
  avgResponseTime: string;
  isVerified: boolean;
  totalSpent: number;
  memberSince: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  area: string;
  profileImage: string;
  isVerified: boolean;
  status: 'active' | 'suspended' | 'banned';
  isDeleted: boolean;
  createdAt: string;
  role: 'user' | 'admin';
  isSuperAdmin: boolean;

  // ── Extended ──
  coverImage: string;
  tagline: string;
  bio: string;
  freelancerStats?: FreelancerStats;
  employerStats?: EmployerStats;
  portfolioImages: string[];
}