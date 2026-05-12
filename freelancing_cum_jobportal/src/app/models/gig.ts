export interface GigFaq {
  question: string;
  answer: string;
}

export interface GigReview {
  id?: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  comment: string;
  communicationRating: number;
  deliveryRating: number;
  date: string;
}

export interface Gig {
  id?: string;
  freelancerId: string;
  categoryId: string;

  // ── Basic (existing) ──
  title: string;
  description: string;
  status: 'active' | 'paused' | 'deleted';
  isDeleted: boolean;
  coverImage: string;
  rating: number;
  totalOrders: number;

  // ── Extended ──
  images: string[];
  tags: string[];
  deliveryTime: number;
  revisionCount: number;
  responseTime: string;
  faqs: GigFaq[];
  reviews: GigReview[];
  technologiesUsed: string[];
  whatClientGets: string[];
  queueCount: number;
  isFeatured: boolean;
  viewCount: number;
  completionRate: number;
  communicationRating: number;
  deliveryRating: number;
  savedCount: number;
}