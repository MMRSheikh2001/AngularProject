import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressModel } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {



  private Url: string = environment.apiUrl + 'addresses';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<AddressModel[]> {
    return this.http.get<AddressModel[]>(this.Url);
  }

  save(model: AddressModel) {
    return this.http.post<AddressModel>(this.Url, model);
  }
  delete(id: string) {
    return this.http.delete<AddressModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<AddressModel> {
    return this.http.get<AddressModel>(this.Url + '/' + id);
  }
  update(model: AddressModel,): Observable<AddressModel> {
    return this.http.put<AddressModel>(this.Url + '/' + model.id, model)
  }



}
