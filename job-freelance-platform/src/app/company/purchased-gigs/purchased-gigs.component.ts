import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchased-gigs',
  imports: [CommonModule],
  templateUrl: './purchased-gigs.component.html'
})
export class PurchasedGigsComponent {
  purchasedGigs = [
    { orderId: 'ORD-101', sellerName: 'Rahul Design', gigTitle: 'Logo Design', amount: 1500, status: 'In Progress', orderDate: '14 May 2025' },
    { orderId: 'ORD-102', sellerName: 'DevMaster', gigTitle: 'React Website', amount: 8000, status: 'Completed', orderDate: '5 May 2025' }
  ];

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Pending': 'bg-warning text-dark',
      'In Progress': 'bg-primary',
      'Completed': 'bg-success',
      'Cancelled': 'bg-danger'
    };
    return map[status] || 'bg-secondary';
  }
}
