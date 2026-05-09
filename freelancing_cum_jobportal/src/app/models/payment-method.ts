export interface PaymentMethod {
  id?: string;
  userId: string;
  type: 'card' | 'bank' | 'mobile';
  maskedDetails: string;
}