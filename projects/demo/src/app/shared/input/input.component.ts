import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-input',
  standalone: true,
  imports: [FormsModule],
  template: ` <div class="input-content">
    <label [for]="labelFor">
      <span class="label-text">{{ labelText }}</span>
      <input
        type="text"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        (ngModelChange)="onInputChange($event)"
      />
    </label>
  </div>`,
  styles: `
    input {
      background-color: var(--my-pink);
      border-radius: 6px;
      border-style: none;
      border-width: 0;
      color: var(--my-pink-strong);
      font-size: 1rem;
      font-weight: 500;
      height: 30px;
      line-height: 100%;
      letter-spacing: -0.08rem;
      margin-left: 0.5rem;
      padding-left: 0.5rem;
    }
    input:focus {
      outline: 1.5px solid var(--my-pink-strong);
    }
    label {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 100%;
      letter-spacing: -0.125rem;
    }
  `,
})
export class InputComponent {
  @Input({ required: true }) labelFor = '';
  @Input({ required: true }) labelText = '';
  @Input({ required: true }) placeholder = '';
  @Input() value: unknown;

  // Emits events when the value is changed
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(newValue: string) {
    this.value = newValue;
    // Emits the new value, to the parent component
    this.valueChange.emit(newValue);
  }
}
