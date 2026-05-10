import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private url = 'http://localhost:3000/users';
  private STORAGE_KEY = 'workbridge_user';

  constructor(private http: HttpClient) { }

  // ── Original 5 Methods ────────────────────────────────

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, user);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // ── Additional Filter Methods ─────────────────────────

  findByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?email=${email}`);
  }

  findByStatus(status: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?status=${status}`);
  }

  findByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?role=${role}`);
  }

  findAdmins(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?role=admin`);
  }

  findActive(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?isDeleted=false&status=active`);
  }

  searchByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?name_like=${name}`);
  }

  // ── Auth Methods ──────────────────────────────────────

  register(userData: Omit<User, 'id' | 'role' | 'isSuperAdmin'>): Observable<User> {
    const newUser: User = {
      ...userData,
      role: 'user',
      isSuperAdmin: false,
      isVerified: false,
      isDeleted: false,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    return this.http.post<User>(this.url, newUser).pipe(
      tap(user => this.storeUser(user))
    );
  }

  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.url}?email=${email}`).pipe(
      map(users => {
        const user = users.find(u => u.email === email);
        if (user) {
          this.storeUser(user);
          return user;
        }
        return null;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  storeUser(user: User): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  getStoredUser(): User | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return this.getStoredUser() !== null;
  }

  isAdmin(): boolean {
    const user = this.getStoredUser();
    return user?.role === 'admin';
  }

  isSuperAdmin(): boolean {
    const user = this.getStoredUser();
    return user?.isSuperAdmin === true;
  }

  getCurrentUserId(): string | undefined {
    return this.getStoredUser()?.id;
  }

  getCurrentUser(): User | null {
    return this.getStoredUser();
  }
}