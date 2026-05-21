import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyCardComponent } from '../../../shared/company-card/company-card.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-companies-list',
  imports: [CommonModule, FormsModule, CompanyCardComponent, PaginationComponent],
  templateUrl: './companies-list.component.html'
})
export class CompaniesListComponent {
  searchQuery: string = '';
  selectedIndustry: string = '';
  selectedLocation: string = '';
  currentPage: number = 1;
  totalPages: number = 2;

  industries = ['Software & Technology', 'Design & Media', 'Marketing', 'Finance', 'Healthcare', 'Education', 'E-Commerce', 'Manufacturing'];
  locations = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Remote'];

  companies = [
    { companyId: 1, name: 'TechCorp BD', industry: 'Software & Technology', location: 'Dhaka', jobCount: 12, size: '51–200' },
    { companyId: 2, name: 'Creative Studio', industry: 'Design & Media', location: 'Chittagong', jobCount: 5, size: '11–50' },
    { companyId: 3, name: 'Growth Hub', industry: 'Marketing', location: 'Remote', jobCount: 8, size: '11–50' },
    { companyId: 4, name: 'SoftEdge Ltd', industry: 'Software & Technology', location: 'Dhaka', jobCount: 20, size: '201–500' },
    { companyId: 5, name: 'FinBD Group', industry: 'Finance', location: 'Dhaka', jobCount: 6, size: '51–200' },
    { companyId: 6, name: 'EduSpark', industry: 'Education', location: 'Rajshahi', jobCount: 3, size: '1–10' },
  ];

  onPageChange(page: number): void { this.currentPage = page; }
  onFilterChange(): void { this.currentPage = 1; }
}
