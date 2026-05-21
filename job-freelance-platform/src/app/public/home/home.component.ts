import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { GigCardComponent } from '../../shared/gig-card/gig-card.component';
import { FreelancerCardComponent } from '../../shared/freelancer-card/freelancer-card.component';
import { CompanyCardComponent } from '../../shared/company-card/company-card.component';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, JobCardComponent, GigCardComponent, FreelancerCardComponent, CompanyCardComponent, StatsCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  featuredJobs = [
    { jobId: 1, title: 'Senior React Developer', company: 'TechCorp BD', location: 'Dhaka', salary: '৳80,000–১,২০,০০০', jobType: 'Full-time', deadline: '30 Jun 2025' },
    { jobId: 2, title: 'UI/UX Designer', company: 'Creative Studio', location: 'Chittagong', salary: '৳50,000–৭০,০০০', jobType: 'Full-time', deadline: '15 Jun 2025' },
    { jobId: 3, title: 'Digital Marketing Executive', company: 'Growth Hub', location: 'Remote', salary: '৳35,000–৫০,০০০', jobType: 'Remote', deadline: '20 Jun 2025' },
    { jobId: 4, title: 'Backend Java Developer', company: 'SoftEdge Ltd', location: 'Dhaka', salary: '৳70,000–৯০,০০০', jobType: 'Full-time', deadline: '25 Jun 2025' }
  ];

  featuredGigs = [
    { gigId: 1, title: 'I will design a professional logo for your brand', sellerName: 'Rahul Design', price: 1500, rating: 4.9, reviewCount: 120, category: 'Design' },
    { gigId: 2, title: 'I will build a responsive website with React', sellerName: 'DevMaster', price: 8000, rating: 4.8, reviewCount: 85, category: 'Web Dev' },
    { gigId: 3, title: 'I will write SEO-optimized blog content', sellerName: 'ContentPro', price: 800, rating: 4.7, reviewCount: 200, category: 'Writing' },
    { gigId: 4, title: 'I will create social media graphics', sellerName: 'PixelArt BD', price: 1200, rating: 5.0, reviewCount: 55, category: 'Design' }
  ];

  featuredFreelancers = [
    { userId: 1, name: 'Mahbub Rahman', title: 'Full Stack Developer', skills: ['React', 'Node.js', 'MySQL'], rating: 4.9, reviewCount: 45, hourlyRate: '800', location: 'Dhaka' },
    { userId: 2, name: 'Tanvir Ahmed', title: 'Graphic Designer', skills: ['Illustrator', 'Photoshop', 'Figma'], rating: 4.8, reviewCount: 70, hourlyRate: '600', location: 'Chittagong' },
    { userId: 3, name: 'Badrul Islam', title: 'Digital Marketer', skills: ['SEO', 'Facebook Ads', 'Google Ads'], rating: 4.7, reviewCount: 33, hourlyRate: '500', location: 'Sylhet' }
  ];

  featuredCompanies = [
    { companyId: 1, name: 'TechCorp BD', industry: 'Software', location: 'Dhaka', jobCount: 12, size: '51–200' },
    { companyId: 2, name: 'Creative Studio', industry: 'Design & Media', location: 'Chittagong', jobCount: 5, size: '11–50' },
    { companyId: 3, name: 'Growth Hub', industry: 'Marketing', location: 'Remote', jobCount: 8, size: '11–50' },
    { companyId: 4, name: 'SoftEdge Ltd', industry: 'IT Services', location: 'Dhaka', jobCount: 20, size: '201–500' }
  ];

  stats = [
    { title: 'Jobs Posted', value: '12,400+', icon: 'bi-briefcase', color: 'primary' },
    { title: 'Freelancers', value: '8,200+', icon: 'bi-people', color: 'success' },
    { title: 'Companies', value: '3,500+', icon: 'bi-building', color: 'warning' },
    { title: 'Gigs Available', value: '5,800+', icon: 'bi-grid', color: 'info' }
  ];
}
