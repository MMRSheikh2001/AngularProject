import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent {
  // Personal Info
  name: string = 'Mahbub Rahman';
  title: string = 'Full Stack Developer';
  phone: string = '+880 1711-000001';
  bio: string = 'Experienced Full Stack Developer with 5+ years in React and Node.js.';

  // Bangladesh address
  division: string = 'Dhaka';
  district: string = 'Dhaka';
  upazila: string = 'Gulshan';
  postcode: string = '1212';
  fullAddress: string = 'House 12, Road 5, Gulshan-2';

  // Professional
  skills: string = 'React, Node.js, MySQL, TypeScript';
  github: string = 'https://github.com/mahbub';
  linkedin: string = 'https://linkedin.com/in/mahbub';
  hourlyRate: string = '800';

  divisions = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal', 'Rangpur', 'Mymensingh'];

  onSave(): void {
    console.log('Profile saved');
  }
}
