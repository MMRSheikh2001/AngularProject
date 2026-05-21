import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [],
  templateUrl: './stats-card.component.html'
})
export class StatsCardComponent {
  @Input() title: string = 'Stat';
  @Input() value: string = '0';
  @Input() icon: string = 'bi-bar-chart';
  @Input() color: string = 'primary';
}
