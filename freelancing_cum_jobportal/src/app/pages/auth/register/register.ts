import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  form: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  passwordsMatch(): boolean {
    return this.f['password'].value === this.f['confirmPassword'].value;
  }

  onSubmit() {
    if (this.form.invalid || !this.passwordsMatch()) return;

    this.loading = true;
    this.error = '';

    const userData = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      phone: this.f['phone'].value,
      city: this.f['city'].value,
      area: this.f['area'].value,
      profileImage: `https://i.pravatar.cc/150?u=${this.f['email'].value}`,
      isVerified: false,
      isDeleted: false,
      status: 'active' as const,
      createdAt: new Date().toISOString()
    };

    this.auth.register(userData).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/verify-email']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Registration failed. Please try again.';
      }
    });
  }
}