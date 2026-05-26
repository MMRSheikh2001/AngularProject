import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023-05' }
  ];
}
