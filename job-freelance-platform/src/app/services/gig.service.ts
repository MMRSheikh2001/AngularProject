import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Gig, GigOrder, Review } from '../models/gig.model';

@Injectable({
  providedIn: 'root'
})
export class GigService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Gigs
  getAllGigs(): Observable<Gig[]> {
    return this.http.get<Gig[]>(`${this.baseUrl}gigs?_expand=freelancer&_expand=category`);
  }

  getGigById(id: string | number): Observable<Gig> {
    return this.http.get<Gig>(`${this.baseUrl}gigs/${id}?_expand=freelancer&_expand=category`);
  }

  getGigsByFreelancer(freelancerId: string | number): Observable<Gig[]> {
    return this.http.get<Gig[]>(`${this.baseUrl}gigs?freelancerId=${freelancerId}`);
  }

  saveGig(gig: Gig): Observable<Gig> {
    return this.http.post<Gig>(`${this.baseUrl}gigs`, gig);
  }

  updateGig(id: string | number, gig: Gig): Observable<Gig> {
    return this.http.put<Gig>(`${this.baseUrl}gigs/${id}`, gig);
  }

  // Gig Orders
  placeOrder(order: GigOrder): Observable<GigOrder> {
    return this.http.post<GigOrder>(`${this.baseUrl}gigOrders`, order);
  }

  getOrdersByBuyer(buyerId: string | number): Observable<GigOrder[]> {
    return this.http.get<GigOrder[]>(`${this.baseUrl}gigOrders?buyerId=${buyerId}&_expand=gig`);
  }

  getOrdersByFreelancer(freelancerId: string | number): Observable<GigOrder[]> {
    return this.http.get<GigOrder[]>(`${this.baseUrl}gigOrders?freelancerId=${freelancerId}&_expand=gig`);
  }

  updateOrderStatus(id: string | number, updateData: Partial<GigOrder>): Observable<GigOrder> {
    return this.http.patch<GigOrder>(`${this.baseUrl}gigOrders/${id}`, updateData);
  }
}
