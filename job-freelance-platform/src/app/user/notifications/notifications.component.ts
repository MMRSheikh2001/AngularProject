import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.component.html'
})
export class UserNotificationsComponent {
  notifications = [
    { id: 1, icon: 'bi-briefcase', text: 'TechCorp BD viewed your application for Senior React Developer.', time: '2 min ago', read: false },
    { id: 2, icon: 'bi-bag-check', text: 'New order received for your Logo Design gig from StartupBD.', time: '10 min ago', read: false },
    { id: 3, icon: 'bi-wallet2', text: 'Payment of ৳1,500 credited to your wallet.', time: '1 hour ago', read: true },
    { id: 4, icon: 'bi-chat-dots', text: 'New message from Creative Studio.', time: '3 hours ago', read: true },
    { id: 5, icon: 'bi-star', text: 'StartupBD left a 5-star review on your Logo Design gig.', time: 'Yesterday', read: true }
  ];

  markAllRead(): void { this.notifications.forEach(n => n.read = true); }
  markRead(id: number): void { const n = this.notifications.find(n => n.id === id); if (n) n.read = true; }
  get unreadCount(): number { return this.notifications.filter(n => !n.read).length; }
}
