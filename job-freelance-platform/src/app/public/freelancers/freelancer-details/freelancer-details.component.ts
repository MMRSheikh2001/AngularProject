import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-freelancer-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './freelancer-details.component.html'
})
export class FreelancerDetailsComponent {
  freelancerId: string | null = null;

  freelancer = {
    id: 1,
    name: 'Mahbub Rahman',
    title: 'Full Stack Developer',
    bio: 'Experienced Full Stack Developer with 5+ years building web applications using React, Node.js, and MySQL. I deliver clean, scalable code and pride myself on clear communication and on-time delivery.',
    location: { division: 'Dhaka', district: 'Dhaka', upazila: 'Gulshan', postcode: '1212', full: 'Gulshan-2, Dhaka-1212' },
    skills: ['React', 'Node.js', 'MySQL', 'Express.js', 'REST API', 'Git', 'Bootstrap', 'TypeScript'],
    hourlyRate: '800',
    rating: 4.9,
    reviewCount: 45,
    completedOrders: 38,
    memberSince: 'March 2022',
    github: 'https://github.com/mahbub',
    linkedin: 'https://linkedin.com/in/mahbub',
    education: [
      { degree: 'B.Sc. in Computer Science', institution: 'BUET', year: '2019' }
    ],
    experience: [
      { role: 'Senior Developer', company: 'TechCorp BD', duration: '2021 – Present' },
      { role: 'Junior Developer', company: 'SoftEdge Ltd', duration: '2019 – 2021' }
    ],
    portfolio: ['Project Alpha', 'Project Beta', 'Project Gamma'],
    reviews: [
      { reviewer: 'Creative Studio', rating: 5, comment: 'Outstanding work. Very professional!', date: '20 Apr 2025' },
      { reviewer: 'Growth Hub', rating: 5, comment: 'Delivered on time with excellent quality.', date: '5 Apr 2025' }
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.freelancerId = this.route.snapshot.paramMap.get('id');
  }
}
