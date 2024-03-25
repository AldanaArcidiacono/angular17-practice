import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';

@Component({
  selector: 'isdi-counter',
  standalone: true,
  imports: [ButtonComponent],
  template: `<div class="counter-container">
    <p>Counter {{ index }}</p>
    <div class="counter">
      <isdi-button btnText="-" (buttonClick)="onClick(-1)" />
      <p>{{ value }}</p>
      <isdi-button btnText="+" (buttonClick)="onClick(1)" />
    </div>
  </div>`,
  styles: `
    .counter-container {
      .counter {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }
    }
  `,
})
export class CounterComponent {
  @Input({ required: true }) index: string = '';
  @Output() countEvent: EventEmitter<number> = new EventEmitter();

  value: number = 0;

  onClick(value: number) {
    this.value += value;
    this.countEvent.emit(value);
  }
}
