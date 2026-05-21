import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoliceStationModel } from '../models/policeStation.model';

@Injectable({
  providedIn: 'root',
})
export class PoliceStationService {



  private Url: string = environment.apiUrl + 'policeStations';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<PoliceStationModel[]> {
    return this.http.get<PoliceStationModel[]>(this.Url);
  }

  save(model: PoliceStationModel) {
    return this.http.post<PoliceStationModel>(this.Url, model);
  }
  delete(id: string) {
    return this.http.delete<PoliceStationModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<PoliceStationModel> {
    return this.http.get<PoliceStationModel>(this.Url + '/' + id);
  }
  update(model: PoliceStationModel,): Observable<PoliceStationModel> {
    return this.http.put<PoliceStationModel>(this.Url + '/' + model.id, model)
  }


    getByDistrict(districtId: string): Observable<PoliceStationModel[]> {
    return this.http.get<PoliceStationModel[]>(this.Url + '?districtId=' + districtId);
  }



}
