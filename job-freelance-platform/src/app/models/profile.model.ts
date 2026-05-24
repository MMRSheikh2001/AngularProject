import { AddressModel } from './address.model';
import { Category } from './job.model';

export interface UserProfile {
  id?: string | number;
  userId: string | number; // reference to User
  professionalTitle?: string;
  bio?: string;
  professionalSummary?: string;
  expectedSalary?: number;
  currentSalary?: number;
  website?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  dateOfBirth?: string;
  gender?: string;
  religion?: string;
  maritalStatus?: string;
  nationality?: string;
  nidNumber?: string;
  passportNumber?: string;
  presentAddress?: AddressModel;
  permanentAddress?: AddressModel;
  createdAt?: string;
  updatedAt?: string;
}

export interface Education {
  id?: string | number;
  userProfileId: string | number;
  degree: string;
  institute: string;
  subject: string;
  result: string;
  passingYear: number;
  startYear: number;
  isCurrent: boolean;
  createdAt?: string;
}

export interface Experience {
  id?: string | number;
  userProfileId: string | number;
  companyName: string;
  designation: string;
  responsibilities: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  createdAt?: string;
}

export interface Training {
  id?: string | number;
  userProfileId: string | number;
  title: string;
  institute: string;
  duration: string;
  year: number;
  createdAt?: string;
}

export interface UserSkill {
  id?: string | number;
  userProfileId: string | number;
  categoryId?: string | number; // Optional category association
  skillName: string;
  proficiencyLevel: string;
  yearsOfExperience: number;
  createdAt?: string;
}

export interface UserLanguage {
  id?: string | number;
  userProfileId: string | number;
  languageName: string;
  proficiencyLevel: string;
  createdAt?: string;
}

export interface Portfolio {
  id?: string | number;
  userProfileId: string | number;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  createdAt?: string;
}

export interface Reference {
  id?: string | number;
  userProfileId: string | number;
  name: string;
  designation: string;
  organization: string;
  phone: string;
  email: string;
  relation: string;
  createdAt?: string;
}

export interface Extracurricular {
  id?: string | number;
  userProfileId: string | number;
  title: string;
  description: string;
  year: number;
  createdAt?: string;
}

export interface ResumeSnapshot {
  id?: string | number;
  userProfileId: string | number;
  title: string;
  templateName: string;
  generatedPdfUrl: string;
  generatedHtml: string;
  createdAt?: string;
}
