import { Role } from './enums.model';

export interface UserModel {
    id?: string | number;
    name: string;
    email: string;
    password?: string; // Optional for safety in responses
    phone: string;
    profileImage: string;
    role: Role | 'admin' | 'user' | 'company'; // Allow lowercase for backward compatibility with db.json
    isVerified: boolean;
    isActive: boolean;
    isSuspended: boolean;
    createdAt?: string;
    updatedAt?: string;
}