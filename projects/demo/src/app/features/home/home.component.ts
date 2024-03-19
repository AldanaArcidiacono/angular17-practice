import { Component } from '@angular/core';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent],
  template: ` <h2>Home</h2>
    <isdi-greetings></isdi-greetings>`,
  styles: `
    h2 {
      font-size: 1.5rem;
      color: var(--gray-900);
      font-weight: 500;
      line-height: 100%;
      letter-spacing: -0.125rem;
      margin-top: 1rem;
      font-family:
        'Inter Tight',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Helvetica,
        Arial,
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol';
    }
  `,
})
export class HomeComponent {}
