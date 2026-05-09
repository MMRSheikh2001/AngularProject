import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Order[]> { return this.http.get<Order[]>(this.url); }
  getById(id: string): Observable<Order> { return this.http.get<Order>(`${this.url}/${id}`); }
  save(order: Order): Observable<Order> { return this.http.post<Order>(this.url, order); }
  update(id: string, order: Order): Observable<Order> { return this.http.put<Order>(`${this.url}/${id}`, order); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}