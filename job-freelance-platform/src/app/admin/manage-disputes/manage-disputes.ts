import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-disputes',
  imports: [CommonModule],
  templateUrl: './manage-disputes.html',
  styleUrl: './manage-disputes.css',
})
export class ManageDisputes {
  disputes = [
    { id: 'DSP-001', gig: 'Website Redesign', raisedBy: 'John Doe', status: 'Open', date: '2023-10-25' },
    { id: 'DSP-002', gig: 'Logo Creation', raisedBy: 'Jane Smith', status: 'Resolved', date: '2023-10-20' }
  ];
}
