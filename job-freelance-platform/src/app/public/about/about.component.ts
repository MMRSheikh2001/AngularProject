import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  stats = [
    { label: 'Jobs Posted', value: '12,400+' },
    { label: 'Freelancers', value: '8,200+' },
    { label: 'Companies', value: '3,500+' },
    { label: 'Gigs Available', value: '5,800+' }
  ];

  team = [
    { name: 'Arif Hossain', role: 'CEO & Founder' },
    { name: 'Sadia Islam', role: 'CTO' },
    { name: 'Karim Uddin', role: 'Head of Product' },
    { name: 'Nadia Parvin', role: 'Head of Design' }
  ];
}
