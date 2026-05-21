import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent {}
