import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-manage-jobs',
  imports: [CommonModule],
  templateUrl: './manage-jobs.component.html'
})
export class AdminManageJobsComponent {
  jobs = [
    { id: 1, title: 'Senior React Developer', company: 'TechCorp BD', type: 'Full-time', status: 'Active', postedDate: '10 May 2025' },
    { id: 2, title: 'Android Developer', company: 'AppVenture', type: 'Contract', status: 'Flagged', postedDate: '12 May 2025' },
    { id: 3, title: 'DevOps Engineer', company: 'BizCloud', type: 'Remote', status: 'Active', postedDate: '1 May 2025' }
  ];

  toggleStatus(job: any): void {
    job.status = job.status === 'Active' ? 'Flagged' : 'Active';
  }

  deleteJob(jobId: number): void {
    this.jobs = this.jobs.filter(j => j.id !== jobId);
  }
}
