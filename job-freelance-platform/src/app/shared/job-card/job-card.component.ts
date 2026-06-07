import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './job-card.component.html'
})
export class JobCardComponent {
  @Input() jobId: number = 0;
  @Input() title: string = 'Job Title';
  @Input() company: string = 'Company Name';
  @Input() location: string = 'Dhaka, Bangladesh';
  @Input() salary: string = 'Negotiable';
  @Input() jobType: string = 'Full-time';
  @Input() deadline: string = '';
  @Input() logo: string = '';
}
