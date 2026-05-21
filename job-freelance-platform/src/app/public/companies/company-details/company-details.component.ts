import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './company-details.component.html'
})
export class CompanyDetailsComponent {
  companyId: string | null = null;

  company = {
    id: 1,
    name: 'TechCorp BD',
    industry: 'Software & Technology',
    size: '51–200 employees',
    founded: '2015',
    location: 'Gulshan-2, Dhaka-1212',
    website: 'https://techcorpbd.com',
    about: 'TechCorp BD is a leading software company in Bangladesh specializing in enterprise web applications, mobile development, and cloud solutions. We partner with businesses across South Asia to deliver cutting-edge technology solutions.',
    openJobs: [
      { jobId: 1, title: 'Senior React Developer', jobType: 'Full-time', location: 'Dhaka', salary: '৳80,000–১,২০,০০০' },
      { jobId: 7, title: 'Android Developer', jobType: 'Full-time', location: 'Dhaka', salary: '৳60,000–৮০,০০০' },
      { jobId: 8, title: 'DevOps Engineer', jobType: 'Full-time', location: 'Remote', salary: '৳90,000–১,৩০,০০০' },
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.companyId = this.route.snapshot.paramMap.get('id');
  }
}
