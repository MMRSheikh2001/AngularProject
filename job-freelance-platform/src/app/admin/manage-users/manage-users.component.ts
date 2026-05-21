import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-manage-users',
  imports: [CommonModule],
  templateUrl: './manage-users.component.html'
})
export class AdminManageUsersComponent {
  users = [
    { id: 1, name: 'Mahbub Rahman', email: 'mahbub@example.com', role: 'User', dateJoined: '12 Jan 2025', status: 'Active' },
    { id: 2, name: 'TechCorp BD', email: 'hr@techcorpbd.com', role: 'Company', dateJoined: '15 Feb 2025', status: 'Active' },
    { id: 3, name: 'Sadia Islam', email: 'sadia@example.com', role: 'User', dateJoined: '1 Mar 2025', status: 'Suspended' }
  ];

  toggleStatus(user: any): void {
    user.status = user.status === 'Active' ? 'Suspended' : 'Active';
  }

  deleteUser(userId: number): void {
    this.users = this.users.filter(u => u.id !== userId);
  }
}
