import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html'
})
export class UserSettingsComponent {
  // Account
  email: string = 'mahbub@example.com';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Notifications
  emailNotifications: boolean = true;
  jobAlerts: boolean = true;
  orderUpdates: boolean = true;
  messageAlerts: boolean = true;
  marketingEmails: boolean = false;

  // Privacy
  profileVisibility: string = 'public';
  showEmail: boolean = false;
  showPhone: boolean = false;

  onSaveAccount(): void { console.log('Account settings saved'); }
  onSaveNotifications(): void { console.log('Notification settings saved'); }
  onSavePrivacy(): void { console.log('Privacy settings saved'); }
  onDeleteAccount(): void { console.log('Delete account requested'); }
}
