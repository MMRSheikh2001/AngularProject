import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gig-card',
  imports: [RouterLink],
  templateUrl: './gig-card.component.html'
})
export class GigCardComponent {
  @Input() gigId: number = 0;
  @Input() title: string = 'Gig Title';
  @Input() sellerName: string = 'Seller Name';
  @Input() sellerAvatar: string = '';
  @Input() price: number = 500;
  @Input() rating: number = 5;
  @Input() reviewCount: number = 0;
  @Input() category: string = 'Category';
  @Input() image: string = '';
}
