import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.component.html'
})
export class EmptyStateComponent {
  @Input() icon: string = 'bi-inbox';
  @Input() title: string = 'Nothing here yet';
  @Input() message: string = 'No results found.';
}
