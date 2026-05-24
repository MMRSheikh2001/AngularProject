import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-builder',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cv-builder.component.html'
})
export class CvBuilderComponent {
  // Personal
  name: string = 'Mahbub Rahman';
  professionalTitle: string = 'Full Stack Developer';
  email: string = 'mahbub@example.com';
  phone: string = '+880 1711-000001';
  address: string = 'Gulshan-2, Dhaka-1212';
  linkedinUrl: string = 'linkedin.com/in/mahbub';
  githubUrl: string = 'github.com/mahbub';
  professionalSummary: string = 'Experienced Full Stack Developer with 5+ years building scalable web applications using React and Node.js.';

  // Skills
  skills: string = 'React, Node.js, MySQL, Express.js, TypeScript, Git, REST API, Bootstrap';

  // Education entries
  education = [
    { degree: 'B.Sc. in Computer Science & Engineering', institution: 'BUET', year: '2015–2019', result: 'CGPA 3.75/4.00' }
  ];

  // Experience entries
  experience = [
    { role: 'Senior Developer', company: 'TechCorp BD', duration: '2021 – Present', description: 'Led frontend development using React.js, mentored junior developers, and improved application performance.' },
    { role: 'Junior Developer', company: 'SoftEdge Ltd', duration: '2019 – 2021', description: 'Developed REST APIs with Node.js and Express, integrated MySQL databases.' }
  ];

  // References
  references = [
    { name: 'Dr. Karim Ahmed', designation: 'Professor, BUET', contact: 'karim@buet.ac.bd' }
  ];

  addEducation(): void {
    this.education.push({ degree: '', institution: '', year: '', result: '' });
  }

  addExperience(): void {
    this.experience.push({ role: '', company: '', duration: '', description: '' });
  }
}
