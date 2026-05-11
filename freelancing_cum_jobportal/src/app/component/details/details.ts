import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { JobService } from '../../services/job';
import { GigService } from '../../services/gig';
import { GigPackageService } from '../../services/gig-package';
import { JobApplicationService } from '../../services/job-application';
import { AuthService } from '../../services/auth';
import { Job } from '../../models/job';
import { Gig } from '../../models/gig';
import { GigPackage } from '../../models/gig-package';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, Navbar, Footer],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {

  type = '';   // 'job' or 'gig'
  id = '';

  job: Job | null = null;
  gig: Gig | null = null;
  packages: GigPackage[] = [];
  loading = true;
  error = '';

  // Apply modal
  showModal = false;
  applyForm: FormGroup;
  applying = false;
  applied = false;

  hiringStages = [
    { label: 'Applied', icon: 'bi-file-text' },
    { label: 'Screening', icon: 'bi-eye' },
    { label: 'Interview', icon: 'bi-camera-video' },
    { label: 'Offer', icon: 'bi-envelope-open' },
    { label: 'Hired', icon: 'bi-trophy' }
  ];

  mockReviews = [
    { name: 'Sara K.', avatar: 'https://i.pravatar.cc/40?img=5', rating: 5, comment: 'Excellent work! Delivered on time and exceeded expectations.', date: '2025-04-20' },
    { name: 'Rahim M.', avatar: 'https://i.pravatar.cc/40?img=7', rating: 5, comment: 'Very professional. Will order again!', date: '2025-04-15' },
    { name: 'Nadia I.', avatar: 'https://i.pravatar.cc/40?img=9', rating: 4, comment: 'Good quality work. Minor revisions needed but handled quickly.', date: '2025-04-10' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private gigService: GigService,
    private gigPackageService: GigPackageService,
    private jobAppService: JobApplicationService,
    public auth: AuthService,
    private fb: FormBuilder
  ) {
    this.applyForm = this.fb.group({
      coverLetter: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      this.loadData();
    });
  }

  loadData() {
    this.loading = true;
    if (this.type === 'job') {
      this.jobService.getById(this.id).subscribe({
        next: (job) => { this.job = job; this.loading = false; },
        error: () => { this.error = 'Job not found.'; this.loading = false; }
      });
    } else {
      this.gigService.getById(this.id).subscribe({
        next: (gig) => {
          this.gig = gig;
          this.loadPackages();
          this.loading = false;
        },
        error: () => { this.error = 'Gig not found.'; this.loading = false; }
      });
    }
  }

  loadPackages() {
    if (!this.gig?.id) return;
    this.gigPackageService.findByGigId(this.gig.id).subscribe({
      next: (pkgs) => this.packages = pkgs
    });
  }

  openApplyModal() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.showModal = true;
  }

  submitApplication() {
    if (this.applyForm.invalid) return;
    this.applying = true;

    const application = {
      jobId: this.id,
      applicantId: this.auth.getCurrentUserId()!,
      coverLetter: this.applyForm.get('coverLetter')?.value,
      status: 'pending' as const,
      appliedAt: new Date().toISOString()
    };

    this.jobAppService.save(application).subscribe({
      next: () => {
        this.applying = false;
        this.applied = true;
        this.showModal = false;
      },
      error: () => { this.applying = false; }
    });
  }

  orderGig(pkg: GigPackage) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    alert(`Order placed for ${pkg.name} package at $${pkg.price}!`);
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'bi-star-fill';
      if (i < rating) return 'bi-star-half';
      return 'bi-star';
    });
  }

  getPackageColor(name: string): string {
    const map: any = { basic: 'border-secondary', standard: 'border-primary', premium: 'border-warning' };
    return map[name] || 'border-secondary';
  }
  orderGigDefault() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    alert('Order placed! Starting at $50');
  }
}