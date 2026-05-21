import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html'
})
export class CompanySettingsComponent {
  email: string = 'hr@techcorpbd.com';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  emailNotifications: boolean = true;
  applicantAlerts: boolean = true;
  billingEmails: boolean = true;

  onSaveAccount(): void { console.log('Company settings saved'); }
  onSaveNotifications(): void { console.log('Notification preferences saved'); }
}
