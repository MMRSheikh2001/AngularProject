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
}