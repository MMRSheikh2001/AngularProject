import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../shared/job-card/job-card.component';

@Component({
  selector: 'app-saved-jobs',
  imports: [CommonModule, JobCardComponent],
  templateUrl: './saved-jobs.component.html'
})
export class SavedJobsComponent {
  savedJobs = [
    { jobId: 1, title: 'Senior React Developer', company: 'TechCorp BD', location: 'Dhaka', salary: '৳80,000–১,২০,০০০', jobType: 'Full-time', deadline: '30 Jun 2025' },
    { jobId: 5, title: 'Project Manager', company: 'BizCon Group', location: 'Dhaka', salary: '৳90,000–১,৫০,০০০', jobType: 'Full-time', deadline: '10 Jul 2025' },
    { jobId: 7, title: 'Android Developer', company: 'AppVenture', location: 'Dhaka', salary: '৳60,000–৮০,০০০', jobType: 'Full-time', deadline: '18 Jun 2025' }
  ];

  removeJob(jobId: number): void {
    this.savedJobs = this.savedJobs.filter(j => j.jobId !== jobId);
  }
}
