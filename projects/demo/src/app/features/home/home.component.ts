import { Component } from '@angular/core';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent, CounterListComponent, ButtonComponent],
  template: `
    <div class="home">
      <div class="app">
        <h2>App Component</h2>

        <nav>
          @for (page of pages; track $index) {
            <isdi-button [btnText]="page" (buttonClick)="selectPage(page)" />
          }
        </nav>
      </div>

      <div class="content">
        <h2>Home</h2>
        @if (currentPage === 'Greetings') {
          <isdi-greetings />
        } @else {
          <isdi-counter-list />
        }
      </div>
    </div>
  `,
  styles: `
    .home {
      margin-inline: 2rem;
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
      isdi-button:first-child {
        margin-right: 10px;
      }
      .content {
        margin-top: 2.5rem;
      }
    }
  `,
})
export class HomeComponent {
  pages: string[] = ['Greetings', 'Counter'];
  currentPage: string = 'Greetings';

  selectPage(page: string) {
    this.currentPage = page;
  }
}
