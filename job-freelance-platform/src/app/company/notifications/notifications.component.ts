import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.component.html'
})
export class CompanyNotificationsComponent {
  notifications = [
    { id: 1, icon: 'bi-people', text: 'Mahbub Rahman applied for Senior React Developer.', time: '5 min ago', read: false },
    { id: 2, icon: 'bi-wallet', text: 'Funds of ৳50,000 successfully deposited.', time: '1 hour ago', read: true },
    { id: 3, icon: 'bi-star', text: 'Feedback left for your job post Android Developer.', time: 'Yesterday', read: true }
  ];

  markAllRead(): void { this.notifications.forEach(n => n.read = true); }
  markRead(id: number): void { const n = this.notifications.find(n => n.id === id); if (n) n.read = true; }
  get unreadCount(): number { return this.notifications.filter(n => !n.read).length; }
}
