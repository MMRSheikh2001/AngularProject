import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationStatusHistory } from '../models/application-status-history';

@Injectable({ providedIn: 'root' })
export class ApplicationStatusHistoryService {
  private url = 'http://localhost:3000/applicationStatusHistory';
  constructor(private http: HttpClient) {}

  findAll(): Observable<ApplicationStatusHistory[]> { return this.http.get<ApplicationStatusHistory[]>(this.url); }
  getById(id: string): Observable<ApplicationStatusHistory> { return this.http.get<ApplicationStatusHistory>(`${this.url}/${id}`); }
  save(h: ApplicationStatusHistory): Observable<ApplicationStatusHistory> { return this.http.post<ApplicationStatusHistory>(this.url, h); }
  update(id: string, h: ApplicationStatusHistory): Observable<ApplicationStatusHistory> { return this.http.put<ApplicationStatusHistory>(`${this.url}/${id}`, h); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}