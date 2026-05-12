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

  type = '';
  id = '';

  job: Job | null = null;
  gig: Gig | null = null;
  packages: GigPackage[] = [];
  relatedJobs: Job[] = [];
  relatedGigs: Gig[] = [];
  loading = true;
  error = '';

  // Apply modal
  showModal = false;
  applyForm: FormGroup;
  applying = false;
  applied = false;
  saved = false;

  // Gig state
  selectedPackage: GigPackage | null = null;
  activeImageIndex = 0;
  activeFaqIndex = -1;
  activeTab: 'description' | 'reviews' | 'faq' = 'description';

  // Countdown
  daysLeft = 0;

  hiringStages = [
    { label: 'Applied', icon: 'bi-file-text' },
    { label: 'Screening', icon: 'bi-eye' },
    { label: 'Interview', icon: 'bi-camera-video' },
    { label: 'Offer', icon: 'bi-envelope-open' },
    { label: 'Hired', icon: 'bi-trophy' }
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
          this.calculateDeadline();
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
      next: (pkgs) => {
        this.packages = pkgs;
        this.selectedPackage = pkgs.find(p => p.popular) || pkgs[1] || pkgs[0] || null;
      }
    });
  }

  loadRelatedJobs(): void {
    this.jobService.findOpenJobs().subscribe({
      next: (jobs) => {
        this.relatedJobs = jobs.filter(j => j.id !== this.id).slice(0, 3);
      }
    });
  }

  loadRelatedGigs(): void {
    this.gigService.findActiveGigs().subscribe({
      next: (gigs) => {
        this.relatedGigs = gigs.filter(g => g.id !== this.id).slice(0, 3);
      }
    });
  }

  calculateDeadline(): void {
    if (!this.job?.deadline) return;
    const deadline = new Date(this.job.deadline);
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    this.daysLeft = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  }

  openApplyModal(): void {
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
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
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
    alert(`Redirecting to order: ${pkg.name} — $${pkg.price}`);
  }

  orderGigDefault(): void {
    if (!this.auth.isLoggedIn()) { this.router.navigate(['/login']); return; }
    alert('Order placed! Starting at $50');
  }

  toggleSave(): void { this.saved = !this.saved; }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? -1 : index;
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'bi-star-fill';
      if (i < rating) return 'bi-star-half';
      return 'bi-star';
    });
  }

  getPackageBorderColor(name: string): string {
    const map: Record<string, string> = {
      basic: '#6c757d', standard: '#0d6efd', premium: '#ffc107'
    };
    return map[name] || '#6c757d';
  }

  getDeadlineUrgency(): string {
    if (this.daysLeft <= 3) return 'text-danger fw-bold';
    if (this.daysLeft <= 7) return 'text-warning fw-bold';
    return 'text-success';
  }

  getAvgRating(): number {
    if (!this.gig?.reviews?.length) return this.gig?.rating || 0;
    const sum = this.gig.reviews.reduce((a, r) => a + r.rating, 0);
    return Math.round((sum / this.gig.reviews.length) * 10) / 10;
  }

  getRevisionLabel(rev: number): string {
    return rev >= 999 ? 'Unlimited' : `${rev} Revisions`;
  }
}