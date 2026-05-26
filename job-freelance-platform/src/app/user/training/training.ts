import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  imports: [CommonModule],
  templateUrl: './training.html',
  styleUrl: './training.css',
})
export class Training {
  trainings = [
    { title: 'Full Stack Web Development', institute: 'Programming Hero', duration: '6 Months' }
  ];
}
