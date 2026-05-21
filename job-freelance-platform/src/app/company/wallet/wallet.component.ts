import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-wallet',
  imports: [CommonModule],
  templateUrl: './wallet.component.html'
})
export class CompanyWalletComponent {
  balance: number = 45000;
  pendingBalance: number = 8500;
  totalSpent: number = 120000;

  transactions = [
    { id: 'TXN-C01', description: 'Deposited funds via bKash', type: 'credit', amount: 50000, date: '14 May 2025' },
    { id: 'TXN-C02', description: 'Payment to freelancer for Logo Design', type: 'debit', amount: 1500, date: '14 May 2025' },
    { id: 'TXN-C03', description: 'Refund from Cancelled Order', type: 'credit', amount: 3000, date: '10 May 2025' },
    { id: 'TXN-C04', description: 'Escrow payment released for React Website', type: 'debit', amount: 8000, date: '5 May 2025' }
  ];
}
