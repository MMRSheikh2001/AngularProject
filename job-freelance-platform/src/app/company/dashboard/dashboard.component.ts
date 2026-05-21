import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';

@Component({
  selector: 'app-company-dashboard',
  imports: [CommonModule, RouterLink, StatsCardComponent],
  templateUrl: './dashboard.component.html'
})
export class CompanyDashboardComponent {
  stats = [
    { title: 'Jobs Posted', value: '5', icon: 'bi-briefcase', color: 'primary' },
    { title: 'Total Applicants', value: '28', icon: 'bi-people', color: 'success' },
    { title: 'Hired Freelancers', value: '3', icon: 'bi-person-check', color: 'warning' },
    { title: 'Wallet Balance', value: '৳45,000', icon: 'bi-wallet2', color: 'info' }
  ];

  recentJobs = [
    { id: 1, title: 'Senior React Developer', applications: 12, status: 'Active', postedDate: '10 May 2025' },
    { id: 2, title: 'Android Developer', applications: 8, status: 'Active', postedDate: '12 May 2025' },
    { id: 3, title: 'DevOps Engineer', applications: 5, status: 'Closed', postedDate: '1 May 2025' }
  ];

  recentHires = [
    { name: 'Mahbub Rahman', role: 'React Developer', rate: '৳800/hr', hireDate: '14 May 2025' },
    { name: 'Tanvir Ahmed', role: 'Designer', rate: '৳600/hr', hireDate: '5 May 2025' }
  ];
}
