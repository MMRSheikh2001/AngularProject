export interface UserSession {
  id?: string;
  userId: string;
  jwtToken: string;
  deviceInfo: string;
  ipAddress: string;
  expiresAt: string;
}