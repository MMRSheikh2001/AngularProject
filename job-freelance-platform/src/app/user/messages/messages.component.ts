import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-messages',
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html'
})
export class UserMessagesComponent {
  selectedConversation: number = 1;
  newMessage: string = '';

  conversations = [
    { id: 1, name: 'TechCorp HR', lastMessage: 'Thanks for applying!', time: '2:30 PM', unread: 2, initial: 'T' },
    { id: 2, name: 'StartupBD', lastMessage: 'Can you deliver by Friday?', time: '11:00 AM', unread: 0, initial: 'S' },
    { id: 3, name: 'Creative Studio', lastMessage: 'We reviewed your portfolio.', time: 'Yesterday', unread: 1, initial: 'C' }
  ];

  messages: Record<number, any[]> = {
    1: [
      { id: 1, text: 'Hi, we reviewed your application for the React Developer role.', sent: false, time: '2:00 PM' },
      { id: 2, text: 'Thank you! I am very interested in the position.', sent: true, time: '2:10 PM' },
      { id: 3, text: 'Thanks for applying! We would like to schedule an interview.', sent: false, time: '2:30 PM' }
    ],
    2: [
      { id: 1, text: 'Hello! I placed an order for logo design.', sent: false, time: '10:00 AM' },
      { id: 2, text: 'Hi! Yes, I received the order. Working on it now.', sent: true, time: '10:30 AM' },
      { id: 3, text: 'Can you deliver by Friday?', sent: false, time: '11:00 AM' }
    ],
    3: [
      { id: 1, text: 'We reviewed your portfolio and are impressed.', sent: false, time: 'Yesterday' }
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
