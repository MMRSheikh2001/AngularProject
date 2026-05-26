import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-companies',
  imports: [CommonModule],
  templateUrl: './manage-companies.html',
  styleUrl: './manage-companies.css',
})
export class ManageCompanies {
  companies = [
    { id: 1, name: 'Tech Solutions Ltd.', license: 'TL-123456', employees: '50-100', status: 'Active' },
    { id: 2, name: 'Global Innovators', license: 'TL-654321', employees: '10-50', status: 'Pending' }
  ];
}
