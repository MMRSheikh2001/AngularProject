import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  portfolios = [
    { title: 'E-commerce Platform', url: 'https://github.com/my-ecommerce', desc: 'A full stack ecommerce built with Spring Boot and Angular.' }
  ];
}
