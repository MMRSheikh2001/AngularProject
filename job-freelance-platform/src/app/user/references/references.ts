import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.css',
})
export class References {
  references = [
    { name: 'Dr. John Smith', designation: 'Professor', company: 'Dhaka University', email: 'john@du.ac.bd' }
  ];
}
