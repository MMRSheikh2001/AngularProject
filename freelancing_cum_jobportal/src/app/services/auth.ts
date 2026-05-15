import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private url = 'http://localhost:3000/users';
  private STORAGE_KEY = 'workbridge_user';

  constructor(private http: HttpClient) { }

  // ─── Original 5 CRUD Methods ──────────────────────────────────

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

  // ─── Additional Filter Methods ────────────────────────────────

  findByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}?email=${email}&isDeleted=false`);
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

  // ─── Register ─────────────────────────────────────────────────
  // Role is ALWAYS forced to 'user' — admin cannot be registered
  register(data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    area: string;
  }): Observable<{ success: boolean; message: string; user?: User }> {
    return this.registerUser(data);
  }
  registerUser(data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    area: string;
  }): Observable<{ success: boolean; message: string; user?: User }> {

    return new Observable(observer => {

      // Step 1 — Check if email already taken
      this.findByEmail(data.email).subscribe({
        next: (existing) => {

          if (existing.length > 0) {
            observer.next({ success: false, message: 'Email already registered. Please login.' });
            observer.complete();
            return;
          }

          // Step 2 — Build new user
          // role and isSuperAdmin are HARDCODED — frontend cannot override
          const newUser: User = {
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            password: data.password,
            phone: data.phone.trim(),
            city: data.city,
            area: data.area.trim(),
            profileImage: `https://i.pravatar.cc/150?u=${data.email}`,
            isVerified: false,
            status: 'active',
            isDeleted: false,
            createdAt: new Date().toISOString(),
            role: 'user',          // FORCED — always user
            isSuperAdmin: false,   // FORCED — always false
          };

          // Step 3 — Save to JSON Server
          this.save(newUser).subscribe({
            next: (savedUser) => {
              // Store in localStorage (without password)
              this.storeUser(savedUser);
              observer.next({ success: true, message: 'Registration successful!', user: savedUser });
              observer.complete();
            },
            error: (err) => {
              observer.next({ success: false, message: 'Registration failed. Try again.' });
              observer.complete();
            }
          });
        },
        error: () => {
          observer.next({ success: false, message: 'Server error. Is JSON Server running?' });
          observer.complete();
        }
      });
    });
  }

  // ─── Login ────────────────────────────────────────────────────
  // Validates BOTH email AND password

  login(email: string, password: string): Observable<{ success: boolean; message: string; user?: User }> {

    return new Observable(observer => {

      // Step 1 — Find user by email
      this.findByEmail(email.trim().toLowerCase()).subscribe({
        next: (users) => {

          if (users.length === 0) {
            observer.next({ success: false, message: 'Email not found. Please register.' });
            observer.complete();
            return;
          }

          const user = users[0];

          // Step 2 — Check account status
          if (user.isDeleted) {
            observer.next({ success: false, message: 'This account has been deleted.' });
            observer.complete();
            return;
          }

          if (user.status === 'banned') {
            observer.next({ success: false, message: 'Your account has been banned. Contact support.' });
            observer.complete();
            return;
          }

          if (user.status === 'suspended') {
            observer.next({ success: false, message: 'Your account is suspended. Contact support.' });
            observer.complete();
            return;
          }

          // Step 3 — Validate password
          // NOTE: JSON Server has no encryption — plain text comparison
          // Spring Boot will use BCrypt when you switch backends
          if (user.password !== password) {
            observer.next({ success: false, message: 'Incorrect password. Please try again.' });
            observer.complete();
            return;
          }

          // Step 4 — Store user and return success
          this.storeUser(user);
          observer.next({ success: true, message: 'Login successful!', user });
          observer.complete();
        },
        error: () => {
          observer.next({ success: false, message: 'Server error. Is JSON Server running?' });
          observer.complete();
        }
      });
    });
  }

  // ─── Session Management ───────────────────────────────────────

  storeUser(user: User): void {
    // Store user WITHOUT password for security
    const safeUser = { ...user };
    delete (safeUser as any).password;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(safeUser));
  }

  getCurrentUser(): User | null {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return null;
    try {
      return JSON.parse(data) as User;
    } catch {
      return null;
    }
  }

  getCurrentUserId(): string | undefined {
    return this.getCurrentUser()?.id;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // ─── Role Checks ──────────────────────────────────────────────

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  isAdmin(): boolean {
    return this.getCurrentUser()?.role === 'admin';
  }

  isSuperAdmin(): boolean {
    return this.getCurrentUser()?.isSuperAdmin === true;
  }

  isUser(): boolean {
    return this.getCurrentUser()?.role === 'user';
  }
}