export interface JobBenefit {
  name: string;
  icon: string;
}

export interface Job {
  id?: string;
  employerId: string;

  // ── Basic (existing) ──
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

  // ── Extended ──
  vacancyCount: number;
  gender: 'Any' | 'Male' | 'Female';
  ageRange: string;
  workplaceType: 'Onsite' | 'Remote' | 'Hybrid';
  industry: string;
  department: string;
  companySize: string;
  companyWebsite: string;
  companyOverview: string;
  companyFounded: string;
  companyVerified: boolean;
  officeAddress: string;
  officeImages: string[];

  // ── Requirements ──
  educationRequirements: string;
  preferredUniversities: string[];
  responsibilities: string[];
  additionalRequirements: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  certifications: string[];

  // ── Compensation ──
  salaryNegotiable: boolean;
  benefits: JobBenefit[];
  festivalBonus: boolean;
  insurance: boolean;
  lunchProvided: boolean;
  remoteSupport: boolean;
  performanceBonus: boolean;
  flexibleHours: boolean;

  // ── Metadata ──
  viewCount: number;
  applicantCount: number;
  isUrgent: boolean;
  isFeatured: boolean;
  tags: string[];
  publishedAt: string;

  // ── Social ──
  linkedinUrl: string;
  facebookUrl: string;
}