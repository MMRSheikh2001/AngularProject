import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisputeEvidence } from '../models/dispute-evidence';

@Injectable({ providedIn: 'root' })
export class DisputeEvidenceService {
  private url = 'http://localhost:3000/disputeEvidence';
  constructor(private http: HttpClient) {}

  findAll(): Observable<DisputeEvidence[]> { return this.http.get<DisputeEvidence[]>(this.url); }
  getById(id: string): Observable<DisputeEvidence> { return this.http.get<DisputeEvidence>(`${this.url}/${id}`); }
  save(e: DisputeEvidence): Observable<DisputeEvidence> { return this.http.post<DisputeEvidence>(this.url, e); }
  update(id: string, e: DisputeEvidence): Observable<DisputeEvidence> { return this.http.put<DisputeEvidence>(`${this.url}/${id}`, e); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}