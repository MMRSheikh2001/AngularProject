import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private url = 'http://localhost:3000/chats';
  constructor(private http: HttpClient) {}

  findAll(): Observable<Chat[]> { return this.http.get<Chat[]>(this.url); }
  getById(id: string): Observable<Chat> { return this.http.get<Chat>(`${this.url}/${id}`); }
  save(chat: Chat): Observable<Chat> { return this.http.post<Chat>(this.url, chat); }
  update(id: string, chat: Chat): Observable<Chat> { return this.http.put<Chat>(`${this.url}/${id}`, chat); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }
}