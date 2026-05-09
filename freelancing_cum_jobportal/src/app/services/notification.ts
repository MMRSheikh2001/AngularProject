import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private url = 'http://localhost:3000/notifications';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Notification[]> { return this.http.get<Notification[]>(this.url); }
  getById(id: string): Observable<Notification> { return this.http.get<Notification>(`${this.url}/${id}`); }
  save(n: Notification): Observable<Notification> { return this.http.post<Notification>(this.url, n); }
  update(id: string, n: Notification): Observable<Notification> { return this.http.put<Notification>(`${this.url}/${id}`, n); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}