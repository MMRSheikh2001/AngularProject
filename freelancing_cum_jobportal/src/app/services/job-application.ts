import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../models/job-application';

@Injectable({ providedIn: 'root' })
export class JobApplicationService {
  private url = 'http://localhost:3000/jobApplications';
  constructor(private http: HttpClient) {}

  findAll(): Observable<JobApplication[]> { return this.http.get<JobApplication[]>(this.url); }
  getById(id: string): Observable<JobApplication> { return this.http.get<JobApplication>(`${this.url}/${id}`); }
  save(app: JobApplication): Observable<JobApplication> { return this.http.post<JobApplication>(this.url, app); }
  update(id: string, app: JobApplication): Observable<JobApplication> { return this.http.put<JobApplication>(`${this.url}/${id}`, app); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}