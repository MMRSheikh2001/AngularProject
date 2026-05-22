export interface UserModel {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user' | 'company';
    phone: string;
    profileImage: string;
    isVerified: boolean;
    isActive: boolean;
    isSuspended: boolean;

}