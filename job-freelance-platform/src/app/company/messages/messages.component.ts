import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-messages',
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html'
})
export class CompanyMessagesComponent {
  selectedConversation: number = 1;
  newMessage: string = '';

  conversations = [
    { id: 1, name: 'Mahbub Rahman', lastMessage: 'Sure, I will send the files.', time: '2:30 PM', unread: 1, initial: 'M' },
    { id: 2, name: 'Tanvir Ahmed', lastMessage: 'Can we schedule a call?', time: '11:00 AM', unread: 0, initial: 'T' }
  ];

  messages: Record<number, any[]> = {
    1: [
      { id: 1, text: 'Hello Mahbub, we reviewed your application.', sent: true, time: '2:00 PM' },
      { id: 2, text: 'Thank you! I am interested.', sent: false, time: '2:15 PM' },
      { id: 3, text: 'Sure, I will send the files.', sent: false, time: '2:30 PM' }
    ],
    2: [
      { id: 1, text: 'Hi Tanvir, is the design ready?', sent: true, time: '10:00 AM' },
      { id: 2, text: 'Can we schedule a call?', sent: false, time: '11:00 AM' }
    ]
  };

  get activeMessages() { return this.messages[this.selectedConversation] || []; }
  get activeConversation() { return this.conversations.find(c => c.id === this.selectedConversation); }

  selectConversation(id: number): void {
    this.selectedConversation = id;
    const conv = this.conversations.find(c => c.id === id);
    if (conv) conv.unread = 0;
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) return;
    if (!this.messages[this.selectedConversation]) this.messages[this.selectedConversation] = [];
    this.messages[this.selectedConversation].push({ id: Date.now(), text: this.newMessage.trim(), sent: true, time: 'Now' });
    this.newMessage = '';
  }
}
