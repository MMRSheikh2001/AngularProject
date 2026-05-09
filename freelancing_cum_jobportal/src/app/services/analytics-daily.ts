import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyticsDaily } from '../models/analytics-daily';

@Injectable({ providedIn: 'root' })
export class AnalyticsDailyService {
  private url = 'http://localhost:3000/analyticsDaily';
  constructor(private http: HttpClient) {}

  findAll(): Observable<AnalyticsDaily[]> { return this.http.get<AnalyticsDaily[]>(this.url); }
  getById(id: string): Observable<AnalyticsDaily> { return this.http.get<AnalyticsDaily>(`${this.url}/${id}`); }
  save(a: AnalyticsDaily): Observable<AnalyticsDaily> { return this.http.post<AnalyticsDaily>(this.url, a); }
  update(id: string, a: AnalyticsDaily): Observable<AnalyticsDaily> { return this.http.put<AnalyticsDaily>(`${this.url}/${id}`, a); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}