import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-card',
  imports: [RouterLink],
  templateUrl: './company-card.component.html'
})
export class CompanyCardComponent {
  @Input() companyId: number = 0;
  @Input() name: string = 'Company Name';
  @Input() industry: string = 'Industry';
  @Input() location: string = 'Dhaka, Bangladesh';
  @Input() jobCount: number = 0;
  @Input() logo: string = '';
  @Input() size: string = '';
}
