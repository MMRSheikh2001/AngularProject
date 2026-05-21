import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-dropdown',
  imports: [CommonModule],
  templateUrl: './notification-dropdown.component.html'
})
export class NotificationDropdownComponent {
  notifications = [
    { id: 1, text: 'Your application was viewed by TechCorp.', time: '2 min ago', read: false },
    { id: 2, text: 'New order received for your Web Design gig.', time: '10 min ago', read: false },
    { id: 3, text: 'Your CV was downloaded by HR Manager.', time: '1 hour ago', read: true },
    { id: 4, text: 'Payment of ৳2,500 received.', time: '3 hours ago', read: true },
    { id: 5, text: 'Job post "React Developer" is now live.', time: 'Yesterday', read: true }
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead(): void {
    this.notifications.forEach(n => n.read = true);
  }
}
