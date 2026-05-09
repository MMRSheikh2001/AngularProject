import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispute } from '../models/dispute';

@Injectable({ providedIn: 'root' })
export class DisputeService {
  private url = 'http://localhost:3000/disputes';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Dispute[]> { return this.http.get<Dispute[]>(this.url); }
  getById(id: string): Observable<Dispute> { return this.http.get<Dispute>(`${this.url}/${id}`); }
  save(d: Dispute): Observable<Dispute> { return this.http.post<Dispute>(this.url, d); }
  update(id: string, d: Dispute): Observable<Dispute> { return this.http.put<Dispute>(`${this.url}/${id}`, d); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}