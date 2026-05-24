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
  workplaceType: string = '';
  salaryMin: number | null = null;
  salaryMax: number | null = null;
  vacancy: number = 1;
  deadline: string = '';
  description: string = '';
  requirements: string = '';
  responsibilities: string = '';

  jobTypes = ['Full-time', 'Part-time', 'Remote', 'Contract', 'Internship'];

  onSubmit(): void {
    console.log('Job posted');
  }
}
