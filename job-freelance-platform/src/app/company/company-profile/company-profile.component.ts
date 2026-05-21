import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-profile-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './company-profile.component.html'
})
export class CompanyProfileComponent {
  company = {
    name: 'TechCorp BD',
    industry: 'Software & Technology',
    size: '51–200 employees',
    founded: '2015',
    location: 'Gulshan-2, Dhaka-1212',
    website: 'https://techcorpbd.com',
    about: 'TechCorp BD is a leading software company in Bangladesh specializing in enterprise web applications, mobile development, and cloud solutions.',
    division: 'Dhaka',
    district: 'Dhaka',
    upazila: 'Gulshan',
    postcode: '1212'
  };
}
