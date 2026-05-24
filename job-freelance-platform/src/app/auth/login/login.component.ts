import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login() {
    this.email = this.email.trim().toLowerCase();
    this.userService.getUserByEmail(this.email).subscribe(
      {
        next: (users) => {
          if (users.length > 0) {
            const user = users[0];
            if (user.password == this.password) {
              alert("login success");
              //   this.router.navigate(['/profile'])
              localStorage.setItem('user', JSON.stringify(user));

              if (user.role == 'admin') {
                this.router.navigate(['/admin']);
              }
              else if (user.role == 'user') {
                this.router.navigate(['/user'])
              }
              else if (user.role == 'company') {
                this.router.navigate(['/company'])
              }



            }
            else {
              alert("Invalid Password");
            }
          } else {
            alert("User Not Found");
          }


        }, error: (err) => {
          console.log(err);
        }
      }
    )
  }

}
