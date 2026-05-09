import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Withdrawal } from '../models/withdrawal';

@Injectable({ providedIn: 'root' })
export class WithdrawalService {
  private url = 'http://localhost:3000/withdrawals';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Withdrawal[]> { return this.http.get<Withdrawal[]>(this.url); }
  getById(id: string): Observable<Withdrawal> { return this.http.get<Withdrawal>(`${this.url}/${id}`); }
  save(w: Withdrawal): Observable<Withdrawal> { return this.http.post<Withdrawal>(this.url, w); }
  update(id: string, w: Withdrawal): Observable<Withdrawal> { return this.http.put<Withdrawal>(`${this.url}/${id}`, w); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}