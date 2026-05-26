import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {
  languages = [
    { name: 'Bengali', level: 'Native' },
    { name: 'English', level: 'Fluent' }
  ];
}
