export interface UserSession {
  id?: number;
  userId: number;
  jwtToken: string;
  deviceInfo: string;
  ipAddress: string;
  expiresAt: string;
}