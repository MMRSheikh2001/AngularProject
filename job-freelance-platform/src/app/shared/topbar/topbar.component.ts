import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationDropdownComponent } from '../notification-dropdown/notification-dropdown.component';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, NotificationDropdownComponent],
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  userName: string = 'John Doe';
  userInitial: string = 'J';
}
