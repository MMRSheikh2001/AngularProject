import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatModel } from '../models/chat';


@Injectable({ providedIn: 'root' })
export class ChatService {
  private url = 'http://localhost:3000/chats';
  constructor(private http: HttpClient) { }

  findAll(): Observable<ChatModel[]> { return this.http.get<ChatModel[]>(this.url); }
  getById(id: string): Observable<ChatModel> { return this.http.get<ChatModel>(`${this.url}/${id}`); }
  save(chat: ChatModel): Observable<ChatModel> { return this.http.post<ChatModel>(this.url, chat); }
  update(id: string, chat: ChatModel): Observable<ChatModel> { return this.http.put<ChatModel>(`${this.url}/${id}`, chat); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.url}/${id}`); }

  findByOrderId(orderId: string): Observable<ChatModel[]> {
    return this.http.get<ChatModel[]>(`${this.url}?orderId=${orderId}`);
  }
  findActiveChats(): Observable<ChatModel[]> {
    return this.http.get<ChatModel[]>(`${this.url}?isActive=true`);
  }
  findExpiredChats(): Observable<ChatModel[]> {
    return this.http.get<ChatModel[]>(`${this.url}?isActive=false`);
  }
}