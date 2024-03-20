import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: ` <header>
    <h1>{{ title }}</h1>
    <!-- Child Component -->
    <ng-content></ng-content>
  </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Props
  @Input({ required: true }) title = '';
}
