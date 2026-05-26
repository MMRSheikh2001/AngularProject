import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educations = [
    { degree: 'B.Sc in Computer Science', institution: 'Dhaka University', year: '2021', cgpa: '3.8' },
    { degree: 'HSC', institution: 'Notre Dame College', year: '2016', cgpa: '5.0' }
  ];
}
