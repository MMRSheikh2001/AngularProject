import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-wallet',
  imports: [CommonModule],
  templateUrl: './wallet.component.html'
})
export class UserWalletComponent {
  balance: number = 12500;
  pendingBalance: number = 3200;
  totalEarned: number = 45800;

  transactions = [
    { id: 'TXN-001', description: 'Payment received — Logo Design', type: 'credit', amount: 1500, date: '14 May 2025' },
    { id: 'TXN-002', description: 'Withdrawal to bKash', type: 'debit', amount: 5000, date: '10 May 2025' },
    { id: 'TXN-003', description: 'Payment received — Website Design', type: 'credit', amount: 8000, date: '5 May 2025' },
    { id: 'TXN-004', description: 'Platform fee deducted', type: 'debit', amount: 800, date: '5 May 2025' },
    { id: 'TXN-005', description: 'Payment received — Social Media Graphics', type: 'credit', amount: 1200, date: '1 May 2025' }
  ];
}
