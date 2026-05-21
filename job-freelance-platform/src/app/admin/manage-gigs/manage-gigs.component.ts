import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-manage-gigs',
  imports: [CommonModule],
  templateUrl: './manage-gigs.component.html'
})
export class AdminManageGigsComponent {
  gigs = [
    { id: 1, title: 'I will design a professional logo', seller: 'Rahul Design', price: '৳1,500', status: 'Active' },
    { id: 2, title: 'I will build a React website', seller: 'DevMaster', price: '৳8,000', status: 'Flagged' },
    { id: 3, title: 'I will write blog posts', seller: 'ContentPro', price: '৳1,000', status: 'Active' }
  ];

  toggleStatus(gig: any): void {
    gig.status = gig.status === 'Active' ? 'Flagged' : 'Active';
  }

  deleteGig(gigId: number): void {
    this.gigs = this.gigs.filter(g => g.id !== gigId);
  }
}
