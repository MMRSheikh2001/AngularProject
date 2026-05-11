import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Sidebar } from '../../../shared/sidebar/sidebar';
import { AuthService } from '../../../services/auth';
import { UserSkillService } from '../../../services/user-skill';
import { ResumeService } from '../../../services/resume';
import { UserReputationService } from '../../../services/user-reputation';
import { UserLevelService } from '../../../services/user-level';
import { UserSkill } from '../../../models/user-skill';
import { Resume } from '../../../models/resume';
import { UserReputation } from '../../../models/user-reputation';
import { UserLevel } from '../../../models/user-level';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, Sidebar],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  currentUser: any;

  loading = true;
  saving = false;
  saved = false;

  profileForm: FormGroup;
  skills: UserSkill[] = [];
  newSkill = '';
  resume: Resume | null = null;
  reputation: UserReputation | null = null;
  level: UserLevel | null = null;

  cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'];

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private skillService: UserSkillService,
    private resumeService: ResumeService,
    private reputationService: UserReputationService,
    private levelService: UserLevelService
  ) {
    this.profileForm = this.fb.group({
      name: [this.currentUser?.name || '', Validators.required],
      phone: [this.currentUser?.phone || '', Validators.required],
      city: [this.currentUser?.city || '', Validators.required],
      area: [this.currentUser?.area || ''],
      summary: [''],
      education: [''],
      experience: [''],
      certifications: [''],
      githubLink: [''],
      portfolioLink: ['']
    });
  }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    const userId = this.currentUser?.id!;
    this.loadSkills(userId);
    this.loadResume(userId);
    this.loadReputation(userId);
    this.loadLevel(userId);
  }

  loadSkills(userId: string) {
    this.skillService.findByUserId(userId).subscribe({
      next: (skills) => { this.skills = skills; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  loadResume(userId: string) {
    this.resumeService.findByUserId(userId).subscribe({
      next: (resumes) => {
        if (resumes.length > 0) {
          this.resume = resumes[0];
          this.profileForm.patchValue({
            summary: this.resume.summary,
            education: this.resume.education,
            experience: this.resume.experience,
            certifications: this.resume.certifications,
            githubLink: this.resume.githubLink,
            portfolioLink: this.resume.portfolioLink
          });
        }
      }
    });
  }

  loadReputation(userId: string) {
    this.reputationService.findByUserId(userId).subscribe({
      next: (reps) => { if (reps.length > 0) this.reputation = reps[0]; }
    });
  }

  loadLevel(userId: string) {
    this.levelService.findByUserId(userId).subscribe({
      next: (levels) => { if (levels.length > 0) this.level = levels[0]; }
    });
  }

  addSkill() {
    const skill = this.newSkill.trim();
    if (!skill) return;

    const newSkill: UserSkill = {
      userId: this.currentUser?.id!,
      skillName: skill
    };

    this.skillService.save(newSkill).subscribe({
      next: (saved) => {
        this.skills.push(saved);
        this.newSkill = '';
      }
    });
  }

  removeSkill(skill: UserSkill) {
    if (!skill.id) return;
    this.skillService.delete(skill.id).subscribe({
      next: () => {
        this.skills = this.skills.filter(s => s.id !== skill.id);
      }
    });
  }

  onSave() {
    if (this.profileForm.invalid) return;
    this.saving = true;

    const user = this.auth.getCurrentUser()!;
    const updatedUser = {
      ...user,
      name: this.profileForm.get('name')?.value,
      phone: this.profileForm.get('phone')?.value,
      city: this.profileForm.get('city')?.value,
      area: this.profileForm.get('area')?.value,
    };

    this.auth.update(user.id!, updatedUser).subscribe({
      next: () => {
        this.auth.storeUser(updatedUser);
        this.saveResume();
      }
    });
  }

  saveResume() {
    const resumeData: Resume = {
      userId: this.currentUser?.id!,
      summary: this.profileForm.get('summary')?.value,
      education: this.profileForm.get('education')?.value,
      experience: this.profileForm.get('experience')?.value,
      certifications: this.profileForm.get('certifications')?.value,
      githubLink: this.profileForm.get('githubLink')?.value,
      portfolioLink: this.profileForm.get('portfolioLink')?.value,
    };

    if (this.resume?.id) {
      this.resumeService.update(this.resume.id, { ...resumeData, id: this.resume.id }).subscribe({
        next: () => { this.saving = false; this.saved = true; setTimeout(() => this.saved = false, 3000); }
      });
    } else {
      this.resumeService.save(resumeData).subscribe({
        next: (saved) => {
          this.resume = saved;
          this.saving = false;
          this.saved = true;
          setTimeout(() => this.saved = false, 3000);
        }
      });
    }
  }

  getLevelBadge(): string {
    const l = this.level?.freelancerLevel;
    if (l === 'topseller') return 'bg-warning text-dark';
    if (l === 'level2') return 'bg-primary';
    if (l === 'level1') return 'bg-info text-dark';
    return 'bg-secondary';
  }
}