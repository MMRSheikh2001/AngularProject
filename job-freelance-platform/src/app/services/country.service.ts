import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.models';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private Url: string = environment.apiUrl + 'countries';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.Url);
  }

  save(model: CountryModel) {
    return this.http.post<CountryModel>(this.Url, model);
  }
  delete(id: string) {
    return this.http.delete<CountryModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<CountryModel> {
    return this.http.get<CountryModel>(this.Url + '/' + id);
  }
  update(model: CountryModel,): Observable<CountryModel> {
    return this.http.put<CountryModel>(this.Url + '/' + model.id, model)
  }





}
