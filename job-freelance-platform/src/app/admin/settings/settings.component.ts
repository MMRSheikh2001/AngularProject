import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-settings',
  imports: [FormsModule],
  templateUrl: './settings.component.html'
})
export class AdminSettingsComponent {
  commissionRate: number = 10;
  maxUploadSize: number = 2;
  maintenanceMode: boolean = false;
  securityLogAlerts: boolean = true;

  onSaveConfig(): void {
    console.log('Admin system config saved');
  }
}
