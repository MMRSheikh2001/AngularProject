import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationDropdownComponent } from '../notification-dropdown/notification-dropdown.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, NotificationDropdownComponent,CommonModule],
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  userName: string = '';
  userInitial: string = '';
   constructor(private authService: AuthService
    
   ) { }
  ngOnInit(): void {
    // 1. Get the user data directly from the service
    const user = this.authService.getCurrentUser();

    // 2. Check if the user exists and has a name
    if (user && user.name) {
      this.userName = user.name;
      this.userInitial = user.name.charAt(0).toUpperCase();
    } else {
      this.userName = 'Guest';
      this.userInitial = 'G';
    }
  }

  logout(): void {

    this.authService.logout();

  }
}
