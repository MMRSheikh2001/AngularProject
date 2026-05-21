import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-freelancer-card',
  imports: [RouterLink],
  templateUrl: './freelancer-card.component.html'
})
export class FreelancerCardComponent {
  @Input() userId: number = 0;
  @Input() name: string = 'Freelancer Name';
  @Input() title: string = 'Professional Title';
  @Input() skills: string[] = [];
  @Input() rating: number = 5;
  @Input() reviewCount: number = 0;
  @Input() hourlyRate: string = '';
  @Input() location: string = 'Bangladesh';
  @Input() avatar: string = '';
}
