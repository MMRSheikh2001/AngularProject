import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule, RouterLink, StatsCardComponent],
  templateUrl: './dashboard.component.html'
})
export class UserDashboardComponent {
  stats = [
    { title: 'Applications Sent', value: '12', icon: 'bi-send', color: 'primary' },
    { title: 'Active Gigs', value: '3', icon: 'bi-grid', color: 'success' },
    { title: 'Orders Received', value: '8', icon: 'bi-bag-check', color: 'warning' },
    { title: 'Wallet Balance', value: '৳12,500', icon: 'bi-wallet2', color: 'info' }
  ];

  recentApplications = [
    { company: 'TechCorp BD', title: 'Senior React Developer', status: 'Under Review', date: '15 May 2025' },
    { company: 'Creative Studio', title: 'UI/UX Designer', status: 'Shortlisted', date: '10 May 2025' },
    { company: 'Growth Hub', title: 'Digital Marketing Executive', status: 'Applied', date: '8 May 2025' }
  ];

  recentOrders = [
    { buyer: 'StartupBD', gig: 'Logo Design', amount: '৳1,500', status: 'In Progress', date: '14 May 2025' },
    { buyer: 'TechVenture', gig: 'Website Design', amount: '৳8,000', status: 'Completed', date: '5 May 2025' }
  ];
}
