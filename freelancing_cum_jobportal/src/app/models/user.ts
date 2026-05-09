export interface User {
    id?: number;
    name: string;
    email: string;
    passwordHash?: string;
    phone: string;
    city: string;
    area: string;
    profileImage: string;
    isVerified: boolean;
    status: 'active' | 'suspended' | 'banned';
    isDeleted: boolean;
    createdAt: string;
}