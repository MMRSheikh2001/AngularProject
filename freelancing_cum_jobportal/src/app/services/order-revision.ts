import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRevision } from '../models/order-revision';

@Injectable({ providedIn: 'root' })
export class OrderRevisionService {
  private url = 'http://localhost:3000/orderRevisions';
  constructor(private http: HttpClient) {}

  findAll(): Observable<OrderRevision[]> { return this.http.get<OrderRevision[]>(this.url); }
  getById(id: string): Observable<OrderRevision> { return this.http.get<OrderRevision>(`${this.url}/${id}`); }
  save(r: OrderRevision): Observable<OrderRevision> { return this.http.post<OrderRevision>(this.url, r); }
  update(id: string, r: OrderRevision): Observable<OrderRevision> { return this.http.put<OrderRevision>(`${this.url}/${id}`, r); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}