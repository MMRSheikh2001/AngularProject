import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-gig',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-gig.component.html'
})
export class CreateGigComponent {
  title: string = '';
  category: string = '';
  description: string = '';
  basicPrice: number = 0;
  basicDelivery: string = '';
  basicRevisions: string = '';
  tags: string = '';

  categories = ['Design', 'Web Development', 'Mobile App', 'Writing', 'Digital Marketing', 'Video & Animation', 'Data Entry', 'SEO'];

  onSubmit(): void {
    console.log('Gig created');
  }
}
