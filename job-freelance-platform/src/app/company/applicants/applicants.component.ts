import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applicants',
  imports: [CommonModule, RouterLink],
  templateUrl: './applicants.component.html'
})
export class ApplicantsComponent {
  applicants = [
    { id: 1, name: 'Mahbub Rahman', email: 'mahbub@example.com', jobTitle: 'Senior React Developer', appliedDate: '15 May 2025', status: 'Shortlisted' },
    { id: 2, name: 'Tanvir Ahmed', email: 'tanvir@example.com', jobTitle: 'Android Developer', appliedDate: '16 May 2025', status: 'Applied' },
    { id: 3, name: 'Badrul Islam', email: 'badrul@example.com', jobTitle: 'Senior React Developer', appliedDate: '14 May 2025', status: 'Rejected' },
    { id: 4, name: 'Emon Hossain', email: 'emon@example.com', jobTitle: 'DevOps Engineer', appliedDate: '10 May 2025', status: 'Hired' }
  ];

  updateStatus(applicant: any, status: string): void {
    applicant.status = status;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Applied': 'bg-secondary',
      'Shortlisted': 'bg-primary',
      'Rejected': 'bg-danger',
      'Hired': 'bg-success'
    };
    return map[status] || 'bg-secondary';
  }
}
