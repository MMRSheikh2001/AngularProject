import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-company-profile',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-company-profile.component.html'
})
export class EditCompanyProfileComponent {
  name: string = 'TechCorp BD';
  industry: string = 'Software & Technology';
  size: string = '51–200 employees';
  founded: string = '2015';
  website: string = 'https://techcorpbd.com';
  about: string = 'TechCorp BD is a leading software company in Bangladesh specializing in enterprise web applications, mobile development, and cloud solutions.';

  // Bangladesh address structure
  division: string = 'Dhaka';
  district: string = 'Dhaka';
  upazila: string = 'Gulshan';
  postcode: string = '1212';
  fullAddress: string = 'Gulshan-2, Dhaka-1212';

  divisions = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh'];

  onSave(): void {
    console.log('Company profile saved');
  }
}
