import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  private Url: string = environment.apiUrl + 'users';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.Url);
  }

  save(user: UserModel) {
    return this.http.post<UserModel>(this.Url, user);
  }
  delete(id: string) {
    return this.http.delete<UserModel>(this.Url + '/' + id);
  }

  getById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.Url + '/' + id);
  }
  update(user: UserModel,): Observable<UserModel> {
    return this.http.put<UserModel>(this.Url + '/' + user.id, user)
  }

  getUserByEmail(email: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.Url}?email=${email}`);
  }





}
