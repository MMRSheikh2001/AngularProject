import { Routes } from '@angular/router';


export const routes: Routes = [

    // Public
    { path: '', loadComponent: () => import('./component/home/home').then(m => m.Home) },
    { path: 'jobs', loadComponent: () => import('./component/jobs-list/jobs-list').then(m => m.JobsList) },
    { path: 'gigs', loadComponent: () => import('./component/gigs-list/gigs-list').then(m => m.GigsList) },
    { path: 'details/:type/:id', loadComponent: () => import('./component/details/details').then(m => m.Details) },

    // Auth
    { path: 'login', loadComponent: () => import('./pages/auth/login/login').then(m => m.Login) },
    { path: 'register', loadComponent: () => import('./pages/auth/register/register').then(m => m.Register) },
    { path: 'verify-email', loadComponent: () => import('./pages/auth/verify-email/verify-email').then(m => m.VerifyEmail) },
    { path: 'forgot-password', loadComponent: () => import('./pages/auth/forgot-password/forgot-password').then(m => m.ForgotPassword) },
    { path: 'reset-password', loadComponent: () => import('./pages/auth/reset-password/reset-password').then(m => m.ResetPassword) },

    // Dashboard
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard-home/dashboard-home').then(m => m.DashboardHome) },
    { path: 'dashboard/profile', loadComponent: () => import('./pages/dashboard/profile/profile').then(m => m.Profile) },
    { path: 'dashboard/jobs', loadComponent: () => import('./pages/dashboard/jobs-management/jobs-management').then(m => m.JobsManagement) },
    { path: 'dashboard/gigs', loadComponent: () => import('./pages/dashboard/gigs-management/gigs-management').then(m => m.GigsManagement) },
    { path: 'dashboard/orders', loadComponent: () => import('./pages/dashboard/orders/orders').then(m => m.Orders) },
    { path: 'dashboard/chat', loadComponent: () => import('./pages/dashboard/chat/chat').then(m => m.Chat) },
    { path: 'dashboard/wallet', loadComponent: () => import('./pages/dashboard/wallet/wallet').then(m => m.Wallet) },
    { path: 'dashboard/notifications', loadComponent: () => import('./pages/dashboard/notifications/notifications').then(m => m.Notifications) },

    // Admin
    { path: 'admin', loadComponent: () => import('./pages/admin/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) },
    { path: 'admin/management', loadComponent: () => import('./pages/admin/admin-management/admin-management').then(m => m.AdminManagement) },
    { path: 'admin/analytics', loadComponent: () => import('./pages/admin/analytics/analytics').then(m => m.Analytics) },

    // Fallback
    { path: '**', redirectTo: '' }
];
