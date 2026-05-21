import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit(): void {
    // Authentication logic will be added later
    console.log('Login submitted', { email: this.email });
  }
}
