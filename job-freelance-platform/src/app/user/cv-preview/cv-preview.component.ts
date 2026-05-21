import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-preview',
  imports: [CommonModule, RouterLink],
  templateUrl: './cv-preview.component.html'
})
export class CvPreviewComponent {
  cv = {
    fullName: 'Mahbub Rahman',
    jobTitle: 'Full Stack Developer',
    email: 'mahbub@example.com',
    phone: '+880 1711-000001',
    address: 'Gulshan-2, Dhaka-1212',
    linkedin: 'linkedin.com/in/mahbub',
    github: 'github.com/mahbub',
    summary: 'Experienced Full Stack Developer with 5+ years building scalable web applications using React and Node.js. Passionate about clean code and delivering quality products.',
    skills: ['React', 'Node.js', 'MySQL', 'Express.js', 'TypeScript', 'Git', 'REST API', 'Bootstrap'],
    education: [
      { degree: 'B.Sc. in Computer Science & Engineering', institution: 'BUET', year: '2015–2019', result: 'CGPA 3.75/4.00' }
    ],
    experience: [
      { role: 'Senior Developer', company: 'TechCorp BD', duration: '2021 – Present', description: 'Led frontend development using React.js, mentored junior developers, and improved application performance by 40%.' },
      { role: 'Junior Developer', company: 'SoftEdge Ltd', duration: '2019 – 2021', description: 'Developed REST APIs with Node.js and Express, integrated MySQL databases, and worked in agile teams.' }
    ],
    references: [
      { name: 'Dr. Karim Ahmed', designation: 'Professor, BUET', contact: 'karim@buet.ac.bd' }
    ]
  };

  printCV(): void {
    window.print();
  }
}
