import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  @Output() searchSubmit = new EventEmitter<string>();

  query: string = '';

  onSearch(): void {
    this.searchSubmit.emit(this.query.trim());
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}
