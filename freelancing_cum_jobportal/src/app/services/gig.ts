import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gig } from '../models/gig';

@Injectable({ providedIn: 'root' })
export class GigService {
  private url = 'http://localhost:3000/gigs';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Gig[]> { return this.http.get<Gig[]>(this.url); }
  getById(id: string): Observable<Gig> { return this.http.get<Gig>(`${this.url}/${id}`); }
  save(gig: Gig): Observable<Gig> { return this.http.post<Gig>(this.url, gig); }
  update(id: string, gig: Gig): Observable<Gig> { return this.http.put<Gig>(`${this.url}/${id}`, gig); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}