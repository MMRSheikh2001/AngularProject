import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    { name: 'Angular', level: 'Expert' },
    { name: 'Spring Boot', level: 'Intermediate' }
  ];
}
