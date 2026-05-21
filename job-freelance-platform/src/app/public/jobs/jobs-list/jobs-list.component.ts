import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from '../../../shared/job-card/job-card.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';
import { EmptyStateComponent } from '../../../shared/empty-state/empty-state.component';

@Component({
  selector: 'app-jobs-list',
  imports: [CommonModule, FormsModule, RouterLink, JobCardComponent, PaginationComponent, EmptyStateComponent],
  templateUrl: './jobs-list.component.html'
})
export class JobsListComponent {

  searchQuery: string = '';
  selectedCity: string = '';
  selectedType: string = '';
  selectedSalary: string = '';
  currentPage: number = 1;
  totalPages: number = 3;

  cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Remote'];
  jobTypes = ['Full-time', 'Part-time', 'Remote', 'Contract', 'Internship'];
  salaryRanges = ['Below ৳20,000', '৳20,000–৳50,000', '৳50,000–৳1,00,000', 'Above ৳1,00,000'];

  jobs = [
    { jobId: 1, title: 'Senior React Developer', company: 'TechCorp BD', location: 'Dhaka', salary: '৳80,000–১,২০,০০০', jobType: 'Full-time', deadline: '30 Jun 2025' },
    { jobId: 2, title: 'UI/UX Designer', company: 'Creative Studio', location: 'Chittagong', salary: '৳50,000–৭০,০০০', jobType: 'Full-time', deadline: '15 Jun 2025' },
    { jobId: 3, title: 'Digital Marketing Executive', company: 'Growth Hub', location: 'Remote', salary: '৳35,000–৫০,০০০', jobType: 'Remote', deadline: '20 Jun 2025' },
    { jobId: 4, title: 'Backend Java Developer', company: 'SoftEdge Ltd', location: 'Dhaka', salary: '৳70,000–৯০,০০০', jobType: 'Full-time', deadline: '25 Jun 2025' },
    { jobId: 5, title: 'Project Manager', company: 'BizCon Group', location: 'Dhaka', salary: '৳90,000–১,৫০,০০০', jobType: 'Full-time', deadline: '10 Jul 2025' },
    { jobId: 6, title: 'Content Writer', company: 'MediaBD', location: 'Remote', salary: '৳20,000–৩০,০০০', jobType: 'Remote', deadline: '5 Jul 2025' },
    { jobId: 7, title: 'Android Developer', company: 'AppVenture', location: 'Dhaka', salary: '৳60,000–৮০,০০০', jobType: 'Full-time', deadline: '18 Jun 2025' },
    { jobId: 8, title: 'Data Analyst', company: 'DataFlow BD', location: 'Sylhet', salary: '৳55,000–৭৫,০০০', jobType: 'Full-time', deadline: '22 Jun 2025' }
  ];

  onSearch(): void { this.currentPage = 1; }
  onFilterChange(): void { this.currentPage = 1; }
  onPageChange(page: number): void { this.currentPage = page; }
  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCity = '';
    this.selectedType = '';
    this.selectedSalary = '';
    this.currentPage = 1;
  }
}
