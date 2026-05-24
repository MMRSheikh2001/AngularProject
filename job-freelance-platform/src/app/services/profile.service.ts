import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import {
  UserProfile, Education, Experience, Training,
  UserSkill, UserLanguage, Portfolio, Reference,
  Extracurricular, ResumeSnapshot
} from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // UserProfile
  getProfileByUserId(userId: string | number): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.baseUrl}userProfiles?userId=${userId}`);
  }
  
  saveProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${this.baseUrl}userProfiles`, profile);
  }

  updateProfile(id: string | number, profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.baseUrl}userProfiles/${id}`, profile);
  }

  // Education
  getEducationsByProfileId(profileId: string | number): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseUrl}educations?userProfileId=${profileId}`);
  }

  saveEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.baseUrl}educations`, education);
  }

  deleteEducation(id: string | number): Observable<any> {
    return this.http.delete(`${this.baseUrl}educations/${id}`);
  }

  // Experience
  getExperiencesByProfileId(profileId: string | number): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}experiences?userProfileId=${profileId}`);
  }

  saveExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.baseUrl}experiences`, experience);
  }

  deleteExperience(id: string | number): Observable<any> {
    return this.http.delete(`${this.baseUrl}experiences/${id}`);
  }

  // Training
  getTrainingsByProfileId(profileId: string | number): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.baseUrl}trainings?userProfileId=${profileId}`);
  }

  // Skills
  getSkillsByProfileId(profileId: string | number): Observable<UserSkill[]> {
    return this.http.get<UserSkill[]>(`${this.baseUrl}skills?userProfileId=${profileId}`);
  }

  // Add more methods as needed for Portfolio, Reference, Extracurricular, ResumeSnapshot
}
