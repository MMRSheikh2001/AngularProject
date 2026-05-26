import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extracurricular',
  imports: [CommonModule],
  templateUrl: './extracurricular.html',
  styleUrl: './extracurricular.css',
})
export class Extracurricular {
  activities = [
    { name: 'Debate Club', role: 'President', desc: 'Organized national level debate competitions.' }
  ];
}
