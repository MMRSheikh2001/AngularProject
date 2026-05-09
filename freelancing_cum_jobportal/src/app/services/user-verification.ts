import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserVerification } from '../models/user-verification';

@Injectable({ providedIn: 'root' })
export class UserVerificationService {
  private url = 'http://localhost:3000/userVerifications';
  constructor(private http: HttpClient) {}

  findAll(): Observable<UserVerification[]> { return this.http.get<UserVerification[]>(this.url); }
  getById(id: string): Observable<UserVerification> { return this.http.get<UserVerification>(`${this.url}/${id}`); }
  save(v: UserVerification): Observable<UserVerification> { return this.http.post<UserVerification>(this.url, v); }
  update(id: string, v: UserVerification): Observable<UserVerification> { return this.http.put<UserVerification>(`${this.url}/${id}`, v); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}