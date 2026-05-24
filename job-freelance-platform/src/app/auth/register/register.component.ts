import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: UserModel = {
    name: '',
    email: '',
    password: '',
    phone: '',
    profileImage: '',
    role: 'user',
    isVerified: false,
    isActive: true,
    isSuspended: false


  };
  previewImage: string = '';


  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.user.profileImage = this.previewImage;
        this.cdr.markForCheck();
      }
      reader.readAsDataURL(file);
    }
  }

  saveUser() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      alert('Please fill out all required fields properly.');
      return;
    }

    if (this.user.email) {
      this.user.email = this.user.email.trim().toLowerCase();
    }
    
    // Set creation timestamps
    this.user.createdAt = new Date().toISOString();
    this.user.updatedAt = new Date().toISOString();

    this.userService.save(this.user).subscribe(
      {
        next: (data) => {
          console.log(data);
          alert('Registration successful');
          this.router.navigate(['/login']);
        }, error: (err) => {
          console.log(err);
          alert('Registration failed');
        }
      }
    )

  }
  toggleRole(): void {
    this.user.role = this.user.role === 'user' ? 'company' : 'user';
    console.log('Current registration role:', this.user.role);
  }

}
