import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { JobService } from '../../services/job';
import { GigService } from '../../services/gig';
import { GigPackageService } from '../../services/gig-package';
import { JobApplicationService } from '../../services/job-application';
import { AuthService } from '../../services/auth';
import { Job } from '../../models/job';
import { Gig, GigReview } from '../../models/gig';
import { GigPackage } from '../../models/gig-package';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, Navbar, Footer],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {

  type = '';
  id = '';
  job: Job | null = null;
  gig: Gig | null = null;
  packages: GigPackage[] = [];
  relatedJobs: Job[] = [];
  relatedGigs: Gig[] = [];
  loading = true;
  error = '';
  showModal = false;
  applying = false;
  applied = false;
  saved = false;
  activePackageTab = 0;
  activeFaqIndex = -1;
  activeImageIndex = 0;
  daysLeft = 0;
  applyForm: FormGroup;

  hiringStages = [
    { label: 'Applied', icon: 'bi-file-text', color: '#0d6efd' },
    { label: 'Screening', icon: 'bi-eye', color: '#6f42c1' },
    { label: 'Interview', icon: 'bi-camera-video', color: '#fd7e14' },
    { label: 'Offer', icon: 'bi-envelope-open', color: '#20c997' },
    { label: 'Hired', icon: 'bi-trophy', color: '#198754' }
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      this.loading = true;
      this.loadData();
    });
  }

  loadData(): void {
    if (this.type === 'job') {
      this.jobService.getById(this.id).subscribe({
        next: (job) => {
          this.job = job;
          this.calculateDaysLeft(job.deadline);
          this.loadRelatedJobs();
          this.loading = false;
        },
        error: () => { this.error = 'Job not found.'; this.loading = false; }
      });
    } else {
      this.gigService.getById(this.id).subscribe({
        next: (gig) => {
          this.gig = gig;
          this.loadPackages();
          this.loadRelatedGigs();
          this.loading = false;
        },
        error: () => { this.error = 'Gig not found.'; this.loading = false; }
      });
    }
  }

  loadPackages(): void {
    if (!this.gig?.id) return;
    this.gigPackageService.findByGigId(this.gig.id).subscribe({
      next: (pkgs) => this.packages = pkgs
    });
  }

  loadRelatedJobs(): void {
    this.jobService.findOpenJobs().subscribe({
      next: (jobs) => {
        this.relatedJobs = jobs
          .filter(j => j.id !== this.id)
          .slice(0, 3);
      }
    });
  }

  loadRelatedGigs(): void {
    this.gigService.findActiveGigs().subscribe({
      next: (gigs) => {
        this.relatedGigs = gigs
          .filter(g => g.id !== this.id)
          .slice(0, 4);
      }
    });
  }

  calculateDaysLeft(deadline: string): void {
    const diff = new Date(deadline).getTime() - new Date().getTime();
    this.daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  openApplyModal(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.showModal = true;
  }

  submitApplication(): void {
    if (this.applyForm.invalid) return;
    this.applying = true;

    this.jobAppService.save({
      jobId: this.id,
      applicantId: this.auth.getCurrentUserId()!,
      coverLetter: this.applyForm.get('coverLetter')?.value,
      status: 'pending',
      appliedAt: new Date().toISOString()
    }).subscribe({
      next: () => {
        this.applying = false;
        this.applied = true;
        this.showModal = false;
      },
      error: () => { this.applying = false; }
    });
  }

  orderGig(pkg: GigPackage): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    alert(`Order placed for ${pkg.name} package — ৳${pkg.price}`);
  }

  toggleSave(): void { this.saved = !this.saved; }
  toggleFaq(i: number): void { this.activeFaqIndex = this.activeFaqIndex === i ? -1 : i; }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'bi-star-fill';
      if (i < rating) return 'bi-star-half';
      return 'bi-star';
    });
  }

  getRatingStars(review: GigReview): string[] {
    return this.getStars(review.rating);
  }

  getDeadlineClass(): string {
    if (this.daysLeft <= 3) return 'text-danger';
    if (this.daysLeft <= 7) return 'text-warning';
    return 'text-success';
  }

  shareJob(): void {
    if (navigator.share) {
      navigator.share({ title: this.job?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied!');
    }
  }
}