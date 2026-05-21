import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-jobs',
  imports: [CommonModule, RouterLink],
  templateUrl: './manage-jobs.component.html'
})
export class ManageJobsComponent {
  jobs = [
    { id: 1, title: 'Senior React Developer', type: 'Full-time', applicants: 12, status: 'Active', postedDate: '10 May 2025' },
    { id: 2, title: 'Android Developer', type: 'Full-time', applicants: 8, status: 'Active', postedDate: '12 May 2025' },
    { id: 3, title: 'DevOps Engineer', type: 'Remote', applicants: 5, status: 'Closed', postedDate: '1 May 2025' }
  ];

  toggleStatus(job: any): void {
    job.status = job.status === 'Active' ? 'Closed' : 'Active';
  }
}
