import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-reports',
  imports: [CommonModule],
  templateUrl: './manage-reports.html',
  styleUrl: './manage-reports.css',
})
export class ManageReports {
  reports = [
    { id: 'RPT-101', reported: 'User: badactor99', reason: 'Spam/Scam', date: '2023-10-26', status: 'Pending' },
    { id: 'RPT-102', reported: 'Gig: Build React App', reason: 'Plagiarism', date: '2023-10-24', status: 'Reviewed' }
  ];
}
