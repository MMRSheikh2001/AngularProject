export interface UserVerification {
  id?: string;
  userId: string;
  otpCode: string;
  type: 'email' | 'phone';
  expiresAt: string;
  isVerified: boolean;
}