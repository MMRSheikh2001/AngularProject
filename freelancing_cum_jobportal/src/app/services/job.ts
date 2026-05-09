import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({ providedIn: 'root' })
export class JobService {
  private url = 'http://localhost:3000/jobs';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Job[]> { return this.http.get<Job[]>(this.url); }
  getById(id: string): Observable<Job> { return this.http.get<Job>(`${this.url}/${id}`); }
  save(job: Job): Observable<Job> { return this.http.post<Job>(this.url, job); }
  update(id: string, job: Job): Observable<Job> { return this.http.put<Job>(`${this.url}/${id}`, job); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}