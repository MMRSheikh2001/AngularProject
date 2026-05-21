import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FreelancerCardComponent } from '../../../shared/freelancer-card/freelancer-card.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-freelancers-list',
  imports: [CommonModule, FormsModule, FreelancerCardComponent, PaginationComponent],
  templateUrl: './freelancers-list.component.html'
})
export class FreelancersListComponent {
  searchQuery: string = '';
  selectedSkill: string = '';
  selectedLocation: string = '';
  currentPage: number = 1;
  totalPages: number = 3;

  skills = ['React', 'Angular', 'Node.js', 'Python', 'Graphic Design', 'Digital Marketing', 'Content Writing', 'SEO', 'Video Editing'];
  locations = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Remote'];

  freelancers = [
    { userId: 1, name: 'Mahbub Rahman', title: 'Full Stack Developer', skills: ['React', 'Node.js', 'MySQL'], rating: 4.9, reviewCount: 45, hourlyRate: '800', location: 'Dhaka' },
    { userId: 2, name: 'Tanvir Ahmed', title: 'Graphic Designer', skills: ['Illustrator', 'Photoshop', 'Figma'], rating: 4.8, reviewCount: 70, hourlyRate: '600', location: 'Chittagong' },
    { userId: 3, name: 'Badrul Islam', title: 'Digital Marketer', skills: ['SEO', 'Facebook Ads', 'Google Ads'], rating: 4.7, reviewCount: 33, hourlyRate: '500', location: 'Sylhet' },
    { userId: 4, name: 'Emon Hossain', title: 'Content Writer', skills: ['Blogging', 'Copywriting', 'SEO Writing'], rating: 4.6, reviewCount: 88, hourlyRate: '350', location: 'Remote' },
    { userId: 5, name: 'Nusrat Jahan', title: 'UI/UX Designer', skills: ['Figma', 'Sketch', 'Prototyping'], rating: 5.0, reviewCount: 52, hourlyRate: '700', location: 'Dhaka' },
    { userId: 6, name: 'Rafi Karim', title: 'Android Developer', skills: ['Java', 'Kotlin', 'Firebase'], rating: 4.5, reviewCount: 25, hourlyRate: '650', location: 'Rajshahi' },
  ];

  onPageChange(page: number): void { this.currentPage = page; }
  onFilterChange(): void { this.currentPage = 1; }
}
