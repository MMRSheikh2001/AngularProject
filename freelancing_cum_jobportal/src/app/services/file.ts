import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../models/file';

@Injectable({ providedIn: 'root' })
export class FileService {
  private url = 'http://localhost:3000/files';
  constructor(private http: HttpClient) {}

  findAll(): Observable<File[]> { return this.http.get<File[]>(this.url); }
  getById(id: string): Observable<File> { return this.http.get<File>(`${this.url}/${id}`); }
  save(file: File): Observable<File> { return this.http.post<File>(this.url, file); }
  update(id: string, file: File): Observable<File> { return this.http.put<File>(`${this.url}/${id}`, file); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}