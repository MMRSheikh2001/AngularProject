import { Routes } from '@angular/router';

// Layouts
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// Public pages
import { HomeComponent } from './public/home/home.component';
import { JobsListComponent } from './public/jobs/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './public/jobs/job-details/job-details.component';
import { GigsListComponent } from './public/gigs/gigs-list/gigs-list.component';
import { GigDetailsComponent } from './public/gigs/gig-details/gig-details.component';
import { FreelancersListComponent } from './public/freelancers/freelancers-list/freelancers-list.component';
import { FreelancerDetailsComponent } from './public/freelancers/freelancer-details/freelancer-details.component';
import { CompaniesListComponent } from './public/companies/companies-list/companies-list.component';
import { CompanyDetailsComponent } from './public/companies/company-details/company-details.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';

// Auth pages
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

// User pages
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { UserProfileComponent } from './user/profile/profile.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { CvBuilderComponent } from './user/cv-builder/cv-builder.component';
import { CvPreviewComponent } from './user/cv-preview/cv-preview.component';
import { ApplicationsComponent } from './user/applications/applications.component';
import { SavedJobsComponent } from './user/saved-jobs/saved-jobs.component';
import { MyGigsComponent } from './user/my-gigs/my-gigs.component';
import { CreateGigComponent } from './user/create-gig/create-gig.component';
import { EditGigComponent } from './user/edit-gig/edit-gig.component';
import { UserOrdersComponent } from './user/orders/orders.component';
import { UserWalletComponent } from './user/wallet/wallet.component';
import { UserMessagesComponent } from './user/messages/messages.component';
import { UserNotificationsComponent } from './user/notifications/notifications.component';
import { UserSettingsComponent } from './user/settings/settings.component';
import { Education } from './user/education/education';
import { Experience } from './user/experience/experience';
import { Training } from './user/training/training';
import { Certifications } from './user/certifications/certifications';
import { Skills } from './user/skills/skills';
import { Languages } from './user/languages/languages';
import { Portfolio } from './user/portfolio/portfolio';
import { References } from './user/references/references';
import { Extracurricular } from './user/extracurricular/extracurricular';

// Company pages
import { CompanyDashboardComponent } from './company/dashboard/dashboard.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { EditCompanyProfileComponent } from './company/edit-company-profile/edit-company-profile.component';
import { PostJobComponent } from './company/post-job/post-job.component';
import { ManageJobsComponent } from './company/manage-jobs/manage-jobs.component';
import { ApplicantsComponent } from './company/applicants/applicants.component';
import { HiredUsersComponent } from './company/hired-users/hired-users.component';
import { PurchasedGigsComponent } from './company/purchased-gigs/purchased-gigs.component';
import { CompanyWalletComponent } from './company/wallet/wallet.component';
import { CompanyMessagesComponent } from './company/messages/messages.component';
import { CompanyNotificationsComponent } from './company/notifications/notifications.component';
import { CompanySettingsComponent } from './company/settings/settings.component';

// Admin pages
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminManageJobsComponent } from './admin/manage-jobs/manage-jobs.component';
import { AdminManageGigsComponent } from './admin/manage-gigs/manage-gigs.component';
import { AdminSettingsComponent } from './admin/settings/settings.component';
import { ManageCompanies } from './admin/manage-companies/manage-companies';
import { ManageDisputes } from './admin/manage-disputes/manage-disputes';
import { ManageTransactions } from './admin/manage-transactions/manage-transactions';
import { ManageReports } from './admin/manage-reports/manage-reports';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
  // Public layout routes
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'jobs', component: JobsListComponent },
      { path: 'jobs/:id', component: JobDetailsComponent },
      { path: 'gigs', component: GigsListComponent },
      { path: 'gigs/:id', component: GigDetailsComponent },
      { path: 'freelancers', component: FreelancersListComponent },
      { path: 'freelancers/:id', component: FreelancerDetailsComponent },
      { path: 'companies', component: CompaniesListComponent },
      { path: 'companies/:id', component: CompanyDetailsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  },

  // User dashboard layout routes
  {
    path: 'user',
    component: DashboardLayoutComponent, canActivate: [authGuardGuard], data: { role: 'user' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'cv-builder', component: CvBuilderComponent },
      { path: 'education', component: Education },
      { path: 'experience', component: Experience },
      { path: 'training', component: Training },
      { path: 'certifications', component: Certifications },
      { path: 'skills', component: Skills },
      { path: 'languages', component: Languages },
      { path: 'portfolio', component: Portfolio },
      { path: 'references', component: References },
      { path: 'extracurricular', component: Extracurricular },
      { path: 'cv-preview', component: CvPreviewComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'saved-jobs', component: SavedJobsComponent },
      { path: 'my-gigs', component: MyGigsComponent },
      { path: 'create-gig', component: CreateGigComponent },
      { path: 'edit-gig/:id', component: EditGigComponent },
      { path: 'orders', component: UserOrdersComponent },
      { path: 'wallet', component: UserWalletComponent },
      { path: 'messages', component: UserMessagesComponent },
      { path: 'notifications', component: UserNotificationsComponent },
      { path: 'settings', component: UserSettingsComponent }
    ]
  },

  // Company dashboard layout routes
  {
    path: 'company',
    component: DashboardLayoutComponent, canActivate: [authGuardGuard], data: { role: 'company' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CompanyDashboardComponent },
      { path: 'profile', component: CompanyProfileComponent },
      { path: 'edit-profile', component: EditCompanyProfileComponent },
      { path: 'post-job', component: PostJobComponent },
      { path: 'manage-jobs', component: ManageJobsComponent },
      { path: 'applicants', component: ApplicantsComponent },
      { path: 'hired-users', component: HiredUsersComponent },
      { path: 'purchased-gigs', component: PurchasedGigsComponent },
      { path: 'wallet', component: CompanyWalletComponent },
      { path: 'messages', component: CompanyMessagesComponent },
      { path: 'notifications', component: CompanyNotificationsComponent },
      { path: 'settings', component: CompanySettingsComponent }
    ]
  },

  // Admin dashboard layout routes
  {
    path: 'admin',
    component: DashboardLayoutComponent, canActivate: [authGuardGuard], data: { role: 'admin' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'manage-users', component: AdminManageUsersComponent },
      { path: 'manage-companies', component: ManageCompanies },
      { path: 'manage-jobs', component: AdminManageJobsComponent },
      { path: 'manage-gigs', component: AdminManageGigsComponent },
      { path: 'manage-disputes', component: ManageDisputes },
      { path: 'manage-transactions', component: ManageTransactions },
      { path: 'manage-reports', component: ManageReports },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  },

  // Fallback redirect
  { path: '**', redirectTo: '' }
];
