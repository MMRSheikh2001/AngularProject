import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private url = 'http://localhost:3000/transactions';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Transaction[]> { return this.http.get<Transaction[]>(this.url); }
  getById(id: string): Observable<Transaction> { return this.http.get<Transaction>(`${this.url}/${id}`); }
  save(t: Transaction): Observable<Transaction> { return this.http.post<Transaction>(this.url, t); }
  update(id: string, t: Transaction): Observable<Transaction> { return this.http.put<Transaction>(`${this.url}/${id}`, t); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}