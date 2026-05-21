import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-job',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './post-job.component.html'
})
export class PostJobComponent {
  title: string = '';
  jobType: string = '';
  location: string = '';
  salary: string = '';
  experience: string = '';
  deadline: string = '';
  description: string = '';
  requirements: string = '';
  benefits: string = '';

  jobTypes = ['Full-time', 'Part-time', 'Remote', 'Contract', 'Internship'];

  onSubmit(): void {
    console.log('Job posted');
  }
}
