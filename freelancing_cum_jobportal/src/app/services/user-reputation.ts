import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReputation } from '../models/user-reputation';

@Injectable({ providedIn: 'root' })
export class UserReputationService {
  private url = 'http://localhost:3000/userReputations';
  constructor(private http: HttpClient) {}

  findAll(): Observable<UserReputation[]> { return this.http.get<UserReputation[]>(this.url); }
  getById(id: string): Observable<UserReputation> { return this.http.get<UserReputation>(`${this.url}/${id}`); }
  save(r: UserReputation): Observable<UserReputation> { return this.http.post<UserReputation>(this.url, r); }
  update(id: string, r: UserReputation): Observable<UserReputation> { return this.http.put<UserReputation>(`${this.url}/${id}`, r); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}