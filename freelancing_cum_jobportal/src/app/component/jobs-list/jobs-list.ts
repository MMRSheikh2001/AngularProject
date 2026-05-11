import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, Navbar, Footer],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css'
})
export class JobsList implements OnInit {

  allJobs: Job[] = [];
  filteredJobs: Job[] = [];
  loading = true;
  error = '';

  // Filters
  searchKeyword = '';
  selectedCity = '';
  selectedType = '';
  salaryMin = 0;
  salaryMax = 0;
  sortBy = 'latest';

  cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'];
  jobTypes = ['full-time', 'part-time', 'remote', 'contract'];

  currentPage = 1;
  itemsPerPage = 6;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Check if search query came from home page
    this.route.queryParams.subscribe(params => {
      if (params['q']) this.searchKeyword = params['q'];
    });
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.findOpenJobs().subscribe({
      next: (jobs) => {
        this.allJobs = jobs;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load jobs. Make sure JSON Server is running.';
        this.loading = false;
      }
    });
  }

  applyFilters() {
    let result = [...this.allJobs];

    if (this.searchKeyword) {
      const kw = this.searchKeyword.toLowerCase();
      result = result.filter(j =>
        j.title.toLowerCase().includes(kw) ||
        j.companyName.toLowerCase().includes(kw) ||
        j.description.toLowerCase().includes(kw)
      );
    }

    if (this.selectedCity) {
      result = result.filter(j => j.city === this.selectedCity);
    }

    if (this.selectedType) {
      result = result.filter(j => j.jobType === this.selectedType);
    }

    if (this.salaryMin > 0) {
      result = result.filter(j => j.salaryMin >= this.salaryMin);
    }

    if (this.salaryMax > 0) {
      result = result.filter(j => j.salaryMax <= this.salaryMax);
    }

    if (this.sortBy === 'latest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (this.sortBy === 'salary-high') {
      result.sort((a, b) => b.salaryMax - a.salaryMax);
    } else if (this.sortBy === 'salary-low') {
      result.sort((a, b) => a.salaryMin - b.salaryMin);
    }

    this.filteredJobs = result;
    this.currentPage = 1;
  }

  clearFilters() {
    this.searchKeyword = '';
    this.selectedCity = '';
    this.selectedType = '';
    this.salaryMin = 0;
    this.salaryMax = 0;
    this.sortBy = 'latest';
    this.applyFilters();
  }

  get pagedJobs(): Job[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredJobs.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredJobs.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getJobTypeBadge(type: string): string {
    const map: any = {
      'full-time': 'bg-primary',
      'part-time': 'bg-purple',
      'remote': 'bg-teal',
      'contract': 'bg-warning text-dark'
    };
    return map[type] || 'bg-secondary';
  }
}