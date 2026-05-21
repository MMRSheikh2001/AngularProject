import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-gigs',
  imports: [CommonModule, RouterLink],
  templateUrl: './my-gigs.component.html'
})
export class MyGigsComponent {
  gigs = [
    { id: 1, title: 'I will design a professional logo', category: 'Design', price: 1500, orders: 12, status: 'Active', rating: 4.9 },
    { id: 2, title: 'I will build a React website', category: 'Web Development', price: 8000, orders: 5, status: 'Active', rating: 4.8 },
    { id: 3, title: 'I will create social media graphics', category: 'Design', price: 1200, orders: 3, status: 'Paused', rating: 5.0 }
  ];

  toggleStatus(gig: any): void {
    gig.status = gig.status === 'Active' ? 'Paused' : 'Active';
  }
}
