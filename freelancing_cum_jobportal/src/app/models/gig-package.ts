export interface GigPackage {
  id?: string;
  gigId: string;
  name: 'basic' | 'standard' | 'premium';
  price: number;
  deliveryDays: number;
  features: string;
   revisions?: number;
}