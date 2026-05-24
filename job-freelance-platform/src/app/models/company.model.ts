import { AddressModel } from './address.model';

export interface CompanyProfile {
  id?: string | number;
  userId: string | number;
  companyName: string;
  companyLogo: string;
  website: string;
  industry: string;
  companySize: string;
  foundedYear: number;
  tradeLicenseNumber: string;
  description: string;
  address?: AddressModel;
  createdAt?: string;
}
