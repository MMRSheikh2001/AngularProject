import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { AuthService } from '../../../services/auth';
import { JobService } from '../../../services/job';
import { JobApplicationService } from '../../../services/job-application';
import { OrderService } from '../../../services/order';
import { WalletService } from '../../../services/wallet';
import { NotificationService } from '../../../services/notification';
import { Job } from '../../../models/job';
import { JobApplication } from '../../../models/job-application';
import { Order } from '../../../models/order';
import { Notification } from '../../../models/notification';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css'
})
export class DashboardHome implements OnInit {

  loading = true;


  // currentUser = this.auth.getCurrentUser();
  currentUser: any;

  // Summary data
  applications: JobApplication[] = [];
  orders: Order[] = [];
  walletBalance = 0;
  notifications: Notification[] = [];
  unreadCount = 0;

  // Quick stats
  stats = {
    applied: 0,
    activeOrders: 0,
    balance: 0,
    unread: 0
  };

  quickActions = [
    { label: 'Post a Job', icon: 'bi-plus-circle', route: '/dashboard/jobs', color: 'btn-primary' },
    { label: 'Create a Gig', icon: 'bi-grid-plus', route: '/dashboard/gigs', color: 'btn-success' },
    { label: 'Browse Jobs', icon: 'bi-search', route: '/jobs', color: 'btn-outline-primary' },
    { label: 'Browse Gigs', icon: 'bi-shop', route: '/gigs', color: 'btn-outline-success' },
  ];

  constructor(
    public auth: AuthService,
    private jobAppService: JobApplicationService,
    private orderService: OrderService,
    private walletService: WalletService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const userId = this.auth.getCurrentUserId()!;
    this.loadApplications(userId);
    this.loadOrders(userId);
    this.loadWallet(userId);
    this.loadNotifications(userId);
    this.currentUser = this.auth.getCurrentUser();
  }


  loadApplications(userId: string) {
    this.jobAppService.findByApplicantId(userId).subscribe({
      next: (apps) => {
        this.applications = apps.slice(0, 5);
        this.stats.applied = apps.length;
        this.checkLoading();
      },
      error: () => this.checkLoading()
    });
  }

  loadOrders(userId: string) {
    this.orderService.findByClientId(userId).subscribe({
      next: (orders) => {
        this.orders = orders.slice(0, 5);
        this.stats.activeOrders = orders.filter(o => o.status === 'active').length;
        this.checkLoading();
      },
      error: () => this.checkLoading()
    });
  }

  loadWallet(userId: string) {
    this.walletService.findByUserId(userId).subscribe({
      next: (wallets) => {
        this.walletBalance = wallets[0]?.balance || 0;
        this.stats.balance = this.walletBalance;
        this.checkLoading();
      },
      error: () => this.checkLoading()
    });
  }

  loadNotifications(userId: string) {
    this.notificationService.findByUserId(userId).subscribe({
      next: (notifs) => {
        this.notifications = notifs.slice(0, 5);
        this.stats.unread = notifs.filter(n => !n.isRead).length;
        this.checkLoading();
      },
      error: () => this.checkLoading()
    });
  }

  checkLoading() {
    this.loading = false;
  }

  getStatusClass(status: string): string {
    const map: any = {
      'pending': 'bg-warning text-dark',
      'shortlisted': 'bg-info text-dark',
      'hired': 'bg-success',
      'rejected': 'bg-danger',
      'active': 'bg-primary',
      'completed': 'bg-success',
      'delivered': 'bg-info text-dark',
      'revision': 'bg-warning text-dark',
      'disputed': 'bg-danger'
    };
    return map[status] || 'bg-secondary';
  }

  getNotifIcon(type: string): string {
    const map: any = {
      'job_alert': 'bi-briefcase text-primary',
      'order_update': 'bi-box text-success',
      'message': 'bi-chat text-info',
      'payment': 'bi-wallet2 text-warning',
      'system': 'bi-bell text-secondary'
    };
    return map[type] || 'bi-bell text-secondary';
  }
}