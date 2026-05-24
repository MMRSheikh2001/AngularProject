import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Wallet, Transaction } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWalletByUser(userId: string | number): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(`${this.baseUrl}wallets?userId=${userId}`);
  }

  createWallet(wallet: Wallet): Observable<Wallet> {
    return this.http.post<Wallet>(`${this.baseUrl}wallets`, wallet);
  }

  updateWallet(id: string | number, wallet: Partial<Wallet>): Observable<Wallet> {
    return this.http.patch<Wallet>(`${this.baseUrl}wallets/${id}`, wallet);
  }

  getTransactionsByWallet(walletId: string | number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}transactions?walletId=${walletId}`);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}transactions`, transaction);
  }
}
