import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GigCardComponent } from '../../../shared/gig-card/gig-card.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-gigs-list',
  imports: [CommonModule, FormsModule, GigCardComponent, PaginationComponent],
  templateUrl: './gigs-list.component.html'
})
export class GigsListComponent {
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedPrice: string = '';
  currentPage: number = 1;
  totalPages: number = 3;

  categories = ['Design', 'Web Development', 'Mobile App', 'Writing', 'Digital Marketing', 'Video & Animation', 'Data Entry', 'SEO'];
  priceRanges = ['Below ৳1,000', '৳1,000–৳5,000', '৳5,000–৳20,000', 'Above ৳20,000'];

  gigs = [
    { gigId: 1, title: 'I will design a professional logo', sellerName: 'Rahul Design', price: 1500, rating: 4.9, reviewCount: 120, category: 'Design' },
    { gigId: 2, title: 'I will build a React website', sellerName: 'DevMaster', price: 8000, rating: 4.8, reviewCount: 85, category: 'Web Development' },
    { gigId: 3, title: 'I will write SEO blog content', sellerName: 'ContentPro', price: 800, rating: 4.7, reviewCount: 200, category: 'Writing' },
    { gigId: 4, title: 'I will create social media graphics', sellerName: 'PixelArt BD', price: 1200, rating: 5.0, reviewCount: 55, category: 'Design' },
    { gigId: 5, title: 'I will develop an Android app', sellerName: 'AppDev BD', price: 15000, rating: 4.6, reviewCount: 30, category: 'Mobile App' },
    { gigId: 6, title: 'I will do data entry work', sellerName: 'DataHelper', price: 500, rating: 4.5, reviewCount: 180, category: 'Data Entry' },
  ];

  onPageChange(page: number): void { this.currentPage = page; }
  onFilterChange(): void { this.currentPage = 1; }
}
