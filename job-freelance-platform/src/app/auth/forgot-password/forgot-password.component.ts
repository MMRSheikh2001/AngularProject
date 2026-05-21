import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  email: string = '';
  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    // Password reset logic will be added later
  }
}
