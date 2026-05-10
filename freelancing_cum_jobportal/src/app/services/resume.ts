import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '../models/resume';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private url = 'http://localhost:3000/resumes';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Resume[]> { return this.http.get<Resume[]>(this.url); }
  getById(id: string): Observable<Resume> { return this.http.get<Resume>(`${this.url}/${id}`); }
  save(resume: Resume): Observable<Resume> { return this.http.post<Resume>(this.url, resume); }
  update(id: string, resume: Resume): Observable<Resume> { return this.http.put<Resume>(`${this.url}/${id}`, resume); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }

  findByUserId(userId: string): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.url}?userId=${userId}`);
  }
  findByGithubLink(githubLink: string): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.url}?githubLink_like=${githubLink}`);
  }
}