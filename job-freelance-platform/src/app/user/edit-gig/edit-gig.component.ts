import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-gig',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-gig.component.html'
})
export class EditGigComponent {
  gigId: string | null = null;
  title: string = 'I will design a professional logo';
  category: string = 'Design';
  description: string = 'Professional logo design service with unlimited revisions.';
  basicPrice: number = 1500;
  basicDelivery: string = '3 days';
  basicRevisions: string = '2';
  tags: string = 'logo, design, branding';

  categories = ['Design', 'Web Development', 'Mobile App', 'Writing', 'Digital Marketing', 'Video & Animation', 'Data Entry', 'SEO'];

  constructor(private route: ActivatedRoute) {
    this.gigId = this.route.snapshot.paramMap.get('id');
  }

  onSave(): void { console.log('Gig updated'); }
}
