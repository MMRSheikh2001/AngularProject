import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HiringPipeline } from '../models/hiring-pipeline';

@Injectable({ providedIn: 'root' })
export class HiringPipelineService {
  private url = 'http://localhost:3000/hiringPipeline';
  constructor(private http: HttpClient) { }

  findAll(): Observable<HiringPipeline[]> { return this.http.get<HiringPipeline[]>(this.url); }
  getById(id: string): Observable<HiringPipeline> { return this.http.get<HiringPipeline>(`${this.url}/${id}`); }
  save(p: HiringPipeline): Observable<HiringPipeline> { return this.http.post<HiringPipeline>(this.url, p); }
  update(id: string, p: HiringPipeline): Observable<HiringPipeline> { return this.http.put<HiringPipeline>(`${this.url}/${id}`, p); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }

  findByJobId(jobId: string): Observable<HiringPipeline[]> {
    return this.http.get<HiringPipeline[]>(`${this.url}?jobId=${jobId}`);
  }
  findByApplicantId(applicantId: string): Observable<HiringPipeline[]> {
    return this.http.get<HiringPipeline[]>(`${this.url}?applicantId=${applicantId}`);
  }
  findByStage(stage: string): Observable<HiringPipeline[]> {
    return this.http.get<HiringPipeline[]>(`${this.url}?stage=${stage}`);
  }
  findByJobIdAndStage(jobId: string, stage: string): Observable<HiringPipeline[]> {
    return this.http.get<HiringPipeline[]>(`${this.url}?jobId=${jobId}&stage=${stage}`);
  }
  findByJobIdAndApplicantId(jobId: string, applicantId: string): Observable<HiringPipeline[]> {
    return this.http.get<HiringPipeline[]>(`${this.url}?jobId=${jobId}&applicantId=${applicantId}`);
  }
}