export interface FreelancerStats {
    id?: string;
    userId: string;
    totalEarnings: number;
    monthlyEarnings: number;
    ordersCompleted: number;
    ordersInProgress: number;
    responseRate: number;
    completionRate: number;
    repeatClientRate: number;
    averageRating: number;
    totalReviews: number;
    onlineStatus: boolean;
    lastSeen: string;
    memberSince: string;
    portfolioItems: PortfolioItem[];
    employmentHistory: EmploymentHistory[];
    weeklyEarnings: number[];
    monthlyOrderData: number[];
}

export interface PortfolioItem {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    liveLink: string;
    technologies: string[];
}

export interface EmploymentHistory {
    companyName: string;
    designation: string;
    period: string;
    description: string;
}