import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './public-layout.component.html'
})
export class PublicLayoutComponent {}
