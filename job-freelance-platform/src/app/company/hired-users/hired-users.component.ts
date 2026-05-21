import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hired-users',
  imports: [CommonModule],
  templateUrl: './hired-users.component.html'
})
export class HiredUsersComponent {
  hires = [
    { id: 1, name: 'Mahbub Rahman', email: 'mahbub@example.com', role: 'React Developer', rate: '৳800/hr', hireDate: '14 May 2025', status: 'Active' },
    { id: 2, name: 'Tanvir Ahmed', email: 'tanvir@example.com', role: 'Designer', rate: '৳600/hr', hireDate: '5 May 2025', status: 'Active' },
    { id: 3, name: 'Badrul Islam', email: 'badrul@example.com', role: 'QA Tester', rate: '৳400/hr', hireDate: '1 May 2025', status: 'Completed' }
  ];
}
