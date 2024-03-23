import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [LogoComponent],
  template: ` <header>
    <div class="title">
      <isdi-logo [options]="{ side: '5rem' }"></isdi-logo>
      <h1>{{ title }}</h1>
    </div>
    <!-- Child Component -->
    <ng-content></ng-content>
  </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Props
  @Input({ required: true }) title = '';
}
