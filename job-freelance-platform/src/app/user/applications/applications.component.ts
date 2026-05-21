import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applications',
  imports: [CommonModule, RouterLink],
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent {
  applications = [
    { id: 1, company: 'TechCorp BD', title: 'Senior React Developer', location: 'Dhaka', salary: '৳80,000–১,২০,০০০', appliedDate: '15 May 2025', status: 'Under Review' },
    { id: 2, company: 'Creative Studio', title: 'UI/UX Designer', location: 'Chittagong', salary: '৳50,000–৭০,০০০', appliedDate: '10 May 2025', status: 'Shortlisted' },
    { id: 3, company: 'Growth Hub', title: 'Digital Marketing Executive', location: 'Remote', salary: '৳35,000–৫০,০০০', appliedDate: '8 May 2025', status: 'Applied' },
    { id: 4, company: 'SoftEdge Ltd', title: 'Backend Java Developer', location: 'Dhaka', salary: '৳70,000–৯০,০০০', appliedDate: '1 May 2025', status: 'Rejected' }
  ];

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Applied': 'bg-secondary', 'Under Review': 'bg-warning text-dark',
      'Shortlisted': 'bg-primary', 'Rejected': 'bg-danger', 'Hired': 'bg-success'
    };
    return map[status] || 'bg-secondary';
  }
}
