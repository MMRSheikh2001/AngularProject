import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSession } from '../models/user-session';

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  private url = 'http://localhost:3000/userSessions';
  constructor(private http: HttpClient) { }

  findAll(): Observable<UserSession[]> { return this.http.get<UserSession[]>(this.url); }
  getById(id: string): Observable<UserSession> { return this.http.get<UserSession>(`${this.url}/${id}`); }
  save(session: UserSession): Observable<UserSession> { return this.http.post<UserSession>(this.url, session); }
  update(id: string, session: UserSession): Observable<UserSession> { return this.http.put<UserSession>(`${this.url}/${id}`, session); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }

  findByUserId(userId: string): Observable<UserSession[]> {
    return this.http.get<UserSession[]>(`${this.url}?userId=${userId}`);
  }
  findByToken(token: string): Observable<UserSession[]> {
    return this.http.get<UserSession[]>(`${this.url}?jwtToken=${token}`);
  }
  deleteAllByUserId(userId: string): Observable<void>[] {
    // Get all sessions for user first then delete each
    return [];
  }
  findActiveByUserId(userId: string): Observable<UserSession[]> {
    const now = new Date().toISOString();
    return this.http.get<UserSession[]>(`${this.url}?userId=${userId}`);
  }
}