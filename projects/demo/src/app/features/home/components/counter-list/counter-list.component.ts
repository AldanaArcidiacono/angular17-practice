import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'isdi-counter-list',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h3>Counter List</h3>

    <div>
      <p>Total: {{ totalCounter }}</p>
      <p>Clicks: {{ totalClicks }}</p>
    </div>

    <div class="counter-list">
      @for (item of ['A', 'B', 'C']; track $index) {
        <isdi-counter [index]="item" (countEvent)="setTotals($event)" />
      }
    </div>
  `,
  styles: `
    .total,
    .clicks,
    .counter-list {
      align-items: center;
      display: flex;
    }
    .counter-list {
      justify-content: space-between;
      margin-inline: 3rem;
    }
  `,
})
export class CounterListComponent {
  totalCounter = 0;
  totalClicks = 0;

  setTotals(value: number) {
    this.totalCounter += value;
    this.totalClicks++;
  }
}
