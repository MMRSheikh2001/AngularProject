import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gig-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './gig-details.component.html'
})
export class GigDetailsComponent {
  gigId: string | null = null;

  gig = {
    id: 1,
    title: 'I will design a professional logo for your brand',
    category: 'Design',
    description: `I will create a professional, unique, and creative logo for your brand or business.
The design will be fully custom, delivered in all required formats (PNG, SVG, PDF, AI), and will include unlimited revisions until you are 100% satisfied.`,
    seller: { name: 'Rahul Design', title: 'Professional Graphic Designer', rating: 4.9, reviewCount: 120, location: 'Dhaka', memberSince: 'January 2022' },
    packages: [
      { name: 'Basic', price: 1500, delivery: '3 days', revisions: 2, features: ['1 Concept', 'PNG & JPG', 'Basic support'] },
      { name: 'Standard', price: 3000, delivery: '5 days', revisions: 5, features: ['3 Concepts', 'All formats', 'Source file', 'Priority support'] },
      { name: 'Premium', price: 5000, delivery: '7 days', revisions: 'Unlimited', features: ['5 Concepts', 'All formats', 'Source file', 'Brand guide', 'VIP support'] }
    ],
    portfolio: ['Portfolio 1', 'Portfolio 2', 'Portfolio 3', 'Portfolio 4'],
    reviews: [
      { reviewer: 'TechCorp', rating: 5, comment: 'Excellent work! Very professional and responsive.', date: '15 Apr 2025' },
      { reviewer: 'StartupBD', rating: 5, comment: 'Great logo design. Highly recommended!', date: '10 Apr 2025' }
    ]
  };

  selectedPackage: number = 1;

  constructor(private route: ActivatedRoute) {
    this.gigId = this.route.snapshot.paramMap.get('id');
  }

  selectPackage(index: number): void { this.selectedPackage = index; }
}
