import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterviewRound } from '../models/interview-round';

@Injectable({ providedIn: 'root' })
export class InterviewRoundService {
  private url = 'http://localhost:3000/interviewRounds';
  constructor(private http: HttpClient) {}

  findAll(): Observable<InterviewRound[]> { return this.http.get<InterviewRound[]>(this.url); }
  getById(id: string): Observable<InterviewRound> { return this.http.get<InterviewRound>(`${this.url}/${id}`); }
  save(r: InterviewRound): Observable<InterviewRound> { return this.http.post<InterviewRound>(this.url, r); }
  update(id: string, r: InterviewRound): Observable<InterviewRound> { return this.http.put<InterviewRound>(`${this.url}/${id}`, r); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}