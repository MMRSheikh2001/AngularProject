import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
  }
}
