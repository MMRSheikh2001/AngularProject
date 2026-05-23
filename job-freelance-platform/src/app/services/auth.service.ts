import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {



  constructor(private router: Router) { }

  // Logout method
  logout(): void {

    // Remove user from localStorage
    localStorage.removeItem('user');

    // Redirect to login page
    this.router.navigate(['/login']);
  }

  // Get current logged in user
  getCurrentUser(): UserModel | null {

    const userData = localStorage.getItem('user');

    if (userData) {
      return JSON.parse(userData);
    }

    return null;
  }

  // Check login status
  isLoggedIn(): boolean {

    return !!localStorage.getItem('user');
  }


}
