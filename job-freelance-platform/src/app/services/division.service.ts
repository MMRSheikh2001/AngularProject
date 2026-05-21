import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { DivisionModel } from '../models/division.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {



  private Url: string = environment.apiUrl + 'divisions';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<DivisionModel[]> {
    return this.http.get<DivisionModel[]>(this.Url);
  }

  save(model: DivisionModel) {
    return this.http.post<DivisionModel>(this.Url, model);
  }
  delete(id: string) {
    return this.http.delete<DivisionModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<DivisionModel> {
    return this.http.get<DivisionModel>(this.Url + '/' + id);
  }
  update(model: DivisionModel,): Observable<DivisionModel> {
    return this.http.put<DivisionModel>(this.Url + '/' + model.id, model)
  }

  getByCountry(countryId: string): Observable<DivisionModel[]> {
    return this.http.get<DivisionModel[]>(this.Url + '?countryId=' + countryId);
  }



}
