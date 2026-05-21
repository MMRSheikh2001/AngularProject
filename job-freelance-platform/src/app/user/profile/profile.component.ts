import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html'
})
export class UserProfileComponent {
  profile = {
    name: 'Mahbub Rahman',
    title: 'Full Stack Developer',
    email: 'mahbub@example.com',
    phone: '+880 1711-000001',
    location: { division: 'Dhaka', district: 'Dhaka', upazila: 'Gulshan', postcode: '1212', full: 'Gulshan-2, Dhaka-1212' },
    bio: 'Experienced Full Stack Developer with 5+ years in React and Node.js.',
    skills: ['React', 'Node.js', 'MySQL', 'Express.js', 'TypeScript', 'Git'],
    github: 'https://github.com/mahbub',
    linkedin: 'https://linkedin.com/in/mahbub',
    education: [{ degree: 'B.Sc. Computer Science', institution: 'BUET', year: '2019' }],
    experience: [
      { role: 'Senior Developer', company: 'TechCorp BD', duration: '2021 – Present' },
      { role: 'Junior Developer', company: 'SoftEdge Ltd', duration: '2019 – 2021' }
    ]
  };
}
