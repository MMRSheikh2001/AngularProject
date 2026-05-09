import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSession } from '../models/user-session';

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  private url = 'http://localhost:3000/userSessions';
  constructor(private http: HttpClient) {}

  findAll(): Observable<UserSession[]> { return this.http.get<UserSession[]>(this.url); }
  getById(id: string): Observable<UserSession> { return this.http.get<UserSession>(`${this.url}/${id}`); }
  save(session: UserSession): Observable<UserSession> { return this.http.post<UserSession>(this.url, session); }
  update(id: string, session: UserSession): Observable<UserSession> { return this.http.put<UserSession>(`${this.url}/${id}`, session); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}