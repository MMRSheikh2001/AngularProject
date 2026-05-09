import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HiringPipeline } from '../models/hiring-pipeline';

@Injectable({ providedIn: 'root' })
export class HiringPipelineService {
  private url = 'http://localhost:3000/hiringPipeline';
  constructor(private http: HttpClient) {}

  findAll(): Observable<HiringPipeline[]> { return this.http.get<HiringPipeline[]>(this.url); }
  getById(id: string): Observable<HiringPipeline> { return this.http.get<HiringPipeline>(`${this.url}/${id}`); }
  save(p: HiringPipeline): Observable<HiringPipeline> { return this.http.post<HiringPipeline>(this.url, p); }
  update(id: string, p: HiringPipeline): Observable<HiringPipeline> { return this.http.put<HiringPipeline>(`${this.url}/${id}`, p); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}