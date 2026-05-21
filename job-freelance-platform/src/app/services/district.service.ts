import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DistrictModel } from '../models/district.model';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {


  private Url: string = environment.apiUrl + 'districts';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<DistrictModel[]> {
    return this.http.get<DistrictModel[]>(this.Url);
  }

  save(model: DistrictModel) {
    return this.http.post<DistrictModel>(this.Url, model);
  }
  delete(id: string) {
    return this.http.delete<DistrictModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<DistrictModel> {
    return this.http.get<DistrictModel>(this.Url + '/' + id);
  }
  update(model: DistrictModel,): Observable<DistrictModel> {
    return this.http.put<DistrictModel>(this.Url + '/' + model.id, model)
  }

    getByDivision(divisionId: string): Observable<DistrictModel[]> {
      return this.http.get<DistrictModel[]>(this.Url + '?divisionId=' + divisionId);
    }

}
