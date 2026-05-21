import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, RouterLink, StatsCardComponent],
  templateUrl: './dashboard.component.html'
})
export class AdminDashboardComponent {
  stats = [
    { title: 'Total Registered Users', value: '124', icon: 'bi-people', color: 'primary' },
    { title: 'Jobs Active', value: '32', icon: 'bi-briefcase', color: 'success' },
    { title: 'Gigs Published', value: '54', icon: 'bi-grid', color: 'warning' },
    { title: 'System Revenue', value: '৳1,48,000', icon: 'bi-cash-coin', color: 'info' }
  ];

  recentSignups = [
    { name: 'Tanvir Ahmed', email: 'tanvir@example.com', role: 'User', date: '16 May 2025' },
    { name: 'TechCorp BD', email: 'hr@techcorpbd.com', role: 'Company', date: '15 May 2025' },
    { name: 'Mahbub Rahman', email: 'mahbub@example.com', role: 'User', date: '14 May 2025' }
  ];

  recentReports = [
    { reporter: 'Arif Hossain', target: 'Spam Job Post', reason: 'Fake salary offered', date: '12 May 2025', status: 'Pending' },
    { reporter: 'Sadia Islam', target: 'Gig #12', reason: 'Plagiarized description', date: '10 May 2025', status: 'Resolved' }
  ];
}
