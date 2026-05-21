import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-details',
  imports: [RouterLink],
  templateUrl: './job-details.component.html'
})
export class JobDetailsComponent {
  jobId: string | null = null;

  job = {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp BD',
    location: 'Dhaka, Bangladesh',
    salary: '৳80,000 – ৳1,20,000',
    jobType: 'Full-time',
    deadline: '30 June 2025',
    posted: '1 May 2025',
    experience: '3–5 years',
    description: `We are looking for a skilled Senior React Developer to join our growing engineering team.
You will be responsible for building high-performance web applications, collaborating with designers and backend engineers, and mentoring junior developers.`,
    requirements: [
      'Minimum 3 years of experience with React.js',
      'Strong knowledge of JavaScript ES6+',
      'Experience with REST APIs and state management (Redux or Context API)',
      'Familiarity with Git and agile workflows',
      'Good communication skills in English and Bengali'
    ],
    responsibilities: [
      'Develop and maintain React-based web applications',
      'Collaborate with the UI/UX team to implement designs',
      'Write clean, maintainable, and testable code',
      'Participate in code reviews and technical discussions',
      'Mentor junior frontend developers'
    ],
    benefits: ['Competitive salary', 'Health insurance', 'Annual bonus', 'Flexible hours', 'Remote option'],
    companyInfo: {
      name: 'TechCorp BD',
      industry: 'Software & Technology',
      size: '51–200 employees',
      location: 'Gulshan-2, Dhaka'
    }
  };

  constructor(private route: ActivatedRoute) {
    this.jobId = this.route.snapshot.paramMap.get('id');
  }
}
