export interface UserLevel {
  id?: string;
  userId: string;
  freelancerLevel: 'new' | 'level1' | 'level2' | 'topseller';
  employerLevel: 'basic' | 'trusted' | 'premium';
}