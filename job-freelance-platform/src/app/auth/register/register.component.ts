import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  // Role selection
  selectedRole: string = 'user'; // 'user' | 'company'

  // Common fields
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // User fields
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  // Company fields
  companyName: string = '';
  companyEmail: string = '';
  companyPhone: string = '';
  industry: string = '';

  agreeTerms: boolean = false;

  industries = [
    'Software & Technology', 'Design & Media', 'Marketing', 'Finance',
    'Healthcare', 'Education', 'E-Commerce', 'Manufacturing', 'Other'
  ];

  selectRole(role: string): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    // Registration logic will be added later
    console.log('Register submitted', { role: this.selectedRole, email: this.email });
  }
}
