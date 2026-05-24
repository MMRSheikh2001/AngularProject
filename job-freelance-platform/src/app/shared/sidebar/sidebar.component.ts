import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(public router: Router) {}

  get role(): string {
    const url = this.router.url;
    if (url.startsWith('/admin')) return 'admin';
    if (url.startsWith('/company')) return 'company';
    return 'user';
  }

  userLinks = [
    { label: 'Dashboard',     icon: 'bi-speedometer2',    path: '/user/dashboard' },
    { label: 'My Profile',    icon: 'bi-person-circle',   path: '/user/profile' },
    { label: 'CV Builder',    icon: 'bi-file-earmark-text',path: '/user/cv-builder' },
    { label: 'Applications',  icon: 'bi-send',            path: '/user/applications' },
    { label: 'Saved Jobs',    icon: 'bi-bookmark',        path: '/user/saved-jobs' },
    { label: 'My Gigs',       icon: 'bi-grid',            path: '/user/my-gigs' },
    { label: 'Orders',        icon: 'bi-bag-check',       path: '/user/orders' },
    { label: 'Wallet',        icon: 'bi-wallet2',         path: '/user/wallet' },
    { label: 'Messages',      icon: 'bi-chat-dots',       path: '/user/messages' },
    { label: 'Notifications', icon: 'bi-bell',            path: '/user/notifications' },
    { label: 'Settings',      icon: 'bi-gear',            path: '/user/settings' }
  ];

  companyLinks = [
    { label: 'Dashboard',       icon: 'bi-speedometer2',   path: '/company/dashboard' },
    { label: 'Company Profile', icon: 'bi-building',       path: '/company/profile' },
    { label: 'Post a Job',      icon: 'bi-plus-circle',    path: '/company/post-job' },
    { label: 'Manage Jobs',     icon: 'bi-briefcase',      path: '/company/manage-jobs' },
    { label: 'Applicants',      icon: 'bi-people',         path: '/company/applicants' },
    { label: 'Hired Users',     icon: 'bi-person-check',   path: '/company/hired-users' },
    { label: 'Purchased Gigs',  icon: 'bi-bag',            path: '/company/purchased-gigs' },
    { label: 'Wallet',          icon: 'bi-wallet2',        path: '/company/wallet' },
    { label: 'Messages',        icon: 'bi-chat-dots',      path: '/company/messages' },
    { label: 'Notifications',   icon: 'bi-bell',           path: '/company/notifications' },
    { label: 'Settings',        icon: 'bi-gear',           path: '/company/settings' }
  ];

  adminLinks = [
    { label: 'Dashboard',     icon: 'bi-speedometer2',  path: '/admin/dashboard' },
    { label: 'Users',         icon: 'bi-people',        path: '/admin/manage-users' },
    { label: 'Companies',     icon: 'bi-building',      path: '/admin/companies' },
    { label: 'Jobs',          icon: 'bi-briefcase',     path: '/admin/manage-jobs' },
    { label: 'Gigs',          icon: 'bi-grid',          path: '/admin/manage-gigs' },
    { label: 'Disputes',      icon: 'bi-exclamation-triangle', path: '/admin/disputes' },
    { label: 'Transactions',  icon: 'bi-credit-card',   path: '/admin/transactions' },
    { label: 'Reports',       icon: 'bi-bar-chart-line',path: '/admin/reports' },
     { label: 'Settings', icon: 'bi-gear', path: '/admin/settings' }
  ];

  get activeLinks() {
    if (this.role === 'admin') return this.adminLinks;
    if (this.role === 'company') return this.companyLinks;
    return this.userLinks;
  }

  get roleLabel(): string {
    if (this.role === 'admin') return 'Admin Panel';
    if (this.role === 'company') return 'Company Panel';
    return 'User Dashboard';
  }
}
