import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Job, JobApplication, Category } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Job Category
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}categories`);
  }

  // Jobs
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}jobs?_expand=company&_expand=category`);
  }

  getJobById(id: string | number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}jobs/${id}?_expand=company&_expand=category`);
  }
  
  getJobsByCompany(companyId: string | number): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}jobs?companyId=${companyId}`);
  }

  saveJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}jobs`, job);
  }

  updateJob(id: string | number, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.baseUrl}jobs/${id}`, job);
  }

  // Job Applications
  applyForJob(application: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(`${this.baseUrl}jobApplications`, application);
  }

  getApplicationsByUser(userId: string | number): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.baseUrl}jobApplications?userId=${userId}&_expand=job`);
  }

  getApplicationsByJob(jobId: string | number): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.baseUrl}jobApplications?jobId=${jobId}&_expand=user`);
  }

  updateApplicationStatus(id: string | number, statusUpdate: Partial<JobApplication>): Observable<JobApplication> {
    return this.http.patch<JobApplication>(`${this.baseUrl}jobApplications/${id}`, statusUpdate);
  }
}
