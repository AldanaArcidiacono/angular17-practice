import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'isdi-button',
  standalone: true,
  imports: [],
  template: `<button (click)="onButtonClick()">{{ btnText }}</button>`,
  styles: `
    button {
      all: unset;
      background-color: var(--my-pink);
      border-radius: 6px;
      color: var(--my-pink-strong);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.3rem 0.5rem;
    }
    button:hover {
      background-color: var(--my-pink-mid);
      color: white;
    }
  `,
})
export class ButtonComponent {
  @Input({ required: true }) btnText = '';

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    // Emits the event click of the button to the parent component
    this.buttonClick.emit();
  }
}
