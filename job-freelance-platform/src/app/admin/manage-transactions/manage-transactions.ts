import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-transactions',
  imports: [CommonModule],
  templateUrl: './manage-transactions.html',
  styleUrl: './manage-transactions.css',
})
export class ManageTransactions {
  transactions = [
    { id: 'TXN-9981', user: 'Alex Johnson', amount: 500, type: 'Withdrawal', status: 'Pending', date: '2023-10-26' },
    { id: 'TXN-9982', user: 'Maria Garcia', amount: 1200, type: 'Deposit', status: 'Completed', date: '2023-10-25' }
  ];
}
