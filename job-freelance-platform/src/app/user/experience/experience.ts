import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    { title: 'Software Engineer', company: 'TechCorp BD', start: '2021-06', end: 'Present', desc: 'Developed scalable backend services.' },
    { title: 'Junior Web Developer', company: 'DevIT', start: '2019-01', end: '2021-05', desc: 'Maintained frontend UI.' }
  ];
}
