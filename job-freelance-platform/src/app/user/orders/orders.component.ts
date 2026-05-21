import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html'
})
export class UserOrdersComponent {
  activeTab: string = 'received';

  receivedOrders = [
    { id: 'ORD-001', buyer: 'StartupBD', gig: 'Logo Design', amount: '৳1,500', status: 'In Progress', date: '14 May 2025', deadline: '17 May 2025' },
    { id: 'ORD-002', buyer: 'TechVenture', gig: 'Website Design', amount: '৳8,000', status: 'Completed', date: '5 May 2025', deadline: '12 May 2025' },
    { id: 'ORD-003', buyer: 'MediaBD', gig: 'Social Media Graphics', amount: '৳1,200', status: 'Pending', date: '16 May 2025', deadline: '19 May 2025' }
  ];

  placedOrders = [
    { id: 'ORD-004', seller: 'DevMaster', gig: 'React Website', amount: '৳8,000', status: 'In Progress', date: '13 May 2025', deadline: '20 May 2025' },
    { id: 'ORD-005', seller: 'ContentPro', gig: 'Blog Writing', amount: '৳800', status: 'Completed', date: '1 May 2025', deadline: '5 May 2025' }
  ];

  getStatusClass(status: string): string {
    const map: Record<string, string> = { 'Pending': 'bg-warning text-dark', 'In Progress': 'bg-primary', 'Completed': 'bg-success', 'Cancelled': 'bg-danger' };
    return map[status] || 'bg-secondary';
  }
}
